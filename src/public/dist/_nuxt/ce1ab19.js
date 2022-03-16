(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{338:function(e,t,o){var content=o(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("216d491c",content,!0,{sourceMap:!1})},387:function(e,t,o){"use strict";o(338)},388:function(e,t,o){var r=o(55)(!1);r.push([e.i,".detail-wrapper{display:flex;justify-content:space-around}.back-btn{display:inline-block;width:20px;font-size:30px;padding:5px;background-color:#fff;box-shadow:3px 3px 3px rgba(0,0,0,.3)}.back-btn a{text-decoration:none}.booking-form{width:40%;background-color:#4169e1;color:#fff;position:relative;padding:0 20px;border-radius:10px;overflow:hidden}.booking-form input,.booking-form select{display:block;height:30px;margin-bottom:10px}.booking-form input{width:200px}.booking-form select{width:80%}.booking-ttl{font-size:25px;margin:20px 0}.current-booking{margin-top:30px;font-size:1em}.current-booking-status{color:#fff;background-color:#75a9ff;width:80%;margin:20px auto 60px}.current-booking-status td,.current-booking-status th{padding:10px;font-size:1em}.current-booking-status th{width:30%;text-align:left}.booking-change-btn{width:100%;height:40px;font-size:1em;border:none;background-color:#00f;color:#fff;cursor:pointer;position:absolute;bottom:0;left:0}.error{font-size:15px;color:#fa0f42;margin-bottom:5px}@media screen and (max-width:768px){.booking-form{width:90%}.current-booking-status{margin:10px auto 50px}.booking-change-btn{height:30px}}",""]),e.exports=r},407:function(e,t,o){"use strict";o.r(t);var r=o(11),n=(o(39),o(50),o(47),o(19),o(40),o(48),o(199),{data:function(){return{errors:{date:"",time:"",menu_id:"",number_of_people:"",hasOtherBooking:"",remainingSeats:""},form:{date:"",time:"",number:"",menu:"メニューを選んでください"},timeList:[],numberList:[],fromDate:"",untilDate:"",booking:"",shop:"",bookedDate:"",bookedTime:"",bookedNumber:"",bookedMenuName:"",selectedMenuId:"",processing:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n,i,m,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/booking/"+e.$route.params.bookingId);case 2:for(o=t.sent,e.booking=o.data.data,e.shop=e.booking.shop,e.bookedDate=e.booking.date,e.bookedTime=e.booking.time,e.bookedNumber=e.booking.number_of_people,e.bookedMenuName=e.booking.menu.name,r=new Date,n=new Date,r.setDate(r.getDate()+1),n.setMonth(n.getMonth()+1),e.fromDate=r.toISOString().slice(0,10),e.untilDate=n.toISOString().slice(0,10),i=11;i<=21;i++)m=i+":00",e.timeList.push(m),c=i+":30",e.timeList.push(c);for(l=1;l<=e.booking.shop.number_of_seats;l++)d=l+"人",e.numberList.push(d);case 17:case"end":return t.stop()}}),t)})))()},filters:{formatTime:function(time){return time.slice(0,-3)}},methods:{changeBooking:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.processing){t.next=2;break}return t.abrupt("return");case 2:if(t.prev=2,!confirm("この内容で変更してよろしいですか？")){t.next=11;break}return e.processing=!0,Object.keys(e.errors).forEach((function(t){e.errors[t]=""})),"メニューを選んでください"!=e.form.menu&&(o=e.shop.menus.find((function(t){return t.name==e.form.menu})),e.selectedMenuId=o.id),r={shop_id:e.booking.shop.id,date:e.form.date,time:e.form.time,number_of_people:e.form.number.slice(0,-1),booking_id:e.booking.id,menu_id:e.selectedMenuId},t.next=10,e.$axios.put("/booking/"+e.$route.params.bookingId,r);case 10:e.$router.push("/mypage");case 11:t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),n=t.t0.response.data,Object.keys(n.errors).forEach((function(t){e.errors[t]=n.errors[t][0]})),e.processing=!1;case 18:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}}),m=(o(387),o(27)),component=Object(m.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("span",{staticClass:"back-btn"},[o("a",{on:{click:function(t){return e.$router.back()}}},[e._v("<")])]),e._v(" "),o("div",{staticClass:"booking-form"},[o("p",{staticClass:"booking-ttl"},[e._v("予約")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"}],attrs:{type:"date",name:"date",min:e.fromDate,max:e.untilDate,required:""},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}}),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.time,expression:"form.time"}],attrs:{name:"time",id:"time"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"time",t.target.multiple?o:o[0])}}},e._l(e.timeList,(function(time){return o("option",{key:time,domProps:{value:time}},[e._v(e._s(time))])})),0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.number,expression:"form.number"}],attrs:{name:"number_of_people",id:"number",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"number",t.target.multiple?o:o[0])}}},e._l(e.numberList,(function(t){return o("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.menu,expression:"form.menu"}],attrs:{name:"menu",id:"menu",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"menu",t.target.multiple?o:o[0])}}},[o("option",{attrs:{selected:""}},[e._v("メニューを選んでください")]),e._v(" "),e._l(e.shop.menus,(function(menu){return o("option",{key:menu.id,domProps:{value:menu.name}},[e._v(e._s(menu.name))])}))],2),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.date))]),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.time))]),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.number_of_people))]),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.hasOtherBooking))]),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.remainingSeats))]),e._v(" "),o("p",{staticClass:"error"},[e._v(e._s(e.errors.menu_id))]),e._v(" "),o("p",{staticClass:"current-booking"},[e._v("現在の予約日時")]),e._v(" "),o("table",{staticClass:"current-booking-status"},[o("tr",[o("th",[e._v("Shop")]),e._v(" "),o("td",[e._v(e._s(e.shop.name))])]),e._v(" "),o("tr",[o("th",[e._v("Date")]),e._v(" "),o("td",[e._v(e._s(e.bookedDate))])]),e._v(" "),o("tr",[o("th",[e._v("Time")]),e._v(" "),o("td",[e._v(e._s(e._f("formatTime")(e.bookedTime)))])]),e._v(" "),o("tr",[o("th",[e._v("Number")]),e._v(" "),o("td",[e._v(e._s(e.bookedNumber)+"人")])]),e._v(" "),o("tr",[o("th",[e._v("Menu")]),e._v(" "),o("td",[e._v(e._s(e.bookedMenuName))])])]),e._v(" "),o("button",{staticClass:"booking-change-btn",on:{click:e.changeBooking}},[e._v("予約を変更する")])])])}),[],!1,null,null,null);t.default=component.exports}}]);