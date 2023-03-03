import{d as e,z as a,aQ as s,m as t,A as r,W as l,o as u,e as c,h as i,b as d,w as o,g as n,l as m,t as _,c as f,F as p,J as g,H as x,r as y,a as h,y as v,k as b}from"./index.d35e3d3f.js";import{g as w,_ as j,a as k}from"./pay.30807b4d.js";import{_ as O}from"./u-image.61cb41b1.js";import{_ as R}from"./u-button.cd6338bc.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.c0d4d6a2.js";var C=A(e({__name:"payment_result",setup(e){const A={succeed:{text:"支付成功",image:"/static/images/payment/icon_succeed.png"},waiting:{text:"等待支付",image:"/static/images/payment/icon_waiting.png"}},C=a(s.LOADING),E=a({id:"",from:""}),I=t({order:{}}),L=r((()=>{const e=!!I.pay_status;return A[e?"succeed":"waiting"]})),N=()=>{g({url:"/pages/index/index"})},z=()=>{if("recharge"===E.value.from)x({url:"/packages/pages/recharge/recharge"})};return l((async e=>{try{if(!e.id)throw new Error("订单不存在");E.value=e,await new Promise(((e,a)=>{w({order_id:E.value.id,from:E.value.from}).then((a=>{Object.assign(I,a),e(a)})).catch((e=>{a(e)}))})),C.value=s.NORMAL}catch(a){console.log(a),C.value=s.ERROR}})),(e,a)=>{const s=y(h("u-empty"),j),t=y(h("u-image"),O),r=v,l=b,g=y(h("u-button"),R),x=y(h("page-status"),k);return u(),c(p,null,[i(" 页面状态 "),d(x,{status:C.value},{error:o((()=>[d(s,{text:"订单不存在",mode:"order"})])),default:o((()=>[d(l,{class:"payment-result p-[20rpx]"},{default:o((()=>[d(l,{class:"result bg-white p-[20rpx] rounded-md"},{default:o((()=>[d(l,{class:"flex flex-col items-center my-[40rpx]"},{default:o((()=>[i(" 支付状态图片 "),d(t,{class:"status-image",src:n(L).image,width:"100",height:"100",shape:"circle"},null,8,["src"]),i(" 支付状态文字 "),d(r,{class:"text-2xl font-medium mt-[20rpx]"},{default:o((()=>[m(_(n(L).text),1)])),_:1}),d(l,{class:"text-3xl font-medium mt-[20rpx]"},{default:o((()=>[m(" ¥ "+_(I.order.order_amount),1)])),_:1})])),_:1}),i(" 支付信息 "),d(l,{class:"result-info"},{default:o((()=>[d(l,{class:"result-info__item"},{default:o((()=>[d(r,null,{default:o((()=>[m("订单编号")])),_:1}),d(r,null,{default:o((()=>[m(_(I.order.order_sn),1)])),_:1})])),_:1}),d(l,{class:"result-info__item"},{default:o((()=>[d(r,null,{default:o((()=>[m("付款时间")])),_:1}),d(r,null,{default:o((()=>[m(_(I.order.pay_time),1)])),_:1})])),_:1}),d(l,{class:"result-info__item"},{default:o((()=>[d(r,null,{default:o((()=>[m("支付方式")])),_:1}),I.pay_status?(u(),f(r,{key:0},{default:o((()=>[m(_(I.order.pay_way||"-"),1)])),_:1})):(u(),f(r,{key:1},{default:o((()=>[m("未支付")])),_:1}))])),_:1})])),_:1})])),_:1}),d(l,{class:"mt-[40rpx]"},{default:o((()=>[d(l,{class:"mb-[20rpx]"},{default:o((()=>["recharge"==E.value.from?(u(),f(g,{key:0,type:"primary",shape:"circle","hover-class":"none",onClick:z},{default:o((()=>[m(" 继续充值 ")])),_:1})):i("v-if",!0)])),_:1}),d(l,{class:"mb-[20rpx]"},{default:o((()=>[d(g,{type:"primary",plain:"",shape:"circle","hover-class":"none",onClick:N},{default:o((()=>[m(" 返回首页 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["status"])],2112)}}}),[["__scopeId","data-v-514986f8"]]);export{C as default};
