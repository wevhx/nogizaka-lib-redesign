(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a(38),a(14);var n,r,l=a(0),c=a(1),s=a(84),i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts"}(r||(r={}));function m(e){var t=function(t){return l.createElement(s.a.Consumer,null,(function(a){Object(c.h)(a);var n=t.value,r=t.children,l=i(t,["value","children"]),s="string"==typeof n?new Date(n||0):n;return r("formatDate"===e?a.formatDateToParts(s,l):a.formatTimeToParts(s,l))}))};return t.displayName=r[e],t}function o(e){var t=function(t){return l.createElement(s.a.Consumer,null,(function(a){Object(c.h)(a);var n=t.value,r=t.children,s=i(t,["value","children"]),m=a[e](n,s);if("function"==typeof r)return r(m);var o=a.textComponent||l.Fragment;return l.createElement(o,null,m)}))};return t.displayName=n[e],t}a.d(t,"a",(function(){return u}));var u=o("formatDate");o("formatTime"),o("formatNumber"),m("formatDate"),m("formatTime")},286:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));var n=a(0),r=a(36),l=a(311),c="1137976173";t.default=function(e){var t=e.data.singlesJson;return t?n.createElement(l.a,{type:r.a.Singles,title:t.title,number:t.number,artworks:t.artworks,songs:t.songs,release:t.release}):null}},303:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},311:function(e,t,a){"use strict";a(195);var n=a(0),r=a(146),l=a(12),c=a(278),s=a.n(c),i=a(17),m=a(84),o=a(279),u=a.n(o),f=a(44),v=a(20),d={hover:{backgroundColor:"#595959",transition:{duration:.3}}},b={hover:{color:"#ffffff",transition:{duration:.2}}},E=Object(m.c)((function(e){var t=e.intl.locale,a=e.focusPerformers,r=e.songKey,c=e.number,s=e.title,m=e.type,o=e.className,E=n.useMemo((function(){return Object(i.b)(a,t)}),[a,t]);return"OVERTURE"!==r?n.createElement(l.b.div,{whileHover:"hover",variants:d,className:Object(i.a)(u.a.container,o)},n.createElement(f.a,{to:"/songs/"+r},n.createElement(l.b.span,{variants:b,className:u.a.number},c,"."),n.createElement("div",{className:u.a.content},n.createElement(l.b.h3,{variants:b,className:u.a.title},s),n.createElement(l.b.div,{variants:b,className:u.a.description},n.createElement("span",null,"#",n.createElement(v.a,{text:m})),n.createElement("span",null,E))))):n.createElement("div",{className:Object(i.a)(u.a.container,o)},n.createElement("span",{className:u.a.number},c,"."),n.createElement("div",{className:u.a.content},n.createElement("h3",{className:u.a.title},s),n.createElement("div",{className:u.a.description},n.createElement("span",null,"#",n.createElement(v.a,{text:m})),n.createElement("span",null,E))))})),h=a(36),N=a(280),p=a.n(N),y=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},g=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},w=function(e){var t=e.artworks,a=e.title,r=e.className,c=n.useState(0),s=c[0],m=c[1],o=n.useCallback((function(){s<t.length-1?m(s+1):m(0)}),[t,s]),u=n.useCallback((function(){m(s>0?s-1:t.length-1)}),[t,s]);return n.createElement("div",{className:Object(i.a)(p.a.container,r)},n.createElement("div",{className:p.a.artwork},n.createElement(l.b.button,{whileHover:{scale:2,x:-8},onClick:u,"aria-label":"Previous Artwork"},n.createElement(y,{className:p.a.arrow})),n.createElement(l.b.div,{whileHover:{scale:1.07},className:p.a.images},t.map((function(e,t){return n.createElement(l.b.img,{key:t,animate:s===t?{opacity:1,scale:1}:{opacity:0,scale:0},onClick:o,src:e.medium,srcSet:e.large+" 1.5x",alt:a,className:p.a.image})}))),n.createElement(l.b.button,{whileHover:{scale:2,x:8},onClick:o,"aria-label":"Next Artwork"},n.createElement(g,{className:p.a.arrow}))),n.createElement("div",{className:p.a.indicator},t.map((function(e,t){return n.createElement("button",{key:t,onClick:function(){return m(t)},"aria-label":"Next Artwork"},n.createElement("div",{style:{backgroundColor:t===s?"#757575":"#ffffff"},className:p.a.dot}))}))))},k=a(3),x=a(148),O=a(147),C=a(303);a.d(t,"a",(function(){return D}));var j={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},P={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},H={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},T={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},D=function(e){var t=e.type,a=e.title,c=e.number,m=e.artworks,o=e.songs,u=e.release;return Object(x.b)(),n.createElement("div",{className:s.a.background},n.createElement(O.a,null,n.createElement(l.b.div,{whileHover:{x:-7,scale:1.5},className:s.a.link},n.createElement(f.a,{to:t===h.a.Singles?k.e.Singles:k.e.Albums,label:"Back"},n.createElement(C.a,{className:s.a.back}))),n.createElement(l.b.div,{variants:j,className:s.a.container},n.createElement(l.b.div,{variants:P,className:s.a.heading},n.createElement("h4",{className:s.a.number},Object(i.d)(c)," ",t.slice(0,-1)),n.createElement("h1",{className:s.a.title},a)),n.createElement(l.b.div,{variants:H,className:s.a.flexBox},n.createElement(l.b.div,{variants:T,className:s.a.artworks},n.createElement(w,{artworks:m,title:a})),n.createElement(l.b.div,{variants:T,className:s.a.content},n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(v.a,{text:"track"})),n.createElement("ul",{className:s.a.trackList},o.map((function(e,t){return n.createElement("li",{key:e.key,className:s.a.track},n.createElement(E,{songKey:e.key,number:t+1,title:e.title,type:e.type,focusPerformers:e.focusPerformers}))})))),n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(v.a,{text:"release"})),n.createElement("p",{className:s.a.release},n.createElement(r.a,{value:u,year:"numeric",month:"short",day:"numeric"}))))))))}}}]);
//# sourceMappingURL=component---src-containers-single-index-tsx-281bbdfd873571956fc8.js.map