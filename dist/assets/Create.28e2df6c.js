<<<<<<<< HEAD:dist/assets/Create.c5521928.js
import{r as c,i as r,e as s,g as d,bs as f,h as e,F as g,f as k,t as u,j as m,x as _,o as i,l as h}from"./index.159ef66f.js";const b=e("h3",null,"\u521B\u5EFA CDN \u670D\u52A1",-1),B=e("h3",null,"\u9009\u62E9\u5730\u57DF",-1),y=e("option",{value:"0",selected:""},"\u5148\u9009\u62E9\u4E00\u4E2A\u5730\u57DF",-1),D=["value"],V={key:0},x={key:0},C=e("br",null,null,-1),N={class:"form-floating mb-3 mt-3"},U=e("label",{for:"floatingDomain"},"\u57DF\u540D",-1),j={class:"form-floating mb-3"},F=e("label",{for:"floatingName"},"\u540E\u7AEF\u5730\u5740",-1),S={__name:"Create",setup(G){const a=c({domain:""}),o=c({});r.get("/modules/cdn/packages").then(t=>{o.value=t.data,a.value.package_id=Object.keys(t.data)[0]});function p(){r.post("/modules/cdn/hosts",a.value).then(t=>{t.status===200&&h.push({name:"modules.cdn"})}).catch(t=>{console.log(t)})}return(t,n)=>(i(),s("div",null,[b,B,d(e("select",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=l=>a.value.package_id=l)},[y,(i(!0),s(g,null,k(o.value,(l,v)=>(i(),s("option",{value:v},u(l.name),9,D))),256))],512),[[f,a.value.package_id]]),o.value[a.value.package_id]!==null?(i(),s("div",V,[o.value[a.value.package_id]?(i(),s("div",x,[e("span",null,"\u514D\u8D39\u6D41\u91CF: "+u(o.value[a.value.package_id].free)+" GB",1),C,e("span",null,"\u6D41\u91CF: "+u(o.value[a.value.package_id].price)+" \u5143 / GB",1)])):m("",!0)])):m("",!0),e("div",N,[d(e("input",{class:"form-control",id:"floatingDomain","onUpdate:modelValue":n[1]||(n[1]=l=>a.value.domain=l)},null,512),[[_,a.value.domain]]),U]),e("div",j,[d(e("input",{class:"form-control",id:"floatingBackend","onUpdate:modelValue":n[2]||(n[2]=l=>a.value.backend=l)},null,512),[[_,a.value.backend]]),F]),e("button",{class:"btn btn-primary",onClick:p},"\u521B\u5EFA")]))}};export{S as default};
========
import{r as c,i as r,e as s,g as d,bs as f,h as e,F as g,f as k,t as u,j as m,x as _,o as i,l as h}from"./index.49e2322e.js";const b=e("h3",null,"\u521B\u5EFA CDN \u670D\u52A1",-1),B=e("h3",null,"\u9009\u62E9\u5730\u57DF",-1),y=e("option",{value:"0",selected:""},"\u5148\u9009\u62E9\u4E00\u4E2A\u5730\u57DF",-1),D=["value"],V={key:0},x={key:0},C=e("br",null,null,-1),N={class:"form-floating mb-3 mt-3"},U=e("label",{for:"floatingDomain"},"\u57DF\u540D",-1),j={class:"form-floating mb-3"},F=e("label",{for:"floatingName"},"\u540E\u7AEF\u5730\u5740",-1),S={__name:"Create",setup(G){const a=c({domain:""}),o=c({});r.get("/modules/cdn/packages").then(t=>{o.value=t.data,a.value.package_id=Object.keys(t.data)[0]});function p(){r.post("/modules/cdn/hosts",a.value).then(t=>{t.status===200&&h.push({name:"modules.cdn"})}).catch(t=>{console.log(t)})}return(t,n)=>(i(),s("div",null,[b,B,d(e("select",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=l=>a.value.package_id=l)},[y,(i(!0),s(g,null,k(o.value,(l,v)=>(i(),s("option",{value:v},u(l.name),9,D))),256))],512),[[f,a.value.package_id]]),o.value[a.value.package_id]!==null?(i(),s("div",V,[o.value[a.value.package_id]?(i(),s("div",x,[e("span",null,"\u514D\u8D39\u6D41\u91CF: "+u(o.value[a.value.package_id].free)+" GB",1),C,e("span",null,"\u6D41\u91CF: "+u(o.value[a.value.package_id].price)+" \u5143 / GB",1)])):m("",!0)])):m("",!0),e("div",N,[d(e("input",{class:"form-control",id:"floatingDomain","onUpdate:modelValue":n[1]||(n[1]=l=>a.value.domain=l)},null,512),[[_,a.value.domain]]),U]),e("div",j,[d(e("input",{class:"form-control",id:"floatingBackend","onUpdate:modelValue":n[2]||(n[2]=l=>a.value.backend=l)},null,512),[[_,a.value.backend]]),F]),e("button",{class:"btn btn-primary",onClick:p},"\u521B\u5EFA")]))}};export{S as default};
>>>>>>>> origin/main:dist/assets/Create.28e2df6c.js
