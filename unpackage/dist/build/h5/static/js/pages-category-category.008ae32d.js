(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0823":function(t,e,i){"use strict";i.r(e);var n=i("ac5e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"0f89":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-165ab1d4]{background:#fff;height:100%}body.?%PAGE?%[data-v-165ab1d4]{background:#fff}',""]),t.exports=e},"0f8c":function(t,e,i){"use strict";i.r(e);var n=i("5f41"),a=i("fef9");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("71fb");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"67988de8",null,!1,n["a"],o);e["default"]=l.exports},1194:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),a={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r},"1c71":function(t,e,i){"use strict";i.r(e);var n=i("525d"),a=i("0823");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9a77"),i("2806");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"165ab1d4",null,!1,n["a"],o);e["default"]=l.exports},2806:function(t,e,i){"use strict";var n=i("a42f"),a=i.n(n);a.a},"2cf41":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-3783e340]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-3783e340]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-3783e340]{width:%?40?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-3783e340]{color:#909399}.u-action[data-v-3783e340]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-3783e340]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},4983:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"525d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("0f8c").default,uSearch:i("9d29").default,uIcon:i("01ab").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("u-navbar",{staticClass:"navhead",attrs:{"back-text":"全部分类","back-icon-color":"#000000","back-text-style":{color:"#000000"},"border-bottom":!1}},[i("v-uni-view",{staticClass:"search_box"},[i("u-search",{attrs:{placeholder:"搜索产品",clearabled:!0,"show-action":!1,"border-color":"#ffffff","search-icon":"/static/img/23.png","search-icon-color":"#FFFFFF","bg-color":"#ffffff","input-align":"center","placeholder-color":"#B1B1B1",color:"#B1B1B1"},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch.apply(void 0,arguments)}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"leftside"},[i("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,(function(e,n){return i("v-uni-view",{key:e.category_id,staticClass:"f-item b-b",class:{active:e.category_id===t.currentId,before:e.category_id===t.currentBeforeId,after:e.category_id===t.currentAfterId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabtap(e,n)}}},[i("v-uni-text",[t._v(t._s(e.title))])],1)})),1),t.show?i("v-uni-scroll-view",{staticClass:"left-asides",attrs:{"scroll-y":!0}},t._l(t.clist,(function(e,n){return i("v-uni-view",{key:e.category_id,staticClass:"f-items",class:{active:e.category_id===t.currentIds},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabtap(e,n,1)}}},[i("v-uni-text",[t._v(t._s(e.title))])],1)})),1):t._e()],1),i("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0}},[i("v-uni-view",{staticClass:"t-list"},[t._l(t.plist,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"t-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToList(e.id)}}},[t._l(e.pic_arr,(function(e,n){return 0==n?i("v-uni-view",{key:n,staticClass:"imgwrap"},[i("v-uni-image",{attrs:{src:e.domain+e.path.substr(1),mode:"scaleToFill"}})],1):t._e()})),i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"price_wrap"},[t._l(e.sku_arr,(function(e,n){return 0==n?i("v-uni-view",{key:n,staticClass:"picebox"},[i("v-uni-text",[t._v("￥"+t._s(e.price))])],1):t._e()})),i("v-uni-button",{staticClass:"btn_cart",attrs:{type:"default"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.addCart(e)}}},[i("u-icon",{staticClass:"footIcon",attrs:{size:"22",name:"/static/img/icon_cart.png"}})],1)],2)],2)})),i("loadMore",{attrs:{status:t.status,show:t.loadShow}})],2)],1)],1),i("v-uni-view",{staticClass:"de_btn_bar"},[i("v-uni-view",{staticClass:"icon_cart icon_bar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCart.apply(void 0,arguments)}}},[i("u-icon",{attrs:{size:"40",name:"/static/img/tab_cart.png"}}),i("v-uni-text",[t._v("购物车")]),t.cartnum>0?i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.cartnum))]):t._e()],1),"true"==t.hasLogin?i("v-uni-button",{staticClass:"btn_cart",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCart.apply(void 0,arguments)}}},[t._v(t._s(t.totalPrice)+" 去支付")]):i("v-uni-button",{staticClass:"btn_cart",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)},r=[]},"5f41":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("01ab").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]},"6dd3":function(t,e,i){"use strict";i.r(e);var n=i("dee0"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"71fb":function(t,e,i){"use strict";var n=i("bda5"),a=i.n(n);a.a},"96bf":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("01ab").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},r=[]},"9a77":function(t,e,i){"use strict";var n=i("c8f6"),a=i.n(n);a.a},"9d29":function(t,e,i){"use strict";i.r(e);var n=i("96bf"),a=i("6dd3");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b3d3");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3783e340",null,!1,n["a"],o);e["default"]=l.exports},a42f:function(t,e,i){var n=i("fc3b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("39e524a5",n,!0,{sourceMap:!1,shadowMode:!1})},ac5e:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4de4"),i("4160"),i("b680"),i("e25e"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=n(i("5530")),o=i("2f62"),s=n(i("a9dc")),l={components:{loadMore:s.default},data:function(){return{currentId:0,currentBeforeId:0,currentAfterId:0,currentIds:0,flist:[],clist:[],plist:[],selectFoods:[],show:!1,keywords:"",cateid:0,status:"loading",page:1,limit:10,total:0,loadShow:!1,cartnum:0,hasLogin:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach((function(e){t+=e.price*e.count})),0==t?"":"￥"+t.toFixed(2)},totalCount:function(){var t=0;return this.selectFoods.forEach((function(e){t+=e.count})),t}},methods:(0,r.default)((0,r.default)({},(0,o.mapMutations)(["storehasLogin"])),{},{routeAbout:function(){uni.navigateBack()},goLogin:function(){uni.navigateTo({url:"/pages/login/login"})},loadData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$api.http.getCategory().then((function(e){var i=e.data;t.flist=i})),t.getcart();case 2:case"end":return e.stop()}}),e)})))()},getplist:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$api.http.getProductlist(0,t.page,t.limit,t.keywords,t.cateid).then((function(e){200==e.code&&(t.plist=t.plist.concat(e.data.data),t.total=e.data.total,e.data.data.length<=t.total&&1==t.page&&(t.status="nomore",t.loadShow=!1),0==e.data.data.length&&(t.status="nomore",t.loadShow=!1))}));case 1:case"end":return e.stop()}}),e)})))()},queryData:function(){this.page=1,this.plist=[],this.getplist()},tabtap:function(t,e,i){var n=this;1==i?(this.currentIds=t.category_id,this.cateid=t.category_id,this.show=!1,setTimeout((function(){n.plist=[],n.getplist()}),1e3)):(this.currentId=t.category_id,this.currentBeforeId=e>0?this.flist[e-1].category_id:0,e<this.flist.length-1?this.currentAfterId=this.flist[e+1].category_id:this.currentAfterId=0,this.cateid=t.category_id,this.clist=[],t.children?(this.clist=t.children,this.show=!0):(this.plist=[],this.getplist(),this.show=!1))},goSearch:function(){this.page=1,this.plist=[],this.getplist()},navToList:function(t){uni.navigateTo({url:"/pages/detail/detail"})},getcart:function(){var t=this;this.$api.http.cartList().then((function(e){200==e.code?t.cartnum=e.data.total:402==e.code&&(t.hasLogin=!1,t.storehasLogin("false"))}))},goCart:function(){uni.navigateTo({url:"/pages/shopCat/shopCat"})},addCart:function(t){var e=this;this.$api.http.addCart(t.id,t.sku_arr[0].sku_id,1).then((function(t){200==t.code?(uni.showToast({title:"加入购物车成功",icon:"none"}),e.getcart()):uni.showToast({title:"请立即登录",icon:"none"})}))},getCartnum:function(t){for(var e=!1,i=0;i<this.selectFoods.length;i++)this.selectFoods[i].id==t.id&&(e=!0);if(e){var n=this.selectFoods.filter((function(e){return e.id==t.id}));n[0].count++}else{var a={id:t.id,title:t.title,price:t.sku_arr[0].price,skuid:t.sku_arr[0].sku_id,count:1};this.selectFoods.push(a)}}}),onLoad:function(t){this.cateid=t.id,this.currentId=parseInt(t.id),this.loadData(),this.getplist()},onShow:function(){document.title="批发商城"},onReachBottom:function(){"nomore"!=this.status&&(this.loadShow=!0,this.status="loading",this.page++,this.getplist())},onPullDownRefresh:function(){uni.stopPullDownRefresh(),this.list=[],this.goSearch()},onBackPress:function(t){return uni.navigateTo({url:"/pages/DailyWholesale/DailyWholesale"}),!0}};e.default=l},b3d3:function(t,e,i){"use strict";var n=i("f5ae"),a=i.n(n);a.a},bda5:function(t,e,i){var n=i("4983");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1526d24c",n,!0,{sourceMap:!1,shadowMode:!1})},c8f6:function(t,e,i){var n=i("0f89");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("107dabc6",n,!0,{sourceMap:!1,shadowMode:!1})},dee0:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=n},f5ae:function(t,e,i){var n=i("2cf41");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("73ab09fe",n,!0,{sourceMap:!1,shadowMode:!1})},fc3b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-165ab1d4]{height:100%}.content[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;height:calc(100% - %?88?%)}.navhead[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;\r\n  /* padding: 16rpx 48rpx;\r\n\tbackground:#fff;\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\tz-index: 50; */width:100%}.navhead .nav[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex}.navhead .title[data-v-165ab1d4]{margin-left:%?20?%;font-size:%?40?%;color:#000}.navhead .search_box[data-v-165ab1d4]{margin:0 %?24?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;border:%?2?% solid #eee;border-radius:%?31?%}.navhead .search_box[data-v-165ab1d4] .u-input{font-size:%?22?%}.leftside[data-v-165ab1d4]{position:relative}.leftside[data-v-165ab1d4]::before{content:"";width:%?168?%;height:100%;background:#f6f6f6;position:absolute;bottom:0;left:0}.left-aside[data-v-165ab1d4]{-webkit-flex-shrink:0;flex-shrink:0;width:%?168?%;height:100%}.left-asides[data-v-165ab1d4]{-webkit-flex-shrink:0;flex-shrink:0;width:%?168?%;height:100%;background-color:#fff;border-top-right-radius:%?40?%;position:absolute;top:0;left:%?168?%;z-index:20}.f-item[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#707070;position:relative;background:#f6f6f6}.f-item.active[data-v-165ab1d4]{color:#141313;background:#fff}.f-item.active[data-v-165ab1d4]::before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?50?%;width:%?8?%;background-color:#ff9d00;border-radius:0 4px 4px 0}.f-item.before[data-v-165ab1d4]{border-radius:0 0 %?20?% 0}.f-item.after[data-v-165ab1d4]{border-radius:0 %?20?% 0 0}.f-items[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?100?%;font-size:%?24?%;color:#141313;position:relative}.f-items.active[data-v-165ab1d4]{color:#ff9d00}.right-aside[data-v-165ab1d4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding:0 %?38?%}.t-list[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?24?%}.t-list[data-v-165ab1d4]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;flex:99;height:0}.t-list .t-item[data-v-165ab1d4]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;font-size:%?24?%;color:#141313;padding-bottom:%?20?%}.t-list .t-item .imgwrap[data-v-165ab1d4]{width:100%;height:%?230?%;background:#eee;overflow:hidden;margin-bottom:%?14?%;border-radius:%?20?%}.t-list .t-item .imgwrap uni-image[data-v-165ab1d4]{width:100%;height:100%}.t-list .t-item .name[data-v-165ab1d4]{margin-bottom:%?4?%}.t-list .t-item .price_wrap[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;color:#ff9d00}.t-list .t-item .price_wrap .btn_cart[data-v-165ab1d4]{width:auto;height:%?40?%;line-height:%?40?%;background:#ff9d00;border-radius:%?20?%;font-size:%?20?%;padding:0 %?26?%;margin:0;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.t-list .t-item[data-v-165ab1d4]:nth-child(odd){margin-right:4%}.de_btn_bar[data-v-165ab1d4]{position:fixed;bottom:0;left:0;z-index:50;width:100%;height:%?88?%;background:#fff;box-shadow:0 -1px 1px 0 rgba(0,0,0,.16);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.de_btn_bar .icon_bar[data-v-165ab1d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?20?%;color:#b1b1b1;margin-left:%?44?%}.de_btn_bar .icon_cart[data-v-165ab1d4]{position:relative}.de_btn_bar .icon_cart .num[data-v-165ab1d4]{position:absolute;top:0;right:0;font-size:%?24?%;color:#fff;background:#ff9d00;border-radius:50%;padding:0 %?10?%}.de_btn_bar .btn_cart[data-v-165ab1d4]{margin-left:%?84?%;margin-right:%?52?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?70?%;line-height:%?70?%;background:#ff9d00;border:0;border-radius:%?36?%;font-size:%?24?%;color:#fff}',""]),t.exports=e},fef9:function(t,e,i){"use strict";i.r(e);var n=i("1194"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);