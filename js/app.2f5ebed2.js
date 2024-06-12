(function(){var e={1857:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=1857,e.exports=n},1355:function(e,n,t){"use strict";var r=t(5130),o=t(6768);function i(e,n,t,r,i,a){const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(s)}var a={name:"App",components:{}},s=t(1241);const u=(0,s.A)(a,[["render",i]]);var c=u,l=t(1387);const g={class:"main-content"};function d(e,n,t,r,i,a){const s=(0,o.g2)("Header"),u=(0,o.g2)("router-view"),c=(0,o.g2)("Nav"),l=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(s,{height:this.headerHeight},null,8,["height"]),(0,o.Lk)("div",g,[(0,o.bF)(u)]),(0,o.bF)(c,{height:this.navHeight},null,8,["height"]),(0,o.bF)(l,{height:this.footerHeight},null,8,["height"])])}var h=t(4232);const f=(0,o.Lk)("div",{class:"header-left"},null,-1),p={class:"header-center"},v={class:"title"},m={class:"header-right"},y={class:"language-selection"},b=["value"],k={class:"auth-buttons"};function E(e,n,t,i,a,s){return(0,o.uX)(),(0,o.CE)("header",{class:"site-header",style:(0,h.Tr)({height:t.height})},[f,(0,o.Lk)("div",p,[(0,o.Lk)("div",v,(0,h.v_)(a.title),1)]),(0,o.Lk)("div",m,[(0,o.Lk)("div",y,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.selectedLanguage=e)},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.languages,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e,value:e},(0,h.v_)(e),9,b)))),128))],512),[[r.u1,a.selectedLanguage]]),(0,o.Lk)("div",k,[a.isLoggedIn?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:n[1]||(n[1]=(...e)=>s.login&&s.login(...e))},"로그인")),a.isLoggedIn?((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:n[2]||(n[2]=(...e)=>s.logout&&s.logout(...e))},"로그아웃")):(0,o.Q3)("",!0)])])])],4)}var L={name:"HeaderComponent",data(){return{title:"헤더",isLoggedIn:!1,selectedLanguage:"언어 선택",languages:["언어 선택","English","Spanish","French"]}},props:{height:{type:String,required:!0}},methods:{login(){this.isLoggedIn=!0},logout(){this.isLoggedIn=!1}}};const _=(0,s.A)(L,[["render",E]]);var C=_;const A=(0,o.Lk)("div",{class:"footer-content"},[(0,o.Lk)("div",{class:"footer-left"},[(0,o.Lk)("p",null,"© 2024 MyWebsite. All rights reserved."),(0,o.Lk)("a",{href:"/privacy-policy"},"Privacy Policy")])],-1),O=[A];function w(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)("footer",{class:"site-footer",style:(0,h.Tr)({height:t.height})},O,4)}var S={name:"FooterComponent",props:{height:{type:String,required:!0}}};const N=(0,s.A)(S,[["render",w]]);var F=N;const j={class:"nav-left"},I={class:"nav-center"},T={class:"nav-right"};function D(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)("nav",{class:"nav-bar",style:(0,h.Tr)({height:t.height})},[(0,o.Lk)("div",j,[(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>a.goToGoogle&&a.goToGoogle(...e))},"구글홈")]),(0,o.Lk)("div",I,[(0,o.Lk)("button",{onClick:n[1]||(n[1]=(...e)=>a.makeSuggestion&&a.makeSuggestion(...e)),class:"suggestion-button"},"제안")]),(0,o.Lk)("div",T,[(0,o.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>a.amiAction&&a.amiAction(...e))},"AMI")])],4)}var U={name:"NavComponent",props:{height:{type:String,required:!0}},methods:{goToGoogle(){window.location.href="https://www.google.com"},makeSuggestion(){alert("Make a suggestion!")},amiAction(){alert("AMI action!")}}};const V=(0,s.A)(U,[["render",D]]);var x=V,B={name:"DefaultLayout",components:{Nav:x,Header:C,Footer:F},data(){const e="80px",n="200px",t="40px";return{headerHeight:e,navHeight:n,footerHeight:t}},methods:{}};const H=(0,s.A)(B,[["render",d]]);var M=H;const P=e=>[{path:"/",name:"home",component:e,children:[{path:"",name:"main",component:()=>t.e(330).then(t.bind(t,6330)),props:!0}]}],X=[...P(M)],R=(0,l.aE)({history:(0,l.LA)("/energyserver_g/"),routes:X});var W=R;t(4114);const q=()=>{const e={};return{add(n){e[n]||(e[n]=[]);const t=new AbortController;return e[n].push(t),t.signal},clear(n){e[n]&&(e[n].forEach((e=>e.abort())),delete e[n])},addCtrl(n){e[n]||(e[n]=[]);const t=new AbortController;return e[n].push(t),{signal:t.signal,controller:t}},clearCtrl(n,t){e[n]&&(e[n]=e[n].filter((e=>e!==t)),0===e[n].length&&delete e[n])},clearAll(){Object.keys(e).forEach((e=>{this.clear(e)}))}}};var Q=q,G=t(6400),K=t(9218),$="/";const J=t(1982),z=t(8497);z.config({path:J.resolve($,".env.firebase")});const Y=()=>{const e={apiKey:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.apiKey,authDomain:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.authDomain,projectId:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.projectId,storageBucket:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.storageBucket,messagingSenderId:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.messagingSenderId,appId:{NODE_ENV:"production",BASE_URL:"/energyserver_g/"}.appId},n=(0,G.Wp)(e),t=(0,K.Uz)(n);return{async callFunctionWithVariable(e,n){const r=(0,K.Qg)(t,"functionWithVariable");try{const t=await r(e,{signal:n});return`\n          <h2>통신 결과</h2>\n          <pre>${JSON.stringify(t.data,null,2)}</pre>\n        `}catch(o){return console.error("Error calling functionWithVariable:",o),"통신 오류: "+o.message}},async callSimpleFunction(){const e=(0,K.Qg)(t,"simpleFunction");try{const n=await e();return`\n          <h2>통신 결과</h2>\n          <pre>${JSON.stringify(n.data,null,2)}</pre>\n        `}catch(n){return console.error("Error calling simpleFunction:",n),"통신 오류: "+n.message}}}};var Z=Y;const ee={ctrller:{...Q()},firebase:{...Z()}};var ne=ee;const te=(0,r.Ef)(c);te.config.globalProperties.$netMngr=ne,te.use(W),te.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".1eea38b4.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="energyserver_g:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var g=c[l];if(g.getAttribute("src")==r||g.getAttribute("data-webpack")==n+i){s=g;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/energyserver_g/"}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(n&&n(r);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkenergyserver_g"]=self["webpackChunkenergyserver_g"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1355)}));r=t.O(r)})();
//# sourceMappingURL=app.2f5ebed2.js.map