(this["webpackJsonpreact-app-template"]=this["webpackJsonpreact-app-template"]||[]).push([[3],{75:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=function(e){var t,a,r;return"string"===typeof(null===e||void 0===e?void 0:e.message)?null===e||void 0===e?void 0:e.message:null!==e&&void 0!==e&&null!==(t=e.message)&&void 0!==t&&t.details[0]?null===e||void 0===e||null===(a=e.message)||void 0===a||null===(r=a.details[0])||void 0===r?void 0:r.message:""}},76:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,s=[],i=!0,c=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==a.return||a.return()}finally{if(c)throw n}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},77:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return o}));var r=a(75),n=function(e){return e?r.b.test(e)?"":"emailInvalid":"emailRequire"},s=function(e){return e?e.length<4?"minPasswordInvalid":"":"passwordRequire"},i=function(e){return{email:n(e.email),password:s(e.password)}},c=function(e){return!e.email&&!e.password},l=function(e){return{email:n(e.email),password:s(e.password),repeatPassword:(c=e.password,c?c.length<4?"minPasswordInvalid":"":"repeatPasswordRequire"),name:(i=e.name,i?"":"nameRequire"),gender:(r=e.gender,r?"genderRequire":""),region:(a=e.region,a?"":"regionRequire"),state:(t=e.state,t?"":"stateRequire")};var t,a,r,i,c},o=function(e){return!e.email&&!e.password&&!e.repeatPassword&&!e.name&&!e.gender&&!e.region&&!e.state}},78:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-420-x-108.2f644c81.png"},79:function(e,t,a){"use strict";var r=a(1),n=a(0),s=a(38),i=a(20);function c(e){var t=function(){var e=n.useContext(s.a);return Object(i.c)(e),e}(),a=t.formatMessage,r=t.textComponent,c=void 0===r?n.Fragment:r,l=e.id,o=e.description,u=e.defaultMessage,d=e.values,m=e.children,b=e.tagName,j=void 0===b?c:b,f=a({id:l,description:o,defaultMessage:u},d,{ignoreTag:e.ignoreTag});return"function"===typeof m?m(Array.isArray(f)?f:[f]):j?n.createElement(j,null,n.Children.toArray(f)):n.createElement(n.Fragment,null,f)}c.displayName="FormattedMessage";var l=n.memo(c,(function(e,t){var a=e.values,n=Object(r.c)(e,["values"]),s=t.values,c=Object(r.c)(t,["values"]);return Object(i.d)(s,a)&&Object(i.d)(n,c)}));l.displayName="MemoizedFormattedMessage";t.a=l},84:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(28),s=a(76),i=a(0),c=a.n(i),l=a(10),o=a(79),u=a(77),d=a(4),m=function(e){var t=e.onLogin,a=e.loading,r=e.errorMessage,n=c.a.useState({email:"",password:"",rememberMe:!1}),m=Object(s.a)(n,2),b=m[0],j=m[1],f=c.a.useState(),p=Object(s.a)(f,2),v=p[0],g=p[1],O=Object(i.useState)(!1),h=Object(s.a)(O,2),x=h[0],y=h[1],w=c.a.useCallback((function(){var e=Object(u.c)(b);g(e),Object(u.a)(e)&&t(b)}),[b,t]);return Object(d.jsxs)("form",{style:{maxWidth:"560px",width:"100%"},noValidate:!0,onSubmit:function(e){e.preventDefault(),w()},className:"row g-3 needs-validation",children:[!!r&&Object(d.jsx)("div",{className:"alert alert-danger",role:"alert",style:{width:"100%"},children:r}),Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("label",{htmlFor:"inputEmail",className:"form-label",children:Object(d.jsx)(o.a,{id:"email"})}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"inputEmail",value:b.email,onChange:function(e){return j(Object(l.a)(Object(l.a)({},b),{},{email:e.target.value}))}}),!(null===v||void 0===v||!v.email)&&Object(d.jsx)("small",{className:"text-danger",children:Object(d.jsx)(o.a,{id:null===v||void 0===v?void 0:v.email})})]}),Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("label",{htmlFor:"inputPassword",className:"form-label",children:Object(d.jsx)(o.a,{id:"password"})}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",value:b.password,onChange:function(e){return j(Object(l.a)(Object(l.a)({},b),{},{password:e.target.value}))}}),!(null===v||void 0===v||!v.password)&&Object(d.jsx)("small",{className:"text-danger",children:Object(d.jsx)(o.a,{id:null===v||void 0===v?void 0:v.password})})]}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"invalidCheck",value:"",checked:b.rememberMe,onChange:function(e){return j(Object(l.a)(Object(l.a)({},b),{},{rememberMe:!!e.target.checked}))},onClick:function(){return y(!x)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck",children:Object(d.jsx)(o.a,{id:"rememberMe"})})]})}),Object(d.jsx)("div",{className:"row justify-content-md-center",style:{margin:"16px 0"},children:Object(d.jsx)("div",{className:"col-md-auto",children:Object(d.jsxs)("button",{className:"btn btn-primary",type:"submit",style:{minWidth:"160px",display:"flex",alignItems:"center",justifyContent:"center"},onClick:function(){localStorage.setItem("key",JSON.stringify(b.email))},disabled:a,children:[a&&Object(d.jsx)("div",{className:"spinner-border spinner-border-sm text-light mr-2",role:"status"}),Object(d.jsx)(o.a,{id:"login"})]})})})]})},b=a(78),j=a(14),f=a(36),p=a(37),v=a(29),g=a(31),O=a(26),h=a.n(O),x=a(15),y=a(23),w=a(9),N=a(75);t.default=function(){var e=Object(j.d)(),t=Object(i.useState)(!1),a=Object(s.a)(t,2),l=a[0],u=a[1],O=Object(i.useState)(""),k=Object(s.a)(O,2),C=k[0],M=k[1],S=c.a.useCallback(function(){var t=Object(n.a)(Object(r.a)().mark((function t(a){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(""),u(!0),t.next=4,e(Object(f.a)(p.a.signIn,"post",{email:a.email,password:a.password}));case 4:if(n=t.sent,u(!1),(null===n||void 0===n?void 0:n.code)!==v.a){t.next=11;break}return e(Object(g.b)(n.data)),h.a.set(x.a,n.data.token,{expires:a.rememberMe?7:void 0}),e(Object(w.d)(y.a.home)),t.abrupt("return");case 11:M(Object(N.a)(n));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(d.jsxs)("div",{className:"container",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(d.jsx)("img",{src:b.a,alt:"",style:{maxWidth:"250px",margin:"32px"}}),Object(d.jsx)(m,{onLogin:S,loading:l,errorMessage:C}),Object(d.jsx)("a",{href:"/sign-up",children:Object(d.jsx)(o.a,{id:"register"})})]})}}}]);