!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){t.exports=r.p+"./media/Glyphter.9b966da0.eot"},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function o(){if(0===f&&u.querySelector("div.swipeIndicator").classList.add("faded"),f<p){var t=[].concat(n(u.querySelectorAll("div.imgWrapper"))).filter(function(t,e){return e===f})[0],e=[].concat(n(u.querySelectorAll("div.contentWrapper"))).filter(function(t,e){return e===f})[0],r=[].concat(n(u.querySelectorAll("div.contentWrapper"))).filter(function(t,e){return e!==f});t&&(t.classList.add("showed"),t.style.transform="rotate("+15*(Math.random()-.5)+"deg)"),e&&e.classList.add("showed"),r&&r.forEach(function(t){return t.classList.remove("showed")}),f++}console.log(f)}function i(){if(1===f&&u.querySelector("div.swipeIndicator").classList.remove("faded"),f>0){f--;var t=[].concat(n(u.querySelectorAll("div.imgWrapper"))).filter(function(t,e){return e===f})[0],e=[].concat(n(u.querySelectorAll("div.contentWrapper"))).filter(function(t,e){return e===f-1})[0],r=[].concat(n(u.querySelectorAll("div.contentWrapper"))).filter(function(t,e){return e!==f-1});t&&(t.classList.remove("showed"),t.style.transform=""),e&&e.classList.add("showed"),r&&r.forEach(function(t){return t.classList.remove("showed")})}console.log(f)}r(2);var a=r(10),s=document.querySelector.bind(document),c=document.querySelectorAll.bind(document),u=s("div#root"),l=u.querySelector(".audioPlayer"),d=u.querySelector("div.icon-music"),f=0,p=c(".imgWrapper").length;l.addEventListener("canplay",function(t){l.play(),d.classList.add("playing")}),d.addEventListener("click",function(t){l.paused?(l.play(),d.classList.add("playing")):(l.pause(),d.classList.remove("playing"))}),document.addEventListener("touchmove",function(t){t.preventDefault()}),window.addEventListener("load",function(t){console.log("loaded!"),s("div#shade").style.display="none"}),u.addEventListener("touchstart",function(t){(0,a.touchStart)(t)}),u.addEventListener("touchend",function(t){var e=(0,a.touchEnd)(t),r=e.eventName;"up"===r?o():"down"===r&&i()})},function(t,e,r){var n=r(3);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(8)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){e=t.exports=r(4)(void 0),e.push([t.i,"@font-face{font-family:Glyphter;src:url("+r(0)+");src:url("+r(0)+'?#iefix) format("embedded-opentype"),url('+r(5)+') format("woff"),url('+r(6)+') format("truetype"),url('+r(7)+'#Glyphter) format("svg");font-weight:400;font-style:normal}[class*=icon-]:after{font-family:Glyphter;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-music:after{content:"B"}.icon-down:after{content:"C"}[class*=icon-]:after{display:flex;justify-content:center;align-items:center}body,html{width:100%;height:100%;padding:0;margin:0}div#shade{z-index:2;position:absolute;left:0;top:0}div#root,div#shade{width:100%;height:100%;background-color:#fff}div#root{position:relative;overflow:hidden;z-index:1}div#root div.music{position:absolute;right:5vw;top:5vw;border-radius:50%;width:10vw;height:10vw;border:1px solid #666;animation:rotate 10s linear 0s infinite;animation-play-state:paused}div#root div.music:after{position:absolute;left:0;right:0;top:0;bottom:0;font-size:180%;color:#666}div#root div.music.playing{animation-play-state:running}div#root audio.audioPlayer{display:none}div#root div.swipeIndicator{position:absolute;width:100%;height:10vh;bottom:0;left:0;font-size:120%;color:#666;animation:swing 2s linear infinite alternate;text-align:center;transition:all .5s ease-in-out}div#root div.swipeIndicator.faded{transform:translateY(-200%);opacity:0}div#root div.imgWrapper{position:absolute;width:70vw;max-height:70vh;overflow-y:scroll;overflow-x:hidden;left:15vw;bottom:-100%;font-size:0;border:5px solid #666;box-shadow:0 0 25px rgba(0,0,0,.8);transition:all 1s cubic-bezier(.88,.04,0,1.01);z-index:2}div#root div.imgWrapper>img{width:100%;height:auto}div#root div.imgWrapper.showed{bottom:22vh}div#root div.imgWrapper>p{font-size:1rem;background-color:#666;margin:0;padding:1rem;color:#e6e6e6}div#root div.contentWrapper{position:absolute;left:15vw;width:70vw;bottom:-100%;height:4ch;line-height:4ch;text-align:center;transition:bottom 1s cubic-bezier(.88,.04,0,1.01),opacity .5s cubic-bezier(.88,.04,0,1.01) 1s;background-color:inherit;z-index:1;opacity:0}div#root div.contentWrapper.showed{bottom:5vh;opacity:1}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes swing{to{bottom:5vh}}',""])},function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){t.exports=r.p+"./media/Glyphter.d1496e21.woff"},function(t,e,r){t.exports=r.p+"./media/Glyphter.dde48277.ttf"},function(t,e,r){t.exports=r.p+"./media/Glyphter.c915b7b2.svg"},function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=v[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(l(n.parts[i],e))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(l(n.parts[i],e));v[n.id]={id:n.id,refs:1,parts:a}}}}function o(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}function i(t,e){var r=m(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),i(t,e),e}function u(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function l(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=g++;r=y||(y=s(e)),n=d.bind(null,r,u,!1),o=d.bind(null,r,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(e),n=p.bind(null,r,e),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),n=f.bind(null,r),o=function(){a(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function d(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=w(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),y=null,g=0,b=[],w=r(9);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(t,e);return n(r,e),function(t){for(var i=[],a=0;a<r.length;a++){var s=r[a],c=v[s.id];c.refs--,i.push(c)}if(t){n(o(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete v[c.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,r){"use strict";function n(t){var e=t.touches[0],r=e.pageX,n=e.pageY;return i.startPos={x:r,y:n},{eventName:"touchStart",x:r,y:n}}function o(t){var e=t.changedTouches[0],r=e.pageX,n=e.pageY,o={x:r-i.startPos.x,y:n-i.startPos.y};return o.y<-100?{eventName:"up",x:o.x,y:o.y}:o.y>100?{eventName:"down",x:o.x,y:o.y}:{x:o.x,y:o.y}}Object.defineProperty(e,"__esModule",{value:!0}),e.touchStart=n,e.touchEnd=o;var i={startPos:null,endPos:null}}]);