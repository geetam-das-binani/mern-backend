import{a as g,u as p,r as a,Q as n,bv as _,bw as x,bx as j,j as s,k as h,by as w}from"./index-9eaefbd0.js";/* empty css                       */import{d as b}from"./MailOutline-4f250b3d.js";import{M as P}from"./Metadata-b3055ca2.js";import{L as v}from"./Loader-02f52dfe.js";import{B as E}from"./ButtonLoader-0b1028ce.js";function k(){const{error:r,message:t,loading:c}=g(o=>o.forgotPassword),e=p(),[d,f]=a.useState(""),[l,i]=a.useState(!1),u=o=>{o.preventDefault();const m=new FormData;m.set("email",d),i(!0),w(e,m)};return a.useEffect(()=>{r&&(i(!1),n.error(r,{theme:"dark"}),e(_())),t&&(i(!1),n.success(t,{theme:"dark"}),e(x())),setTimeout(()=>{e(j(!1))},500)},[e,r,t]),console.log(r),s.jsx(a.Fragment,{children:c?s.jsx(v,{}):s.jsxs(a.Fragment,{children:[s.jsx(P,{title:"Forgot Password"}),s.jsx("div",{className:"forgot__password__container",children:s.jsxs("div",{className:"forgot__password__box",children:[s.jsx("h2",{children:"Forgot Password"}),s.jsxs("form",{className:"forgot__password__form",onSubmit:u,children:[s.jsxs("div",{className:"forgot__password__Email",children:[s.jsx(b,{}),s.jsx("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:d,onChange:({target:o})=>f(o.value)})]}),s.jsx("button",{type:"submit",disabled:l,className:"forgot__password__btn",children:l?s.jsx(E,{}):"Send"})]})]})}),s.jsx(h,{})]})})}export{k as default};