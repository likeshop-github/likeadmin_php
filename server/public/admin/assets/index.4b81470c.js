import{Z as C,D as b,F as v,X as w,t as A,I as D,M as k}from"./element-plus.32724f3c.js";import{_ as y,s as x}from"./edit.vue_vue_type_script_setup_true_lang.31bd6043.js";import{d as L,s as T,$ as R,o as a,c as S,U as t,L as e,M as d,K as s,S as l,ad as $}from"./@vue.67e62321.js";import"./@vueuse.4608b35b.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./@element-plus.1892f8d7.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.24e396f7.js";import"./pinia.45d0690c.js";import"./vue-demi.ebc8116b.js";import"./vue-router.4c2c9e7d.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.54513b29.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.a46c5e2c.js";import"./index.086ad0cb.js";const M={class:"storage"},N=l("\u5F00\u542F"),V=l("\u5173\u95ED"),z=l(" \u8BBE\u7F6E "),ft=L({__name:"index",setup(I){const c=T(),o=R({loading:!1,lists:[]}),m=async()=>{try{o.loading=!0,o.lists=await x(),o.loading=!1}catch{o.loading=!1}},F=i=>{var n;(n=c.value)==null||n.open(i)};return m(),(i,n)=>{const f=C,p=b,u=v,_=w,B=A,E=D,g=$("perms"),h=k;return a(),S("div",M,[t(p,{class:"!border-none",shadow:"never"},{default:e(()=>[t(f,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),s(p,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{size:"large",data:o.lists},{default:e(()=>[t(u,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(u,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(u,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:r})=>[r.status==1?(a(),s(_,{key:0},{default:e(()=>[N]),_:1})):(a(),s(_,{key:1,type:"danger"},{default:e(()=>[V]),_:1}))]),_:1}),t(u,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:r})=>[d((a(),s(B,{type:"primary",link:"",onClick:K=>F(r.engine)},{default:e(()=>[z]),_:2},1032,["onClick"])),[[g,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[h,o.loading]]),t(y,{ref_key:"editRef",ref:c,onSuccess:m},null,512)])}}});export{ft as default};