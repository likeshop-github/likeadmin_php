import{C as n}from"./appEnums.18338bd1.js";import{C as t}from"./index.8af89eab.js";const r=()=>/MicroMessenger/i.test(navigator.userAgent);function a(){const n=navigator.userAgent;return n.indexOf("Android")>-1||n.indexOf("Adr")>-1}const o=(({MP_WEIXIN:n,OA_WEIXIN:t,H5:a,IOS:o,ANDROID:e,OTHER:i})=>r()?t():a())({MP_WEIXIN:()=>n.MP_WEIXIN,OA_WEIXIN:()=>n.OA_WEIXIN,H5:()=>n.H5,IOS:()=>n.IOS,ANDROID:()=>n.ANDROID,OTHER:()=>null});function e(n){return t.post({url:"/login/account",data:{...n,terminal:o}})}function i(n){return t.post({url:"/login/register",data:{...n,channel:o}})}function u(){return t.get({url:"/login/codeUrl",data:{url:location.href}})}function s(n){return t.post({url:"/login/oaLogin",data:n})}function l(n,r){return t.post({url:"/login/updateUser",data:n,header:r})}function I(n){return t.post({url:"/login/oaAuthBind",data:n})}export{s as O,a,u as g,r as i,e as l,I as o,i as r,l as u};