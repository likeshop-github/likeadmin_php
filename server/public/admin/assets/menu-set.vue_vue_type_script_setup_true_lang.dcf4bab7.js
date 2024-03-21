import{D as A,C as B,t as C,w as U}from"./element-plus.504c2ead.js";import{_ as z}from"./index.9c5f1e08.js";import{_ as $}from"./picker.29e71450.js";import{_ as N}from"./picker.9a7f9a4c.js";import{f as V,b as j}from"./index.0c7ef231.js";import{D as I}from"./vuedraggable.be58ca86.js";import{j as P}from"./lodash-es.2b4cc642.js";import{d as R,b as S,o as s,c as T,a as n,W as l,O as a,M as i,S as m,u as _,j as M,T as O,V as W}from"./@vue.2527ecfd.js";const q={class:"mb-[18px] max-w-[400px]"},G={class:"bg-fill-light w-full p-4 mt-4"},H={class:"upload-btn w-[60px] h-[60px]"},J=n("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1),K={class:"upload-btn w-[60px] h-[60px]"},L=n("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1),Q={class:"flex-1 flex items-center"},X={class:"drag-move cursor-move ml-auto"},se=R({__name:"menu-set",props:{modelValue:{},max:{default:9999},min:{default:-1},itemData:{default:()=>({name:"",selected:"",unselected:"",is_show:"1",link:{}})}},emits:["update:modelValue"],setup(h,{emit:v}){const d=h,x=v,t=S({get(){return d.modelValue},set(u){x("update:modelValue",u)}}),g=()=>{var u;((u=t.value)==null?void 0:u.length)<d.max?t.value.push(P(d.itemData)):V.msgError(`\u6700\u591A\u6DFB\u52A0${d.max}\u4E2A`)},k=u=>{if(t.value.length<=d.min&&d.min>-1)return V.msgError(`\u6700\u5C11\u4FDD\u7559${d.min}\u4E2A`);t.value.splice(u,1)};return(u,r)=>{const p=j,f=N,c=A,b=B,w=$,D=C,F=z,E=U;return s(),T(W,null,[n("div",q,[l(_(I),{class:"draggable",modelValue:_(t),"onUpdate:modelValue":r[0]||(r[0]=e=>M(t)?t.value=e:null),animation:"300",handle:".drag-move"},{item:a(({element:e,index:y})=>[l(F,{onClose:o=>k(y),class:"max-w-[400px]"},{default:a(()=>[n("div",G,[e.unselected!==void 0||e.selected!==void 0?(s(),i(c,{key:0,label:"\u5BFC\u822A\u56FE\u6807"},{default:a(()=>[e.unselected!==void 0?(s(),i(f,{key:0,modelValue:e.unselected,"onUpdate:modelValue":o=>e.unselected=o,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:a(()=>[n("div",H,[l(p,{name:"el-icon-Plus",size:16}),J])]),_:2},1032,["modelValue","onUpdate:modelValue"])):m("",!0),e.selected!==void 0?(s(),i(f,{key:1,modelValue:e.selected,"onUpdate:modelValue":o=>e.selected=o,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:a(()=>[n("div",K,[l(p,{name:"el-icon-Plus",size:16}),L])]),_:2},1032,["modelValue","onUpdate:modelValue"])):m("",!0)]),_:2},1024)):m("",!0),e.name!==void 0?(s(),i(c,{key:1,label:"\u5BFC\u822A\u540D\u79F0"},{default:a(()=>[l(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):m("",!0),e.link!==void 0?(s(),i(c,{key:2,label:"\u94FE\u63A5\u5730\u5740"},{default:a(()=>[l(w,{modelValue:e.link,"onUpdate:modelValue":o=>e.link=o,type:"pc"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):m("",!0),e.is_show!==void 0?(s(),i(c,{key:3,label:"\u662F\u5426\u663E\u793A"},{default:a(()=>[n("div",Q,[l(D,{modelValue:e.is_show,"onUpdate:modelValue":o=>e.is_show=o,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),n("div",X,[l(p,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)):m("",!0)])]),_:2},1032,["onClose"])]),_:1},8,["modelValue"])]),_(t).length<u.max?(s(),i(c,{key:0,"label-width":"0"},{default:a(()=>[l(E,{type:"primary",onClick:g},{default:a(()=>[O(" \u6DFB\u52A0\u5BFC\u822A ")]),_:1})]),_:1})):m("",!0)],64)}}});export{se as _};
