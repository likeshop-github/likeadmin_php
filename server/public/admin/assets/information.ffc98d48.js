import{_ as b}from"./index.ce2343c9.js";import{B as w,C as A,I as B,D as v,w as h}from"./element-plus.20e8dc41.js";import{_ as D}from"./picker.dbb9598d.js";import{a as V,b as x}from"./website.14116cf2.js";import{d as q,r as j,a1 as k,ah as O,o as d,c as U,W as o,O as l,a as i,P as y,M as W,U as G}from"./@vue.af680e04.js";import"./index.2472fd00.js";import"./@vueuse.8c34eaea.js";import"./lodash.badb96a8.js";import"./axios.cb90d22e.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.034bf3af.js";import"./nprogress.68de8c98.js";import"./vue-clipboard3.f6b8ce17.js";import"./clipboard.82aa429a.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./lodash-es.70b90cb6.js";import"./dayjs.fb6e5f02.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.c0abb57a.js";import"./index.28799130.js";import"./index.vue_vue_type_script_setup_true_lang.eeda9cd1.js";import"./index.fe637785.js";import"./index.vue_vue_type_script_setup_true_lang.915b8e1f.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./vuedraggable.3cd96cdb.js";import"./vue.6fb9f84e.js";import"./sortablejs.c2342ac1.js";const I={class:"website-information"},L={class:"w-80"},N=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),R=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),M=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),P=i("div",{class:"text-xl font-medium mb-[20px]"},"\u5546\u57CE\u8BBE\u7F6E",-1),S={class:"w-80"},T=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),z=G("\u4FDD\u5B58"),Ge=q({__name:"information",setup(H){const s=j(),e=k({name:"",web_favicon:"",web_logo:"",login_image:"",shop_name:"",shop_logo:""}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}],web_favicon:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9\u56FE\u6807",trigger:["change"]}],web_logo:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9logo",trigger:["change"]}],login_image:[{required:!0,message:"\u8BF7\u9009\u62E9\u767B\u5F55\u9875\u5E7F\u544A\u56FE",trigger:["change"]}],shop_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E97\u94FA/\u5546\u57CE\u540D\u79F0",trigger:["blur"]}],shop_logo:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u57CELOGO",trigger:["change"]}]},n=async()=>{const a=await V();for(const u in e)e[u]=a[u]},g=async()=>{var a;await((a=s.value)==null?void 0:a.validate()),await x(e),n()};return n(),(a,u)=>{const p=w,r=A,m=D,F=B,c=v,f=h,C=b,E=O("perms");return d(),U("div",I,[o(c,{ref_key:"formRef",ref:s,rules:_,class:"ls-form",model:e,"label-width":"120px"},{default:l(()=>[o(F,{shadow:"never",class:"!border-none"},{default:l(()=>[o(r,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:l(()=>[i("div",L,[o(p,{modelValue:e.name,"onUpdate:modelValue":u[0]||(u[0]=t=>e.name=t),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),o(r,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:l(()=>[i("div",null,[o(m,{modelValue:e.web_favicon,"onUpdate:modelValue":u[1]||(u[1]=t=>e.web_favicon=t),limit:1},null,8,["modelValue"]),N])]),_:1}),o(r,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:l(()=>[i("div",null,[o(m,{modelValue:e.web_logo,"onUpdate:modelValue":u[2]||(u[2]=t=>e.web_logo=t),limit:1},null,8,["modelValue"]),R])]),_:1}),o(r,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:l(()=>[i("div",null,[o(m,{modelValue:e.login_image,"onUpdate:modelValue":u[3]||(u[3]=t=>e.login_image=t),limit:1},null,8,["modelValue"]),M])]),_:1})]),_:1}),o(F,{shadow:"never",class:"!border-none mt-4"},{default:l(()=>[P,o(r,{label:"\u5546\u57CE\u540D\u79F0",prop:"shop_name"},{default:l(()=>[i("div",S,[o(p,{modelValue:e.shop_name,"onUpdate:modelValue":u[4]||(u[4]=t=>e.shop_name=t),placeholder:"\u8BF7\u8F93\u5165\u5E97\u94FA/\u5546\u57CE\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),o(r,{label:"\u5546\u57CELOGO",prop:"shop_logo"},{default:l(()=>[i("div",null,[o(m,{modelValue:e.shop_logo,"onUpdate:modelValue":u[5]||(u[5]=t=>e.shop_logo=t),limit:1},null,8,["modelValue"]),T])]),_:1})]),_:1})]),_:1},8,["model"]),y((d(),W(C,null,{default:l(()=>[o(f,{type:"primary",onClick:g},{default:l(()=>[z]),_:1})]),_:1})),[[E,["setting.web.web_setting/setWebsite"]]])])}}});export{Ge as default};