import{_ as b,K as v,I as A,L as k,w as y,M as D,N as x}from"./element-plus.504c2ead.js";import{_ as T,s as L}from"./edit.vue_vue_type_script_setup_true_lang.3d975d0c.js";import{d as f,s as N,a0 as R,am as M,o as a,c as S,W as t,O as e,P as d,u as F,M as s,T as l}from"./@vue.2527ecfd.js";import"./@vueuse.b9e34262.js";import"./@element-plus.fec869e0.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0c7ef231.js";import"./lodash.4558177f.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";import"./index.e8a4af86.js";const V={class:"storage"},$=f({name:"storage"}),ht=f({...$,setup(z){const m=N(),o=R({loading:!1,lists:[]}),p=async()=>{try{o.loading=!0,o.lists=await L(),o.loading=!1}catch{o.loading=!1}},g=i=>{var r;(r=m.value)==null||r.open(i)};return p(),(i,r)=>{const B=v,c=A,u=k,_=b,E=y,h=D,w=M("perms"),C=x;return a(),S("div",V,[t(c,{class:"!border-none",shadow:"never"},{default:e(()=>[t(B,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),s(c,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(h,{size:"large",data:F(o).lists},{default:e(()=>[t(u,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(u,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(u,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),s(_,{key:0},{default:e(()=>[l("\u5F00\u542F")]),_:1})):(a(),s(_,{key:1,type:"danger"},{default:e(()=>[l("\u5173\u95ED")]),_:1}))]),_:1}),t(u,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),s(E,{type:"primary",link:"",onClick:I=>g(n.engine)},{default:e(()=>[l(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[w,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[C,F(o).loading]]),t(T,{ref_key:"editRef",ref:m,onSuccess:p},null,512)])}}});export{ht as default};
