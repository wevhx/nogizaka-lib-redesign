(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(e,t,a){"use strict";a.r(t);a(259),a(53),a(32),a(4),a(138);var n,r=a(0),l=a(171),s=a(65),c=a(11),i=a(276),m=a.n(i),o=a(136),u=a(167),g=a(19),d=a(277),f=a.n(d),b=a(278),p=a.n(b),h=a(258),S=a(14),E=a(43),N={hover:{backgroundColor:"#757575",scale:1.05}},v=function(e){var t=e.to,a=e.imgSrc,n=e.imgSrcSet,l=e.title,s=e.caption,i=e.secondCaption,m=e.className,o=r.useState(!1),u=o[0],g=o[1];return r.createElement(E.a,{to:t},r.createElement(c.b.div,{whileHover:"hover",variants:N,onHoverStart:function(){return g(!0)},onHoverEnd:function(){return g(!1)},className:Object(S.a)(p.a.container,m)},r.createElement("div",{className:p.a.imagePlaceholder},r.createElement(h.a,{notLazy:!0,src:a,srcSet:n,alt:l,className:p.a.image})),r.createElement("div",{className:p.a.text},r.createElement(c.b.h3,{animate:{color:u?"#ffffff":"#595959"},className:p.a.title},l),r.createElement(c.b.p,{animate:{color:u?"#ffffff":"#757575"},className:p.a.caption},r.createElement("span",null,s),i?r.createElement("span",null,i):null))))},k=function(e){var t=e.title,a=e.results,n=e.className,l=r.useState(!1),s=l[0],c=l[1];return a.length>0?r.createElement("div",{className:n},r.createElement("div",{className:f.a.header},r.createElement("h2",{className:f.a.title},r.createElement(g.a,{text:t})),a.length>3?s?r.createElement("button",{onClick:function(){return c(!1)},className:f.a.moreToggle},r.createElement(g.a,{text:"show less"})):r.createElement("button",{onClick:function(){return c(!0)},className:f.a.moreToggle},r.createElement(g.a,{text:"show all"})):null),r.createElement("ul",{className:f.a.resultCardList},a.slice(0,3).map((function(e){return r.createElement("li",{key:e.heading,className:f.a.resultCard},r.createElement(v,{to:e.to,imgSrc:e.imgSrc,imgSrcSet:e.imgSrcSet,title:e.heading,caption:e.caption,secondCaption:e.secondCaption}))})),s?a.slice(3,a.length).map((function(e){return r.createElement("li",{key:e.heading,className:f.a.resultCard},r.createElement(v,{to:e.to,imgSrc:e.imgSrc,imgSrcSet:e.imgSrcSet,title:e.heading,caption:e.caption,secondCaption:e.secondCaption}))})):null)):null},w=Object(s.d)((function(e){var t=e.query,a=e.search,n=e.results,l=e.isSearching,s=e.intl,i=r.useMemo((function(){return n.members.length+n.singles.length+n.albums.length+n.songs.length===0&&""!==t&&!l}),[n,t,l]),d=r.useState(!1),f=d[0],b=d[1];return r.createElement(o.a,{className:m.a.container},r.createElement("div",{className:m.a.search},r.createElement(u.a,{className:m.a.searchIcon}),r.createElement(c.b.div,{animate:{borderBottomColor:f?"#595959":"#d6d6d6"},className:m.a.inputContainer},r.createElement("input",{type:"text",value:t,onChange:a,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},placeholder:s.formatMessage({id:"Song title, member name, etc."}),className:m.a.input}))),i?r.createElement("p",{className:m.a.noResult},r.createElement(g.a,{text:"no result"})):null,r.createElement(k,{title:"members",results:n.members,className:m.a.category}),r.createElement(k,{title:"singles",results:n.singles,className:m.a.category}),r.createElement(k,{title:"albums",results:n.albums,className:m.a.category}),r.createElement(k,{title:"songs",results:n.songs}))})),y=a(1),C=a(137);a.d(t,"SearchContainer",(function(){return x}));var x=Object(s.d)((function(e){var t=e.intl;Object(C.b)();var a=r.useState(""),s=a[0],c=a[1],i=r.useState([]),m=i[0],o=i[1],u=r.useState(!1),g=u[0],d=u[1],f=r.useMemo((function(){return"undefined"!=typeof window?window.__LUNR__.ja:null}),[]),b=r.useCallback((function(e){var t=e.currentTarget.value;c(t),d(!0),clearTimeout(n),n=setTimeout((function(){var e=""!==t?f.index.search("name:*"+t+"*",{extend:!0}).map((function(e){var t=e.ref;return f.store[t]})):[];o(e),d(!1)}),300)}),[f]),p=r.useMemo((function(){var e=[],a=[],n=[],r=[],l=m,s=Array.isArray(l),c=0;for(l=s?l:l[Symbol.iterator]();;){var i;if(s){if(c>=l.length)break;i=l[c++]}else{if((c=l.next()).done)break;i=c.value}var o=i;switch(o.type){case y.g.Members:e.push({to:"/"+o.type+"/"+o.nameKey,imgSrc:o.profileImage.small,imgSrcSet:o.profileImage.large+" 2x",heading:o.nameNotations.lastName+" "+o.nameNotations.firstName,caption:o.nameNotations.lastNameEn+" "+o.nameNotations.firstNameEn});break;case y.g.Singles:a.push({to:"/"+o.type+"/"+o.number,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:Object(S.d)(o.number)+" single"});break;case y.g.Albums:n.push({to:"/"+o.type+"/"+o.number,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:Object(S.d)(o.number)+" album"});break;case y.g.Songs:r.push({to:"/"+o.type+"/"+o.key,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:"#"+t.formatMessage({id:o.songType}),secondCaption:""!==o.single.number?"#"+Object(S.d)(o.single.number)+" single":"#"+Object(S.d)(o.album.number)+" album"})}}return{members:e,singles:a,albums:n,songs:r}}),[m,t]);return r.useEffect((function(){Object(l.forceCheck)()}),[m]),r.createElement(w,{query:s,search:b,results:p,isSearching:g})}));t.default=function(){return r.createElement(x,null)}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-805c845ecb1229582bcb.js.map