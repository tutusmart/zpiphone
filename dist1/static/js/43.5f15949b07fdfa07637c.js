webpackJsonp([43],{V3mA:function(t,e){},"dI/j":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"MentorApplication",components:{ViewList:i("p2g1").a},data:function(){return{loading:!1,finished:!1,error:!1,finishedText:"没有更多了",listData:[],listObj:{list:[{field:"学员姓名：",name:"name",leftClass:"gray"},{field:"培训专业：",name:"startDate",leftClass:"gray"},{field:"参加年份：",name:"applyDate",leftClass:"gray"},{field:"培训年限：",name:"reason",leftClass:"gray"}]},resume:"",submit:!0}},methods:{onClickLeft:function(){this.utils.goBack(this)},onClickRight:function(){this.submit=!this.submit},onClickRightop:function(){this.submit=!this.submit},queryData:function(){var t=this,e={auditFlag:"0",currentPage:Math.ceil(this.listData.length/this.$store.state.pageSize)+1,pageSize:this.$store.state.pageSize};this.utils.ajax({url:this.api.queryAuditList,data:e,method:"POST",success:function(e){if(e.content=[{name:"张三",startDate:"呼吸内科",applyDate:"呼吸内科",reason:"食管狭窄扩张术/内镜下食管...",years:"11",person:"200"}],e.content.length){var i=e.content.map(function(t){var e=t;return console.log(t),e.years=e.years+"年",e.person=e.person+"人",e});t.listData=i}}})},ajaxp:function(t,e,i){var a=this;this.utils.ajax({url:e,data:t,method:"POST",success:function(t){a.Toast(i),setTimeout(function(){a.submit=!a.submit},500)}})},preserved:function(){var t=this;this.utils.ajax({url:"",data:{},method:"POST",success:function(e){t.Toast("保存成功")}})}},created:function(){this.queryData()}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("van-nav-bar",{staticClass:"header",attrs:{title:"导师申请",fixed:"","left-arrow":""},on:{"click-left":t.onClickLeft}},[t.submit?i("div",{staticClass:"add-activity",attrs:{slot:"right"},slot:"right"},[i("div",{on:{click:t.onClickRight}},[i("p",[t._v("提交")])])]):t._e(),t._v(" "),t.submit?t._e():i("div",{staticClass:"add-activity",attrs:{slot:"right"},slot:"right"},[i("div",{on:{click:t.onClickRightop}},[i("p",[t._v("撤销")])])])]),t._v(" "),i("div",{staticClass:"layout_content"},[i("ViewList",{attrs:{listObj:t.listObj,listData:t.listData}}),t._v(" "),i("div",{staticClass:"tutor_box"},[i("ul",[i("li",[i("p",[t._v("个人简历")]),t._v(" "),i("van-field",{attrs:{type:"textarea",placeholder:"请输个人简历",required:""},model:{value:t.resume,callback:function(e){t.resume=e},expression:"resume"}})],1)])]),t._v(" "),i("div",{staticClass:"button",on:{click:function(e){return t.preserved()}}},[t._v("保存")])],1)],1)},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("V3mA")},"data-v-262a137c",null);e.default=n.exports}});
//# sourceMappingURL=43.5f15949b07fdfa07637c.js.map