import{b9 as R,a as N,bi as T,r as a,u as H,Q as h,ba as O,b$ as Z,c0 as G,j as e,k as I}from"./index-9eaefbd0.js";import{S as Q}from"./Dashboard-1526e87a.js";import{a as X,u as z}from"./productActions-cc57c360.js";import{M as J}from"./Metadata-b3055ca2.js";import{d as K}from"./AccountTree-c9c90f1a.js";import{d as V,a as W,b as Y,c as ee,e as te}from"./BrandingWatermark-fef1e175.js";import{B as ae}from"./ButtonLoader-0b1028ce.js";import{L as re}from"./Loader-02f52dfe.js";import{a as se}from"./Button-ab45b93f.js";import"./Collapse-c499ae7f.js";const oe=["Laptop","Footwear","Shirts","T-shirts","Attire","Camera","Books","SmartPhones","Toys","Living","Games","Beauty","Fashion","Zara"],ie=["Apple","Samsung","Sony","Nike","Adidas","Lego","Puma","Xbox","Pottery Barn","Maybelline","L'Oréal","Clinique","Marvel Comics","Levi's","Zara","Penguin Random House"];function je(){const{id:c}=R(),{error:n,isUpdated:x}=N(t=>t.deleteUpdateProductAdmin),{error:u,product:r,loading:A}=N(t=>t.product),F=T(),[f,l]=a.useState(!1),o=H(),[j,v]=a.useState(""),[_,g]=a.useState(""),[P,S]=a.useState(""),[y,b]=a.useState(""),[C,k]=a.useState(0),[U,L]=a.useState(""),[$,w]=a.useState([]),[B,D]=a.useState([]),[i,E]=a.useState([]);a.useEffect(()=>{r&&r._id!==c?X(o,c):(v(r.name),g(r.price),b(r.category),k(r.Stock),L(r.brand),S(r.description),E(r.images)),u&&(h.error(u,{theme:"dark"}),o(O()),l(!1)),n&&(l(!1),h.error(n,{theme:"dark"}),o(Z())),x&&(h.success("Product Updated Successfully",{theme:"dark"}),o(G()),F("/admin/products"))},[o,c,u,x,n,r]);const q=t=>{t.preventDefault();const s=new FormData;s.set("name",j),s.set("price",_),s.set("description",P),s.set("category",y),s.set("Stock",C),s.set("brand",U),$.forEach(p=>{s.append("images",p)}),l(!0),z(o,s,c)},M=t=>{const s=Array.from(t.target.files);E([]),w([]),D([]),s.forEach(p=>{const d=new FileReader;d.onload=()=>{d.readyState===2&&(w(m=>[...m,d.result]),D(m=>[...m,d.result]))},d.readAsDataURL(p)})};return e.jsx(a.Fragment,{children:A?e.jsx(re,{}):e.jsxs(a.Fragment,{children:[e.jsx(J,{title:"Update Product"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(Q,{}),e.jsx("div",{className:"new__product__container",children:e.jsxs("form",{className:"create__product__form",encType:"multipart/form-data",onSubmit:q,children:[e.jsx("h1",{children:"Update Product"}),e.jsxs("div",{children:[e.jsx(V,{}),e.jsx("input",{type:"text",placeholder:"Product Name",required:!0,value:j||"",onChange:({target:t})=>v(t.value)})]}),e.jsxs("div",{children:[e.jsx(W,{}),e.jsx("input",{type:"text",placeholder:"Price",required:!0,value:_||"",onChange:({target:t})=>g(t.value)})]}),e.jsxs("div",{children:[e.jsx(Y,{}),e.jsx("textarea",{type:"text",placeholder:"Product Descripton",required:!0,cols:"30",rows:"1",value:P||"",onChange:({target:t})=>S(t.value)})]}),e.jsxs("div",{children:[e.jsx(K,{}),e.jsxs("select",{value:y||"",onChange:({target:t})=>b(t.value),children:[e.jsx("option",{value:"",children:"Choose Category"}),oe.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{children:[e.jsx(ee,{}),e.jsxs("select",{value:U,onChange:({target:t})=>L(t.value),children:[e.jsx("option",{value:"",children:" Choose Brands"}),ie.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{children:[e.jsx(te,{}),e.jsx("input",{type:"number",placeholder:"Stock",required:!0,value:C||"",onChange:({target:t})=>k(t.value)})]}),e.jsx("div",{id:"create__product__form__file",children:e.jsx("input",{type:"file",onChange:M,name:"avatar",accept:"images/*",multiple:!0})}),e.jsx("div",{id:"create__product__form__image",children:(i==null?void 0:i.length)>0&&(i==null?void 0:i.map(t=>e.jsx("img",{src:t.url,alt:"Product preview"},t.url)))}),e.jsx("div",{id:"create__product__form__image",children:B&&B.map(t=>e.jsx("img",{src:t,alt:"Product preview"},t))}),e.jsx(se,{id:"create__product__btn",type:"submit",disabled:f,children:f?e.jsx(ae,{}):"Update Product"})]})})]}),e.jsx(I,{})]})})}export{je as default};