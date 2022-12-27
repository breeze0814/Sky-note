import{M as O,T as w,g as T,F as j,h as D,a as L}from"./index.d0a572d4.js";import{bE as p,bF as r,bU as c,bA as u,bt as m,bs as _,bz as f}from"./vendor.163aa6c6.js";import{i as k}from"./echarts.8f13fcc8.js";import"./vant.67003412.js";import"./mock.f4bf4dcc.js";const C="_wrapper_1fjyk_1",I="_topItem_1fjyk_5",Y="_sign_1fjyk_11",F="_bar_wrapper_1fjyk_22",V="_bar_text_1fjyk_27",q="_bar_1fjyk_22",E="_bar_inner_1fjyk_41",o={wrapper:C,topItem:I,sign:Y,bar_wrapper:F,bar_text:V,bar:q,bar_inner:E},B=p({props:{data:{type:Array}},setup:(t,s)=>()=>r("div",{class:o.wrapper},[t.data&&t.data.length>0?t.data.map(({tag:e,amount:a,percent:l})=>r("div",{class:o.topItem},[r("div",{class:o.sign},[e.sign]),r("div",{class:o.bar_wrapper},[r("div",{class:o.bar_text},[r("span",null,[" ",e.name,c(" - "),l,c("%")," "]),r("span",null,[" ",c("\uFFE5"),r(O,{value:a},null)," "])]),r("div",{class:o.bar},[r("div",{class:o.bar_inner,style:{width:`${l}%`}},null)])])])):r("div",null,[c("\u6CA1\u6709\u6570\u636E")])])}),N="_wrapper_hviyo_1",P="_peichart_hviyo_5",x={wrapper:N,peichart:P},U="_wrapper_wxcjg_1",z={wrapper:U},G={tooltip:{show:!0,trigger:"axis",formatter:([t])=>{const[s,e]=t.data;return`${new w(new Date(s)).format("YYYY\u5E74MM\u6708DD\u65E5")} \uFFE5${T(e)}`}},grid:[{left:16,top:20,right:16,bottom:20}],xAxis:{type:"time",boundaryGap:["3%","0%"],axisLabel:{formatter:t=>new w(new Date(t)).format("MM-DD")},axisTick:{alignWithLabel:!0}},yAxis:{show:!0,type:"value",splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{show:!1}}},W=p({props:{data:{type:Array,required:!0}},setup:(t,s)=>{const e=u();let a;return m(()=>{e.value!==void 0&&(a=k(e.value),a.setOption({...G,series:[{data:t.data,type:"line"}]}))}),_(()=>t.data,()=>{a==null||a.setOption({series:[{data:t.data}]})}),()=>r("div",{ref:e,class:z.wrapper},null)}}),X="_wrapper_10bgc_1",H={wrapper:X},J={tooltip:{trigger:"item",formatter:t=>{const{name:s,value:e,percent:a}=t;return`${s}: \uFFE5${T(e)} \u5360\u6BD4 ${a}%`}},grid:[{left:0,top:0,right:0,bottom:0}],series:[{type:"pie",radius:"70%",emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},K=p({props:{data:{type:Array}},setup:(t,s)=>{const e=u();let a;return m(()=>{e.value!==void 0&&(a=k(e.value),a.setOption(J))}),_(()=>t.data,()=>{a==null||a.setOption({series:[{data:t.data}]})}),()=>r("div",{ref:e,class:H.wrapper},null)}}),Q=24*3600*1e3,R=p({props:{startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup:(t,s)=>{const e=u("expenses"),a=u([]),l=f(()=>{if(!t.startDate||!t.endDate)return[];const i=(new Date(t.endDate).getTime()-new Date(t.startDate).getTime())/Q+1;return Array.from({length:i}).map((v,A)=>{const h=new w(t.startDate+"T00:00:00.000+0800").add(A,"day").getTimestamp(),g=a.value[0],M=g&&new Date(g.happen_at+"T00:00:00.000+0800").getTime()===h?a.value.shift().amount:0;return[new Date(h).toISOString(),M]})}),y=async()=>{const n=await D.get("/items/summary",{happen_after:t.startDate,happen_before:t.endDate,kind:e.value,group_by:"happen_at"},{_mock:"itemSummary",_autoLoading:!0});a.value=n.data.groups};m(y),_(()=>e.value,y);const d=u([]),$=f(()=>d.value.map(n=>({name:n.tag.name,value:n.amount}))),b=async()=>{const n=await D.get("/items/summary",{happen_after:t.startDate,happen_before:t.endDate,kind:e.value,group_by:"tag_id"},{_mock:"itemSummary"});d.value=n.data.groups};m(b),_(()=>e.value,b);const S=f(()=>{const n=d.value.reduce((i,v)=>i+v.amount,0);return d.value.map(i=>({...i,percent:Math.round(i.amount/n*100)}))});return()=>r("div",{class:x.wrapper},[r(j,{label:"\u7C7B\u578B",type:"select",options:[{value:"expenses",text:"\u652F\u51FA"},{value:"income",text:"\u6536\u5165"}],modelValue:e.value,"onUpdate:modelValue":n=>e.value=n},null),r(W,{data:l.value,class:x.piechart},null),r(K,{data:$.value},null),r(B,{data:S.value},null)])}}),nt=p({setup:(t,s)=>()=>r(L,{rerenderOnSwitchTab:!0,component:R,hideThisYear:!0},null)});export{nt as StatisticsPage,nt as default};