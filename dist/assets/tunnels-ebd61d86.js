import{c as u}from"./vuex-3133efbc.js";import{i as l}from"./http-78f45fb6.js";const d=u({state:{tunnels:[]},actions:{fetchTunnels({commit:n}){l.get("/modules/frp/hosts").then(e=>{n("setTunnels",e.data)})}},mutations:{addTunnel(n,e){n.tunnels.push(e)},removeTunnel(n,e){n.tunnels.splice(n.tunnels.indexOf(e),1)},setTunnels(n,e){n.tunnels=e},updateTunnel(n,e){let t=n.tunnels.findIndex(s=>s.id===e.id);n.tunnels[t]=e}}});export{d as t};
