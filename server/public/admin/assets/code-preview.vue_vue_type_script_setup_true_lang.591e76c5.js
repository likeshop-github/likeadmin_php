import{x as B,y as D,E as T,w as j,J as N}from"./element-plus.504c2ead.js";import{f as r,b as $}from"./index.ebe98d22.js";import{u as F}from"./vue-clipboard3.f565fd84.js";import{d as S,r as U,b as J,af as L,o as c,c as d,W as o,O as t,u as m,j as i,V as M,a7 as O,M as P,a as p,T as R}from"./@vue.2527ecfd.js";const W={class:"code-preview"},q={class:"flex",style:{height:"50vh"}},K=S({__name:"code-preview",props:{modelValue:{type:Boolean},code:{}},emits:["update:modelValue"],setup(_,{emit:f}){const b=_,V=f,{toClipboard:h}=F(),n=U("index0"),g=async a=>{try{await h(a),r.msgSuccess("\u590D\u5236\u6210\u529F")}catch{r.msgError("\u590D\u5236\u5931\u8D25")}},s=J({get(){return b.modelValue},set(a){V("update:modelValue",a)}});return(a,l)=>{const v=L("highlightjs"),y=T,C=$,E=j,k=B,x=D,w=N;return c(),d("div",W,[o(w,{modelValue:m(s),"onUpdate:modelValue":l[1]||(l[1]=e=>i(s)?s.value=e:null),width:"900px",title:"\u4EE3\u7801\u9884\u89C8"},{default:t(()=>[o(x,{modelValue:m(n),"onUpdate:modelValue":l[0]||(l[0]=e=>i(n)?n.value=e:null)},{default:t(()=>[(c(!0),d(M,null,O(a.code,(e,u)=>(c(),P(k,{label:e.name,name:`index${u}`,key:u},{default:t(()=>[p("div",q,[o(y,{class:"flex-1"},{default:t(()=>[o(v,{autodetect:"",code:e.content},null,8,["code"])]),_:2},1024),p("div",null,[o(E,{onClick:z=>g(e.content),type:"primary",link:""},{icon:t(()=>[o(C,{name:"el-icon-CopyDocument"})]),default:t(()=>[R(" \u590D\u5236 ")]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{K as _};