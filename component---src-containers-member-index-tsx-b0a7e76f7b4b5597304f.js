(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a(38),a(14);var n,r,l=a(0),i=a(1),s=a(84),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts"}(r||(r={}));function o(e){var t=function(t){return l.createElement(s.a.Consumer,null,(function(a){Object(i.h)(a);var n=t.value,r=t.children,l=c(t,["value","children"]),s="string"==typeof n?new Date(n||0):n;return r("formatDate"===e?a.formatDateToParts(s,l):a.formatTimeToParts(s,l))}))};return t.displayName=r[e],t}function m(e){var t=function(t){return l.createElement(s.a.Consumer,null,(function(a){Object(i.h)(a);var n=t.value,r=t.children,s=c(t,["value","children"]),o=a[e](n,s);if("function"==typeof r)return r(o);var m=a.textComponent||l.Fragment;return l.createElement(m,null,o)}))};return t.displayName=n[e],t}a.d(t,"a",(function(){return u}));var u=m("formatDate");m("formatTime"),m("formatNumber"),o("formatDate"),o("formatTime")},298:function(e,t,a){"use strict";a.r(t);a(39),a(55),a(38),a(7);var n=a(0),r=(a(276),a(195),a(12)),l=a(146),i=a(288),s=a.n(i),c=a(147),o=a(303),m=a(148),u=a(310),f=a(289),d=a.n(f),E=a(3),p=function(e){var t="";switch(e.position){case E.f.Center:t="C";break;case E.f.Fukujin:t="F";break;case E.f.Selected:t="S";break;case E.f.Under:t="U"}return n.createElement("div",{className:d.a.container},""!==t?n.createElement("span",{className:d.a.position+" "+d.a[""+e.position]},t):n.createElement("span",{className:d.a.none}))},N=a(290),h=a.n(N),v=function(e){return n.createElement("div",{className:h.a.container},0!==e.selected?n.createElement("div",{className:h.a.selectedContainer,style:{width:e.selected/(e.under+e.selected)*100+"%"}},0!==e.center?n.createElement("div",{className:h.a.center,style:{width:e.center/e.selected*100+"%"}},e.center):null,e.fukujin-e.center!=0?n.createElement("div",{className:h.a.fukujin,style:{width:(e.fukujin-e.center)/e.selected*100+"%"}},e.fukujin-e.center):null,e.selected-e.fukujin!=0?n.createElement("div",{className:h.a.selected,style:{width:(e.selected-e.fukujin)/e.selected*100+"%"}},e.selected-e.fukujin):null):null,0!==e.under?n.createElement("div",{className:h.a.under,style:{width:e.under/(e.under+e.selected)*100+"%"}},e.under):null)},b=a(275),g=a(20),y={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},k={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},C={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},x={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},w=function(e){var t=e.name,a=e.names,i=e.profileImage,f=e.glowStickColor,d=e.sites,N=e.join,h=e.graduation,w=e.birthday,j=e.height,T=e.bloodType,I=e.origin,S=e.units,F=e.corps,O=e.photoAlbums,A=e.shouldShowPositionCounter,P=e.positionsHistory,D=e.positionsCounter,H=e.gallery;return Object(m.b)(),n.createElement("div",{className:s.a.background},n.createElement(c.a,null,n.createElement(r.b.div,{whileHover:{x:-7,scale:1.5},className:s.a.link},n.createElement("button",{onClick:function(){window.history.back()},"aria-label":"Go Back"},n.createElement(o.a,{className:s.a.back}))),n.createElement("div",null,n.createElement(r.b.div,{variants:y,className:s.a.container},n.createElement(r.b.div,{variants:k,className:s.a.heading},n.createElement("h1",{className:s.a.title},a.ja),n.createElement("h4",{className:s.a.tags},n.createElement("span",null,a.en),n.createElement("span",null,"|"),n.createElement("span",null,a.furigana))),n.createElement(r.b.div,{variants:C,className:s.a.flexBox},n.createElement(r.b.div,{variants:x,className:s.a.profileImageContainer},n.createElement("div",{className:s.a.profileImageWrapper},n.createElement("img",{src:i.small,srcSet:i.large+" 2x",alt:t})),n.createElement("div",{className:s.a.stickColors},n.createElement("span",{style:{backgroundColor:f.left!==E.b.None?E.a[f.left]:"#ffffff"},className:s.a.stick}),n.createElement("span",{style:{backgroundColor:f.right!==E.b.None?E.a[f.right]:"#ffffff"},className:s.a.stick}))),n.createElement(r.b.div,{variants:x,className:s.a.content},d.length>0?n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(g.a,{text:"websites"})),n.createElement("div",{className:s.a.websites},d.map((function(e){return n.createElement(r.b.a,{key:e.title,href:e.url,target:"_blank",rel:"noopener"},n.createElement(g.a,{text:e.title}))})))):null,n.createElement("section",{className:s.a.section+" "+s.a.profile},n.createElement("h2",{className:s.a.subheading+" "+s.a.infoContainer},n.createElement(g.a,{text:"profile"})),n.createElement("div",{className:s.a.info},n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"join"})),n.createElement("span",{className:s.a.infoContent},n.createElement(g.a,{text:"join: "+N})," ",h.isGraduated?n.createElement("span",null,"(",n.createElement(g.a,{text:"graduate"}),")"):null)),n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"birthday"})),n.createElement("span",{className:s.a.infoContent},n.createElement(l.a,{value:w,year:"numeric",month:"short",day:"numeric"}))),n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"height"})),n.createElement("span",{className:s.a.infoContent+" "+s.a.height},j," cm")),n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"blood type"})),n.createElement("span",{className:s.a.infoContent},n.createElement(g.a,{text:T}))),n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"birthplace"})),n.createElement("span",{className:s.a.infoContent},n.createElement(g.a,{text:I}))),S.length>0?n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"units"})),n.createElement("span",{className:s.a.infoContent},n.createElement(u.a,{list:S}))):null,F.length>0?n.createElement("div",{className:s.a.infoItem},n.createElement("span",{className:s.a.infoTitle},n.createElement(g.a,{text:"corps"})),n.createElement("span",{className:s.a.infoContent},n.createElement(u.a,{list:F}))):null)),O.length>0?n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading+" "+s.a.infoContainer},n.createElement(g.a,{text:"photo albums"})),n.createElement("ol",{className:s.a.photoAlbums},O.map((function(e){return n.createElement("li",{key:e.title},e.title)})))):null,P.length>0?n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(g.a,{text:"position history"})),n.createElement("div",{className:s.a.history},P.map((function(e){return n.createElement("div",{key:e.singleNumber,className:s.a.positionRecord},n.createElement("span",{className:s.a.positionNumber},e.singleNumber),n.createElement(p,{position:e.position}))})))):null,A?n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(g.a,{text:"position counter"})),n.createElement("div",{className:s.a.counter},n.createElement("div",{className:s.a.indicators},n.createElement("div",{className:s.a.indicator},n.createElement(p,{position:E.f.Center}),n.createElement("span",{className:s.a.indicatorCaption},n.createElement(g.a,{text:"center"}))),n.createElement("div",{className:s.a.indicator},n.createElement(p,{position:E.f.Fukujin}),n.createElement("span",{className:s.a.indicatorCaption},n.createElement(g.a,{text:"fukujin"}))),n.createElement("div",{className:s.a.indicator},n.createElement(p,{position:E.f.Selected}),n.createElement("span",{className:s.a.indicatorCaption},n.createElement(g.a,{text:"selected"}))),n.createElement("div",{className:s.a.indicator},n.createElement(p,{position:E.f.Under}),n.createElement("span",{className:s.a.indicatorCaption},n.createElement(g.a,{text:"under"})))),n.createElement(v,D))):null,H.length>0?n.createElement("section",{className:s.a.section},n.createElement("h2",{className:s.a.subheading},n.createElement(g.a,{text:"gallery"})),n.createElement("div",{className:s.a.gallery},H.map((function(e,a){return n.createElement("div",{className:s.a.galleryImageContainer,key:a},n.createElement("div",{className:s.a.wrapper},n.createElement(b.a,{src:e.small,srcSet:e.large+" 2x",alt:t,className:s.a.galleryImage})))})))):null))))))};a.d(t,"query",(function(){return j}));var j="2695582900";t.default=function(e){var t=e.data.membersJson,a=n.useMemo((function(){return{ja:t.nameNotations.lastName+" "+t.nameNotations.firstName,en:t.nameNotations.lastNameEn+" "+t.nameNotations.firstNameEn,furigana:t.nameNotations.lastNameFurigana+" "+t.nameNotations.firstNameFurigana}}),[t.nameNotations]),r=n.useMemo((function(){var e=[],a=[],n=t.units,r=Array.isArray(n),l=0;for(n=r?n:n[Symbol.iterator]();;){var i;if(r){if(l>=n.length)break;i=n[l++]}else{if((l=n.next()).done)break;i=l.value}var s=i;"unit"===s.type?e.push(s.name):a.push(s.name)}return{units:e,corps:a}}),[t.units]),l=r.units,i=r.corps,s=n.useMemo((function(){return t.positionsHistory.filter((function(e){return"none"!==e.position}))}),[t.positionsHistory]),c=n.useMemo((function(){return t.positionsCounter.center+t.positionsCounter.fukujin+t.positionsCounter.selected+t.positionsCounter.under>0}),[t.positionsCounter]),o=n.useMemo((function(){var e=[],a=t.singleImages.slice().reverse().filter((function(e){return""!==e.large})),n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var l;if(n){if(r>=a.length)break;l=a[r++]}else{if((r=a.next()).done)break;l=r.value}var i=l,s=!1,c=e,o=Array.isArray(c),m=0;for(c=o?c:c[Symbol.iterator]();;){var u;if(o){if(m>=c.length)break;u=c[m++]}else{if((m=c.next()).done)break;u=m.value}if(u.large===i.large){s=!0;break}}s||e.push(i)}return e}),[t.singleImages]);return t?n.createElement(w,{name:t.name,names:a,profileImage:t.profileImage,glowStickColor:t.glowStickColor,sites:t.sites,join:t.join,graduation:t.graduation,birthday:t.birthday,height:t.height,bloodType:t.bloodType,origin:t.origin,units:l,corps:i,photoAlbums:t.photoAlbums,shouldShowPositionCounter:c,positionsHistory:s,positionsCounter:t.positionsCounter,gallery:o}):null}},303:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=function(e){var t=e.className;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},310:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a(84),l=a(3),i=Object(r.c)((function(e){var t,a=e.list;switch(e.intl.locale){case l.d.Zh:case l.d.Ja:t="、";break;default:t=", "}return n.createElement(n.Fragment,null,a.join(t))}))}}]);
//# sourceMappingURL=component---src-containers-member-index-tsx-b0a7e76f7b4b5597304f.js.map