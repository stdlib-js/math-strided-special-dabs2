// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(e,t)||a.call(e,t)?(f=e.__proto__,e.__proto__=r,delete e[t],e[t]=l.value,e.__proto__=f):e[t]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,t,l.get),p&&i&&i.call(e,t,l.set),e};function f(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(e,t,r,n,o,i){var u,a,l;if(e<=0)return n;for(u=r<0?(1-e)*r:0,a=o<0?(1-e)*o:0,l=0;l<e;l++)n[a]=i(t[u]),u+=r,a+=o;return n}function _(e,t,r,n,o,i,u,a){var l,f,c;if(e<=0)return o;for(l=n,f=u,c=0;c<e;c++)o[f]=a(t[l]),l+=r,f+=i;return o}function p(e){return e*e}function d(e,t,r,n,o){return c(e,t,r,n,o,p)}return f(c,"ndarray",_),f(d,"ndarray",(function(e,t,r,n,o,i,u){return _(e,t,r,n,o,i,u,p)})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dabs2=t();
//# sourceMappingURL=index.js.map
