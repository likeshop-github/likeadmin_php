import{t as C,C as D,D as B,w as U,I as y,F as N}from"./element-plus.4078815e.js";import{_ as $}from"./index.c2cf2429.js";import{f as p,b as I}from"./index.e263fbcb.js";import{_ as O}from"./picker.9f5ce971.js";import{_ as j}from"./picker.07fc5696.js";import{D as T}from"./vuedraggable.5bfed3b5.js";import{d as z,o as m,c as f,X as e,P as l,u as P,O as R,a,U as S,T as X}from"./@vue.b52708da.js";const q=a("div",{class:"flex items-end mb-4"},[a("div",{class:"text-base text-[#101010] font-medium"},"\u83DC\u5355"),a("div",{class:"text-xs text-tx-secondary ml-2"}," \u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*200px ")],-1),G={class:"bg-fill-light flex items-center w-full p-4 mt-4"},H={class:"ml-3 flex-1"},J={class:"flex-1 flex items-center"},K={class:"drag-move cursor-move ml-auto"},L={key:0,class:"mt-4"},_=5,oe=z({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(s){const c=s,F=()=>{var n;((n=c.content.data)==null?void 0:n.length)<_?c.content.data.push({image:"",name:"",link:{}}):p.msgError(`\u6700\u591A\u6DFB\u52A0${_}\u5F20\u56FE\u7247`)},V=n=>{var u;if(((u=c.content.data)==null?void 0:u.length)<=1)return p.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");c.content.data.splice(n,1)};return(n,u)=>{const x=j,h=D,d=B,g=O,E=C,v=I,b=$,k=U,w=y,A=N;return m(),f("div",null,[e(A,{"label-width":"70px"},{default:l(()=>[e(w,{shadow:"never",class:"!border-none flex mt-2"},{default:l(()=>{var i;return[q,e(P(T),{class:"draggable",modelValue:s.content.data,"onUpdate:modelValue":u[0]||(u[0]=t=>s.content.data=t),animation:"300",handle:".drag-move"},{item:l(({element:t,index:r})=>[(m(),R(b,{key:r,onClose:o=>V(r),class:"w-[467px]"},{default:l(()=>[a("div",G,[e(x,{modelValue:t.image,"onUpdate:modelValue":o=>t.image=o,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),a("div",H,[e(d,{label:"\u56FE\u7247\u540D\u79F0"},{default:l(()=>[e(h,{modelValue:t.name,"onUpdate:modelValue":o=>t.name=o,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:l(()=>[e(g,{modelValue:t.link,"onUpdate:modelValue":o=>t.link=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{label:"\u662F\u5426\u663E\u793A",class:"mt-[18px]"},{default:l(()=>[a("div",J,[e(E,{modelValue:t.is_show,"onUpdate:modelValue":o=>t.is_show=o,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),a("div",K,[e(v,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"]),((i=s.content.data)==null?void 0:i.length)<_?(m(),f("div",L,[e(k,{class:"w-full",type:"primary",onClick:F},{default:l(()=>[S("\u6DFB\u52A0\u56FE\u7247")]),_:1})])):X("",!0)]}),_:1})]),_:1})])}}});export{oe as _};
