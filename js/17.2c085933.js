(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"8af9":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-pa-xl bg-white"},[r("q-table",{ref:"table",attrs:{title:"訂單總表",data:e.orders,columns:e.columns,"row-key":"name"},scopedSlots:e._u([{key:"body",fn:function(t){return[r("q-tr",{attrs:{props:t}},[r("q-td",{key:"orderId",attrs:{props:t}},[e._v(e._s(t.row._id))]),r("q-td",{key:"orderDate",attrs:{props:t}},[e._v(e._s(t.row.date))]),r("q-td",{key:"orderInfo",attrs:{props:t}},[r("q-btn",{staticClass:"bg-white bubble",attrs:{size:"0.7rem"},on:{click:function(r){return e.orderInfo(t.pageIndex)}}},[e._v("查看詳細")])],1),r("q-td",{key:"orderStatus",attrs:{props:t}},[!1===t.row.order.orderStatus?r("div",[e._v(" 待處理 ")]):e._e(),!0===t.row.order.orderStatus?r("div",[e._v(" 已完成 ")]):e._e()]),r("q-td",{key:"orderRecipient",attrs:{props:t}},[e._v(e._s(t.row.order.recipient))]),r("q-td",{key:"editOrDelete"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 q-gutter-md",attrs:{align:"center"}},[r("q-btn",{staticClass:"bg-white bubble",attrs:{size:"0.7rem"},on:{click:function(r){return e.completedOrder(t.pageIndex)}}},[e._v("完成訂單")]),r("q-btn",{staticClass:"bg-white bubble",attrs:{size:"0.7rem"}},[e._v("刪除訂單")])],1)])])],1)]}}])})],1)},a=[],i=r("fbc9");const o=[{name:"orderId",required:!0,label:"訂單編號",align:"left",field:e=>e.orderId,format:e=>`${e}`},{name:"orderDate",align:"left",label:"訂購日期",field:"orderDate"},{name:"orderInfo",align:"center",label:"訂單詳細",field:"orderInfo"},{name:"orderStatus",align:"center",label:"訂單狀態",field:"orderStatus"},{name:"orderRecipient",align:"center",label:"訂購人",field:"orderRecipient"},{name:"editOrDelete",align:"center",label:"操作",field:"editOrDelete"}];var d={data(){return{columns:o,orders:[]}},methods:{orderInfo(e){this.order={...this.orders[e]},console.log(this.order),this.$q.dialog({title:"",component:i["a"],parent:this,orderInfo:this.order}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))},async completedOrder(e){this.order={...this.orders[e]},console.log(this.orders);try{const{data:e}=await this.api.patch("/orders"+this.order._id+this.order.user._id,{orderStatus:!0},{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});console.log(e.result)}catch(t){console.log(t),this.$q.dialog({parent:this,title:"失敗",message:t.response.data.message}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},async created(){try{const{data:e}=await this.api.get("/orders/all",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.orders=e.result}catch(e){console.log(e),this.$q.dialog({parent:this,title:"錯誤",message:"取得訂單失敗"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},n=d,l=r("2877"),c=r("eaac"),v=r("bd08"),p=r("db86"),h=r("9c40"),_=r("eebe"),g=r.n(_),u=Object(l["a"])(n,s,a,!1,null,"bcb52be6",null);t["default"]=u.exports;g()(u,"components",{QTable:c["a"],QTr:v["a"],QTd:p["a"],QBtn:h["a"]})},fbc9:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[r("q-card",{staticClass:"q-dialog-plugin bg-accent q-pa-md",staticStyle:{"max-width":"1500px","max-height":"1000px",width:"1000px",height:"650px"}},[r("div",{staticClass:"row q-pa-md bg-dark text-white"},[r("div",{staticClass:"col-4"},[e._v("訂單號碼： "+e._s(e.orders._id))]),r("div",{staticClass:"col-4"},[e._v("訂購日期： "+e._s(e.orders.date))]),r("div",{staticClass:"col-4"},[e._v("\n        訂單狀態："),!0===e.orders.order.orderStatus?r("div",{staticClass:"div"},[e._v("已完成")]):e._e(),!1===e.orders.order.orderStatus?r("div",{staticClass:"div"},[e._v("待出貨")]):e._e()])]),r("div",{staticClass:"row bg-primary text-white q-py-md"},[r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v("商品圖片")]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v("商品名稱")]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v("數量")]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v("價格")])]),e._l(e.orders.products,(function(t){return r("div",{key:t.id,staticClass:"row items-center q-pa-md bg-white"},[r("div",{staticClass:"col-3",attrs:{align:"center"}},[r("img",{staticClass:"text-center",staticStyle:{width:"100px","max-height":"100px"},attrs:{src:t.product.productImage}})]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v(e._s(t.product.productName))]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v(e._s(t.quantity))]),r("div",{staticClass:"col-3",attrs:{align:"center"}},[e._v(e._s(t.product.productPrice))])])})),r("div",{staticClass:"row q-pa-md bg-primary text-white"},[r("div",{staticClass:"col-12"},[e._v("\n        寄送方式："+e._s(e.orders.order.delivery)+"\n      ")])]),r("div",{staticClass:"row q-pa-md bg-white"},[r("div",{staticClass:"col-2"},[r("div",[e._v("\n          寄件人姓名：\n        ")]),r("div",[e._v("\n          手機號碼：\n        ")]),r("div",[e._v("\n          email：\n        ")]),r("div",[e._v("\n          寄送地址：\n        ")]),r("div",[e._v("\n          備註：\n        ")])]),r("div",{staticClass:"col-10 text-dark"},[r("div",[e._v("\n          "+e._s(e.orders.order.recipient)+"\n        ")]),r("div",[e._v("\n          "+e._s(e.orders.order.mobile)+"\n        ")]),r("div",[e._v("\n          "+e._s(e.orders.order.mobile)+"\n        ")]),r("div",[e._v("\n          "+e._s(e.orders.order.address)+"\n        ")]),r("div",[e._v("\n          "+e._s(e.orders.order.remark)+"\n        ")])])]),r("div",{staticClass:"row q-pa-md bg-primary text-white"},[r("div",{staticClass:"col-6"},[e._v("\n        付款方式："+e._s(e.orders.order.pay)+"\n      ")]),r("div",{staticClass:"col-6"},[e._v("\n        發票寄送方式："+e._s(e.orders.order.receiptCarrier)+"\n      ")])]),r("div",{staticClass:"row q-pa-md text-dark bg-white"},[r("div",{staticClass:"col-6"}),"手機條碼"===e.orders.order.receiptCarrier?r("div",{staticClass:"col-6"},[e._v("\n        手機條碼："+e._s(e.orders.order.code)+"\n      ")]):e._e()]),r("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"center"}},[r("q-btn",{attrs:{color:"primary",label:"關閉"},on:{click:e.hide}})],1)],2)],1)},a=[],i={props:{orderInfo:{type:Object}},data(){return{orders:{}}},methods:{onRejected(e){this.$q.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})},show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")}},computed:{},async created(){this.orders=this.orderInfo}},o=i,d=r("2877"),n=r("24e8"),l=r("f09f"),c=r("4b7e"),v=r("9c40"),p=r("eebe"),h=r.n(p),_=Object(d["a"])(o,s,a,!1,null,"95e34242",null);t["a"]=_.exports;h()(_,"components",{QDialog:n["a"],QCard:l["a"],QCardActions:c["a"],QBtn:v["a"]})}}]);