import{_ as D}from"./index.f124cc07.js";import{D as v,C as b,F as h,I as U,w as y}from"./element-plus.4078815e.js";import{_ as k}from"./picker.07fc5696.js";import{a as I,f as a,F as x}from"./index.e263fbcb.js";import{d as f,r as S,a1 as _,o as M,c as N,X as u,P as t,u as e,a as n,U as q}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.3bccbd93.js";import"./axios.dc00a7f8.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0127ffd5.js";import"./index.aedc8469.js";import"./index.vue_vue_type_script_setup_true_lang.39fbc713.js";import"./index.c2cf2429.js";import"./index.d18caad5.js";import"./index.vue_vue_type_script_setup_true_lang.020a2226.js";import"./@vueuse.e1a32ef4.js";import"./usePaging.1e98218e.js";import"./vue3-video-play.36140ed9.js";import"./vuedraggable.5bfed3b5.js";import"./vue.0ef5c72b.js";import"./sortablejs.dbf1c042.js";import"./lodash.e6e9a684.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a728b5d4.js";import"./color.d7ae65d5.js";import"./clone.65443a5f.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.2274a56d.js";import"./vue-clipboard3.d9310b6d.js";import"./clipboard.cf95dd73.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";const R={class:"user-setting"},P={class:"w-80"},T={class:"w-80"},X={class:"w-80"},j={class:"w-80"},z={class:"w-80"},G=f({name:"userSetting"}),Ro=f({...G,setup(H){const d=S(),i=I(),o=_({avatar:"",account:"",name:"",password_old:"",password:"",password_confirm:""}),c=_({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}),F=async()=>{const p=i.userInfo;for(const r in o)o[r]=p[r]},w=async()=>{if(o.password_old||o.password||o.password_confirm){if(!o.password_old)return a.msgError("\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801");if(!o.password)return a.msgError("\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801");if(!o.password_confirm)return a.msgError("\u8BF7\u8F93\u5165\u786E\u5B9A\u5BC6\u7801");if(o.password_confirm!=o.password)return a.msgError("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837")}if(o.password_old&&o.password&&o.password_confirm){if(o.password_old.length<6||o.password_old.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password.length<6||o.password.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password_confirm.length<6||o.password_confirm.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4")}await x(o),i.getUserInfo()},E=async()=>{var p;await((p=d.value)==null?void 0:p.validate()),w()};return F(),(p,r)=>{const B=k,l=v,m=b,g=h,C=U,V=y,A=D;return M(),N("div",R,[u(C,{class:"!border-none",shadow:"never"},{default:t(()=>[u(g,{ref_key:"formRef",ref:d,class:"ls-form",model:e(o),rules:e(c),"label-width":"100px"},{default:t(()=>[u(l,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:t(()=>[u(B,{modelValue:e(o).avatar,"onUpdate:modelValue":r[0]||(r[0]=s=>e(o).avatar=s),limit:1},null,8,["modelValue"])]),_:1}),u(l,{label:"\u8D26\u53F7\uFF1A",prop:"account"},{default:t(()=>[n("div",P,[u(m,{modelValue:e(o).account,"onUpdate:modelValue":r[1]||(r[1]=s=>e(o).account=s),disabled:""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:t(()=>[n("div",T,[u(m,{modelValue:e(o).name,"onUpdate:modelValue":r[2]||(r[2]=s=>e(o).name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"password_old"},{default:t(()=>[n("div",X,[u(m,{modelValue:e(o).password_old,"onUpdate:modelValue":r[3]||(r[3]=s=>e(o).password_old=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:t(()=>[n("div",j,[u(m,{modelValue:e(o).password,"onUpdate:modelValue":r[4]||(r[4]=s=>e(o).password=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:t(()=>[n("div",z,[u(m,{modelValue:e(o).password_confirm,"onUpdate:modelValue":r[5]||(r[5]=s=>e(o).password_confirm=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(A,null,{default:t(()=>[u(V,{type:"primary",onClick:E},{default:t(()=>[q("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{Ro as default};