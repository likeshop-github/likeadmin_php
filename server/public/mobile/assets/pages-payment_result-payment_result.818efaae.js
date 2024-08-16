import{_ as e}from"./page-meta.b3972ce3.js";import{d as a,z as t,aT as s,G as r,c as l,I as u,o,g as i,e as m,f as n,w as c,x as p,l as d,t as _,b as f,F as g,v as x,r as y,a as h,a3 as v,p as w}from"./index-6cdd545f.js";import{_ as j}from"./u-empty.0c192938.js";import{_ as b}from"./u-image.08c06e6c.js";import{_ as k}from"./u-button.251e3b87.js";import{g as R,_ as O}from"./pay.aaf51790.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.cdd9a444.js";import"./u-loading.dd55da81.js";const I=E(a({__name:"payment_result",setup(a){const E=x(),I={succeed:{text:"支付成功",image:"/static/images/payment/icon_succeed.png"},waiting:{text:"等待支付",image:"/static/images/payment/icon_waiting.png"}},L=t(s.LOADING),A=t({id:"",from:""}),C=r({order:{}}),G=l((()=>{const e=!!C.pay_status;return I[e?"succeed":"waiting"]})),N=()=>{E.reLaunch("/pages/index/index")},z=()=>{if("recharge"===A.value.from)E.navigateBack()};return u((async e=>{try{if(!e.id)throw new Error("订单不存在");A.value=e,await new Promise(((e,a)=>{R({order_id:A.value.id,from:A.value.from}).then((a=>{Object.assign(C,a),e(a)})).catch((e=>{a(e)}))})),L.value=s.NORMAL}catch(a){console.log(a),L.value=s.ERROR}})),(a,t)=>{const s=y(h("page-meta"),e),r=y(h("u-empty"),j),l=y(h("u-image"),b),u=v,x=w,R=y(h("u-button"),k),E=y(h("page-status"),O);return o(),i(g,null,[m(s,{"page-style":a.$theme.pageStyle},null,8,["page-style"]),n(" 页面状态 "),m(E,{status:L.value},{error:c((()=>[m(r,{text:"订单不存在",mode:"order"})])),default:c((()=>[m(x,{class:"payment-result p-[20rpx]"},{default:c((()=>[m(x,{class:"result bg-white p-[20rpx] rounded-md"},{default:c((()=>[m(x,{class:"flex flex-col items-center my-[40rpx]"},{default:c((()=>[n(" 支付状态图片 "),m(l,{class:"status-image",src:p(G).image,width:"100",height:"100",shape:"circle"},null,8,["src"]),n(" 支付状态文字 "),m(u,{class:"text-2xl font-medium mt-[20rpx]"},{default:c((()=>[d(_(p(G).text),1)])),_:1}),m(x,{class:"text-3xl font-medium mt-[20rpx]"},{default:c((()=>[d(" ¥ "+_(C.order.order_amount),1)])),_:1})])),_:1}),n(" 支付信息 "),m(x,{class:"result-info"},{default:c((()=>[m(x,{class:"result-info__item"},{default:c((()=>[m(u,null,{default:c((()=>[d("订单编号")])),_:1}),m(u,null,{default:c((()=>[d(_(C.order.order_sn),1)])),_:1})])),_:1}),m(x,{class:"result-info__item"},{default:c((()=>[m(u,null,{default:c((()=>[d("付款时间")])),_:1}),m(u,null,{default:c((()=>[d(_(C.order.pay_time),1)])),_:1})])),_:1}),m(x,{class:"result-info__item"},{default:c((()=>[m(u,null,{default:c((()=>[d("支付方式")])),_:1}),C.pay_status?(o(),f(u,{key:0},{default:c((()=>[d(_(C.order.pay_way||"-"),1)])),_:1})):(o(),f(u,{key:1},{default:c((()=>[d("未支付")])),_:1}))])),_:1})])),_:1})])),_:1}),m(x,{class:"mt-[40rpx]"},{default:c((()=>[m(x,{class:"mb-[20rpx]"},{default:c((()=>["recharge"==A.value.from?(o(),f(R,{key:0,type:"primary",shape:"circle","hover-class":"none",onClick:z},{default:c((()=>[d(" 继续充值 ")])),_:1})):n("v-if",!0)])),_:1}),m(x,{class:"mb-[20rpx]"},{default:c((()=>[m(R,{type:"primary",plain:"",shape:"circle","hover-class":"none",onClick:N},{default:c((()=>[d(" 返回首页 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["status"])],64)}}}),[["__scopeId","data-v-bba82a10"]]);export{I as default};