var w=Object.defineProperty;var T=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>(T(t,typeof e!="symbol"?e+"":e,s),s),M=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var c=(t,e,s)=>(M(t,e,"read from private field"),s?s.call(t):e.get(t)),x=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},o=(t,e,s,r)=>(M(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var b=(t,e,s,r)=>({set _(l){o(t,e,l,s)},get _(){return c(t,e,r)}});import{r as y,j as i,C as P}from"./index-DtjFe9kJ.js";import{M as g,E as C}from"./index-DzpmpVJ1.js";import{M as I,a as _}from"./index-GHnX3O5W.js";class U{constructor(e){v(this,"value");v(this,"next");this.value=e}}var a,p,f;class L{constructor(){x(this,a,void 0);x(this,p,void 0);x(this,f,void 0);this.clear()}enqueue(e){const s=new U(e);c(this,a)?(c(this,p).next=s,o(this,p,s)):(o(this,a,s),o(this,p,s)),b(this,f)._++}dequeue(){const e=c(this,a);if(e)return o(this,a,c(this,a).next),b(this,f)._--,e.value}clear(){o(this,a,void 0),o(this,p,void 0),o(this,f,0)}get size(){return c(this,f)}*[Symbol.iterator](){let e=c(this,a);for(;e;)yield e.value,e=e.next}}a=new WeakMap,p=new WeakMap,f=new WeakMap;const N={bind(t,e,s){return t.bind(s)}};function O(t){if(!((Number.isInteger(t)||t===Number.POSITIVE_INFINITY)&&t>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new L;let s=0;const r=()=>{s--,e.size>0&&e.dequeue()()},l=async(d,u,m)=>{s++;const j=(async()=>d(...m))();u(j);try{await j}catch{}r()},h=(d,u,m)=>{e.enqueue(N.bind(l.bind(void 0,d,u,m))),(async()=>(await Promise.resolve(),s<t&&e.size>0&&e.dequeue()()))()},n=(d,...u)=>new Promise(m=>{h(d,m,u)});return Object.defineProperties(n,{activeCount:{get:()=>s},pendingCount:{get:()=>e.size},clearQueue:{value(){e.clear()}}}),n}const S=t=>{const[e,s]=y.useState(),r=O(1),l=y.useCallback(n=>{n&&s(d=>[...d||[],r(()=>new Promise(u=>{n.src=t,n.addEventListener("canplay",()=>{n&&n.paused&&n.play().then(u).catch(m=>{console.error(m),u("")})})}))])},[r,t]),h=y.useCallback(n=>{s(()=>[r(()=>new Promise(()=>{n.pause(),n.src="",n.removeAttribute("src"),n.load()}))])},[r]);return y.useEffect(()=>{async function n(){e!=null&&e.length&&await Promise.all(e).then(()=>{console.log("all done"),s([])})}n()},[e]),[l,h]},q=({videoUrl:t,nextUrl:e,poster:s})=>{const[r,l]=S(t);return i.jsx("div",{style:{margin:"8px"},children:i.jsx("video",{className:"video-js",controls:!0,preload:"auto",width:"470",height:"264",poster:s,onMouseOver:h=>r(h.target),onMouseLeave:h=>l(h.target)})})},z="_highlights_1nitl_1",E={highlights:z},R=({style:t={},title:e,data:s})=>i.jsx(P,{title:e,style:t,children:i.jsx("div",{className:E.highlights,children:(s||[]).map(r=>i.jsx(q,{matchId:r.value,matchType:r.type,matchTime:r.time,homeTeam:r.homeTeam,guestTeam:r.guestTeam,videoUrl:r.videoUrl,nextUrl:r.url,poster:r.poster},r.value))})}),B="_home_1bz5b_1",H={home:B},D=()=>{const t=C[2024];return i.jsxs("div",{className:H.home,children:[i.jsx(I,{title:"比赛直播",data:t.filter(e=>[g.unStarted,g.inprogress].includes(e.status)),style:{marginBottom:"16px"}}),i.jsx(_,{title:"比赛回放",data:t.filter(e=>[g.finish].includes(e.status)),style:{marginBottom:"16px"}}),i.jsx(R,{title:"比赛集锦",data:t.filter(e=>[g.finish].includes(e.status)&&!!e.videoUrl),style:{marginBottom:"16px"}}),i.jsx(_,{title:"历史集锦",data:t.filter(e=>[g.history].includes(e.status))})]})};export{D as default};