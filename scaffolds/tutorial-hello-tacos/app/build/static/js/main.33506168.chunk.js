(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{131:function(e,t){},186:function(e,t,c){},193:function(e,t){},195:function(e,t){},217:function(e,t){},223:function(e,t){},225:function(e,t){},243:function(e,t){},244:function(e,t){},286:function(e,t){},288:function(e,t){},295:function(e,t){},296:function(e,t){},330:function(e,t,c){},331:function(e,t,c){},332:function(e,t,c){},333:function(e,t,c){},334:function(e,t,c){},335:function(e,t,c){"use strict";c.r(t);var n=c(25),r=c.n(n),a=c(174),s=c.n(a),o=(c(186),c(0)),i=c.n(o),j=c(45),l=c(11),u=c(61),b=c(178),d=c(19),O=c(8),f=function(e){var t=e.Tezos,c=e.rpcUrl,r=e.setConnected,a=e.connected,s=Object(n.useState)(void 0),o=Object(l.a)(s,2),u=o[0],f=o[1],x=Object(n.useState)(void 0),v=Object(l.a)(x,2),h=(v[0],v[1]),g=function(){var e={name:"Hello Tacos",preferredNetwork:d.o.ITHACANET};return new b.a(e)},p=function(){var e=Object(j.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u||g(),f(n),!t){e.next=18;break}return e.prev=3,e.next=6,n.requestPermissions({network:{type:d.o.ITHACANET,rpcUrl:c}});case 6:return e.next=8,n.getPKH();case 8:a=e.sent,h(a),t.setWalletProvider(u),r(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),r(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===u||void 0===u?void 0:u.client.destroy();case 2:f(void 0),h(void 0),r(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(j.a)(i.a.mark((function e(){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=25;break}return c=g(),f(c),e.prev=3,e.next=6,c.client.getActiveAccount();case 6:if(!e.sent){e.next=16;break}return e.next=10,c.getPKH();case 10:n=e.sent,h(n),t.setWalletProvider(c),r(!0),e.next=18;break;case 16:h(void 0),r(!1);case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.error(e.t0),h(void 0),r(!1);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})))()}),[]),a?Object(O.jsxs)("button",{className:"wallet",onClick:m,children:[Object(O.jsx)("img",{src:"images/user-check.svg",alt:"user-connected"}),"\xa0 Disconnect"]}):Object(O.jsxs)("button",{className:"wallet",onClick:p,children:[Object(O.jsx)("img",{src:"images/user-x.svg",alt:"user-disconnected"}),"\xa0 Connect wallet"]})},x=function(e){var t=e.Tezos,c=e.rpcUrl,n=e.setConnected,r=e.connected;return Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"header__logo",children:Object(O.jsx)("img",{src:"images/logo.png",alt:"logo"})}),Object(O.jsx)("div",{className:"header__title",children:Object(O.jsx)("h1",{children:"Hello Tacos"})}),Object(O.jsx)("div",{className:"header__connection-status",children:Object(O.jsx)(f,{Tezos:t,rpcUrl:c,setConnected:n,connected:r})})]})},v=function(e){var t=e.contractAddress;return Object(O.jsxs)("footer",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"https://github.com/ecadlabs/taqueria",target:"_blank",rel:"noopener noreferrer nofollow",children:Object(O.jsx)("img",{src:"images/github.svg",alt:"github-link"})})}),Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"https://better-call.dev/ithacanet/".concat(t,"/operations"),target:"_blank",rel:"noopener noreferrer nofollow",children:Object(O.jsx)("img",{src:"images/file-text.svg",alt:"contract-link"})})}),Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"https://twitter.com/ecadlabs",target:"_blank",rel:"noopener noreferrer nofollow",children:Object(O.jsx)("img",{src:"images/twitter.svg",alt:"twitter-link"})})})]})},h=function(e){var t=e.contractStorage,c=e.setContractStorage,r=e.Tezos,a=e.contractAddress,s=e.connected,o=Object(n.useState)(0),u=Object(l.a)(o,2),b=u[0],d=u[1],f=Object(n.useState)(!1),x=Object(l.a)(f,2),v=x[0],h=x[1],g=Object(n.useState)(!1),p=Object(l.a)(g,2),m=p[0],k=p[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),T=S[0],C=S[1],N=function(){var e=Object(j.a)(i.a.mark((function e(){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&b>0&&b<t)||v){e.next=23;break}return e.prev=1,k(!0),e.next=5,r.wallet.at(a);case 5:return n=e.sent,e.next=8,n.methods.default(b).send();case 8:return s=e.sent,e.next=11,s.confirmation();case 11:c(t-b),d(0),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0),h(!1),C(!0);case 20:return e.prev=20,k(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,15,20,23]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"interface",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"amount-of-tacos",children:[Object(O.jsx)("div",{children:"There are"}),Object(O.jsx)("div",{className:"amount-of-tacos__storage",children:t}),Object(O.jsx)("div",{children:"tacos in the Taqueria"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"number",value:b.toString(),onChange:function(e){var c=Math.floor(+e.target.value);d(c),h(!(c<=t))}})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),v?Object(O.jsx)("div",{style:{color:"red"},children:"Error: not enough tacos! Try again"}):T?Object(O.jsx)("div",{style:{color:"red"},children:"An error occured while ordering your tacos"}):Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"order",onClick:N,disabled:!b||v||!s,children:b&&!v?"".concat(m?"Ordering":"Order"," ").concat(b," taco").concat(b>1?"s":""):"No tacos"}),Object(O.jsx)("br",{}),m&&Object(O.jsxs)("div",{className:"ordering-tacos",children:[Object(O.jsx)("img",{src:"images/taco.png",alt:"taco-loading"}),Object(O.jsx)("img",{src:"images/taco.png",alt:"taco-loading"})]})]}):Object(O.jsx)("div",{children:"Loading..."})})};c(330),c(331),c(332),c(333),c(334);var g=function(){var e=Object(n.useState)("https://ithacanet.ecadinfra.com"),t=Object(l.a)(e,2),c=t[0],r=(t[1],Object(n.useState)("KT1KBBk3PXkKmGZn3K6FkktqyPRpEbzJoEPE")),a=Object(l.a)(r,2),s=a[0],o=(a[1],Object(n.useState)(void 0)),b=Object(l.a)(o,2),d=b[0],f=b[1],g=Object(n.useState)(),p=Object(l.a)(g,2),m=p[0],k=p[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),T=S[0],C=S[1];return Object(n.useEffect)((function(){Object(j.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.a(c),k(t),e.next=4,null===t||void 0===t?void 0:t.wallet.at(s);case 4:return n=e.sent,e.next=7,null===n||void 0===n?void 0:n.storage();case 7:r=e.sent,f(r?r.toNumber():void 0);case 9:case"end":return e.stop()}}),e)})))()}),[]),m?Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(x,{Tezos:m,rpcUrl:c,setConnected:C,connected:T}),Object(O.jsx)("div",{}),Object(O.jsx)(h,{contractStorage:d,setContractStorage:f,Tezos:m,contractAddress:s,connected:T}),Object(O.jsx)(v,{contractAddress:s})]}):Object(O.jsx)("div",{})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,338)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),p()}},[[335,1,2]]]);
//# sourceMappingURL=main.33506168.chunk.js.map