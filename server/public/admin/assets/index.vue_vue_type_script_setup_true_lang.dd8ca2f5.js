import{w as D,D as v,G as z,H as R,C as k,F as N}from"./element-plus.504c2ead.js";import{f as i}from"./index.0c7ef231.js";import{P as S}from"./index.e8a4af86.js";import{d as U,s as E,a0 as x,o as y,c as q,W as u,O as o,T as _,a as f,u as a,U as m,M as O,S as M}from"./@vue.2527ecfd.js";const j={class:"export-data"},G={class:"flex"},I=f("span",{class:"flex-none ml-2 mr-2"},"\u9875\uFF0C\u81F3",-1),W=U({__name:"index",props:{params:{type:Object,default:()=>({})},pageSize:{type:Number,default:25},fetchFun:{type:Function,required:!0}},setup(A){const c=E(),p=A,g=E(),t=x({page_type:0,page_start:1,page_end:200,file_name:""}),b={page_start:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D77\u59CB\u9875\u7801"},{type:"number",message:"\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570"},{validator:(l,e,r)=>{if(e<=0)return r(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));r()}}],page_end:[{required:!0,message:"\u8BF7\u8F93\u5165\u7ED3\u675F\u9875\u7801"},{type:"number",message:"\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570"},{validator:(l,e,r)=>{if(e<=0)return r(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));r()}}]},d=x({count:0,sum_page:0,page_size:0,max_page:0,all_max_size:0}),B=async()=>{const l=await p.fetchFun({...p.params,page_size:p.pageSize,export:1});Object.assign(d,l),t.file_name=l.file_name,t.page_end=l.page_end,t.page_start=l.page_start},V=async()=>{var l,e;await((l=c.value)==null?void 0:l.validate()),i.loading("\u6B63\u5728\u5BFC\u51FA\u4E2D...");try{await p.fetchFun({...p.params,...t,page_size:p.pageSize,export:2}),(e=g.value)==null||e.close(),i.closeLoading()}catch{i.closeLoading()}};return B(),(l,e)=>{const r=D,n=v,C=z,w=R,F=k,h=N;return y(),q("div",j,[u(S,{ref_key:"popupRef",ref:g,title:"\u5BFC\u51FA\u8BBE\u7F6E",width:"500px","confirm-button-text":"\u786E\u8BA4\u5BFC\u51FA",onConfirm:V,async:!0,onOpen:B},{trigger:o(()=>[u(r,null,{default:o(()=>[_("\u5BFC\u51FA")]),_:1})]),default:o(()=>[f("div",null,[u(h,{ref_key:"formRef",ref:c,model:a(t),"label-width":"120px",rules:b},{default:o(()=>[u(n,{label:"\u6570\u636E\u91CF\uFF1A"},{default:o(()=>[_(" \u9884\u8BA1\u5BFC\u51FA"+m(a(d).count)+"\u6761\u6570\u636E\uFF0C \u5171"+m(a(d).sum_page)+"\u9875\uFF0C\u6BCF\u9875"+m(a(d).page_size)+"\u6761\u6570\u636E ",1)]),_:1}),u(n,{label:"\u5BFC\u51FA\u9650\u5236\uFF1A"},{default:o(()=>[_(" \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8"+m(a(d).max_page)+"\u9875\uFF0C\u5171"+m(a(d).all_max_size)+"\u6761\u6570\u636E ",1)]),_:1}),u(n,{prop:"page_type",label:"\u5BFC\u51FA\u8303\u56F4\uFF1A",required:""},{default:o(()=>[u(w,{modelValue:a(t).page_type,"onUpdate:modelValue":e[0]||(e[0]=s=>a(t).page_type=s)},{default:o(()=>[u(C,{label:0},{default:o(()=>[_("\u5168\u90E8\u5BFC\u51FA")]),_:1}),u(C,{label:1},{default:o(()=>[_("\u5206\u9875\u5BFC\u51FA")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(t).page_type==1?(y(),O(n,{key:0,label:"\u5206\u9875\u8303\u56F4\uFF1A"},{default:o(()=>[f("div",G,[u(n,{prop:"page_start"},{default:o(()=>[u(F,{style:{width:"140px"},modelValue:a(t).page_start,"onUpdate:modelValue":e[1]||(e[1]=s=>a(t).page_start=s),modelModifiers:{number:!0},placeholder:""},null,8,["modelValue"])]),_:1}),I,u(n,{prop:"page_end"},{default:o(()=>[u(F,{style:{width:"140px"},modelValue:a(t).page_end,"onUpdate:modelValue":e[2]||(e[2]=s=>a(t).page_end=s),modelModifiers:{number:!0},placeholder:""},null,8,["modelValue"])]),_:1})])]),_:1})):M("",!0),u(n,{label:"\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\uFF1A",prop:"file_name"},{default:o(()=>[u(F,{modelValue:a(t).file_name,"onUpdate:modelValue":e[3]||(e[3]=s=>a(t).file_name=s),placeholder:"\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])]),_:1},512)])}}});export{W as _};
