import{_ as C}from"./list.3e4eaa89.js";import{r as b,bz as g,c as F,w as n,a as o,o as r,b as e,d as s,e as d,f as v,F as i,h as t,t as _}from"./index.d87b3baf.js";const M=t("div",null,"MirrorEdge \u5C5E\u4E8E \u7EAF\u516C\u76CA\u670D\u52A1, \u4E0D\u9650\u5E26\u5BBD/\u6D41\u91CF\uFF0C\u6839\u672C\u662F\u4E0D\u80FD\u76C8\u5229\u7684\uFF0C\u505A\u8FD9\u4E48\u4E45\u7684\u514D\u8D39\u670D\u52A1\u4E5F\u7EAF\u7EAF\u9760\u826F\u5FC3\uFF0C\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u89C9\u5F97 \u955C\u7F18\u6620\u5C04 \u662F\u4E2A\u597D\u670D\u52A1",-1),N=t("div",null,"\u90A3\u4E48\u5C31\u8BF7\u5C3D\u60A8\u7684\u7EF5\u8584\u4E4B\u529B\uFF0C\u52A9\u6211\u4EEC\u8D70\u7684\u66F4\u4E45\u5427\uFF01",-1),$=t("div",null,"\u670D\u52A1\u5668\u8D5E\u52A9\u8BF7\u8054\u7CFB 1878832944",-1),j=t("br",null,null,-1),D={class:"overflow-auto"},L={class:"table table-hover"},O=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u63CF\u8FF0")])],-1),S=t("br",null,null,-1),T={class:"overflow-auto"},U={class:"table table-hover"},q=t("thead",null,[t("tr",null,[t("th",null,"\u6635\u79F0"),t("th",null,"\u8D5E\u52A9\u9879\u76EE"),t("th",null,"\u7559\u8A00")])],-1),A={data:()=>({drawer:null})},J=Object.assign(A,{__name:"zanzhu",setup(G){const h=b({});g({method:"get",url:"https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/sponsor.json"}).then(l=>{console.log(l.data),h.value=l.data});const f=b({});return g({method:"get",url:"https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/ads.json"}).then(l=>{console.log(l.data),f.value=l.data}),(l,u)=>{const w=o("v-app-bar-nav-icon"),x=o("v-toolbar-title"),y=o("v-app-bar"),V=o("v-navigation-drawer"),p=o("v-btn"),k=o("v-card-text"),m=o("v-card"),B=o("v-container"),E=o("v-main"),z=o("v-app");return r(),F(z,{id:"inspire"},{default:n(()=>[e(y,{color:"primary"},{default:n(()=>[e(w,{onClick:u[0]||(u[0]=c=>l.drawer=!l.drawer)}),e(x,null,{default:n(()=>[s("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),e(V,{modelValue:l.drawer,"onUpdate:modelValue":u[1]||(u[1]=c=>l.drawer=c),"expand-on-hover":"",rail:"",permanent:""},{default:n(()=>[e(C)]),_:1},8,["modelValue"]),e(E,null,{default:n(()=>[e(B,null,{default:n(()=>[(r(),d(i,null,v(1,c=>(r(),d(i,{key:c},[e(m,{text:"MirrorEdge \u955C\u7F18\u6620\u5C04 \u8D5E\u52A9\u6211\u4EEC"},{default:n(()=>[e(k,null,{default:n(()=>[M,N,e(p,{color:"primary",href:"https://afdian.net/a/aehxy"},{default:n(()=>[s("\u8D5E\u52A9(\u73B0\u91D1)")]),_:1}),$,t("div",null,[s("\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8D2D\u4E70\u548C\u4F7F\u7528 "),e(p,{color:"primary",href:"https://dash.laecloud.com"},{default:n(()=>[s("\u83B1\u4E91")]),_:1}),s(" \u7684\u5176\u4ED6\u670D\u52A1\u6765\u652F\u6301\u6211\u4EEC\uFF01")])]),_:1})]),_:1}),j,e(m,{text:"\u5E7F\u544A\u4F4D"},{default:n(()=>[t("div",D,[t("table",L,[O,t("tbody",null,[(r(!0),d(i,null,v(f.value,a=>(r(),d("tr",null,[t("td",null,_(a.name),1),t("td",null,_(a.des),1),e(p,{color:"primary",href:a.url},{default:n(()=>[s("\u6253\u5F00")]),_:2},1032,["href"])]))),256))])])])]),_:1}),S,e(m,{text:"\u8D5E\u52A9\u5217\u8868"},{default:n(()=>[t("div",T,[t("table",U,[q,t("tbody",null,[(r(!0),d(i,null,v(h.value,a=>(r(),d("tr",null,[t("td",null,_(a.name),1),t("td",null,_(a.thing),1),t("td",null,_(a.says),1)]))),256))])])])]),_:1})],64))),64))]),_:1})]),_:1})]),_:1})}}});export{J as default};
