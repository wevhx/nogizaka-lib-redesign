(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(e,t,n){"use strict";n.r(t);var o=n(0),r=(n(19),n(233)),i=n.n(r),a=n(253),l=n(25),u={visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.04,duration:.1}},hidden:{opacity:0,transition:{duration:.1}}},s={visible:{opacity:1,y:0},hidden:{opacity:0,y:20}},c=function(e){var t=e.page,n=e.members;return o.createElement(l.a,null,o.createElement(l.b.div,{key:t,exit:"hidden",variants:u,className:i.a.grid},n.map(function(e){var t=e.name,n=e.profileImage,r=e.nameNotations;return o.createElement(l.b.div,{key:t,variants:s,className:i.a.card},o.createElement(a.a,{image:n,nameKey:t,name:r,highlightBgColor:"#e887a3",highlightTextColor:"#ffffff"}))})))},f=n(32);n.d(t,"query",function(){return d});var d="2685876392";t.default=function(e){var t=e.data.allMembersJson,n=e.pageContext.currentTab,r=o.useMemo(function(){var e={first:[],second:[],third:[],fourth:[],graduated:[]};if(t){var n=t.nodes;e={first:n.filter(function(e){return e.join===f.c.First&&!e.graduation.isGraduated}),second:n.filter(function(e){return e.join===f.c.Second&&!e.graduation.isGraduated}),third:n.filter(function(e){return e.join===f.c.Third&&!e.graduation.isGraduated}),fourth:n.filter(function(e){return e.join===f.c.Fourth&&!e.graduation.isGraduated}),graduated:n.filter(function(e){return e.graduation.isGraduated})}}return e},[t]),i=o.useMemo(function(){switch(n){case f.d.FirstGeneration:return r.first;case f.d.SecondGeneration:return r.second;case f.d.ThirdGeneration:return r.third;case f.d.FourthGeneration:return r.fourth;case f.d.Graduated:return r.graduated;default:return r.first}},[n,r]);return t?o.createElement(c,{page:n,members:i}):null}},246:function(e,t,n){"use strict";n(161)("small",function(e){return function(){return e(this,"small","","")}})},247:function(e,t,n){"use strict";n(19),n(49),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=d(r),a=d(n(92)),l=d(n(10)),u=n(248),s=d(n(249)),c=d(n(250)),f=d(n(251));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,b=0,y=0,g=0,w="data-lazyload-listened",E=[],O=[],N=!1;try{var C=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,C)}catch(P){}var M=!!N&&{capture:!1,passive:!0},_=function(e){var t=a.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=a.default.findDOMNode(e),o=void 0,r=void 0,i=void 0,l=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,l=u.width}catch(P){o=h,r=b,i=g,l=y}var s=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,f=Math.max(o,0),d=Math.max(r,0),p=Math.min(s,o+i)-f,v=Math.min(c,r+l)-d,m=void 0,w=void 0,E=void 0,O=void 0;try{var N=n.getBoundingClientRect();m=N.top,w=N.left,E=N.height,O=N.width}catch(P){m=h,w=b,E=g,O=y}var C=m-f,M=w-d,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return C-_[0]<=p&&C+E+_[1]>=0&&M-_[0]<=v&&M+O+_[1]>=0}(e,n):function(e){var t=a.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(P){n=h,o=g}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},j=function(){for(var e=0;e<E.length;++e){var t=E[e];_(t)}O.forEach(function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)}),O=[]},T=void 0,k=null,x=function(e){function t(e){p(this,t);var n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return m(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",k,M),(0,u.off)(window,"resize",k,M),k=null),k||(void 0!==this.props.debounce?(k=(0,c.default)(j,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(k=(0,f.default)(j,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):k=j),this.props.overflow){var o=(0,s.default)(a.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",k,M),o.setAttribute(w,r)}}else if(0===E.length||n){var i=this.props,l=i.scroll,d=i.resize;l&&(0,u.on)(e,"scroll",k,M),d&&(0,u.on)(window,"resize",k,M)}E.push(this),_(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(a.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",k,M),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",k,M),(0,u.off)(window,"scroll",k,M))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:i.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();x.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},x.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var D=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){p(this,a);var e=v(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+D(t),e}return m(a,r.Component),o(a,[{key:"render",value:function(){return i.default.createElement(x,e,i.default.createElement(t,this.props))}}]),a}()}},t.default=x,t.forceCheck=j},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,u=function u(){var s=+new Date-a;s<t&&s>=0?o=setTimeout(u,t-s):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var s=n&&!o;return o||(o=setTimeout(u,t)),s&&(l=e.apply(i,r),i=null,r=null),l}}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout(function(){o=a,e.apply(i,l)},t)):(o=a,e.apply(i,l))}}},253:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(246),n(160),n(19);var o=n(0),r=n(247),i=n.n(r),a=n(226),l=n.n(a),u=n(25),s=n(28),c=n(9),f=n(71),d=Object(s.d)(function(e){var t=e.image,n=e.nameKey,r=e.name,a=e.intl.locale,s=e.highlightBgColor,d=e.highlightTextColor,p=e.isCenter,v=o.useMemo(function(){return a===c.d.En?r.lastNameEn+" "+r.firstNameEn:r.lastName+" "+r.firstName},[]),m=o.useMemo(function(){return s?{hover:{scale:1.08,backgroundColor:s}}:{hover:{scale:1.08}}},[s]),h=o.useMemo(function(){return d?{hover:{color:d}}:void 0},[d]);return n!==c.c?o.createElement(f.a,{to:"/members/"+n,className:l.a.link},o.createElement(u.b.div,{whileHover:"hover",variants:m,transition:{duration:.3},style:p?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},o.createElement(i.a,{offset:100},o.createElement("div",{className:l.a.imagecontainer},o.createElement("div",{className:l.a.wrapper},o.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:v,className:l.a.image})))),o.createElement(u.b.div,{variants:h,transition:{duration:.3},style:p?{color:"#ffffff"}:void 0,className:l.a.name},o.createElement("span",null,v)))):o.createElement("div",{style:p?{backgroundColor:"#e887a3"}:void 0,className:l.a.container},o.createElement(i.a,{offset:100},o.createElement("img",{src:t.small,srcSet:t.large+" 2x",alt:v,className:l.a.image})),o.createElement("div",{style:p?{color:"#ffffff"}:void 0,className:l.a.name},o.createElement("span",null,v)))})}}]);
//# sourceMappingURL=component---src-containers-members-index-tsx-d3341ca1ca7f995830f0.js.map