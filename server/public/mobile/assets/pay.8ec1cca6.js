import{_ as a}from"./u-loading.a27c89cd.js";import{d as s,a$ as t,x as e,o,b as r,w as u,j as p,E as i,p as d,f as l,e as n,r as f,a as y,a2 as c}from"./index.84e426be.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";var m=g(s({__name:"page-status",props:{status:{type:String,default:t.LOADING},fixed:{type:Boolean,default:!0}},setup:s=>(c,g)=>{const m=f(y("u-loading"),a),v=d;return s.status!==e(t).NORMAL?(o(),r(v,{key:0,class:p(["page-status",{"page-status--fixed":s.fixed}])},{default:u((()=>[l(" Loading "),s.status===e(t).LOADING?i(c.$slots,"loading",{key:0},(()=>[n(m,{size:60,mode:"flower"})]),!0):l("v-if",!0),l(" Error "),s.status===e(t).ERROR?i(c.$slots,"error",{key:1},void 0,!0):l("v-if",!0),l(" Empty "),s.status===e(t).EMPTY?i(c.$slots,"empty",{key:2},void 0,!0):l("v-if",!0)])),_:3},8,["class"])):i(c.$slots,"default",{key:1},void 0,!0)}}),[["__scopeId","data-v-e456cece"]]);function v(a){return c.get({url:"/pay/payWay",data:a},{isAuth:!0})}function _(a){return c.post({url:"/pay/prepay",data:a},{isAuth:!0})}function x(a){return c.get({url:"/pay/payStatus",data:a},{isAuth:!0})}export{m as _,v as a,x as g,_ as p};
