(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return c});var n=t(0),r=t(38),l=t(274),c="1248825594";a.default=function(e){var a=e.data.albumsJson;return a?n.createElement(l.a,{type:r.a.Albums,title:a.title,number:a.number,artworks:a.artworks,songs:a.songs,release:a.release}):null}},274:function(e,a,t){"use strict";t(179);var n=t(0),r=t(60),l=t(23),c=t(252),s=t.n(c),i=t(16),m=(t(22),t(253)),o=t.n(m),u=t(38),d=t(9),E=t(84),b=t(61),v={hover:{backgroundColor:"#595959",transition:{duration:.3}}},h={hover:{color:"#ffffff",transition:{duration:.2}}},f=Object(r.d)(function(e){var a=e.intl.locale,t=e.focusPerformers,r=e.songKey,c=e.number,s=e.title,m=e.type,f=e.className,N=n.useMemo(function(){var e;switch(a){case d.d.Zh:e="、";break;case d.d.Ja:e="・";break;default:e=", "}return t.name.length>0?t.type===u.b.Center?"C: "+t.name.reduce(function(a,t){return a+e+t}):t.name.reduce(function(a,t){return a+e+t}):""},[t,a]);return"OVERTURE"!==r?n.createElement(l.b.div,{whileHover:"hover",variants:v,className:Object(i.a)(o.a.container,f)},n.createElement(E.a,{to:"/songs/"+r},n.createElement(l.b.span,{variants:h,className:o.a.number},c,"."),n.createElement("div",{className:o.a.content},n.createElement(l.b.h3,{variants:h,className:o.a.title},s),n.createElement(l.b.div,{variants:h,className:o.a.description},n.createElement("span",null,"#",n.createElement(b.a,{text:m})),n.createElement("span",null,N))))):n.createElement("div",{className:Object(i.a)(o.a.container,f)},n.createElement("span",{className:o.a.number},c,"."),n.createElement("div",{className:o.a.content},n.createElement("h3",{className:o.a.title},s),n.createElement("div",{className:o.a.description},n.createElement("span",null,"#",n.createElement(b.a,{text:m})),n.createElement("span",null,N))))}),N=t(254),p=t.n(N),k=function(e){var a=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},y=function(e){var a=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},w=function(e){var a=e.artworks,t=e.title,r=e.className,c=n.useState(0),s=c[0],m=c[1],o=n.useCallback(function(){s<a.length-1&&m(s+1)},[a,s]),u=n.useCallback(function(){s>0&&m(s-1)},[s]),d=n.useCallback(function(){s<a.length-1?m(s+1):m(0)},[a,s]);return n.createElement("div",{className:Object(i.a)(p.a.container,r)},n.createElement("div",{className:p.a.artwork},n.createElement(l.b.button,{whileHover:{scale:2,x:-8},onClick:u,"aria-label":"Previous Artwork"},n.createElement(k,{className:p.a.arrow})),n.createElement(l.b.div,{whileHover:{scale:1.07},className:p.a.images},a.map(function(e,a){return n.createElement(l.b.div,{key:a,animate:s===a?{opacity:1,scale:1}:{opacity:0,scale:.5},onClick:d},n.createElement("img",{src:e.medium,srcSet:e.large+" 1.5x",alt:t,className:p.a.image}))})),n.createElement(l.b.button,{whileHover:{scale:2,x:8},onClick:o,"aria-label":"Next Artwork"},n.createElement(y,{className:p.a.arrow}))),n.createElement("div",{className:p.a.indicator},a.map(function(e,a){return n.createElement("button",{key:a,onClick:function(){return m(a)},"aria-label":"Next Artwork"},n.createElement("div",{style:{backgroundColor:a===s?"#757575":"#ffffff"},className:p.a.dot}))})))},g=t(134),x=t(133),C=t(250);t.d(a,"a",function(){return M});var H={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},O={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},j={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},A={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},M=function(e){var a=e.type,t=e.title,c=e.number,m=e.artworks,o=e.songs,v=e.release;return Object(g.b)(),n.createElement("div",{className:s.a.background},n.createElement(x.a,null,n.createElement(l.b.div,{whileHover:{x:-7,scale:1.5},className:s.a.link},n.createElement(E.a,{to:a===u.a.Singles?d.e.Singles:d.e.Albums,label:"Back"},n.createElement(C.a,{className:s.a.back}))),n.createElement(l.b.div,{variants:H,className:s.a.container},n.createElement(l.b.div,{variants:O,className:s.a.heading},n.createElement("h4",{className:s.a.number},Object(i.c)(c)," ",a.slice(0,-1)),n.createElement("h1",{className:s.a.title},t)),n.createElement(l.b.div,{variants:j,className:s.a.flexBox},n.createElement(l.b.div,{variants:A,className:s.a.artworks},n.createElement(w,{artworks:m,title:t})),n.createElement(l.b.div,{variants:A,className:s.a.content},n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(b.a,{text:"track"})),n.createElement("ul",{className:s.a.trackList},o.map(function(e,a){return n.createElement("li",{key:e.key,className:s.a.track},n.createElement(f,{songKey:e.key,number:a+1,title:e.title,type:e.type,focusPerformers:e.focusPerformers}))}))),n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(b.a,{text:"release"})),n.createElement("p",{className:s.a.release},n.createElement(r.a,{value:v,year:"numeric",month:"short",day:"numeric"}))))))))}}}]);
//# sourceMappingURL=component---src-containers-album-index-tsx-ba0c92732a72ea80f7f8.js.map