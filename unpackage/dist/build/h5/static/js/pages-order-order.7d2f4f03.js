(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{1055:function(t,e,a){var n=a("ce99");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("365238f8",n,!0,{sourceMap:!1,shadowMode:!1})},"177f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tophead[data-v-c897fed6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?20?% %?40?%}.tophead .nav[data-v-c897fed6]{display:-webkit-box;display:-webkit-flex;display:flex}.tophead .title[data-v-c897fed6]{margin-left:%?20?%;font-size:%?36?%;color:#000;-webkit-box-flex:1;-webkit-flex:1;flex:1}.tophead .subtit[data-v-c897fed6]{font-size:%?24?%;color:#000}',""]),t.exports=e},"29b0":function(t,e,a){var n=a("177f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2123a2c2",n,!0,{sourceMap:!1,shadowMode:!1})},"3a58":function(t,e,a){"use strict";a.r(e);var n=a("a21e"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"3da6":function(t,e,a){"use strict";var n=a("1055"),i=a.n(n);i.a},"3dea":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uIcon:a("01ab").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tophead"},[a("v-uni-view",{staticClass:"nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("u-icon",{staticClass:"footIcon",attrs:{size:"28",name:"/static/img/3258.png"}})],1),a("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("subtit")],2)},r=[]},"45dc":function(t,e,a){"use strict";var n=a("d4ca"),i=a.n(n);i.a},4611:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uGap:a("f516").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[t.navshow?a("topNav",{attrs:{title:"用户订单"},on:{eventClick:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"tabsbox"},t._l(t.tablist,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tabs_item",class:{active:t.current==e.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabchange(e.id)}}},[t._v(t._s(e.name))])})),1),a("u-gap",{attrs:{height:"80"}}),0==t.list.length?a("v-uni-view",{staticClass:"emptybox"},[a("v-uni-image",{staticStyle:{width:"453rpx",height:"284rpx"},attrs:{src:"/static/img/nomores.png",mode:"aspectFill"}}),a("v-uni-text",{staticClass:"text"},[t._v("没有更多内容啦～")])],1):a("v-uni-view",[a("v-uni-view",{staticClass:"page_box"},[t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"order"},[4==t.current?[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"imgwrap"},[a("v-uni-image",{attrs:{src:e.images,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"number"},[t._v("数量："+t._s(e.buy_number))])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"type"},[t._v(t._s(t._f("order_status")(e.status)))]),a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.total_price))])],1)],1)]:t._l(e.product_arr,(function(n,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item"},[a("v-uni-view",{staticClass:"imgwrap"},[a("v-uni-image",{attrs:{src:n.images,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(n.title))]),a("v-uni-view",{staticClass:"number"},[t._v("数量："+t._s(n.buy_number))])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"type"},[t._v(t._s(t._f("order_status")(e.status)))]),a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(n.total_price))])],1)],1)]})),a("v-uni-view",{staticClass:"total"},[t._v("实付：￥"),a("v-uni-text",{staticClass:"total_price"},[t._v(t._s(e.total))])],1),1==t.current?a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelOrder(e.id,n)}}},[t._v("取消订单")]),a("v-uni-view",{staticClass:"active btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pay(e.total,e.id)}}},[t._v("立即支付")])],1):t._e(),2==t.current?a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gobuy(e.id,e)}}},[t._v("再次购买")])],1):t._e(),3==t.current?a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"active btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deliver(e.id,n)}}},[t._v("确认收货")])],1):t._e(),4==t.current?a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"active btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.evaluate(e.id,e.pid)}}},[t._v("立即评价")])],1):t._e()],2)})),a("loadMore",{attrs:{status:t.status,show:t.loadShow}})],2)],1),a("v-pay",{attrs:{popupShow:t.payshow,totals:t.totals,orderid:t.orderid},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)},r=[]},"48b9":function(t,e,a){"use strict";a.r(e);var n=a("3dea"),i=a("eb06");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ecd4");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"c897fed6",null,!1,n["a"],o);e["default"]=c.exports},5018:function(t,e,a){"use strict";a.r(e);var n=a("4611"),i=a("3a58");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("45dc"),a("3da6");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9b63125e",null,!1,n["a"],o);e["default"]=c.exports},"9a2a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"topnav",data:function(){return{}},props:{title:{type:String,default:""}},methods:{eventClick:function(){this.$emit("eventClick")}}};e.default=n},a21e:function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("d81d"),a("fb6a"),a("a434"),a("b680"),a("acd8"),a("e25e"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("48b9")),o=n(a("a9dc")),s=n(a("288d")),c={components:{topNav:r.default,loadMore:o.default,"v-pay":s.default},data:function(){return{navshow:!1,tablist:[{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"待评价"}],current:0,list:[],status:"loading",page:1,limit:10,total:0,loadShow:!1,totals:"0",payshow:!1,orderid:0,cklist:[]}},filters:{order_status:function(t){switch(t){case 1:return"待付款";case 2:return"待发货";case 3:return"待收货";case 4:return"待评价";default:return"待确认"}}},computed:{priceDecimal:function(){return function(t){return t!==parseInt(t)?t.slice(-2):"00"}},priceInt:function(){return function(t){return t!==parseInt(t)?t.split(".")[0]:t}}},methods:{goback:function(){uni.switchTab({url:"/pages/about/about"})},evaluate:function(t,e){uni.navigateTo({url:"/pages/evaluate/evaluate?id="+t+"&pid="+e})},totalNum:function(t){var e=0;return t.map((function(t){e+=t.number})),e},tabchange:function(t){this.current=t,this.list=[],this.loadData()},loadData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:4==t.current?t.$api.http.waitcommit(t.page,t.limit).then((function(e){if(200==e.code){var a=e.data.total,n=e.data.data.map((function(t){var e=0;return e+=t.buy_number*parseFloat(t.total_price),t.total=e.toFixed(2),t.pid=t.product_id,t}));1==t.page?t.list=n:(t.list=t.list.concat(n),e.data.data.length<a?t.status="nomore":t.status="loadmore"),e.data.data.length<=a&&1==t.page&&(t.status="nomore",t.loadShow=!1),0==e.data.data.length&&(t.status="nomore",t.loadShow=!1)}})):t.$api.http.orderList(t.current,t.page,t.limit).then((function(e){if(200==e.code){var a=e.data.data.map((function(t){var e=0;return t.product_arr.map((function(a){e+=a.buy_number*parseFloat(a.total_price),t.total=e.toFixed(2),t.pid=a.product_id})),t}));t.list=t.list.concat(a),t.total=e.data.total,e.data.data.length<=t.total&&1==t.page&&(t.status="nomore",t.loadShow=!1),0==e.data.data.length&&(t.status="nomore",t.loadShow=!1)}}));case 1:case"end":return e.stop()}}),e)})))()},cancelOrder:function(t,e){var a=this;uni.showModal({title:"提示",content:"确定是否取消该订单？",confirmColor:"#FF9D00",success:function(n){n.confirm?a.$api.http.cancelOrder(t).then((function(t){200==t.code?a.list.splice(e,1):uni.showToast({title:t.message,icon:"none"})})):n.cancel&&console.log("用户点击取消")}})},gobuy:function(t,e){this.$api.http.buyagain(t).then((function(t){200==t.code?(uni.removeStorageSync("isbuy"),uni.removeStorageSync("blist"),setTimeout((function(){uni.setStorage({key:"isbuy",data:"1"}),uni.setStorage({key:"blist",data:{data:JSON.stringify(e),cartarr:t.data.pay_cart_arr}}),uni.navigateTo({url:"/pages/order/orderConfirm"})}),800)):uni.showToast({title:t.message,icon:"none"})}))},deliver:function(t,e){var a=this;return(0,i.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.$api.http.deliver(t).then((function(t){200==t.code?(uni.showToast({title:t.message,icon:"none"}),a.list.splice(e,1)):uni.showToast({title:t.message,icon:"none"})}));case 1:case"end":return n.stop()}}),n)})))()},replay:function(t){},pay:function(t,e){this.totals=t,this.orderid=e,this.payshow=!0},close:function(){this.payshow=!1},queryData:function(){this.page=1,this.loadData()}},onLoad:function(t){var e=parseInt(t.type);void 0!=t.type&&(this.current=e)},onShow:function(){this.list=[],this.loadData()},onReachBottom:function(){"nomore"!=this.status&&(this.loadShow=!0,this.status="loading",this.page++,this.loadData())},onPullDownRefresh:function(){uni.stopPullDownRefresh(),this.list=[],this.queryData()},onBackPress:function(t){return uni.switchTab({url:"/pages/about/about"}),!0}};e.default=c},a802:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-9b63125e]{background:#f8f8f8}body.?%PAGE?%[data-v-9b63125e]{background:#f8f8f8}',""]),t.exports=e},ce99:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabsbox[data-v-9b63125e]{width:100%;padding:%?20?% 0;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:fixed;top:44px;left:0;z-index:50}.tabsbox .tabs_item[data-v-9b63125e]{font-size:%?28?%;color:#707070;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.tabsbox .tabs_item.active[data-v-9b63125e]{color:#ff9d00;font-weight:700}.emptybox[data-v-9b63125e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?217?%}.emptybox .text[data-v-9b63125e]{font-size:%?22?%;color:#707070;margin-top:%?65?%}.page_box[data-v-9b63125e]{padding:%?20?% %?24?%}.page_box .order[data-v-9b63125e]{background:#fff;border-radius:%?20?%;padding:0 %?32?% 0;margin-bottom:%?36?%}.page_box .order .item[data-v-9b63125e]{padding-top:%?36?%;padding-bottom:%?34?%;border-bottom:%?2?% solid #f5f5f5;display:-webkit-box;display:-webkit-flex;display:flex}.page_box .order .item .imgwrap[data-v-9b63125e]{width:%?140?%;height:%?140?%;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0}.page_box .order .item .imgwrap uni-image[data-v-9b63125e]{width:100%;height:100%}.page_box .order .item .content[data-v-9b63125e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-flex:1;-webkit-flex:1;flex:1}.page_box .order .item .content .title[data-v-9b63125e]{font-size:%?24?%;color:#141313;font-weight:700;margin-right:%?40?%}.page_box .order .item .content .number[data-v-9b63125e]{font-size:%?20?%;color:#b1b1b1}.page_box .order .item .right .type[data-v-9b63125e]{font-size:%?24?%;color:#ff9d00}.page_box .order .item .right .price[data-v-9b63125e]{font-size:%?20?%;color:#141313}.page_box .order .item[data-v-9b63125e]:last-child{margin-bottom:0}.page_box .order .total[data-v-9b63125e]{padding:%?16?% 0;font-size:%?24?%;color:#141313;border-bottom:%?2?% solid #f5f5f5;text-align:right}.page_box .order .total .total_price[data-v-9b63125e]{font-size:%?32?%}.page_box .order .bottom[data-v-9b63125e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?20?% 0}.page_box .order .bottom .btn[data-v-9b63125e]{width:%?150?%;height:%?48?%;line-height:%?44?%;background:#fff;border:%?2?% solid #b1b1b1;border-radius:%?26?%;font-size:%?20?%;color:#b1b1b1;text-align:center;margin:0 %?10?%}.page_box .order .bottom .btn.active[data-v-9b63125e]{background:#ff9d00;border-color:#ff9d00;color:#fff}',""]),t.exports=e},d4ca:function(t,e,a){var n=a("a802");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6f22ecd9",n,!0,{sourceMap:!1,shadowMode:!1})},eb06:function(t,e,a){"use strict";a.r(e);var n=a("9a2a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ecd4:function(t,e,a){"use strict";var n=a("29b0"),i=a.n(n);i.a}}]);