import{d as S,s as $,c as B,o as r,a as s,b as m,G as y,F as R,r as N,Y as _,e as o,as as h,U as q,C as z,aq as D,m as i,w as v,eQ as E,eR as F,eS as I,v as P,bF as j,x as A}from"./index-CYCdBGC6.js";import{e as G}from"./index-CQf4L77-.js";import"./attr-CoFdYz4m.js";import"./el-form-item-Bv5j_pWE.js";import"./_baseClone-Z9uQWpRe.js";import"./_Uint8Array-B3XJYgGP.js";import"./_initCloneObject-Bi-rJm-i.js";import"./index-CvYJsIel.js";import"./picker-DtMjS7Ve.js";import"./index-c2FtnMV1.js";import"./index-Bot3eWaS.js";import"./index.vue_vue_type_script_setup_true_lang-DhnbIgHu.js";import"./el-tag-mNJ4yneY.js";import"./isEqual-vBvfhpmp.js";import"./el-select-cfJMJF8U.js";import"./index-B_EGNenu.js";import"./token-DI9FKtlJ.js";import"./el-table-column-DXa-yj7x.js";import"./el-checkbox-D34_EJTI.js";import"./article-DOphab59.js";import"./usePaging-XK3RQomV.js";/* empty css                       */import"./el-radio-Dt8f45f3.js";import"./picker-DDc4k5UF.js";import"./index-DW6ljc76.js";import"./index-9D75A3yp.js";import"./el-tree-CVazGIsi.js";import"./index.vue_vue_type_script_setup_true_lang-Cg3C1Ttl.js";import"./el-popover-g0_6a6JI.js";import"./el-card-hIQmf1QQ.js";import"./content.vue_vue_type_script_setup_true_lang-BcmETfMS.js";import"./decoration-img-C9nXCkej.js";import"./attr.vue_vue_type_script_setup_true_lang-BIZaPuzA.js";import"./content-BQ2dlF28.js";import"./attr.vue_vue_type_script_setup_true_lang-EdbmwLDh.js";import"./content.vue_vue_type_script_setup_true_lang-sOqesnJx.js";import"./attr.vue_vue_type_script_setup_true_lang-CJbSz9w4.js";import"./add-nav.vue_vue_type_script_setup_true_lang-qXa6MYTA.js";import"./content-BAvXGWBM.js";import"./attr.vue_vue_type_script_setup_true_lang-DLvgT06j.js";import"./content.vue_vue_type_script_setup_true_lang-DNmebwJ8.js";import"./attr.vue_vue_type_script_setup_true_lang-Db0b6ghv.js";import"./content-BcXMIb6n.js";import"./decoration-u9RQvuGl.js";import"./attr.vue_vue_type_script_setup_true_lang-COdtWjZ6.js";import"./index.vue_vue_type_script_setup_true_lang-N6scGC6w.js";import"./content-K-K9y70g.js";import"./content.vue_vue_type_script_setup_true_lang-XETsN6zT.js";import"./el-alert-BxeT8um5.js";import"./attr.vue_vue_type_script_setup_true_lang-CrUxQW4z.js";import"./content-DAtLo7Dm.js";import"./attr.vue_vue_type_script_setup_true_lang-DSaOA7gg.js";import"./content.vue_vue_type_script_setup_true_lang-Cm8LqmF3.js";import"./attr.vue_vue_type_script_setup_true_lang-BbdscbxM.js";import"./content-BfXx7mhu.js";const L={class:"pages-preview"},Q={class:"relative flex justify-center h-full mt-5 mx-10"},T=["src"],U={class:"max-w-[1200px] w-full absolute"},W=["onClick"],Y=S({__name:"preview-pc",props:{pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:b}){const u=$(),k=b,c=B(()=>t=>(t==null?void 0:t.enabled)==0),C=t=>{var l;(l=u.value[t])==null||l.open()},x=t=>{t.enabled!==void 0&&(t.enabled=t.enabled?0:1)},V=(t,l)=>{t.disabled||k("update:modelValue",l)};return(t,l)=>{const f=P,d=j;return r(),s("div",L,[m("div",Q,[t.$route.query.url?(r(),s("iframe",{key:0,ref:"previewIframeRef",class:"flex-1 h-full",width:"100%",height:"100%",scrolling:"no",src:t.$route.query.url},null,8,T)):y("",!0),m("div",U,[(r(!0),s(R,null,N(a.pageData,(e,p)=>(r(),s("div",{key:e.id,class:_(["absolute left-0 top-0",{"cursor-pointer":!(e!=null&&e.disabled)}]),onClick:n=>V(e,p)},[m("div",{class:_(["absolute w-full h-full z-[100] border-dashed",{select:p==a.modelValue,"border-[#dcdfe6] border-2":!(e!=null&&e.disabled),hide:o(c)(e.content)}]),style:h(e.styles)},null,6),q(t.$slots,"default",{},()=>{var n;return[(r(),z(D((n=o(G)[e==null?void 0:e.name])==null?void 0:n.content),{content:e.content,styles:e.styles,key:e.id,ref_for:!0,ref_key:"commonComponentRef",ref:u},null,8,["content","styles"]))]},!0),p==a.modelValue?(r(),s("div",{key:0,class:"widget-btns py-[5px]",style:h({top:e.styles.top,left:e.styles.width})},[m("div",null,[i(d,{effect:"dark",content:"编辑组件内容",placement:"right"},{default:v(()=>[i(f,{class:"py-[5px]",type:"primary",icon:o(E),onClick:n=>C(p)},null,8,["icon","onClick"])]),_:2},1024)]),m("div",null,[i(d,{effect:"dark",content:o(c)(e.content)?"显示":"隐藏",placement:"right"},{default:v(()=>[i(f,{class:"py-[5px]",type:"primary",icon:o(c)(e.content)?o(F):o(I),onClick:n=>x(e.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])])],4)):y("",!0)],10,W))),128))])])])}}}),Je=A(Y,[["__scopeId","data-v-9c63b2ff"]]);export{Je as default};
