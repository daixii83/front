(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0073":function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM2IDM2IiBmaWxsPSJub25lIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48dGl0bGU+U3VzYW4gQjwvdGl0bGU+PG1hc2sgaWQ9Im1hc2tfX2JlYW0iIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRkZGRkZGIiByeD0iNzIiPjwvcmVjdD48L21hc2s+PGcgbWFzaz0idXJsKCNtYXNrX19iZWFtKSIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRDk3ODY1Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNCA4KSByb3RhdGUoODggMTggMTgpIHNjYWxlKDEuMSkiIGZpbGw9IiNGOUU0QzEiIHJ4PSIzNiI+PC9yZWN0PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNCkgcm90YXRlKDggMTggMTgpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMsMjAgYTEsMC43NSAwIDAsMCAxMCwwIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PHJlY3QgeD0iMTEiIHk9IjE0IiB3aWR0aD0iMS41IiBoZWlnaHQ9IjIiIHJ4PSIxIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMwMDAwMDAiPjwvcmVjdD48cmVjdCB4PSIyMyIgeT0iMTQiIHdpZHRoPSIxLjUiIGhlaWdodD0iMiIgcng9IjEiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzAwMDAwMCI+PC9yZWN0PjwvZz48L2c+PC9zdmc+"},2932:function(t,a,s){},"300d":function(t,a,s){"use strict";s("2932")},4387:function(t,a,s){t.exports=s.p+"img/logo_notitle.1fe05d8d.png"},f6b42:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("q-layout",{staticClass:"bg-primary my-font",attrs:{view:"hHh lpR fff"}},[i("q-header",{attrs:{reveal:"","height-hint":"98"}},[i("div",[i("q-toolbar",{staticClass:"bg-primary text-white shadow-2",attrs:{flat:""}},[i("q-btn",{staticClass:"lt-md",attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(a){t.left=!t.left}}}),i("div",{staticClass:"q-pa-md"},[i("q-img",{staticStyle:{width:"50px"},attrs:{src:s("4387"),basic:""}})],1),i("q-btn",{attrs:{flat:"",to:"/Home",label:"OwnBake"}}),i("q-space"),i("q-tabs",{staticClass:"gt-sm",attrs:{align:"center",shrink:"",stretch:""}},[i("q-route-tab",{attrs:{to:"/AboutUs",label:"關於我們"}}),i("q-route-tab",{attrs:{to:"/Products",label:"商品介紹"}}),i("q-route-tab",{attrs:{to:"/Reservation",label:"預約體驗"}}),t.user.isLogin&&t.user.isAdmin?i("q-route-tab",{attrs:{to:"/Admin",label:"管理者介面"}}):t._e()],1),i("q-space"),i("div",{staticClass:"sidetab"},[i("q-btn",{attrs:{flat:"",to:"/Cart"}},[i("q-icon",{attrs:{size:"20px",name:"fas fa-shopping-cart"}}),i("q-badge",{attrs:{color:"red",floating:""}},[t._v(" "+t._s(t.user.cart)+" ")])],1),t.user.isLogin?t._e():i("q-btn",{attrs:{flat:"",to:"/Login"}},[i("q-icon",{attrs:{size:"24px",name:"fas fa-user-circle"}})],1),t.user.isLogin?i("q-btn",{attrs:{flat:"",to:"/"},on:{click:t.logout}},[i("q-icon",{attrs:{size:"24px",name:"fas fa-sign-out-alt"}})],1):t._e()],1)],1)],1)]),i("q-drawer",{staticClass:"bg-accent lt-md",attrs:{side:"left",behavior:"desktop",overlay:"",bordered:""},model:{value:t.left,callback:function(a){t.left=a},expression:"left"}},[i("q-scroll-area",{staticClass:"fit"},[i("q-list",{staticClass:"menu-list",attrs:{padding:""}},[i("q-item",[i("q-item-section",[i("q-btn",{attrs:{flat:"",to:"/AboutUs"}},[t._v("關於我們")])],1)],1),i("q-item",[i("q-item-section",[i("q-btn",{attrs:{flat:"",to:"/Products"}},[t._v("產品介紹")])],1)],1),i("q-item",[i("q-item-section",[i("q-btn",{attrs:{flat:"",to:"/Reservation"}},[t._v("預約體驗")])],1)],1),i("q-item",[i("q-item-section",[t.user.isAdmin?i("q-btn",{attrs:{flat:"",to:"/Admin"}},[t._v("管理者專區")]):t._e()],1)],1)],1)],1)],1),i("q-page-container",{staticClass:"q-px-xl"},[i("router-view")],1),i("q-footer",{staticClass:"q-px-xl q-pb-xl text-white"},[i("q-toolbar",{staticClass:"q-py-md bg-dark shadow-5 bottomtoolbar"},[i("q-space"),i("div",{staticClass:"col-md-3"},[i("q-card",{staticClass:"bg-dark",attrs:{flat:""}},[i("q-card-section",{attrs:{horizontal:""}},[i("q-card-section",{staticClass:"col-2"},[i("q-avatar",{attrs:{size:"52px"}},[i("img",{attrs:{src:s("0073"),alt:"logo"}})])],1),i("q-card-section",{staticClass:"col-10"},[i("p",[t._v("\n              OwnBake自助烘焙 "),i("br"),t._v("\n              新北市泰山區貴子里致遠新村55之1號 "),i("br"),t._v("\n              TEL: (02) 123-4567\n              ")]),i("q-icon",{attrs:{size:"xs",name:"fab fa-facebook-square"}}),i("q-icon",{attrs:{size:"xs",name:"fab fa-instagram"}}),i("q-icon",{attrs:{size:"xs",name:"fab fa-twitter"}})],1)],1)],1)],1),i("div",{staticClass:"col-md-2"},[i("q-card",{staticClass:"bg-dark",attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-subtitle1"},[i("a",{staticClass:"link",attrs:{href:"#/AboutUs"}},[t._v("關於我們")])]),i("p",[i("a",{staticClass:"link",attrs:{href:"#/AboutUs/#AboutOwnBake"}},[t._v("品牌故事")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/AboutUs"}},[t._v("材料來源")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/AboutUs/#HowToStart"}},[t._v("流程介紹")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/AboutUs"}},[t._v("材料包須知")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/AboutUs"}},[t._v("來店須知")])])])],1)],1),i("div",{staticClass:"col-md-2"},[i("q-card",{staticClass:"bg-dark",attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-subtitle1"},[i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("商品介紹")])]),i("p",[i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("蛋糕")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("餅乾")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("塔 & 派")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("點心")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Products"}},[t._v("烘焙用具")])])])],1)],1),i("div",{staticClass:"col-md-2"},[i("q-card",{staticClass:"bg-dark",attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-subtitle1"},[i("a",{staticClass:"link",attrs:{href:"#/Member"}},[t._v("會員中心")])]),i("p",[i("a",{staticClass:"link",attrs:{href:"#/Login"}},[t._v("會員登入")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Register"}},[t._v("會員註冊")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Member/MyOrders"}},[t._v("訂單查詢")]),i("br"),i("a",{staticClass:"link",attrs:{href:"#/Member/MyReservations"}},[t._v("預約查詢")]),i("br")])])],1)],1),i("div",{staticClass:"col-md-2"},[i("q-card",{staticClass:"bg-dark",attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-subtitle1"},[i("a",{staticClass:"link",attrs:{href:"#/ContactUs"}},[t._v("聯絡我們")])]),i("p",[i("a",{staticClass:"link",attrs:{href:"/AboutUs"}},[t._v("意見回饋")]),i("br"),i("a",{staticClass:"link",attrs:{href:"/AboutUs"}},[t._v("常見問題")]),i("br")]),i("div",{staticClass:"text-body2"},[t._v("準備好了嗎？")]),i("div",{staticClass:"text-subtitle1"},[i("p",[i("a",{staticClass:"link",attrs:{href:"#/Reservation"}},[t._v("預約體驗")]),i("br")])])])],1)],1),i("q-space"),i("div",{staticClass:"q-py-md col-12",attrs:{align:"center"}},[t._v("\n        Copyright © 2021 Yi-Chen Shih. All rights reserved.\n      ")])],1)],1)],1)},e=[],r={data(){return{left:!1}},methods:{logout(){this.$store.dispatch("user/logout")}},computed:{user(){return this.$store.getters["user/user"]}}},l=r,c=(s("300d"),s("2877")),o=s("4d5a"),n=s("e359"),d=s("65c6"),b=s("9c40"),I=s("068f"),g=s("2c91"),f=s("429b"),m=s("7867"),u=s("0016"),v=s("58a81"),C=s("9404"),q=s("4983"),h=s("1c1c"),p=s("66e5"),k=s("4074"),M=s("09e3"),w=s("7ff0"),_=s("f09f"),x=s("a370"),P=s("cb32"),A=s("eebe"),Q=s.n(A),j=Object(c["a"])(l,i,e,!1,null,"7f193ce8",null);a["default"]=j.exports;Q()(j,"components",{QLayout:o["a"],QHeader:n["a"],QToolbar:d["a"],QBtn:b["a"],QImg:I["a"],QSpace:g["a"],QTabs:f["a"],QRouteTab:m["a"],QIcon:u["a"],QBadge:v["a"],QDrawer:C["a"],QScrollArea:q["a"],QList:h["a"],QItem:p["a"],QItemSection:k["a"],QPageContainer:M["a"],QFooter:w["a"],QCard:_["a"],QCardSection:x["a"],QAvatar:P["a"]})}}]);