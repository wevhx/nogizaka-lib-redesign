(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(e,t,n){"use strict";n.r(t);n(19),n(50),n(29),n(3);var a=n(0),i=(n(246),n(160),n(237)),r=n.n(i),o=n(116),l=n(25),s=n(252),c=n(117),u=n(28),m=n(254),d=n(9),f=n(238),p=n.n(f),h=function(e){var t="";switch(e.position){case d.f.Center:t="C";break;case d.f.Fukujin:t="F";break;case d.f.Selected:t="S";break;case d.f.Under:t="U"}return a.createElement("div",{className:p.a.container},""!==t?a.createElement("span",{className:p.a.position+" "+p.a[""+e.position]},t):a.createElement("span",{className:p.a.none}))},v=n(239),E=n.n(v),b=function(e){return a.createElement("div",{className:E.a.container},0!==e.selected?a.createElement("div",{className:E.a.selectedcontainer,style:{width:e.selected/(e.under+e.selected)*100+"%"}},0!==e.center?a.createElement("div",{className:E.a.center,style:{width:e.center/e.selected*100+"%"}},e.center):null,e.fukujin-e.center!=0?a.createElement("div",{className:E.a.fukujin,style:{width:(e.fukujin-e.center)/e.selected*100+"%"}},e.fukujin-e.center):null,e.selected-e.fukujin!=0?a.createElement("div",{className:E.a.selected,style:{width:(e.selected-e.fukujin)/e.selected*100+"%"}},e.selected-e.fukujin):null):null,0!==e.under?a.createElement("div",{className:E.a.under,style:{width:e.under/(e.under+e.selected)*100+"%"}},e.under):null)},y=n(247),g=n.n(y),N={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},w={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},k={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},C={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},j=function(e){var t=e.name,n=e.names,i=e.profileImage,f=e.glowStickColor,p=e.sites,v=e.join,E=e.graduation,y=e.birthday,j=e.height,O=e.bloodType,M=e.origin,_=e.units,x=e.corps,A=e.photoAlbums,T=e.shouldShowPositionCounter,H=e.positionsHistory,S=e.positionsCounter,P=e.gallery;return Object(c.b)(),a.createElement("div",{className:r.a.background},a.createElement(o.a,null,a.createElement(l.b.div,{whileHover:{x:-7,scale:1.5},className:r.a.link},a.createElement("button",{onClick:function(){window.history.back()},"aria-label":"Go Back"},a.createElement(s.a,{className:r.a.back}))),a.createElement("div",null,a.createElement(l.b.div,{variants:N,className:r.a.container},a.createElement(l.b.div,{variants:w,className:r.a.heading},a.createElement("h1",{className:r.a.title},n.ja),a.createElement("h4",{className:r.a.tags},a.createElement("span",null,n.en),a.createElement("span",null,"|"),a.createElement("span",null,n.furigana))),a.createElement(l.b.div,{variants:k,className:r.a.flexbox},a.createElement(l.b.div,{variants:C,className:r.a.profileimage},a.createElement("img",{src:i.small,srcSet:i.large+" 2x",alt:t}),a.createElement("div",{className:r.a.stickcolors},a.createElement("span",{style:{backgroundColor:f.left!==d.b.None?d.a[f.left]:"#ffffff"},className:r.a.stick}),a.createElement("span",{style:{backgroundColor:f.right!==d.b.None?d.a[f.right]:"#ffffff"},className:r.a.stick}))),a.createElement(l.b.div,{variants:C,className:r.a.content},p.length>0?a.createElement("section",{className:r.a.section},a.createElement("h2",{className:r.a.subheading},a.createElement(u.b,{id:"websites"})),a.createElement("div",{className:r.a.body+" "+r.a.websites},p.map(function(e){return a.createElement(l.b.a,{key:e.title,href:e.url,target:"_blank",rel:"noopener"},a.createElement(u.b,{id:e.title}))}))):null,a.createElement("section",{className:r.a.section+" "+r.a.profile},a.createElement("h2",{className:r.a.subheading+" "+r.a.infocontainer},a.createElement(u.b,{id:"profile"})),a.createElement("div",{className:r.a.info},a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"join"})),a.createElement("span",{className:r.a.infocontent},a.createElement(u.b,{id:"join: "+v})," ",E.isGraduated?a.createElement("span",null,"(",a.createElement(u.b,{id:"graduate"}),")"):null)),a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"birthday"})),a.createElement("span",{className:r.a.infocontent},a.createElement(u.a,{value:y,year:"numeric",month:"short",day:"numeric"}))),a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"height"})),a.createElement("span",{className:r.a.infocontent+" "+r.a.height},j," cm")),a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"blood type"})),a.createElement("span",{className:r.a.infocontent},a.createElement(u.b,{id:O}))),a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"birthplace"})),a.createElement("span",{className:r.a.infocontent},a.createElement(u.b,{id:M}))),_.length>0?a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"units"})),a.createElement("span",{className:r.a.infocontent},a.createElement(m.a,{list:_}))):null,x.length>0?a.createElement("div",{className:r.a.infoitem},a.createElement("span",{className:r.a.infotitle},a.createElement(u.b,{id:"corps"})),a.createElement("span",{className:r.a.infocontent},a.createElement(m.a,{list:x}))):null)),A.length>0?a.createElement("section",{className:r.a.section},a.createElement("h2",{className:r.a.subheading+" "+r.a.infocontainer},a.createElement(u.b,{id:"photo albums"})),a.createElement("ol",{className:r.a.photoalbums},A.map(function(e,t){return a.createElement("li",{key:e.title},a.createElement("span",null,t+1,"."),a.createElement("span",null,e.title))}))):null,H.length>0?a.createElement("section",{className:r.a.section},a.createElement("h2",{className:r.a.subheading},a.createElement(u.b,{id:"position history"})),a.createElement("div",{className:r.a.history},H.map(function(e){return a.createElement("div",{key:e.singleNumber,className:r.a.positionrecord},a.createElement("span",{className:r.a.positionnumber},e.singleNumber),a.createElement(h,{position:e.position}))}))):null,T?a.createElement("section",{className:r.a.section},a.createElement("h2",{className:r.a.subheading},a.createElement(u.b,{id:"position counter"})),a.createElement("div",{className:r.a.counter},a.createElement("div",{className:r.a.indicators},a.createElement("div",{className:r.a.indicator},a.createElement(h,{position:d.f.Center}),a.createElement("span",{className:r.a.indicatorcaption},a.createElement(u.b,{id:"center"}))),a.createElement("div",{className:r.a.indicator},a.createElement(h,{position:d.f.Fukujin}),a.createElement("span",{className:r.a.indicatorcaption},a.createElement(u.b,{id:"fukujin"}))),a.createElement("div",{className:r.a.indicator},a.createElement(h,{position:d.f.Selected}),a.createElement("span",{className:r.a.indicatorcaption},a.createElement(u.b,{id:"selected"}))),a.createElement("div",{className:r.a.indicator},a.createElement(h,{position:d.f.Under}),a.createElement("span",{className:r.a.indicatorcaption},a.createElement(u.b,{id:"under"})))),a.createElement(b,S))):null,P.length>0?a.createElement("section",{className:r.a.section},a.createElement("h2",{className:r.a.subheading},a.createElement(u.b,{id:"gallery"})),a.createElement("div",{className:r.a.gallery},P.map(function(e,n){return a.createElement("div",{className:r.a.galleryimagecontainer,key:n},a.createElement("div",{className:r.a.wrapper},a.createElement(g.a,{offset:100},a.createElement("img",{src:e.small,srcSet:e.large+" 2x",alt:t,className:r.a.galleryimage}))))}))):null))))))};n.d(t,"query",function(){return O});var O="2695582900";t.default=function(e){var t=e.data.membersJson,n=a.useMemo(function(){return{ja:t.nameNotations.lastName+" "+t.nameNotations.firstName,en:t.nameNotations.lastNameEn+" "+t.nameNotations.firstNameEn,furigana:t.nameNotations.lastNameFurigana+" "+t.nameNotations.firstNameFurigana}},[t.nameNotations]),i=a.useMemo(function(){var e=[],n=[],a=t.units,i=Array.isArray(a),r=0;for(a=i?a:a[Symbol.iterator]();;){var o;if(i){if(r>=a.length)break;o=a[r++]}else{if((r=a.next()).done)break;o=r.value}var l=o;"unit"===l.type?e.push(l.name):n.push(l.name)}return{units:e,corps:n}},[t.units]),r=i.units,o=i.corps,l=a.useMemo(function(){return t.positionsHistory.filter(function(e){return"none"!==e.position})},[t.positionsHistory]),s=a.useMemo(function(){return t.positionsCounter.center+t.positionsCounter.fukujin+t.positionsCounter.selected+t.positionsCounter.under>0},[t.positionsCounter]),c=a.useMemo(function(){var e=[],n=t.singleImages.reverse().filter(function(e){return""!==e.large}),a=Array.isArray(n),i=0;for(n=a?n:n[Symbol.iterator]();;){var r;if(a){if(i>=n.length)break;r=n[i++]}else{if((i=n.next()).done)break;r=i.value}for(var o=r,l=!1,s=0,c=e;s<c.length;s++)if(c[s].large===o.large){l=!0;break}l||e.push(o)}return e},[t.singleImages]);return t?a.createElement(j,{name:t.name,names:n,profileImage:t.profileImage,glowStickColor:t.glowStickColor,sites:t.sites,join:t.join,graduation:t.graduation,birthday:t.birthday,height:t.height,bloodType:t.bloodType,origin:t.origin,units:r,corps:o,photoAlbums:t.photoAlbums,shouldShowPositionCounter:s,positionsHistory:l,positionsCounter:t.positionsCounter,gallery:c}):null}},246:function(e,t,n){"use strict";n(161)("small",function(e){return function(){return e(this,"small","","")}})},247:function(e,t,n){"use strict";n(19),n(49),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=d(i),o=d(n(92)),l=d(n(10)),s=n(248),c=d(n(249)),u=d(n(250)),m=d(n(251));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,E=0,b=0,y=0,g="data-lazyload-listened",N=[],w=[],k=!1;try{var C=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,C)}catch(H){}var j=!!k&&{capture:!1,passive:!0},O=function(e){var t=o.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=o.default.findDOMNode(e),a=void 0,i=void 0,r=void 0,l=void 0;try{var s=t.getBoundingClientRect();a=s.top,i=s.left,r=s.height,l=s.width}catch(H){a=v,i=E,r=y,l=b}var c=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,m=Math.max(a,0),d=Math.max(i,0),f=Math.min(c,a+r)-m,p=Math.min(u,i+l)-d,h=void 0,g=void 0,N=void 0,w=void 0;try{var k=n.getBoundingClientRect();h=k.top,g=k.left,N=k.height,w=k.width}catch(H){h=v,g=E,N=y,w=b}var C=h-m,j=g-d,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return C-O[0]<=f&&C+N+O[1]>=0&&j-O[0]<=p&&j+w+O[1]>=0}(e,n):function(e){var t=o.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var i=t.getBoundingClientRect();n=i.top,a=i.height}catch(H){n=v,a=y}var r=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=r&&n+a+l[1]>=0}(e))?e.visible||(e.props.once&&w.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){for(var e=0;e<N.length;++e){var t=N[e];O(t)}w.forEach(function(e){var t=N.indexOf(e);-1!==t&&N.splice(t,1)}),w=[]},_=void 0,x=null,A=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,i.Component),a(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",x,j),(0,s.off)(window,"resize",x,j),x=null),x||(void 0!==this.props.debounce?(x=(0,u.default)(M,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(x=(0,m.default)(M,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):x=M),this.props.overflow){var a=(0,c.default)(o.default.findDOMNode(this));if(a&&"function"==typeof a.getAttribute){var i=+a.getAttribute(g)+1;1===i&&a.addEventListener("scroll",x,j),a.setAttribute(g,i)}}else if(0===N.length||n){var r=this.props,l=r.scroll,d=r.resize;l&&(0,s.on)(e,"scroll",x,j),d&&(0,s.on)(window,"resize",x,j)}N.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(o.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",x,j),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=N.indexOf(this);-1!==n&&N.splice(n,1),0===N.length&&"undefined"!=typeof window&&((0,s.off)(window,"resize",x,j),(0,s.off)(window,"scroll",x,j))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();A.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},A.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var T=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){f(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+T(t),e}return h(o,i.Component),a(o,[{key:"render",value:function(){return r.default.createElement(A,e,r.default.createElement(t,this.props))}}]),o}()}},t.default=A,t.forceCheck=M},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(a),r=i.position,o=i.overflow,l=i["overflow-x"],s=i["overflow-y"];if("static"===r&&t)a=a.parentNode;else{if(n.test(o)&&n.test(l)&&n.test(s))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=void 0,i=void 0,r=void 0,o=void 0,l=void 0,s=function s(){var c=+new Date-o;c<t&&c>=0?a=setTimeout(s,t-c):(a=null,n||(l=e.apply(r,i),a||(r=null,i=null)))};return function(){r=this,i=arguments,o=+new Date;var c=n&&!a;return a||(a=setTimeout(s,t)),c&&(l=e.apply(r,i),r=null,i=null),l}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a,i;return t||(t=250),function(){var r=n||this,o=+new Date,l=arguments;a&&o<a+t?(clearTimeout(i),i=setTimeout(function(){a=o,e.apply(r,l)},t)):(a=o,e.apply(r,l))}}},252:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),i=function(e){var t=e.className;return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},254:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),i=n(28),r=n(9),o=Object(i.d)(function(e){var t,n=e.list;switch(e.intl.locale){case r.d.Zh:case r.d.Ja:t="、";break;default:t=", "}return a.createElement(a.Fragment,null,n.join(t))})}}]);
//# sourceMappingURL=component---src-containers-member-index-tsx-6d1ffa4210c56e6405ee.js.map