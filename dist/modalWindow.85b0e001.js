parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HW7p":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(n){var i=n.container,o=n.beforeGenere,r=void 0===o?function(){}:o,a=n.beforeClose,s=void 0===a?function(){}:a,l=n.afterClose,u=void 0===l?function(){}:l,c=n.afterGenere,f=void 0===c?function(){}:c,d=n.withAnimation,h=void 0!==d&&d;e(this,t),this.container=i,this.beforeGenere=r,this.beforeClose=s,this.afterClose=u,this.afterGenere=f,this.withAnimation=h,this.modal=null}return n(t,[{key:"_genereButton",value:function(e,t,n){var i=document.createElement("button");return i.textContent=t,i.id=e,i.addEventListener("click",n),i}},{key:"_genereWrapperElement",value:function(e,t){var n=document.createElement("div");return n.classList.add(t),n.id=e,n}},{key:"_fadeIn",value:function(e){e.style.display="flex",setTimeout(function(){return e.style.opacity=1},100)}},{key:"_fadeOut",value:function(e){e.style.opacity=0,setTimeout(function(){return e.remove()},100)}},{key:"genereModal",value:function(e){this.beforeGenere();var t=document.querySelector(".".concat(this.container)),n=this._genereWrapperElement("js-modal","modal-container");this.modal=n;var i=this._genereButton("js-close-modal-btn","close",this.handleCloseModal.bind(this));n.insertAdjacentElement("afterbegin",i),n.insertAdjacentElement("beforeend",e),this.withAnimation&&(n.style.opacity=0,n.style.display="none"),t.insertAdjacentElement("beforeend",n),this.withAnimation&&this._fadeIn(n),this.afterGenere()}},{key:"handleCloseModal",value:function(){this.beforeClose(),this.close(),this.afterClose()}},{key:"close",value:function(){this.withAnimation?this._fadeOut(this.modal):modal.remove()}}]),t}();exports.default=i;
},{}],"jPdP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../models/Modal"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,o=c(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}var f=function(){function t(e){var r=e.container,n=e.text,o=i(e,["container","text"]);u(this,t),this.text=n,this.container=r,this.restOptions=o}return l(t,[{key:"genere",value:function(){var t=document.createElement("p");return t.textContent=this.text,new e.default(n({container:this.container},this.restOptions)).genereModal(t)}}]),t}();exports.default=f;
},{"../models/Modal":"HW7p"}],"zaH9":[function(require,module,exports) {
"use strict";var e=t(require("./models/Modal")),n=t(require("./components/TextModal"));function t(e){return e&&e.__esModule?e:{default:e}}var o=document.getElementById("js-open-btn");function i(){new n.default({container:"js-modal-container",text:"Hello, I'm a modal window!",beforeGenere:function(){return r(o)},afterClose:function(){return d(o)},withAnimation:!0}).genere()}function r(e){e.classList.add("hidden")}function d(e){e.classList.remove("hidden")}o.addEventListener("click",i);
},{"./models/Modal":"HW7p","./components/TextModal":"jPdP"}]},{},["zaH9"], null)
//# sourceMappingURL=/dist/modalWindow.85b0e001.js.map