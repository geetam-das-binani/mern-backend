import{b6 as y,b7 as z,j as e,bi as D,a as h,r,u as k,Q as i,bz as q,bA as V,bB as M,bq as B,bC as C,bh as F,k as L,bD as R,bE as Y}from"./index-66c83e19.js";import{d as A}from"./Phone-619bbed4.js";import{M as x}from"./Metadata-772d0c81.js";import{B as j}from"./ButtonLoader-9b465361.js";import{a as b}from"./Button-151706a8.js";var d={},I=z;Object.defineProperty(d,"__esModule",{value:!0});var v=d.default=void 0,P=I(y()),U=e,Q=(0,P.default)((0,U.jsx)("path",{d:"M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"Dialpad");v=d.default=Q;function T(){const g=D(),{error:n,isSended:l,isVerified:u,verifyError:c}=h(s=>s.otp),{isAuthenticatedUser:p}=h(s=>s.user),[o,a]=r.useState(!1),t=k(),[m,S]=r.useState(""),[f,E]=r.useState(""),[N,_]=r.useState(!1),O=s=>{s.preventDefault(),R(t,m),a(!0)},w=s=>{s.preventDefault(),Y(t,f),a(!0)};return r.useEffect(()=>{n&&(i.error(n,{theme:"dark"}),t(q()),a(!1)),l&&(i.success("Otp Send Successfully",{theme:"dark"}),t(V()),_(!0),a(!1)),u&&(t(M()),B(t),a(!1)),c&&(i.error(c,{theme:"dark"}),t(C()),_(!0),a(!1)),p&&(i.success("Login Successfully",{theme:"dark"}),g("/account"))},[t,l,n,u,c,p]),e.jsxs(r.Fragment,{children:[N?e.jsxs(r.Fragment,{children:[e.jsx(x,{title:"Enter otp"}),e.jsx("div",{className:"forgot__password__container",children:e.jsxs("div",{className:"forgot__password__box",children:[e.jsx("h2",{children:"Enter otp"}),e.jsxs("form",{className:"forgot__password__form",onSubmit:w,children:[e.jsxs("div",{className:"forgot__password__Email",children:[e.jsx(v,{}),e.jsx("input",{type:"number",placeholder:"Enter Your Otp",required:!0,name:"otp",value:f,onChange:({target:s})=>E(s.value)})]}),e.jsx(b,{id:"create__product__btn",type:"submit",disabled:o,children:o?e.jsx(j,{}):"Send"})]})]})})]}):e.jsxs(r.Fragment,{children:[e.jsx(x,{title:"Send Otp"}),e.jsx("div",{className:"forgot__password__container",children:e.jsxs("div",{className:"forgot__password__box",children:[e.jsx("h2",{children:"Send Otp"}),e.jsxs("form",{className:"forgot__password__form",onSubmit:O,children:[e.jsxs("div",{className:"forgot__password__Email",children:[e.jsx(A,{}),e.jsx("input",{type:"number",placeholder:"Enter Your Number",required:!0,name:"phoneNumber",value:m,onChange:({target:s})=>S(s.value)})]}),e.jsx(b,{id:"create__product__btn",type:"submit",disabled:o,children:o?e.jsx(j,{}):"Send"})]}),e.jsx(F,{to:"/login",children:" go back "})]})})]}),e.jsx(L,{})]})}export{T as default};