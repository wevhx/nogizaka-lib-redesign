(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(71),i=(n(246),n(247)),a=n.n(i),l=n(231),u=n.n(l),s=n(25),c=n(34),d={isHovered:{opacity:.7},isNotHovered:{opacity:0}},f={isHovered:{opacity:1},isNotHovered:{opacity:0}},p=function(e){var t=e.images,n=e.title,r=e.className,i=o.useState(!1),l=i[0],p=i[1];return o.createElement(s.b.div,{onHoverStart:function(){return p(!0)},onHoverEnd:function(){return p(!1)},whileHover:{scale:1.1},className:Object(c.a)(u.a.container,r)},o.createElement(a.a,{offset:100},o.createElement("img",{src:t.small,srcSet:t.medium+" 2x, "+t.large+" 3x",alt:n,className:u.a.image})),o.createElement(s.b.div,{initial:!1,animate:l?"isHovered":"isNotHovered",variants:d,className:u.a.background}),o.createElement(s.b.div,{initial:!1,animate:l?"isHovered":"isNotHovered",variants:f,className:u.a.title},o.createElement("h3",null,n)))},v=n(232),h=n.n(v),m={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.05,duration:.1}},hidden:{opacity:0,transition:{duration:.1}}},b={visible:{opacity:1,y:0},hidden:{opacity:0,y:20}},y=function(e){var t=e.cds,n=e.page;return o.createElement(s.a,null,o.createElement(s.b.div,{key:n,exit:"hidden",variants:m,className:h.a.grid},t.map(function(e){var t=e.node;return o.createElement(s.b.div,{variants:b,key:n+t.number,className:h.a.artwork},o.createElement(r.a,{to:"/"+n+"/"+t.number},o.createElement(p,{images:t.artworks[0],title:t.title})))})))},w=n(32);n.d(t,"query",function(){return g});var g="1289736959";t.default=function(e){var t=e.data,n=t.allSinglesJson,r=t.allAlbumsJson,i=e.pageContext.currentTab,a=o.useMemo(function(){return i===w.a.Singles?n.edges:r.edges},[i,n,r]);return void 0!==n&&void 0!==r?o.createElement(y,{page:i,cds:a}):null}},246:function(e,t,n){"use strict";n(161)("small",function(e){return function(){return e(this,"small","","")}})},247:function(e,t,n){"use strict";n(19),n(49),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=f(r),a=f(n(92)),l=f(n(10)),u=n(248),s=f(n(249)),c=f(n(250)),d=f(n(251));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,b=0,y=0,w=0,g="data-lazyload-listened",E=[],O=[],_=!1;try{var N=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,N)}catch(D){}var M=!!_&&{capture:!1,passive:!0},H=function(e){var t=a.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=a.default.findDOMNode(e),o=void 0,r=void 0,i=void 0,l=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,l=u.width}catch(D){o=m,r=b,i=w,l=y}var s=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),f=Math.max(r,0),p=Math.min(s,o+i)-d,v=Math.min(c,r+l)-f,h=void 0,g=void 0,E=void 0,O=void 0;try{var _=n.getBoundingClientRect();h=_.top,g=_.left,E=_.height,O=_.width}catch(D){h=m,g=b,E=w,O=y}var N=h-d,M=g-f,H=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return N-H[0]<=p&&N+E+H[1]>=0&&M-H[0]<=v&&M+O+H[1]>=0}(e,n):function(e){var t=a.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(D){n=m,o=w}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){for(var e=0;e<E.length;++e){var t=E[e];H(t)}O.forEach(function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)}),O=[]},j=void 0,k=null,T=function(e){function t(e){p(this,t);var n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===j||"debounce"===j&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",k,M),(0,u.off)(window,"resize",k,M),k=null),k||(void 0!==this.props.debounce?(k=(0,c.default)(C,"number"==typeof this.props.debounce?this.props.debounce:300),j="debounce"):void 0!==this.props.throttle?(k=(0,d.default)(C,"number"==typeof this.props.throttle?this.props.throttle:300),j="throttle"):k=C),this.props.overflow){var o=(0,s.default)(a.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(g)+1;1===r&&o.addEventListener("scroll",k,M),o.setAttribute(g,r)}}else if(0===E.length||n){var i=this.props,l=i.scroll,f=i.resize;l&&(0,u.on)(e,"scroll",k,M),f&&(0,u.on)(window,"resize",k,M)}E.push(this),H(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(a.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",k,M),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",k,M),(0,u.off)(window,"scroll",k,M))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:i.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();T.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},T.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var A=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){p(this,a);var e=v(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+A(t),e}return h(a,r.Component),o(a,[{key:"render",value:function(){return i.default.createElement(T,e,i.default.createElement(t,this.props))}}]),a}()}},t.default=T,t.forceCheck=C},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,u=function u(){var s=+new Date-a;s<t&&s>=0?o=setTimeout(u,t-s):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var s=n&&!o;return o||(o=setTimeout(u,t)),s&&(l=e.apply(i,r),i=null,r=null),l}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout(function(){o=a,e.apply(i,l)},t)):(o=a,e.apply(i,l))}}}}]);
//# sourceMappingURL=component---src-containers-cds-index-tsx-e3664c7ec8a217723697.js.map