(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a(245),c=a(256),i="1248825594";t.default=function(e){var t=e.data.albumsJson;return t?n.createElement(c.a,{type:r.a.Albums,title:t.title,number:t.number,artworks:t.artworks,songs:t.songs,release:t.release}):null}},242:function(e,t,a){var n=a(8),r=a(10),c=a(46),i=/"/g,l=function(e,t,a,n){var r=String(c(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},243:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a(220),c=a.n(r),i=a(68),l=function(e){var t=e.children,a=e.className;return n.createElement("div",{className:Object(i.a)(c.a.container,a)},t)}},244:function(e,t,a){"use strict";a(242)("link",function(e){return function(t){return e(this,"a","href",t)}})},245:function(e,t,a){"use strict";var n,r,c,i,l;a.d(t,"a",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return l}),function(e){e.Singles="singles",e.Albums="albums"}(n||(n={})),function(e){e.FirstGeneration="first-gen",e.SecondGeneration="second-gen",e.ThirdGeneration="third-gen",e.FourthGeneration="fourth-gen",e.Graduated="graduated"}(r||(r={})),function(e){e.Center="center",e.Solo="solo",e.Unit="unit",e.None=""}(c||(c={})),function(e){e.None="none",e.Title="title",e.Coupling="coupling",e.Lead="lead",e.Under="under",e.Unit="unit",e.Solo="solo",e.FirstGeneration="first generation",e.SecondGeneration="second generation",e.ThirdGeneration="third generation",e.FourthGeneration="fourth generation",e.Special="special"}(i||(i={})),function(e){e.First="first",e.Second="second",e.Third="third",e.Fourth="fourth",e.Exchange="exchange"}(l||(l={}))},252:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),r=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},256:function(e,t,a){"use strict";a(244);var n=a(0),r=a(68),c=a(223),i=a.n(c),l=(a(18),a(224)),s=a.n(l),o=a(245),m=a(34),u=a(19),d=a(25),f=a(112),b={hover:{backgroundColor:"#595959",transition:{duration:.3}}},h={hover:{color:"#ffffff",transition:{duration:.2}}},v=function(e){var t=e.locale,a=e.focusPerformers,c=e.songKey,i=e.number,l=e.title,v=e.type,E=e.className,g=n.useMemo(function(){var e;switch(t){case u.d.Zh:e="、";break;case u.d.Ja:e="・";break;default:e=", "}return a.name.length>0?a.type===o.b.Center?"C: "+a.name.reduce(function(t,a){return t+e+a}):a.name.reduce(function(t,a){return t+e+a}):""},[a,t]);return"OVERTURE"!==c?n.createElement(d.b.div,{whileHover:"hover",variants:b,className:Object(r.a)(s.a.container,E)},n.createElement(f.a,{to:"/songs/"+c},n.createElement(d.b.span,{variants:h,className:s.a.number},i,"."),n.createElement("div",{className:s.a.content},n.createElement(d.b.h3,{variants:h,className:s.a.title},l),n.createElement(d.b.div,{variants:h,className:s.a.description},n.createElement("span",null,"#",n.createElement(m.b,{id:v})),n.createElement("span",null,g))))):n.createElement("div",{className:Object(r.a)(s.a.container,E)},n.createElement("span",{className:s.a.number},i,"."),n.createElement("div",{className:s.a.content},n.createElement("h3",{className:s.a.title},l),n.createElement("div",{className:s.a.description},n.createElement("span",null,"#",n.createElement(m.b,{id:v})),n.createElement("span",null,g))))},E=a(225),g=a.n(E),N=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},p=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},k=function(e){var t=e.artworks,a=e.title,c=e.className,i=n.useState(0),l=i[0],s=i[1],o=n.useCallback(function(){l<t.length-1&&s(l+1)},[t,l]),m=n.useCallback(function(){l>0&&s(l-1)},[t,l]),u=n.useCallback(function(){l<t.length-1?s(l+1):s(0)},[t,l]);return n.createElement("div",{className:Object(r.a)(g.a.container,c)},n.createElement("div",{className:g.a.artwork},n.createElement(d.b.button,{whileHover:{scale:2,x:-8},onClick:m,"aria-label":"Previous Artwork"},n.createElement(N,{className:g.a.arrow})),n.createElement(d.b.div,{whileHover:{scale:1.07},className:g.a.images},t.map(function(e,t){return n.createElement(d.b.img,{key:t,animate:l===t?{opacity:1,scale:1}:{opacity:0,scale:.5},src:e.medium,srcSet:e.large+" 1.5x",alt:a,onClick:u,className:g.a.image})})),n.createElement(d.b.button,{whileHover:{scale:2,x:8},onClick:o,"aria-label":"Next Artwork"},n.createElement(p,{className:g.a.arrow}))),n.createElement("div",{className:g.a.indicator},t.map(function(e,t){return n.createElement("button",{key:t,onClick:function(){return s(t)},"aria-label":"Next Artwork"},n.createElement("div",{style:{backgroundColor:t===l?"#757575":"#ffffff"},className:g.a.dot}))})))},w=a(113),y=a(243),x=a(252);a.d(t,"a",function(){return O});var C={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},S={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},H={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},G={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},O=Object(m.d)(function(e){var t=e.type,a=e.title,c=e.number,l=e.artworks,s=e.songs,b=e.release,h=e.intl;return Object(w.b)(),n.createElement(y.a,{className:i.a.background},n.createElement(d.b.div,{whileHover:{x:-7,scale:1.5},className:i.a.link},n.createElement(f.a,{to:t===o.a.Singles?u.e.Singles:u.e.Albums,label:"Back"},n.createElement(x.a,{className:i.a.back}))),n.createElement(d.b.div,{variants:C,className:i.a.container},n.createElement(d.b.div,{variants:S,className:i.a.heading},n.createElement("h4",{className:i.a.number},Object(r.b)(c)," ",t.slice(0,-1)),n.createElement("h1",{className:i.a.title},a)),n.createElement(d.b.div,{variants:H,className:i.a.flexbox},n.createElement(d.b.div,{variants:G,className:i.a.artworks},n.createElement(k,{artworks:l,title:a})),n.createElement(d.b.div,{variants:G,className:i.a.content},n.createElement("section",{className:i.a.section},n.createElement("h2",{className:i.a.subheading},n.createElement(m.b,{id:"track"})),n.createElement("ul",{className:i.a.tracklist},s.map(function(e,t){return n.createElement("li",{key:e.key,className:i.a.track},n.createElement(v,{songKey:e.key,number:t+1,title:e.title,type:e.type,focusPerformers:e.focusPerformers,locale:h.locale}))}))),n.createElement("section",{className:i.a.section},n.createElement("h2",{className:i.a.subheading},n.createElement(m.b,{id:"release"})),n.createElement("p",{className:i.a.body},n.createElement(m.a,{value:b,year:"numeric",month:"short",day:"numeric"})))))))})}}]);
//# sourceMappingURL=component---src-containers-album-index-tsx-f061dbb8b8a51bdf6b63.js.map