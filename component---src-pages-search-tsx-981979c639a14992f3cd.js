(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{278:function(e,t,a){"use strict";a.r(t);a(258),a(50),a(30),a(3),a(137);var n,r=a(0),l=a(170),s=a(62),c=a(275),m=a.n(c),i=a(135),o=a(166),u=a(33),g=a(276),d=a.n(g),p=a(277),b=a.n(p),h=a(257),S=a(16),E=a(87),f=function(e){var t=e.to,a=e.imgSrc,n=e.imgSrcSet,l=e.title,s=e.caption,c=e.secondCaption,m=e.className;return r.createElement(E.a,{to:t},r.createElement("div",{className:Object(S.a)(b.a.container,m)},r.createElement("div",{className:b.a.imagePlaceholder},r.createElement(h.a,{notLazy:!0,src:a,srcSet:n,alt:l,className:b.a.image})),r.createElement("div",{className:b.a.text},r.createElement("h3",{className:b.a.title},l),r.createElement("p",{className:b.a.caption},r.createElement("span",null,s),c?r.createElement("span",null,c):null))))},N=function(e){var t=e.title,a=e.results,n=e.className,l=r.useState(!1),s=l[0],c=l[1];return a.length>0?r.createElement("div",{className:n},r.createElement("div",{className:d.a.header},r.createElement("h2",{className:d.a.title},r.createElement(u.a,{text:t})),a.length>3?s?r.createElement("button",{onClick:function(){return c(!1)},className:d.a.moreToggle},r.createElement(u.a,{text:"show less"})):r.createElement("button",{onClick:function(){return c(!0)},className:d.a.moreToggle},r.createElement(u.a,{text:"show all"})):null),r.createElement("ul",{className:d.a.resultCardList},a.slice(0,3).map((function(e){return r.createElement("li",{key:e.heading,className:d.a.resultCard},r.createElement(f,{to:e.to,imgSrc:e.imgSrc,imgSrcSet:e.imgSrcSet,title:e.heading,caption:e.caption,secondCaption:e.secondCaption}))})),s?a.slice(3,a.length).map((function(e){return r.createElement("li",{key:e.heading,className:d.a.resultCard},r.createElement(f,{to:e.to,imgSrc:e.imgSrc,imgSrcSet:e.imgSrcSet,title:e.heading,caption:e.caption,secondCaption:e.secondCaption}))})):null)):null},k=Object(s.d)((function(e){var t=e.query,a=e.search,n=e.results,l=e.isSearching,s=e.intl,c=r.useMemo((function(){return n.members.length+n.singles.length+n.albums.length+n.songs.length===0&&""!==t&&!l}),[n,t,l]);return r.createElement(i.a,{className:m.a.container},r.createElement("div",{className:m.a.search},r.createElement(o.a,{className:m.a.searchIcon}),r.createElement("div",{className:m.a.inputContainer},r.createElement("input",{type:"text",value:t,onChange:a,placeholder:s.formatMessage({id:"Song title, member name, etc."}),className:m.a.input}))),c?r.createElement("p",{className:m.a.noResult},r.createElement(u.a,{text:"no result"})):null,r.createElement(N,{title:"members",results:n.members,className:m.a.category}),r.createElement(N,{title:"singles",results:n.singles,className:m.a.category}),r.createElement(N,{title:"albums",results:n.albums,className:m.a.category}),r.createElement(N,{title:"songs",results:n.songs}))})),v=a(5),w=a(136);a.d(t,"SearchContainer",(function(){return y}));var y=Object(s.d)((function(e){var t=e.intl;Object(w.b)();var a=r.useState(""),s=a[0],c=a[1],m=r.useState([]),i=m[0],o=m[1],u=r.useState(!1),g=u[0],d=u[1],p=r.useMemo((function(){return"undefined"!=typeof window?window.__LUNR__.ja:null}),[]),b=r.useCallback((function(e){var t=e.currentTarget.value;c(t),d(!0),clearTimeout(n),n=setTimeout((function(){var e=""!==t?p.index.search("name:*"+t+"*",{extend:!0}).map((function(e){var t=e.ref;return p.store[t]})):[];o(e),d(!1)}),1e3)}),[p]),h=r.useMemo((function(){var e=[],a=[],n=[],r=[],l=i,s=Array.isArray(l),c=0;for(l=s?l:l[Symbol.iterator]();;){var m;if(s){if(c>=l.length)break;m=l[c++]}else{if((c=l.next()).done)break;m=c.value}var o=m;switch(o.type){case v.g.Members:e.push({to:"/"+o.type+"/"+o.nameKey,imgSrc:o.profileImage.small,imgSrcSet:o.profileImage.large+" 2x",heading:o.nameNotations.lastName+" "+o.nameNotations.firstName,caption:o.nameNotations.lastNameEn+" "+o.nameNotations.firstNameEn});break;case v.g.Singles:a.push({to:"/"+o.type+"/"+o.number,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:Object(S.d)(o.number)+" single"});break;case v.g.Albums:n.push({to:"/"+o.type+"/"+o.number,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:Object(S.d)(o.number)+" album"});break;case v.g.Songs:r.push({to:"/"+o.type+"/"+o.key,imgSrc:o.artwork.small,imgSrcSet:o.artwork.medium+" 2x, "+o.artwork.large+" 3x",heading:o.title,caption:"#"+t.formatMessage({id:o.songType}),secondCaption:""!==o.single.number?"#"+Object(S.d)(o.single.number)+" single":"#"+Object(S.d)(o.album.number)+" album"})}}return{members:e,singles:a,albums:n,songs:r}}),[i,t]);return console.log({query:s,results:i}),r.useEffect((function(){Object(l.forceCheck)()}),[i]),r.createElement(k,{query:s,search:b,results:h,isSearching:g})}));t.default=function(){return r.createElement(y,null)}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-981979c639a14992f3cd.js.map