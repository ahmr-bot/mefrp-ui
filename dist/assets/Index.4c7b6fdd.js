<<<<<<<< HEAD:dist/assets/Index.99af0809.js
import{r as o,i as p,e as s,h as e,F as r,f as g,b as u,w as _,a as h,o as n,t as a,d as i}from"./index.159ef66f.js";const b=e("h3",null,"\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC",-1),m={class:"overflow-auto"},y={class:"table"},k=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"\u57DF\u540D"),e("th",{scope:"col"},"\u72B6\u6001"),e("th",{scope:"col"},"\u4FEE\u6539\u65F6\u95F4"),e("th",{scope:"col"},"\u521B\u5EFA\u65F6\u95F4"),e("th",{scope:"col"},"\u64CD\u4F5C")])],-1),f={key:0,class:"badge bg-success"},v={key:1,class:"badge bg-warning"},w={key:2,class:"badge bg-danger"},x={key:3,class:"badge bg-danger"},D={key:4,class:"badge bg-secondary"},B={class:"btn-group",role:"group"},V={__name:"Index",setup(L){const l=o([]);return o(""),o(""),p.get("/modules/cdn/hosts").then(c=>{l.value=c.data}),(c,N)=>{const d=h("router-link");return n(),s(r,null,[e("div",null,[b,e("div",m,[e("table",y,[k,e("tbody",null,[(n(!0),s(r,null,g(l.value,t=>(n(),s("tr",null,[e("td",null,a(t.host_id),1),e("td",null,a(t.name),1),e("td",null,[e("span",null,[t.status=="running"?(n(),s("span",f,"\u6B63\u5E38")):t.status=="pending"?(n(),s("span",v,"\u7B49\u5F85\u4E2D")):t.status=="deleting"?(n(),s("span",w,"\u5220\u9664\u4E2D")):t.status=="suspended"?(n(),s("span",x,"\u5DF2\u6682\u505C")):(n(),s("span",D,"\u672A\u77E5"))])]),e("td",null,a(new Date(t.updated_at).toLocaleString()),1),e("td",null,a(new Date(t.created_at).toLocaleString()),1),e("td",null,[u(d,{to:{name:"modules.cdn.show",params:{id:t.host_id}}},{default:_(()=>[i("\u67E5\u770B")]),_:2},1032,["to"])])]))),256))])])])]),e("div",null,[e("div",B,[u(d,{type:"button",class:"btn btn-outline-primary",to:{name:"modules.cdn.create"}},{default:_(()=>[i("\u65B0\u5EFA")]),_:1},8,["to"])])])],64)}}};export{V as default};
========
import{r as o,i as p,e as s,h as e,F as r,f as g,b as u,w as _,a as h,o as n,t as a,d as i}from"./index.49e2322e.js";const b=e("h3",null,"\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC",-1),m={class:"overflow-auto"},y={class:"table"},k=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"\u57DF\u540D"),e("th",{scope:"col"},"\u72B6\u6001"),e("th",{scope:"col"},"\u4FEE\u6539\u65F6\u95F4"),e("th",{scope:"col"},"\u521B\u5EFA\u65F6\u95F4"),e("th",{scope:"col"},"\u64CD\u4F5C")])],-1),f={key:0,class:"badge bg-success"},v={key:1,class:"badge bg-warning"},w={key:2,class:"badge bg-danger"},x={key:3,class:"badge bg-danger"},D={key:4,class:"badge bg-secondary"},B={class:"btn-group",role:"group"},V={__name:"Index",setup(L){const l=o([]);return o(""),o(""),p.get("/modules/cdn/hosts").then(c=>{l.value=c.data}),(c,N)=>{const d=h("router-link");return n(),s(r,null,[e("div",null,[b,e("div",m,[e("table",y,[k,e("tbody",null,[(n(!0),s(r,null,g(l.value,t=>(n(),s("tr",null,[e("td",null,a(t.host_id),1),e("td",null,a(t.name),1),e("td",null,[e("span",null,[t.status=="running"?(n(),s("span",f,"\u6B63\u5E38")):t.status=="pending"?(n(),s("span",v,"\u7B49\u5F85\u4E2D")):t.status=="deleting"?(n(),s("span",w,"\u5220\u9664\u4E2D")):t.status=="suspended"?(n(),s("span",x,"\u5DF2\u6682\u505C")):(n(),s("span",D,"\u672A\u77E5"))])]),e("td",null,a(new Date(t.updated_at).toLocaleString()),1),e("td",null,a(new Date(t.created_at).toLocaleString()),1),e("td",null,[u(d,{to:{name:"modules.cdn.show",params:{id:t.host_id}}},{default:_(()=>[i("\u67E5\u770B")]),_:2},1032,["to"])])]))),256))])])])]),e("div",null,[e("div",B,[u(d,{type:"button",class:"btn btn-outline-primary",to:{name:"modules.cdn.create"}},{default:_(()=>[i("\u65B0\u5EFA")]),_:1},8,["to"])])])],64)}}};export{V as default};
>>>>>>>> origin/main:dist/assets/Index.4c7b6fdd.js
