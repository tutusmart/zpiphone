webpackJsonp([39],{"t/v2":function(t,i){},tG8S:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("Gu7T"),e=a.n(n),s={name:"ClinicConsilia",components:{ViewList:a("p2g1").a},data:function(){return{loading:!1,finished:!1,error:!1,finishedText:"没有更多了",listData:[]}},methods:{onClickLeft:function(){this.utils.goBack(this)},onClickRight:function(t){console.log(1111)},onLoad:function(){this.queryData()},click:function(t){console.log(t.isSignUp),1==t.isSignUp&&(console.log("正常"),this.$router.push({name:"BasisRecord",params:{}})),2==t.isSignUp&&console.log("通过"),3==t.isSignUp&&console.log("不通过")},queryData:function(){var t=this,i={auditFlag:"0",currentPage:Math.ceil(this.listData.length/this.$store.state.pageSize)+1,pageSize:this.$store.state.pageSize};this.utils.ajax({url:this.api.queryAuditList,data:i,method:"POST",success:function(a){if(a.content=[{name:"张三",startDate:"呼吸内科",writeTime:"2019-03-12 18:00",isSignUp:1},{name:"李三",startDate:"呼吸内科",writeTime:"2019-03-12 18:00",isSignUp:2},{name:"王二",startDate:"呼吸内科",writeTime:"2019-03-12 18:00",isSignUp:3}],a.content.length){var n=a.content.map(function(t){var i=t;return 1==i.isSignUp&&(i.img="img"),2==i.isSignUp&&(i.img="img1"),3==i.isSignUp&&(i.img="img3"),i});t.listData=[].concat(e()(t.listData),e()(n))}else t.finishedText="";t.loading=!1,i.currentPage>=a.totalPages&&(t.finished=!0)}})}},created:function(){}},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{},[a("div",{staticClass:"header van-nav-bar van-nav-bar--fixed van-hairline--bottom",staticStyle:{"z-index":"1"},attrs:{"data-v-0f4718e4":""}},[a("div",{staticClass:"van-nav-bar__left",attrs:{"data-v-0f4718e4":""},on:{click:t.onClickLeft}},[a("i",{staticClass:"van-icon van-icon-arrow-left van-nav-bar__arrow",attrs:{"data-v-0f4718e4":""}})]),t._v(" "),a("div",{staticClass:"van-nav-bar__title van-ellipsis tosa",attrs:{"data-v-0f4718e4":""}},[t._v("临床医案")]),t._v(" "),a("div",{staticClass:"van-nav-bar__right",attrs:{"data-v-0f4718e4":""},on:{click:t.onClickRight}},[a("van-icon",{attrs:{name:"ellipsis",size:"1.8em"}})],1)]),t._v(" "),a("div",{staticClass:"layout_content"},[a("van-list",{attrs:{finished:t.finished,error:t.error,"error-text":"请求失败，点击重新加载","finished-text":t.finishedText,"immediate-check":"",offset:50},on:{"update:error":function(i){t.error=i},load:function(i){return t.onLoad()}},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.listData,function(i){return a("div",[a("div",{staticClass:"clinic_box",on:{click:function(a){return t.click(i)}}},[a("ul",[a("li",[a("span",{staticClass:"gray"},[t._v("患者姓名：")]),t._v(" "),a("span",[t._v(t._s(i.name))])]),t._v(" "),a("li",[a("span",{staticClass:"gray"},[t._v("中医诊断：")]),t._v(" "),a("span",[t._v(t._s(i.startDate))])]),t._v(" "),a("li",[a("span",{staticClass:"gray"},[t._v("记录时间：")]),t._v(" "),a("span",[t._v(t._s(i.writeTime))])])]),t._v(" "),a("div",{class:i.img})])])}),0)],1)])},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("t/v2")},"data-v-3d042a8e",null);i.default=o.exports}});
//# sourceMappingURL=39.e2c3b83d9eb83e87893c.js.map