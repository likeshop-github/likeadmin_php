!function(){function e(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);u&&(a=a.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),t.push.apply(t,a)}return t}function u(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}System.register(["./element-plus-legacy.9a978554.js","./useMenuOa-legacy.ee72adfd.js","./@vue-legacy.6b85f8d1.js"],(function(t){"use strict";var a,n,l,r,o,p,d,i,f,m,c,s,v,y,b,g,O,T,V,_,P;return{setters:[function(e){a=e.O,n=e.P,l=e.C,r=e.D,o=e.F},function(e){p=e.r},function(e){d=e.d,i=e.s,f=e.r,m=e.w,c=e.l,s=e.o,v=e.M,y=e.O,b=e.W,g=e.T,O=e.J,T=e.c,V=e.X,_=e.u,P=e.U}],execute:function(){var j=P("不配置子菜单"),h=P("配置子菜单"),w=P("网页"),I=P("小程序");t("_",d({__name:"oa-menu-form",props:{modular:{default:"master"},name:{default:""},menuType:{type:Boolean,default:!1},visitType:{default:"view"},url:{default:""},appId:{default:""},pagePath:{default:""}},emits:["update:name","update:menuType","update:visitType","update:url","update:appId","update:pagePath"],setup:function(t,d){var P=d.expose,U=d.emit,k=t,D=i(),x=f(function(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?e(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},k));return m((function(){return k}),(function(e){x.value=e}),{immediate:!0}),c((function(){"master"===k.modular&&U("update:menuType",x.value.menuType),U("update:name",x.value.name),U("update:visitType",x.value.visitType),U("update:url",x.value.url),U("update:appId",x.value.appId),U("update:pagePath",x.value.pagePath)})),P({menuFormRef:D}),function(e,u){var d=l,i=r,f=a,m=n,c=o;return s(),v(c,{ref_key:"menuFormRef",ref:D,rules:_(p),model:x.value,"label-width":"100px"},{default:y((function(){return[b(i,{label:"master"===t.modular?"主菜单名称":"子菜单名称",prop:"name"},{default:y((function(){return[b(d,{modelValue:x.value.name,"onUpdate:modelValue":u[0]||(u[0]=function(e){return x.value.name=e})},null,8,["modelValue"])]})),_:1},8,["label"]),"master"===t.modular?(s(),v(i,{key:0,label:"主菜单类型",prop:"menuType"},{default:y((function(){return[b(m,{modelValue:x.value.menuType,"onUpdate:modelValue":u[1]||(u[1]=function(e){return x.value.menuType=e})},{default:y((function(){return[b(f,{label:!1},{default:y((function(){return[j]})),_:1}),b(f,{label:!0},{default:y((function(){return[h]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})):g("",!0),x.value.menuType&&"master"===t.modular?(s(),v(i,{key:1,label:""},{default:y((function(){return[O(e.$slots,"default")]})),_:3})):g("",!0),x.value.menuType?g("",!0):(s(),T(V,{key:2},[b(i,{label:"跳转链接",prop:"visitType"},{default:y((function(){return[b(m,{modelValue:x.value.visitType,"onUpdate:modelValue":u[2]||(u[2]=function(e){return x.value.visitType=e})},{default:y((function(){return[b(f,{label:"view"},{default:y((function(){return[w]})),_:1}),b(f,{label:"miniprogram"},{default:y((function(){return[I]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),b(i,{label:"网址",prop:"url"},{default:y((function(){return[b(d,{modelValue:x.value.url,"onUpdate:modelValue":u[3]||(u[3]=function(e){return x.value.url=e})},null,8,["modelValue"])]})),_:1}),"miniprogram"==x.value.visitType?(s(),T(V,{key:0},[b(i,{label:"AppId",prop:"appId"},{default:y((function(){return[b(d,{modelValue:x.value.appId,"onUpdate:modelValue":u[4]||(u[4]=function(e){return x.value.appId=e})},null,8,["modelValue"])]})),_:1}),b(i,{label:"路径",prop:"pagePath"},{default:y((function(){return[b(d,{modelValue:x.value.pagePath,"onUpdate:modelValue":u[5]||(u[5]=function(e){return x.value.pagePath=e})},null,8,["modelValue"])]})),_:1})],64)):g("",!0)],64))]})),_:3},8,["rules","model"])}}}))}}}))}();
