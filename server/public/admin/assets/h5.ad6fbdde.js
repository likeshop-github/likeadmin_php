import{_ as k}from"./index.4042e926.js";import{K as x,I as H,G as N,H as U,D as I,C as R,w as S,F as q}from"./element-plus.504c2ead.js";import{r as C}from"./index.0c7ef231.js";import{d as b,a0 as G,am as F,o as i,c as T,W as t,O as e,u,a as p,T as l,M as m,S as K,U as M,P as B}from"./@vue.2527ecfd.js";import"./@vueuse.b9e34262.js";import"./@element-plus.fec869e0.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.4558177f.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";function O(_){return C.post({url:"/channel.web_page_setting/setConfig",params:_})}function P(){return C.get({url:"/channel.web_page_setting/getConfig"})}const W=p("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),j={class:"w-80"},z={class:"flex-1 min-w-0 break-words"},J=b({name:"h5Config"}),he=b({...J,setup(_){const o=G({status:0,page_status:0,page_url:"",url:""}),d=async()=>{const c=await P();for(const a in o)o[a]=c[a]},D=async()=>{await O(o),d()};return d(),(c,a)=>{const w=x,f=H,s=N,g=U,n=I,v=R,E=S,V=q,A=k,h=F("copy"),y=F("perms");return i(),T("div",null,[t(f,{class:"!border-none",shadow:"never"},{default:e(()=>[t(w,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),t(f,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(V,{ref:"formRef",model:u(o),"label-width":"120px"},{default:e(()=>[t(n,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:e(()=>[p("div",null,[t(g,{modelValue:u(o).status,"onUpdate:modelValue":a[0]||(a[0]=r=>u(o).status=r)},{default:e(()=>[t(s,{label:1},{default:e(()=>[l("\u5F00\u542F")]),_:1}),t(s,{label:0},{default:e(()=>[l("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),W])]),_:1}),t(n,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"page_status"},{default:e(()=>[t(g,{modelValue:u(o).page_status,"onUpdate:modelValue":a[1]||(a[1]=r=>u(o).page_status=r)},{default:e(()=>[t(s,{label:0},{default:e(()=>[l("\u7A7A\u9875\u9762")]),_:1}),t(s,{label:1},{default:e(()=>[l("\u81EA\u5B9A\u4E49\u94FE\u63A5")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(o).page_status==1?(i(),m(n,{key:0,label:"",prop:"page_url"},{default:e(()=>[p("div",j,[t(v,{modelValue:u(o).page_url,"onUpdate:modelValue":a[2]||(a[2]=r=>u(o).page_url=r),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):K("",!0),t(n,{label:"\u8BBF\u95EE\u94FE\u63A5"},{default:e(()=>[p("div",z,[l(M(u(o).url)+" ",1),B((i(),m(E,null,{default:e(()=>[l("\u590D\u5236")]),_:1})),[[h,u(o).url]])])]),_:1})]),_:1},8,["model"])]),_:1}),B((i(),m(A,null,{default:e(()=>[t(E,{type:"primary",onClick:D},{default:e(()=>[l("\u4FDD\u5B58")]),_:1})]),_:1})),[[y,["channel.web_page_setting/setConfig"]]])])}}});export{he as default};
