import{_ as v}from"./index.7a0b01e1.js";import{C as D,D as w,I as V,F as h,w as x}from"./element-plus.5649e4ba.js";import{_ as j}from"./picker.650eb012.js";import{a as q,b as U}from"./website.67e99813.js";import{u as k}from"./index.5c8f0e5e.js";import{d as g,r as y,Z as O,am as M,o as _,c as P,U as u,L as r,a as i,u as t,M as L,K as G,R as I}from"./@vue.90bde458.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./index.fc68bab1.js";import"./index.a48aab88.js";import"./index.vue_vue_type_script_setup_true_lang.ca18352a.js";import"./index.cc290d94.js";import"./index.887041b2.js";import"./index.vue_vue_type_script_setup_true_lang.a48e4341.js";import"./usePaging.63ca32b2.js";import"./vue3-video-play.6ca8fb7a.js";import"./vuedraggable.6cb4d830.js";import"./vue.e147f0f4.js";import"./sortablejs.f52b587b.js";import"./lodash.4558177f.js";import"./vue-router.1051b4fa.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";const N={class:"website-information"},R=i("div",{class:"text-xl font-medium mb-[20px]"},"\u540E\u53F0\u8BBE\u7F6E",-1),S={class:"w-80"},W=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),K=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),T=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),Z=i("div",{class:"text-xl font-medium mb-[20px]"},"\u524D\u53F0\u8BBE\u7F6E",-1),z={class:"w-80"},H=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),J=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),Q=i("div",{class:"text-xl font-medium mb-[20px]"},"PC\u7AEF\u8BBE\u7F6E",-1),X=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A120*28px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),Y={class:"w-80"},$=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),uu={class:"w-80"},eu={class:"w-80"},ou=g({name:"webInformation"}),Ju=g({...ou,setup(tu){const d=y(),c=k(),e=O({name:"",web_favicon:"",web_logo:"",login_image:"",h5_favicon:"",shop_name:"",shop_logo:"",pc_logo:"",pc_title:"",pc_desc:"",pc_ico:"",pc_keywords:""}),f={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}],web_favicon:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9\u56FE\u6807",trigger:["change"]}],web_logo:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9logo",trigger:["change"]}],login_image:[{required:!0,message:"\u8BF7\u9009\u62E9\u767B\u5F55\u9875\u5E7F\u544A\u56FE",trigger:["change"]}],shop_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E97\u94FA/\u5546\u57CE\u540D\u79F0",trigger:["blur"]}],shop_logo:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u57CELOGO",trigger:["change"]}],pc_logo:[{required:!0,message:"\u8BF7\u9009\u62E9PC\u7AEFLOGO",trigger:["change"]}],pc_title:[{required:!0,message:"\u8BF7\u8F93\u5165PC\u7AEF\u7F51\u7AD9\u6807\u9898",trigger:["blur"]}],pc_ico:[{required:!0,message:"\u8BF7\u9009\u62E9PC\u7AEF\u7F51\u7AD9\u56FE\u6807",trigger:["change"]}]},n=async()=>{const m=await q();for(const o in e)e[o]=m[o]},C=async()=>{var m;await((m=d.value)==null?void 0:m.validate()),await U(e),c.getConfig(),n()};return n(),(m,o)=>{const p=D,s=w,a=j,F=V,A=h,E=x,b=v,B=M("perms");return _(),P("div",N,[u(A,{ref_key:"formRef",ref:d,rules:f,class:"ls-form",model:t(e),"label-width":"120px"},{default:r(()=>[u(F,{shadow:"never",class:"!border-none"},{default:r(()=>[R,u(s,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:r(()=>[i("div",S,[u(p,{modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>t(e).name=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).web_favicon,"onUpdate:modelValue":o[1]||(o[1]=l=>t(e).web_favicon=l),limit:1},null,8,["modelValue"]),W])]),_:1}),u(s,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).web_logo,"onUpdate:modelValue":o[2]||(o[2]=l=>t(e).web_logo=l),modelModifiers:{trim:!0},limit:1},null,8,["modelValue"]),K])]),_:1}),u(s,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).login_image,"onUpdate:modelValue":o[3]||(o[3]=l=>t(e).login_image=l),modelModifiers:{trim:!0},limit:1},null,8,["modelValue"]),T])]),_:1})]),_:1}),u(F,{shadow:"never",class:"!border-none mt-4"},{default:r(()=>[Z,u(s,{label:"\u524D\u53F0\u540D\u79F0",prop:"shop_name"},{default:r(()=>[i("div",z,[u(p,{modelValue:t(e).shop_name,"onUpdate:modelValue":o[4]||(o[4]=l=>t(e).shop_name=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u524D\u53F0\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).h5_favicon,"onUpdate:modelValue":o[5]||(o[5]=l=>t(e).h5_favicon=l),limit:1},null,8,["modelValue"]),H])]),_:1}),u(s,{label:"\u524D\u53F0LOGO",prop:"shop_logo"},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).shop_logo,"onUpdate:modelValue":o[6]||(o[6]=l=>t(e).shop_logo=l),limit:1},null,8,["modelValue"]),J])]),_:1})]),_:1}),u(F,{shadow:"never",class:"!border-none mt-4"},{default:r(()=>[Q,u(s,{label:"PC\u7AEFLOGO",prop:"pc_logo"},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).pc_logo,"onUpdate:modelValue":o[7]||(o[7]=l=>t(e).pc_logo=l),limit:1},null,8,["modelValue"]),X])]),_:1}),u(s,{label:"\u7F51\u7AD9\u6807\u9898",prop:"pc_title"},{default:r(()=>[i("div",Y,[u(p,{modelValue:t(e).pc_title,"onUpdate:modelValue":o[8]||(o[8]=l=>t(e).pc_title=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165PC\u7AEF\u7F51\u7AD9\u6807\u9898",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"pc_ico"},{default:r(()=>[i("div",null,[u(a,{modelValue:t(e).pc_ico,"onUpdate:modelValue":o[9]||(o[9]=l=>t(e).pc_ico=l),limit:1},null,8,["modelValue"]),$])]),_:1}),u(s,{label:"\u7F51\u7AD9\u63CF\u8FF0",prop:"pc_desc"},{default:r(()=>[i("div",uu,[u(p,{modelValue:t(e).pc_desc,"onUpdate:modelValue":o[10]||(o[10]=l=>t(e).pc_desc=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165PC\u7AEF\u7F51\u7AD9\u63CF\u8FF0"},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u7F51\u7AD9\u5173\u952E\u8BCD",prop:"pc_keywords"},{default:r(()=>[i("div",eu,[u(p,{modelValue:t(e).pc_keywords,"onUpdate:modelValue":o[11]||(o[11]=l=>t(e).pc_keywords=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165PC\u7AEF\u7F51\u7AD9\u5173\u952E\u8BCD"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1},8,["model"]),L((_(),G(b,null,{default:r(()=>[u(E,{type:"primary",onClick:C},{default:r(()=>[I("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["setting.web.web_setting/setWebsite"]]])])}}});export{Ju as default};