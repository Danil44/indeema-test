parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qr7h":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(){e(this,t)}return n(t,[{key:"calculateRest",value:function(e,t){return e-t}}]),t}();exports.default=r;
},{}],"gQ2u":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n,r){e(this,t),this.element=n,this.value=r}return n(t,[{key:"print",value:function(){this.element.textContent=this.value}}]),t}();exports.default=r;
},{}],"zlPH":[function(require,module,exports) {
"use strict";var e=r(require("./models/Calculator")),t=r(require("./models/Printer"));function r(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("js-rest-calculator");function u(e){e.preventDefault();var t=n.querySelector("#sum"),r=n.querySelector("#price");c(a(t.value,r.value))}function a(t,r){return(new e.default).calculateRest(t,r)}function c(e){var r=document.getElementById("js-result");new t.default(r,o(e)).print()}function o(e){var t=e%1==0,r=1===parseInt(e)?"dollar":"dollars";if(t)return"Your rest is ".concat(e," ").concat(r);var n=l(e),u=parseInt(e);return"Your rest is ".concat(u," ").concat(r," and ").concat(n," cents")}function l(e){return e.toFixed(2).toString().split(".")[1]}n.addEventListener("submit",u);
},{"./models/Calculator":"qr7h","./models/Printer":"gQ2u"}]},{},["zlPH"], null)
//# sourceMappingURL=/indeema-test/dist/restCalculator.3208dd30.js.map