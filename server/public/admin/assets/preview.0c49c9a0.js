import{i as S,r as A,s as T}from"./element-plus.11bddeb9.js";import{d as j,r as z,b,o as i,O as k,P as u,c as _,X as l,U as K,T as C,a as d,W as L,a8 as O,R as V,K as U,S as W,u as f,$ as D}from"./@vue.54440ad7.js";import{v as g,h as R,K as X,L as q}from"./@element-plus.b60a8dd3.js";import{e as G}from"./index.70b5b3b8.js";import{j as H}from"./lodash-es.2b4cc642.js";import{d as J}from"./index.e6a627be.js";import"./dayjs.3bccbd93.js";import"./axios.dc00a7f8.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.ae05e840.js";import"./index.819314ae.js";import"./picker.1e91c80f.js";import"./index.84d9c349.js";import"./index.vue_vue_type_script_setup_true_lang.41f351cb.js";import"./article.c401555d.js";import"./usePaging.86c68137.js";import"./picker.364d077c.js";import"./index.f9979d67.js";import"./index.6bd52007.js";import"./index.vue_vue_type_script_setup_true_lang.2b33015b.js";import"./@vueuse.30711f4d.js";import"./vue3-video-play.2cf5a54a.js";import"./vuedraggable.9d1df356.js";import"./vue.2c04979b.js";import"./sortablejs.dbf1c042.js";import"./nprogress.7656d32d.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.e6e9a684.js";import"./css-color-function.a728b5d4.js";import"./color.d7ae65d5.js";import"./clone.65443a5f.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./vue-clipboard3.d9310b6d.js";import"./clipboard.cf95dd73.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./content.vue_vue_type_script_setup_true_lang.017fbac9.js";import"./decoration-img.eb999b2d.js";import"./attr.vue_vue_type_script_setup_true_lang.e1cfcaca.js";import"./content.0f575721.js";import"./attr.vue_vue_type_script_setup_true_lang.d3f315fd.js";import"./content.vue_vue_type_script_setup_true_lang.52f5e292.js";import"./attr.vue_vue_type_script_setup_true_lang.ed3c7aaf.js";import"./add-nav.vue_vue_type_script_setup_true_lang.6616c146.js";import"./content.39087a80.js";import"./attr.vue_vue_type_script_setup_true_lang.e5428d17.js";import"./content.vue_vue_type_script_setup_true_lang.7383ee63.js";import"./attr.vue_vue_type_script_setup_true_lang.61146f73.js";import"./content.3e862819.js";import"./decoration.972cf603.js";import"./attr.vue_vue_type_script_setup_true_lang.cb6087c9.js";import"./index.vue_vue_type_script_setup_true_lang.e1a8329a.js";import"./content.305a4026.js";import"./content.vue_vue_type_script_setup_true_lang.3837ee47.js";import"./attr.vue_vue_type_script_setup_true_lang.9b128694.js";import"./content.a2813f86.js";import"./attr.vue_vue_type_script_setup_true_lang.914cbf02.js";import"./content.vue_vue_type_script_setup_true_lang.04917dcf.js";import"./attr.vue_vue_type_script_setup_true_lang.b0cd3e44.js";import"./content.81df77ca.js";const Q={class:"shadow mx-[30px] pages-preview"},Y=["onClick"],Z={key:0,class:"widget-btns py-[5px]"},x=j({__name:"preview",props:{pageMeta:{type:Object,default:()=>null},pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue","updatePageData"],setup(m,{emit:B}){const p=m,s=B,y=z(-1),E=()=>{p.modelValue===-1?s("update:modelValue",y.value):(y.value=p.modelValue,s("update:modelValue",-1))},M=(e,o)=>{e.disabled||s("update:modelValue",o)},P=b(()=>e=>e===0),$=b(()=>e=>{var o;return((o=p.pageData)==null?void 0:o.length)===e+1}),v=b(()=>e=>(e==null?void 0:e.enabled)==0),F=e=>{e.enabled!==void 0&&(e.enabled=e.enabled?0:1)},h=(e,o)=>{if(e<0||e>=p.pageData.length||o<0||o>=p.pageData.length)return;const a=H(p.pageData),c=a.splice(e,1)[0];a.splice(o,0,c),s("updatePageData",a),s("update:modelValue",o)};return(e,o)=>{const a=S,c=A,N=T;return i(),k(N,{class:"pages-preview-container"},{default:u(()=>[m.pageMeta!==null?(i(),_("div",{key:0,class:"absolute right-4 top-4",onClick:E},[l(a,null,{default:u(()=>[K("\u9875\u9762\u8BBE\u7F6E")]),_:1})])):C("",!0),d("div",Q,[(i(!0),_(L,null,O(m.pageData,(t,r)=>(i(),_("div",{key:t.id,class:V(["relative",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:n=>M(t,r)},[d("div",{class:V(["absolute w-full h-full z-[100] border-dashed",{select:r==m.modelValue,hide:v.value(t.content),"border-[#dcdfe6] border-2":!(t!=null&&t.disabled)}])},null,2),U(e.$slots,"default",{},()=>{var n;return[(i(),k(W((n=f(G)[t==null?void 0:t.name])==null?void 0:n.content),{content:t.content,styles:t.styles,key:t.id},null,8,["content","styles"]))]},!0),r==m.modelValue?(i(),_("div",Z,[d("div",null,[l(c,{effect:"dark",content:v.value(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:u(()=>[l(a,{class:"py-[5px]",type:"primary",icon:v.value(t.content)?f(g):f(R),onClick:n=>F(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])]),d("div",null,[l(c,{effect:"dark",content:"\u4E0A\u79FB",placement:"right"},{default:u(()=>[l(a,{class:"py-[5px]",type:"primary",icon:f(X),disabled:P.value(r),onClick:D(n=>h(r,r-1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)]),d("div",null,[l(c,{effect:"dark",content:"\u4E0B\u79FB",placement:"right"},{default:u(()=>[l(a,{class:"py-[5px]",type:"primary",icon:f(q),disabled:$.value(r),onClick:D(n=>h(r,r+1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)])])):C("",!0)],10,Y))),128))])]),_:3})}}});const vt=J(x,[["__scopeId","data-v-43c76597"]]);export{vt as default};