import{G as i,u as l,a as d,r as o,Q as m,j as r,k as u}from"./index-66c83e19.js";import{P as h}from"./ProductCard-ab51beb0.js";import{M as x}from"./Metadata-772d0c81.js";import{g as C}from"./productActions-6f95e1e5.js";import{L as p}from"./Loader-795ab423.js";import"./Rating-3d268c0d.js";function f(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z",fill:"currentColor"}}]})(e)}function N(){const e=l(),{loading:n,products:a,error:t}=d(s=>s.products);return o.useEffect(()=>{t&&m.error(t,{theme:"dark"}),C(e)},[e,t]),r.jsxs(o.Fragment,{children:[n?r.jsx(p,{}):r.jsxs(o.Fragment,{children:[r.jsx(x,{title:"ECOMMERCE"}),r.jsxs("div",{className:"banner",children:[r.jsx("p",{children:"Welcome to E-commerce"}),r.jsx("h1",{children:"FIND AMAZING PRODUCTS BELOW"}),r.jsx("a",{href:"#container",children:r.jsxs("button",{children:["Scroll ",r.jsx(f,{})]})})]}),r.jsx("div",{className:"home__heading",children:"Featured Products"}),r.jsx("div",{className:"container",id:"container",children:a&&a.map((s,c)=>r.jsx(h,{...s},c))})]}),r.jsx(u,{})]})}export{N as default};
