import{u as m,a as x,b9 as _,r as a,Q as j,bT as f,j as e,bh as I,k as g}from"./index-9eaefbd0.js";/* empty css                     */import{M as u}from"./Metadata-b3055ca2.js";import{g as v}from"./orderActions-bbd0b3f8.js";import{L as y}from"./Loader-02f52dfe.js";import{T as r}from"./Typography-024b086d.js";function S(){const n=m(),{order:s,error:i,loading:p}=x(d=>d.myOrderDetails),{id:o}=_();return a.useEffect(()=>{i&&(j.error(i,{theme:"dark"}),n(f())),v(n,o)},[n,o,i]),e.jsxs(a.Fragment,{children:[p?e.jsx(y,{}):e.jsxs(a.Fragment,{children:[e.jsx(u,{title:"Order Details"}),e.jsxs("div",{className:"order__details__page",children:[e.jsxs("div",{className:"order__details__container",children:[e.jsxs(r,{component:"h1",children:["Order #",s&&s._id]}),e.jsx(r,{children:"Shipping Info"}),e.jsxs("div",{className:"order__details__container__box",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Name:"}),e.jsx("span",{children:s.user&&s.user.name})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Phone:"}),e.jsx("span",{children:s.shippingInfo&&s.shippingInfo.phoneNo})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Address:"}),e.jsx("span",{children:s.shippingInfo&&`${s.shippingInfo.address} ,${s.shippingInfo.city},${s.shippingInfo.state} ,${s.shippingInfo.country},${s.shippingInfo.pincode}`})]})]}),e.jsx(r,{children:"Payment"}),e.jsxs("div",{className:"order__details__container__box",children:[e.jsx("div",{children:e.jsx("p",{className:s.paymentInfo&&s.paymentInfo.status==="succeeded"?"green_Color":"red_Color",children:s.paymentInfo&&s.paymentInfo.status==="succeeded"?"PAID":"NOT PAID"})}),e.jsxs("div",{children:[e.jsx("p",{children:"Amount"}),e.jsx("span",{children:s.paymentInfo&&s.paymentInfo.totalPrice})]})]}),e.jsx(r,{children:"Order Status"}),e.jsx("div",{className:"order__details__container__box",children:e.jsx("div",{children:e.jsx("p",{className:s.paymentInfo&&s.paymentInfo.orderStatus==="Delivered"?"green_Color":"red_Color",children:s.paymentInfo&&s.paymentInfo.orderStatus})})})]}),e.jsxs("div",{className:"order__details__cart__items",children:[e.jsx(r,{children:"Order Items:"}),e.jsx("div",{className:"order__details__cart__items__container",children:s.orderItems&&s.orderItems.map(({image:d,name:h,price:t,product:c,quantity:l})=>e.jsxs("div",{children:[e.jsx("img",{src:d,alt:"productImage"}),e.jsx(I,{to:`/product/${c}`,children:h}),e.jsxs("span",{children:[t," X ",l,"= ",e.jsx("b",{children:t*l})]})]},c))})]})]})]}),e.jsx(g,{})]})}export{S as default};