!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@mui/material")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},function(e,t){e.exports=require("yup")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var n={};function o(e){e.forEach((function(e){if(--n[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var r,a=void 0===t?{}:t,i=a.replace,c=void 0!==i&&i,u=a.prepend,l=void 0!==u&&u,s=a.prefix,f=void 0===s?"s":s,p=[],d=0;d<e.length;d++){var m=e[d],y=m[0],b=m[1],v=m[2],h=m[3],g=""+f+y+"-"+d;if(p.push(g),!n[g]||c){n[g]=1;var O=document.getElementById(g),E=!1;O||(E=!0,(O=document.createElement("style")).setAttribute("type","text/css"),O.id=g,v&&O.setAttribute("media",v));var j=b;h&&"function"==typeof btoa&&(j+="\n/*# sourceMappingURL=data:application/json;base64,"+(r=JSON.stringify(h),btoa(encodeURIComponent(r).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),j+="\n/*# sourceURL="+h.file+"?"+g+"*/"),"textContent"in O?O.textContent=j:O.styleSheet.cssText=j,E&&(l?document.head.insertBefore(O,document.head.childNodes[0]):document.head.appendChild(O))}else n[g]++}return o.bind(null,p)}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@mui/icons-material/Close")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("@mui/icons-material/ExpandMore")},function(e,t){e.exports=require("formik")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux-devtools-extension")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-logger")},function(e,t,r){r(21),e.exports=r(26)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){var n=r(23),o=r(8),a="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return a},t._getCss=function(){return""+n},t._insertCss=function(e){return o(a,e)}},function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n)()((function(e){return e[1]}));o.push([e.i,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]),t.default=o},function(e,t,r){var n=r(25),o=r(8),a="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return a},t._getCss=function(){return""+n},t._insertCss=function(e){return o(a,e)}},function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n)()((function(e){return e[1]}));o.push([e.i,".Product img {\n  width: 80%\n}\n.Product .disabled {\n  filter: grayscale(100%);\n}",""]),t.default=o},function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),a=r(9),i=r.n(a),c=r(10),u=r.n(c),l=r(0),s=r.n(l),f=r(11),p=r.n(f),d=r(12),m=r.n(d),y=r(1),b=r(2),v=r(3),h=r(13),g=r.n(h).a.create({baseURL:"http://api-staging.parrot.rest"});g.interceptors.response.use((function(e){return 200===e.status?e.data:Promise.reject(e)}),(function(e){return Promise.reject(e)}));var O,E=g;function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}if("undefined"!=typeof window){var w,S=(O=JSON.parse(null!==(w=localStorage.getItem("auth"))&&void 0!==w?w:"{}")).token;E.defaults.headers.common.Authorization="Bearer ".concat(S)}var x=function e(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"login",(function(e,t){return E.post("api/auth/token",{username:e,password:t})})),j(this,"refreshToken",(function(e){return E.post("/api/auth/token/refresh",{refresh:e})})),j(this,"isValidToken",(function(e){return E.get("api/auth/token/test")})),e.token=null===(t=O)||void 0===t?void 0:t.token};if(j(x,"token",void 0),"undefined"!=typeof window){var A=O.token;x.token=A}var P=new x,C=function(e){e({type:"SIGN_OUT"})};r(22);function k(){return Object(b.useSelector)((function(e){return e.auth}))}var T=["children"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e){var t=e.children,r=R(e,T),n=k().token;return s.a.createElement(v.Route,I({},r,{render:function(e){var r=e.location;return n?t:s.a.createElement(v.Redirect,{to:{pathname:"/login",state:{from:r}}})}}))}var D=s.a.memo(_);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L,G=new function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(e){return E.get("api/v1/products/?store=".concat(e)).then((function(e){return e.results}))},(r="allProducts")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n},N=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,"myStores",(function(){return function(e){return E.get("api/v1/users/me").then((function(e){var t;return null===(t=e.result)||void 0===t?void 0:t.stores})).then((function(t){var r=t.map((function(e){return G.allProducts(e.uuid)}));Promise.all(r).then((function(r){r.forEach((function(e,r){var n=[];t[r].products=e.map((function(e){return-1===n.findIndex((function(t){return t.uuid===e.category.uuid}))&&n.push(q({},e.category)),q(q({},e),{},{store:t[r].uuid})})),t[r].categories=n})),e({type:"SET_USER_STORES",payload:t})}))}))}}))},H=r(14),V=r.n(H);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){e.AVAILABLE="AVAILABLE",e.UNAVAILABLE="UNAVAILABLE"}(L||(L={}));r(24);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var W={inputProps:{"aria-label":"Disponible"}},K={imageContainer:{width:"100%"}};function $(e){var t=e.product,r=Object(b.useDispatch)(),n=Object(l.useCallback)((function(e){var n,o,a;r((n=t.store,o=t.uuid,a=e.target.checked?L.AVAILABLE:L.UNAVAILABLE,function(e){E.put("api/v1/products/".concat(o,"/availability"),{availability:a}).then((function(t){e({type:"UPDATE_PRODUCT",payload:M(M({},t.result),{},{store:n})})}))}))}),[]);return s.a.createElement(y.Grid,{className:"Product",container:!0,item:!0,key:t.uuid},s.a.createElement(y.Grid,{alignItems:"center",container:!0,item:!0,justifyContent:"center",xs:4},s.a.createElement("div",{style:K.imageContainer},s.a.createElement("img",{alt:t.name,className:t.availability===L.UNAVAILABLE?"disabled":"",src:null==t?void 0:t.imageUrl}))),s.a.createElement(y.Grid,{item:!0,xs:6},s.a.createElement("b",null,t.name),s.a.createElement("div",null,"$",+t.price)),s.a.createElement(y.Grid,{item:!0,xs:2},s.a.createElement(y.Switch,J({},W,{checked:t.availability===L.AVAILABLE,onChange:n}))))}var X=s.a.memo($);function Q(e){var t=e.category,r=e.products,n=e.expanded,o=e.onExpand,a=Object(l.useCallback)((function(e,r){o(t.uuid,r)}),[o]);return s.a.createElement(y.Accordion,{expanded:n,key:t.name,onChange:a},s.a.createElement(y.AccordionSummary,{"aria-controls":"panel1a-content",expandIcon:s.a.createElement(V.a,null),id:"panel1a-header"},s.a.createElement(y.Grid,{alignItems:"center",container:!0,justifyContent:"space-between"},s.a.createElement(y.Typography,{variant:"h6"},t.name),s.a.createElement("div",null,r.length))),s.a.createElement(y.AccordionDetails,null,s.a.createElement(y.Grid,{container:!0},r.map((function(e){return s.a.createElement(X,{key:e.uuid,product:e})})))))}var Y=s.a.memo(Q);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te,re,ne,oe,ae,ie=function(){var e=Object(b.useDispatch)(),t=Object(b.useSelector)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.stores}))||[],r=Z(Object(l.useState)(""),2),n=r[0],o=r[1],a=function(e,t){o(t?e:"")};return Object(l.useEffect)((function(){e((function(e){e(N.myStores())}))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y.Grid,{container:!0,direction:"row",justifyContent:"flex-end"},s.a.createElement(y.Button,{onClick:function(){e(C)},variant:"outlined"},"Salir")),s.a.createElement(y.Grid,{container:!0,direction:"row"},t.map((function(e){return s.a.createElement(y.Grid,{item:!0,key:e.uuid},s.a.createElement(y.Typography,{gutterBottom:!0,variant:"h4"},e.name),e.categories.map((function(t){return s.a.createElement(Y,{category:t,expanded:n===t.uuid,key:t.name,onExpand:a,products:e.products.filter((function(e){return e.category.uuid===t.uuid}))})})))}))))},ce=s.a.memo(ie),ue=r(15),le=r(16),se=r(6),fe=se.object({email:se.string().email("Ingrese un email valido").required("Email es requerido"),password:se.string().min(6,"Contraseña debe de ser minimo 6 caracteres").required("Contraseña es requerida")}),pe=function(){var e=Object(le.useHistory)(),t=Object(b.useDispatch)(),r=k(),n=r.error,o=r.success;Object(l.useEffect)((function(){n&&(a.setSubmitting(!1),a.setErrors({password:"Email o contraseña incorrecta"})),o&&(a.setSubmitting(!1),e.replace("/"))}),[n,o]);var a=Object(ue.useFormik)({initialValues:{email:"android-challenge@parrotsoftware.io",password:"8mngDhoPcB3ckV7X"},validationSchema:fe,onSubmit:function(e){var r,n;t((r=e.email,n=e.password,function(e){!function(e){e({type:"CLEAR_AUTH_STATE"})}(e),P.login(r,n).then((function(t){e({type:"AUTH_SUCCESS",payload:t})})).catch((function(){e({type:"AUTH_ERROR",payload:!1})}))})),a.setSubmitting(!0)}});return s.a.createElement(y.Grid,{alignItems:"center",container:!0,justifyContent:"center",spacing:2,style:{minHeight:"100vh",margin:0,width:"100%"}},s.a.createElement(y.Grid,{item:!0,style:{padding:0},xs:12},s.a.createElement(y.Typography,{gutterBottom:!0,variant:"h3"},"Parrot Challenge"),s.a.createElement(y.Card,null,s.a.createElement("form",{onSubmit:a.handleSubmit},s.a.createElement(y.CardContent,null,s.a.createElement(y.Grid,{container:!0,direction:"row",spacing:2},s.a.createElement(y.Grid,{item:!0,xs:12},s.a.createElement(y.Typography,{variant:"h5"},"Iniciar sesión")),s.a.createElement(y.Grid,{item:!0,xs:12},s.a.createElement(y.TextField,{error:a.touched.email&&Boolean(a.errors.email),fullWidth:!0,helperText:a.touched.email&&a.errors.email,id:"email",label:"Email",name:"email",onChange:a.handleChange,value:a.values.email})),s.a.createElement(y.Grid,{item:!0,xs:12},s.a.createElement(y.TextField,{error:a.touched.password&&Boolean(a.errors.password),fullWidth:!0,helperText:a.touched.password&&a.errors.password,id:"password",label:"Password",name:"password",onChange:a.handleChange,type:"password",value:a.values.password})))),s.a.createElement(y.CardActions,null,s.a.createElement(y.Grid,{alignItems:"flex-end",container:!0,direction:"column"},s.a.createElement(y.Grid,{item:!0},s.a.createElement(y.Button,{disabled:a.isSubmitting,size:"small",type:"submit",variant:"contained"},a.isSubmitting?s.a.createElement(y.CircularProgress,{style:{height:20,width:20}}):"Entrar"))))))))},de=s.a.memo(pe),me=r(4),ye=r(17),be=r(18),ve=r.n(be),he=r(19),ge=r.n(he);function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){je(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}"undefined"!=typeof window&&(oe=JSON.parse(null!==(ae=localStorage.getItem("auth"))&&void 0!==ae?ae:"{}"));var we={uuid:null,error:!1,success:!1,token:null===(te=oe)||void 0===te?void 0:te.token,refresh:null===(re=oe)||void 0===re?void 0:re.refresh,expired:(null===(ne=oe)||void 0===ne?void 0:ne.expiresIn)<Date.now()||!1,expiresIn:0,loading:!0},Se=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case"CLEAR_AUTH_STATE":return Ee(Ee({},n),{},{error:!1,success:!1,loading:!1});case"AUTH_ERROR":return Ee(Ee({},n),{},{error:!0,success:!1,loading:!1});case"AUTH_SUCCESS":case"REFRESH_TOKEN":var a=Date.now()+25e3;return localStorage.setItem("auth",JSON.stringify(Ee(Ee({},o.payload),{},{token:null===(e=o.payload)||void 0===e?void 0:e.access,expiresIn:a}))),E.defaults.headers.common.Authorization="Bearer ".concat(null===(t=o.payload)||void 0===t?void 0:t.access),Ee(Ee(Ee({},n),{},{success:!0,error:!1,loading:!1},o.payload),{},{token:null===(r=o.payload)||void 0===r?void 0:r.access,expiresIn:a});case"VALID_TOKEN":return Ee(Ee({},n),{},{success:!0,error:!1,loading:!1},o.payload);case"SIGN_OUT":return localStorage.removeItem("auth"),Ee(Ee({},we),{},{token:null,refresh:null,expired:!1});default:return n}};function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){Pe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ce={stores:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_STORES":return Ae(Ae({},e),{},{stores:t.payload});case"SET_USER":return Ae(Ae({},e),t.payload);case"UPDATE_PRODUCT":return Ae(Ae({},e),{},{stores:e.stores.map((function(e){if(e.uuid===t.payload.store){var r=e.products.map((function(e){return e.uuid===t.payload.uuid?Ae({},t.payload):e}));return Ae(Ae({},e),{},{products:r})}return e}))});case"SIGN_OUT":return{stores:[]};case"USER_ERROR":return Ae(Ae({},e),{},{error:!0});default:return e}},Te=Object(me.combineReducers)({auth:Se,user:ke}),Ie=[ve.a,ge.a],Re=Object(ye.composeWithDevTools)(me.applyMiddleware.apply(void 0,Ie)),_e=Object(me.createStore)(Te,Re);function De(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var qe=new x;function Be(){var e=k(),t=Object(b.useDispatch)(),r=De(Object(l.useState)(!1),2),n=r[0],o=r[1];Object(l.useEffect)((function(){if(e.token&&!e.expired){var t=e.expiresIn-Date.now();setTimeout((function(){o(!0)}),t)}}),[e]);var a=Object(l.useCallback)((function(){t(C),o(!1)}),[]),i=Object(l.useCallback)((function(){var r;t((r=e.refresh,function(e){P.refreshToken(r).then((function(t){e({type:"REFRESH_TOKEN",payload:t})})).catch((function(){e({type:"AUTH_ERROR",payload:!1})}))}))}),[]),c=s.a.createElement(s.a.Fragment,null,s.a.createElement(y.Button,{color:"primary",onClick:i,size:"small"},"Refrescar"),s.a.createElement(y.IconButton,{"aria-label":"close",color:"inherit",onClick:a,size:"small"},s.a.createElement(m.a,{fontSize:"small"})));return s.a.createElement(y.Container,{maxWidth:"sm",style:{minHeight:"100vh"}},s.a.createElement(v.Switch,null,s.a.createElement(v.Route,{exact:!0,path:"/login"},s.a.createElement(de,null)),s.a.createElement(D,{exact:!0,path:"/"},s.a.createElement(ce,null))),s.a.createElement(y.Snackbar,{action:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:5e3,message:"Token caducado",onClose:a,open:n}))}x.token&&_e.dispatch(qe.isValidToken(x.token));var Le=function(){return s.a.createElement(b.Provider,{store:_e},s.a.createElement(Be,null))},Ge=process.env.PORT||3006,Ne=o()();Ne.use(o.a.static("./build")),Ne.get("/*",(function(e,t){var r=p.a.renderToString(s.a.createElement(Le,null)),n=u.a.resolve("./build/server.html");i.a.readFile(n,"utf8",(function(e,n){return e?(console.error("Something went wrong:",e),t.status(500).send("Oops, better luck next time!")):t.send(n.replace('<div id="root"></div>','<div id="root">'.concat(r,"</div>")))}))})),Ne.listen(Ge,(function(){console.log("Server is listening on port ".concat(Ge))}))}]);