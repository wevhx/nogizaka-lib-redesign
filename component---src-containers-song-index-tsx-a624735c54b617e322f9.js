(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(e,t,n){"use strict";n.r(t);n(50),n(29),n(3),n(118);var a=n(0),r=(n(19),n(160),n(72),n(93),n(236)),o=n.n(r),i=n(116),l=n(252),s=n(25),c=n(28),u=n(9),m=n(254),d=n(253),f=n(34),p=Object(c.d)(function(e){var t=e.num,n=e.type,r=e.intl.locale,o=a.useMemo(function(){switch(n){case"cd":return r===u.d.Ja?"枚":"张";case"row":return r===u.d.Ja?"列":"排";default:return r===u.d.Ja?"枚":"张"}},[n]);return r===u.d.En?"cd"!==n?a.createElement(a.Fragment,null,Object(f.b)(t)," ",n):a.createElement(a.Fragment,null,Object(f.b)(t)):Number(t)?r===u.d.Ja?a.createElement(a.Fragment,null,t+o,"目"):a.createElement(a.Fragment,null,"第",t+o):a.createElement(a.Fragment,null,"under")}),v=n(117),h={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},b={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},g={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},E={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},y=Object(c.d)(function(e){var t=e.singleNumber,n=e.tagName,r=e.intl.locale;return""===n?null:n.includes("generation")?a.createElement("p",{className:o.a.caption},"#",a.createElement(c.b,{id:n})):"selected"===n||"under"===n?r===u.d.En?a.createElement("p",{className:o.a.caption},"#",a.createElement(p,{num:t,type:"cd"})," ",a.createElement(c.b,{id:"single"})," ",a.createElement(c.b,{id:n})," ",a.createElement(c.b,{id:"members"})):a.createElement("p",{className:o.a.caption},"#",a.createElement(p,{num:t,type:"cd"}),a.createElement(c.b,{id:"single"}),a.createElement(c.b,{id:n}),a.createElement(c.b,{id:"members"})):a.createElement("p",{className:o.a.caption},"#",n)}),w=function(e){var t=e.isCenter;return a.createElement(d.a,{nameKey:u.c,name:{lastName:"小嶋",lastNameEn:"kojima",firstName:"陽菜",firstNameEn:"haruna"},image:{large:"https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_large.jpg",small:"https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_small.jpg"},isCenter:t})},N=function(e){var t=e.title,n=e.type,r=e.songTags,f=e.artwork,N=e.performersTag,O=e.formation,k=e.members,j=e.centers,C=e.creators;return Object(v.b)(),a.createElement(i.a,{className:o.a.background},a.createElement(s.b.div,{whileHover:{x:-7,scale:1.5},className:o.a.link},a.createElement("button",{onClick:function(){window.history.back()},"aria-label":"Go Back"},a.createElement(l.a,{className:o.a.back}))),a.createElement(s.b.div,{variants:h,className:o.a.container},a.createElement(s.b.div,{variants:b,className:o.a.heading},a.createElement("h1",{className:o.a.title},t),a.createElement("h4",{className:o.a.tags},a.createElement("span",null,"#",a.createElement(c.b,{id:n})),r.map(function(e,t){return a.createElement("span",{key:t},e)}))),a.createElement(s.b.div,{variants:g,className:o.a.flexbox},a.createElement(s.b.div,{variants:E,className:o.a.artwork},a.createElement("img",{src:f.medium,srcSet:f.large+" 1.5x",alt:t})),a.createElement(s.b.div,{variants:E,className:o.a.content},a.createElement("section",{className:o.a.section},a.createElement("h2",{className:o.a.subheading},a.createElement(c.b,{id:"performers"})),a.createElement(y,{singleNumber:N.singleNumber,tagName:N.name}),a.createElement("div",{className:o.a.formation},O.length>1?O.map(function(e,t){return a.createElement("div",{key:t,className:o.a.row},a.createElement("h4",{className:o.a.rowindex},a.createElement(p,{num:t+1,type:"row"})),a.createElement("div",{className:o.a.grid},e.map(function(e){if(e!==u.c){var t=k[e];return a.createElement(d.a,{key:t.name,nameKey:e,name:t.nameNotations,image:t.profileImage,isCenter:j.includes(t.name)})}return a.createElement(w,{key:e,isCenter:j.includes(e)})})))}):a.createElement("div",{className:o.a.grid},O[0].map(function(e){if(e!==u.c){var t=k[e];return a.createElement(d.a,{key:e,nameKey:e,name:t.nameNotations,image:t.profileImage,isCenter:j.includes(e)})}return a.createElement(w,{key:e,isCenter:j.includes(e)})})))),a.createElement("section",{className:o.a.section},a.createElement("h2",{className:o.a.subheading+" "+o.a.creatorscontainer},a.createElement(c.b,{id:"creators"})),a.createElement("div",{className:o.a.creators},C.lyrics.length>0?a.createElement("div",{className:o.a.creatorsitem},a.createElement("span",{className:o.a.creatorjob},a.createElement(c.b,{id:"lyrics"})),a.createElement("span",{className:o.a.creatornames},a.createElement(m.a,{list:C.lyrics}))):null,C.compose.length>0?a.createElement("div",{className:o.a.creatorsitem},a.createElement("span",{className:o.a.creatorjob},a.createElement(c.b,{id:"compose"})),a.createElement("span",{className:o.a.creatornames},a.createElement(m.a,{list:C.compose}))):null,C.arrange.length>0?a.createElement("div",{className:o.a.creatorsitem},a.createElement("span",{className:o.a.creatorjob},a.createElement(c.b,{id:"arrange"})),a.createElement("span",{className:o.a.creatornames},a.createElement(m.a,{list:C.arrange}))):null,C.direct.length>0?a.createElement("div",{className:o.a.creatorsitem},a.createElement("span",{className:o.a.creatorjob},a.createElement(c.b,{id:"direct"})),a.createElement("span",{className:o.a.creatornames},a.createElement(m.a,{list:C.direct}))):null))))))};n(73),n(4);n.d(t,"query",function(){return O});var O="2949484209";t.default=function(e){var t=e.data,n=t.songsJson,r=t.allMembersJson,o=a.useMemo(function(){return[].concat([n.single].filter(function(e){return""!==e.number}).map(function(e){var t=e.number;return"#"+Object(f.b)(t)+" single"}),n.albums.map(function(e){var t=e.number;return"#"+Object(f.b)(t)+" album"}))},[n.single,n.albums]),i=a.useMemo(function(){var e,t,a=Number(n.single.number),o=r.nodes,i=o,l=Array.isArray(i),s=0;for(i=l?i:i[Symbol.iterator]();;){var c;if(l){if(s>=i.length)break;c=i[s++]}else{if((s=i.next()).done)break;c=s.value}var u=c;""!==n.single.number&&(u.profileImage=u.singleImages[a-1])}return e=o,t="name",Object.assign.apply(Object,[{}].concat(e.map(function(e){var n;return(n={})[String(e[t])]=e,n})))},[r.nodes,n.single.number]),l=a.useMemo(function(){return[n.formations.firstRow,n.formations.secondRow,n.formations.thirdRow,n.formations.fourthRow].filter(function(e){return e.length>0})},[n.formations]);return n?a.createElement(N,{title:n.title,songTags:o,type:n.type,artwork:n.artwork,performersTag:n.performersTag,formation:l,members:i,centers:n.performers.center,creators:n.creators}):null}},246:function(e,t,n){"use strict";n(161)("small",function(e){return function(){return e(this,"small","","")}})},247:function(e,t,n){"use strict";n(19),n(49),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=d(r),i=d(n(92)),l=d(n(10)),s=n(248),c=d(n(249)),u=d(n(250)),m=d(n(251));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,b=0,g=0,E=0,y="data-lazyload-listened",w=[],N=[],O=!1;try{var k=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,k)}catch(A){}var j=!!O&&{capture:!1,passive:!0},C=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),a=void 0,r=void 0,o=void 0,l=void 0;try{var s=t.getBoundingClientRect();a=s.top,r=s.left,o=s.height,l=s.width}catch(A){a=h,r=b,o=E,l=g}var c=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,m=Math.max(a,0),d=Math.max(r,0),f=Math.min(c,a+o)-m,p=Math.min(u,r+l)-d,v=void 0,y=void 0,w=void 0,N=void 0;try{var O=n.getBoundingClientRect();v=O.top,y=O.left,w=O.height,N=O.width}catch(A){v=h,y=b,w=E,N=g}var k=v-m,j=y-d,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return k-C[0]<=f&&k+w+C[1]>=0&&j-C[0]<=p&&j+N+C[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var r=t.getBoundingClientRect();n=r.top,a=r.height}catch(A){n=h,a=E}var o=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=o&&n+a+l[1]>=0}(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}N.forEach(function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)}),N=[]},_=void 0,x=null,T=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return v(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",x,j),(0,s.off)(window,"resize",x,j),x=null),x||(void 0!==this.props.debounce?(x=(0,u.default)(M,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(x=(0,m.default)(M,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):x=M),this.props.overflow){var a=(0,c.default)(i.default.findDOMNode(this));if(a&&"function"==typeof a.getAttribute){var r=+a.getAttribute(y)+1;1===r&&a.addEventListener("scroll",x,j),a.setAttribute(y,r)}}else if(0===w.length||n){var o=this.props,l=o.scroll,d=o.resize;l&&(0,s.on)(e,"scroll",x,j),d&&(0,s.on)(window,"resize",x,j)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(i.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",x,j),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,s.off)(window,"resize",x,j),(0,s.off)(window,"scroll",x,j))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:o.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();T.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},T.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){f(this,i);var e=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+z(t),e}return v(i,r.Component),a(i,[{key:"render",value:function(){return o.default.createElement(T,e,o.default.createElement(t,this.props))}}]),i}()}},t.default=T,t.forceCheck=M},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(a),o=r.position,i=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===o&&t)a=a.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(s))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=void 0,r=void 0,o=void 0,i=void 0,l=void 0,s=function s(){var c=+new Date-i;c<t&&c>=0?a=setTimeout(s,t-c):(a=null,n||(l=e.apply(o,r),a||(o=null,r=null)))};return function(){o=this,r=arguments,i=+new Date;var c=n&&!a;return a||(a=setTimeout(s,t)),c&&(l=e.apply(o,r),o=null,r=null),l}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a,r;return t||(t=250),function(){var o=n||this,i=+new Date,l=arguments;a&&i<a+t?(clearTimeout(r),r=setTimeout(function(){a=i,e.apply(o,l)},t)):(a=i,e.apply(o,l))}}},252:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),r=function(e){var t=e.className;return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},253:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(246),n(160),n(19);var a=n(0),r=n(247),o=n.n(r),i=n(226),l=n.n(i),s=n(25),c=n(28),u=n(9),m=n(71),d=Object(c.d)(function(e){var t=e.image,n=e.nameKey,r=e.name,i=e.intl.locale,c=e.highlightBgColor,d=e.highlightTextColor,f=e.isCenter,p=a.useMemo(function(){return i===u.d.En?r.lastNameEn+" "+r.firstNameEn:r.lastName+" "+r.firstName},[]),v=a.useMemo(function(){return c?{hover:{scale:1.08,backgroundColor:c}}:{hover:{scale:1.08}}},[c]),h=a.useMemo(function(){return d?{hover:{color:d}}:void 0},[d]);return n!==u.c?a.createElement(m.a,{to:"/members/"+n,className:l.a.link},a.createElement(s.b.div,{whileHover:"hover",variants:v,transition:{duration:.3},style:f?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},a.createElement(o.a,{offset:100},a.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:p,className:l.a.image})),a.createElement(s.b.div,{variants:h,transition:{duration:.3},style:f?{color:"#ffffff"}:void 0,className:l.a.name},a.createElement("span",null,p)))):a.createElement("div",{style:f?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},a.createElement(o.a,{offset:100},a.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:p,className:l.a.image})),a.createElement("div",{style:f?{color:"#ffffff"}:void 0,className:l.a.name},a.createElement("span",null,p)))})},254:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n(28),o=n(9),i=Object(r.d)(function(e){var t,n=e.list;switch(e.intl.locale){case o.d.Zh:case o.d.Ja:t="、";break;default:t=", "}return a.createElement(a.Fragment,null,n.join(t))})}}]);
//# sourceMappingURL=component---src-containers-song-index-tsx-a624735c54b617e322f9.js.map