webpackJsonp([5],{Gr9r:function(t,e,i){"use strict";var a=i("MJLE"),s=i.n(a),r={name:"Activity",data:function(){return{showImg:!1,activeData:{}}},methods:{setData:function(t){var e=this;return t.forEach(function(t){t.startTime=e.utils.formatDate(t.startTime),t.endTime=e.utils.formatDate(t.endTime),t.timeOfRelease=t.timeOfRelease?e.utils.formatDate(t.timeOfRelease):"",t.release=0!=t.flagOfRelease&&3!=t.flagOfRelease,t.isEdit=0==t.flagOfRelease||3==t.flagOfRelease||2==t.auditFlag,t.del=0!==t.flagOfRelease&&2!==t.auditFlag;var i=e.utils.getTime(t.startTime)>e.utils.getTime(e.$store.state.timestamp);2==t.flagOfRelease&&!t.auditFlag&&i?t.cancelRelease=!1:1==t.flagOfRelease&&2==t.auditFlag?(t.cancelRelease=!0,t.del=!0):t.cancelRelease=0==t.flagOfRelease||2==t.flagOfRelease||3==t.flagOfRelease,2==t.auditFlag?t.img="img_fail":0==t.flagOfRelease?t.img="img_notsubmit":1==t.flagOfRelease?t.img="img_submit":2==t.flagOfRelease?t.img="img_finish":3==t.flagOfRelease&&(t.img="img_unfinish")}),t},operation:function(t,e,i){var a=this,s={ids:t.id},r={url:"",msg:"",index:i};return"release"!==e&&"cancelRelease"!==e||(s.flag="release"===e?"1":"3",r.msg="release"===e?"发布成功":"取消发布成功",r.url=this.api.editReleaseStatus,r.cb=function(t){a.activeList[r.index]=t.data,a.$emit("setActive",a.activeList)},this.btnRequest(s,r)),"edit"===e||"see"===e?(this.$store.state.paramsTeachingId=t.id,this.$router.push({name:"AddActivities",params:{id:t.id,type:e}}),this.$store.state.inputtext="",void(this.$store.state.seeAdd="")):"qr"===e?(this.showImg=!0,this.activeData=t,void this.updateQRcode()):void("del"===e&&(r.url=this.api.delTeaching,r.msg="删除成功",r.cb=function(t){a.activeList.splice(t.index,1)},this.Dialog.confirm({title:"提示",message:"是否确定删除教学活动"}).then(function(){a.btnRequest(s,r)})))},btnRequest:function(t,e){var i=this;this.utils.ajax({method:"POST",data:t,url:e.url,success:function(t){e.data=t,i.Toast(e.msg),e.cb(e)}})},updateQRcode:function(t){var e=this;this.utils.ajax({method:"POST",data:{id:this.activeData.id},url:this.api.queryTeachingQR,success:function(i){var a={effectTime:i.effectTime,onlyMark:i.onlyMark,teachingId:i.teachingId.id};e.$el.querySelector("#qrcode").innerHTML="";var r=e.$store.state.seeQRcode+"?"+e.object2requestSting(a);new s.a("qrcode",{width:200,height:200,text:r,correctLevel:s.a.CorrectLevel.L,typeNumber:5}),t&&t(!1)}})},iterate:function(t,e){for(var i in t)"length"!=i.toString()&&Object.prototype.hasOwnProperty.call(t,i)&&e.call(t,i,t[i])},object2requestSting:function(t){var e="";return this.iterate(t,function(t,i){e+=(e&&e.length>0?"&":"")+t.toString()+"="+i}),e},showQRcode:function(t,e){"confirm"===t?this.updateQRcode(e):e()}},props:["activeList"]},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.activeList.length?i("div",t._l(t.activeList,function(e,a){return i("div",{staticClass:"activity_warp"},[i("div",{staticClass:"activty_content"},[i("p",{staticClass:"van-ellipsis activeTitle"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"grey"},[t._v("发布时间:"+t._s(e.timeOfRelease))]),t._v(" "),i("p",{staticClass:"grey"},[t._v("活动时间:"+t._s(e.startTime)+"~"+t._s(e.endTime))]),t._v(" "),i("div",{staticClass:"img",class:e.img})]),t._v(" "),i("div",{staticClass:"btnList"},[i("button",{class:e.release?"disabled":"",attrs:{disabled:e.release},on:{click:function(i){return t.operation(e,"release",a)}}},[t._v("\n          发布活动\n        ")]),t._v(" "),i("button",{class:e.cancelRelease?"disabled":"",attrs:{disabled:e.cancelRelease},on:{click:function(i){return t.operation(e,"cancelRelease",a)}}},[t._v("取消发布\n        ")]),t._v(" "),e.isEdit?t._e():i("button",{on:{click:function(i){return t.operation(e,"see")}}},[t._v("查看")]),t._v(" "),i("button",{class:e.del?"disabled":"",attrs:{disabled:e.del},on:{click:function(i){return t.operation(e,"del",a)}}},[t._v("删除")]),t._v(" "),i("button",{on:{click:function(i){return t.operation(e,"qr")}}},[t._v("二维码")])])])}),0):i("div",{staticClass:"tip-empty"},[i("span",{staticClass:"icon-emptyface"}),i("span",{staticClass:"text-empty"},[t._v("没有相关信息")])]),t._v(" "),i("van-dialog",{attrs:{"show-cancel-button":"","before-close":t.showQRcode,"confirm-button-text":"更新二维码"},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[i("p",{staticClass:"nameCode"},[t._v(t._s(t.activeData.title))]),t._v(" "),i("div",{staticClass:"towqrcode"},[i("div",{staticClass:"qrcode",attrs:{id:"qrcode"}})])])],1)},staticRenderFns:[]};var o=i("VU/8")(r,n,!1,function(t){i("ZsuC")},"data-v-aa4ba266",null);e.a=o.exports},"HCf+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Gu7T"),s=i.n(a),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.activityList.length?i("div",{staticClass:"head"},t._l(t.activityList,function(e){return i("div",{staticClass:"cont bt"},[i("h3",[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"p"},[t._v("活动类型： "+t._s(t.utils.getValueByKey(t.$store.state.activitiesType,e.type)))]),t._v(" "),i("p",{staticClass:"p"},[t._v("开始时间： "+t._s(e.startTime))]),t._v(" "),i("p",{staticClass:"p"},[t._v("结束时间： "+t._s(e.endTime))]),t._v(" "),i("p",{staticClass:"p"},[t._v("活动时长： "+t._s(e.classHour))]),t._v(" "),i("div",{staticClass:"look"},[i("p",{staticClass:"p"},[t._v("发布时间： "+t._s(e.timeOfRelease))]),t._v(" "),i("p",{staticClass:"check a",on:{click:function(i){return t.look(e)}}},[t._v("查看")])])])}),0):i("div",{staticClass:"tip-empty"},[i("span",{staticClass:"icon-emptyface"}),i("span",{staticClass:"text-empty"},[t._v("没有相关信息")])])])},staticRenderFns:[]};var n={name:"ActivityManage",components:{AuditActivitiesLinst:i("VU/8")({name:"AuditActivitiesLinst",props:["activityList"],components:{},data:function(){return{}},methods:{look:function(t){this.$router.push({name:"LookAttendance",params:{id:t.id,isPreview:1}})}},created:function(){}},r,!1,function(t){i("SS1+")},"data-v-73a6debe",null).exports,Activity:i("Gr9r").a},data:function(){return{active:0,rightShow:!1,tabs:[{loading:!1,finished:!1,error:!1,finishedText:"没有更多了",scrollTop:0,listData:[]},{loading:!1,finished:!1,error:!1,finishedText:"没有更多了",scrollTop:0,listData:[]}]}},methods:{onClickLeft:function(){this.$store.state.tabActive=0,this.utils.goBack(this),this.$store.state.inputtext="",this.$store.state.paramsTeachingId=""},onClickRight:function(){this.$store.state.DepartmentEcho="",this.$router.push({name:"AddActivities",params:{}}),this.$store.state.inputtext="添加"},onLoad:function(){0==this.active?this.getAuditActivityList():this.getPublishingActivityList()},change:function(t,e){var i=this;this.$nextTick(function(){i.$refs.layoutContent.scrollTop=i.tabs[i.active].scrollTop}),this.$store.state.tabActive=this.active,1==this.active?this.rightShow=!0:this.rightShow=!1},scroll:function(){this.tabs[this.active].scrollTop=this.$refs.layoutContent.scrollTop},getAuditActivityList:function(){var t=this.tabs[this.active],e={auditFlag:"0",currentPage:Math.ceil(t.listData.length/this.$store.state.pageSize)+1,pageSize:this.$store.state.pageSize};this.utils.ajax({url:this.api.auditActivityList,data:e,method:"POST",success:function(i){i.content.length?t.listData=[].concat(s()(t.listData),s()(i.content)):t.finishedText="",t.loading=!1,e.currentPage>=i.totalPages&&(t.finished=!0)},error:function(e){t.loading=!1,t.error=!0}},!0)},getPublishingActivityList:function(){var t=this,e=this.tabs[this.active],i={currentPage:Math.ceil(e.listData.length/5)+1,pageSize:this.$store.state.pageSize};this.utils.ajax({url:this.api.teachingList,data:i,method:"POST",success:function(a){a.content.length?e.listData=[].concat(s()(e.listData),s()(a.content)):e.finishedText="",e.loading=!1,i.currentPage>=a.totalPages&&(e.finished=!0),t.setActive(e.listData)},error:function(t){e.loading=!1,e.error=!0}},!0)},setActive:function(t){this.tabs[this.active].listData=[].concat(s()(this.$refs.activeFn.setData(t)))}},created:function(){this.active=this.$store.state.tabActive,1==this.active?this.rightShow=!0:this.rightShow=!1}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{staticClass:"header",attrs:{title:"活动管理",fixed:"","left-arrow":""},on:{"click-left":t.onClickLeft}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"add-activity",attrs:{slot:"right"},slot:"right"})]),t._v(" "),i("div",{ref:"layoutContent",staticClass:"layout_content",on:{scroll:function(e){return t.scroll()}}},[i("van-list",{attrs:{finished:t.tabs[0].finished,error:t.tabs[0].error,"error-text":"请求失败，点击重新加载","finished-text":t.tabs[0].finishedText,"immediate-check":"",offset:50},on:{"update:error":function(e){return t.$set(t.tabs[0],"error",e)},load:function(e){return t.onLoad()}},model:{value:t.tabs[0].loading,callback:function(e){t.$set(t.tabs[0],"loading",e)},expression:"tabs[0].loading"}},[i("AuditActivitiesLinst",{attrs:{activityList:t.tabs[0].listData}})],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(n,o,!1,function(t){i("xs4V")},"data-v-5d5a235b",null);e.default=l.exports},MJLE:function(t,e,i){var a,s;s=function(){function t(t){this.mode=i.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,a=this.data.length;e<a;e++){var s=[],r=this.data.charCodeAt(e);r>65536?(s[0]=240|(1835008&r)>>>18,s[1]=128|(258048&r)>>>12,s[2]=128|(4032&r)>>>6,s[3]=128|63&r):r>2048?(s[0]=224|(61440&r)>>>12,s[1]=128|(4032&r)>>>6,s[2]=128|63&r):r>128?(s[0]=192|(1984&r)>>>6,s[1]=128|63&r):s[0]=r,this.parsedData.push(s)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;e<i;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var i=new t(e);this.dataList.push(i),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,i){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var s=0;s<this.moduleCount;s++)this.modules[a][s]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,i),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,i)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var a=-1;a<=7;a++)e+a<=-1||this.moduleCount<=e+a||(this.modules[t+i][e+a]=0<=i&&i<=6&&(0==a||6==a)||0<=a&&a<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=a&&a<=4)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;i<8;i++){this.makeImpl(!0,i);var a=f.getLostPoint(this);(0==i||t>a)&&(t=a,e=i)}return e},createMovieClip:function(t,e,i){var a=t.createEmptyMovieClip(e,i);this.make();for(var s=0;s<this.modules.length;s++)for(var r=1*s,n=0;n<this.modules[s].length;n++){var o=1*n;this.modules[s][n]&&(a.beginFill(0,100),a.moveTo(o,r),a.lineTo(o+1,r),a.lineTo(o+1,r+1),a.lineTo(o,r+1),a.endFill())}return a},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var a=t[e],s=t[i];if(null==this.modules[a][s])for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.modules[a+r][s+n]=-2==r||2==r||-2==n||2==n||0==r&&0==n}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var a=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=a}for(i=0;i<18;i++){a=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=a}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,a=f.getBCHTypeInfo(i),s=0;s<15;s++){var r=!t&&1==(a>>s&1);s<6?this.modules[s][8]=r:s<8?this.modules[s+1][8]=r:this.modules[this.moduleCount-15+s][8]=r}for(s=0;s<15;s++){r=!t&&1==(a>>s&1);s<8?this.modules[8][this.moduleCount-s-1]=r:s<9?this.modules[8][15-s-1+1]=r:this.modules[8][15-s-1]=r}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,a=this.moduleCount-1,s=7,r=0,n=this.moduleCount-1;n>0;n-=2)for(6==n&&n--;;){for(var o=0;o<2;o++)if(null==this.modules[a][n-o]){var l=!1;r<t.length&&(l=1==(t[r]>>>s&1)),f.getMask(e,a,n-o)&&(l=!l),this.modules[a][n-o]=l,-1==--s&&(r++,s=7)}if((a+=i)<0||this.moduleCount<=a){a-=i,i=-i;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,i,a){for(var s=m.getRSBlocks(t,i),r=new _,n=0;n<a.length;n++){var o=a[n];r.put(o.mode,4),r.put(o.getLength(),f.getLengthInBits(o.mode,t)),o.write(r)}var l=0;for(n=0;n<s.length;n++)l+=s[n].dataCount;if(r.getLengthInBits()>8*l)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*l+")");for(r.getLengthInBits()+4<=8*l&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*l||(r.put(e.PAD0,8),r.getLengthInBits()>=8*l));)r.put(e.PAD1,8);return e.createBytes(r,s)},e.createBytes=function(t,e){for(var i=0,a=0,s=0,r=new Array(e.length),n=new Array(e.length),o=0;o<e.length;o++){var l=e[o].dataCount,h=e[o].totalCount-l;a=Math.max(a,l),s=Math.max(s,h),r[o]=new Array(l);for(var u=0;u<r[o].length;u++)r[o][u]=255&t.buffer[u+i];i+=l;var c=f.getErrorCorrectPolynomial(h),d=new v(r[o],c.getLength()-1).mod(c);n[o]=new Array(c.getLength()-1);for(u=0;u<n[o].length;u++){var g=u+d.getLength()-n[o].length;n[o][u]=g>=0?d.get(g):0}}var p=0;for(u=0;u<e.length;u++)p+=e[u].totalCount;var m=new Array(p),_=0;for(u=0;u<a;u++)for(o=0;o<e.length;o++)u<r[o].length&&(m[_++]=r[o][u]);for(u=0;u<s;u++)for(o=0;o<e.length;o++)u<n[o].length&&(m[_++]=n[o][u]);return m};for(var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},r=0,n=1,o=2,l=3,h=4,u=5,c=6,d=7,f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case r:return(e+i)%2==0;case n:return e%2==0;case o:return i%3==0;case l:return(e+i)%3==0;case h:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case u:return e*i%2+e*i%3==0;case c:return(e*i%2+e*i%3)%2==0;case d:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new v([1],0),i=0;i<t;i++)e=e.multiply(new v([1,g.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,a=0;a<e;a++)for(var s=0;s<e;s++){for(var r=0,n=t.isDark(a,s),o=-1;o<=1;o++)if(!(a+o<0||e<=a+o))for(var l=-1;l<=1;l++)s+l<0||e<=s+l||0==o&&0==l||n==t.isDark(a+o,s+l)&&r++;r>5&&(i+=3+r-5)}for(a=0;a<e-1;a++)for(s=0;s<e-1;s++){var h=0;t.isDark(a,s)&&h++,t.isDark(a+1,s)&&h++,t.isDark(a,s+1)&&h++,t.isDark(a+1,s+1)&&h++,0!=h&&4!=h||(i+=3)}for(a=0;a<e;a++)for(s=0;s<e-6;s++)t.isDark(a,s)&&!t.isDark(a,s+1)&&t.isDark(a,s+2)&&t.isDark(a,s+3)&&t.isDark(a,s+4)&&!t.isDark(a,s+5)&&t.isDark(a,s+6)&&(i+=40);for(s=0;s<e;s++)for(a=0;a<e-6;a++)t.isDark(a,s)&&!t.isDark(a+1,s)&&t.isDark(a+2,s)&&t.isDark(a+3,s)&&t.isDark(a+4,s)&&!t.isDark(a+5,s)&&t.isDark(a+6,s)&&(i+=40);var u=0;for(s=0;s<e;s++)for(a=0;a<e;a++)t.isDark(a,s)&&u++;return i+=10*(Math.abs(100*u/e/e-50)/5)}},g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)g.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)g.EXP_TABLE[p]=g.EXP_TABLE[p-4]^g.EXP_TABLE[p-5]^g.EXP_TABLE[p-6]^g.EXP_TABLE[p-8];for(p=0;p<255;p++)g.LOG_TABLE[g.EXP_TABLE[p]]=p;function v(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var a=0;a<t.length-i;a++)this.num[a]=t[a+i]}function m(t,e){this.totalCount=t,this.dataCount=e}function _(){this.buffer=[],this.length=0}v.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var a=0;a<t.getLength();a++)e[i+a]^=g.gexp(g.glog(this.get(i))+g.glog(t.get(a)));return new v(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),i=new Array(this.getLength()),a=0;a<this.getLength();a++)i[a]=this.get(a);for(a=0;a<t.getLength();a++)i[a]^=g.gexp(g.glog(t.get(a))+e);return new v(i,0).mod(t)}},m.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m.getRSBlocks=function(t,e){var i=m.getRsBlockTable(t,e);if(void 0==i)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var a=i.length/3,s=[],r=0;r<a;r++)for(var n=i[3*r+0],o=i[3*r+1],l=i[3*r+2],h=0;h<n;h++)s.push(new m(o,l));return s},m.getRsBlockTable=function(t,e){switch(e){case s.L:return m.RS_BLOCK_TABLE[4*(t-1)+0];case s.M:return m.RS_BLOCK_TABLE[4*(t-1)+1];case s.Q:return m.RS_BLOCK_TABLE[4*(t-1)+2];case s.H:return m.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},_.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function w(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var i=e.toString().match(/android ([0-9]\.[0-9])/i);i&&i[1]&&(t=parseFloat(i[1]))}return t}var y=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,i=this._el,a=t.getModuleCount();Math.floor(e.width/a),Math.floor(e.height/a);function s(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var a in e)e.hasOwnProperty(a)&&i.setAttribute(a,e[a]);return i}this.clear();var r=s("svg",{viewBox:"0 0 "+String(a)+" "+String(a),width:"100%",height:"100%",fill:e.colorLight});r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.appendChild(r),r.appendChild(s("rect",{fill:e.colorLight,width:"100%",height:"100%"})),r.appendChild(s("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var n=0;n<a;n++)for(var o=0;o<a;o++)if(t.isDark(n,o)){var l=s("use",{x:String(o),y:String(n)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),r.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),b="svg"===document.documentElement.tagName.toLowerCase()?y:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,i=this._el,a=t.getModuleCount(),s=Math.floor(e.width/a),r=Math.floor(e.height/a),n=['<table style="border:0;border-collapse:collapse;">'],o=0;o<a;o++){n.push("<tr>");for(var l=0;l<a;l++)n.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+s+"px;height:"+r+"px;background-color:"+(t.isDark(o,l)?e.colorDark:e.colorLight)+';"></td>');n.push("</tr>")}n.push("</table>"),i.innerHTML=n.join("");var h=i.childNodes[0],u=(e.width-h.offsetWidth)/2,c=(e.height-h.offsetHeight)/2;u>0&&c>0&&(h.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,a,s,r,n,o,l,h,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else void 0===h&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);i.apply(this,arguments)}}var a=function(t,e){this._bIsPainted=!1,this._android=w(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return a.prototype.draw=function(t){var e=this._elImage,i=this._oContext,a=this._htOption,s=t.getModuleCount(),r=a.width/s,n=a.height/s,o=Math.round(r),l=Math.round(n);e.style.display="none",this.clear();for(var h=0;h<s;h++)for(var u=0;u<s;u++){var c=t.isDark(h,u),d=u*r,f=h*n;i.strokeStyle=c?a.colorDark:a.colorLight,i.lineWidth=1,i.fillStyle=c?a.colorDark:a.colorLight,i.fillRect(d,f,r,n),i.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,o,l),i.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,o,l)}this._bIsPainted=!0},a.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var i=this;if(i._fFail=e,i._fSuccess=t,null===i._bSupportDataURI){var a=document.createElement("img"),s=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)};return a.onabort=s,a.onerror=s,a.onload=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)},void(a.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===i._bSupportDataURI&&i._fSuccess?i._fSuccess.call(i):!1===i._bSupportDataURI&&i._fFail&&i._fFail.call(i)}.call(this,t)},a.prototype.isPainted=function(){return this._bIsPainted},a.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},a.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},a}();function D(t,e){for(var i=1,a=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),r=0,n=C.length;r<=n;r++){var o=0;switch(e){case s.L:o=C[r][0];break;case s.M:o=C[r][1];break;case s.Q:o=C[r][2];break;case s.H:o=C[r][3]}if(a<=o)break;i++}if(i>C.length)throw new Error("Too long data");return i}return(a=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:s.H},"string"==typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(b=y),this._android=w(),this._el=t,this._oQRCode=null,this._oDrawing=new b(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(D(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},a.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},a.prototype.clear=function(){this._oDrawing.clear()},a.CorrectLevel=s,a},t.exports=s()},"SS1+":function(t,e){},ZsuC:function(t,e){},xs4V:function(t,e){}});
//# sourceMappingURL=5.e5f796b506690596ae74.js.map