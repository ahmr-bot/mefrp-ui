import{_ as D}from"./list.9dd6b25c.js";import{r as p,p as I,c as L,w as d,i as m,a as s,o as l,b as t,d as M,e as i,f as k,F as w,h as e,t as V,u as f,by as T}from"./index.1c9319a3.js";import{V as v,g as W,l as H}from"./github.a6581825.js";import{_ as g}from"./WorkOrderStatus.e256eb20.js";const R=["textContent"],q={class:"markdown-preview"},z={class:"mt-3"},A=e("h4",null,"\u5BF9\u8BDD\u8BB0\u5F55",-1),G={class:"card border-light mb-3 markdown-preview shadow"},J={class:"card-header"},K={key:0,class:"text-primary"},P={key:1},Q={class:"text-end"},X={class:"card-body"},Y={class:"mt-5"},Z=e("h4",null,"\u56DE\u590D",-1),ee={class:"mt-2"},te={data:()=>({drawer:111})},re=Object.assign(te,{__name:"Show",setup(ae){const u=T(),y=p(!1);v.use(W,{Hljs:H});const r=p({title:"\u5DE5\u5355",content:"### ..."}),b=p([]),h=p({content:""});function c(){m.get("/work-orders/"+u.params.id).then(a=>{r.value=a.data,y.value=!0}),m.get("/work-orders/"+u.params.id+"/replies").then(a=>{b.value=a.data})}c();const x=setInterval(c,1e4);I(()=>{clearInterval(x)});function C(){m.post("/work-orders/"+u.params.id+"/replies",h.value).then(()=>{c()})}function U(){m.patch("/work-orders/"+u.params.id,{status:"closed"}).then(()=>{c()})}return(a,o)=>{const B=s("v-app-bar-nav-icon"),O=s("v-toolbar-title"),S=s("v-app-bar"),E=s("v-navigation-drawer"),F=s("v-container"),N=s("v-main"),$=s("v-app");return l(),L($,{id:"inspire"},{default:d(()=>[t(S,{color:"primary"},{default:d(()=>[t(B,{onClick:o[0]||(o[0]=_=>a.drawer=!a.drawer)}),t(O,null,{default:d(()=>[M("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),t(E,{modelValue:a.drawer,"onUpdate:modelValue":o[1]||(o[1]=_=>a.drawer=_),"expand-on-hover":"",rail:"",permanent:""},{default:d(()=>[t(D)]),_:1},8,["modelValue"]),t(N,null,{default:d(()=>[t(F,null,{default:d(()=>[(l(),i(w,null,k(1,_=>(l(),i(w,{key:_},[e("div",null,[e("h3",{textContent:V(r.value.title)},null,8,R),e("div",q,[t(f(v),{modelValue:r.value.content,"onUpdate:modelValue":o[2]||(o[2]=n=>r.value.content=n),mode:"preview"},null,8,["modelValue"])])]),t(g,{status:r.value.status},null,8,["status"]),e("div",z,[A,(l(!0),i(w,null,k(b.value.data,n=>(l(),i("div",G,[e("div",J,[n.user_id==null?(l(),i("span",K," \u63D0\u4F9B\u65B9 ")):(l(),i("span",P," \u60A8 ")),e("span",Q,V(new Date(n.created_at).toLocaleString()),1)]),e("div",X,[t(f(v),{modelValue:n.content,"onUpdate:modelValue":j=>n.content=j,mode:"preview"},null,8,["modelValue","onUpdate:modelValue"])])]))),256))]),e("div",Y,[Z,t(f(v),{modelValue:h.value.content,"onUpdate:modelValue":o[3]||(o[3]=n=>h.value.content=n),height:"500px",placeholder:"\u7EE7\u7EED\u8DDF\u8FDB\u95EE\u9898\u3002\u5982\u679C\u95EE\u9898\u5DF2\u89E3\u51B3\uFF0C\u8BF7\u5173\u95ED\u5DE5\u5355\u3002"},null,8,["modelValue"]),e("div",{class:"btn-group mt-4",role:"group","aria-label":"Basic example"},[e("button",{class:"btn btn-outline-primary",onClick:C},"\u56DE\u590D"),e("button",{class:"btn btn-danger",onClick:U},"\u5173\u95ED")])]),e("div",ee,[t(g,{status:r.value.status},null,8,["status"])])],64))),64))]),_:1})]),_:1})]),_:1})}}});export{re as default};
