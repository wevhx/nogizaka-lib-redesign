(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(e,t,a){"use strict";a.r(t);a(37),a(50),a(30),a(3),a(137);var r,n=a(0),l=a(170),s=(a(258),a(62)),m=a(275),c=a.n(m),i=a(135),o=a(276),u=a.n(o),g=a(257),p=a(16),b=a(87),y=function(e){var t=e.to,a=e.imgSrc,r=e.imgSrcSet,l=e.title,s=e.caption,m=e.secondCaption,c=e.className;return n.createElement(b.a,{to:t},n.createElement("div",{className:Object(p.a)(u.a.container,c)},n.createElement("div",{className:u.a.imagePlaceholder},n.createElement(g.a,{notLazy:!0,src:a,srcSet:r,alt:l,className:u.a.image})),n.createElement("div",{className:u.a.text},n.createElement("h3",{className:u.a.title},l),n.createElement("p",{className:u.a.caption},n.createElement("span",null,s),m?n.createElement("span",null,m):null))))},d=a(166),E=a(34),N=Object(s.d)((function(e){var t=e.query,a=e.search,r=e.results,l=e.isSearching,s=e.intl,m=n.useMemo((function(){return r.members.length+r.singles.length+r.albums.length+r.songs.length===0&&""!==t&&!l}),[r,t,l]);return n.createElement(i.a,null,n.createElement("div",{className:c.a.search},n.createElement(d.a,{className:c.a.searchIcon}),n.createElement("div",{className:c.a.inputContainer},n.createElement("input",{type:"text",value:t,onChange:a,placeholder:s.formatMessage({id:"Song title, member name, etc."}),className:c.a.input}))),m?n.createElement("p",{className:c.a.noResult},n.createElement(E.a,{text:"no result"})):null,r.members.length>0?n.createElement("div",{className:c.a.category},n.createElement("h2",{className:c.a.categoryTitle},"members"),n.createElement("ul",{className:c.a.resultCardList},r.members.map((function(e){return n.createElement("li",{key:e.name,className:c.a.resultCard},n.createElement(y,{to:"/"+e.type+"/"+e.nameKey,imgSrc:e.profileImage.small,imgSrcSet:e.profileImage.large+" 2x",title:e.nameNotations.lastName+" "+e.nameNotations.firstName,caption:e.nameNotations.lastNameEn+" "+e.nameNotations.firstNameEn}))})))):null,r.singles.length>0?n.createElement("div",{className:c.a.category},n.createElement("h2",{className:c.a.categoryTitle},"Singles"),n.createElement("ul",{className:c.a.resultCardList},r.singles.map((function(e){return n.createElement("li",{key:e.title,className:c.a.resultCard},n.createElement(y,{to:"/"+e.type+"/"+e.number,imgSrc:e.artwork.small,imgSrcSet:e.artwork.medium+" 2x, "+e.artwork.large+" 3x",title:e.title,caption:Object(p.d)(e.number)+" single"}))})))):null,r.albums.length>0?n.createElement("div",{className:c.a.category},n.createElement("h2",{className:c.a.categoryTitle},"Albums"),n.createElement("ul",{className:c.a.resultCardList},r.albums.map((function(e){return n.createElement("li",{key:e.title,className:c.a.resultCard},n.createElement(y,{to:"/"+e.type+"/"+e.number,imgSrc:e.artwork.small,imgSrcSet:e.artwork.medium+" 2x, "+e.artwork.large+" 3x",title:e.title,caption:Object(p.d)(e.number)+" album"}))})))):null,r.songs.length>0?n.createElement("div",{className:c.a.category},n.createElement("h2",{className:c.a.categoryTitle},"Songs"),n.createElement("ul",{className:c.a.resultCardList},r.songs.map((function(e){return n.createElement("li",{key:e.title,className:c.a.resultCard},n.createElement(y,{to:"/"+e.type+"/"+e.key,imgSrc:e.artwork.small,imgSrcSet:e.artwork.medium+" 2x, "+e.artwork.large+" 3x",title:e.title,caption:"#"+s.formatMessage({id:e.songType}),secondCaption:""!==e.single.number?"#"+Object(p.d)(e.single.number)+" single":"#"+Object(p.d)(e.album.number)+" album"}))})))):null)})),f=a(5),h=a(136);a.d(t,"SearchContainer",(function(){return k}));var k=function(){Object(h.b)();var e=n.useState(""),t=e[0],a=e[1],s=n.useState([]),m=s[0],c=s[1],i=n.useState(!1),o=i[0],u=i[1],g=n.useMemo((function(){return"undefined"!=typeof window?window.__LUNR__.ja:null}),[]),p=n.useCallback((function(e){var t=e.currentTarget.value;a(t),u(!0),clearTimeout(r),r=setTimeout((function(){var e=""!==t?g.index.search("name:*"+t+"*",{extend:!0}).map((function(e){var t=e.ref;return g.store[t]})):[];c(e),u(!1)}),1e3)}),[g]),b=n.useMemo((function(){var e=[],t=[],a=[],r=[],n=m,l=Array.isArray(n),s=0;for(n=l?n:n[Symbol.iterator]();;){var c;if(l){if(s>=n.length)break;c=n[s++]}else{if((s=n.next()).done)break;c=s.value}var i=c;switch(i.type){case f.g.Members:e.push({name:i.name,nameKey:i.nameKey,nameNotations:i.nameNotations,profileImage:i.profileImage,type:i.type});break;case f.g.Singles:t.push({title:i.title,number:i.number,artwork:i.artwork,type:i.type});break;case f.g.Albums:a.push({title:i.title,number:i.number,artwork:i.artwork,type:i.type});break;case f.g.Songs:r.push({title:i.title,key:i.key,artwork:i.artwork,songType:i.songType,single:i.single,album:i.album,type:i.type})}}return{members:e,singles:t,albums:a,songs:r}}),[m]);return console.log({query:t,results:m}),n.useEffect((function(){Object(l.forceCheck)()}),[m]),n.createElement(N,{query:t,search:p,results:b,isSearching:o})};t.default=function(){return n.createElement(k,null)}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-177260618d2d4a54ebf2.js.map