import{bi as p,u as g,a as c,r as s,Q as o,c1 as j,c2 as y,c3 as _,j as e,bh as h,k as b}from"./index-9eaefbd0.js";import{d as D,a as O}from"./DeleteForever-a162950b.js";import{S as v}from"./Dashboard-1526e87a.js";import{a as A,d as N}from"./orderActions-bbd0b3f8.js";import{M as S}from"./Metadata-b3055ca2.js";import{L as k}from"./Loader-02f52dfe.js";import{T as C}from"./Typography-024b086d.js";import{a as L}from"./Button-ab45b93f.js";import{D as E}from"./DataGrid-48749f89.js";import"./Collapse-c499ae7f.js";import"./TextField-7faa9ec8.js";function z(){const n=p(),t=g(),{orders:a,error:d,loading:u}=c(r=>r.adminGetAllOrders),{isDeleted:l,error:i}=c(r=>r.deleteUpdateOrderAdmin),f=r=>{N(t,r)},x=[{field:"id",headerName:"Order ID",minWidth:300,flex:1},{field:"status",headerName:"Status",minWidth:150,flex:.3,cellClassName:r=>r.value==="Delivered"?"green_Color":"red_Color"},{field:"itemsQty",headerName:"Items Qty",type:"number",minWidth:300,flex:.4},{field:"amount",headerName:"Amount",type:"number",minWidth:270,flex:.5},{field:"actions",headerName:"Actions",minwidth:150,type:"number",sortable:!1,flex:.3,renderCell:r=>e.jsxs(s.Fragment,{children:[e.jsx(h,{to:`/admin/order/${r.id}`,children:e.jsx(D,{})}),e.jsx(L,{onClick:()=>f(r.id),children:e.jsx(O,{})})]})}],m=[];return a&&a.forEach(r=>{m.push({id:r._id,itemsQty:r.orderItems.length,amount:r.paymentInfo.totalPrice,status:r.paymentInfo.orderStatus})}),s.useEffect(()=>{d&&(o.error(d,{theme:"dark"}),t(j())),i&&(o.error(i,{theme:"dark"}),t(y())),l&&(o.success("Order Deleted Successfully",{theme:"dark"}),t(_()),n("/admin/orders")),A(t)},[t,d,l,i,n]),e.jsxs(s.Fragment,{children:[u?e.jsx(k,{}):a.length>0?e.jsxs(s.Fragment,{children:[e.jsx(S,{title:"ALL ORDERS-Admin"}),e.jsxs("div",{className:"dashboard",children:[e.jsx(v,{}),e.jsxs("div",{className:"products__lists__container",children:[e.jsx("h1",{id:"product__list__heading",children:"ALL ORDERS"}),e.jsx(E,{rows:m,columns:x,disableSelectionOnClick:!0,className:"product__list__table",getRowHeight:()=>"auto"})]})]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:" center",alignItems:"center",margin:"auto",textAlign:"center",height:"60vh"},children:[e.jsx(C,{style:{fontSize:"2vmax"},children:"Currently No orders placed"}),e.jsx(h,{style:{background:"tomato",textDecoration:"none",color:"white",margin:"2vmax",border:"none",padding:"1vmax 3vmax",cursor:"pointer",font:"400 1vmax Roboto"},to:"/admin/dashboard",children:"View Dashboard"})]}),e.jsx(b,{})]})}export{z as default};