const __vite__fileDeps=["assets/index-CO13qhBD.js","assets/index-DmUxXolw.js","assets/index-Dpx07GPy.css","assets/index-CLFqlnwM.js","assets/index-DrwuuXt9.js","assets/index-Cfz0wL7K.css","assets/index-D7EKwikz.js","assets/index-L1s5A0Ig.js","assets/index-C-iwi80Q.js","assets/iconBase-CyE5ZyJO.js","assets/index-Bbd0Edbg.css","assets/index-DoyUHYQN.js","assets/index--QlT_tZv.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as s,j as e,r as t,_ as r}from"./index-DmUxXolw.js";const o=t.lazy(()=>r(()=>import("./index-CO13qhBD.js"),__vite__mapDeps([0,1,2,3,4,5]))),_=t.lazy(()=>r(()=>import("./index-D7EKwikz.js"),__vite__mapDeps([6,1,2]))),n=t.lazy(()=>r(()=>import("./index-L1s5A0Ig.js"),__vite__mapDeps([7,1,2,3,8,9,10]))),i=t.lazy(()=>r(()=>import("./index-DoyUHYQN.js"),__vite__mapDeps([11,1,2,9,12]))),p=[{path:"/",children:[{path:"/",element:e.jsx(o,{})},{path:"/:year",element:e.jsx(_,{})},{path:"/:year/:matchId",element:e.jsx(n,{})}]},{path:"*",element:e.jsx(i,{})}],c=()=>{const a=s(p);return e.jsx(t.Suspense,{fallback:null,children:a})};export{c as default,p as routes};