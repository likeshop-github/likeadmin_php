import{_ as e}from"./u-image.a167ac1b.js";import{d as t,r as s,a,o as l,c as r,w as i,b as c,h as d,l as m,t as f,k as n,n as u,i as x}from"./index.d48f4417.js";import{_ as p}from"./icon_visit.2578b7c2.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var o=_(t({__name:"news-card",props:{item:{default:{}},newsId:{default:""}},setup:t=>(_,o)=>{const w=s(a("u-image"),e),g=n,h=u,b=x;return l(),r(b,{url:`/pages/news_detail/news_detail?id=${t.newsId}`},{default:i((()=>[c(g,{class:"news-card flex bg-white px-[20rpx] py-[32rpx]"},{default:i((()=>[t.item.image?(l(),r(g,{key:0,class:"mr-[20rpx]"},{default:i((()=>[c(w,{src:t.item.image,width:"240",height:"180"},null,8,["src"])])),_:1})):d("v-if",!0),c(g,{class:"news-card-content flex flex-col justify-between flex-1"},{default:i((()=>[c(g,{class:"news-card-content-title text-lg font-medium"},{default:i((()=>[m(f(t.item.title),1)])),_:1}),c(g,{class:"news-card-content-intro text-gray-400 text-sm mt-[16rpx]"},{default:i((()=>[m(f(t.item.desc),1)])),_:1}),c(g,{class:"text-muted text-xs w-full flex justify-between mt-[12rpx]"},{default:i((()=>[c(g,null,{default:i((()=>[m(f(t.item.create_time),1)])),_:1}),c(g,{class:"flex items-center"},{default:i((()=>[c(h,{src:p,class:"w-[30rpx] h-[30rpx]"}),c(g,{class:"ml-[10rpx]"},{default:i((()=>[m(f(t.item.click),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["url"])}}),[["__scopeId","data-v-4508fd44"]]);export{o as _};
