import{b6 as y,b7 as E,j as e,r as a,b9 as q,u as N,bi as R,a as _,cm as A,Q as b,cn as C,co as L,cp as M,k,cq as B}from"./index-1dce364e.js";import{S as F}from"./Dashboard-5148f9aa.js";/* empty css                   */import{M as V}from"./Metadata-02a1e8c7.js";import{d as $}from"./MailOutline-80946b74.js";import{B as w}from"./ButtonLoader-7a9dfb32.js";import{L as z}from"./Loader-f12eced5.js";import{a as I}from"./Button-bc91d4db.js";import"./Collapse-ae32e88f.js";var l={},P=E;Object.defineProperty(l,"__esModule",{value:!0});var S=l.default=void 0,H=P(y()),O=e,Q=(0,H.default)((0,O.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser");S=l.default=Q;function T(){const{id:i}=q(),r=N(),n=R(),[u,c]=a.useState(!1),[m,p]=a.useState(""),[f,x]=a.useState(""),[o,j]=a.useState(""),{user:t,error:v,loading:g}=_(s=>s.adminUserDetail),{isUpdated:U,error:h}=_(s=>s.deleteUpdateUserAdmin);a.useEffect(()=>{t&&t._id!==i?A(r,i):(p(t.name),x(t.email),j(t.role)),h&&(b.error(v,{theme:"dark"}),r(C()),c(!1)),U&&(b.success("User Updated Successfully",{theme:"dark"}),r(L()),n("/admin/users"))},[r,v,U,n,h,t,i]);const D=s=>{s.preventDefault();const d=new FormData;d.set("name",m),d.set("email",f),d.set("role",o),c(!0),B(r,i,d)};return e.jsxs(a.Fragment,{children:[e.jsx(V,{title:"Update User"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(F,{}),g?e.jsx(z,{}):e.jsx("div",{className:"new__product__container",children:e.jsxs("form",{className:"create__product__form",encType:"multipart/form-data",onSubmit:D,children:[e.jsx("h1",{children:"Update User"}),e.jsxs("div",{children:[e.jsx(M,{}),e.jsx("input",{type:"text",placeholder:"User Name",required:!0,value:m,onChange:({target:s})=>p(s.value)})]}),e.jsxs("div",{children:[e.jsx($,{}),e.jsx("input",{type:"email",placeholder:"User Email",required:!0,value:f,onChange:({target:s})=>x(s.value)})]}),e.jsxs("div",{children:[e.jsx(S,{}),e.jsxs("select",{value:o,onChange:({target:s})=>j(s.value),children:[e.jsx("option",{value:"",children:"Choose Role"}),e.jsx("option",{value:"user",children:"User"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx(I,{id:"create__product__btn",type:"submit",disabled:!!(u||o===""),children:u?e.jsx(w,{}):"Update User"})]})})]}),e.jsx(k,{})]})}const ae=a.memo(T);export{ae as default};
