(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{241:function(e,t,a){"use strict";a.r(t);a(156);var n=a(0),r=a(112),i=a(259),s=(a(248),a(249)),l=a.n(s),o=a(237),c=a.n(o),u=a(24),m=a(68),d={isHovered:{opacity:.7},isNotHovered:{opacity:0}},v={isHovered:{opacity:1},isNotHovered:{opacity:0}},g=function(e){var t=e.images,a=e.title,r=e.className,i=n.useState(!1),s=i[0],o=i[1];return n.createElement(u.b.div,{onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},whileHover:{scale:1.1},className:Object(m.a)(c.a.container,r)},n.createElement(l.a,{offset:100},n.createElement("img",{src:t.small,srcSet:t.medium+" 2x, "+t.large+" 3x",alt:a,className:c.a.image})),n.createElement(u.b.div,{initial:!1,animate:s?"isHovered":"isNotHovered",variants:d,className:c.a.background}),n.createElement(u.b.div,{initial:!1,animate:s?"isHovered":"isNotHovered",variants:v,className:c.a.title},n.createElement("h3",null,a)))},p=a(257),b=a(238),f=a.n(b),y=[{link:"/cds/?page=singles",page:"singles"},{link:"/cds/?page=albums",page:"albums"}],E={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.02,delayChildren:.2,duration:.2}},hidden:{opacity:0,transition:{duration:.2}}},h={visible:{opacity:1,y:0},hidden:{opacity:0,y:20}},N=function(e){var t=e.singles.edges,a=e.albums.edges,s=n.useMemo(function(){return Object(i.parse)(e.query)},[e.query]).page,l=n.useMemo(function(){return"albums"===s?a:t},[s,a,t]);return console.log({page:s,query:e.query}),n.createElement("div",null,n.createElement(p.a,{items:y,selectedItem:s||"singles",className:f.a.tabs}),n.createElement(u.a,null,n.createElement(u.b.div,{key:s,exit:"hidden",variants:E,className:f.a.grid},l.map(function(e){var t=e.node;return n.createElement(u.b.div,{variants:h,key:s+t.number,className:f.a.artwork},n.createElement(r.a,{to:"/"+s+"/"+t.number},n.createElement(g,{images:t.artworks[0],title:t.title})))}))))};a(221);a.d(t,"query",function(){return k});var k="1289736959";t.default=function(e){var t=n.useMemo(function(){return e.location&&""!==e.location.search?e.location.search:"?page=singles"},[e.location]);return e.data?n.createElement(N,{query:t,singles:e.data.allSinglesJson,albums:e.data.allAlbumsJson}):null}},244:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a(220),i=a.n(r),s=a(68),l=function(e){var t=e.children,a=e.className;return n.createElement("div",{className:Object(s.a)(i.a.container,a)},t)}},257:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(245);var n=a(0),r=a(112),i=a(33),s=a(244),l=a(226),o=a.n(l),c=function(e){var t=e.items,a=e.selectedItem,l=e.className,c=n.useState(a),u=c[0],m=c[1];return console.log({selectedItem:a,currentItem:u}),n.createElement(s.a,{className:l},n.createElement("div",{className:o.a.container},t.map(function(e){return n.createElement("div",{style:e.page===u?{fontSize:"20px",fontWeight:700,borderBottomWidth:"3px",borderBottomColor:"rgba(89, 89, 89, 1)"}:{fontSize:"16px",fontWeight:500,borderBottomWidth:"0px"},className:o.a.item,key:e.page},n.createElement(r.a,{to:e.link,handleClick:function(){return m(e.page)}},n.createElement(i.b,{id:e.page})))})))}}}]);
//# sourceMappingURL=component---src-pages-cds-tsx-e4b571a814320fb89dd1.js.map