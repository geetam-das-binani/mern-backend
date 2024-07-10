import{bi as A,r as s,u as E,a as q,Q as _,bZ as F,b_ as $,j as e,k as M}from"./index-9eaefbd0.js";import{S as R}from"./Dashboard-1526e87a.js";import{e as I}from"./productActions-cc57c360.js";import{M as T}from"./Metadata-b3055ca2.js";import{d as H}from"./AccountTree-c9c90f1a.js";import{d as Z,a as G,b as O,c as Q,e as U}from"./BrandingWatermark-fef1e175.js";import{B as X}from"./ButtonLoader-0b1028ce.js";import{a as z}from"./Button-ab45b93f.js";import"./Collapse-c499ae7f.js";const J=["Laptop","Footwear","Shirts","T-shirts","Attire","Camera","Books","SmartPhones","Toys","Living","Games","Beauty","Fashion"],K=["Apple","Samsung","Sony","Nike","Adidas","Lego","Puma","Xbox","Pottery Barn","Maybelline","L'Oréal","Clinique","Marvel Comics","Levi's","Zara","Penguin Random House"];function ce(){const d=A(),[u,l]=s.useState(!1),o=E(),[m,g]=s.useState(""),[p,S]=s.useState(""),[h,P]=s.useState(""),[y,C]=s.useState(""),[b,w]=s.useState(0),[x,k]=s.useState(""),[N,f]=s.useState([]),[B,j]=s.useState([]),{error:c,success:v}=q(t=>t.newProductAdmin);s.useEffect(()=>{c&&(_.error(c,{theme:"dark"}),o(F()),l(!1)),v&&(_.success("Product Created Successfully",{theme:"dark"}),o($()),d("/products"))},[o,c,v,d]);const D=t=>{t.preventDefault();const a=new FormData;a.set("name",m),a.set("price",p),a.set("description",h),a.set("category",y),a.set("Stock",b),a.set("brand",x),N.forEach(i=>{a.append("images",i)}),l(!0),I(o,a)},L=t=>{const a=Array.from(t.target.files);f([]),j([]),a.forEach(i=>{const r=new FileReader;r.onload=()=>{r.readyState===2&&(f(n=>[...n,r.result]),j(n=>[...n,r.result]))},r.readAsDataURL(i)})};return e.jsxs(s.Fragment,{children:[e.jsx(T,{title:"Create Product"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(R,{}),e.jsx("div",{className:"new__product__container",children:e.jsxs("form",{className:"create__product__form",encType:"multipart/form-data",onSubmit:D,children:[e.jsx("h1",{children:"Create Product"}),e.jsxs("div",{children:[e.jsx(Z,{}),e.jsx("input",{type:"text",placeholder:"Product Name",required:!0,value:m,onChange:({target:t})=>g(t.value)})]}),e.jsxs("div",{children:[e.jsx(G,{}),e.jsx("input",{type:"text",placeholder:"Price",required:!0,value:p,onChange:({target:t})=>S(t.value)})]}),e.jsxs("div",{children:[e.jsx(O,{}),e.jsx("textarea",{type:"text",placeholder:"Product Descripton",required:!0,cols:"30",rows:"1",value:h,onChange:({target:t})=>P(t.value)})]}),e.jsxs("div",{children:[e.jsx(H,{}),e.jsxs("select",{onChange:({target:t})=>C(t.value),children:[e.jsx("option",{value:"",children:"Choose Category"}),J.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{children:[e.jsx(Q,{}),e.jsxs("select",{value:x,onChange:({target:t})=>k(t.value),children:[e.jsx("option",{value:"",children:" Choose Brands"}),K.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{children:[e.jsx(U,{}),e.jsx("input",{type:"number",placeholder:"Stock",required:!0,onChange:({target:t})=>w(t.value)})]}),e.jsx("div",{id:"create__product__form__file",children:e.jsx("input",{type:"file",onChange:L,name:"avatar",accept:"images/*",multiple:!0})}),e.jsx("div",{id:"create__product__form__image",children:B.map(t=>e.jsx("img",{src:t,alt:"Product preview"},t))}),e.jsx(z,{id:"create__product__btn",type:"submit",disabled:u,children:u?e.jsx(X,{}):"Create Product"})]})})]}),e.jsx(M,{})]})}export{ce as default};