import{bi as g,u as _,a as o,r as a,Q as n,ci as b,cj as U,ck as v,bV as A,j as e,bh as u,k as N,cl as S}from"./index-1dce364e.js";import{d as y,a as D}from"./DeleteForever-722c9c61.js";import{S as k}from"./Dashboard-5148f9aa.js";import{M as w}from"./Metadata-02a1e8c7.js";import{L as C}from"./Loader-f12eced5.js";import{d as E}from"./Cancel-2e0bedbf.js";import{T as L}from"./Typography-9d2df654.js";import{a as R}from"./Button-bc91d4db.js";import{D as F}from"./DataGrid-ba459848.js";import"./Collapse-ae32e88f.js";import"./TextField-cd9713db.js";function q(){const d=g(),s=_(),{users:t,error:i,loading:f}=o(r=>r.adminGetAllUsers),{user:x}=o(r=>r.user),{isDeleted:m,error:l,message:c}=o(r=>r.deleteUpdateUserAdmin),p=r=>{S(s,r)},j=[{field:"id",headerName:"User ID",minwidth:180,flex:.5},{field:"email",headerName:"Email",minwidth:200,flex:1},{field:"name",headerName:"Name",minwidth:150,flex:.5},{field:"role",headerName:"Role",minwidth:150,flex:.3,cellClassName:r=>r.value==="admin"?"green_Color":"red_Color"},{field:"actions",headerName:"Actions",minwidth:150,type:"number",sortable:!1,flex:.3,renderCell:r=>x._id===r.id?null:e.jsxs(a.Fragment,{children:[e.jsx(u,{to:`/admin/user/${r.id}`,children:e.jsx(y,{})}),e.jsx(R,{onClick:()=>p(r.id),children:e.jsx(D,{})})]})}],h=[];return t&&t.forEach(r=>{h.push({id:r._id,name:r.name,role:r.role,email:r.email})}),a.useEffect(()=>{i&&(n.error(i,{theme:"dark"}),s(b())),l&&(n.error(l,{theme:"dark"}),s(U())),m&&(n.success(c,{theme:"dark"}),s(v()),d("/admin/users")),A(s)},[s,i,m,l,d,c]),e.jsxs(a.Fragment,{children:[f?e.jsx(C,{}):t.length>0?e.jsxs(a.Fragment,{children:[e.jsx(w,{title:"ALL USERS-Admin"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(k,{}),e.jsxs("div",{className:"products__lists__container",children:[e.jsx("h1",{id:"product__list__heading",children:"ALL USERS"}),e.jsx(F,{rows:h,columns:j,getRowHeight:()=>"auto",disableSelectionOnClick:!0,className:"product__list__table"})]})]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"auto",textAlign:"center",height:"60vh"},children:[e.jsx(E,{style:{color:" tomato",fontSize:"7vmax"}}),e.jsx(L,{style:{fontSize:"2vmax"},children:"Currently No Users"}),e.jsx(u,{style:{background:"rgb(51, 51, 51)",textDecoration:"none",color:"white",margin:" 2vmax",border:"none",padding:"1vmax 3vmax",cursor:"pointer",font:" 400 1vmax Roboto"},to:"/admin/dashboard",children:"View Dashboard"})]}),e.jsx(N,{})]})}export{q as default};
