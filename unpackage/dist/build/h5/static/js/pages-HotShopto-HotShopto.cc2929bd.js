(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-HotShopto-HotShopto"],{"1c35":function(t,e,i){var a=i("2fb9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d74416c0",a,!0,{sourceMap:!1,shadowMode:!1})},2477:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("01ab").default,uSearch:i("9d29").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"head"},[t.navshow?i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",{staticClass:"nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.routeAbout()}}},[i("u-icon",{staticClass:"footIcon",attrs:{size:"28",name:"/static/img/3258.png"}})],1),i("span",{staticClass:"title"},[t._v("活动商品批发")])],1):t._e(),i("v-uni-view",{staticClass:"search_input"},[i("v-uni-view",{staticClass:"search_box"},[i("u-search",{attrs:{placeholder:"搜一搜",clearabled:!0,"show-action":!1,"border-color":"#ffffff","search-icon":"/static/img/23.png","search-icon-color":"#FFFFFF","bg-color":"#ffffff","input-align":"center","placeholder-color":"#B1B1B1",color:"#B1B1B1"},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),t.list.length>0?i("v-uni-view",{staticClass:"ShopList"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail(e.id)}}},[t._l(e.pic_arr,(function(a,n){return 0==n?i("v-uni-view",{key:n,staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:a.domain+a.path.substr(1),mode:"aspectFit"}}),e.has_pay_num>1?i("v-uni-text",{staticClass:"tip"},[t._v(t._s(e.has_pay_num)+"件起买")]):t._e()],1):t._e()})),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"shop-title clamp"},[t._v(t._s(e.title))]),t._l(e.sku_arr,(function(e,a){return 0==a?i("v-uni-view",{key:a,staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"noprice"},[t._v("原价 ￥ "+t._s(e.history_price))])],1):t._e()})),i("v-uni-view",{staticClass:"btnwrap"},[i("v-uni-text",{staticClass:"purchase"},[t._v("限购"+t._s(e.buy_limit)+"件")]),i("v-uni-view",{staticClass:"action-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.joinCart(e.id)}}},[i("u-icon",{staticClass:"footIcon",attrs:{size:"23",name:"/static/img/icon_cart.png"}}),i("v-uni-text",{staticClass:"text"},[t._v("加入购物车")])],1)],1)],2)],2)})),1):t._e(),i("loadMore",{attrs:{status:t.status,show:t.loadShow}})],1)},o=[]},"2cf41":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-3783e340]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-3783e340]{width:%?40?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-3783e340]{color:#909399}.u-action[data-v-3783e340]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-3783e340]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},"2fb9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-350120ba]{background-color:#f0f0f0}.head[data-v-350120ba]{width:100%;height:100%;background-color:#f0f0f0}.head .bg[data-v-350120ba]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?30?% %?50?%;text-align:center;line-height:100%}.head .bg .nav[data-v-350120ba]{margin-right:%?20?%}.head .bg .title[data-v-350120ba]{font-size:%?30?%;font-weight:550;color:#141313}.head .search_input[data-v-350120ba]{height:7%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?20?% 5%}.head .search_input .search_box[data-v-350120ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.head .ShopList[data-v-350120ba]{margin:%?20?% 5%;background:#fff;border-radius:%?24?%}.head .ShopList .list-item[data-v-350120ba]{padding:%?26?% 0 %?32?% 0;margin:0 %?26?%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?2?% solid #eee}.head .ShopList .list-item .image-wrapper[data-v-350120ba]{width:%?258?%;height:%?152?%;margin-right:%?20?%;position:relative;overflow:hidden}.head .ShopList .list-item .image-wrapper uni-image[data-v-350120ba]{width:100%;height:100%}.head .ShopList .list-item .image-wrapper .tip[data-v-350120ba]{position:absolute;top:%?30?%;right:0;background:#ff9d00;height:%?34?%;line-height:%?34?%;font-size:%?20?%;color:#fff;border-top-left-radius:%?34?%;border-bottom-left-radius:%?34?%;padding:0 %?24?%}.head .ShopList .list-item .right[data-v-350120ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.head .ShopList .list-item .right .shop-title[data-v-350120ba]{font-size:%?24?%;color:#141313;font-weight:700}.head .ShopList .list-item .right .price-box[data-v-350120ba]{margin-top:%?10?%}.head .ShopList .list-item .right .price-box .price[data-v-350120ba]{font-size:%?28?%;color:#ff9d00;font-weight:700}.head .ShopList .list-item .right .price-box .noprice[data-v-350120ba]{padding-left:%?20?%;font-size:%?18?%;color:#b1b1b1;text-decoration:line-through}.head .ShopList .list-item .right .btnwrap[data-v-350120ba]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.head .ShopList .list-item .right .btnwrap .purchase[data-v-350120ba]{font-size:%?20?%;color:red}.head .ShopList .list-item .right .btnwrap .action-btn[data-v-350120ba]{padding:0 %?30?%;height:%?50?%;line-height:%?50?%;background:#ff9d00;border-radius:%?25?%;font-size:%?20?%;margin:0;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.head .ShopList .list-item .right .btnwrap .action-btn .text[data-v-350120ba]{margin-left:%?12?%}.head .ShopList .list-item[data-v-350120ba]:last-child{border-bottom:0}body.?%PAGE?%[data-v-350120ba]{background-color:#f0f0f0}',""]),t.exports=e},6058:function(t,e,i){"use strict";i.r(e);var a=i("2477"),n=i("909b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bd7c");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"350120ba",null,!1,a["a"],r);e["default"]=l.exports},"6dd3":function(t,e,i){"use strict";i.r(e);var a=i("dee0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"909b":function(t,e,i){"use strict";i.r(e);var a=i("d4f3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"96bf":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("01ab").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},o=[]},"9d29":function(t,e,i){"use strict";i.r(e);var a=i("96bf"),n=i("6dd3");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b3d3");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3783e340",null,!1,a["a"],r);e["default"]=l.exports},b3d3:function(t,e,i){"use strict";var a=i("f5ae"),n=i.n(a);n.a},bd7c:function(t,e,i){"use strict";var a=i("1c35"),n=i.n(a);n.a},d4f3:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o=a(i("a9dc")),r={components:{loadMore:o.default},data:function(){return{navshow:!1,keyword:"",list:[],status:"loading",page:1,limit:10,total:0,loadShow:!1}},methods:{loadData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$api.http.getProductlist(1,t.page,t.limit,t.keyword).then((function(e){200==e.code?(t.list=t.list.concat(e.data.data),t.total=e.data.total,e.data.data.length<=t.total&&1==t.page&&(t.status="nomore",t.loadShow=!1),0==e.data.data.length&&(t.status="nomore",t.loadShow=!1)):uni.showToast({title:e.message,icon:"none"})}));case 1:case"end":return e.stop()}}),e)})))()},goSearch:function(){this.page=1,this.list=[],this.loadData()},routeAbout:function(){this.$u.route({type:"switchTab",url:"pages/home/home"})},detail:function(t){uni.navigateTo({url:"/pages/detail/detail?id="+t})},joinCart:function(t){uni.navigateTo({url:"/pages/detail/detail?id="+t})}},onLoad:function(){this.loadData()},onReachBottom:function(){"nomore"!=this.status&&(this.loadShow=!0,this.status="loading",this.page++,this.loadData())},onPullDownRefresh:function(){uni.stopPullDownRefresh(),this.list=[],this.goSearch()}};e.default=r},dee0:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=a},f5ae:function(t,e,i){var a=i("2cf41");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("73ab09fe",a,!0,{sourceMap:!1,shadowMode:!1})}}]);