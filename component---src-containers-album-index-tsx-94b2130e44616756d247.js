(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return c});var n=t(0),r=t(38),l=t(271),c="1248825594";a.default=function(e){var a=e.data.albumsJson;return a?n.createElement(l.a,{type:r.a.Albums,title:a.title,number:a.number,artworks:a.artworks,songs:a.songs,release:a.release}):null}},268:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(0),r=function(e){var a=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},271:function(e,a,t){"use strict";t(176);var n=t(0),r=t(21),l=t(243),c=t.n(l),s=(t(23),t(244)),i=t.n(s),m=t(38),o=t(35),u=t(9),d=t(33),E=t(83),b={hover:{backgroundColor:"#595959",transition:{duration:.3}}},v={hover:{color:"#ffffff",transition:{duration:.2}}},h=Object(o.d)(function(e){var a=e.intl.locale,t=e.focusPerformers,l=e.songKey,c=e.number,s=e.title,h=e.type,f=e.className,N=n.useMemo(function(){var e;switch(a){case u.d.Zh:e="、";break;case u.d.Ja:e="・";break;default:e=", "}return t.name.length>0?t.type===m.b.Center?"C: "+t.name.reduce(function(a,t){return a+e+t}):t.name.reduce(function(a,t){return a+e+t}):""},[t,a]);return"OVERTURE"!==l?n.createElement(d.b.div,{whileHover:"hover",variants:b,className:Object(r.a)(i.a.container,f)},n.createElement(E.a,{to:"/songs/"+l},n.createElement(d.b.span,{variants:v,className:i.a.number},c,"."),n.createElement("div",{className:i.a.content},n.createElement(d.b.h3,{variants:v,className:i.a.title},s),n.createElement(d.b.div,{variants:v,className:i.a.description},n.createElement("span",null,"#",n.createElement(o.b,{id:h})),n.createElement("span",null,N))))):n.createElement("div",{className:Object(r.a)(i.a.container,f)},n.createElement("span",{className:i.a.number},c,"."),n.createElement("div",{className:i.a.content},n.createElement("h3",{className:i.a.title},s),n.createElement("div",{className:i.a.description},n.createElement("span",null,"#",n.createElement(o.b,{id:h})),n.createElement("span",null,N))))}),f=t(245),N=t.n(f),p=function(e){var a=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},k=function(e){var a=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},w=function(e){var a=e.artworks,t=e.title,l=e.className,c=n.useState(0),s=c[0],i=c[1],m=n.useCallback(function(){s<a.length-1&&i(s+1)},[a,s]),o=n.useCallback(function(){s>0&&i(s-1)},[s]),u=n.useCallback(function(){s<a.length-1?i(s+1):i(0)},[a,s]);return n.createElement("div",{className:Object(r.a)(N.a.container,l)},n.createElement("div",{className:N.a.artwork},n.createElement(d.b.button,{whileHover:{scale:2,x:-8},onClick:o,"aria-label":"Previous Artwork"},n.createElement(p,{className:N.a.arrow})),n.createElement(d.b.div,{whileHover:{scale:1.07},className:N.a.images},a.map(function(e,a){return n.createElement(d.b.img,{key:a,animate:s===a?{opacity:1,scale:1}:{opacity:0,scale:.5},src:e.medium,srcSet:e.large+" 1.5x",alt:t,onClick:u,className:N.a.image})})),n.createElement(d.b.button,{whileHover:{scale:2,x:8},onClick:m,"aria-label":"Next Artwork"},n.createElement(k,{className:N.a.arrow}))),n.createElement("div",{className:N.a.indicator},a.map(function(e,a){return n.createElement("button",{key:a,onClick:function(){return i(a)},"aria-label":"Next Artwork"},n.createElement("div",{style:{backgroundColor:a===s?"#757575":"#ffffff"},className:N.a.dot}))})))},y=t(133),g=t(132),x=t(268);t.d(a,"a",function(){return j});var C={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},H={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},M={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},O={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},j=function(e){var a=e.type,t=e.title,l=e.number,s=e.artworks,i=e.songs,b=e.release;return Object(y.b)(),n.createElement("div",{className:c.a.background},n.createElement(g.a,null,n.createElement(d.b.div,{whileHover:{x:-7,scale:1.5},className:c.a.link},n.createElement(E.a,{to:a===m.a.Singles?u.e.Singles:u.e.Albums,label:"Back"},n.createElement(x.a,{className:c.a.back}))),n.createElement(d.b.div,{variants:C,className:c.a.container},n.createElement(d.b.div,{variants:H,className:c.a.heading},n.createElement("h4",{className:c.a.number},Object(r.c)(l)," ",a.slice(0,-1)),n.createElement("h1",{className:c.a.title},t)),n.createElement(d.b.div,{variants:M,className:c.a.flexBox},n.createElement(d.b.div,{variants:O,className:c.a.artworks},n.createElement(w,{artworks:s,title:t})),n.createElement(d.b.div,{variants:O,className:c.a.content},n.createElement("section",{className:c.a.section},n.createElement("h2",{className:c.a.subheading},n.createElement(o.b,{id:"track"})),n.createElement("ul",{className:c.a.trackList},i.map(function(e,a){return n.createElement("li",{key:e.key,className:c.a.track},n.createElement(h,{songKey:e.key,number:a+1,title:e.title,type:e.type,focusPerformers:e.focusPerformers}))}))),n.createElement("section",{className:c.a.section},n.createElement("h2",{className:c.a.subheading},n.createElement(o.b,{id:"release"})),n.createElement("p",{className:c.a.release},n.createElement(o.a,{value:b,year:"numeric",month:"short",day:"numeric"}))))))))}}}]);
//# sourceMappingURL=component---src-containers-album-index-tsx-94b2130e44616756d247.js.map