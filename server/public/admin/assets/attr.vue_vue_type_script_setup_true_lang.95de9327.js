import{C as V,D as b,I as w,F as x}from"./element-plus.11bddeb9.js";import{_ as E}from"./picker.75845363.js";import{d as F,b as C,o as D,c as g,X as e,P as n,u as o,a as B}from"./@vue.54440ad7.js";const y=F({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:content"],setup(s,{emit:r}){const p=r,i=s,l=C({get:()=>i.content,set:d=>{p("update:content",d)}});return(d,t)=>{const m=V,u=b,_=E,c=w,f=x;return D(),g("div",null,[e(f,{"label-width":"90px",size:"large","label-position":"top"},{default:n(()=>[e(c,{shadow:"never",class:"!border-none flex mt-2"},{default:n(()=>[e(u,{label:"\u5E73\u53F0\u540D\u79F0"},{default:n(()=>[e(m,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).title,"onUpdate:modelValue":t[0]||(t[0]=a=>o(l).title=a)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u5BA2\u670D\u4E8C\u7EF4\u7801"},{default:n(()=>[B("div",null,[e(_,{modelValue:o(l).qrcode,"onUpdate:modelValue":t[1]||(t[1]=a=>o(l).qrcode=a),"exclude-domain":""},null,8,["modelValue"])])]),_:1}),e(u,{label:"\u5907\u6CE8"},{default:n(()=>[e(m,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).remark,"onUpdate:modelValue":t[2]||(t[2]=a=>o(l).remark=a)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8054\u7CFB\u7535\u8BDD"},{default:n(()=>[e(m,{class:"w-[400px]",modelValue:o(l).mobile,"onUpdate:modelValue":t[3]||(t[3]=a=>o(l).mobile=a)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u670D\u52A1\u65F6\u95F4"},{default:n(()=>[e(m,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).time,"onUpdate:modelValue":t[4]||(t[4]=a=>o(l).time=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])}}});export{y as _};
