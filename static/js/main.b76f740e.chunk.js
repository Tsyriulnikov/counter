(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{10:function(e,t,a){e.exports={button:"Button_button__3xVnA"}},13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},2:function(e,t,a){e.exports={mainBlock:"App_mainBlock__2mWfz",mainContainer:"App_mainContainer__Td2TM",setBlock:"App_setBlock__eOzJz",inputBlock:"App_inputBlock__2khYB",setButtonBlock:"App_setButtonBlock__R1rEN",inputTextSpan:"App_inputTextSpan__m09_a"}},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),o=(a(18),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))}),u=a(4),s=a.n(u),i=a(10),m=a.n(i),_=function(e){var t=e.callBackClick,a=e.isDisabled,n=e.name;return c.a.createElement("button",{className:m.a.button,disabled:a,onClick:function(){t()}},n)},p=a(3),E=a(1),d={count:0,maxValue:"0",startValue:"0",set:!0,error:!1},V=function(e){return{type:"SET_COUNT",payload:{count:e}}},S=function(e){return{type:"SET_MAX_VALUE",payload:{maxValue:e}}},b=function(e){return{type:"SET_START_VALUE",payload:{startValue:e}}},B=function(e){return{type:"SET_SET",payload:{set:e}}},k=function(e){return{type:"SET_ERROR",payload:{error:e}}},f=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.counterReducer}));Object(n.useEffect)((function(){var t=localStorage.getItem("startValue");t&&e(V(JSON.parse(t)))}),[]);return c.a.createElement("div",{className:s.a.countBlock},c.a.createElement("div",{className:t.count===+t.maxValue?s.a.showStopBlock:s.a.showBlock},t.set||t.error?c.a.createElement("div",{className:s.a.messageStyle},t.error?"incorrect value!":"enter value and press SET"):c.a.createElement("div",{className:t.count===+t.maxValue?s.a.redValue:s.a.showValue},t.count)),c.a.createElement("div",{className:s.a.countButtonBlock},c.a.createElement(_,{name:"Inc",callBackClick:function(){t.count<+t.maxValue&&e(V(t.count+1))},isDisabled:t.count===+t.maxValue||t.set}),c.a.createElement(_,{name:"Res",callBackClick:function(){e(V(+t.startValue))},isDisabled:t.count===+t.startValue||t.set})))},O=a(2),v=a.n(O),T=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.counterReducer}));Object(n.useEffect)((function(){var t=localStorage.getItem("maxValue"),a=localStorage.getItem("startValue");t&&e(S(JSON.parse(t))),a&&e(b(JSON.parse(a)))}),[]);return c.a.createElement("div",{className:v.a.mainBlock},c.a.createElement("div",{className:v.a.mainContainer},c.a.createElement("div",{className:v.a.setBlock},c.a.createElement("div",{className:v.a.inputBlock},c.a.createElement("span",{className:v.a.inputTextSpan},"max value:",c.a.createElement("input",{className:t.error?v.a.error:"",type:"number",value:t.maxValue,onChange:function(a){var n=a.currentTarget.value,c=+t.startValue<0||+n<=0||+t.startValue>=+n;e(k(!!c)),e(B(!0)),e(S(n))}})),c.a.createElement("br",null),c.a.createElement("span",null,"start value:",c.a.createElement("input",{className:t.error?v.a.error:"",type:"number",value:t.startValue,onChange:function(a){var n=a.currentTarget.value,c=+n<0||+t.maxValue<=0||+n>=+t.maxValue;e(k(!!c)),e(B(!0)),e(b(n))}}))),c.a.createElement("div",{className:v.a.setButtonBlock},c.a.createElement(_,{name:"Set",callBackClick:function(){localStorage.setItem("maxValue",JSON.stringify(parseInt(t.maxValue))),localStorage.setItem("startValue",JSON.stringify(parseInt(t.startValue))),e(B(!1)),e(V(+t.startValue))},isDisabled:!t.set||t.error}))),c.a.createElement(f,null)))},g=a(6),y=Object(g.a)({counterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COUNT":return Object(E.a)(Object(E.a)({},e),{},{count:t.payload.count});case"SET_MAX_VALUE":return Object(E.a)(Object(E.a)({},e),{},{maxValue:t.payload.maxValue});case"SET_START_VALUE":return Object(E.a)(Object(E.a)({},e),{},{startValue:t.payload.startValue});case"SET_SET":return Object(E.a)(Object(E.a)({},e),{},{set:t.payload.set});case"SET_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:t.payload.error});default:return Object(E.a)({},e)}}}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,x=Object(g.c)(y,N()),C=x;window.store=x,l.a.render(c.a.createElement(p.a,{store:C},c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null))),document.getElementById("root")),o()},4:function(e,t,a){e.exports={countBlock:"CounterMain_countBlock__VVWg1",showBlock:"CounterMain_showBlock__33Kdb",countButtonBlock:"CounterMain_countButtonBlock__3F6I3",showStopBlock:"CounterMain_showStopBlock__5M6_m",redValue:"CounterMain_redValue__1pXr0",showValue:"CounterMain_showValue__dyKWs",messageStyle:"CounterMain_messageStyle__wQuk0"}}},[[13,1,2]]]);
//# sourceMappingURL=main.b76f740e.chunk.js.map