(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{1:function(e,a,t){e.exports={mainApp:"App_mainApp__ZYzp4",red:"App_red__4r0l6",showValue:"App_showValue__3u6S0",mainContainer:"App_mainContainer__Td2TM",mainContainerStop:"App_mainContainerStop__3iALF",showContainer:"App_showContainer__2wHbt",buttonContainer:"App_buttonContainer__3R-bT",error:"App_error__29jyP"}},12:function(e,a,t){e.exports=t(23)},17:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),u=(t(17),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)}))}),o=t(1),s=t.n(o),i=t(9),m=t.n(i),p=function(e){var a=e.callBackClick,t=e.isDisabled,n=e.name;return r.a.createElement("button",{className:m.a.button,disabled:t,onClick:function(){a()}},n)},E=t(3),_=t(2),d={count:0,maxValue:"0",startValue:"0",set:!0,error:!1},b=function(e){return{type:"SET_COUNT",payload:{count:e}}},V=function(e){return{type:"SET_MAX_VALUE",payload:{maxValue:e}}},S=function(e){return{type:"SET_START_VALUE",payload:{startValue:e}}},f=function(e){return{type:"SET_SET",payload:{set:e}}},O=function(e){return{type:"SET_ERROR",payload:{error:e}}},v=function(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.counterReducer}));Object(n.useEffect)((function(){var a=localStorage.getItem("startValue");a&&e(b(JSON.parse(a)))}),[]);return r.a.createElement("div",{className:a.count===+a.maxValue?s.a.mainContainerStop:s.a.mainContainer},r.a.createElement("div",{className:s.a.showContainer},a.set||a.error?r.a.createElement("div",null,a.error?"incorrect value!":"enter value and press SET"):r.a.createElement("div",{className:a.count===+a.maxValue?s.a.red:s.a.showValue},a.count)),r.a.createElement("div",{className:s.a.buttonContainer},r.a.createElement(p,{name:"Increment",callBackClick:function(){a.count<+a.maxValue&&e(b(a.count+1))},isDisabled:a.count===+a.maxValue||a.set}),r.a.createElement(p,{name:"Reset",callBackClick:function(){e(b(+a.startValue))},isDisabled:a.count===+a.startValue||a.set})))},C=function(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.counterReducer}));Object(n.useEffect)((function(){var a=localStorage.getItem("maxValue"),t=localStorage.getItem("startValue");a&&e(V(JSON.parse(a))),t&&e(S(JSON.parse(t)))}),[]);return r.a.createElement("div",{className:s.a.mainApp},r.a.createElement("div",{className:s.a.mainContainer},r.a.createElement("div",{className:s.a.showContainer},r.a.createElement("div",null,r.a.createElement("span",null,"max value:",r.a.createElement("input",{className:a.error?s.a.error:"",type:"number",value:a.maxValue,onChange:function(t){var n=t.currentTarget.value,r=+a.startValue<0||+n<=0||+a.startValue>=+n;e(O(!!r)),e(f(!0)),e(V(n))}})),r.a.createElement("br",null),r.a.createElement("span",null,"start value:",r.a.createElement("input",{className:a.error?s.a.error:"",type:"number",value:a.startValue,onChange:function(t){var n=t.currentTarget.value,r=+n<0||+a.maxValue<=0||+n>=+a.maxValue;e(O(!!r)),e(f(!0)),e(S(n))}})))),r.a.createElement("div",{className:s.a.buttonContainer},r.a.createElement(p,{name:"Set",callBackClick:function(){localStorage.setItem("maxValue",JSON.stringify(parseInt(a.maxValue))),localStorage.setItem("startValue",JSON.stringify(parseInt(a.startValue))),e(f(!1)),e(b(+a.startValue))},isDisabled:!a.set||a.error}))),r.a.createElement(v,null))},T=t(5),g=Object(T.a)({counterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_COUNT":return Object(_.a)(Object(_.a)({},e),{},{count:a.payload.count});case"SET_MAX_VALUE":return Object(_.a)(Object(_.a)({},e),{},{maxValue:a.payload.maxValue});case"SET_START_VALUE":return Object(_.a)(Object(_.a)({},e),{},{startValue:a.payload.startValue});case"SET_SET":return Object(_.a)(Object(_.a)({},e),{},{set:a.payload.set});case"SET_ERROR":return Object(_.a)(Object(_.a)({},e),{},{error:a.payload.error});default:return Object(_.a)({},e)}}}),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.b,A=Object(T.c)(g,y()),j=A;window.store=A,l.a.render(r.a.createElement(E.a,{store:j},r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),document.getElementById("root")),u()},9:function(e,a,t){e.exports={button:"Button_button__3xVnA"}}},[[12,1,2]]]);
//# sourceMappingURL=main.7d9b7957.chunk.js.map