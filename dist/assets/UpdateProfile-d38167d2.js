import{a as x,bi as U,u as y,r as s,Q as v,bo as E,bp as j,bq as D,br as w,j as e,k as L,bs as A}from"./index-66c83e19.js";import{d as C}from"./Face-a3d79026.js";import{d as F}from"./MailOutline-ace64fa5.js";import{M as R}from"./Metadata-772d0c81.js";import{L as k}from"./Loader-795ab423.js";import{B as q}from"./ButtonLoader-9b465361.js";function G(){const{user:r}=x(a=>a.user),{error:o,isUpdated:l,loading:h}=x(a=>a.profile),n=U(),i=y(),[g,b]=s.useState(""),[P,d]=s.useState("/Profile.png"),[m,u]=s.useState(""),[p,c]=s.useState(""),[f,_]=s.useState(!1),S=a=>{a.preventDefault();const t=new FormData;t.set("name",m),t.set("email",p),t.set("avatar",g),_(!0),A(i,t)},N=a=>{const t=new FileReader;t.onload=()=>{t.readyState===2&&(d(t.result),b(t.result))},t.readAsDataURL(a.target.files[0])};return s.useEffect(()=>{var a;r&&(u(r.name),c(r.email),d((a=r==null?void 0:r.avatar)==null?void 0:a.url)),o&&(v.error(o,{theme:"dark"}),_(!1),i(E())),l&&(i(j(!1)),v.success("Profile Updated Successfully",{theme:"dark"}),D(i),n("/account"),i(w())),setTimeout(()=>{i(j(!1))},500)},[i,o,l,n,r]),e.jsx(s.Fragment,{children:h?e.jsx(k,{}):e.jsxs(s.Fragment,{children:[e.jsx(R,{title:"Update Profile"}),e.jsx("div",{className:"update__profile__container",children:e.jsxs("div",{className:"update__profile__box",children:[e.jsx("h2",{children:"Update Profile"}),e.jsxs("form",{className:"update__profile__form",encType:"multipart/form-data",onSubmit:S,children:[e.jsxs("div",{className:"update__profile__name",children:[e.jsx(C,{}),e.jsx("input",{type:"text",placeholder:"Name",required:!0,name:"name",value:m,onChange:({target:a})=>u(a.value)})]}),e.jsxs("div",{className:"update__profile__Email",children:[e.jsx(F,{}),e.jsx("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:p,onChange:({target:a})=>c(a.value)})]}),e.jsxs("div",{id:"update__profile__image",children:[e.jsx("img",{src:P,alt:"Avatar Preview"}),e.jsx("input",{type:"file",name:"avatar",accept:"image/*",onChange:N})]}),e.jsx("button",{type:"submit",disabled:f,className:"update__profile__btn",children:f?e.jsx(q,{}):"Update"})]})]})}),e.jsx(L,{})]})})}export{G as default};
