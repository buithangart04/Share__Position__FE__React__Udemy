(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{51:function(e,t,c){"use strict";c(0),c(54);var n=c(1);t.a=function(e){return Object(n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},54:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(49),s=c.n(n),a=c(50),r=c(11),i=c(0),l=c.n(i),u=c(9),j=(c(64),c(1)),o=function(e){return Object(j.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(j.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},d=c(51),m=(c(65),function(e){return Object(j.jsx)("li",{className:"user-item",children:Object(j.jsx)(d.a,{className:"user-item__content",children:Object(j.jsxs)(u.b,{to:"/".concat(e.id,"/places"),children:[Object(j.jsx)("div",{className:"user-item__image",children:Object(j.jsx)(o,{image:"".concat("https://acad-mern-pj.herokuapp.com","/").concat(e.image),alt:e.name})}),Object(j.jsxs)("div",{className:"user-item__info",children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})}),h=(c(66),function(e){return 0===e.items.length?Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("h2",{children:"No users found."})}):Object(j.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(j.jsx)(m,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)}))})}),b=c(52),p=c(16),O=c(53);t.default=function(){var e=Object(O.a)(),t=e.isLoading,c=e.error,n=e.sendRequest,u=e.clearError,o=Object(i.useState)(),d=Object(r.a)(o,2),m=d[0],f=d[1];return Object(i.useEffect)((function(){(function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://acad-mern-pj.herokuapp.com/api/users/");case 3:t=e.sent,f(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(j.jsxs)(l.a.Fragment,{children:[Object(j.jsx)(b.a,{error:c,onClear:u}),t&&Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(p.a,{asOverlay:!0})}),!t&&m&&Object(j.jsx)(h,{items:m})]})}}}]);
//# sourceMappingURL=7.d3214f4c.chunk.js.map