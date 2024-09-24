import{d as Y,s as M,a9 as N,ax as Ee,c as S,ae as Ce,V as T,T as ce,fg as Se,k as xe,aG as Ae,bx as ue,D as Le,e as _,fh as ke,H as je,X as Te,j as Re,fi as V,O as De,o as G,a as Z,b as s,m as w,w as x,t as m,p as _e,F as He,r as Fe,fj as Me,v as Ne,_ as We}from"./index-CYCdBGC6.js";import{E as Be}from"./el-card-hIQmf1QQ.js";import{u as fe}from"./getExposeType-BWfVZM2X.js";var J=null;function Ue(e){return J||(J=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),J(e)}var K=null;function qe(e){K||(K=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),K(e)}function Pe(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function W(e,t){t===void 0&&(t={});var n=document.createElement(e);return Object.keys(t).forEach(function(a){n[a]=t[a]}),n}function ye(e,t,n){var a=window.getComputedStyle(e,null)||{display:"none"};return a[t]}function Q(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(ye(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var $e='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',X=0,U=null;function Ie(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=Ze.bind(e));var n=e.__resize_listeners__;if(!n){if(e.__resize_listeners__=[],window.ResizeObserver){var a=e.offsetWidth,r=e.offsetHeight,o=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===a&&e.offsetHeight===r)||q(e)}),f=Q(e),c=f.detached,i=f.rendered;e.__resize_observer_triggered__=c===!1&&i===!1,e.__resize_observer__=o,o.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){q(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(X||(U=Pe($e)),Je(e),e.__resize_rendered__=Q(e).rendered,window.MutationObserver){var v=new MutationObserver(e.__resize_mutation_handler__);v.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=v}}e.__resize_listeners__.push(t),X++}function Ve(e,t){var n=e.__resize_listeners__;if(n){if(t&&n.splice(n.indexOf(t),1),!n.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",ee),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--X&&U&&U.parentNode.removeChild(U)}}function Ge(e){var t=e.__resize_last__,n=t.width,a=t.height,r=e.offsetWidth,o=e.offsetHeight;return r!==n||o!==a?{width:r,height:o}:null}function Ze(){var e=Q(this),t=e.rendered,n=e.detached;t!==this.__resize_rendered__&&(!n&&this.__resize_triggers__&&(te(this),this.addEventListener("scroll",ee,!0)),this.__resize_rendered__=t,q(this))}function ee(){var e=this;te(this),this.__resize_raf__&&qe(this.__resize_raf__),this.__resize_raf__=Ue(function(){var t=Ge(e);t&&(e.__resize_last__=t,q(e))})}function q(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function Je(e){var t=ye(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var n=W("div",{className:"resize-triggers"}),a=W("div",{className:"resize-expand-trigger"}),r=W("div"),o=W("div",{className:"resize-contract-trigger"});a.appendChild(r),n.appendChild(a),n.appendChild(o),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:a,expandChild:r,contract:o},te(e),e.addEventListener("scroll",ee,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function te(e){var t=e.__resize_triggers__,n=t.expand,a=t.expandChild,r=t.contract,o=r.scrollWidth,f=r.scrollHeight,c=n.offsetWidth,i=n.offsetHeight,v=n.scrollWidth,u=n.scrollHeight;r.scrollLeft=o,r.scrollTop=f,a.style.width=c+1+"px",a.style.height=i+1+"px",n.scrollLeft=v,n.scrollTop=u}var b=function(){return b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},b.apply(this,arguments)};var Ke=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function Qe(e){return t=Object.create(null),Ke.forEach(function(n){t[n]=function(a){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[a].apply(e.value,r)}}(n)}),t;var t}var Xe={autoresize:[Boolean,Object]},Ye=/^on[^a-z]/,ve=function(e){return Ye.test(e)};function B(e,t){var n=Le(e)?_(e):e;return n&&typeof n=="object"&&"value"in n?n.value||t:n||t}var et="ecLoadingOptions",tt={loading:Boolean,loadingOptions:Object},k=null,me="x-vue-echarts",he=[],j=[];(function(e,t){if(e&&typeof document<"u"){var n,a=t.prepend===!0?"prepend":"append",r=t.singleTag===!0,o=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(r){var f=he.indexOf(o);f===-1&&(f=he.push(o)-1,j[f]={}),n=j[f]&&j[f][a]?j[f][a]:j[f][a]=c()}else n=c();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function c(){var i=document.createElement("style");if(i.setAttribute("type","text/css"),t.attributes)for(var v=Object.keys(t.attributes),u=0;u<v.length;u++)i.setAttribute(v[u],t.attributes[v[u]]);var E=a==="prepend"?"afterbegin":"beforeend";return o.insertAdjacentElement(E,i),i}})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`,{});var rt=function(){if(k!=null)return k;if(typeof HTMLElement>"u"||typeof customElements>"u")return k=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(me)}catch{return k=!1}return k=!0}(),nt="ecTheme",it="ecInitOptions",st="ecUpdateOptions",pe=/(^&?~?!?)native:/,ge=Y({name:"echarts",props:b(b({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},Xe),tt),emits:{},inheritAttrs:!1,setup:function(e,t){var n=t.attrs,a=M(),r=M(),o=M(),f=M(),c=N(nt,null),i=N(it,null),v=N(st,null),u=Ee(e),E=u.autoresize,P=u.manualUpdate,z=u.loading,we=u.loadingOptions,be=S(function(){return f.value||e.option||null}),re=S(function(){return e.theme||B(c,{})}),ne=S(function(){return e.initOptions||B(i,{})}),ie=S(function(){return e.updateOptions||B(v,{})}),ze=S(function(){return function(d){var l={};for(var h in d)ve(h)||(l[h]=d[h]);return l}(n)}),$={},R=Ce().proxy.$listeners,D={};function H(d){if(r.value){var l=o.value=ke(r.value,re.value,ne.value);e.group&&(l.group=e.group),Object.keys(D).forEach(function(y){var p=D[y];if(p){var g=y.toLowerCase();g.charAt(0)==="~"&&(g=g.substring(1),p.__once__=!0);var A=l;if(g.indexOf("zr:")===0&&(A=l.getZr(),g=g.substring(3)),p.__once__){delete p.__once__;var C=p;p=function(){for(var L=[],O=0;O<arguments.length;O++)L[O]=arguments[O];C.apply(void 0,L),A.off(g,p)}}A.on(g,p)}}),E.value?je(function(){l&&!l.isDisposed()&&l.resize(),h()}):h()}function h(){var y=d||be.value;y&&l.setOption(y,ie.value)}}function I(){o.value&&(o.value.dispose(),o.value=void 0)}R?Object.keys(R).forEach(function(d){pe.test(d)?$[d.replace(pe,"$1")]=R[d]:D[d]=R[d]}):Object.keys(n).filter(function(d){return ve(d)}).forEach(function(d){var l=d.charAt(2).toLowerCase()+d.slice(3);if(l.indexOf("native:")!==0)l.substring(l.length-4)==="Once"&&(l="~".concat(l.substring(0,l.length-4))),D[l]=n[d];else{var h="on".concat(l.charAt(7).toUpperCase()).concat(l.slice(8));$[h]=n[d]}});var F=null;T(P,function(d){typeof F=="function"&&(F(),F=null),d||(F=T(function(){return e.option},function(l,h){l&&(o.value?o.value.setOption(l,b({notMerge:l!==h},ie.value)):H())},{deep:!0}))},{immediate:!0}),T([re,ne],function(){I(),H()},{deep:!0}),ce(function(){e.group&&o.value&&(o.value.group=e.group)});var Oe=Qe(o);return function(d,l,h){var y=N(et,{}),p=S(function(){return b(b({},B(y,{})),h==null?void 0:h.value)});ce(function(){var g=d.value;g&&(l.value?g.showLoading(p.value):g.hideLoading())})}(o,z,we),function(d,l,h){var y=null;T([h,d,l],function(p,g,A){var C=p[0],L=p[1],O=p[2];if(C&&L&&O){var se=O===!0?{}:O,oe=se.throttle,ae=oe===void 0?100:oe,le=se.onResize,de=function(){L.resize(),le==null||le()};y=ae?Se(de,ae):de,Ie(C,y)}A(function(){C&&y&&Ve(C,y)})})}(o,E,r),xe(function(){H()}),Ae(function(){rt&&a.value?a.value.__dispose=I:I()}),b({chart:o,root:a,inner:r,setOption:function(d,l){e.manualUpdate&&(f.value=d),o.value?o.value.setOption(d,l||{}):H(d)},nonEventAttrs:ze,nativeListeners:$},Oe)},render:function(){var e=b(b({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",ue(me,e,[ue("div",{ref:"inner",class:"vue-echarts-inner"})])}});const ot={class:"workbench"},at={class:"lg:flex"},lt={class:"flex leading-9"},dt={class:"flex leading-9"},ct={class:"flex leading-9"},ut=["href"],_t=["href"],ft={class:"text-tx-secondary text-xs ml-4"},vt={class:"flex flex-wrap"},ht={class:"w-1/2 md:w-1/4"},pt={class:"text-6xl"},gt={class:"text-tx-secondary text-xs"},xt={class:"w-1/2 md:w-1/4"},yt={class:"text-6xl"},mt={class:"text-tx-secondary text-xs"},wt={class:"w-1/2 md:w-1/4"},bt={class:"text-6xl"},zt={class:"text-tx-secondary text-xs"},Ot={class:"w-1/2 md:w-1/4"},Et={class:"text-6xl"},Ct={class:"text-tx-secondary text-xs"},St={class:"function mb-4"},At={class:"flex flex-wrap"},Lt={class:"mt-2"},kt={class:"lg:flex gap-4"},jt=Y({name:"workbench"}),Ht=Y({...jt,setup(e){const t=Te(),n=fe(),a=fe();T(()=>t.theme,()=>{f()});const r=Re({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["访问量"]},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[],type:"line",smooth:!0,color:t.theme,lineStyle:{color:t.theme,width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:t.theme},{offset:1,color:t.theme}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"单位（万）"},tooltip:{trigger:"axis"},series:[{name:"销售量",data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:V(t.theme,.7)},{offset:1,color:t.theme}]}}}]}}),o=()=>{Me().then(c=>{r.version=c.version,r.today=c.today,r.menu=c.menu,r.visitor=c.visitor,r.support=c.support,r.visitorOption.xAxis.data=[],r.visitorOption.series[0].data=[],r.saleOption.xAxis.data=[],r.saleOption.series[0].data=[],c.visitor.date.reverse().forEach(i=>{r.visitorOption.xAxis.data.push(i)}),c.visitor.list[0].data.forEach(i=>{r.visitorOption.series[0].data.push(i)}),c.sale.date.reverse().forEach(i=>{r.saleOption.xAxis.data.push(i)}),c.sale.list[0].data.forEach(i=>{i<=50&&(i={value:i,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:V("#ff8729",.7)},{offset:1,color:"#ff8729"}]}}}),r.saleOption.series[0].data.push(i)})}).catch(c=>{console.log("err",c)})},f=()=>{var c,i,v,u;r.visitorOption.series[0].color=t.theme,r.visitorOption.series[0].lineStyle.color=t.theme,r.visitorOption.series[0].areaStyle.color.colorStops=[{offset:0,color:t.theme},{offset:1,color:t.theme}],r.saleOption.series[0].itemStyle.color.colorStops=[{offset:0,color:V(t.theme,.7)},{offset:1,color:t.theme}],(c=n.value)==null||c.clear(),(i=a.value)==null||i.clear(),(v=n.value)==null||v.setOption(r.saleOption),(u=a.value)==null||u.setOption(r.visitorOption)};return xe(()=>{o()}),(c,i)=>{const v=Ne,u=Be,E=We,P=De("router-link");return G(),Z("div",ot,[s("div",at,[w(u,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:x(()=>i[0]||(i[0]=[s("span",{class:"card-title"},"版本信息",-1)])),default:x(()=>[s("div",null,[s("div",lt,[i[1]||(i[1]=s("div",{class:"w-20"},"平台名称",-1)),s("span",null,m(_(r).version.name),1)]),s("div",dt,[i[2]||(i[2]=s("div",{class:"w-20"},"当前版本",-1)),s("span",null,m(_(r).version.version),1)]),s("div",ct,[i[5]||(i[5]=s("div",{class:"w-20"},"获取渠道",-1)),s("div",null,[s("a",{href:_(r).version.channel.website,target:"_blank"},[w(v,{type:"success",size:"small"},{default:x(()=>i[3]||(i[3]=[_e("官网")])),_:1})],8,ut),s("a",{class:"ml-3",href:_(r).version.channel.gitee,target:"_blank"},[w(v,{type:"danger",size:"small"},{default:x(()=>i[4]||(i[4]=[_e("Gitee")])),_:1})],8,_t)])])])]),_:1}),w(u,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:x(()=>[s("div",null,[i[6]||(i[6]=s("span",{class:"card-title"},"今日数据",-1)),s("span",ft," 更新时间："+m(_(r).today.time),1)])]),default:x(()=>[s("div",vt,[s("div",ht,[i[7]||(i[7]=s("div",{class:"leading-10"},"销售额",-1)),s("div",pt,m(_(r).today.today_sales),1),s("div",gt," 总："+m(_(r).today.total_sales),1)]),s("div",xt,[i[8]||(i[8]=s("div",{class:"leading-10"},"成交订单",-1)),s("div",yt,m(_(r).today.order_num),1),s("div",mt," 总："+m(_(r).today.order_sum),1)]),s("div",wt,[i[9]||(i[9]=s("div",{class:"leading-10"},"新增用户",-1)),s("div",bt,m(_(r).today.today_new_user),1),s("div",zt," 总："+m(_(r).today.total_new_user),1)]),s("div",Ot,[i[10]||(i[10]=s("div",{class:"leading-10"},"新增访问量",-1)),s("div",Et,m(_(r).today.today_visitor),1),s("div",Ct," 总："+m(_(r).today.total_visitor),1)])])]),_:1})]),s("div",St,[w(u,{class:"flex-1 !border-none",shadow:"never"},{header:x(()=>i[11]||(i[11]=[s("span",null,"常用功能",-1)])),default:x(()=>[s("div",At,[(G(!0),Z(He,null,Fe(_(r).menu,z=>(G(),Z("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:z},[w(P,{to:z.url,class:"mb-3 flex flex-col items-center"},{default:x(()=>[w(E,{width:"40px",height:"40px",src:z==null?void 0:z.image},null,8,["src"]),s("div",Lt,m(z.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),s("div",kt,[w(u,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:x(()=>i[12]||(i[12]=[s("span",null,"访问量趋势图",-1)])),default:x(()=>[s("div",null,[w(_(ge),{ref_key:"visitorChart",ref:a,style:{height:"350px"},option:_(r).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),w(u,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:x(()=>i[13]||(i[13]=[s("span",null,"销售额趋势图",-1)])),default:x(()=>[s("div",null,[w(_(ge),{ref_key:"saleChart",ref:n,style:{height:"350px"},option:_(r).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{Ht as default};