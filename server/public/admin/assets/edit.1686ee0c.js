var L=Object.defineProperty,N=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var B=(d,t,s)=>t in d?L(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s,V=(d,t)=>{for(var s in t||(t={}))z.call(t,s)&&B(d,s,t[s]);if(b)for(var s of b(t))S.call(t,s)&&B(d,s,t[s]);return d},g=(d,t)=>N(d,R(t));import{F as $}from"./index.ef207c4e.js";import{a as j,d as M,e as G,f as H}from"./organization.9342c95b.js";import{u as I}from"./index.df6b7ac1.js";import{d as J,q as E,j as K,a1 as O,r as P,o as Q,a as m,a4 as W,b as A,c as X,f as a,w as n,a5 as Y,k as Z,F as ee,_ as l,ai as le,e as ue,m as ae}from"./vendor.eb12b813.js";const te=ue("div",{class:"muted"}," \u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D ",-1),oe=ae("\u4FDD\u5B58"),pe=J({setup(d){const t=E(null),{router:s,route:h}=I(),p=K(()=>{var o;return(o=h.query)==null?void 0:o.id}),_=E(!1),D=E([]),{formData:e,rules:w}=O(P({formData:{pid:"",name:"",leader:"",mobile:"",sort:0,status:0},rules:{pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:["blur"]}]}})),y=()=>{j().then(o=>{D.value=F(o)})},F=o=>o.map(i=>{const f=i.children;return f.length&&F(f),i.id==p.value||i.status==0?i.disabled=!0:i.disabled=!1,i}),k=()=>{!p.value||(_.value=!0,M({id:p.value}).then(o=>{e.value=o}).finally(()=>{_.value=!1}))},C=()=>{var o;(o=t.value)==null||o.validate(u=>{if(!u)return;Array.isArray(e.value.pid)&&(e.value.pid=e.value.pid[e.value.pid.length-1]),(p.value?G(g(V({},e.value),{id:p.value})):H(e.value)).then(()=>{setTimeout(()=>s.go(-1),500)})})};return Q(()=>{k(),y()}),(o,u)=>{const i=m("el-page-header"),f=m("el-card"),U=m("el-cascader"),c=m("el-form-item"),v=m("el-input"),q=m("el-switch"),x=m("el-button"),T=W("loading");return A(),X(ee,null,[a(f,{shadow:"never"},{default:n(()=>[a(i,{content:l(p)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8",onBack:u[0]||(u[0]=r=>o.$router.back())},null,8,["content"])]),_:1}),Y((A(),Z(f,{shadow:"never",class:"m-t-15"},{default:n(()=>[a(l(le),{ref_key:"formRefs",ref:t,rules:l(w),class:"ls-form",model:l(e),"label-width":"150px",size:"small"},{default:n(()=>[a(c,{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"pid"},{default:n(()=>[a(U,{modelValue:l(e).pid,"onUpdate:modelValue":u[1]||(u[1]=r=>l(e).pid=r),options:D.value,props:{value:"id",label:"name",checkStrictly:!0},clearable:"",disabled:l(e).pid===0&&l(p)},null,8,["modelValue","options","disabled"])]),_:1}),a(c,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:n(()=>[a(v,{modelValue:l(e).name,"onUpdate:modelValue":u[2]||(u[2]=r=>l(e).name=r),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:n(()=>[a(v,{modelValue:l(e).leader,"onUpdate:modelValue":u[3]||(u[3]=r=>l(e).leader=r),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"mobile"},{default:n(()=>[a(v,{modelValue:l(e).mobile,"onUpdate:modelValue":u[4]||(u[4]=r=>l(e).mobile=r),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",type:"tel"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[a(v,{modelValue:l(e).sort,"onUpdate:modelValue":u[5]||(u[5]=r=>l(e).sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"]),te]),_:1}),a(c,{label:"\u90E8\u95E8\u72B6\u6001"},{default:n(()=>[a(q,{modelValue:l(e).status,"onUpdate:modelValue":u[6]||(u[6]=r=>l(e).status=r),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[T,_.value]]),a($,null,{default:n(()=>[a(x,{type:"primary",size:"small",onClick:C},{default:n(()=>[oe]),_:1})]),_:1})],64)}}});export{pe as default};
