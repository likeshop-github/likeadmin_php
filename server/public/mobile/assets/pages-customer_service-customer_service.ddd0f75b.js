import{_ as e}from"./page-meta.32d87b43.js";import{d as t,u as s,c as r,r as a,a as l,o as n,g as c,e as o,w as m,l as p,t as u,f as i,x as d,b as f,af as x,F as g,p as b,G as y,h as _,aj as h}from"./index.85970f4f.js";import{_ as v}from"./u-parse.4fa5d1c7.js";import"./plugin-vue_export-helper.21dcd24c.js";const w=t({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const t=e,{getImageUrl:y}=s(),_=r((()=>`<img src="${y(t.content.qrcode)}" style="width: 100px;height: 100px; border-radius: 8px" />`));return(t,s)=>{const r=b,y=a(l("u-parse"),v);return n(),c(g,null,[o(r,{class:"bg-white p-[30rpx] flex text-[#101010] font-medium text-lg"},{default:m((()=>[p(" 联系我们 ")])),_:1}),o(r,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[30rpx] rounded-[20rpx] px-[20rpx] pb-[100rpx]"},{default:m((()=>[o(r,{class:"w-full border-solid border-0 border-b border-[#f5f5f5] p-[30rpx] text-center text-[#101010] text-base font-medium"},{default:m((()=>[p(u(e.content.title),1)])),_:1}),o(r,{class:"mt-[60rpx]"},{default:m((()=>[i("      这样渲染是为了能在小程序中长按识别二维码      "),o(y,{html:d(_)},null,8,["html"]),i('            <u-image width="200" height="200" border-radius="10rpx" :src="getImageUrl(content.qrcode)"/>')])),_:1}),e.content.remark?(n(),f(r,{key:0,class:"text-sm mt-[40rpx] font-medium"},{default:m((()=>[p(u(e.content.remark),1)])),_:1})):i("v-if",!0),e.content.mobile?(n(),f(r,{key:1,class:"text-sm mt-[24rpx] flex flex-wrap"},{default:m((()=>[x("a",{class:"ml-[10rpx] phone text-primary underline",href:"tel:"+e.content.mobile},u(e.content.mobile),9,["href"])])),_:1})):i("v-if",!0),e.content.time?(n(),f(r,{key:2,class:"text-muted text-sm mt-[30rpx]"},{default:m((()=>[p(" 服务时间："+u(e.content.time),1)])),_:1})):i("v-if",!0)])),_:1})],64)}}}),j=t({__name:"customer_service",setup(t){const s=y({pages:[]});return(async()=>{const e=await h({id:3});s.pages=JSON.parse(e.data)})(),(t,r)=>{const p=a(l("page-meta"),e),u=a(l("w-customer-service"),w),d=b;return n(),c(g,null,[o(p,{"page-style":t.$theme.pageStyle},null,8,["page-style"]),o(d,{class:"customer-service"},{default:m((()=>[(n(!0),c(g,null,_(s.pages,((e,t)=>(n(),f(d,{key:t},{default:m((()=>["customer-service"==e.name?(n(),f(u,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):i("v-if",!0)])),_:2},1024)))),128))])),_:1})],64)}}});export{j as default};
