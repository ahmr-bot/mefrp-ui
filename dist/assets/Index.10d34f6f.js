import{r as u,i as b,c as H,w as c,a as f,o as s,b as _,d as m,e as n,f as k,F as x,g as i,v as y,h as e,t as r,j as V,x as U,bs as S,bp as Y}from"./index.70332e19.js";import{_ as Z}from"./list.3bfc8c74.js";const q=e("h2",null,"\u96A7\u9053\u76F8\u5173",-1),ee=e("p",null,[e("a",{href:"https://forum.laecloud.com/d/5-ying-she-ji-chu-jiao-xue-ji-chu-zhong-de-ji-chu-chu-xue-zhe-xian-ding",target:"_blank"},"\u5982\u679C\u60A8\u662F\u7B2C\u4E00\u6B21\u4F7F\u7528\uFF0C\u8BF7\u52A1\u5FC5\u770B\u8FD9\u91CC\u3002")],-1),te={class:"mt-3"},oe={class:"btn-group",role:"group","aria-label":"\u521B\u5EFA\u6216\u6574\u5408\u96A7\u9053\u914D\u7F6E\u6587\u4EF6"},ae={class:"list-group mt-3"},le={class:"d-flex w-100 justify-content-between"},se={class:"mb-1 text-success"},ne={class:"mb-1"},re={key:0,"data-bs-toggle":"tooltip","data-bs-placement":"right",title:"\u6309\u4F4F Shift \u6216 Ctrl \u6765\u6253\u5F00"},ie=["href"],de=e("i",{class:"bi bi-box-arrow-up-right text-decoration-none"},null,-1),ue={key:1},ce={rel:"noreferrer",target:"_blank",class:"text-decoration-none"},_e={class:"modal fade",id:"createTunnelModel",tabindex:"-1","aria-labelledby":"createTunnelModel","aria-hidden":"true"},ve={class:"modal-dialog"},pe={class:"modal-content"},me={class:"modal-header"},fe=e("h5",{class:"modal-title"},"\u65B0\u5EFA\u96A7\u9053",-1),he={class:"modal-body"},ge={class:"form-floating mb-3"},be=e("label",{for:"floatingName"},"\u96A7\u9053\u540D\u79F0",-1),xe={class:"form-floating mb-3"},ye=e("label",{for:"floatingName"},"\u672C\u5730 \u5730\u5740\u548C\u7AEF\u53E3",-1),ke={class:"form-floating mb-3"},we=e("option",{value:"http"},"HTTP",-1),Se=e("option",{value:"https"},"HTTPS",-1),Ce=e("option",{value:"tcp"},"TCP",-1),Te=e("option",{value:"udp"},"UDP",-1),Pe=[we,Se,Ce,Te],Ve=e("label",{for:"floatingProtocol"},"\u534F\u8BAE",-1),Ue={class:"form-floating mb-3"},Me=["value"],Ne=e("label",{for:"floatingServer"},"\u9009\u62E9\u652F\u6301 TCP \u534F\u8BAE\u7684\u8282\u70B9(\u56FD\u5185\u670D\u52A1\u5668\u4E25\u7981 TCP \u5EFA\u7AD9)",-1),je={class:"form-floating mb-3"},De=["value"],He=e("label",{for:"floatingServer"},"\u9009\u62E9\u652F\u6301 HTTP \u534F\u8BAE\u7684\u8282\u70B9",-1),Be={class:"form-floating mb-3"},ze=["value"],Ee=e("label",{for:"floatingServer"},"\u9009\u62E9\u652F\u6301 HTTPS \u534F\u8BAE\u7684\u8282\u70B9",-1),Fe={class:"form-floating mb-3"},Ge=["value"],Le=e("label",{for:"floatingServer"},"\u9009\u62E9\u652F\u6301 UDP \u534F\u8BAE\u7684\u8282\u70B9",-1),Oe={class:"form-floating mb-3"},$e=e("label",{for:"floatingDomain"},"\u7ED1\u5B9A\u57DF\u540D",-1),Ae={class:"form-check"},Je=e("label",{class:"form-check-label",for:"createHttps"}," \u540C\u65F6\u521B\u5EFA HTTP(s) \u96A7\u9053 ",-1),Re={class:"form-floating mb-3"},Ie=e("label",{for:"floatingPort"},"\u8FDC\u7A0B\u7AEF\u53E3",-1),Ke={key:0},Qe={key:0,class:"text-danger ms-1"},We={class:"d-none"},Xe=["textContent"],Ye={key:2},Ze=e("h3",null,"\u670D\u52A1\u5668\u4FE1\u606F",-1),qe={key:0},et={key:1},tt=e("p",null,[m(" \u5982\u679C\u60A8\u7EE7\u7EED\uFF0C\u5219\u4EE3\u8868\u540C\u610F\u4E86\u6211\u4EEC\u7684"),e("a",{target:"_blank",href:"https://forum.laecloud.com/d/6-jing-yuan-ying-she-shi-yong-tiao-kuan"},"\u4F7F\u7528\u6761\u6B3E")],-1),ot={class:"modal-footer"},at={data:()=>({drawer:null})},rt=Object.assign(at,{__name:"Index",setup(lt){const M=u([]),C=u([]),h=u([]),B=u([]),z=u([]),E=u([]),F=u([]),N=u(!1),w=u(!1);u({});const d=u({name:null}),o=u({name:null,protocol:"http",local_address:"127.0.0.1:80",server_id:1,remote_port:null,custom_domain:null,create_https:!0,create_cdn:!1});function G(l){l=l||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",v=t.length,g="",T=0;T<l;T++)g+=t.charAt(Math.floor(Math.random()*v));return g}o.value.name=G(10);const j=u({});b.get("/modules/frp/hosts").then(l=>{C.value=l.data,j.value=O(l.data)});function O(l){var t=0,v;for(v in l)l.hasOwnProperty(v)&&t++;return t}b.get("/modules/frp/traffics").then(l=>{M.value=l.data});function $(){b.get("/modules/frp/servers").then(l=>{N.value=!1,h.value=l.data,o.server_id=h.value[0].id,B.value=h.value.filter(t=>t.allow_http==1),z.value=h.value.filter(t=>t.allow_https==1),E.value=h.value.filter(t=>t.allow_tcp==1),F.value=h.value.filter(t=>t.allow_udp==1)})}function A(){o.value.name=G(10)}function J(l){d.value=h.value.find(t=>t.id==l)}function L(){var g;const l=(g=o.value.remote_port)!=null?g:0,t=d.value.min_port,v=d.value.max_port;(l<t||l>v)&&(o.value.remote_port=Math.floor(Math.random()*(v-t+1)+t))}function R(){j<=3?b.post("/modules/frp/hosts",o.value).then(l=>{(o.value.protocol=="https"||o.value.protocol=="http")&&(o.value.create_https&&(o.value.protocol=="http"?o.value.protocol="https":o.value.protocol=="https"&&(o.value.protocol="http")),o.value.name+=" - "+o.value.protocol,b.post("/modules/frp/hosts",o.value).then(t=>{b.get("/modules/frp/hosts").then(v=>{C.value=v.data})})),l.status==200||l.status==201?(b.get("/modules/frp/hosts").then(t=>{C.value=t.data}),N.value=!0):w.value=l.message}).catch((l,t)=>{w.value="\u65E0\u6CD5\u521B\u5EFA\u96A7\u9053\uFF0C\u4E5F\u53EF\u80FD\u662F\u8868\u5355\u6CA1\u6709\u586B\u5199\u5B8C\u6574\uFF0C\u6216\u8005\u670D\u52A1\u5668\u4E0D\u63A5\u53D7\u6B64\u7AEF\u53E3\uFF08\u7AEF\u53E3\u88AB\u5360\u7528\u6216\u8005\u4E0D\u5728\u8303\u56F4\u5185\uFF09"}):w.value="\u96A7\u9053\u6570\u91CF\u5DF2\u6EE1\u6216\u8FC7\u91CF\uFF0C\u65E0\u6CD5\u521B\u5EFA\u96A7\u9053"}return(l,t)=>{const v=f("v-app-bar-nav-icon"),g=f("v-toolbar-title"),T=f("v-app-bar"),I=f("v-navigation-drawer"),P=f("v-btn"),K=f("router-link"),Q=f("v-container"),W=f("v-main"),D=f("v-alert"),X=f("v-app");return s(),H(X,{id:"inspire"},{default:c(()=>[_(T,null,{default:c(()=>[_(v,{onClick:t[0]||(t[0]=a=>l.drawer=!l.drawer)}),_(g,null,{default:c(()=>[m("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),_(I,{modelValue:l.drawer,"onUpdate:modelValue":t[1]||(t[1]=a=>l.drawer=a),"expand-on-hover":"",rail:"",permanent:""},{default:c(()=>[_(Z)]),_:1},8,["modelValue"]),_(W,null,{default:c(()=>[_(Q,null,{default:c(()=>[(s(),n(x,null,k(1,a=>(s(),n(x,{key:a},[q,ee,i(e("p",null," \u60A8\u5F53\u524D\u7684\u53EF\u62B5\u7528\u6D41\u91CF: "+r(M.value.free_traffic)+" GB ",513),[[y,M.value.free_traffic]]),e("p",null," \u5DF2\u521B\u5EFA\u96A7\u9053/\u96A7\u9053\u603B\u6570: "+r(j.value)+" / 3 ",1),e("div",te,[e("div",oe,[_(P,{type:"button",class:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#createTunnelModel",onClick:t[2]||(t[2]=function(){$(),A()})},{default:c(()=>[m(" \u521B\u5EFA\u96A7\u9053 ")]),_:1})])]),(s(!0),n(x,null,k(C.value,p=>(s(),n("div",ae,[_(K,{to:{name:"modules.tunnels.show",params:{id:p.id}},class:"list-group-item list-group-item-action shadow-sm rounded"},{default:c(()=>[e("div",le,[e("h5",se,r(p.name),1),e("small",null,r(new Date(p.updated_at).toLocaleString()),1)]),e("p",ne,[p.protocol=="http"||p.protocol=="https"?(s(),n("span",re,[m("\u96A7\u9053\u5730\u5740: "),e("a",{rel:"noreferrer",target:"_blank",href:p.protocol+"://"+p.custom_domain,class:"text-decoration-none"},[m(r(p.protocol+"://"+p.custom_domain)+" ",1),de],8,ie)])):(s(),n("span",ue,[m("\u96A7\u9053\u5730\u5740:"),e("a",ce,r(p.server.server_address+":"+p.remote_port),1)]))])]),_:2},1032,["to"])]))),256))],64))),64))]),_:1})]),_:1}),e("div",_e,[e("div",ve,[e("div",pe,[e("div",me,[fe,_(P,{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",he,[N.value?(s(),H(D,{key:0,type:"success",class:"alert alert-success",role:"alert"},{default:c(()=>[m(" \u96A7\u9053\u521B\u5EFA\u6210\u529F\u3002 ")]),_:1})):w.value?(s(),H(D,{key:1,type:"error",class:"alert alert-danger",role:"alert"},{default:c(()=>[m(r(w.value),1)]),_:1})):V("",!0),_(D,{type:"info"},{default:c(()=>[m(" \u4E3A\u4E86\u9632\u6B62\u96A7\u9053\u88AB\u6EE5\u7528\uFF0C\u6211\u4EEC\u4F1A\u4E0D\u5B9A\u671F\u68C0\u67E5\u6620\u5C04\u5185\u5BB9\u3002 ")]),_:1}),e("div",ge,[i(e("input",{class:"form-control",id:"floatingName",placeholder:"xxx","onUpdate:modelValue":t[3]||(t[3]=a=>o.value.name=a)},null,512),[[U,o.value.name]]),be]),e("div",xe,[i(e("input",{class:"form-control",id:"floatingName",placeholder:"xxx","onUpdate:modelValue":t[4]||(t[4]=a=>o.value.local_address=a)},null,512),[[U,o.value.local_address]]),ye]),e("div",ke,[i(e("select",{class:"form-control",id:"floatingProtocol","onUpdate:modelValue":t[5]||(t[5]=a=>o.value.protocol=a)},Pe,512),[[S,o.value.protocol]]),Ve]),i(e("div",Ue,[i(e("select",{class:"form-control",id:"floatingServer","onUpdate:modelValue":t[6]||(t[6]=a=>o.value.server_id=a),onChange:L},[(s(!0),n(x,null,k(E.value,a=>(s(),n("option",{value:a.id},r(a.name),9,Me))),256))],544),[[S,o.value.server_id]]),Ne],512),[[y,o.value.protocol=="tcp"]]),i(e("div",je,[i(e("select",{class:"form-control",id:"floatingServer","onUpdate:modelValue":t[7]||(t[7]=a=>o.value.server_id=a)},[(s(!0),n(x,null,k(B.value,a=>(s(),n("option",{value:a.id},r(a.name),9,De))),256))],512),[[S,o.value.server_id]]),He],512),[[y,o.value.protocol=="http"]]),i(e("div",Be,[i(e("select",{class:"form-control",id:"floatingServer","onUpdate:modelValue":t[8]||(t[8]=a=>o.value.server_id=a)},[(s(!0),n(x,null,k(z.value,a=>(s(),n("option",{value:a.id},r(a.name),9,ze))),256))],512),[[S,o.value.server_id]]),Ee],512),[[y,o.value.protocol=="https"]]),i(e("div",Fe,[i(e("select",{class:"form-control",id:"floatingServer","onUpdate:modelValue":t[9]||(t[9]=a=>o.value.server_id=a),onChange:L},[(s(!0),n(x,null,k(F.value,a=>(s(),n("option",{value:a.id},r(a.name),9,Ge))),256))],544),[[S,o.value.server_id]]),Le],512),[[y,o.value.protocol=="udp"]]),i(e("div",null,[e("div",Oe,[i(e("input",{class:"form-control",id:"floatingDomain",placeholder:"xxx","onUpdate:modelValue":t[10]||(t[10]=a=>o.value.custom_domain=a)},null,512),[[U,o.value.custom_domain]]),$e]),e("div",Ae,[i(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=a=>o.value.create_https=a),id:"createHttps"},null,512),[[Y,o.value.create_https]]),Je])],512),[[y,o.value.protocol=="http"||o.value.protocol=="https"]]),i(e("div",Re,[i(e("input",{class:"form-control",id:"floatingPort",placeholder:"xxx","onUpdate:modelValue":t[12]||(t[12]=a=>o.value.remote_port=a)},null,512),[[U,o.value.remote_port]]),Ie,d.value?(s(),n("div",Ke,[o.value.remote_port<d.value.min_port||o.value.remote_port>d.value.max_port?(s(),n("div",Qe," \u5F53\u524D\u7AEF\u53E3\u8303\u56F4\u4E0D\u6B63\u786E\u3002 ")):V("",!0)])):V("",!0)],512),[[y,o.value.protocol=="tcp"||o.value.protocol=="udp"]]),e("span",We,[e("span",{textContent:r(J(o.value.server_id))},null,8,Xe)]),d.value?(s(),n("div",Ye,[Ze,e("p",null,"\u540D\u79F0: "+r(d.value.name),1),e("p",null," \u7AEF\u53E3\u8303\u56F4: "+r(d.value.min_port)+" - "+r(d.value.max_port),1),e("p",null," \u96A7\u9053\u6570\u91CF: "+r(d.value.tunnels)+"/"+r(d.value.max_tunnels),1),d.value.price_per_gb!==0?(s(),n("p",qe," \u6B64\u8282\u70B9\u4E3A\u6536\u8D39\u8282\u70B9, \u6BCF GB \u6D41\u91CF\u4EF7\u683C\u4E3A "+r(d.value.price_per_gb)+" \u5143 ",1)):(s(),n("p",et,"\u6B64\u8282\u70B9\u76EE\u524D\u4E0D\u6536\u53D6\u8D39\u7528"))])):V("",!0),tt]),e("div",ot,[_(P,{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},{default:c(()=>[m(" \u53D6\u6D88 ")]),_:1}),_(P,{type:"button",class:"btn btn-primary",onClick:R},{default:c(()=>[m(" \u521B\u5EFA ")]),_:1})])])])])]),_:1})}}});export{rt as default};
