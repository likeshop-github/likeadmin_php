<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\common\logic;


use app\common\enum\PayEnum;
use app\common\enum\YesNoEnum;
use app\common\model\pay\PayWay;
use app\common\model\recharge\RechargeOrder;
use app\common\model\user\User;
use app\common\service\pay\WeChatPayService;


/**
 * 支付逻辑
 * Class PaymentLogic
 * @package app\common\logic
 */
class PaymentLogic extends BaseLogic
{

    /**
     * @notes 支付方式
     * @param $userId
     * @param $terminal
     * @param $params
     * @return array|false
     * @author 段誉
     * @date 2023/2/24 17:53
     */
    public static function getPayWay($userId, $terminal, $params)
    {
        try {
            if ($params['from'] == 'recharge') {
                // 充值
                $order = RechargeOrder::findOrEmpty($params['order_id'])->toArray();
            }

            if (empty($order)) {
                throw new \Exception('待支付订单不存在');
            }

            //获取支付场景
            $pay_way = PayWay::alias('pw')
                ->join('dev_pay_config dp', 'pw.pay_config_id = dp.id')
                ->where(['pw.scene' => $terminal, 'pw.status' => YesNoEnum::YES])
                ->field('dp.id,dp.name,dp.pay_way,dp.icon,dp.sort,dp.remark,pw.is_default')
                ->order('pw.is_default desc,dp.sort desc,id asc')
                ->select()
                ->toArray();

            foreach ($pay_way as $k => &$item) {
                if ($item['pay_way'] == PayEnum::WECHAT_PAY) {
                    $item['extra'] = '微信快捷支付';
                }
                if ($item['pay_way'] == PayEnum::ALI_PAY) {
                    $item['extra'] = '支付宝快捷支付';
                }
                if ($item['pay_way'] == PayEnum::BALANCE_PAY) {
                    $user_money = User::where(['id' => $userId])->value('user_money');
                    $item['extra'] = '可用余额:' . $user_money;
                }
                // 充值时去除余额支付
                if ($params['from'] == 'recharge' && $item['pay_way'] == PayEnum::BALANCE_PAY) {
                    unset($pay_way[$k]);
                }
            }

            return [
                'lists' => array_values($pay_way),
                'order_amount' => $order['order_amount'],
            ];

        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 获取预支付订单信息
     * @param $params
     * @return RechargeOrder|array|false|\think\Model
     * @author 段誉
     * @date 2023/2/27 15:19
     */
    public static function getPayOrderInfo($params)
    {
        try {
            switch ($params['from']) {
                case 'recharge':
                    $order = RechargeOrder::findOrEmpty($params['order_id']);
                    if ($order->isEmpty()) {
                        throw new \Exception('充值订单不存在');
                    }
                    break;
            }

            if ($order['pay_status'] == PayEnum::ISPAID) {
                throw new \Exception('订单已支付');
            }
            return $order;
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 支付
     * @param $payWay
     * @param $from
     * @param $order
     * @param $terminal
     * @return array|false|mixed|string
     * @author 段誉
     * @date 2023/2/28 12:15
     */
    public static function pay($payWay, $from, $order, $terminal)
    {
        //更新支付方式
        switch ($from) {
            case 'recharge':
                RechargeOrder::update(['pay_way' => $payWay], ['id' => $order['id']]);
                break;
        }

        if ($order['order_amount'] == 0) {
            PayNotifyLogic::handle($from, $order['sn']);
            return ['pay_way' => PayEnum::BALANCE_PAY];
        }

        switch ($payWay) {
            case PayEnum::WECHAT_PAY:
                $payService = (new WeChatPayService($terminal, $order['user_id'] ?? null));
                $result = $payService->pay($from, $order);
                break;
            default:
                self::$error = '订单异常';
                $result = false;
        }

        //支付成功, 执行支付回调
        if (false === $result && !self::hasError()) {
            self::setError($payService->getError());
        }
        return $result;
    }

}