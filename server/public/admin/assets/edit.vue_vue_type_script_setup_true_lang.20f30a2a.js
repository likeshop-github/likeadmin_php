import{J as x,y as O,x as U,K as N,A as Y,E as I}from"./element-plus.32724f3c.js";import{r as m}from"./index.3da0cb60.js";import{P as T}from"./index.e971c32f.js";import{d as G,s as f,$ as L,e as P,o as F,c as B,U as t,L as s,a,S as _,T as A,u as C,K as J,R as S}from"./@vue.67e62321.js";function ie(){return m.get("/setting.storage/lists")}function M(i){return m.post("/setting.storage/setup",i)}function $(i){return m.get("/setting.storage/detail",i)}const j={class:"edit-popup"},z={class:"h-[400px]"},H={class:"form-tips"},Q={key:0},W={class:"w-80"},X={class:"w-80"},Z={class:"w-80"},ee={class:"w-80"},ue=a("div",{class:"form-tips"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),te={class:"w-80"},oe=_("\u505C\u7528"),se=_("\u542F\u7528"),de=G({__name:"edit",emits:["success"],setup(i,{expose:k,emit:y}){const d=f(),c=f(),u=L({engine:"",bucket:"",access_key:"",secret_key:"",domain:"",region:"",status:0}),b=[{name:"\u672C\u5730\u5B58\u50A8",type:"local",tips:"\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570"},{name:"\u4E03\u725B\u4E91\u5B58\u50A8",type:"qiniu",tips:"\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91"},{name:"\u963F\u91CC\u4E91OSS",type:"aliyun",tips:"\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS"},{name:"\u817E\u8BAF\u4E91OSS",type:"qcloud",tips:"\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS"}],D={bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],access_key:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]},E=P(()=>b.find(l=>l.type==u.engine)),V=async()=>{var l,e;await((l=d.value)==null?void 0:l.validate()),await M(u),(e=c.value)==null||e.close(),y("success")},v=async()=>{const l=await $({engine:u.engine});for(const e in l)u[e]=l[e]},h=l=>{var e;u.engine=l,(e=c.value)==null||e.open(),v()},R=()=>{var l;(l=d.value)==null||l.resetFields()};return k({open:h}),(l,e)=>{const p=x,n=O,r=U,w=N,K=Y,q=I;return F(),B("div",j,[t(T,{ref_key:"popupRef",ref:c,title:"\u8BBE\u7F6E\u5B58\u50A8",async:!0,width:"600px",clickModalClose:!0,onConfirm:V,onClose:R},{default:s(()=>[a("div",z,[t(q,null,{default:s(()=>[t(K,{ref_key:"formRef",ref:d,model:u,"label-width":"150px",rules:D},{default:s(()=>[t(n,{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"engine"},{default:s(()=>{var o;return[a("div",null,[t(p,{"model-value":""},{default:s(()=>{var g;return[_(A((g=C(E))==null?void 0:g.name),1)]}),_:1}),a("div",H,A((o=C(E))==null?void 0:o.tips),1)])]}),_:1}),u.engine!=="local"?(F(),B("div",Q,[t(n,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",prop:"bucket"},{default:s(()=>[a("div",W,[t(r,{modelValue:u.bucket,"onUpdate:modelValue":e[0]||(e[0]=o=>u.bucket=o),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)"},null,8,["modelValue"])])]),_:1}),t(n,{label:"ACCESS_KEY\uFF08AK\uFF09",prop:"access_key"},{default:s(()=>[a("div",X,[t(r,{modelValue:u.access_key,"onUpdate:modelValue":e[1]||(e[1]=o=>u.access_key=o),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY"},null,8,["modelValue"])])]),_:1}),t(n,{label:"SECRET_KEY\uFF08SK\uFF09",prop:"secret_key"},{default:s(()=>[a("div",Z,[t(r,{modelValue:u.secret_key,"onUpdate:modelValue":e[2]||(e[2]=o=>u.secret_key=o),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY"},null,8,["modelValue"])])]),_:1}),t(n,{label:"\u7A7A\u95F4\u57DF\u540D\uFF08Domain\uFF09",prop:"domain"},{default:s(()=>[a("div",ee,[a("div",null,[t(r,{modelValue:u.domain,"onUpdate:modelValue":e[3]||(e[3]=o=>u.domain=o),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D"},null,8,["modelValue"])]),ue])]),_:1}),u.engine=="qcloud"?(F(),J(n,{key:0,label:"REGION",prop:"region"},{default:s(()=>[a("div",te,[t(r,{modelValue:u.region,"onUpdate:modelValue":e[4]||(e[4]=o=>u.region=o),placeholder:"\u8BF7\u8F93\u5165region"},null,8,["modelValue"])])]),_:1})):S("",!0)])):S("",!0),t(n,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[t(w,{modelValue:u.status,"onUpdate:modelValue":e[5]||(e[5]=o=>u.status=o)},{default:s(()=>[t(p,{label:0},{default:s(()=>[oe]),_:1}),t(p,{label:1},{default:s(()=>[se]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})])]),_:1},512)])}}});export{de as _,ie as s};
