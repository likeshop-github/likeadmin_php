import{B as A,C as U,G as q,H as N,v as I,t as S,D as G}from"./element-plus.317dd699.js";import{f as P,h as T,i as z}from"./wx_oa.20be24c5.js";import{P as H}from"./index.3448bf9e.js";import{d as K,s as E,r as L,e as O,$,o as i,c as j,U as t,L as o,a,K as f,R as B,u as J,S as p}from"./@vue.e8706010.js";const M={class:"edit-popup"},Q={class:"flex-1"},W=a("div",{class:"form-tips"},"\u65B9\u4FBF\u901A\u8FC7\u540D\u79F0\u7BA1\u7406\u5173\u6CE8\u56DE\u590D\u5185\u5BB9",-1),X={class:"flex-1"},Y=a("div",{class:"form-tips"},"\u65B9\u4FBF\u901A\u8FC7\u540D\u79F0\u7BA1\u7406\u5173\u6CE8\u56DE\u590D\u5185\u5BB9",-1),Z={class:"flex-1"},ee=p("\u5168\u5339\u914D"),ue=p("\u6A21\u7CCA\u5339\u914D"),te=a("div",{class:"form-tips"},"\u6A21\u7CCA\u5339\u914D\u65F6\uFF0C\u5173\u952E\u8BCD\u90E8\u5206\u5339\u914D\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\u5373\u53EF",-1),oe={class:"flex-1"},le=p("\u6587\u672C"),ae=a("div",{class:"form-tips"},"\u6682\u65F6\u53EA\u652F\u6301\u6587\u672C\u7C7B\u578B",-1),se={class:"flex-1"},ne={class:"flex-1"},de={class:"flex-1"},re=p("\u56DE\u590D\u5339\u914D\u9996\u8BCD\u6761"),ie=a("div",{class:"form-tips"}," \u8BBE\u7F6E\u5173\u952E\u8BCD\u5339\u914D\u591A\u6761\u65F6\u56DE\u590D\u7684\u6570\u91CF\uFF0C\u6682\u65F6\u652F\u6301\u56DE\u590D\u4E00\u6761\u5185\u5BB9 ",-1),Be=K({__name:"edit",emits:["success","close"],setup(pe,{expose:C,emit:F}){const D=E(),m=E(),_=L("add"),V=O(()=>_.value=="edit"?"\u7F16\u8F91":"\u65B0\u589E"),u=$({id:"",name:"",reply_type:0,content_type:1,keyword:"",content:"",matching_type:1,status:1,sort:0,reply_num:1}),v={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0",trigger:["blur"]}],keyword:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",trigger:["blur"]}],matching_type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5339\u914D\u65B9\u5F0F",trigger:["blur"]}],content_type:[{required:!0,message:"\u8BF7\u9009\u62E9\u56DE\u590D\u7C7B\u578B",trigger:["blur"]}],content:[{required:!0,message:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",trigger:["blur"]}]},g=async()=>{var s,e;await((s=D.value)==null?void 0:s.validate()),_.value=="edit"?await P(u):await T(u),(e=m.value)==null||e.close(),F("success")},b=(s="add",e=0)=>{var d;_.value=s,u.reply_type=e,(d=m.value)==null||d.open()},y=s=>{for(const e in u)s[e]!=null&&s[e]!=null&&(u[e]=s[e])},h=async s=>{const e=await z({id:s.id});y(e)},w=()=>{F("close")};return C({open:b,setFormData:y,getDetail:h}),(s,e)=>{const d=A,n=U,r=q,c=N,x=I,k=S,R=G;return i(),j("div",M,[t(H,{ref_key:"popupRef",ref:m,title:J(V),async:!0,width:"500px",onConfirm:g,onClose:w},{default:o(()=>[t(R,{ref_key:"formRef",ref:D,model:u,"label-width":"84px",rules:v,class:"pr-10"},{default:o(()=>[t(n,{label:"\u89C4\u5219\u540D\u79F0",prop:"name"},{default:o(()=>[a("div",Q,[t(d,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=l=>u.name=l),placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0"},null,8,["modelValue"]),W])]),_:1}),u.reply_type==2?(i(),f(n,{key:0,label:"\u5173\u952E\u8BCD",prop:"keyword"},{default:o(()=>[a("div",X,[t(d,{modelValue:u.keyword,"onUpdate:modelValue":e[1]||(e[1]=l=>u.keyword=l),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"},null,8,["modelValue"]),Y])]),_:1})):B("",!0),u.reply_type==2?(i(),f(n,{key:1,label:"\u5339\u914D\u65B9\u5F0F",prop:"matching_type"},{default:o(()=>[a("div",Z,[t(c,{modelValue:u.matching_type,"onUpdate:modelValue":e[2]||(e[2]=l=>u.matching_type=l)},{default:o(()=>[t(r,{label:1},{default:o(()=>[ee]),_:1}),t(r,{label:2},{default:o(()=>[ue]),_:1})]),_:1},8,["modelValue"]),te])]),_:1})):B("",!0),t(n,{label:"\u56DE\u590D\u7C7B\u578B",prop:"content_type",min:0},{default:o(()=>[a("div",oe,[t(c,{modelValue:u.content_type,"onUpdate:modelValue":e[3]||(e[3]=l=>u.content_type=l)},{default:o(()=>[t(r,{label:1},{default:o(()=>[le]),_:1})]),_:1},8,["modelValue"]),ae])]),_:1}),t(n,{label:"\u56DE\u590D\u5185\u5BB9",prop:"content"},{default:o(()=>[a("div",se,[t(d,{modelValue:u.content,"onUpdate:modelValue":e[4]||(e[4]=l=>u.content=l),autosize:{minRows:4,maxRows:4},type:"textarea",maxlength:"200","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"},null,8,["modelValue"])])]),_:1}),t(n,{label:"\u6392\u5E8F"},{default:o(()=>[a("div",ne,[t(x,{modelValue:u.sort,"onUpdate:modelValue":e[5]||(e[5]=l=>u.sort=l),min:0,max:9999},null,8,["modelValue"])])]),_:1}),u.reply_type==2?(i(),f(n,{key:2,label:"\u56DE\u590D\u6570\u91CF",prop:"reply_num",required:""},{default:o(()=>[a("div",de,[t(c,{modelValue:u.reply_num,"onUpdate:modelValue":e[6]||(e[6]=l=>u.reply_num=l)},{default:o(()=>[t(r,{label:1},{default:o(()=>[re]),_:1})]),_:1},8,["modelValue"]),ie])]),_:1})):B("",!0),t(n,{label:"\u542F\u7528\u72B6\u6001"},{default:o(()=>[t(k,{modelValue:u.status,"onUpdate:modelValue":e[7]||(e[7]=l=>u.status=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Be as _};