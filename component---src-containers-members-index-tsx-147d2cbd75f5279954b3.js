(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{282:function(e,a,t){"use strict";t.r(a);t(80);var r=t(0),n=(t(37),t(25)),i=t(265),o=t.n(i),s=t(284),c={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.04,duration:.1}},hidden:{opacity:0,transition:{duration:.1}}},l={visible:{opacity:1,y:0},hidden:{opacity:0,y:20}},u=function(e){var a=e.page,t=e.members;return r.createElement(n.a,null,r.createElement(n.b.div,{key:a,exit:"hidden",variants:c,className:o.a.grid},t.map((function(e){var a=e.name,t=e.profileImage,i=e.nameNotations;return r.createElement(n.b.div,{key:a,variants:l,className:o.a.card},r.createElement(s.a,{image:t,nameKey:a,name:i,highlightBgColor:"#e887a3",highlightTextColor:"#ffffff"}))}))))},d=t(35);t.d(a,"query",(function(){return m}));var m="3900033359";a.default=function(e){var a=e.data.allMembersJson,t=e.pageContext.currentTab,n=r.useMemo((function(){var e={first:[],second:[],third:[],fourth:[],graduated:[]};if(a){var t=a.nodes;e={first:t.filter((function(e){return e.join===d.c.First&&!e.graduation.isGraduated})),second:t.filter((function(e){return e.join===d.c.Second&&!e.graduation.isGraduated})),third:t.filter((function(e){return e.join===d.c.Third&&!e.graduation.isGraduated})),fourth:t.filter((function(e){return e.join===d.c.Fourth&&!e.graduation.isGraduated})),graduated:t.filter((function(e){return e.graduation.isGraduated})).sort((function(e,a){return new Date(a.graduation.graduatedDate).getTime()-new Date(e.graduation.graduatedDate).getTime()}))}}return e}),[a]),i=r.useMemo((function(){switch(t){case d.d.FirstGeneration:return n.first;case d.d.SecondGeneration:return n.second;case d.d.ThirdGeneration:return n.third;case d.d.FourthGeneration:return n.fourth;case d.d.Graduated:return n.graduated;default:return n.first}}),[t,n]);return a?r.createElement(u,{page:t,members:i}):null}},284:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));t(258),t(183),t(37);var r=t(0),n=t(25),i=t(62),o=t(259),s=t.n(o),c=t(5),l=t(87),u=t(257),d=Object(i.d)((function(e){var a=e.image,t=e.nameKey,i=e.name,o=e.intl.locale,d=e.highlightBgColor,m=e.highlightTextColor,f=e.isCenter,g=r.useMemo((function(){return o===c.d.En?i.lastNameEn+" "+i.firstNameEn:i.lastName+" "+i.firstName}),[o,i]),h=r.useMemo((function(){return d?{hover:{scale:1.08,backgroundColor:d}}:{hover:{scale:1.08}}}),[d]),v=r.useMemo((function(){return m?{hover:{color:m}}:void 0}),[m]);return t!==c.c?r.createElement(l.a,{to:"/members/"+t,className:s.a.link},r.createElement(n.b.div,{whileHover:"hover",variants:h,transition:{duration:.3},style:f?{backgroundColor:"#e887a3"}:void 0,className:s.a.container},r.createElement("div",{className:s.a.imageContainer},r.createElement("div",{className:s.a.wrapper},r.createElement(u.a,{src:a.small,srcSet:a.large+" 2x",alt:g,className:s.a.image}))),r.createElement(n.b.div,{variants:v,transition:{duration:.3},style:f?{color:"#ffffff"}:void 0,className:s.a.name},r.createElement("span",null,g)))):r.createElement("div",{style:f?{backgroundColor:"#e887a3"}:void 0,className:s.a.container},r.createElement("div",{className:s.a.imageContainer},r.createElement("div",{className:s.a.wrapper},r.createElement(u.a,{src:a.small,srcSet:a.large+" 2x",alt:g,className:s.a.image}))),r.createElement("div",{style:f?{color:"#ffffff"}:void 0,className:s.a.name},r.createElement("span",null,g)))}))}}]);
//# sourceMappingURL=component---src-containers-members-index-tsx-147d2cbd75f5279954b3.js.map