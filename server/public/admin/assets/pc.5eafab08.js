import{_ as V}from"./index.f3b5f1e6.js";import{I as b,w as P}from"./element-plus.994d4e5d.js";import h from"./menu.ffe287b8.js";import B from"./preview-pc.d20215cd.js";import{_ as N}from"./attr-setting.vue_vue_type_script_setup_true_lang.1dec7f51.js";import{w as C}from"./index.c6fdd77d.js";import{s as E,a as I}from"./decoration.1ba19042.js";import{m as k,d as S}from"./index.b5b4376b.js";import{d as g,a1 as M,r as d,e as u,w as O,ah as U,o as _,c as W,W as r,O as s,a as F,u as f,P as J,M as T,U as $}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.873faf2b.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.e12a99db.js";import"./color.cb877126.js";import"./clone.3b081931.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./attr.vue_vue_type_script_setup_true_lang.353180c5.js";import"./index.245b791c.js";import"./picker.cd899be5.js";import"./index.c75ffc8e.js";import"./picker.27562db6.js";import"./index.067809e4.js";import"./index.vue_vue_type_script_setup_true_lang.ad34f232.js";import"./index.vue_vue_type_script_setup_true_lang.bc5b89bf.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./vuedraggable.c3915452.js";import"./vue.35da8104.js";import"./sortablejs.d9cb9a0e.js";import"./content.vue_vue_type_script_setup_true_lang.25be5462.js";import"./decoration-img.124ca379.js";import"./attr.vue_vue_type_script_setup_true_lang.6e04f4d5.js";import"./content.acfaea47.js";import"./attr.vue_vue_type_script_setup_true_lang.b38a3f8a.js";import"./add-nav.vue_vue_type_script_setup_true_lang.6c7c7130.js";import"./content.1688988f.js";import"./attr.vue_vue_type_script_setup_true_lang.bc23b0da.js";import"./content.vue_vue_type_script_setup_true_lang.37507482.js";import"./attr.vue_vue_type_script_setup_true_lang.33076aba.js";import"./content.2e9a8c04.js";import"./attr.vue_vue_type_script_setup_true_lang.f51fc154.js";import"./content.0ce4bb88.js";import"./attr.vue_vue_type_script_setup_true_lang.b4ecfbfd.js";import"./content.vue_vue_type_script_setup_true_lang.0335da2a.js";import"./attr.vue_vue_type_script_setup_true_lang.a23a87f3.js";import"./content.a8db1a40.js";const j={class:"decoration-pages min-w-[1100px]"},q={class:"flex h-full items-start"},z=$("\u4FDD\u5B58"),A=g({name:"decorationPages"}),G=g({...A,setup(H){const v=t=>t.map(e=>{var p;return{id:k(),...((p=C[e])==null?void 0:p.options())||{}}}),a=M({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:v(["banner"])}}),o=d("4"),i=d(0),n=u(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData)!=null?e:[]}),D=u(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData[i.value])!=null?e:""}),l=async()=>{const t=await I({id:o.value});a[String(t.id)].pageData=JSON.parse(t.data)},x=async()=>{await E({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),l()};return O(o,()=>{i.value=n.value.findIndex(t=>!t.disabled),l()},{immediate:!0}),(t,e)=>{const c=b,p=P,w=V,y=U("perms");return _(),W("div",j,[r(c,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:s(()=>[F("div",q,[r(h,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=m=>o.value=m),menus:a},null,8,["modelValue","menus"]),r(B,{class:"mx-4",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=m=>i.value=m),pageData:f(n)},null,8,["modelValue","pageData"]),r(N,{class:"flex-1",widget:f(D),type:"pc"},null,8,["widget"])])]),_:1}),J((_(),T(w,{class:"mt-4",fixed:!1},{default:s(()=>[r(p,{type:"primary",onClick:x},{default:s(()=>[z]),_:1})]),_:1})),[[y,["decorate:pages:save"]]])])}}});const ie=S(G,[["__scopeId","data-v-8b455c81"]]);export{ie as default};
