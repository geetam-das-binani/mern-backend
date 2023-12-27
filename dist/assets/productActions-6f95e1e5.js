import{bI as c,ct as C,cu as g,cv as P,cw as w,cx as R,cy as E,cz as $,cA as F,cB as m,cC as M,cD as p,cE as N,cF as y,cG as S,cH as f,cI as I,cJ as v,cK as h,cL as k}from"./index-66c83e19.js";const o="https://becoomerce.onrender.com/api/v1",x=async(e,t="",s=1,r=[0,1e5],a,d=0,i="",u)=>{try{let n=`${o}/products?keyword=${t}&page=${s}&price[gte]=${r[0]}&price[lte]=${r[1]}&ratings[gte]=${d}&checked=${u}`;a&&(n=`${o}/products?keyword=${t}&page=${s}&price[gte]=${r[0]}&price[lte]=${r[1]}&category=${a}&ratings[gte]=${d}&checked=${u}`),i&&(n=`${o}/products?keyword=${t}&page=${s}&price[gte]=${r[0]}&price[lte]=${r[1]}&ratings[gte]=${d}&brand=${i}&checked=${u}`),a&&i&&(n=`${o}/products?keyword=${t}&page=${s}&price[gte]=${r[0]}&price[lte]=${r[1]}&ratings[gte]=${d}&brand=${i}&category=${a}&checked=${u}`);const{data:l}=await c.get(n);return e(C(l)),l}catch(n){if(n.message==="Network Error")return e(g(n.message));e(g(n.response.data.errorMessage))}},T=async(e,t)=>{try{const{data:s}=await c.get(`${o}/product/${t}`);return e(P(s.product)),s.product}catch(s){if(s.message==="Network Error")return e(w(s.message));e(w(s.response.data.errorMessage))}},U=async(e,t)=>{const s={headers:{"Content-Type":"multipart/form-data"},withCredentials:!0};try{const{data:r}=await c.post(`${o}/review`,t,s);e(F(r.success))}catch(r){if(r.message==="Network Error")return e(m(r.message));e(m(r.response.data.errorMessage))}},b=async e=>{const t={withCredentials:!0};try{const{data:s}=await c.get(`${o}/admin/products`,t);e(R(s.products))}catch(s){if(s.message==="Network Error")return e(g(s.message));e(g(s.response.data.errorMessage))}},j=async(e,t)=>{const s={headers:{"Content-Type":"application/json"},withCredentials:!0};try{const{data:r}=await c.post(`${o}/admin/product/new`,t,s);e(M(r))}catch(r){if(r.message==="Network Error")return e(p(r.message));e(p(r.response.data.errorMessage))}},D=async(e,t,s)=>{const r={headers:{"Content-Type":"application/json"},withCredentials:!0};try{const{data:a}=await c.post(`${o}/admin/product/update/${s}`,t,r);e(N(a.success))}catch(a){if(a.message==="Network Error")return e(y(a.message));e(y(a.response.data.errorMessage))}},z=async(e,t)=>{try{const{data:s}=await c.delete(`${o}/admin/product/delete/${t}`,{withCredentials:!0});e(I(s.success))}catch(s){if(s.message==="Network Error")return e(v(s.message));e(v(s.response.data.errorMessage))}},B=async(e,t)=>{const s={withCredentials:!0};try{const{data:r}=await c.get(`${o}/reviews?id=${t}`,s);e(E(r.reviews))}catch(r){if(r.message==="Network Error")return e($(r.message));e($(r.response.data.errorMessage))}},G=async(e,t,s)=>{const r={withCredentials:!0};try{const{data:a}=await c.delete(`${o}/reviews?Id=${t}&productId=${s}`,r);e(h(a.success))}catch(a){if(a.message==="Network Error")return e(k(a.message));e(k(a.response.data.errorMessage))}},H=async(e,t)=>{const s={withCredentials:!0};try{const{data:r}=await c.delete(`${o}/review/delete?productId=${t}`,s);e(S(r.success))}catch(r){if(r.message==="Network Error")return e(f(r.message));e(f(r.response.data.errorMessage))}};export{T as a,b,z as c,H as d,j as e,B as f,x as g,G as h,U as n,D as u};
