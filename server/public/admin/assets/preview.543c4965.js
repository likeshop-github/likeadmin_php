import{w as A,a as T,E as z}from"./element-plus.47dbc6c1.js";import{d as L,r as O,b,o as i,M as k,O as s,c as _,W as l,T as P,S as C,a as c,V as W,a7 as j,Q as V,J,R as K,u,_ as B}from"./@vue.c3e77981.js";import{e as Q}from"./index.3ec51cce.js";import{v as R,h as U,K as q,L as G}from"./@element-plus.12c58ce2.js";import{d as H}from"./index.2a1d6957.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.550e17a8.js";import"./index.45d6b836.js";import"./picker.57e6d671.js";import"./index.vue_vue_type_script_setup_true_lang.888f77b2.js";import"./usePaging.d25ebf19.js";import"./article.369647ed.js";import"./index.7e8271e1.js";import"./picker.cb557170.js";import"./index.99896184.js";import"./index.cacbe276.js";import"./index.vue_vue_type_script_setup_true_lang.f14c18ae.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.f5d349cf.js";import"./vue.5e78aba2.js";import"./sortablejs.f52b587b.js";import"./lodash.4558177f.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.0443ffcb.js";import"./decoration-img.1fd6147e.js";import"./attr.vue_vue_type_script_setup_true_lang.bb8d309b.js";import"./content.dc489d69.js";import"./attr.vue_vue_type_script_setup_true_lang.fa339aa3.js";import"./content.vue_vue_type_script_setup_true_lang.00fc557a.js";import"./attr.vue_vue_type_script_setup_true_lang.5d94db40.js";import"./add-nav.vue_vue_type_script_setup_true_lang.1ad2b201.js";import"./content.a6b53032.js";import"./attr.vue_vue_type_script_setup_true_lang.e7e75fe9.js";import"./content.vue_vue_type_script_setup_true_lang.554429a5.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.15985a46.js";import"./decoration.f8350c88.js";import"./attr.vue_vue_type_script_setup_true_lang.995629f5.js";import"./index.vue_vue_type_script_setup_true_lang.7cea6821.js";import"./content.a4fa1a2c.js";import"./attr.0fd232be.js";import"./content.vue_vue_type_script_setup_true_lang.37dcfd2b.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.9df59d56.js";import"./attr.vue_vue_type_script_setup_true_lang.2c389b8e.js";import"./content.vue_vue_type_script_setup_true_lang.f48d3c82.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.c2a1db6d.js";const X={class:"shadow mx-[30px] pages-preview"},Y=["onClick"],Z={key:0,class:"widget-btns py-[5px]"},g=L({__name:"preview",props:{pageMeta:{type:Object,default:()=>null},pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(m,{emit:E}){const a=m,d=E,y=O(-1),D=()=>{a.modelValue===-1?d("update:modelValue",y.value):(y.value=a.modelValue,d("update:modelValue",-1))},M=(e,o)=>{e.disabled||d("update:modelValue",o)},F=b(()=>e=>e===0),N=b(()=>e=>{var o;return((o=a.pageData)==null?void 0:o.length)===e+1}),f=b(()=>e=>(e==null?void 0:e.enabled)==0),S=e=>{e.enabled!==void 0&&(e.enabled=e.enabled?0:1)},h=(e,o)=>{if(e<0||e>=a.pageData.length||o<0||o>=a.pageData.length)return;const p=a.pageData.splice(e,1)[0];a.pageData.splice(o,0,p),d("update:modelValue",o)};return(e,o)=>{const p=A,v=T,$=z;return i(),k($,{class:"pages-preview-container"},{default:s(()=>[m.pageMeta!==null?(i(),_("div",{key:0,class:"absolute right-4 top-4",onClick:D},[l(p,null,{default:s(()=>[P("\u9875\u9762\u8BBE\u7F6E")]),_:1})])):C("",!0),c("div",X,[(i(!0),_(W,null,j(m.pageData,(t,r)=>(i(),_("div",{key:t.id,class:V(["relative",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:n=>M(t,r)},[c("div",{class:V(["absolute w-full h-full z-[100] border-dashed",{select:r==m.modelValue,hide:f.value(t.content),"border-[#dcdfe6] border-2":!(t!=null&&t.disabled)}])},null,2),J(e.$slots,"default",{},()=>{var n;return[(i(),k(K((n=u(Q)[t==null?void 0:t.name])==null?void 0:n.content),{content:t.content,styles:t.styles,key:t.id},null,8,["content","styles"]))]},!0),r==m.modelValue?(i(),_("div",Z,[c("div",null,[l(v,{effect:"dark",content:f.value(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:f.value(t.content)?u(R):u(U),onClick:n=>S(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])]),c("div",null,[l(v,{effect:"dark",content:"\u4E0A\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(q),disabled:F.value(r),onClick:B(n=>h(r,r-1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)]),c("div",null,[l(v,{effect:"dark",content:"\u4E0B\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(G),disabled:N.value(r),onClick:B(n=>h(r,r+1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)])])):C("",!0)],10,Y))),128))])]),_:3})}}});const vt=H(g,[["__scopeId","data-v-b64c4820"]]);export{vt as default};