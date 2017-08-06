!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3)}([function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){},function(t,n,e){function r(t){return e(o(t))}function o(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var i={"./svg/twitter.svg":5};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=2},function(t,n,e){"use strict";e(1);var r=e(2),o={};r.keys().forEach(function(t){return o[t]=r(t)})},function(t,n,e){(function(n){!function(n,e){t.exports=e()}(0,function(){"use strict";function t(t,n){return n={exports:{}},t(n,n.exports),n.exports}var e=function(t){var n=t.id,e=t.viewBox,r=t.content;this.id=n,this.viewBox=e,this.content=r};e.prototype.stringify=function(){return this.content},e.prototype.toString=function(){return this.stringify()},e.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach(function(n){return delete t[n]})};var r=!!document.importNode,o=function(t){var n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return r?document.importNode(n,!0):n},i=("undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self,t(function(t,n){!function(n,e){t.exports=e()}(0,function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function n(t){return Array.isArray(t)?[]:{}}function e(e,r){return r&&!0===r.clone&&t(e)?i(n(e),e,r):e}function r(n,r,o){var u=n.slice();return r.forEach(function(r,c){void 0===u[c]?u[c]=e(r,o):t(r)?u[c]=i(n[c],r,o):-1===n.indexOf(r)&&u.push(e(r,o))}),u}function o(n,r,o){var u={};return t(n)&&Object.keys(n).forEach(function(t){u[t]=e(n[t],o)}),Object.keys(r).forEach(function(c){t(r[c])&&n[c]?u[c]=i(n[c],r[c],o):u[c]=e(r[c],o)}),u}function i(t,n,i){var u=Array.isArray(n),c=i||{arrayMerge:r},a=c.arrayMerge||r;return u?Array.isArray(t)?a(t,n,i):e(n,i):o(t,n,i)}return i.all=function(t,n){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,e){return i(t,e,n)})},i})})),u=t(function(t,n){var e={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};n.default=e,t.exports=n.default}),c=function(t){return Object.keys(t).map(function(n){return n+'="'+t[n].toString().replace(/"/g,"&quot;")+'"'}).join(" ")},a=u.svg,s=u.xlink,f={};f[a.name]=a.uri,f[s.name]=s.uri;var d=function(t,n){void 0===t&&(t="");var e=i(f,n||{});return"<svg "+c(e)+">"+t+"</svg>"};return function(t){function n(){t.apply(this,arguments)}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var e={isMounted:{}};return e.isMounted.get=function(){return!!this.node},n.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},n.prototype.mount=function(t){if(this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,e=this.render();return this.node=e,n.appendChild(e),e},n.prototype.render=function(){var t=this.stringify();return o(d(t)).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,e),n}(e)})}).call(n,e(0))},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(4),o=e.n(r),i=e(6),u=e.n(i),c=new o.a({id:"twitter",use:"twitter-usage",viewBox:"0 0 2000 1625.36",content:'\n<symbol viewBox="0 0 2000 1625.36" id="twitter">\n    <path d="m 1999.9999,192.4 c -73.58,32.64 -152.67,54.69 -235.66,64.61 84.7,-50.78 149.77,-131.19 180.41,-227.01 -79.29,47.03 -167.1,81.17 -260.57,99.57 C 1609.3399,49.82 1502.6999,0 1384.6799,0 c -226.6,0 -410.328,183.71 -410.328,410.31 0,32.16 3.628,63.48 10.625,93.51 -341.016,-17.11 -643.368,-180.47 -845.739,-428.72 -35.324,60.6 -55.5583,131.09 -55.5583,206.29 0,142.36 72.4373,267.95 182.5433,341.53 -67.262,-2.13 -130.535,-20.59 -185.8519,-51.32 -0.039,1.71 -0.039,3.42 -0.039,5.16 0,198.803 141.441,364.635 329.145,402.342 -34.426,9.375 -70.676,14.395 -108.098,14.395 -26.441,0 -52.145,-2.578 -77.203,-7.364 52.215,163.008 203.75,281.649 383.304,284.946 -140.429,110.062 -317.351,175.66 -509.5972,175.66 -33.1211,0 -65.7851,-1.949 -97.8828,-5.738 181.586,116.4176 397.27,184.359 628.988,184.359 754.732,0 1167.462,-625.238 1167.462,-1167.47 0,-17.79 -0.41,-35.48 -1.2,-53.08 80.1799,-57.86 149.7399,-130.12 204.7499,-212.41" style="fill:#00aced" />\n</symbol>'});u.a.add(c);n.default=c},function(t,n,e){(function(n){!function(n,e){t.exports=e()}(0,function(){"use strict";function t(t,n){return n={exports:{}},t(n,n.exports),n.exports}function e(t){return t=t||Object.create(null),{on:function(n,e){(t[n]||(t[n]=[])).push(e)},off:function(n,e){t[n]&&t[n].splice(t[n].indexOf(e)>>>0,1)},emit:function(n,e){(t[n]||[]).map(function(t){t(e)}),(t["*"]||[]).map(function(t){t(n,e)})}}}function r(t,n){return w(t).reduce(function(t,e){if(!e.attributes)return t;var r=w(e.attributes),o=n?r.filter(n):r;return t.concat(o)},[])}function o(t){return t.replace(_,function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()})}function i(t,n,e){return w(t).forEach(function(t){var r=t.getAttribute(M);if(r&&0===r.indexOf(n)){var o=r.replace(n,e);t.setAttributeNS(k,M,o)}}),t}var u=("undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self,t(function(t,n){!function(n,e){t.exports=e()}(0,function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function n(t){return Array.isArray(t)?[]:{}}function e(e,r){return r&&!0===r.clone&&t(e)?i(n(e),e,r):e}function r(n,r,o){var u=n.slice();return r.forEach(function(r,c){void 0===u[c]?u[c]=e(r,o):t(r)?u[c]=i(n[c],r,o):-1===n.indexOf(r)&&u.push(e(r,o))}),u}function o(n,r,o){var u={};return t(n)&&Object.keys(n).forEach(function(t){u[t]=e(n[t],o)}),Object.keys(r).forEach(function(c){t(r[c])&&n[c]?u[c]=i(n[c],r[c],o):u[c]=e(r[c],o)}),u}function i(t,n,i){var u=Array.isArray(n),c=i||{arrayMerge:r},a=c.arrayMerge||r;return u?Array.isArray(t)?a(t,n,i):e(n,i):o(t,n,i)}return i.all=function(t,n){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,e){return i(t,e,n)})},i})})),c=t(function(t,n){var e={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};n.default=e,t.exports=n.default}),a=function(t){return Object.keys(t).map(function(n){return n+'="'+t[n].toString().replace(/"/g,"&quot;")+'"'}).join(" ")},s=c.svg,f=c.xlink,d={};d[s.name]=s.uri,d[f.name]=f.uri;var l,p=function(t,n){void 0===t&&(t="");var e=u(d,n||{});return"<svg "+a(e)+">"+t+"</svg>"},h=c.svg,y=c.xlink,m={attrs:(l={style:["position: absolute","width: 0","height: 0"].join("; ")},l[h.name]=h.uri,l[y.name]=y.uri,l)},v=function(t){this.config=u(m,t||{}),this.symbols=[]};v.prototype.add=function(t){var n=this,e=n.symbols,r=this.find(t.id);return r?(e[e.indexOf(r)]=t,!1):(e.push(t),!0)},v.prototype.remove=function(t){var n=this,e=n.symbols,r=this.find(t);return!!r&&(e.splice(e.indexOf(r),1),r.destroy(),!0)},v.prototype.find=function(t){return this.symbols.filter(function(n){return n.id===t})[0]||null},v.prototype.has=function(t){return null!==this.find(t)},v.prototype.stringify=function(){var t=this.config,n=t.attrs,e=this.symbols.map(function(t){return t.stringify()}).join("");return p(e,n)},v.prototype.toString=function(){return this.stringify()},v.prototype.destroy=function(){this.symbols.forEach(function(t){return t.destroy()})};var g={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},w=function(t){return Array.prototype.slice.call(t,0)},b=navigator.userAgent,x={isChrome:/chrome/i.test(b),isFirefox:/firefox/i.test(b),isIE:/msie/i.test(b),isEdge:/edge/i.test(b)},E=function(t,n){var e=document.createEvent("CustomEvent");e.initCustomEvent(t,!1,!1,n),window.dispatchEvent(e)},O=function(t){return(t||window.location.href).split("#")[0]},C=function(t){angular.module("ng").run(["$rootScope",function(n){n.$on("$locationChangeSuccess",function(n,e){E(t,{oldURL:window.location.href,newUrl:e})})}])},j=function(t,n){return void 0===n&&(n="linearGradient, radialGradient, pattern"),w(t.querySelectorAll("symbol")).forEach(function(t){w(t.querySelectorAll(n)).forEach(function(n){t.parentNode.insertBefore(n,t)})}),t},A=!!document.importNode,S=function(t){var n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return A?document.importNode(n,!0):n},k=c.xlink.uri,M="xlink:href",_=/[(){}|\\\^~\[\]`"<>]/g,N=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],U=N.map(function(t){return"["+t+"]"}).join(","),T=function(t,n,e,u){var c=o(e),a=o(u);r(t.querySelectorAll(U),function(t){var n=t.localName,e=t.value;return-1!==N.indexOf(n)&&-1!==e.indexOf("url("+c)}).forEach(function(t){return t.value=t.value.replace(c,a)}),i(n,c,a)},B={MOUNT:"mount"},L=function(t){function n(n){var r=this;void 0===n&&(n={}),t.call(this,u(g,n));var o=e();this._emitter=o,this.node=null;var i=this,c=i.config;if(c.autoConfigure&&this._autoConfigure(n),c.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");o.on(B.MOUNT,function(){return r.updateUrls("#",a)})}var s=this._handleLocationChange.bind(this);this._handleLocationChange=s,c.listenLocationChangeEvent&&window.addEventListener(c.locationChangeEvent,s),c.locationChangeAngularEmitter&&C(c.locationChangeEvent),c.moveGradientsOutsideSymbol&&o.on(B.MOUNT,function(t){j(t)})}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},n.prototype._autoConfigure=function(t){var n=this,e=n.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter="angular"in window),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=x.isFirefox)},n.prototype._handleLocationChange=function(t){var n=t.detail,e=n.oldUrl,r=n.newUrl;this.updateUrls(e,r)},n.prototype.add=function(n){var e=t.prototype.add.call(this,n);return this.isMounted&&e&&n.mount(this.node),e},n.prototype.destroy=function(){var t=this,n=t.config,e=t.symbols,r=t._emitter;e.forEach(function(t){return t.destroy()}),r.off("*"),window.removeEventListener(n.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},n.prototype.mount=function(t,n){if(void 0===n&&(n=!1),this.isMounted)return this.node;var e=t||this.config.mountTo,r="string"==typeof e?document.querySelector(e):e,o=this.render();return n&&r.childNodes[0]?r.insertBefore(o,r.childNodes[0]):r.appendChild(o),this.node=o,this._emitter.emit(B.MOUNT,o),o},n.prototype.render=function(){return S(this.stringify())},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},n.prototype.updateUrls=function(t,n){if(!this.isMounted)return!1;var e=document.querySelectorAll(this.config.usagesToUpdate);return T(this.node,e,O(t)+"#",O(n)+"#"),!0},Object.defineProperties(n.prototype,r),n}(v),P=t(function(t){/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(n,e){t.exports=function(){var t,n=[],e=document,r=e.documentElement.doScroll,o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(e.readyState);return o||e.addEventListener("DOMContentLoaded",t=function(){for(e.removeEventListener("DOMContentLoaded",t),o=1;t=n.shift();)t()}),function(t){o?setTimeout(t,0):n.push(t)}}()}()}),q=new L;return P(function(){return q.mount(document.body,!0)}),q})}).call(n,e(0))}]);