!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.random();!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,o[e]?this.img=o[e].cloneNode():(this.img=new Image,this.img.src=n(18)("./".concat(e,".svg")),o[e]=this.img)}var e,a,i;return e=t,i=[{key:"preload",value:function(){t.symbols.forEach(function(e){return new t(e)})}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}},{key:"symbols",get:function(){return["at_at","c3po","darth_vader","death_star","falcon","r2d2","stormtrooper","tie_ln","yoda"]}}],(a=null)&&r(e.prototype,a),i&&r(e,i),t}();e.default=a},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],l=n(1);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var i=c++;n=u||(u=v(e)),r=w.bind(null,n,i,!1),o=w.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},function(t,e,n){t.exports=n.p+"84bf14f7acca42db7819ed9d5bbce05f.jpg"},function(t,e,n){t.exports=n.p+"24eea004fcb9b61a247944cf5d2702b9.jpg"},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){var r=n(6);(t.exports=n(5)(!1)).push([t.i,"body {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: 1rem;\r\n  background-image: url("+r(n(4))+");\r\n  background-size: cover;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  body {\r\n    background-image: url("+r(n(3))+');\r\n  }\r\n}\r\n\r\n#reels {\r\n  display: flex;\r\n  width: 100vw;\r\n  height: calc((3 / 5) * 100vw);\r\n  max-height: calc(90vh - 50px);\r\n  max-width: calc((5 / 3) * (90vh - 50px));\r\n}\r\n\r\n.reel {\r\n  overflow: hidden;\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n.reel > .icons > img {\r\n  width: calc(100% + 6px);\r\n  margin: -3px 0 0 -3px;\r\n  height: auto;\r\n}\r\n\r\n#controls {\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 30px;\r\n}\r\n\r\n#controls label {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n\r\n#controls label input {\r\n  margin-right: 5px;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#jackpot {\r\n  color: #D5AD6D;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n',""])},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){t.exports=n.p+"713766286583a9d640a00ba67557e89d.svg"},function(t,e,n){t.exports=n.p+"0cd9d2ccc971ed0ee0507d9aa4bc098f.svg"},function(t,e,n){t.exports=n.p+"5727ded717073f51ffd07e172c1dd458.svg"},function(t,e,n){t.exports=n.p+"64b6cd51c5894d52a1c91ed214e86b0b.svg"},function(t,e,n){t.exports=n.p+"c74e68dd795b5bae452ac881aafe760e.svg"},function(t,e,n){t.exports=n.p+"1d7a0915ada9f0c7ca36df128858229c.svg"},function(t,e,n){t.exports=n.p+"7b2ba9e5846a989966b9084c89268b28.svg"},function(t,e,n){t.exports=n.p+"002c00ad7e5311f2e9f95e3891a1902e.svg"},function(t,e,n){t.exports=n.p+"5a7072ffb34182479de014c2fcc14e58.svg"},function(t,e,n){var r={"./at_at.svg":17,"./c3po.svg":16,"./darth_vader.svg":15,"./death_star.svg":14,"./falcon.svg":13,"./r2d2.svg":12,"./stormtrooper.svg":11,"./tie_ln.svg":10,"./yoda.svg":9};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=18},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reelContainer=e,this.idx=n,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{transform:"translateY(-".concat(10*Math.floor(this.factor)/(3+10*Math.floor(this.factor))*100,"%)"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),r.forEach(function(t){return a.symbolContainer.appendChild(new o.default(t).img)})}var e,n,r;return e=t,(n=[{key:"renderSymbols",value:function(t,e){for(var n=document.createDocumentFragment(),r=3;r<3+10*Math.floor(this.factor);r++){var a=new o.default(r>=10*Math.floor(this.factor)-2?e[r-10*Math.floor(this.factor)]:void 0);n.appendChild(a.img)}this.symbolContainer.appendChild(n)}},{key:"spin",value:function(){var t=this,e=new Promise(function(e){return t.animation.onfinish=e}),n=new Promise(function(e){return setTimeout(e,1e3*t.factor)});return this.animation.play(),Promise.race([e,n]).then(function(){"finished"!==t.animation.playState&&t.animation.finish();for(var e=t.symbolContainer.children.length-3,n=0;n<e;n++)t.symbolContainer.firstChild.remove()})}},{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}}])&&a(e.prototype,n),r&&a(e,r),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(19)),o=a(n(0));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.default.preload(),this.currentSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.nextSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.container=e,this.reels=Array.from(this.container.getElementsByClassName("reel")).map(function(t,e){return new r.default(t,e,n.currentSymbols[e])}),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",function(){return n.spin()}),this.autoPlayCheckbox=document.getElementById("autoplay")}var e,n,a;return e=t,(n=[{key:"spin",value:function(){var t=this;return this.onSpinStart(),this.currentSymbols=this.nextSymbols,this.nextSymbols=[[o.default.random(),o.default.random(),o.default.random()],[o.default.random(),o.default.random(),o.default.random()],[o.default.random(),o.default.random(),o.default.random()],[o.default.random(),o.default.random(),o.default.random()],[o.default.random(),o.default.random(),o.default.random()]],Promise.all(this.reels.map(function(e){return e.renderSymbols(t.currentSymbols[e.idx],t.nextSymbols[e.idx]),e.spin()})).then(function(){return t.onSpinEnd()})}},{key:"onSpinStart",value:function(){this.spinButton.disabled=!0,console.log("SPIN START")}},{key:"onSpinEnd",value:function(){var t=this;if(this.spinButton.disabled=!1,console.log("SPIN END"),this.autoPlayCheckbox.checked)return window.setTimeout(function(){return t.spin()},200)}}])&&i(e.prototype,n),a&&i(e,a),t}();e.default=s},function(t,e,n){"use strict";var r;new(((r=n(20))&&r.__esModule?r:{default:r}).default)(document.getElementById("slot"))},function(t,e,n){n(21),t.exports=n(8)}]);