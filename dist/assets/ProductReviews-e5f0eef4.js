import{b6 as g,b7 as j,j as e,bi as R,u as N,b9 as b,a as f,r as s,Q as d,cr as h,cs as S,k as D}from"./index-66c83e19.js";import{f as v,h as I}from"./productActions-6f95e1e5.js";import{M as E}from"./Metadata-772d0c81.js";import{d as C}from"./Cancel-ac21fb70.js";import{S as k}from"./Sidebar-0cbec06d.js";import{a as A}from"./Button-151706a8.js";import{D as F}from"./DataGrid-1f731d81.js";import"./Collapse-f7713fb3.js";import"./TextField-b8aa4e72.js";import"./Typography-c35deaa4.js";var n={},M=j;Object.defineProperty(n,"__esModule",{value:!0});var p=n.default=void 0,y=M(g()),H=e,L=(0,y.default)((0,H.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");p=n.default=L;function $(){const c=R(),a=N();let{productId:t}=b();t&&localStorage.setItem("productId",t);const{reviews:i,error:l}=f(r=>r.adminAllReviews),{isDeleted:m,error:o}=f(r=>r.adminDeleteReview),_=r=>{t=localStorage.getItem("productId"),I(a,r,t)},x=[{field:"id",headerName:"Review ID",minwidth:200,flex:.5},{field:"user",headerName:"User",minwidth:200,flex:.6},{field:"comment",headerName:"Comment",minwidth:150,flex:1},{field:"rating",headerName:"Rating",minwidth:180,type:"number",flex:.4,cellClassName:r=>r.value>=3?"green_Color":"red_Color"},{field:"actions",headerName:"Actions",minwidth:150,type:"number",sortable:!1,flex:.3,renderCell:r=>e.jsx(s.Fragment,{children:e.jsx(A,{onClick:()=>_(r.id),children:e.jsx(p,{})})})}],u=[];i&&i.forEach(r=>{u.push({id:r._id,user:r.name,comment:r.comment,rating:r.rating})});const w=s.useCallback(()=>{if(t.length===24)return v(a,t)},[t]);return s.useEffect(()=>{l&&(d.error(l,{theme:"dark"}),a(h())),t&&w(),o&&(d.error(o,{theme:"dark"}),a(h())),m&&(d.success("Review Deleted Successfully",{theme:"dark"}),a(S()),v(a,localStorage.getItem("productId")),c("/admin/reviews"))},[a,l,m,o,c,t]),e.jsxs(s.Fragment,{children:[e.jsxs(s.Fragment,{children:[e.jsx(E,{title:"ALL REVIEWS-Admin"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(k,{}),e.jsxs("div",{className:"products__review__container",children:[e.jsx("h1",{className:"product__reviews__form__heading",children:" ALL REVIEWS"}),i&&i.length>0?e.jsx(F,{rows:u,columns:x,getRowHeight:()=>"auto",disableSelectionOnClick:!0,className:"product__list__table"}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"no__product__reviews__heading",children:"No Reviews Found"}),e.jsx("p",{className:"review__icon",children:e.jsx(C,{})})]})]})]})]}),e.jsx(D,{})]})}export{$ as default};