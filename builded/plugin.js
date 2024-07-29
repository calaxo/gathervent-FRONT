function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["chunk2.js","chunk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as ne,a as it,R as I,c as at,b as ct}from"./chunk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var je={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=ne,ut=Symbol.for("react.element"),ft=Symbol.for("react.fragment"),dt=Object.prototype.hasOwnProperty,pt=lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0};function Be(e,t,r){var n,s={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)dt.call(t,n)&&!ht.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:ut,type:e,key:o,ref:i,props:s,_owner:pt.current}}J.Fragment=ft;J.jsx=Be;J.jsxs=Be;je.exports=J;var g=je.exports,De,be=it;De=be.createRoot,be.hydrateRoot;const mt=()=>g.jsx("header",{className:" px-6 py-4 text-white bg-gray-800",children:g.jsx("a",{href:"/",children:g.jsx("h1",{className:"m-auto p-2 text-2xl font-bold",children:"Upload de photos"})})}),yt=()=>g.jsx("footer",{className:"py-4 text-white bg-gray-800",children:g.jsx("div",{className:"container flex justify-center mx-auto",children:g.jsx("p",{className:"text-sm",children:"© 2022 My Website. All rights reserved."})})}),wt="modulepreload",bt=function(e){return"/"+e},Ee={},Et=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(r.map(f=>{if(f=bt(f),f in Ee)return;Ee[f]=!0;const u=f.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(!!n)for(let y=o.length-1;y>=0;y--){const d=o[y];if(d.href===f&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(f,'"]').concat(l)))return;const w=document.createElement("link");if(w.rel=u?"stylesheet":wt,u||(w.as="script",w.crossOrigin=""),w.href=f,c&&w.setAttribute("nonce",c),document.head.appendChild(w),u)return new Promise((y,d)=>{w.addEventListener("load",y),w.addEventListener("error",()=>d(new Error("Unable to preload CSS for ".concat(f))))})}))}return s.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:gt}=Object.prototype,{getPrototypeOf:ue}=Object,V=(e=>t=>{const r=gt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>V(t)===e),W=e=>t=>typeof t===e,{isArray:F}=Array,U=W("undefined");function Rt(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=A("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const Ot=W("string"),O=W("function"),qe=W("number"),K=e=>e!==null&&typeof e=="object",xt=e=>e===!0||e===!1,q=e=>{if(V(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tt=A("Date"),At=A("File"),_t=A("Blob"),Nt=A("FileList"),Pt=e=>K(e)&&O(e.pipe),Ct=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=V(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Lt=A("URLSearchParams"),[Ft,jt,Bt,Dt]=["ReadableStream","Request","Response","Headers"].map(A),Ut=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),F(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function ve(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const He=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ie=e=>!U(e)&&e!==He;function re(){const{caseless:e}=Ie(this)&&this||{},t={},r=(n,s)=>{const o=e&&ve(t,s)||s;q(t[o])&&q(n)?t[o]=re(t[o],n):q(n)?t[o]=re({},n):F(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&k(arguments[n],r);return t}const kt=(e,t,r,{allOwnKeys:n}={})=>(k(t,(s,o)=>{r&&O(s)?e[o]=Ue(s,r):e[o]=s},{allOwnKeys:n}),e),qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Ht=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&ue(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},It=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Mt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!qe(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},zt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),$t=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Jt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Vt=A("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Kt=A("RegExp"),Me=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};k(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Gt=e=>{Me(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(O(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Xt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return F(e)?n(e):n(String(e).split(t)),r},Qt=()=>{},Zt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Z="abcdefghijklmnopqrstuvwxyz",Re="0123456789",ze={DIGIT:Re,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+Re},Yt=(e=16,t=ze.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function en(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tn=e=>{const t=new Array(10),r=(n,s)=>{if(K(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=F(n)?[]:{};return k(n,(i,c)=>{const f=r(i,s+1);!U(f)&&(o[c]=f)}),t[s]=void 0,o}}return n};return r(e,0)},nn=A("AsyncFunction"),rn=e=>e&&(K(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:F,isArrayBuffer:ke,isBuffer:Rt,isFormData:Ct,isArrayBufferView:St,isString:Ot,isNumber:qe,isBoolean:xt,isObject:K,isPlainObject:q,isReadableStream:Ft,isRequest:jt,isResponse:Bt,isHeaders:Dt,isUndefined:U,isDate:Tt,isFile:At,isBlob:_t,isRegExp:Kt,isFunction:O,isStream:Pt,isURLSearchParams:Lt,isTypedArray:zt,isFileList:Nt,forEach:k,merge:re,extend:kt,trim:Ut,stripBOM:qt,inherits:vt,toFlatObject:Ht,kindOf:V,kindOfTest:A,endsWith:It,toArray:Mt,forEachEntry:$t,matchAll:Jt,isHTMLForm:Vt,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Me,freezeMethods:Gt,toObjectSet:Xt,toCamelCase:Wt,noop:Qt,toFiniteNumber:Zt,findKey:ve,global:He,isContextDefined:Ie,ALPHABET:ze,generateString:Yt,isSpecCompliantForm:en,toJSONObject:tn,isAsyncFn:nn,isThenable:rn};function h(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $e=h.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(h,Je);Object.defineProperty($e,"isAxiosError",{value:!0});h.from=(e,t,r,n,s,o)=>{const i=Object.create($e);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const sn=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,r){return e?e.concat(t).map(function(s,o){return s=Ve(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function on(e){return a.isArray(e)&&!e.some(se)}const an=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const n=r.metaTokens,s=r.visitor||l,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,R){let S=d;if(d&&!R&&typeof d=="object"){if(a.endsWith(m,"{}"))m=n?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&on(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(S=a.toArray(d)))return m=Ve(m),S.forEach(function(b,B){!(a.isUndefined(b)||b===null)&&t.append(i===!0?Se([m],B,o):i===null?m:m+"[]",u(b))}),!1}return se(d)?!0:(t.append(Se(R,m,o),u(d)),!1)}const p=[],w=Object.assign(an,{defaultVisitor:l,convertValue:u,isVisitable:se});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(S,_){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(_)?_.trim():_,m,w))===!0&&y(S,m?m.concat(_):[_])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function fe(e,t){this._pairs=[],e&&G(e,this,t)}const We=fe.prototype;We.append=function(t,r){this._pairs.push([t,r])};We.toString=function(t){const r=t?function(n){return t.call(this,n,Oe)}:Oe;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function cn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,r){if(!t)return e;const n=r&&r.encode||cn,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new fe(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xe{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ln=typeof URLSearchParams<"u"?URLSearchParams:fe,un=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,dn={isBrowser:!0,classes:{URLSearchParams:ln,FormData:un,Blob:fn},protocols:["http","https","file","blob","url","data"]},de=typeof window<"u"&&typeof document<"u",pn=(e=>de&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),hn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mn=de&&window.location.href||"http://localhost",yn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:de,hasStandardBrowserEnv:pn,hasStandardBrowserWebWorkerEnv:hn,origin:mn},Symbol.toStringTag,{value:"Module"})),x={...yn,...dn};function wn(e,t){return G(e,new x.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return x.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function En(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Xe(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=En(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(bn(n),s,r,0)}),r}return null}function gn(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const pe={transitional:Ge,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return wn(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return G(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),gn(t)):t}],transformResponse:[function(t){const r=this.transitional||pe.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{pe.headers[e]={}});const he=pe,Rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sn=e=>{const t={};let r,n,s;return e&&e.split("\n").forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Rn[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Te=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function On(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const xn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function An(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,f,u){const l=D(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=v(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!xn(t))i(Sn(t),r);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=D(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return On(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=D(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Y(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(n,i);c&&(!r||Y(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=v(s),delete r[o];return}const c=t?Tn(o):String(o).trim();c!==o&&delete r[o],r[c]=v(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);n[c]||(An(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(X);const T=X;function ee(e,t){const r=this||he,n=t||r,s=T.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Qe(e){return!!(e&&e.__CANCEL__)}function j(e,t,r){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(j,h,{__CANCEL__:!0});function Ze(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function _n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Nn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=n[o];i||(i=u),r[s]=f,n[s]=u;let p=o,w=0;for(;p!==s;)w+=r[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}function Pn(e,t){let r=0;const n=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-r>n)return s&&(clearTimeout(s),s=null),r=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,r=Date.now(),e.apply(null,arguments)),n-(c-r)))}}const M=(e,t,r=3)=>{let n=0;const s=Nn(50,250);return Pn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-n,u=s(f),l=i<=c;n=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},r)},Cn=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}(),Ln=x.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Fn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!Fn(t)?jn(e,t):t}const Ae=e=>e instanceof T?{...e}:e;function C(e,t){t=t||{};const r={};function n(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u,p)}else return n(u,l,p)}function o(u,l){if(!a.isUndefined(l))return n(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u)}else return n(void 0,l)}function c(u,l,p){if(p in t)return n(u,l);if(p in e)return n(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ae(u),Ae(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(r[l]=w)}),r}const et=e=>{const t=C({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=T.from(i),t.url=Ke(Ye(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(r)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(x.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&Cn(t.url))){const u=s&&o&&Ln.read(o);u&&i.set(s,u)}return t},Bn=typeof XMLHttpRequest<"u",Dn=Bn&&function(e){return new Promise(function(r,n){const s=et(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:c}=s,f;function u(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function p(){if(!l)return;const y=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Ze(function(S){r(S),u()},function(S){n(S),u()},m),l=null}"onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(n(new h("Request aborted",h.ECONNABORTED,s,l)),l=null)},l.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Ge;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),n(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(d,m){l.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",M(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",M(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{l&&(n(!y||y.type?new j(null,e,l):y),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=_n(s.url);if(w&&x.protocols.indexOf(w)===-1){n(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Un=(e,t)=>{let r=new AbortController,n;const s=function(f){if(!n){n=!0,i();const u=f instanceof Error?f:this.reason;r.abort(u instanceof h?u:new j(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new h("timeout ".concat(t," of ms exceeded"),h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},kn=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},qn=async function*(e,t,r){for await(const n of e)yield*kn(ArrayBuffer.isView(n)?n:await r(String(n)),t)},_e=(e,t,r,n,s)=>{const o=qn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:u}=await o.next();if(f){c.close(),n();return}let l=u.byteLength;r&&r(i+=l),c.enqueue(new Uint8Array(u))},cancel(c){return n(c),o.return()}},{highWaterMark:2})},Ne=(e,t)=>{const r=e!=null;return n=>setTimeout(()=>t({lengthComputable:r,total:e,loaded:n}))},Q=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",tt=Q&&typeof ReadableStream=="function",oe=Q&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),vn=tt&&(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Pe=64*1024,ie=tt&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),z={stream:ie&&(e=>e.body)};Q&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!z[t]&&(z[t]=a.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new h("Response type '".concat(t,"' is not supported"),h.ERR_NOT_SUPPORT,n)})})})(new Response);const Hn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await oe(e)).byteLength},In=async(e,t)=>{const r=a.toFiniteNumber(e.getContentLength());return r==null?Hn(t):r},Mn=Q&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:p="same-origin",fetchOptions:w}=et(e);u=u?(u+"").toLowerCase():"text";let[y,d]=s||o||i?Un([s,o],i):[],m,R;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let _;try{if(f&&vn&&r!=="get"&&r!=="head"&&(_=await In(l,n))!==0){let N=new Request(t,{method:"POST",body:n,duplex:"half"}),L;a.isFormData(n)&&(L=N.headers.get("content-type"))&&l.setContentType(L),N.body&&(n=_e(N.body,Pe,Ne(_,M(f)),null,oe))}a.isString(p)||(p=p?"cors":"omit"),R=new Request(t,{...w,signal:y,method:r.toUpperCase(),headers:l.normalize().toJSON(),body:n,duplex:"half",withCredentials:p});let b=await fetch(R);const B=ie&&(u==="stream"||u==="response");if(ie&&(c||B)){const N={};["status","statusText","headers"].forEach(we=>{N[we]=b[we]});const L=a.toFiniteNumber(b.headers.get("content-length"));b=new Response(_e(b.body,Pe,c&&Ne(L,M(c,!0)),B&&S,oe),N)}u=u||"text";let ot=await z[a.findKey(z,u)||"text"](b,e);return!B&&S(),d&&d(),await new Promise((N,L)=>{Ze(N,L,{data:ot,headers:T.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:R})})}catch(b){throw S(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,R),{cause:b.cause||b}):h.from(b,b&&b.code,e,R)}}),ae={http:sn,xhr:Dn,fetch:Mn};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>"- ".concat(e),zn=e=>a.isFunction(e)||e===null||e===!1,nt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!zn(r)&&(n=ae[(i=String(r)).toLowerCase()],n===void 0))throw new h("Unknown adapter '".concat(i,"'"));if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,f])=>"adapter ".concat(c," ")+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?"since :\n"+o.map(Ce).join("\n"):" "+Ce(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:ae};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Le(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nt.getAdapter(e.adapter||he.adapter)(e).then(function(n){return te(e),n.data=ee.call(e,e.transformResponse,n),n.headers=T.from(n.headers),n},function(n){return Qe(n)||(te(e),n&&n.response&&(n.response.data=ee.call(e,e.transformResponse,n.response),n.response.headers=T.from(n.response.headers))),Promise.reject(n)})}const rt="1.7.2",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Fe={};me.transitional=function(t,r,n){function s(o,i){return"[Axios v"+rt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!Fe[i]&&(Fe[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function $n(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const ce={assertOptions:$n,validators:me},P=ce.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=C(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&ce.assertOptions(n,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:ce.assertOptions(s,{encode:P.function,serialize:P.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),r.headers=T.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!f){const d=[Le.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),w=d.length,l=Promise.resolve(r);p<w;)l=l.then(d[p++],d[p++]);return l}w=c.length;let y=r;for(p=0;p<w;){const d=c[p++],m=c[p++];try{y=d(y)}catch(R){m.call(this,R);break}}try{l=Le.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=C(this.defaults,t);const r=Ye(t.baseURL,t.url);return Ke(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(r,n){return this.request(C(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(C(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=r(),$.prototype[t+"Form"]=r(!0)});const H=$;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new j(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}const Jn=ye;function Vn(e){return function(r){return e.apply(null,r)}}function Wn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const Kn=le;function st(e){const t=new H(e),r=Ue(H.prototype.request,t);return a.extend(r,H.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return st(C(e,s))},r}const E=st(he);E.Axios=H;E.CanceledError=j;E.CancelToken=Jn;E.isCancel=Qe;E.VERSION=rt;E.toFormData=G;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Vn;E.isAxiosError=Wn;E.mergeConfig=C;E.AxiosHeaders=T;E.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=nt.getAdapter;E.HttpStatusCode=Kn;E.default=E;const Gn=()=>{const[e,t]=ne.useState([]),r=ne.useRef(null),n=o=>{t(o.target.files),console.log(o.target.files)},s=async()=>{try{const o=new FormData;Array.from(e).forEach(c=>{o.append("files",c)});const i=await E.post("https://gathervent.axel-cal.fr/upload",o,{headers:{"Content-Type":"multipart/form-data"}});i&&console.log(i)}catch(o){console.log(o)}};return g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("div",{className:"m-auto",children:[g.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:n,ref:r,style:{display:"none"}}),g.jsxs("button",{className:"plus-button",onClick:()=>r.current.click(),children:[g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"red",class:"sm:w-52 sm:h-52\r\n                     w-full h-full m-auto",children:[g.jsx("path",{class:"animate-[move_35s_linear_infinite]","stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"}),"Let's center our SVG in the middle of the page by giving its container the below classes."]}),g.jsx("p",{className:" text-2xl",children:"cliquez pour selectionner les photos"}),g.jsxs("p",{className:" text-2xl",children:[e.length," fichiers sélectionnés"]})]})]}),g.jsx("button",{className:"bg-slate-400 rounded-xl p-4 m-2",onClick:s,children:"Envoyer les fichiers"})]})},Xn=I.lazy(()=>Et(()=>import("./chunk2.js"),__vite__mapDeps([0,1]))),Qn=[{caseSensitive:!1,path:"/",element:I.createElement(Gn)},{caseSensitive:!1,path:"*",element:I.createElement(Xn)}],Zn=at(Qn),Yn=document.getElementById("root"),er=De(Yn);er.render(g.jsxs(I.StrictMode,{children:[g.jsx(mt,{}),g.jsx(ct,{router:Zn}),g.jsx(yt,{})]}));export{g as j};