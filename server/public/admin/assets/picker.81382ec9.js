import{P as I}from"./index.b3350a28.js";import{E as R}from"./element-plus.47dbc6c1.js";import{F as N,_ as B,a as M}from"./index.84025717.js";import{u as j,d as J,b as O}from"./index.c91e3404.js";import{_ as Q}from"./index.4ce37b3c.js";import{D as W}from"./vuedraggable.f5d349cf.js";import{d as X,r as i,aa as q,b as S,w as G,D as z,n as H,af as U,o as K,c as Y,W as n,a9 as Z,O as p,a as s,_ as P,Q as V,T as x,P as ee,J as le,$ as te,X as ae,bk as oe,bj as se}from"./@vue.c3e77981.js";import{f as ie}from"./@vueuse.a48d0173.js";const ne=X({components:{Popup:I,Draggable:W,FileItem:N,Material:B,Preview:M},props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},size:{type:String,default:"100px"},width:{type:String,default:""},height:{type:String,default:""},fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},disabled:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},uploadClass:{type:String,default:""},excludeDomain:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:a}){const v=i(),g=i(),w=i(""),_=i(!1),t=i([]),m=i([]),r=i(!0),f=i(-1),{disabled:y,limit:u,modelValue:C}=q(e),{getImageUrl:b}=j(),o=S(()=>{switch(e.type){case"image":return"\u56FE\u7247";case"video":return"\u89C6\u9891";default:return""}}),c=S(()=>e.limit-t.value.length>0),h=S(()=>r.value?u.value==-1?null:u.value-t.value.length:1),E=ie(()=>{const l=m.value.map(d=>e.excludeDomain?d.uri:d.url);r.value?t.value=[...t.value,...l]:t.value.splice(f.value,1,l.shift()),$()},1e3,!1),A=l=>{var d;y.value||(l>=0?(r.value=!1,f.value=l):r.value=!0,(d=v.value)==null||d.open())},F=l=>{m.value=l},$=()=>{const l=u.value!=1?t.value:t.value[0]||"";a("update:modelValue",l),a("change",l),k()},T=l=>{t.value.splice(l,1),$()},L=l=>{w.value=l,_.value=!0},k=()=>{H(()=>{var l;e.hiddenUpload&&(t.value=[]),(l=g.value)==null||l.clearSelect()})};return G(C,l=>{t.value=Array.isArray(l)?l:l==""?[]:[l]},{immediate:!0}),z("limit",e.limit),z("hiddenUpload",e.hiddenUpload),{popupRef:v,materialRef:g,fileList:t,tipsText:o,handleConfirm:E,meterialLimit:h,showUpload:c,showPopup:A,selectChange:F,deleteImg:T,previewUrl:w,showPreview:_,handlePreview:L,handleClose:k,getImageUrl:b}}});const D=e=>(oe("data-v-990f2367"),e=e(),se(),e),re={class:"material-select"},ue=["onClick"],de={class:"operation-btns text-xs text-center"},pe=D(()=>s("span",null,"\u4FEE\u6539",-1)),me=["onClick"],fe=D(()=>s("span",null,"\u6DFB\u52A0",-1)),ce={class:"material-wrap"};function he(e,a,v,g,w,_){const t=U("file-item"),m=Q,r=U("draggable"),f=O,y=B,u=R,C=I,b=U("preview");return K(),Y("div",re,[n(C,{ref:"popupRef",width:"1050px","custom-class":"body-padding",title:`\u9009\u62E9${e.tipsText}`,onConfirm:e.handleConfirm,onClose:e.handleClose},Z({default:p(()=>[n(u,null,{default:p(()=>[s("div",ce,[n(y,{ref:"materialRef",type:e.type,"file-size":e.fileSize,limit:e.meterialLimit,onChange:e.selectChange},null,8,["type","file-size","limit","onChange"])])]),_:1})]),_:2},[e.hiddenUpload?void 0:{name:"trigger",fn:p(()=>[s("div",{class:"material-select__trigger clearfix",onClick:a[2]||(a[2]=P(()=>{},["stop"]))},[n(r,{class:"draggable",modelValue:e.fileList,"onUpdate:modelValue":a[0]||(a[0]=o=>e.fileList=o),animation:"300","item-key":"id"},{item:p(({element:o,index:c})=>[s("div",{class:V(["material-preview",{"is-disabled":e.disabled,"is-one":e.limit==1}]),onClick:h=>e.showPopup(c)},[n(m,{onClose:h=>e.deleteImg(c)},{default:p(()=>[n(t,{uri:e.excludeDomain?e.getImageUrl(o):o,"file-size":e.size,width:e.width,height:e.height,type:e.type},null,8,["uri","file-size","width","height","type"])]),_:2},1032,["onClose"]),s("div",de,[pe,x(" | "),s("span",{onClick:P(h=>e.handlePreview(o),["stop"])},"\u67E5\u770B",8,me)])],10,ue)]),_:1},8,["modelValue"]),ee(s("div",{class:V(["material-upload",{"is-disabled":e.disabled,"is-one":e.limit==1,[e.uploadClass]:!0}]),onClick:a[1]||(a[1]=o=>e.showPopup(-1))},[le(e.$slots,"upload",{},()=>[s("div",{class:"upload-btn",style:te({width:e.width||e.size,height:e.height||e.size})},[n(f,{size:25,name:"el-icon-Plus"}),fe],4)],!0)],2),[[ae,e.showUpload]])])]),key:"0"}]),1032,["title","onConfirm","onClose"]),n(b,{modelValue:e.showPreview,"onUpdate:modelValue":a[3]||(a[3]=o=>e.showPreview=o),url:e.previewUrl,type:e.type},null,8,["modelValue","url","type"])])}const Ue=J(ne,[["render",he],["__scopeId","data-v-990f2367"]]);export{Ue as _};
