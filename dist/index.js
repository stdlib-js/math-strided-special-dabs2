"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,n){
var f=require('@stdlib/strided-base-dmap/dist'),j=require('@stdlib/math-base-special-abs2/dist');function x(e,r,a,i,s){return f(e,r,a,i,s,j)}n.exports=x
});var d=t(function(A,q){
var l=require('@stdlib/strided-base-dmap/dist').ndarray,R=require('@stdlib/math-base-special-abs2/dist');function _(e,r,a,i,s,m,y){return l(e,r,a,i,s,m,y,R)}q.exports=_
});var p=t(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),O=d();E(o,"ndarray",O);c.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),u,b=h(g(__dirname,"./native.js"));b instanceof Error?u=k:u=b;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
