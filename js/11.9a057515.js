(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"37ee":function(t,e,s){"use strict";s("6b71")},"6b71":function(t,e,s){},"7a4a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"max-width":"1000px",width:"100%"}},[s("q-dialog",{model:{value:t.displayEvent,callback:function(e){t.displayEvent=e},expression:"displayEvent"}},[s("div",[t.event?s("q-card",{staticStyle:{"max-width":"300px"}},[s("q-toolbar",{staticClass:"bg-primary",staticStyle:{"min-width":"300px"}},[s("q-toolbar-title",{staticClass:"text-accent"},[t._v("\n            預約資訊\n          ")]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"accent",icon:"close"}})],1),s("q-card-section",{staticClass:"inset-shadow bg-accent q-pt-md pt-mobile"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-5"},[s("div",{staticClass:"row",attrs:{align:"right"}},[s("div",{staticClass:"col-12"},[t._v("預約人：")]),s("div",{staticClass:"col-12"},[t._v("預約日期：")]),s("div",{staticClass:"col-12"},[t._v("預約時間：")]),s("div",{staticClass:"col-12"},[t._v("大人人數：")]),s("div",{staticClass:"col-12"},[t._v("小孩人數：")])])]),s("div",{staticClass:"col-1"}),s("div",{staticClass:"col-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[t._v(" "+t._s(t.event.reservation.name)+" ")]),s("div",{staticClass:"col-12"},[t._v(" "+t._s(t.event.reservation.date)+" ")]),s("div",{staticClass:"col-12"},[t._v(" "+t._s(t.event.reservation.time)+" ")]),s("div",{staticClass:"col-12"},[t._v(" "+t._s(t.event.reservation.adultNum)+" ")]),s("div",{staticClass:"col-12"},[t._v(" "+t._s(t.event.reservation.childNum)+" ")])])])])]),s("q-card-actions",{staticClass:"bg-accent q-pb-md pb-mobile",attrs:{align:"center"}},[s("q-btn",{attrs:{label:"取消預約",color:"primary"},on:{click:function(e){return t.cancelReservations(t.event._id,t.event.reservation)}}}),s("q-btn",{attrs:{label:"刪除預約",color:"negative"},on:{click:function(e){return t.delReservations(t.event._id,t.event.reservation)}}})],1)],1):t._e()],1)]),s("q-toolbar",{staticClass:"bg-deep-orange-11 text-accent text-h5 row justify-between items-center"},[s("div",{staticClass:"col-4 text-h5",staticStyle:{"text-align":"center"}},[t._v("\n    "+t._s(t.title)+"\n    ")]),s("q-btn-group",{staticClass:"col-3",attrs:{flat:""}},[s("q-btn",{staticClass:"text-bold",attrs:{color:"white",flat:"",label:"Prev"},on:{click:t.onPrev}}),s("q-btn",{staticClass:"text-bold",attrs:{color:"white",flat:"",label:"Next"},on:{click:t.onNext}})],1)],1),s("q-separator",{staticClass:"full-width"}),s("q-separator"),s("q-calendar",{ref:"calendar",staticClass:"text-dark",attrs:{bordered:"",view:"month",locale:"zh-TW",now:t.now,animated:"","transition-prev":"slide-right","transition-next":"slide-left","day-height":100,"short-weekday-label":t.shortWeekdayLabel,"short-month-label":t.shortMonthLabel},on:{change:t.onChange},scopedSlots:t._u([{key:"day",fn:function(e){var a=e.timestamp;return[t._l(t.getEvents(a.date),(function(e,a){return["已取消預約"!==e.title?s("q-badge",{key:a,class:t.badgeClasses(e,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"16px","max-height":"16px"},style:t.badgeStyles(e,"day"),on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.showEvent(e)}}},[t._v("\n          "+t._s(e.reservation.time)+"\n          "),s("span",{staticClass:"ellipsis"},[t._v(t._s(e.reservation.name))]),"male"===e.reservation.gender?s("span",[t._v("先生")]):"female"===e.reservation.gender?s("span",[t._v("小姐")]):t._e()]):t._e(),"已取消預約"===e.title?s("q-badge",{key:a,staticClass:"bg-grey-5",staticStyle:{width:"100%",cursor:"pointer",height:"16px","max-height":"16px"},style:t.badgeStyles(e,"day"),on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.showEvent(e)}}},[t._v("\n          "+t._s(e.reservation.time)+t._s(e.reservation.name)+"\n          "),s("span",{staticClass:"ellipsis"},[t._v(t._s(e.title))])]):t._e()]}))]}}]),model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1)},i=[],n=(s("d9e2"),s("5319"),s("fe7a"));const r=/^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;function o(t){if("string"!==typeof t)throw new TypeError("Expected a string");const e=r.exec(t);if(e){const t={r:Math.min(255,parseInt(e[2],10)),g:Math.min(255,parseInt(e[3],10)),b:Math.min(255,parseInt(e[4],10))};return e[1]&&(t.a=Math.min(1,parseFloat(e[5]))),t}return l(t)}function l(t){if("string"!==typeof t)throw new TypeError("Expected a string");t=t.replace(/^#/,""),3===t.length?t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:4===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=parseInt(t,16);return t.length>6?{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:Math.round((255&e)/2.55)}:{r:e>>16,g:e>>8&255,b:255&e}}function c(t){if("string"!==typeof t&&(!t||void 0===t.r))throw new TypeError("Expected a string or a {r, g, b} object as color");const e="string"===typeof t?o(t):t,s=e.r/255,a=e.g/255,i=e.b/255,n=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),r=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),l=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return.2126*n+.7152*r+.0722*l}var d={data(){return{selectedDate:"",now:"",title:"",shortWeekdayLabel:!1,shortMonthLabel:!1,dateFormatter:void 0,start:void 0,events:[],event:null,displayEvent:!1}},beforeMount(){this.updateFormatter()},watch:{locale(){this.updateFormatter(),this.updateTitle()}},methods:{onChange({start:t}){this.start=t,this.updateTitle()},onPrev(){this.$refs.calendar.prev()},onNext(){this.$refs.calendar.next()},updateTitle(){const t=n["a"].makeDate(this.start);void 0!==this.dateFormatter&&(this.title=this.dateFormatter.format(t))},updateFormatter(){try{this.dateFormatter=new Intl.DateTimeFormat(this.locale||void 0,{month:this.shortMonthLabel?"short":"long",year:"numeric",timeZone:"UTC"})}catch(t){this.dateFormatter=void 0}},isCssColor(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)},badgeClasses(t,e){const s=this.isCssColor(t.bgcolor),a="header"===e;return{[`text-white bg-${t.bgcolor}`]:!s,"full-width":!a&&(!t.side||"full"===t.side),"left-side":!a&&"left"===t.side,"right-side":!a&&"right"===t.side}},badgeStyles(t,e,s,a){const i={};return this.isCssColor(t.bgcolor)&&(i["background-color"]=t.bgcolor,i.color=c(t.bgcolor)>.5?"black":"white"),s&&(i.top=s(t.time)+"px"),a&&(i.height=a(t.duration)+"px"),i["align-items"]="flex-start",i},getEvents(t){const e=n["a"].parseTimestamp(t),s=[];for(let a=0;a<this.events.length;++a){let i=!1;if(this.events[a].reservation.date===t){if(this.events[a].reservation.time&&s.length>0){const t=n["a"].parseTimestamp(this.events[a].reservation.date+" "+this.events[a].reservation.time),e=n["a"].addToDate(t,{minute:this.events[a].reservation.duration});for(let r=0;r<s.length;++r)if(s[r].time){const o=n["a"].parseTimestamp(s[r].reservation.date+" "+s[r].reservation.time),l=n["a"].addToDate(o,{minute:s[r].reservation.duration});if(n["a"].isBetweenDates(t,o,l)||n["a"].isBetweenDates(e,o,l)){s[r].side="left",this.events[a].side="right",s.push(this.events[a]),i=!0;break}}}i||(this.events[a].side=void 0,s.push(this.events[a]))}else if(this.events[a].days){const t=n["a"].parseTimestamp(this.events[a].reservation.date),r=n["a"].addToDate(t,{day:this.events[a].days});n["a"].isBetweenDates(e,t,r)&&(s.push(this.events[a]),i=!0)}}return s},showEvent(t){this.event=t,this.displayEvent=!0},async cancelReservations(t,e){console.log(t);const s={title:"已取消預約",color:"lightgrey"};try{await this.api.patch("/Reservations/"+t,s,{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}}),this.$q.dialog({parent:this,title:"成功",message:"取消預約成功"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}catch(a){console.log(a),this.$q.dialog({parent:this,title:"取消預約失敗",message:a.response.data.message}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}},async delReservations(t){console.log(t);try{await this.api.delete("/Reservations/"+t,{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}}),this.$q.dialog({parent:this,title:"成功",message:"刪除預約成功"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}catch(e){console.log(e),this.$q.dialog({parent:this,title:"刪除預約失敗",message:e.response.data.message}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},async created(){try{const{data:t}=await this.api.get("/reservations/all",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.events=t.result}catch(t){console.log(t),this.$q.dialog({parent:this,title:"錯誤",message:"取得預約失敗"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},h=d,v=(s("37ee"),s("2877")),p=s("24e8"),g=s("f09f"),u=s("65c6"),m=s("6ac5"),b=s("9c40"),f=s("a370"),y=s("4b7e"),w=s("e7a9"),C=s("eb85"),_=s("58a81"),x=s("7f67"),k=s("eebe"),q=s.n(k),D=Object(v["a"])(h,a,i,!1,null,"02737612",null);e["default"]=D.exports;q()(D,"components",{QDialog:p["a"],QCard:g["a"],QToolbar:u["a"],QToolbarTitle:m["a"],QBtn:b["a"],QCardSection:f["a"],QCardActions:y["a"],QBtnGroup:w["a"],QSeparator:C["a"],QBadge:_["a"]}),q()(D,"directives",{ClosePopup:x["a"]})}}]);