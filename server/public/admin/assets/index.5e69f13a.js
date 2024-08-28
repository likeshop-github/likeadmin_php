import{G as y,_ as F}from"./index.42762d03.js";import{i as g,I as w}from"./element-plus.11bddeb9.js";import{H as p}from"./vue-echarts.b8427954.js";import{d as m,a1 as E,f as b,ag as B,o as c,c as u,a as t,X as n,P as e,V as i,u as s,U as h,W as A,a8 as D}from"./@vue.54440ad7.js";import"./nprogress.7656d32d.js";import"./axios.dc00a7f8.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.e6e9a684.js";import"./@vueuse.30711f4d.js";import"./css-color-function.a728b5d4.js";import"./color.d7ae65d5.js";import"./clone.65443a5f.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.b60a8dd3.js";import"./vue-clipboard3.d9310b6d.js";import"./clipboard.cf95dd73.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.8f223006.js";import"./@highlightjs.3a5ba2f6.js";import"./lodash-es.2b4cc642.js";import"./dayjs.3bccbd93.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";const k={class:"workbench"},O={class:"lg:flex"},C=t("span",{class:"card-title"},"\u7248\u672C\u4FE1\u606F",-1),S={class:"flex leading-9"},z=t("div",{class:"w-20"},"\u5E73\u53F0\u540D\u79F0",-1),V={class:"flex leading-9"},N=t("div",{class:"w-20"},"\u5F53\u524D\u7248\u672C",-1),W={class:"flex leading-9"},G=t("div",{class:"w-20"},"\u83B7\u53D6\u6E20\u9053",-1),R=["href"],H=["href"],I=t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1),L={class:"text-tx-secondary text-xs ml-4"},M={class:"flex flex-wrap"},P={class:"w-1/2 md:w-1/4"},T=t("div",{class:"leading-10"},"\u9500\u552E\u989D",-1),U={class:"text-6xl"},X={class:"text-tx-secondary text-xs"},j={class:"w-1/2 md:w-1/4"},q=t("div",{class:"leading-10"},"\u6210\u4EA4\u8BA2\u5355",-1),J={class:"text-6xl"},K={class:"text-tx-secondary text-xs"},Q={class:"w-1/2 md:w-1/4"},Y=t("div",{class:"leading-10"},"\u65B0\u589E\u7528\u6237",-1),Z={class:"text-6xl"},$={class:"text-tx-secondary text-xs"},tt={class:"w-1/2 md:w-1/4"},ot=t("div",{class:"leading-10"},"\u65B0\u589E\u8BBF\u95EE\u91CF",-1),st={class:"text-6xl"},et={class:"text-tx-secondary text-xs"},at={class:"function mb-4"},it=t("span",null,"\u5E38\u7528\u529F\u80FD",-1),lt={class:"flex flex-wrap"},nt={class:"mt-2"},rt={class:"lg:flex gap-4"},dt=t("span",null,"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1),ct=t("span",null,"\u9500\u552E\u989D\u8D8B\u52BF\u56FE",-1),ut=m({name:"workbench"}),qt=m({...ut,setup(_t){const o=E({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[],type:"line",smooth:!0,lineStyle:{color:"#4A5DFF",width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#4A5DFF"},{offset:1,color:"#5777ff"}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"\u5355\u4F4D\uFF08\u4E07\uFF09"},tooltip:{trigger:"axis"},series:[{data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#4A5DFF"},{offset:1,color:"#5777ff"}]}}}]}}),x=()=>{y().then(a=>{o.version=a.version,o.today=a.today,o.menu=a.menu,o.visitor=a.visitor,o.support=a.support,o.visitorOption.xAxis.data=[],o.visitorOption.series[0].data=[],o.saleOption.xAxis.data=[],o.saleOption.series[0].data=[],a.visitor.date.reverse().forEach(l=>{o.visitorOption.xAxis.data.push(l)}),a.visitor.list[0].data.forEach(l=>{o.visitorOption.series[0].data.push(l)}),a.sale.date.reverse().forEach(l=>{o.saleOption.xAxis.data.push(l)}),a.sale.list[0].data.forEach(l=>{l<=50&&(l={value:l,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ff8729"},{offset:1,color:"#ff8729"}]}}}),o.saleOption.series[0].data.push(l)})}).catch(a=>{console.log("err",a)})};return b(()=>{x()}),(a,l)=>{const _=g,d=w,v=F,f=B("router-link");return c(),u("div",k,[t("div",O,[n(d,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:e(()=>[C]),default:e(()=>[t("div",null,[t("div",S,[z,t("span",null,i(s(o).version.name),1)]),t("div",V,[N,t("span",null,i(s(o).version.version),1)]),t("div",W,[G,t("div",null,[t("a",{href:s(o).version.channel.website,target:"_blank"},[n(_,{type:"success",size:"small"},{default:e(()=>[h("\u5B98\u7F51")]),_:1})],8,R),t("a",{class:"ml-3",href:s(o).version.channel.gitee,target:"_blank"},[n(_,{type:"danger",size:"small"},{default:e(()=>[h("Gitee")]),_:1})],8,H)])])])]),_:1}),n(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:e(()=>[t("div",null,[I,t("span",L," \u66F4\u65B0\u65F6\u95F4\uFF1A"+i(s(o).today.time),1)])]),default:e(()=>[t("div",M,[t("div",P,[T,t("div",U,i(s(o).today.today_sales),1),t("div",X," \u603B\uFF1A"+i(s(o).today.total_sales),1)]),t("div",j,[q,t("div",J,i(s(o).today.order_num),1),t("div",K," \u603B\uFF1A"+i(s(o).today.order_sum),1)]),t("div",Q,[Y,t("div",Z,i(s(o).today.today_new_user),1),t("div",$," \u603B\uFF1A"+i(s(o).today.total_new_user),1)]),t("div",tt,[ot,t("div",st,i(s(o).today.today_visitor),1),t("div",et," \u603B\uFF1A"+i(s(o).today.total_visitor),1)])])]),_:1})]),t("div",at,[n(d,{class:"flex-1 !border-none",shadow:"never"},{header:e(()=>[it]),default:e(()=>[t("div",lt,[(c(!0),u(A,null,D(s(o).menu,r=>(c(),u("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:r},[n(f,{to:r.url,class:"mb-3 flex flex-col items-center"},{default:e(()=>[n(v,{width:"40px",height:"40px",src:r==null?void 0:r.image},null,8,["src"]),t("div",nt,i(r.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",rt,[n(d,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:e(()=>[dt]),default:e(()=>[t("div",null,[n(s(p),{style:{height:"350px"},option:s(o).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),n(d,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:e(()=>[ct]),default:e(()=>[t("div",null,[n(s(p),{style:{height:"350px"},option:s(o).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{qt as default};
