import{_ as N}from"./index.4042e926.js";import{r as C,b as R,d as z}from"./index.0c7ef231.js";import{G,H as L,D as M,F as $,I as j,w as q,C as H,L as O,M as P}from"./element-plus.504c2ead.js";import{d as x,a0 as W,b as J,am as K,o as i,c as h,W as e,O as t,u as c,a,T as d,P as E,M as F,V as Q,a7 as X,U as Y,bk as Z,bj as ee}from"./@vue.2527ecfd.js";import"./@vueuse.b9e34262.js";import"./lodash.4558177f.js";import"./axios.0043c060.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.fec869e0.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function te(){return C.get({url:"/setting.hot_search/getConfig"})}function oe(r){return C.post({url:"/setting.hot_search/setConfig",params:r})}const m=r=>(Z("data-v-1f7b34ef"),r=r(),ee(),r),ae={class:"hot-search"},se=m(()=>a("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),ne={class:"lg:flex"},le={class:"flex-1 min-w-0"},re={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},ue=m(()=>a("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),ie={class:"hot-search-phone-content"},ce={class:"search-com"},de={class:"search-con flex items-center px-[15px]"},me=m(()=>a("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),_e=m(()=>a("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),pe={class:"hot-search-text"},he=x({name:"search"}),fe=x({...he,setup(r){const n=W({status:1,data:[]}),B=J(()=>n.data.filter(o=>o.name).sort((o,l)=>l.sort-o.sort)),f=async()=>{try{const o=await te();for(const l in n)n[l]=o[l]}catch(o){console.log("\u83B7\u53D6=>",o)}},y=()=>{n.data.push({name:"",sort:0})},V=o=>{n.data.splice(o,1)},w=async()=>{try{await oe(n),f()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return f(),(o,l)=>{const b=G,k=L,S=M,I=$,g=j,_=q,D=H,p=O,U=P,A=R,T=N,v=K("perms");return i(),h("div",ae,[e(g,{class:"!border-none",shadow:"never"},{default:t(()=>[e(I,{ref:"formRef",model:c(n),"label-width":"100px"},{default:t(()=>[e(S,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:t(()=>[a("div",null,[e(k,{modelValue:c(n).status,"onUpdate:modelValue":l[0]||(l[0]=s=>c(n).status=s)},{default:t(()=>[e(b,{label:1},{default:t(()=>[d("\u5F00\u542F")]),_:1}),e(b,{label:0},{default:t(()=>[d("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),se])]),_:1})]),_:1},8,["model"])]),_:1}),e(g,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[a("div",ne,[a("div",le,[e(_,{type:"primary",class:"mb-4",onClick:y},{default:t(()=>[d("\u6DFB\u52A0")]),_:1}),e(U,{size:"large",data:c(n).data},{default:t(()=>[e(p,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(D,{modelValue:s.name,"onUpdate:modelValue":u=>s.name=u,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(D,{modelValue:s.sort,"onUpdate:modelValue":u=>s.sort=u,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:t(({$index:s})=>[E((i(),F(_,{type:"danger",link:"",onClick:u=>V(s)},{default:t(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),a("div",re,[ue,a("div",ie,[a("div",ce,[a("div",de,[e(A,{name:"el-icon-Search",size:17}),me])]),_e,a("div",pe,[(i(!0),h(Q,null,X(c(B),(s,u)=>(i(),h("span",{key:u},Y(s.name),1))),128))])])])])]),_:1}),E((i(),F(T,null,{default:t(()=>[e(_,{type:"primary",onClick:w},{default:t(()=>[d("\u4FDD\u5B58")]),_:1})]),_:1})),[[v,["setting.hot_search/setConfig"]]])])}}});const Qe=z(fe,[["__scopeId","data-v-1f7b34ef"]]);export{Qe as default};
