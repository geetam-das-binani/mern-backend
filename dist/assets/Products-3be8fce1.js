import{r as _,bf as z,bg as ne,b9 as le,u as oe,a as ue,Q as fe,j as f,k as de}from"./index-66c83e19.js";import{g as pe}from"./productActions-6f95e1e5.js";import{L as ce}from"./Loader-795ab423.js";import{P as ge}from"./ProductCard-ab51beb0.js";import{M as he}from"./Metadata-772d0c81.js";import{T as A}from"./Typography-c35deaa4.js";import{S as U}from"./Slider-f015effb.js";import"./Rating-3d268c0d.js";var H={},ve=I;function I(p,o){if(!(this instanceof I))return new I(p,o);this.per_page=p||25,this.length=o||10}I.prototype.build=function(p,o){var t=Math.ceil(p/this.per_page);p=parseInt(p,10),o=parseInt(o,10)||1,o<1&&(o=1),o>t&&(o=t);var c=Math.max(1,o-Math.floor(this.length/2)),d=Math.min(t,o+Math.floor(this.length/2));d-c+1<this.length&&(o<t/2?d=Math.min(t,d+(this.length-(d-c))):c=Math.max(1,c-(this.length-(d-c)))),d-c+1>this.length&&(o>t/2?c++:d--);var u=this.per_page*(o-1);u<0&&(u=0);var g=this.per_page*o-1;return g<0&&(g=0),g>Math.max(p-1,0)&&(g=Math.max(p-1,0)),{total_pages:t,pages:Math.min(d-c+1,t),current_page:o,first_page:c,last_page:d,previous_page:o-1,next_page:o+1,has_previous_page:o>1,has_next_page:o<t,total_results:p,results:Math.min(g-u+1,p),first_result:u,last_result:g}};var Q={},X={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(p){(function(){var o={}.hasOwnProperty;function t(){for(var c=[],d=0;d<arguments.length;d++){var u=arguments[d];if(u){var g=typeof u;if(g==="string"||g==="number")c.push(u);else if(Array.isArray(u)){if(u.length){var m=t.apply(null,u);m&&c.push(m)}}else if(g==="object"){if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]")){c.push(u.toString());continue}for(var P in u)o.call(u,P)&&u[P]&&c.push(P)}}}return c.join(" ")}p.exports?(t.default=t,p.exports=t):window.classNames=t})()})(X);var Z=X.exports;(function(p){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var o=g(_),t=d(z),c=d(Z);function d(i){return i&&i.__esModule?i:{default:i}}function u(){if(typeof WeakMap!="function")return null;var i=new WeakMap;return u=function(){return i},i}function g(i){if(i&&i.__esModule)return i;if(i===null||m(i)!=="object"&&typeof i!="function")return{default:i};var l=u();if(l&&l.has(i))return l.get(i);var e={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){var s=a?Object.getOwnPropertyDescriptor(i,r):null;s&&(s.get||s.set)?Object.defineProperty(e,r,s):e[r]=i[r]}return e.default=i,l&&l.set(i,e),e}function m(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(e){return typeof e}:m=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(i)}function P(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")}function b(i,l){for(var e=0;e<l.length;e++){var a=l[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function L(i,l,e){return l&&b(i.prototype,l),e&&b(i,e),i}function w(i,l){return l&&(m(l)==="object"||typeof l=="function")?l:O(i)}function O(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function D(i){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(i)}function S(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(l&&l.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),l&&x(i,l)}function x(i,l){return x=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},x(i,l)}function k(i,l,e){return l in i?Object.defineProperty(i,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[l]=e,i}var C=function(i){S(l,i);function l(){return P(this,l),w(this,D(l).apply(this,arguments))}return L(l,[{key:"handleClick",value:function(a){var r=this.props,s=r.isDisabled,n=r.pageNumber;a.preventDefault(),!s&&this.props.onClick(n)}},{key:"render",value:function(){var a,r=this.props,s=r.pageText;r.pageNumber;var n=r.activeClass,v=r.itemClass,y=r.linkClass,F=r.activeLinkClass,V=r.disabledClass,j=r.isActive,W=r.isDisabled,B=r.href,$=r.ariaLabel,N=(0,c.default)(v,(a={},k(a,n,j),k(a,V,W),a)),G=(0,c.default)(y,k({},F,j));return o.default.createElement("li",{className:N,onClick:this.handleClick.bind(this)},o.default.createElement("a",{className:G,href:B,"aria-label":$},s))}}]),l}(o.Component);p.default=C,k(C,"propTypes",{pageText:t.default.oneOfType([t.default.string,t.default.element]),pageNumber:t.default.number.isRequired,onClick:t.default.func.isRequired,isActive:t.default.bool.isRequired,isDisabled:t.default.bool,activeClass:t.default.string,activeLinkClass:t.default.string,itemClass:t.default.string,linkClass:t.default.string,disabledClass:t.default.string,href:t.default.string}),k(C,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})})(Q);(function(p){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var o=P(_),t=g(z),c=g(ve),d=g(Q),u=g(Z);function g(e){return e&&e.__esModule?e:{default:e}}function m(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return m=function(){return e},e}function P(e){if(e&&e.__esModule)return e;if(e===null||b(e)!=="object"&&typeof e!="function")return{default:e};var a=m();if(a&&a.has(e))return a.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var v=s?Object.getOwnPropertyDescriptor(e,n):null;v&&(v.get||v.set)?Object.defineProperty(r,n,v):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}function b(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?b=function(r){return typeof r}:b=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b(e)}function L(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function w(e,a){for(var r=0;r<a.length;r++){var s=a[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function O(e,a,r){return a&&w(e.prototype,a),r&&w(e,r),e}function D(e,a){return a&&(b(a)==="object"||typeof a=="function")?a:S(e)}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},x(e)}function k(e,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&C(e,a)}function C(e,a){return C=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s},C(e,a)}function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var l=function(e){k(a,e);function a(){return L(this,a),D(this,x(a).apply(this,arguments))}return O(a,[{key:"isFirstPageVisible",value:function(s){var n=this.props,v=n.hideDisabled;n.hideNavigation;var y=n.hideFirstLastPages;return!(y||v&&!s)}},{key:"isPrevPageVisible",value:function(s){var n=this.props,v=n.hideDisabled,y=n.hideNavigation;return!(y||v&&!s)}},{key:"isNextPageVisible",value:function(s){var n=this.props,v=n.hideDisabled,y=n.hideNavigation;return!(y||v&&!s)}},{key:"isLastPageVisible",value:function(s){var n=this.props,v=n.hideDisabled;n.hideNavigation;var y=n.hideFirstLastPages;return!(y||v&&!s)}},{key:"buildPages",value:function(){var s=[],n=this.props,v=n.itemsCountPerPage,y=n.pageRangeDisplayed,F=n.activePage,V=n.prevPageText,j=n.nextPageText,W=n.firstPageText,B=n.lastPageText,$=n.totalItemsCount,N=n.onChange,G=n.activeClass,M=n.itemClass,J=n.itemClassFirst,K=n.itemClassPrev,Y=n.itemClassNext,ee=n.itemClassLast,te=n.activeLinkClass,q=n.disabledClass;n.hideDisabled,n.hideNavigation;var R=n.linkClass,ae=n.linkClassFirst,ie=n.linkClassPrev,se=n.linkClassNext,re=n.linkClassLast;n.hideFirstLastPages;for(var E=n.getPageUrl,h=new c.default(v,y).build($,F),T=h.first_page;T<=h.last_page;T++)s.push(o.default.createElement(d.default,{isActive:T===F,key:T,href:E(T),pageNumber:T,pageText:T+"",onClick:N,itemClass:M,linkClass:R,activeClass:G,activeLinkClass:te,ariaLabel:"Go to page number ".concat(T)}));return this.isPrevPageVisible(h.has_previous_page)&&s.unshift(o.default.createElement(d.default,{key:"prev"+h.previous_page,href:E(h.previous_page),pageNumber:h.previous_page,onClick:N,pageText:V,isDisabled:!h.has_previous_page,itemClass:(0,u.default)(M,K),linkClass:(0,u.default)(R,ie),disabledClass:q,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(h.has_previous_page)&&s.unshift(o.default.createElement(d.default,{key:"first",href:E(1),pageNumber:1,onClick:N,pageText:W,isDisabled:!h.has_previous_page,itemClass:(0,u.default)(M,J),linkClass:(0,u.default)(R,ae),disabledClass:q,ariaLabel:"Go to first page"})),this.isNextPageVisible(h.has_next_page)&&s.push(o.default.createElement(d.default,{key:"next"+h.next_page,href:E(h.next_page),pageNumber:h.next_page,onClick:N,pageText:j,isDisabled:!h.has_next_page,itemClass:(0,u.default)(M,Y),linkClass:(0,u.default)(R,se),disabledClass:q,ariaLabel:"Go to next page"})),this.isLastPageVisible(h.has_next_page)&&s.push(o.default.createElement(d.default,{key:"last",href:E(h.total_pages),pageNumber:h.total_pages,onClick:N,pageText:B,isDisabled:h.current_page===h.total_pages,itemClass:(0,u.default)(M,ee),linkClass:(0,u.default)(R,re),disabledClass:q,ariaLabel:"Go to last page"})),s}},{key:"render",value:function(){var s=this.buildPages();return o.default.createElement("ul",{className:this.props.innerClass},s)}}]),a}(o.default.Component);p.default=l,i(l,"propTypes",{totalItemsCount:t.default.number.isRequired,onChange:t.default.func.isRequired,activePage:t.default.number,itemsCountPerPage:t.default.number,pageRangeDisplayed:t.default.number,prevPageText:t.default.oneOfType([t.default.string,t.default.element]),nextPageText:t.default.oneOfType([t.default.string,t.default.element]),lastPageText:t.default.oneOfType([t.default.string,t.default.element]),firstPageText:t.default.oneOfType([t.default.string,t.default.element]),disabledClass:t.default.string,hideDisabled:t.default.bool,hideNavigation:t.default.bool,innerClass:t.default.string,itemClass:t.default.string,itemClassFirst:t.default.string,itemClassPrev:t.default.string,itemClassNext:t.default.string,itemClassLast:t.default.string,linkClass:t.default.string,activeClass:t.default.string,activeLinkClass:t.default.string,linkClassFirst:t.default.string,linkClassPrev:t.default.string,linkClassNext:t.default.string,linkClassLast:t.default.string,hideFirstLastPages:t.default.bool,getPageUrl:t.default.func}),i(l,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"⟨",firstPageText:"«",nextPageText:"⟩",lastPageText:"»",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(a){return"#"}})})(H);const me=ne(H),Pe=["Laptop","Footwear","Shirts","T-shirts","Attire","Camera","Books","SmartPhones","Toys","Living","Games","Beauty","Fashion"],Ce=["Apple","Samsung","Sony","Nike","Adidas","Lego","Puma","Xbox","Pottery Barn","Maybelline","L'Oréal","Clinique","Marvel Comics","Levi's","Zara","Penguin Random House"];function De(){const{keyword:p}=le(),o=oe(),[t,c]=_.useState(1),[d,u]=_.useState([0,1e5]),[g,m]=_.useState(""),[P,b]=_.useState(0),[L,w]=_.useState(!1),[O,D]=_.useState(!1),{loading:S,products:x,productsCount:k,error:C,resultsPerPage:i,filteredProductsCount:l}=ue(s=>s.products),e=s=>{c(s)},a=(s,n)=>{u(n)};_.useEffect(()=>{C&&fe.error(C,{theme:"dark"}),pe(o,p,t,d,g,P,L,O)},[o,C,p,t,d,g,P,L,O]);let r=l;return f.jsxs(_.Fragment,{children:[S?f.jsx(ce,{}):f.jsxs(_.Fragment,{children:[f.jsx(he,{title:"PRODUCTS ...ECOMMERCE"}),f.jsx("h2",{className:"products__heading",children:"Products"}),f.jsx("div",{className:"products",children:x&&x.map(s=>f.jsx(ge,{...s},s._id))}),f.jsxs("div",{className:"filter__box",children:[f.jsx(A,{children:"Price"}),f.jsx(U,{value:d,valueLabelDisplay:"auto",onChange:a,size:"small","aria-labelledby":"range-slider",min:0,max:25e3}),f.jsx(A,{children:"By Categories"}),f.jsxs("select",{value:g,onChange:({target:s})=>m(s.value),children:[f.jsx("option",{value:"",children:"Sort"}),Pe.map(s=>f.jsx("option",{value:s,children:s},s))]}),f.jsx(A,{children:"By Brands"}),f.jsxs("select",{value:L,onChange:({target:s})=>w(s.value),children:[f.jsx("option",{value:"",children:"Brands"}),Ce.map(s=>f.jsx("option",{value:s,children:s},s))]}),f.jsxs("fieldset",{children:[f.jsx(A,{children:"Ratings Above"}),f.jsx(U,{value:P,onChange:(s,n)=>b(n),"aria-labelledby":"continuous-slider",min:0,max:5,size:"small",valueLabelDisplay:"auto"})]}),f.jsxs("div",{children:[f.jsx("input",{type:"checkbox",id:"check__stock",checked:O,onChange:()=>D(!O)}),f.jsx("label",{htmlFor:"check__stock",children:"In Stock"})]})]}),i<r&&f.jsx("div",{className:"pagination__box",children:f.jsx(me,{itemsCountPerPage:i,totalItemsCount:k,activePage:t,onChange:e,nextPageText:"Next",prevPageText:"Prev",firstPageText:"1st",lastPageText:"last",itemClass:"page__item",linkClass:"page__link",activeClass:"page__item__active",activeLinkClass:"page_link__active"})})]}),f.jsx(de,{})]})}export{De as default};
