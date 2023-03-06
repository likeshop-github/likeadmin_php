import{_ as K}from"./index.82bf0e2f.js";import{s as q,B as S,w as I,C as G,x as H,y as J,D as O,I as Q}from"./element-plus.317dd699.js";import{d as h,e as W,o as p,c as f,U as e,u as y,k as w,L as o,S as b,$ as X,af as Y,M as Z,K as U,a as l,V as ee,a7 as te,P as oe,R as le,t as ae,_ as se,T as ne,b7 as ue,b6 as re}from"./@vue.e8706010.js";import{_ as ie}from"./index.bd2421b1.js";import{_ as de}from"./picker.4e188da8.js";import{_ as me}from"./picker.2a1ca7ac.js";import{f as $,b as ce,d as pe}from"./index.cd92a33e.js";import{b as _e,c as fe}from"./decoration.ccc45395.js";import{D as be}from"./vuedraggable.eee17a05.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.3448bf9e.js";import"./index.0a69f899.js";import"./index.vue_vue_type_script_setup_true_lang.f549c02e.js";import"./index.cbeeff21.js";import"./index.vue_vue_type_script_setup_true_lang.a60e2335.js";import"./usePaging.160b82b8.js";import"./vue3-video-play.4851e3ad.js";import"./lodash.873faf2b.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./vue.7e66a746.js";import"./sortablejs.d9cb9a0e.js";const xe={class:"color-picker flex flex-1"},Fe=b("\u91CD\u7F6E"),Ve=h({__name:"index",props:{modelValue:{type:String},defaultColor:{type:String}},emits:["update:modelValue"],setup(d,{emit:E}){const x=d,t=W({get(){return x.modelValue},set(_){E("update:modelValue",_)}}),F=["#409EFF","#28C76F","#EA5455","#FF9F43","#01CFE8","#4A5DFF"],V=()=>{t.value=x.defaultColor};return(_,i)=>{const g=q,a=S,n=I;return p(),f("div",xe,[e(g,{modelValue:y(t),"onUpdate:modelValue":i[0]||(i[0]=m=>w(t)?t.value=m:null),predefine:F},null,8,["modelValue"]),e(a,{modelValue:y(t),"onUpdate:modelValue":i[1]||(i[1]=m=>w(t)?t.value=m:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),e(n,{type:"text",onClick:V},{default:o(()=>[Fe]),_:1})])}}}),v=d=>(ue("data-v-50bbe033"),d=d(),re(),d),ge={class:"decoration-tabbar min-w-[800px]"},ye={class:"flex h-full items-start"},he={class:"pages-preview mx-[30px]"},ve={class:"tabbar flex"},Ee=["src"],Ce={class:"leading-3 text-[12px] mt-[4px]"},De={class:"flex-1"},Be=v(()=>l("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2"},[b(" \u5E95\u90E8\u5BFC\u822A\u8BBE\u7F6E "),l("span",{class:"form-tips ml-[10px] !mt-0"}," \u81F3\u5C11\u6DFB\u52A02\u4E2A\u5BFC\u822A\uFF0C\u6700\u591A\u6DFB\u52A05\u4E2A\u5BFC\u822A ")],-1)),ke={class:"mb-[18px]"},Ae={class:"bg-fill-light w-full p-4 mt-4"},we={class:"upload-btn w-[60px] h-[60px]"},Ue=v(()=>l("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1)),$e={class:"upload-btn w-[60px] h-[60px]"},Se=v(()=>l("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1)),Ie=b(" \u6DFB\u52A0\u5BFC\u822A "),Te=b("\u4FDD\u5B58"),ze=h({name:"decorationTabbar"}),Pe=h({...ze,setup(d){const t=X({style:{default_color:"",selected_color:""},list:[{name:"",selected:"",unselected:"",link:{}},{name:"",selected:"",unselected:"",link:{}}]}),F=()=>{var a;((a=t.list)==null?void 0:a.length)<5?t.list.push({name:"",selected:"",unselected:"",link:{}}):$.msgError(`\u6700\u591A\u6DFB\u52A0${5}\u4E2A`)},V=a=>{var n;if(((n=t.list)==null?void 0:n.length)<=2)return $.msgError(`\u6700\u5C11\u4FDD\u7559${2}\u4E2A`);t.list.splice(a,1)},_=a=>a.relatedContext.index!=0,i=async()=>{const a=await _e();t.list=a.list,t.style=a.style},g=async()=>{await fe(ae(t)),i()};return i(),(a,n)=>{const m=ce,C=me,c=G,T=S,z=de,P=ie,D=I,B=H,k=Ve,N=J,R=O,L=Q,M=K,j=Y("perms");return p(),f("div",ge,[e(L,{shadow:"never",class:"!border-none flex-1","body-style":{height:"100%"}},{default:o(()=>[l("div",ye,[l("div",he,[l("div",ve,[(p(!0),f(ee,null,te(t.list,(u,s)=>(p(),f("div",{class:"tabbar-item flex flex-col justify-center items-center flex-1",key:s,style:se({color:t.style.default_color})},[l("img",{class:"w-[22px] h-[22px]",src:u.unselected,alt:""},null,8,Ee),l("div",Ce,ne(u.name),1)],4))),128))])]),l("div",De,[Be,e(R,{class:"mt-4","label-width":"70px"},{default:o(()=>[e(N,{"model-value":"content"},{default:o(()=>[e(B,{label:"\u5BFC\u822A\u56FE\u7247",name:"content"},{default:o(()=>{var u;return[l("div",ke,[e(y(be),{class:"draggable",modelValue:t.list,"onUpdate:modelValue":n[0]||(n[0]=s=>t.list=s),animation:"300",draggable:".draggable",move:_},{item:o(({element:s,index:A})=>[e(P,{onClose:r=>V(A),class:oe(["max-w-[400px]",{draggable:A!=0}])},{default:o(()=>[l("div",Ae,[e(c,{label:"\u5BFC\u822A\u56FE\u6807"},{default:o(()=>[e(C,{modelValue:s.unselected,"onUpdate:modelValue":r=>s.unselected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",we,[e(m,{name:"el-icon-Plus",size:16}),Ue])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(C,{modelValue:s.selected,"onUpdate:modelValue":r=>s.selected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",$e,[e(m,{name:"el-icon-Plus",size:16}),Se])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{label:"\u5BFC\u822A\u540D\u79F0"},{default:o(()=>[e(T,{modelValue:s.name,"onUpdate:modelValue":r=>s.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{label:"\u94FE\u63A5\u5730\u5740"},{default:o(()=>[e(z,{modelValue:s.link,"onUpdate:modelValue":r=>s.link=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])]),_:2},1032,["onClose","class"])]),_:1},8,["modelValue"])]),((u=t.list)==null?void 0:u.length)<5?(p(),U(c,{key:0,"label-width":"0"},{default:o(()=>[e(D,{type:"primary",onClick:F},{default:o(()=>[Ie]),_:1})]),_:1})):le("",!0)]}),_:1}),e(B,{label:"\u6837\u5F0F\u8BBE\u7F6E",name:"styles"},{default:o(()=>[e(c,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:o(()=>[e(k,{class:"max-w-[400px]",modelValue:t.style.default_color,"onUpdate:modelValue":n[1]||(n[1]=u=>t.style.default_color=u),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(c,{label:"\u9009\u4E2D\u989C\u8272"},{default:o(()=>[e(k,{class:"max-w-[400px]",modelValue:t.style.selected_color,"onUpdate:modelValue":n[2]||(n[2]=u=>t.style.selected_color=u),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),Z((p(),U(M,{class:"mt-4",fixed:!1},{default:o(()=>[e(D,{type:"primary",onClick:g},{default:o(()=>[Te]),_:1})]),_:1})),[[j,["decorate:tabbar:save"]]])])}}});const St=pe(Pe,[["__scopeId","data-v-50bbe033"]]);export{St as default};