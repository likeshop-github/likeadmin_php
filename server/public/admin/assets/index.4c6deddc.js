import{_ as B}from"./index.7a0b01e1.js";import{I as V,w as C}from"./element-plus.5649e4ba.js";import I from"./menu.61e8c193.js";import N from"./preview.399646a0.js";import{_ as P}from"./attr-setting.vue_vue_type_script_setup_true_lang.5b1e94bf.js";import{w as S}from"./index.14b16e0e.js";import{s as h,a as k}from"./decoration.b6bba804.js";import{m as F,d as M}from"./index.5c8f0e5e.js";import{d as x,Z as R,r as f,b as g,w as U,am as A,o as v,c as O,U as i,L as l,a as J,u as m,j as D,M as W,K as j,R as H}from"./@vue.90bde458.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./lodash.4558177f.js";import"./vue-router.1051b4fa.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";import"./attr.vue_vue_type_script_setup_true_lang.b12a796c.js";import"./index.cc290d94.js";import"./picker.4f30ba81.js";import"./index.fc68bab1.js";import"./picker.650eb012.js";import"./index.a48aab88.js";import"./index.vue_vue_type_script_setup_true_lang.ca18352a.js";import"./index.887041b2.js";import"./index.vue_vue_type_script_setup_true_lang.a48e4341.js";import"./usePaging.63ca32b2.js";import"./vue3-video-play.6ca8fb7a.js";import"./vuedraggable.6cb4d830.js";import"./vue.e147f0f4.js";import"./sortablejs.f52b587b.js";import"./content.vue_vue_type_script_setup_true_lang.58a032a2.js";import"./decoration-img.12be4188.js";import"./attr.vue_vue_type_script_setup_true_lang.fbeef400.js";import"./content.58be0c57.js";import"./attr.vue_vue_type_script_setup_true_lang.38c40607.js";import"./add-nav.vue_vue_type_script_setup_true_lang.05cd106b.js";import"./content.ab5d09db.js";import"./attr.vue_vue_type_script_setup_true_lang.d5b98382.js";import"./content.vue_vue_type_script_setup_true_lang.fc7b4843.js";import"./attr.vue_vue_type_script_setup_true_lang.50d47f58.js";import"./content.d2bae3c9.js";import"./attr.vue_vue_type_script_setup_true_lang.60ccbea9.js";import"./content.fa194755.js";import"./attr.vue_vue_type_script_setup_true_lang.0d21e331.js";import"./content.vue_vue_type_script_setup_true_lang.bae9865c.js";import"./attr.vue_vue_type_script_setup_true_lang.bed25cc5.js";import"./content.556a168e.js";const K={class:"decoration-pages min-w-[1100px]"},L={class:"flex h-full items-start"},Z=x({name:"decorationPages"}),$=x({...Z,setup(q){let u;(t=>{t.HOME="1",t.USER="2",t.SERVICE="3"})(u||(u={}));const s=t=>t.map(e=>{var p;return{id:F(),...((p=S[e])==null?void 0:p.options())||{}}}),a=R({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageData:s(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:s(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:s(["customer-service"])}}),o=f("1"),r=f(-1),c=g(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData)!=null?e:[]}),w=g(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData[r.value])!=null?e:""}),d=async()=>{const t=await k({id:o.value});a[String(t.id)].pageData=JSON.parse(t.data)},E=async()=>{await h({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),d()};return U(o,()=>{r.value=c.value.findIndex(t=>!t.disabled),d()},{immediate:!0}),(t,e)=>{const _=V,p=C,b=B,y=A("perms");return v(),O("div",K,[i(_,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:l(()=>[J("div",L,[i(I,{modelValue:m(o),"onUpdate:modelValue":e[0]||(e[0]=n=>D(o)?o.value=n:null),menus:m(a)},null,8,["modelValue","menus"]),i(N,{modelValue:m(r),"onUpdate:modelValue":e[1]||(e[1]=n=>D(r)?r.value=n:null),pageData:m(c)},null,8,["modelValue","pageData"]),i(P,{class:"flex-1",widget:m(w)},null,8,["widget"])])]),_:1}),W((v(),j(b,{class:"mt-4",fixed:!1},{default:l(()=>[i(p,{type:"primary",onClick:E},{default:l(()=>[H("\u4FDD\u5B58")]),_:1})]),_:1})),[[y,["decorate:pages:save"]]])])}}});const se=M($,[["__scopeId","data-v-678364bb"]]);export{se as default};