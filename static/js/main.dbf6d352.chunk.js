(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{32:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(25),s=c.n(r),i=(c(32),c(9)),j=c(0),d=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("h1",{children:"Weather App"}),Object(j.jsx)("div",{className:"links",children:Object(j.jsx)(i.b,{to:"/",children:" Home"})})]})},l=c(10),h=c(27),b=c.n(h),o=function(e){e.cityName;var t=e.mainData,c=e.name;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title",children:c}),Object(j.jsxs)("h5",{className:"card-subtitle mb-2",children:["Current temperature: ",Math.round(t.temp),"\xb0C"]}),Object(j.jsxs)("p",{className:"card-text",children:["Feels Like: ",Math.round(t.feels_like)," \xb0C"]}),Object(j.jsxs)("p",{className:"card-text",children:["Max: ",Math.round(t.temp_max)," \xb0C, Min:"," ",Math.round(t.temp_min)," \xb0C"]}),Object(j.jsxs)("p",{className:"card-text",children:[" ",Object(j.jsx)("i",{className:"fa fa-tint mr-2","aria-hidden":"true"}),"Humidity: ",t.humidity]})]})})})})},u=function(){var e,t=Object(a.useState)(null),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),d=i[0],h=i[1],u=Object(a.useState)(null),O=Object(l.a)(u,2),x=O[0],m=O[1],p=Object(a.useState)(!1),f=Object(l.a)(p,2),N=f[0],v=f[1],y=Object(a.useState)(!0),w=Object(l.a)(y,2),g=w[0],C=w[1];return Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("input",{type:"text",className:"search-input",placeholder:"Enter yout city name",onChange:function(e){r(e.target.value)}}),Object(j.jsx)("button",{onClick:function(t){v(!0);try{if(!n)throw new Error("Please enter a city name")}catch(c){v(!1),C("Error Ocurred! Try Again...")}b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&APPID=65bd94edd330fcf61fa67b120888b455&units=metric")).then((function(t){if(200!==t.data.cod)throw new Error("Can't fetch the data you want... ");C(!1),v(!1),e=t.data.main,h(t.data.name),m(e),document.querySelector("input").value="",r("")})).catch((function(e){C("Error Ocurred! Try Again..."),v(!1),m(null)})),C(!1),m(null)},children:"Check"}),Object(j.jsx)("br",{}),x&&Object(j.jsx)(o,{cityName:n,mainData:x,name:d}),N&&Object(j.jsx)("div",{children:"Loading... "}),g&&Object(j.jsxs)("h4",{children:[" ",g]}),Object(j.jsx)("br",{})]})},O=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h3",{children:" Search for your city weather"}),Object(j.jsx)(u,{})]})},x=function(){return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("h2",{children:"Sorry"}),Object(j.jsx)("p",{children:"This page dose not exists"}),Object(j.jsx)(i.b,{to:"/",className:"",children:"Back to home page"})]})},m=(c(57),c(2));var p=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:["/","/weather-app/"],children:Object(j.jsx)(O,{})}),Object(j.jsx)(m.a,{path:"*",children:Object(j.jsx)(x,{})})]})})]})})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.dbf6d352.chunk.js.map