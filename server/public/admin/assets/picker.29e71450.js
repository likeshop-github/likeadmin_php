import{C as H,w as j,D as z,F as Q,B as W,L as J,b as X,a as Y,M as Z,N as ee,d as te,e as ae,f as le}from"./element-plus.504c2ead.js";import{d as G,b as ue}from"./index.0c7ef231.js";import{d as C,r as V,o as p,c as S,a as E,V as B,a7 as T,Q as ne,U as b,u as t,T as se,W as c,a0 as oe,w as F,O as f,a8 as ie,P as de,M as P,j as x,b as D,S as I,s as pe,_ as ce}from"./@vue.2527ecfd.js";import{_ as re}from"./index.vue_vue_type_script_setup_true_lang.6dfc20ab.js";import{u as me}from"./usePaging.fb804618.js";import{m as _e}from"./article.b1b12df1.js";import{I as fe}from"./@element-plus.fec869e0.js";import{P as Ee}from"./index.e8a4af86.js";var g=(u=>(u.SHOP_PAGES="shop",u.APPTOOL="application_tool",u.OTHER_LINK="other_link",u))(g||{}),e=(u=>(u.SHOP_PAGES="shop",u.ARTICLE_LIST="article",u.CUSTOM_LINK="custom",u))(e||{});const he={class:"shop-pages h-[458px]"},ye={class:"link-list flex flex-wrap"},Ae=["onClick"],Se=C({__name:"shop-pages",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(u,{emit:A}){const r=A,h=V([{path:"/pages/index/index",name:"\u5546\u57CE\u9996\u9875",type:e.SHOP_PAGES,canTab:!0},{path:"/pages/news/news",name:"\u6587\u7AE0\u8D44\u8BAF",type:e.SHOP_PAGES,canTab:!0},{path:"/pages/user/user",name:"\u4E2A\u4EBA\u4E2D\u5FC3",type:e.SHOP_PAGES,canTab:!0},{path:"/pages/collection/collection",name:"\u6211\u7684\u6536\u85CF",type:e.SHOP_PAGES},{path:"/pages/customer_service/customer_service",name:"\u8054\u7CFB\u5BA2\u670D",type:e.SHOP_PAGES},{path:"/pages/user_set/user_set",name:"\u4E2A\u4EBA\u8BBE\u7F6E",type:e.SHOP_PAGES},{path:"/pages/as_us/as_us",name:"\u5173\u4E8E\u6211\u4EEC",type:e.SHOP_PAGES},{path:"/pages/user_data/user_data",name:"\u4E2A\u4EBA\u8D44\u6599",type:e.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u9690\u79C1\u653F\u7B56",query:{type:"privacy"},type:e.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u670D\u52A1\u534F\u8BAE",query:{type:"service"},type:e.SHOP_PAGES},{path:"/pages/search/search",name:"\u641C\u7D22",type:e.SHOP_PAGES},{path:"/packages/pages/user_wallet/user_wallet",name:"\u6211\u7684\u94B1\u5305",type:e.SHOP_PAGES}]),i=l=>{r("update:modelValue",l)};return(l,s)=>(p(),S("div",he,[E("div",ye,[(p(!0),S(B,null,T(t(h),(_,a)=>(p(),S("div",{class:ne(["link-item border border-br px-5 py-[5px] rounded-[3px] cursor-pointer mr-[10px] mb-[10px]",{"border-primary text-primary":u.modelValue.path==_.path&&u.modelValue.name==_.name}]),key:a,onClick:n=>i(_)},b(_.name),11,Ae))),128))])]))}}),ve={class:"custom-link h-[428px] mt-[30px]"},Pe={class:"flex flex-wrap items-center"},ge={class:"ml-4 flex-1 min-w-[100px]"},xe=E("div",{class:"form-tips"}," \u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5E26\u6709\u201Chttps://\u201D\u6216\u201Chttp://\u201D\u7684\u94FE\u63A5\u5730\u5740\uFF0C\u94FE\u63A5\u7684\u57DF\u540D\u5FC5\u987B\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8BBE\u7F6E\u4E1A\u52A1\u57DF\u540D ",-1),Ve=C({__name:"custom-link",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(u,{emit:A}){const r=A,h=i=>{r("update:modelValue",{path:"/pages/webview/webview",query:{url:i},type:e.CUSTOM_LINK})};return(i,l)=>{var _;const s=H;return p(),S("div",ve,[E("div",Pe,[se(" \u81EA\u5B9A\u4E49\u94FE\u63A5 "),E("div",ge,[c(s,{"model-value":(_=u.modelValue.query)==null?void 0:_.url,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740",onInput:h},null,8,["model-value"])])]),xe])}}}),Ce={class:"article-list"},ke={class:"flex row-center"},be={class:"flex items-center"},Fe={class:"ml-4 overflow-hidden"},Oe={class:"text-base line-clamp-2"},we={class:"flex justify-end mt-4"},Le=C({__name:"article-list",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(u,{emit:A}){const r=u,h=A,i=V({path:"/pages/news_detail/news_detail",name:"",query:{},type:e.ARTICLE_LIST}),l=oe({name:"",is_show:1}),{pager:s,getLists:_,resetPage:a,resetParams:n}=me({fetchFun:_e,params:l}),m=d=>d==Number(i.value.id),v=d=>{i.value={id:d.id,name:d.title,path:"/pages/news_detail/news_detail",query:{id:d.id},type:e.ARTICLE_LIST},h("update:modelValue",i.value)};return F(()=>r.modelValue,d=>{if(d.type!=e.ARTICLE_LIST)return i.value={id:"",name:"",path:"/pages/news_detail/news_detail",type:e.SHOP_PAGES};i.value=d},{immediate:!0}),_(),(d,o)=>{const O=H,k=j,w=z,$=Q,R=W,L=J,N=X,U=Y,K=Z,M=re,q=ee;return p(),S("div",Ce,[c($,{ref:"formRef",model:t(l),inline:!0},{default:f(()=>[c(w,{label:"\u6587\u7AE0\u540D\u79F0"},{default:f(()=>[c(O,{class:"w-[280px]",modelValue:t(l).name,"onUpdate:modelValue":o[0]||(o[0]=y=>t(l).name=y),placeholder:"\u8BF7\u8F93\u5165",clearable:"",onKeyup:ie(t(a),["enter"])},null,8,["modelValue","onKeyup"]),c(k,{type:"primary",class:"ml-4",icon:t(fe),onClick:t(a)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["model"]),de((p(),P(K,{size:"large",data:t(s).lists,height:"360px",onRowClick:v},{default:f(()=>[c(L,{label:"\u9009\u62E9","min-width":"50"},{default:f(({row:y})=>[E("div",ke,[c(R,{"model-value":m(y.id),size:"large",onChange:$e=>v(y)},null,8,["model-value","onChange"])])]),_:1}),c(L,{label:"\u6587\u7AE0\u540D\u79F0","min-width":"180"},{default:f(({row:y})=>[E("div",be,[c(N,{fit:"cover",src:y.image,class:"flex-none w-[58px] h-[58px]"},null,8,["src"]),E("div",Fe,[c(U,{effect:"dark",content:y.title,placement:"top"},{default:f(()=>[E("div",Oe,b(y.title),1)]),_:2},1032,["content"])])])]),_:1}),c(L,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"140"})]),_:1},8,["data"])),[[q,t(s).loading]]),E("div",we,[c(M,{modelValue:t(s),"onUpdate:modelValue":o[1]||(o[1]=y=>x(s)?s.value=y:null),onChange:t(_)},null,8,["modelValue","onChange"])])])}}});const Ie=G(Le,[["__scopeId","data-v-90ff22ec"]]),Be={class:"link flex"},Te={class:"flex-1 pl-4"},He=C({__name:"index",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(u,{emit:A}){const r=u,h=A,i=V([{name:"\u5546\u57CE\u9875\u9762",type:g.SHOP_PAGES,children:[{name:"\u57FA\u7840\u9875\u9762",type:e.SHOP_PAGES,link:{}}]},{name:"\u5E94\u7528\u5DE5\u5177",type:g.APPTOOL,children:[{name:"\u6587\u7AE0\u8D44\u8BAF",type:e.ARTICLE_LIST,link:{}}]},{name:"\u5176\u4ED6",type:g.OTHER_LINK,children:[{name:"\u81EA\u5B9A\u4E49\u94FE\u63A5",type:e.CUSTOM_LINK,link:{}}]}]),l=D({get(){let a={};return i.value.forEach(n=>{const m=n.children.find(v=>v.type==s.value);m&&(a=m)}),a.link},set(a){i.value.forEach(n=>{n.children.forEach(m=>{m.type==s.value&&(m.link=a)})})}}),s=V(e.SHOP_PAGES),_=a=>{s.value=a};return F(l,a=>{!a.type||h("update:modelValue",a)},{deep:!0}),F(()=>r.modelValue,a=>{s.value=a.type,l.value=a},{immediate:!0}),(a,n)=>{const m=te,v=ae,d=le;return p(),S("div",Be,[c(d,{"default-active":t(s),class:"w-[160px] min-h-[350px] link-menu","default-openeds":[t(g).SHOP_PAGES,t(g).APPTOOL,t(g).OTHER_LINK],onSelect:_},{default:f(()=>[(p(!0),S(B,null,T(t(i),(o,O)=>(p(),P(v,{index:o.type,key:O},{title:f(()=>[E("span",null,b(o.name),1)]),default:f(()=>[(p(!0),S(B,null,T(o.children,(k,w)=>(p(),P(m,{index:k.type,key:w,style:{"min-width":"160px"}},{default:f(()=>[E("span",null,b(k.name),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["default-active","default-openeds"]),E("div",Te,[t(e).SHOP_PAGES==t(s)?(p(),P(Se,{key:0,modelValue:t(l),"onUpdate:modelValue":n[0]||(n[0]=o=>x(l)?l.value=o:null)},null,8,["modelValue"])):I("",!0),t(e).ARTICLE_LIST==t(s)?(p(),P(Ie,{key:1,modelValue:t(l),"onUpdate:modelValue":n[1]||(n[1]=o=>x(l)?l.value=o:null)},null,8,["modelValue"])):I("",!0),t(e).CUSTOM_LINK==t(s)?(p(),P(Ve,{key:2,modelValue:t(l),"onUpdate:modelValue":n[2]||(n[2]=o=>x(l)?l.value=o:null)},null,8,["modelValue"])):I("",!0)])])}}});const Ge=G(He,[["__scopeId","data-v-090c0cd0"]]),De=C({__name:"picker",props:{modelValue:{type:Object},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(u,{emit:A}){const r=u,h=A,i=pe(),l=V({path:"",type:e.SHOP_PAGES}),s=()=>{h("update:modelValue",l.value)},_=D(()=>{var a,n,m;switch(console.log(r.modelValue),(a=r.modelValue)==null?void 0:a.type){case e.SHOP_PAGES:return r.modelValue.name;case e.ARTICLE_LIST:return r.modelValue.name;case e.CUSTOM_LINK:return(n=r.modelValue.query)==null?void 0:n.url;default:return(m=r.modelValue)==null?void 0:m.name}});return F(()=>r.modelValue,a=>{a!=null&&a.type&&(l.value=a)},{immediate:!0}),(a,n)=>{const m=ue,v=H;return p(),S("div",{class:"link-picker flex-1",onClick:n[2]||(n[2]=d=>{var o;return!u.disabled&&((o=t(i))==null?void 0:o.open())})},[c(v,{"model-value":t(_),placeholder:"\u8BF7\u9009\u62E9\u94FE\u63A5",readonly:"",disabled:u.disabled},{suffix:f(()=>{var d;return[(d=u.modelValue)!=null&&d.path?(p(),P(m,{key:1,name:"el-icon-Close",onClick:n[0]||(n[0]=ce(o=>!u.disabled&&h("update:modelValue",{}),["stop"]))})):(p(),P(m,{key:0,name:"el-icon-ArrowRight"}))]}),_:1},8,["model-value","disabled"]),c(Ee,{ref_key:"popupRef",ref:i,width:"900px",title:"\u94FE\u63A5\u9009\u62E9",onConfirm:s},{default:f(()=>[c(Ge,{modelValue:t(l),"onUpdate:modelValue":n[1]||(n[1]=d=>x(l)?l.value=d:null)},null,8,["modelValue"])]),_:1},512)])}}});const Qe=G(De,[["__scopeId","data-v-9c0e1b9f"]]);export{Qe as _};
