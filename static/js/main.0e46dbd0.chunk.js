(this["webpackJsonpleon-portfolio"]=this["webpackJsonpleon-portfolio"]||[]).push([[0],{16:function(e,a,t){"use strict";function n(e){var a=e.element,t=e.animation,n=e.timeUnit,c=void 0===n?"ms":n,r=e.duration,o=void 0===r?{init:0,increase:0,decrease:0}:r,l=e.timingFunction,i=e.delay,s=e.iterationCount,u=e.direction,m=e.fillMode,_=null===o||void 0===o?void 0:o.init;document.querySelectorAll(a).forEach((function(e){(null===o||void 0===o?void 0:o.increase)&&(_+=o.increase),(null===o||void 0===o?void 0:o.decrease)&&(_+=o.decrease);var a="".concat(t," ").concat(_).concat(c);l&&(a+=" ".concat(l)),void 0!==i&&(a+=" ".concat(i).concat(c)),s&&(a+=" ".concat(s)),u&&(a+=" ".concat(u)),m&&(a+=" ".concat(m)),e.style.animation=a}))}t.d(a,"a",(function(){return n}))},17:function(e,a,t){"use strict";var n=t(21),c=t(11),r=t(0),o=t.n(r),l=(t(42),function(e){var a=e.children,t=e.className,l=e.component,i=Object(c.a)(e,["children","className","component"]),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){t&&t.split(" ").forEach((function(e){s.current.classList.add(e)}))}),[]),o.a.createElement("".concat(l),Object(n.a)({ref:s,className:"button"},i),o.a.createElement("span",null," ",a," "))});l.defaultProps={className:"",component:"button",href:"#"},a.a=l},20:function(e,a,t){"use strict";var n=t(11),c=t(0),r=t.n(c),o=(t(61),function(e){var a=e.className,t=e.progress,o=Object(n.a)(e,["className","progress"]),l=Object(c.useRef)(null);return Object(c.useEffect)((function(){l.current.style.width="".concat(t,"%")}),[]),r.a.createElement("div",Object.assign({},o,{className:"progress".concat(a?" ".concat(a):"")}),r.a.createElement("div",{ref:l,className:"progress__running"}))});o.defaultProps={className:"",progress:0},a.a=o},33:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),o=t.n(r),l=(t(38),t(6)),i=t(32),s=(t(39),t(40),t(1)),u=(t(41),t(17));var m=function(){return c.a.createElement("div",{className:"error-404"},c.a.createElement("h1",{className:"error-404__title"},"404 Not Found"),c.a.createElement("div",{className:"error-404__prev"},c.a.createElement(l.b,{to:"/"},c.a.createElement(u.a,null,"Back to home"))))},_=function(){return c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,render:function(){return c.a.createElement(s.a,{to:"/curriculum-vitae"})}}),c.a.createElement(s.b,{path:"/curriculum-vitae",component:Object(n.lazy)((function(){return t.e(6).then(t.bind(null,78))})),exact:!0}),c.a.createElement(s.b,{path:"/curriculum-vitae/about",component:Object(n.lazy)((function(){return t.e(4).then(t.bind(null,81))}))}),c.a.createElement(s.b,{path:"/curriculum-vitae/skills",component:Object(n.lazy)((function(){return t.e(3).then(t.bind(null,80))}))}),c.a.createElement(s.b,{path:"/curriculum-vitae/project",component:Object(n.lazy)((function(){return t.e(5).then(t.bind(null,82))}))}),c.a.createElement(s.b,{path:"/curriculum-vitae/contact",component:Object(n.lazy)((function(){return t.e(7).then(t.bind(null,79))}))}),c.a.createElement(s.b,{path:"*",component:m}))},d=t(7),f=t(23),b=t(24),v=t(25),E=t(26),p=t(27),g=t(28),h=t(29),N=t(30),k=t(31),w=(t(58),function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar__logo"},"DDT"),c.a.createElement("div",{className:"navbar__route"},c.a.createElement(l.b,{className:"navbar__route__link",to:"/curriculum-vitae/"},c.a.createElement(d.Icon,{className:"navbar__route__link__icon",size:30,icon:f.ic_home})),c.a.createElement(l.b,{className:"navbar__route__link",to:"/curriculum-vitae/about"},c.a.createElement(d.Icon,{className:"navbar__route__link__icon",size:30,icon:b.ic_person_outline})),c.a.createElement(l.b,{className:"navbar__route__link",to:"/curriculum-vitae/skills"},c.a.createElement(d.Icon,{className:"navbar__route__link__icon",size:30,icon:v.ic_settings})),c.a.createElement(l.b,{className:"navbar__route__link",to:"/curriculum-vitae/project"},c.a.createElement(d.Icon,{className:"navbar__route__link__icon",size:30,icon:E.ic_remove_red_eye})),c.a.createElement(l.b,{className:"navbar__route__link",to:"/curriculum-vitae/contact"},c.a.createElement(d.Icon,{className:"navbar__route__link__icon",size:30,icon:p.ic_mail}))),c.a.createElement("div",{className:"navbar__network"},c.a.createElement("a",{target:"__blank",href:"https://www.facebook.com/trong.duong.77398",className:"navbar__network__brand"},c.a.createElement(d.Icon,{size:28,icon:g.socialFacebookCircular})),c.a.createElement("a",{target:"__blank",href:"https://github.com/duongductrong",className:"navbar__network__brand"},c.a.createElement(d.Icon,{size:28,icon:k.socialGithub})),c.a.createElement("a",{target:"__blank",href:"https://www.instagram.com/_duongductrong/",className:"navbar__network__brand"},c.a.createElement(d.Icon,{size:28,icon:h.socialInstagramCircular})),c.a.createElement("a",{target:"__blank",href:"https://www.linkedin.com/in/duongductrong/",className:"navbar__network__brand"},c.a.createElement(d.Icon,{size:28,icon:N.socialLinkedin}))))}),j=t(11),O=(t(59),function(e){var a=e.left,t=e.children,r=e.className,o=Object(j.a)(e,["left","children","className"]),l=Object(n.useRef)(null);return Object(n.useEffect)((function(){r&&r.split(" ").forEach((function(e){l.current.classList.add(e)}))}),[]),c.a.createElement("div",Object.assign({},o,{ref:l,className:"layout-general"}),c.a.createElement("div",{className:"layout-general__left"}," ",a," "),c.a.createElement("div",{className:"layout-general__main"}," ",t," "))});O.defaultProps={left:c.a.createElement("div",null),children:c.a.createElement("div",null),className:""};var y=O,z=(t(60),t(20)),I=t(16),x=function(e){Object.assign({},e);return Object(n.useEffect)((function(){[{element:"#logo",animation:"fromTop",duration:{init:200},timeUnit:"ms"},{element:"#subtext",animation:"fromBottom",duration:{init:500},timeUnit:"ms"},{element:"#loading",animation:"fromBottom",duration:{init:400}}].forEach((function(e){Object(I.a)({element:e.element,animation:e.animation,duration:e.duration,timeUnit:"ms"})}))}),[]),c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"loading__box"},c.a.createElement("h1",{id:"logo",className:"loading__logo"},c.a.createElement("span",null,"DDT")),c.a.createElement("small",{id:"subtext"},"Try it now, oop!! waiting for me"),c.a.createElement(z.a,{id:"loading",className:"loading__progress-bar",progress:100})))};x.defaultProps={};var B=x;var D=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(y,{left:c.a.createElement(w,null)},c.a.createElement(n.Suspense,{fallback:c.a.createElement(B,null)},c.a.createElement(_,null))),c.a.createElement(i.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.0e46dbd0.chunk.js.map