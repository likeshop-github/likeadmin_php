import{_ as v}from"./items.vue.6bb962a1.js";import{f as q,a5 as C,D as d,j as z,g as E,F as A,o as a,c as o,a as m,k as e,t as l,N as B,n as D,Y as N,Z as b,b as _,a6 as j,m as L}from"./entry.edbe2177.js";import{u as S}from"./asyncData.018825d1.js";import{e as V,a as $}from"./empty_news.a51f61f1.js";import{g as F}from"./news.fce18aa1.js";import{E as I}from"./index.41f1a591.js";import"./nuxt-link.5da8524b.js";import"./debounce.e1664469.js";import"./index.d1bc2ca9.js";import"./index.4396163b.js";import"./isUndefined.81a854e4.js";const P={class:"min-h-full flex flex-col"},U={class:"text-4xl mb-5"},Y={key:0},R={key:1},T={key:0,class:"bg-white px-5 rounded overflow-hidden"},Z={key:0,class:"pt-5 text-tx-secondary"},G={class:"py-4 flex justify-end"},H={key:1,class:"flex-1 flex justify-center items-center"},ne=q({__name:"index",async setup(J){let r,u;const s=C(),g=d(()=>s.params.source),y=d(()=>s.query.keywords||""),f=d(()=>s.query.cid||""),n=z({page_no:1,page_size:15,keyword:y,cid:f,sort:g}),{data:i,refresh:p,pending:h}=([r,u]=E(()=>S(()=>F(n),{initialCache:!1},"$ewxCUYuASd")),r=await r,u(),r),k=d(()=>{switch(s.params.source){case"hot":return"热门资讯";case"new":return" 最新资讯";default:return"全部资讯"}});return A([()=>s.query.keywords,()=>s.query.cid],()=>{p()}),(K,c)=>{const w=v,x=j;return a(),o("div",P,[m("div",U,[e(s).query.keywords?(a(),o("span",Y,' 查找"'+l(e(s).query.keywords)+'" ',1)):(a(),o("span",R,l(e(s).query.name||e(k)),1))]),B((a(),o("div",null,[e(i).lists.length?(a(),o("div",T,[e(s).query.keywords?(a(),o("div",Z," 为您找到相关结果 "+l(e(i).count)+"个 ",1)):D("",!0),(a(!0),o(N,null,b(e(i).lists,t=>(a(),L(w,{key:t.id,id:t.id,title:t.title,desc:t.desc,click:t.click,author:t.author,"create-time":t.create_time,image:t.image,"only-title":!1},null,8,["id","title","desc","click","author","create-time","image"]))),128)),m("div",G,[_(e(I),{"current-page":e(n).page_no,"onUpdate:currentPage":c[0]||(c[0]=t=>e(n).page_no=t),total:e(i).count,"page-size":e(n).page_size,"hide-on-single-page":"",onCurrentChange:c[1]||(c[1]=t=>e(p)())},null,8,["current-page","total","page-size"])])])):(a(),o("div",H,[_(e($),{image:e(V),description:"暂无资讯","image-size":250},null,8,["image"])]))])),[[x,e(h)]])])}}});export{ne as default};