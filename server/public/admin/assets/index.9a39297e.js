import{_ as w,L as y,w as C,M as B,I as x,N as D}from"./element-plus.504c2ead.js";import{d as F}from"./message.14f8cf02.js";import{_ as L}from"./edit.vue_vue_type_script_setup_true_lang.a35759ad.js";import{d as f,s as T,a0 as N,am as R,o,c as M,P as d,u,M as i,O as t,W as a,T as m}from"./@vue.2527ecfd.js";import"./@vueuse.b9e34262.js";import"./@element-plus.fec869e0.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0c7ef231.js";import"./lodash.4558177f.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";import"./index.e8a4af86.js";const S=f({name:"shortLetter"}),Et=f({...S,setup(V){const p=T(),e=N({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await F(),e.loading=!1}catch{e.loading=!1}},g=r=>{var s;(s=p.value)==null||s.open(r)};return c(),(r,s)=>{const n=y,_=w,h=C,E=B,v=x,b=R("perms"),k=D;return o(),M("div",null,[d((o(),i(v,{class:"!border-none",shadow:"never"},{default:t(()=>[a(E,{size:"large",data:u(e).lists},{default:t(()=>[a(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),a(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:l})=>[l.status==1?(o(),i(_,{key:0},{default:t(()=>[m("\u5F00\u542F")]),_:1})):(o(),i(_,{key:1,type:"danger"},{default:t(()=>[m("\u5173\u95ED")]),_:1}))]),_:1}),a(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:l})=>[d((o(),i(h,{type:"primary",link:"",onClick:$=>g(l.type)},{default:t(()=>[m(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[b,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[k,u(e).loading]]),a(L,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{Et as default};
