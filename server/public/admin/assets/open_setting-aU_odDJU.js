import{_ as y}from"./index-fI4avag2.js";import{y as f,d as g,j as D,s as A,z as k,o as u,a as x,m as t,w as n,b as r,e as s,B,C as S,p as I,E as R,v as q}from"./index-CYCdBGC6.js";import{E as N,a as F}from"./el-form-item-Bv5j_pWE.js";import{E as O}from"./el-card-hIQmf1QQ.js";import{E as U}from"./el-alert-BxeT8um5.js";import"./_baseClone-Z9uQWpRe.js";import"./_Uint8Array-B3XJYgGP.js";import"./_initCloneObject-Bi-rJm-i.js";function j(p){return f.post({url:"/channel.open_setting/setConfig",params:p})}function z(){return f.get({url:"/channel.open_setting/getConfig"})}const T={class:"w-80"},G={class:"w-80"},H=g({name:"wxDevConfig"}),Y=g({...H,setup(p){const o=D({app_id:"",app_secret:""}),i=A(),v={app_id:[{required:!0,message:"请输入AppID",trigger:["blur","change"]}],app_secret:[{required:!0,message:"请输入AppSecret",trigger:["blur","change"]}]},_=async()=>{const a=await z();for(const e in o)o[e]=a[e]},w=async()=>{var a;await((a=i.value)==null?void 0:a.validate()),await j(o),_()};return _(),(a,e)=>{const b=U,c=O,m=R,d=N,C=F,E=q,h=y,V=k("perms");return u(),x("div",null,[t(c,{class:"!border-none",shadow:"never"},{default:n(()=>[t(b,{type:"warning",title:"温馨提示：填写微信开放平台开发配置，请前往微信开放平台创建应用并完成认证；网站应用配置主要用于网站微信登录和微信支付",closable:!1,"show-icon":""})]),_:1}),t(C,{ref_key:"formRef",ref:i,model:s(o),rules:v,"label-width":"160px"},{default:n(()=>[t(c,{class:"!border-none mt-4",shadow:"never"},{default:n(()=>[e[2]||(e[2]=r("div",{class:"font-medium mb-7"},"网站应用",-1)),t(d,{label:"AppID",prop:"app_id"},{default:n(()=>[r("div",T,[t(m,{modelValue:s(o).app_id,"onUpdate:modelValue":e[0]||(e[0]=l=>s(o).app_id=l),placeholder:"请输入AppID"},null,8,["modelValue"])])]),_:1}),t(d,{label:"AppSecret",prop:"app_secret"},{default:n(()=>[r("div",null,[r("div",G,[t(m,{modelValue:s(o).app_secret,"onUpdate:modelValue":e[1]||(e[1]=l=>s(o).app_secret=l),placeholder:"请输入AppSecret"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),B((u(),S(h,null,{default:n(()=>[t(E,{type:"primary",onClick:w},{default:n(()=>e[3]||(e[3]=[I("保存")])),_:1})]),_:1})),[[V,["channel.open_setting/setConfig"]]])])}}});export{Y as default};