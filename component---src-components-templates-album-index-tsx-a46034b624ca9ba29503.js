(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(244);var n=a(0),r=a(113),c=a(258),l=a(243),s=a(246),i=a(227),o=a.n(i),m=a(24),u="1248825594";t.default=function(e){var t=e.data;return n.createElement(l.a,null,n.createElement(m.b.div,{whileHover:{x:-7,scale:1.5},className:o.a.link},n.createElement(r.a,{to:"/cds/?page=albums"},n.createElement(s.a,{className:o.a.back}))),n.createElement("div",null,t?n.createElement(c.a,{type:"album",title:t.albumsJson.title,number:t.albumsJson.number,artworks:t.albumsJson.artworks,songs:t.albumsJson.songs,release:t.albumsJson.release}):n.createElement("h1",null,"Album Page")))}},243:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a(219),c=a.n(r),l=function(e){var t=e.children,a=e.className;return n.createElement("div",{className:(a?a+" ":"")+c.a.container},t)}},244:function(e,t,a){"use strict";a(245)("link",function(e){return function(t){return e(this,"a","href",t)}})},245:function(e,t,a){var n=a(8),r=a(10),c=a(45),l=/"/g,s=function(e,t,a,n){var r=String(c(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},246:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),r=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},247:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(155),a(112);var n=function(e){var t=Number(e);if(t){var a=t%10,n=t%100;return 1===a&&11!==n?e+"st.":2===a&&12!==n?e+"nd.":3===a&&13!==n?e+"rd.":e+"th."}return"Under"}},250:function(e,t,a){"use strict";var n,r,c;a.d(t,"b",function(){return n}),a.d(t,"a",function(){return c}),function(e){e.Center="center",e.Solo="solo",e.Unit="unit",e.None=""}(n||(n={})),function(e){e.None="none",e.Title="title",e.Coupling="coupling",e.Lead="lead",e.Under="under",e.Unit="unit",e.Solo="solo",e.FirstGeneration="first generation",e.SecondGeneration="second generation",e.ThirdGeneration="third generation",e.FourthGeneration="fourth generation",e.Special="special"}(r||(r={})),function(e){e.First="first",e.Second="second",e.Third="third",e.Fourth="fourth",e.Exchange="exchange"}(c||(c={}))},258:function(e,t,a){"use strict";var n=a(0),r=a(247),c=a(221),l=a.n(c),s=(a(18),a(222)),i=a.n(s),o=a(250),m=a(33),u=a(112),d=a(24),f=a(113),v={hover:{backgroundColor:"#595959",transition:{duration:.3}}},b={hover:{color:"#ffffff",transition:{duration:.2}}},h=function(e){var t=n.useMemo(function(){var t,a=e.focusPerformers;switch(e.locale){case u.d.Zh:t="、";break;case u.d.Ja:t="・";break;default:t=", "}return a.name.length>0?a.type===o.b.Center?"C: "+a.name.reduce(function(e,a){return e+t+a}):a.name.reduce(function(e,a){return e+t+a}):""},[e.focusPerformers,e.locale]);return"OVERTURE"!==e.songKey?n.createElement(d.b.div,{whileHover:"hover",variants:v,className:i.a.container+" + "+(e.className?" "+e.className:"")},n.createElement(f.a,{to:"/songs/"+e.songKey},n.createElement(d.b.span,{variants:b,className:i.a.number},e.number,"."),n.createElement("div",{className:i.a.content},n.createElement(d.b.h3,{variants:b,className:i.a.title},e.title),n.createElement(d.b.div,{variants:b,className:i.a.description},n.createElement("span",null,"#",n.createElement(m.b,{id:e.type})),n.createElement("span",null,t))))):n.createElement("div",{className:i.a.container+" + "+(e.className?" "+e.className:"")},n.createElement("span",{className:i.a.number},e.number,"."),n.createElement("div",{className:i.a.content},n.createElement("h3",{className:i.a.title},e.title),n.createElement("div",{className:i.a.description},n.createElement("span",null,"#",n.createElement(m.b,{id:e.type})),n.createElement("span",null,t))))},E=a(223),N=a.n(E),p=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},g=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},k=function(e){var t=e.artworks,a=e.title,r=e.className,c=n.useState(0),l=c[0],s=c[1],i=n.useCallback(function(){l<t.length-1&&s(l+1)},[t,l]),o=n.useCallback(function(){l>0&&s(l-1)},[t,l]),m=n.useCallback(function(){l<t.length-1?s(l+1):s(0)},[t,l]);return n.createElement("div",{className:N.a.container+(r?" "+r:"")},n.createElement("div",{className:N.a.artwork},n.createElement(d.b.button,{whileHover:{scale:2,x:-8},onClick:o,"aria-label":"Previous Artwork"},n.createElement(p,{className:N.a.arrow})),n.createElement(d.b.div,{whileHover:{scale:1.07},className:N.a.images},t.map(function(e,t){return n.createElement(d.b.img,{key:t,animate:l===t?{opacity:1,scale:1}:{opacity:0,scale:.5},src:e.medium,srcSet:e.large+" 1.5x",alt:a,onClick:m,className:N.a.image})})),n.createElement(d.b.button,{whileHover:{scale:2,x:8},onClick:i,"aria-label":"Next Artwork"},n.createElement(g,{className:N.a.arrow}))),n.createElement("div",{className:N.a.indicator},t.map(function(e,t){return n.createElement("button",{key:t,onClick:function(){return s(t)},"aria-label":"Next Artwork"},n.createElement("div",{style:{backgroundColor:t===l?"#757575":"#ffffff"},className:N.a.dot}))})))},y=a(114);a.d(t,"a",function(){return S});var w={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},x={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},C={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},H={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},S=Object(m.d)(function(e){var t=e.type,a=e.title,c=e.number,s=e.artworks,i=e.songs,o=e.release,u=e.intl;return Object(y.b)(),n.createElement(d.b.div,{variants:w,className:l.a.container},n.createElement(d.b.div,{variants:x,className:l.a.heading},n.createElement("h4",{className:l.a.number},Object(r.a)(c)," ",t),n.createElement("h1",{className:l.a.title},a)),n.createElement(d.b.div,{variants:C,className:l.a.flexbox},n.createElement(d.b.div,{variants:H,className:l.a.artworks},n.createElement(k,{artworks:s,title:a})),n.createElement(d.b.div,{variants:H,className:l.a.content},n.createElement("section",{className:l.a.section},n.createElement("h2",{className:l.a.subheading},n.createElement(m.b,{id:"track"})),n.createElement("ul",{className:l.a.tracklist},i.map(function(e,t){return n.createElement(h,{key:e.key,songKey:e.key,number:t+1,title:e.title,type:e.type,focusPerformers:e.focusPerformers,locale:u.locale,className:l.a.track})}))),n.createElement("section",{className:l.a.section},n.createElement("h2",{className:l.a.subheading},n.createElement(m.b,{id:"release"})),n.createElement("p",{className:l.a.body},n.createElement(m.a,{value:o,year:"numeric",month:"short",day:"numeric"}))))))})}}]);
//# sourceMappingURL=component---src-components-templates-album-index-tsx-a46034b624ca9ba29503.js.map