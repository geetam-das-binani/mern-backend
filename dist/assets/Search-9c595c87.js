import{bi as n,r as s,j as t}from"./index-66c83e19.js";import{M as u}from"./Metadata-772d0c81.js";function d(){const r=n(),[a,o]=s.useState(""),c=e=>(e.preventDefault(),a.trim()?r(`/products/${a}`):r("/products"));return t.jsxs(s.Fragment,{children:[t.jsx(u,{title:"Search a product ...ECOMMERCE"}),t.jsxs("form",{action:"",className:"search__box",onSubmit:c,children:[t.jsx("input",{type:"text",placeholder:"Search a product...",onChange:e=>o(e.target.value)}),t.jsx("input",{type:"submit",value:"search"})]})]})}export{d as default};