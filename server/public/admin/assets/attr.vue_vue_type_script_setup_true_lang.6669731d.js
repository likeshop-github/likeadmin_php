import{t as C,C as D,D as U,w as N,I as $,F as I}from"./element-plus.504c2ead.js";import{_ as O}from"./index.9c5f1e08.js";import{f as h,b as S}from"./index.0c7ef231.js";import{_ as j}from"./picker.29e71450.js";import{_ as T}from"./picker.9a7f9a4c.js";import{D as z}from"./vuedraggable.be58ca86.js";import{d as M,o as c,c as F,W as t,O as a,a as l,u as R,M as m,S as i,T as W}from"./@vue.2527ecfd.js";const q=l("div",{class:"flex items-end"},[l("div",{class:"text-base text-[#101010] font-medium"},"\u56FE\u7247\u8BBE\u7F6E"),l("div",{class:"text-xs text-tx-secondary ml-2"}," \u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*200px ")],-1),G={class:"flex-1"},H={class:"bg-fill-light w-full p-4 mt-4"},J={class:"flex-1"},K={class:"flex-1 flex items-center"},L={class:"drag-move cursor-move ml-auto"},P={key:0,class:"mt-4"},_=5,le=M({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},type:{type:String,default:"mobile"}},setup(n){const d=n,x=()=>{var s;((s=d.content.data)==null?void 0:s.length)<_?d.content.data.push({is_show:"1",image:"",name:"",link:{}}):h.msgError(`\u6700\u591A\u6DFB\u52A0${_}\u5F20\u56FE\u7247`)},E=s=>{var u;if(((u=d.content.data)==null?void 0:u.length)<=1)return h.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");d.content.data.splice(s,1)};return(s,u)=>{const V=T,g=j,v=D,r=U,b=C,k=S,y=O,w=N,A=$,B=I;return c(),F("div",null,[t(B,{"label-width":"70px"},{default:a(()=>[t(A,{shadow:"never",class:"!border-none flex mt-2"},{default:a(()=>{var p;return[q,l("div",G,[t(R(z),{class:"draggable",modelValue:n.content.data,"onUpdate:modelValue":u[0]||(u[0]=e=>n.content.data=e),animation:"300",handle:".drag-move"},{item:a(({element:e,index:f})=>[(c(),m(y,{key:f,onClose:o=>E(f),class:"w-full"},{default:a(()=>[l("div",H,[t(V,{width:"396px",height:"196px",modelValue:e.image,"onUpdate:modelValue":o=>e.image=o,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),l("div",J,[t(r,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:a(()=>[n.type=="mobile"?(c(),m(g,{key:0,modelValue:e.link,"onUpdate:modelValue":o=>e.link=o},null,8,["modelValue","onUpdate:modelValue"])):i("",!0),n.type=="pc"?(c(),m(v,{key:1,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5",modelValue:e.link.path,"onUpdate:modelValue":o=>e.link.path=o},null,8,["modelValue","onUpdate:modelValue"])):i("",!0)]),_:2},1024),t(r,{label:"\u662F\u5426\u663E\u793A",class:"mt-[18px] !mb-0"},{default:a(()=>[l("div",K,[t(b,{modelValue:e.is_show,"onUpdate:modelValue":o=>e.is_show=o,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),l("div",L,[t(k,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])]),((p=n.content.data)==null?void 0:p.length)<_?(c(),F("div",P,[t(w,{class:"w-full",type:"primary",onClick:x},{default:a(()=>[W("\u6DFB\u52A0\u56FE\u7247")]),_:1})])):i("",!0)]}),_:1})]),_:1})])}}});export{le as _};
