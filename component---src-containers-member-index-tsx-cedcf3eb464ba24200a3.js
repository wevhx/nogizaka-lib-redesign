(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(e,a,t){"use strict";t.r(a);t(22),t(48),t(30),t(3);var n=t(0),l=(t(249),t(179),t(23)),s=t(60),i=t(261),r=t.n(i),c=t(133),o=t(250),m=t(134),u=t(273),d=t(262),E=t.n(d),f=t(9),p=function(e){var a="";switch(e.position){case f.f.Center:a="C";break;case f.f.Fukujin:a="F";break;case f.f.Selected:a="S";break;case f.f.Under:a="U"}return n.createElement("div",{className:E.a.container},""!==a?n.createElement("span",{className:E.a.position+" "+E.a[""+e.position]},a):n.createElement("span",{className:E.a.none}))},N=t(263),h=t.n(N),g=function(e){return n.createElement("div",{className:h.a.container},0!==e.selected?n.createElement("div",{className:h.a.selectedContainer,style:{width:e.selected/(e.under+e.selected)*100+"%"}},0!==e.center?n.createElement("div",{className:h.a.center,style:{width:e.center/e.selected*100+"%"}},e.center):null,e.fukujin-e.center!=0?n.createElement("div",{className:h.a.fukujin,style:{width:(e.fukujin-e.center)/e.selected*100+"%"}},e.fukujin-e.center):null,e.selected-e.fukujin!=0?n.createElement("div",{className:h.a.selected,style:{width:(e.selected-e.fukujin)/e.selected*100+"%"}},e.selected-e.fukujin):null):null,0!==e.under?n.createElement("div",{className:h.a.under,style:{width:e.under/(e.under+e.selected)*100+"%"}},e.under):null)},b=t(248),v=t(61),y={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},k={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},C={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},x={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},w=function(e){var a=e.name,t=e.names,i=e.profileImage,d=e.glowStickColor,E=e.sites,N=e.join,h=e.graduation,w=e.birthday,j=e.height,I=e.bloodType,S=e.origin,T=e.units,A=e.corps,F=e.photoAlbums,H=e.shouldShowPositionCounter,M=e.positionsHistory,J=e.positionsCounter,U=e.gallery;return Object(m.b)(),n.createElement("div",{className:r.a.background},n.createElement(c.a,null,n.createElement(l.b.div,{whileHover:{x:-7,scale:1.5},className:r.a.link},n.createElement("button",{onClick:function(){window.history.back()},"aria-label":"Go Back"},n.createElement(o.a,{className:r.a.back}))),n.createElement("div",null,n.createElement(l.b.div,{variants:y,className:r.a.container},n.createElement(l.b.div,{variants:k,className:r.a.heading},n.createElement("h1",{className:r.a.title},t.ja),n.createElement("h4",{className:r.a.tags},n.createElement("span",null,t.en),n.createElement("span",null,"|"),n.createElement("span",null,t.furigana))),n.createElement(l.b.div,{variants:C,className:r.a.flexBox},n.createElement(l.b.div,{variants:x,className:r.a.profileImageContainer},n.createElement("div",{className:r.a.profileImageWrapper},n.createElement(b.a,{notLazy:!0,src:i.small,srcSet:i.large+" 2x",alt:a})),n.createElement("div",{className:r.a.stickColors},n.createElement("span",{style:{backgroundColor:d.left!==f.b.None?f.a[d.left]:"#ffffff"},className:r.a.stick}),n.createElement("span",{style:{backgroundColor:d.right!==f.b.None?f.a[d.right]:"#ffffff"},className:r.a.stick}))),n.createElement(l.b.div,{variants:x,className:r.a.content},E.length>0?n.createElement("section",{className:r.a.section},n.createElement("h2",{className:r.a.subheading},n.createElement(v.a,{text:"websites"})),n.createElement("div",{className:r.a.websites},E.map(function(e){return n.createElement(l.b.a,{key:e.title,href:e.url,target:"_blank",rel:"noopener"},n.createElement(v.a,{text:e.title}))}))):null,n.createElement("section",{className:r.a.section+" "+r.a.profile},n.createElement("h2",{className:r.a.subheading+" "+r.a.infoContainer},n.createElement(v.a,{text:"profile"})),n.createElement("div",{className:r.a.info},n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"join"})),n.createElement("span",{className:r.a.infoContent},n.createElement(v.a,{text:"join: "+N})," ",h.isGraduated?n.createElement("span",null,"(",n.createElement(v.a,{text:"graduate"}),")"):null)),n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"birthday"})),n.createElement("span",{className:r.a.infoContent},n.createElement(s.a,{value:w,year:"numeric",month:"short",day:"numeric"}))),n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"height"})),n.createElement("span",{className:r.a.infoContent+" "+r.a.height},j," cm")),n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"blood type"})),n.createElement("span",{className:r.a.infoContent},n.createElement(v.a,{text:I}))),n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"birthplace"})),n.createElement("span",{className:r.a.infoContent},n.createElement(v.a,{text:S}))),T.length>0?n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"units"})),n.createElement("span",{className:r.a.infoContent},n.createElement(u.a,{list:T}))):null,A.length>0?n.createElement("div",{className:r.a.infoItem},n.createElement("span",{className:r.a.infoTitle},n.createElement(v.a,{text:"corps"})),n.createElement("span",{className:r.a.infoContent},n.createElement(u.a,{list:A}))):null)),F.length>0?n.createElement("section",{className:r.a.section},n.createElement("h2",{className:r.a.subheading+" "+r.a.infoContainer},n.createElement(v.a,{text:"photo albums"})),n.createElement("ol",{className:r.a.photoAlbums},F.map(function(e){return n.createElement("li",{key:e.title},e.title)}))):null,M.length>0?n.createElement("section",{className:r.a.section},n.createElement("h2",{className:r.a.subheading},n.createElement(v.a,{text:"position history"})),n.createElement("div",{className:r.a.history},M.map(function(e){return n.createElement("div",{key:e.singleNumber,className:r.a.positionRecord},n.createElement("span",{className:r.a.positionNumber},e.singleNumber),n.createElement(p,{position:e.position}))}))):null,H?n.createElement("section",{className:r.a.section},n.createElement("h2",{className:r.a.subheading},n.createElement(v.a,{text:"position counter"})),n.createElement("div",{className:r.a.counter},n.createElement("div",{className:r.a.indicators},n.createElement("div",{className:r.a.indicator},n.createElement(p,{position:f.f.Center}),n.createElement("span",{className:r.a.indicatorCaption},n.createElement(v.a,{text:"center"}))),n.createElement("div",{className:r.a.indicator},n.createElement(p,{position:f.f.Fukujin}),n.createElement("span",{className:r.a.indicatorCaption},n.createElement(v.a,{text:"fukujin"}))),n.createElement("div",{className:r.a.indicator},n.createElement(p,{position:f.f.Selected}),n.createElement("span",{className:r.a.indicatorCaption},n.createElement(v.a,{text:"selected"}))),n.createElement("div",{className:r.a.indicator},n.createElement(p,{position:f.f.Under}),n.createElement("span",{className:r.a.indicatorCaption},n.createElement(v.a,{text:"under"})))),n.createElement(g,J))):null,U.length>0?n.createElement("section",{className:r.a.section},n.createElement("h2",{className:r.a.subheading},n.createElement(v.a,{text:"gallery"})),n.createElement("div",{className:r.a.gallery},U.map(function(e,t){return n.createElement("div",{className:r.a.galleryImageContainer,key:t},n.createElement("div",{className:r.a.wrapper},n.createElement(b.a,{src:e.small,srcSet:e.large+" 2x",alt:a,className:r.a.galleryImage})))}))):null))))))};t.d(a,"query",function(){return j});var j="2695582900";a.default=function(e){var a=e.data.membersJson,t=n.useMemo(function(){return{ja:a.nameNotations.lastName+" "+a.nameNotations.firstName,en:a.nameNotations.lastNameEn+" "+a.nameNotations.firstNameEn,furigana:a.nameNotations.lastNameFurigana+" "+a.nameNotations.firstNameFurigana}},[a.nameNotations]),l=n.useMemo(function(){var e=[],t=[],n=a.units,l=Array.isArray(n),s=0;for(n=l?n:n[Symbol.iterator]();;){var i;if(l){if(s>=n.length)break;i=n[s++]}else{if((s=n.next()).done)break;i=s.value}var r=i;"unit"===r.type?e.push(r.name):t.push(r.name)}return{units:e,corps:t}},[a.units]),s=l.units,i=l.corps,r=n.useMemo(function(){return a.positionsHistory.filter(function(e){return"none"!==e.position})},[a.positionsHistory]),c=n.useMemo(function(){return a.positionsCounter.center+a.positionsCounter.fukujin+a.positionsCounter.selected+a.positionsCounter.under>0},[a.positionsCounter]),o=n.useMemo(function(){var e=[],t=a.singleImages.reverse().filter(function(e){return""!==e.large}),n=Array.isArray(t),l=0;for(t=n?t:t[Symbol.iterator]();;){var s;if(n){if(l>=t.length)break;s=t[l++]}else{if((l=t.next()).done)break;s=l.value}for(var i=s,r=!1,c=0,o=e;c<o.length;c++){if(o[c].large===i.large){r=!0;break}}r||e.push(i)}return e},[a.singleImages]);return a?n.createElement(w,{name:a.name,names:t,profileImage:a.profileImage,glowStickColor:a.glowStickColor,sites:a.sites,join:a.join,graduation:a.graduation,birthday:a.birthday,height:a.height,bloodType:a.bloodType,origin:a.origin,units:s,corps:i,photoAlbums:a.photoAlbums,shouldShowPositionCounter:c,positionsHistory:r,positionsCounter:a.positionsCounter,gallery:o}):null}},273:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),l=t(60),s=t(9),i=Object(l.d)(function(e){var a,t=e.list;switch(e.intl.locale){case s.d.Zh:case s.d.Ja:a="、";break;default:a=", "}return n.createElement(n.Fragment,null,t.join(a))})}}]);
//# sourceMappingURL=component---src-containers-member-index-tsx-cedcf3eb464ba24200a3.js.map