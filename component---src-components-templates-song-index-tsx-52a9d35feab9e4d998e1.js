(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(e,t,n){"use strict";n.r(t);n(18),n(244),n(48),n(28),n(3),n(114),n(89),n(115);var r=n(0),a=n(232),o=n.n(a),i=n(243),l=n(252),c=n(25),s=n(68),u=n(34),m=n(19),f=n(255),d=(n(69),n(4),n(254)),p=Object(u.d)(function(e){var t=e.num,n=e.type,a=e.intl.locale,o=r.useMemo(function(){switch(n){case"cd":return a===m.d.Ja?"枚":"张";case"row":return a===m.d.Ja?"列":"排";default:return a===m.d.Ja?"枚":"张"}},[n]);return a===m.d.En?"cd"!==n?r.createElement(r.Fragment,null,Object(s.b)(t)," ",n):r.createElement(r.Fragment,null,Object(s.b)(t)):Number(t)?a===m.d.Ja?r.createElement(r.Fragment,null,t+o,"目"):r.createElement(r.Fragment,null,"第",t+o):r.createElement(r.Fragment,null,"under")}),v=n(113);n.d(t,"query",function(){return N});var h={visible:{opacity:1,x:0,transition:{when:"beforeChildren"}},hidden:{opacity:0,x:-20}},b={visible:{opacity:1,x:0},hidden:{opacity:0,x:-20}},g={visible:{opacity:1,y:0,transition:{when:"beforeChildren",staggerChildren:.2}},hidden:{opacity:0,y:20}},E={visible:{opacity:1,y:0},hidden:{opacity:0,y:-20}},y=Object(u.d)(function(e){var t=e.singleNumber,n=e.tagName,a=e.intl.locale;return""===n?null:n.includes("generation")?r.createElement("p",{className:o.a.caption},"#",r.createElement(u.b,{id:n})):"selected"===n||"under"===n?a===m.d.En?r.createElement("p",{className:o.a.caption},"#",r.createElement(p,{num:t,type:"cd"})," ",r.createElement(u.b,{id:"single"})," ",r.createElement(u.b,{id:n})," ",r.createElement(u.b,{id:"members"})):r.createElement("p",{className:o.a.caption},"#",r.createElement(p,{num:t,type:"cd"}),r.createElement(u.b,{id:"single"}),r.createElement(u.b,{id:n}),r.createElement(u.b,{id:"members"})):r.createElement("p",{className:o.a.caption},"#",n)}),w=function(e){var t=e.isCenter;return r.createElement(d.a,{nameKey:m.c,name:{lastName:"小嶋",lastNameEn:"kojima",firstName:"陽菜",firstNameEn:"haruna"},image:{large:"https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_large.jpg",small:"https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_small.jpg"},isCenter:t})},N="2949484209";t.default=function(e){var t=e.data;if(Object(v.b)(),t){var n=t.songsJson,a=r.useMemo(function(){return[].concat([n.single].filter(function(e){return""!==e.number}).map(function(e){var t=e.number;return"#"+Object(s.b)(t)+" single"}),n.albums.map(function(e){var t=e.number;return"#"+Object(s.b)(t)+" album"}))},[n.single,n.albums]),N=r.useMemo(function(){var e,r,a=Number(n.single.number),o=t.allMembersJson.nodes,i=o,l=Array.isArray(i),c=0;for(i=l?i:i[Symbol.iterator]();;){var s;if(l){if(c>=i.length)break;s=i[c++]}else{if((c=i.next()).done)break;s=c.value}var u=s;""!==n.single.number&&(u.profileImage=u.singleImages[a-1])}return e=o,r="name",Object.assign.apply(Object,[{}].concat(e.map(function(e){var t;return(t={})[String(e[r])]=e,t})))},[t.allMembersJson.nodes,n.single.number]),k=r.useMemo(function(){return[n.formations.firstRow,n.formations.secondRow,n.formations.thirdRow,n.formations.fourthRow].filter(function(e){return e.length>0})},[n.formations]);return r.createElement(i.a,{className:o.a.background},r.createElement(c.b.div,{whileHover:{x:-7,scale:1.5},className:o.a.link},r.createElement("button",{onClick:function(){window.history.back()},"aria-label":"Go Back"},r.createElement(l.a,{className:o.a.back}))),r.createElement("div",null,t?r.createElement(c.b.div,{variants:h,className:o.a.container},r.createElement(c.b.div,{variants:b,className:o.a.heading},r.createElement("h1",{className:o.a.title},n.title),r.createElement("h4",{className:o.a.tags},a.map(function(e,t){return r.createElement("span",{key:t},e)}))),r.createElement(c.b.div,{variants:g,className:o.a.flexbox},r.createElement(c.b.div,{variants:E,className:o.a.artwork},r.createElement("img",{src:n.artwork.medium,srcSet:n.artwork.large+" 1.5x",alt:n.title})),r.createElement(c.b.div,{variants:E,className:o.a.content},r.createElement("section",{className:o.a.section},r.createElement("h2",{className:o.a.subheading},r.createElement(u.b,{id:"performers"})),r.createElement(y,{singleNumber:n.performersTag.singleNumber,tagName:n.performersTag.name}),r.createElement("div",{className:o.a.formation},k.length>1?k.map(function(e,t){return r.createElement("div",{key:t,className:o.a.row},r.createElement("h4",{className:o.a.rowindex},r.createElement(p,{num:t+1,type:"row"})),r.createElement("div",{className:o.a.grid},e.map(function(e){if(e!==m.c){var t=N[e];return r.createElement(d.a,{key:t.name,nameKey:e,name:t.nameNotations,image:t.profileImage,isCenter:n.performers.center.includes(t.name)})}return r.createElement(w,{key:e,isCenter:n.performers.center.includes(e)})})))}):r.createElement("div",{className:o.a.grid},k[0].map(function(e){if(e!==m.c){var t=N[e];return r.createElement(d.a,{key:e,nameKey:e,name:t.nameNotations,image:t.profileImage,isCenter:n.performers.center.includes(e)})}return r.createElement(w,{key:e,isCenter:n.performers.center.includes(e)})})))),r.createElement("section",{className:o.a.section},r.createElement("h2",{className:o.a.subheading+" "+o.a.creatorscontainer},r.createElement(u.b,{id:"creators"})),r.createElement("div",{className:o.a.creators},n.creators.lyrics.length>0?r.createElement("div",{className:o.a.creatorsitem},r.createElement("span",{className:o.a.creatorwork},r.createElement(u.b,{id:"lyrics"})),r.createElement("span",{className:o.a.creatornames},r.createElement(f.a,{list:n.creators.lyrics}))):null,n.creators.compose.length>0?r.createElement("div",{className:o.a.creatorsitem},r.createElement("span",{className:o.a.creatorwork},r.createElement(u.b,{id:"compose"})),r.createElement("span",{className:o.a.creatornames},r.createElement(f.a,{list:n.creators.compose}))):null,n.creators.arrange.length>0?r.createElement("div",{className:o.a.creatorsitem},r.createElement("span",{className:o.a.creatorwork},r.createElement(u.b,{id:"arrange"})),r.createElement("span",{className:o.a.creatornames},r.createElement(f.a,{list:n.creators.arrange}))):null,n.creators.direct.length>0?r.createElement("div",{className:o.a.creatorsitem},r.createElement("span",{className:o.a.creatorwork},r.createElement(u.b,{id:"direct"})),r.createElement("span",{className:o.a.creatornames},r.createElement(f.a,{list:n.creators.direct}))):null))))):r.createElement("h1",null,"Song Page")))}return null}},242:function(e,t,n){var r=n(8),a=n(10),o=n(46),i=/"/g,l=function(e,t,n,r){var a=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},243:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),a=n(220),o=n.n(a),i=n(68),l=function(e){var t=e.children,n=e.className;return r.createElement("div",{className:Object(i.a)(o.a.container,n)},t)}},244:function(e,t,n){"use strict";n(242)("link",function(e){return function(t){return e(this,"a","href",t)}})},246:function(e,t,n){"use strict";n(242)("small",function(e){return function(){return e(this,"small","","")}})},247:function(e,t,n){"use strict";n(18),n(47),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=f(a),i=f(n(88)),l=f(n(9)),c=n(248),s=f(n(249)),u=f(n(250)),m=f(n(251));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,b=0,g=0,E=0,y="data-lazyload-listened",w=[],N=[],k=!1;try{var O=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,O)}catch(L){}var j=!!k&&{capture:!1,passive:!0},C=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),r=void 0,a=void 0,o=void 0,l=void 0;try{var c=t.getBoundingClientRect();r=c.top,a=c.left,o=c.height,l=c.width}catch(L){r=h,a=b,o=E,l=g}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,m=Math.max(r,0),f=Math.max(a,0),d=Math.min(s,r+o)-m,p=Math.min(u,a+l)-f,v=void 0,y=void 0,w=void 0,N=void 0;try{var k=n.getBoundingClientRect();v=k.top,y=k.left,w=k.height,N=k.width}catch(L){v=h,y=b,w=E,N=g}var O=v-m,j=y-f,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-C[0]<=d&&O+w+C[1]>=0&&j-C[0]<=p&&j+N+C[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(L){n=h,r=E}var o=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=o&&n+r+l[1]>=0}(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}N.forEach(function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)}),N=[]},_=void 0,x=null,T=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return v(t,a.Component),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,c.off)(e,"scroll",x,j),(0,c.off)(window,"resize",x,j),x=null),x||(void 0!==this.props.debounce?(x=(0,u.default)(M,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(x=(0,m.default)(M,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):x=M),this.props.overflow){var r=(0,s.default)(i.default.findDOMNode(this));if(r&&"function"==typeof r.getAttribute){var a=+r.getAttribute(y)+1;1===a&&r.addEventListener("scroll",x,j),r.setAttribute(y,a)}}else if(0===w.length||n){var o=this.props,l=o.scroll,f=o.resize;l&&(0,c.on)(e,"scroll",x,j),f&&(0,c.on)(window,"resize",x,j)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(i.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",x,j),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,c.off)(window,"resize",x,j),(0,c.off)(window,"scroll",x,j))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:o.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();T.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},T.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){d(this,i);var e=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+z(t),e}return v(i,a.Component),r(i,[{key:"render",value:function(){return o.default.createElement(T,e,o.default.createElement(t,this.props))}}]),i}()}},t.default=T,t.forceCheck=M},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(r),o=a.position,i=a.overflow,l=a["overflow-x"],c=a["overflow-y"];if("static"===o&&t)r=r.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,a=void 0,o=void 0,i=void 0,l=void 0,c=function c(){var s=+new Date-i;s<t&&s>=0?r=setTimeout(c,t-s):(r=null,n||(l=e.apply(o,a),r||(o=null,a=null)))};return function(){o=this,a=arguments,i=+new Date;var s=n&&!r;return r||(r=setTimeout(c,t)),s&&(l=e.apply(o,a),o=null,a=null),l}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,a;return t||(t=250),function(){var o=n||this,i=+new Date,l=arguments;r&&i<r+t?(clearTimeout(a),a=setTimeout(function(){r=i,e.apply(o,l)},t)):(r=i,e.apply(o,l))}}},252:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),a=function(e){var t=e.className;return r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:t},r.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}},254:function(e,t,n){"use strict";n.d(t,"a",function(){return f});n(246),n(244),n(18);var r=n(0),a=n(247),o=n.n(a),i=n(222),l=n.n(i),c=n(25),s=n(34),u=n(19),m=n(112),f=Object(s.d)(function(e){var t=e.image,n=e.nameKey,a=e.name,i=e.intl.locale,s=e.highlightBgColor,f=e.highlightTextColor,d=e.isCenter,p=r.useMemo(function(){return i===u.d.En?a.lastNameEn+" "+a.firstNameEn:a.lastName+" "+a.firstName},[]),v=r.useMemo(function(){return s?{hover:{scale:1.08,backgroundColor:s}}:{hover:{scale:1.08}}},[s]),h=r.useMemo(function(){return f?{hover:{color:f}}:void 0},[f]);return n!==u.c?r.createElement(m.a,{to:"/members/"+n,className:l.a.link},r.createElement(c.b.div,{whileHover:"hover",variants:v,transition:{duration:.3},style:d?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},r.createElement(o.a,{offset:100},r.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:p,className:l.a.image})),r.createElement(c.b.div,{variants:h,transition:{duration:.3},style:d?{color:"#ffffff"}:void 0,className:l.a.name},r.createElement("span",null,p)))):r.createElement("div",{style:d?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},r.createElement(o.a,{offset:100},r.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:p,className:l.a.image})),r.createElement("div",{style:d?{color:"#ffffff"}:void 0,className:l.a.name},r.createElement("span",null,p)))})},255:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n(34),o=n(19),i=Object(a.d)(function(e){var t,n=e.list;switch(e.intl.locale){case o.d.Zh:case o.d.Ja:t="、";break;default:t=", "}return r.createElement(r.Fragment,null,n.join(t))})}}]);
//# sourceMappingURL=component---src-components-templates-song-index-tsx-52a9d35feab9e4d998e1.js.map