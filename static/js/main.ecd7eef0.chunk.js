(this["webpackJsonpfinance-front"]=this["webpackJsonpfinance-front"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cifrao.1a271b19.svg"},30:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/refresh.9fb1e188.svg"},37:function(e,t,a){e.exports=a.p+"static/media/not-found.7baba31c.svg"},38:function(e,t,a){e.exports=a.p+"static/media/cash-payment-bag-1.71e76e56.svg"},43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(48),a(9)),l=a(2),i=a(3),u=Object(n.createContext)({token:null,url:"https://finance.josafat.duckdns.org",setToken:function(){}}),m=a(20),p=a.n(m),d={};try{if(!window.localStorage)throw Error("no local storage");d.set=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},d.get=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return null}},d.remove=function(e){return localStorage.removeItem(e)}}catch(de){d.set=p.a.set,d.get=p.a.getJSON,d.remove=p.a.remove}var f=d;var g=function(e){var t=e.children,a=function(e){var t=Object(n.useState)((function(){return f.get(e)})),a=Object(i.a)(t,2),r=a[0],c=a[1];return[r,Object(n.useCallback)((function(t){f.set(e,t),c(t)}),[e]),Object(n.useCallback)((function(){f.remove(e),c(void 0)}),[e])]}("token"),c=Object(i.a)(a,2),o=c[0],s=c[1];return r.a.createElement(u.Provider,{value:{token:o,setToken:s}},t)},h=a(19),v=function(e){var t=e.component,a=Object(h.a)(e,["component"]),c=Object(n.useContext)(u).token;return r.a.createElement(l.b,Object.assign({},a,{render:function(){return c?r.a.createElement(t,a):r.a.createElement(l.a,{to:"/login"})}}))},E=a(1),b=a.n(E),O=a(5),j=a(10),N=a(6),k=a(32),w=a.n(k),y=a(33),x=a.n(y),S={prefix:"",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:7,allowNegative:!1,allowLeadingZeroes:!1},C=function(e){var t=e.maskOptions,a=Object(h.a)(e,["maskOptions"]),n=x()(Object(N.a)({},S,{},t));return r.a.createElement(w.a,Object.assign({mask:n},a))},T=a(34),F=a.n(T),L=function(e){var t=e.type,a=e.color,n=["balls","bars","bubbles","cubes","cylon","spin","spinningBubbles","spokes"],c=null!==t&&void 0!==t?t:n[Math.floor(Math.random()*n.length)];return r.a.createElement(F.a,{type:c,color:null!==a&&void 0!==a?a:"#6EF9F5"})},M=a(35),R=a.n(M),A=(a(63),a(13)),D=(a(29),{url:"http://localhost:8080",baseUrl:"https://finance.josafat.duckdns.org"});a(64);function P(){return{name:"",description:"",date:new Date,moneyValue:"",categoryId:"",messageWrong:"",isLoading:!1}}var U=function(){var e=Object(n.useContext)(u).token,t=Object(n.useState)(P),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(l.g)(),m=Object(n.useContext)(u).setToken;function p(e){return e=e.replace(",","."),e=parseFloat(e)}function d(e){var t=e.target,a=t.value,n=t.name;o(Object(N.a)({},c,Object(j.a)({},n,a)))}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(b.a.mark((function t(a){var n,r,c,o,l,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.name,r=a.description,c=a.moneyValue,o=a.date,l=p(c),t.next=4,fetch("".concat(D.baseUrl,"/v1/Spends"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({name:n,description:r,value:l,date:o})});case 4:if(401===(i=t.sent).status&&(m({token:"",isLoading:!1}),s.push("/login")),i.ok){t.next=8;break}return t.abrupt("return",!1);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o({isLoading:!0}),e.next=4,f(c);case 4:if(e.sent){e.next=7;break}return o({errorMessage:"Fail to add Spend",isLoading:!1}),e.abrupt("return");case 7:E("Saved!"),o(P),o({isLoading:!1});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){A.b.success("\ud83e\udd84 ".concat(e),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}return r.a.createElement("div",{className:"addSpends"},r.a.createElement("header",null,r.a.createElement("span",null,"New spend"),r.a.createElement(A.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})),r.a.createElement("main",null,r.a.createElement("form",{className:"addSpend",autoComplete:"nope",onSubmit:h},r.a.createElement("div",{className:"form-group"},r.a.createElement(R.a,{onDayChange:function(e){var t=Date.parse(e);o(t?Object(N.a)({},c,{date:e,messageWrong:""}):Object(N.a)({},c,{date:e,messageWrong:"Invalid Date"}))},name:"date",id:"date",value:c.date})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"texx",name:"name",id:"name",placeholder:"Name",onChange:d,value:c.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"description",id:"description",placeholder:"Description",onChange:d,value:c.description})),r.a.createElement("div",{className:"form-group"},r.a.createElement(C,{placeholder:"R$ 0.00",type:"text",onChange:d,name:"moneyValue",id:"moneyValue",value:c.moneyValue})),r.a.createElement("span",{className:"ErrorMesssage"},c.messageWrong),r.a.createElement("footer",{className:"footer"},c.isLoading?r.a.createElement(L,null):r.a.createElement("button",{className:"btn-inside",type:"submit",id:"submit",onSubmit:h},"Send")))))},B=a(36),V=a.n(B),W=(a(65),function(){return r.a.createElement("div",{className:"refresh"},r.a.createElement("img",{src:V.a,alt:"Refresh"}))}),I=a(37),J=a.n(I),H=(a(66),function(){return r.a.createElement("div",{className:"notfoundCard"},r.a.createElement("img",{className:"notFoundImage",src:J.a,alt:"NotFound"}),"Spends")}),$=a(38),z=a.n($),G=(a(67),function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,1)[0];return r.a.createElement("div",{className:"weekdata"},r.a.createElement("div",{className:"spendImg"},r.a.createElement("img",{src:z.a,alt:"cifr\xe3o"})),r.a.createElement("div",{className:"spend"},r.a.createElement("div",{className:"titleSpend"},"Week: ",a.weekNumber),r.a.createElement("div",{className:"value"},a.total)))});a(68);function q(){return{weeks:[],monthTotal:0,messageWrong:"",loading:!0,refresh:!0}}var Y=function(){var e=Object(n.useContext)(u).token,t=Object(n.useState)(q),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useContext)(u).setToken,m=Object(l.g)();function p(){return d.apply(this,arguments)}function d(){return(d=Object(O.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(D.baseUrl,"/v1/Spends/weeksummary"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 2:if(401===(a=t.sent).status&&(s({token:""}),m.push("/login")),a.ok){t.next=8;break}return o(Object(N.a)({},c,{messageWrong:a.text,loading:!0})),f("falha ao buscar os dados"),t.abrupt("return");case 8:return t.next=10,a.json();case 10:n=t.sent,o(Object(N.a)({},c,{weeks:n.summary,monthTotal:n.monthTotal,loading:!1}));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(e){A.b.success("\ud83e\ude79 ".concat(e),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c.refresh]),r.a.createElement("div",{className:"weekPanel"},r.a.createElement("header",null,r.a.createElement("span",{className:"title"},"Month spends"),r.a.createElement("span",{onClick:function(){o({loading:!0,refresh:!c.refresh})}},r.a.createElement(W,null)),r.a.createElement(A.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})),r.a.createElement("main",{className:"container"},c.loading?r.a.createElement(L,{color:"#6EF9F5"}):c.monthTotal>0?c.weeks.map((function(e){return r.a.createElement(G,{total:e.total,weekNumber:e.weekNumber,key:e.weekNumber})})):r.a.createElement(H,null)))},Z=(a(69),function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,1)[0];return r.a.createElement("div",{className:"spend-content"},r.a.createElement("header",null,r.a.createElement("span",{className:"spendTitle"},a.name,": "),r.a.createElement("span",{className:"dateSpend"},new Date(a.date).toLocaleDateString())),r.a.createElement("span",null,"R$: ",a.value))});a(70);function K(){return{spends:[],totalValue:0,loading:!0,searchDate:new Date}}var Q=function(){var e=Object(n.useState)(K),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(u).token,s=Object(l.g)();function m(){return p.apply(this,arguments)}function p(){return(p=Object(O.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D.baseUrl,"/v1/Spends/month?month=").concat(a.searchDate.getMonth()+1,"&year=").concat(a.searchDate.getFullYear()),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(o)}});case 2:if(401===(t=e.sent).status&&(Object(n.setToken)({token:""}),s.push("/login")),t.ok){e.next=7;break}return c({messageWrong:t.text,loading:!0}),e.abrupt("return");case 7:return e.next=9,t.json();case 9:(r=e.sent).lenght>0&&c({spends:d(r),totalValue:r.map((function(e){return e.value})).reduce((function(e,t){return e+t})),loading:!1}),c({loading:!1});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return e.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}))}return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"month-content"},r.a.createElement("header",null,"Month Summary"),r.a.createElement("main",{className:"main-content"},r.a.createElement("div",{className:"principal"},a.loading?r.a.createElement(L,{color:"#6EF9F5"}):a.totalValue>0?a.spends.map((function(e){return r.a.createElement(Z,{name:e.name,value:e.value,date:e.date,description:e.description,key:e.id.timestamp})})):r.a.createElement(H,null))),r.a.createElement("footer",null,a.totalValue>0?"Total:  ".concat(a.totalValue.toFixed(2)):""))},X=(a(71),function(){var e=Object(n.useContext)(u).setToken,t=Object(l.g)();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"pages-home"},r.a.createElement("div",{className:"home-container"},r.a.createElement("header",{className:"header-home"},"Olha  que cabe\xe7alho bunito",r.a.createElement("div",{className:"logout"},r.a.createElement("span",{htmlFor:""},"Sair do Bufunfas $$ "),r.a.createElement("button",{type:"button",onClick:function(){e({token:""}),t.push("/login")}},"Sair"))),r.a.createElement("div",{className:"hero"},r.a.createElement("span",null,"Chegou na Home em danado ? ")),r.a.createElement("main",{className:"main-content"},r.a.createElement("article",{className:"newEntry"},r.a.createElement(U,null)),r.a.createElement("article",{className:"summary"},r.a.createElement(Y,null)),r.a.createElement("article",{className:"summary"},r.a.createElement(Q,null))))))}),_=a(39),ee=a(40),te=a(41),ae=a(42),ne=(a(72),a(18)),re=a.n(ne);a(30);function ce(){return{user:"",password:"",errorMessage:"",loading:!1}}var oe=function(){var e=Object(n.useState)(ce),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(u).setToken,s=Object(l.g)();function m(e){var t=e.target,n=t.value,r=t.name;c(Object(N.a)({},a,Object(j.a)({},r,n)))}function p(){return r.a.createElement("article",{className:"errorMessage"},r.a.createElement("label",null,a.errorMessage))}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(O.a)(b.a.mark((function e(t){var a,n,r,l,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,n=t.password,e.next=3,fetch("".concat(D.baseUrl,"/v1/User/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({Email:a,Password:n})});case 3:return(r=e.sent).ok||(c(ce),c({errorMessage:"Login Fail",loading:!1})),e.next=7,r.json();case 7:l=e.sent,(i=l.token)&&(o(i),c({loading:!1}),s.push("/"));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({loading:!0}),t.preventDefault(),d(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"base-container"},r.a.createElement("header",null,r.a.createElement("div",{className:"header"},"Login")),r.a.createElement("form",{autoComplete:"nope",onSubmit:g},r.a.createElement("div",{className:"content"},":",r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:re.a,alt:"cifr\xe3o"})),r.a.createElement(p,null),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"}," Username"),r.a.createElement("input",{type:"text",name:"user",id:"user",placeholder:"Username",onChange:m,value:a.user})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"}," Password "),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",onChange:m,value:a.password}))),a.loading?r.a.createElement(L,{color:"#6EF9F5"}):r.a.createElement("footer",{className:"footer"},r.a.createElement("button",{className:"btn",type:"submit",onSubmit:g,disabled:a.loading},"Login")))))};function se(){return{user:"",password:"",email:"",errorMessage:"",loading:!1}}var le=function(){var e=Object(n.useState)(se),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(u).setToken,s=Object(l.g)();function m(e){var t=e.target,n=t.value,r=t.name;c(Object(N.a)({},a,Object(j.a)({},r,n)))}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(O.a)(b.a.mark((function e(t){var a,n,r,l,i,u,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,n=t.password,r=t.email,e.next=3,fetch("".concat(D.baseUrl,"/v1/User/signUp"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({Email:r,Password:n,UserName:a})});case 3:return 409===(l=e.sent).status&&c({errorMessage:"Email already Exists",loading:!1}),l.ok||(c(se),c({errorMessage:"Register Fail",loading:!1})),e.next=8,l.json();case 8:return i=e.sent,(u=i.token)&&(o(u),c({loading:!1}),s.push("/")),e.next=13,l.json();case 13:return m=e.sent,e.abrupt("return",m);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p(a);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return r.a.createElement("article",{className:"errorMessage"},r.a.createElement("label",null,a.errorMessage))}return r.a.createElement("div",{className:"base-container"},r.a.createElement("header",{className:"header"},"Register"),r.a.createElement("form",{autoComplete:"nope",onSubmit:f},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:re.a,alt:"cifr\xe3o"})),r.a.createElement(h,null),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"}," Username"),r.a.createElement("input",{type:"text",name:"user",id:"user",placeholder:"Username",onChange:m,value:a.user})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"}," Email"),r.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Email",onChange:m,value:a.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"}," Password "),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",onChange:m,value:a.password})))),a.loading?r.a.createElement(L,{color:"#6EF9F5"}):r.a.createElement("footer",{className:"footer"},r.a.createElement("button",{className:"btn",type:"submit",onSubmit:f},"Register"))))},ie=function(e){Object(ae.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={isLogginActive:!0},n}return Object(ee.a)(a,[{key:"changeState",value:function(){this.state.isLogginActive?(this.RightSide.classList.remove("right"),this.RightSide.classList.add("left")):(this.RightSide.classList.remove("left"),this.RightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Register":"Login",n=t?"Login":"Register";return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&r.a.createElement(oe,{containerRef:function(t){return e.current=t}}),!t&&r.a.createElement(le,{containerRef:function(t){return e.current=t}})),r.a.createElement(ue,{current:a,currentActive:n,containerRef:function(t){return e.RightSide=t},onClick:this.changeState.bind(this)})))}}]),a}(r.a.Component),ue=function(e){return r.a.createElement("div",{className:"right-side right",ref:e.containerRef,onClick:e.onClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"text"},e.current)))},me=ie,pe=function(){return r.a.createElement(s.a,null,r.a.createElement(g,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/login",component:me}),r.a.createElement(v,{path:"/",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.ecd7eef0.chunk.js.map