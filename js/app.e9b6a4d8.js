(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={3:0},r={3:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{1:"36d7dca2",2:"8d7f2132",4:"3f715a8f",5:"6d522b22",6:"ae0d4f4f",7:"f9e8decb",8:"783f756c",9:"b30b7c7d",10:"5a606dcb",11:"ce052420",12:"0f3296e1",13:"f18ebfc8",14:"4370c2b8",15:"16707b08",16:"e705165c",17:"da6666c4",18:"7f4a1a0e",19:"b9378bab",20:"e40dbdfe"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={1:1,2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{1:"e65a07fd",2:"0450335a",4:"51e52e3a",5:"7bc8a48e",6:"721571c7",7:"4fd97e80",8:"63207212",9:"0b4b73f7",10:"8bd834ff",11:"e36e067c",12:"6e8096d3",13:"88d64419",14:"e7737995",15:"b8deb549",16:"a789b786",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"user",(function(){return P}));var o={};n.r(o),n.d(o,"login",(function(){return B})),n.d(o,"logout",(function(){return A})),n.d(o,"getInfo",(function(){return j})),n.d(o,"extend",(function(){return x})),n.d(o,"updateCart",(function(){return C}));var r={};n.r(r),n.d(r,"login",(function(){return z})),n.d(r,"logout",(function(){return D})),n.d(r,"getInfo",(function(){return H})),n.d(r,"addCart",(function(){return U}));n("5319"),n("35fc"),n("9f29"),n("573e"),n("43b9"),n("b623"),n("81a9"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var i=n("2b0e"),l=n("1f91"),s=n("42d2"),c=n("b05d"),u=n("436b"),d=n("9c64"),m=n("2a19"),p=n("f508");i["a"].use(c["a"],{config:{screen:{},notify:{},loading:{}},lang:l["a"],iconSet:s["a"],plugins:{Dialog:u["a"],Meta:d["a"],Notify:m["a"],Loading:p["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},h=[],g={async created(){this.$store.dispatch("user/getInfo")}},b=g,v=n("2877"),w=Object(v["a"])(b,f,h,!1,null,null,null),y=w.exports,k=n("2f62"),O=function(){return{token:"",account:"",role:"",email:"",cart:0}};const P=e=>({isLogin:e.token.length>0,isAdmin:1===e.role,...e}),B=(e,t)=>{e.token=t.token,e.account=t.account,e.role=t.role,e.email=t.email,e.cart=t.cart},A=(e,t)=>{e.token="",e.account="",e.role=0,e.email="",e.cart=0},j=(e,t)=>{e.account=t.account,e.role=t.role,e.email=t.email,e.cart=t.cart},x=(e,t)=>{e.token=t},C=(e,t)=>{e.cart=t};var E=n("bc3a"),L=n.n(E),_=n("130e"),S=n("8c4f");n("ddb0");const T=[{path:"/",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"2f9a")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"bc13")),meta:{title:"OwnBake"}},{path:"Home",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"bc13")),meta:{title:"OwnBake | 首頁"}},{path:"AboutUs",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"4733")),meta:{title:"OwnBake | 關於我們"}},{path:"Products",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"6eb0")),meta:{title:"OwnBake | 商品主頁"}},{path:"ProductInfo/:id",component:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"7235")),meta:{title:"OwnBake | 商品介紹"}},{path:"Reservation",component:()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"7f1f")),meta:{login:!0,title:"OwnBake | 預約體驗"}},{path:"ContactUs",component:()=>n.e(19).then(n.bind(null,"7854")),meta:{title:"OwnBake | 聯絡我們"}},{path:"Login",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"013f")),meta:{title:"OwnBake | 會員登入"}},{path:"Register",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"56b4")),meta:{title:"OwnBake | 會員註冊"}},{path:"Register",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"56b4")),meta:{title:"OwnBake | 會員註冊"}},{path:"Cart",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"f68e")),meta:{login:!0,title:"OwnBake | 購物車"}},{path:"Member",component:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"70d8")),meta:{login:!0,title:"OwnBake | 基本資料"},children:[{path:"MyOrders",component:()=>Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"fde2")),meta:{login:!0,title:"OwnBake | 我的訂單"}},{path:"MyReservations",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"ad40")),meta:{login:!0,title:"OwnBake | 我的預約"}}]}]},{path:"/Admin",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"f6b42")),meta:{login:!0,admin:!0,title:"OwnBake | 管理者介面"},children:[{path:"",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"34ab")),meta:{login:!0,admin:!0,title:"OwnBake | 管理者主頁"},children:[{path:"AdminProducts",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"da5e")),meta:{login:!0,admin:!0,title:"OwnBake | 商品管理"}},{path:"AdminOrders",component:()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"8af9")),meta:{login:!0,admin:!0,title:"OwnBake | 訂單管理"}},{path:"AdminReservations",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"7a4a")),meta:{login:!0,admin:!0,title:"OwnBake | 預約管理"}}]}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"e51e"))}];var I=T,M=({app:e,router:t,store:n,vue:a})=>{t.beforeEach(((e,t,a)=>{const o=n.getters["user/user"];e.meta.login&&!o.isLogin?a("/Login"):e.meta.admin&&!o.isAdmin&&o._id?a("/Home"):a()}))},N=({app:e,router:t,store:n,vue:a})=>{t.afterEach(((e,t)=>{document.title=e.meta.title}))};i["a"].use(S["a"]);var R=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:I,routeAuth:M,metaTitle:N,mode:"hash",base:""});const q=L.a.create({baseURL:"https://ownbake.herokuapp.com/"});q.interceptors.response.use((e=>e),(e=>{if(e.response){if(401===e.response.status&&"/users/extend"!==e.config.url){const t=e.config;return q.post("/users/extend",{},{headers:{authorization:"Bearer "+J.state.user.token}}).then((({data:e})=>(J.commit("user/extend",e.result.token),t.headers.authorization="Bearer "+J.state.user.token,L()(t)))).catch((e=>(J.commit("user/logout"),R.push("/Login"),Promise.reject(e))))}}else"ECONNABORTED"===e.code&&e.message.includes("timeout")?u["a"].create({parent:void 0,title:"失敗",message:"請求逾時"}):u["a"].create({parent:void 0,title:"錯誤",message:"網路連線不穩定"});return Promise.reject(e)})),console.log("https://ownbake.herokuapp.com/"),i["a"].use(_["a"],{axios:L.a,api:q}),i["a"].prototype.$axios=L.a;const z=async({commit:e},t)=>{try{const{data:n}=await q.post("/users/login",t);e("login",n.result),console.log(n.result),1===n.result.role?R.push("/Admin"):R.push("/"),u["a"].create({parent:void 0,title:"登入成功",message:""})}catch(n){console.log(n),u["a"].create({parent:void 0,title:"登入失敗",message:n.response.data.message})}},D=async({commit:e,state:t})=>{try{await q.delete("/users/logout",{headers:{authorization:"Bearer "+t.token}}),e("logout"),R.push("/Home"),u["a"].create({parent:void 0,title:"登出成功",message:""})}catch(n){console.log(n),u["a"].create({parent:void 0,title:"登出失敗",message:n.response.data.message})}},H=async({commit:e,state:t})=>{if(0!==t.token.length)try{const{data:n}=await q.get("/users/me",{headers:{authorization:"Bearer "+t.token}});e("getInfo",n.result)}catch(n){e("logout")}},U=async({commit:e,state:t},n)=>{if(0===t.token.length)return u["a"].create({parent:void 0,title:"錯誤",message:"請先登入"}),void R.push("/login");if(n.quantity<=0)u["a"].create({parent:void 0,title:"錯誤",message:"請輸入正確的數量"});else{n.quantity>=0&&u["a"].create({parent:void 0,title:"成功",message:"加入購物車成功"});try{const{data:a}=await q.post("/users/me/cart",n,{headers:{authorization:"Bearer "+t.token}});e("updateCart",a.result)}catch(a){u["a"].create({parent:void 0,title:"錯誤",message:"加入購物車失敗"})}}};var $={namespaced:!0,getters:a,mutations:o,actions:r,state:O},V=n("0e44");i["a"].use(k["a"]);var J=function(){const e=new k["a"].Store({state:{},mutations:{},actions:{},modules:{user:$},plugins:[Object(V["a"])({key:"OwnBake",paths:["user.token"]})],strict:!1});return e},F=async function(){const e="function"===typeof J?await J({Vue:i["a"]}):J,t="function"===typeof R?await R({Vue:i["a"],store:e}):R;e.$router=t;const n={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:n,store:e,router:t}},K=n("657c");n("2bd9");i["a"].component("ImgInputer",K["a"]);var Q=n("a925"),G={failed:"Action failed",success:"Action was successful"},W={"en-us":G};i["a"].use(Q["a"]);const X=new Q["a"]({locale:"en-us",fallbackLocale:"en-us",messages:W});var Y=({app:e})=>{e.i18n=X};const Z="";async function ee(){const{app:e,store:t,router:n}=await F();let a=!1;const o=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},r=window.location.href.replace(window.location.origin,""),l=[void 0,Y,void 0,M,N];for(let c=0;!1===a&&c<l.length;c++)if("function"===typeof l[c])try{await l[c]({app:e,router:n,store:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:r,publicPath:Z})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==a&&new i["a"](e)}ee()},"31cd":function(e,t,n){}});