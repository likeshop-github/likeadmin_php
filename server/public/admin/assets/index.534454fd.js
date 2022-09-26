import{_ as A}from"./index.ce2343c9.js";import{r as F,b as N,d as R}from"./index.2472fd00.js";import{O as T,P as z,C as O,D as P,I as $,w as q,B as G,J,K}from"./element-plus.20e8dc41.js";import{d as L,a1 as M,e as W,ah as X,o as c,c as p,W as t,O as e,a as s,P as v,M as E,X as j,a9 as H,V as Q,u as Y,U as u,b9 as Z,b8 as tt}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./lodash.badb96a8.js";import"./axios.cb90d22e.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.034bf3af.js";import"./nprogress.68de8c98.js";import"./vue-clipboard3.f6b8ce17.js";import"./clipboard.82aa429a.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./lodash-es.70b90cb6.js";import"./dayjs.fb6e5f02.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function et(){return F.get({url:"/setting.hot_search/getConfig"})}function ot(r){return F.post({url:"/setting.hot_search/setConfig",params:r})}const d=r=>(Z("data-v-50b672a0"),r=r(),tt(),r),st={class:"hot-search"},at=u("\u5F00\u542F"),nt=u("\u5173\u95ED"),lt=d(()=>s("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u59CB\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),rt={class:"lg:flex"},it={class:"flex-1 min-w-0"},ct=u("\u6DFB\u52A0"),ut=u(" \u5220\u9664 "),dt={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},_t=d(()=>s("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),mt={class:"hot-search-phone-content"},pt={class:"search-com"},ht={class:"search-con flex items-center px-[15px]"},ft=d(()=>s("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),bt=d(()=>s("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),gt={class:"hot-search-text"},Dt=u("\u4FDD\u5B58"),vt=L({__name:"index",setup(r){const n=M({status:1,data:[]}),C=W(()=>n.data.filter(o=>o.name).sort((o,l)=>l.sort-o.sort)),h=async()=>{try{const o=await et();for(const l in n)n[l]=o[l]}catch(o){console.log("\u83B7\u53D6=>",o)}},x=()=>{n.data.push({name:"",sort:0})},B=o=>{n.data.splice(o,1)},y=async()=>{try{await ot(n),h()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return h(),(o,l)=>{const f=T,V=z,w=O,k=P,b=$,_=q,g=G,m=J,S=K,I=N,U=A,D=X("perms");return c(),p("div",st,[t(b,{class:"!border-none",shadow:"never"},{default:e(()=>[t(k,{ref:"formRef",model:n,"label-width":"100px"},{default:e(()=>[t(w,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:e(()=>[s("div",null,[t(V,{modelValue:n.status,"onUpdate:modelValue":l[0]||(l[0]=a=>n.status=a)},{default:e(()=>[t(f,{label:1},{default:e(()=>[at]),_:1}),t(f,{label:0},{default:e(()=>[nt]),_:1})]),_:1},8,["modelValue"]),lt])]),_:1})]),_:1},8,["model"])]),_:1}),t(b,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[s("div",rt,[s("div",it,[t(_,{type:"primary",class:"mb-4",onClick:x},{default:e(()=>[ct]),_:1}),t(S,{size:"large",data:n.data},{default:e(()=>[t(m,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:e(({row:a})=>[t(g,{modelValue:a.name,"onUpdate:modelValue":i=>a.name=i,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:e(({row:a})=>[t(g,{modelValue:a.sort,"onUpdate:modelValue":i=>a.sort=i,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({$index:a})=>[v((c(),E(_,{type:"danger",link:"",onClick:i=>B(a)},{default:e(()=>[ut]),_:2},1032,["onClick"])),[[D,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),s("div",dt,[_t,s("div",mt,[s("div",pt,[s("div",ht,[t(I,{name:"el-icon-Search",size:17}),ft])]),bt,s("div",gt,[(c(!0),p(j,null,H(Y(C),(a,i)=>(c(),p("span",{key:i},Q(a.name),1))),128))])])])])]),_:1}),v((c(),E(U,null,{default:e(()=>[t(_,{type:"primary",onClick:y},{default:e(()=>[Dt]),_:1})]),_:1})),[[D,["setting.hot_search/setConfig"]]])])}}});const Yt=R(vt,[["__scopeId","data-v-50b672a0"]]);export{Yt as default};