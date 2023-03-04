(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function u6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function e4(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=i1(s)?Hl(s):e4(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(i1(c))return c;if(Q(c))return c}}const Cl=/;(?![^(]*\))/g,vl=/:([^]+)/,hl=/\/\*.*?\*\//gs;function Hl(c){const a={};return c.replace(hl,"").split(Cl).forEach(e=>{if(e){const s=e.split(vl);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function p6(c){let a="";if(i1(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const s=p6(c[e]);s&&(a+=s+" ")}else if(Q(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ml=u6(Vl);function f0(c){return!!c||c===""}const G3=c=>i1(c)?c:c==null?"":R(c)||Q(c)&&(c.toString===t0||!q(c.toString))?JSON.stringify(c,n0,2):String(c),n0=(c,a)=>a&&a.__v_isRef?n0(c,a.value):w2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:l0(a)?{[`Set(${a.size})`]:[...a.values()]}:Q(a)&&!R(a)&&!m0(a)?String(a):a,J={},N2=[],y1=()=>{},ul=()=>!1,pl=/^on[^a-z]/,s4=c=>pl.test(c),d6=c=>c.startsWith("onUpdate:"),C1=Object.assign,L6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},dl=Object.prototype.hasOwnProperty,O=(c,a)=>dl.call(c,a),R=Array.isArray,w2=c=>r4(c)==="[object Map]",l0=c=>r4(c)==="[object Set]",q=c=>typeof c=="function",i1=c=>typeof c=="string",g6=c=>typeof c=="symbol",Q=c=>c!==null&&typeof c=="object",o0=c=>Q(c)&&q(c.then)&&q(c.catch),t0=Object.prototype.toString,r4=c=>t0.call(c),Ll=c=>r4(c).slice(8,-1),m0=c=>r4(c)==="[object Object]",x6=c=>i1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,R3=u6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),i4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},gl=/-(\w)/g,E1=i4(c=>c.replace(gl,(a,e)=>e?e.toUpperCase():"")),xl=/\B([A-Z])/g,B2=i4(c=>c.replace(xl,"-$1").toLowerCase()),f4=i4(c=>c.charAt(0).toUpperCase()+c.slice(1)),R4=i4(c=>c?`on${f4(c)}`:""),Q2=(c,a)=>!Object.is(c,a),q4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},W3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},z0=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let f5;const bl=()=>f5||(f5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let B1;class Sl{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=B1,!a&&B1&&(this.index=(B1.scopes||(B1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=B1;try{return B1=this,a()}finally{B1=e}}}on(){B1=this}off(){B1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Nl(c,a=B1){a&&a.active&&a.effects.push(c)}const b6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},C0=c=>(c.w&e2)>0,v0=c=>(c.n&e2)>0,wl=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=e2},kl=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];C0(r)&&!v0(r)?r.delete(c):a[e++]=r,r.w&=~e2,r.n&=~e2}a.length=e}},j4=new WeakMap;let I2=0,e2=1;const K4=30;let S1;const V2=Symbol(""),Y4=Symbol("");class S6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Nl(this,s)}run(){if(!this.active)return this.fn();let a=S1,e=c2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=S1,S1=this,c2=!0,e2=1<<++I2,I2<=K4?wl(this):n5(this),this.fn()}finally{I2<=K4&&kl(this),e2=1<<--I2,S1=this.parent,c2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){S1===this?this.deferStop=!0:this.active&&(n5(this),this.onStop&&this.onStop(),this.active=!1)}}function n5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let c2=!0;const h0=[];function D2(){h0.push(c2),c2=!1}function R2(){const c=h0.pop();c2=c===void 0?!0:c}function M1(c,a,e){if(c2&&S1){let s=j4.get(c);s||j4.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=b6()),H0(r)}}function H0(c,a){let e=!1;I2<=K4?v0(c)||(c.n|=e2,e=!C0(c)):e=!c.has(S1),e&&(c.add(S1),S1.deps.push(c))}function I1(c,a,e,s,r,i){const f=j4.get(c);if(!f)return;let n=[];if(a==="clear")n=[...f.values()];else if(e==="length"&&R(c)){const l=z0(s);f.forEach((m,z)=>{(z==="length"||z>=l)&&n.push(m)})}else switch(e!==void 0&&n.push(f.get(e)),a){case"add":R(c)?x6(e)&&n.push(f.get("length")):(n.push(f.get(V2)),w2(c)&&n.push(f.get(Y4)));break;case"delete":R(c)||(n.push(f.get(V2)),w2(c)&&n.push(f.get(Y4)));break;case"set":w2(c)&&n.push(f.get(V2));break}if(n.length===1)n[0]&&X4(n[0]);else{const l=[];for(const m of n)m&&l.push(...m);X4(b6(l))}}function X4(c,a){const e=R(c)?c:[...c];for(const s of e)s.computed&&l5(s);for(const s of e)s.computed||l5(s)}function l5(c,a){(c!==S1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const yl=u6("__proto__,__v_isRef,__isVue"),V0=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(g6)),Al=N6(),Pl=N6(!1,!0),Fl=N6(!0),o5=Tl();function Tl(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=G(this);for(let i=0,f=this.length;i<f;i++)M1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){D2();const s=G(this)[a].apply(this,e);return R2(),s}}),c}function N6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Yl:L0:a?d0:p0).get(s))return s;const f=R(s);if(!c&&f&&O(o5,r))return Reflect.get(o5,r,i);const n=Reflect.get(s,r,i);return(g6(r)?V0.has(r):yl(r))||(c||M1(s,"get",r),a)?n:o1(n)?f&&x6(r)?n:n.value:Q(n)?c?g0(n):y6(n):n}}const _l=M0(),Bl=M0(!0);function M0(c=!1){return function(e,s,r,i){let f=e[s];if(P2(f)&&o1(f)&&!o1(r))return!1;if(!c&&(!Z3(r)&&!P2(r)&&(f=G(f),r=G(r)),!R(e)&&o1(f)&&!o1(r)))return f.value=r,!0;const n=R(e)&&x6(s)?Number(s)<e.length:O(e,s),l=Reflect.set(e,s,r,i);return e===G(i)&&(n?Q2(r,f)&&I1(e,"set",s,r):I1(e,"add",s,r)),l}}function Dl(c,a){const e=O(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&I1(c,"delete",a,void 0),s}function Rl(c,a){const e=Reflect.has(c,a);return(!g6(a)||!V0.has(a))&&M1(c,"has",a),e}function ql(c){return M1(c,"iterate",R(c)?"length":V2),Reflect.ownKeys(c)}const u0={get:Al,set:_l,deleteProperty:Dl,has:Rl,ownKeys:ql},El={get:Fl,set(c,a){return!0},deleteProperty(c,a){return!0}},$l=C1({},u0,{get:Pl,set:Bl}),w6=c=>c,n4=c=>Reflect.getPrototypeOf(c);function g3(c,a,e=!1,s=!1){c=c.__v_raw;const r=G(c),i=G(a);e||(a!==i&&M1(r,"get",a),M1(r,"get",i));const{has:f}=n4(r),n=s?w6:e?P6:c3;if(f.call(r,a))return n(c.get(a));if(f.call(r,i))return n(c.get(i));c!==r&&c.get(a)}function x3(c,a=!1){const e=this.__v_raw,s=G(e),r=G(c);return a||(c!==r&&M1(s,"has",c),M1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function b3(c,a=!1){return c=c.__v_raw,!a&&M1(G(c),"iterate",V2),Reflect.get(c,"size",c)}function t5(c){c=G(c);const a=G(this);return n4(a).has.call(a,c)||(a.add(c),I1(a,"add",c,c)),this}function m5(c,a){a=G(a);const e=G(this),{has:s,get:r}=n4(e);let i=s.call(e,c);i||(c=G(c),i=s.call(e,c));const f=r.call(e,c);return e.set(c,a),i?Q2(a,f)&&I1(e,"set",c,a):I1(e,"add",c,a),this}function z5(c){const a=G(this),{has:e,get:s}=n4(a);let r=e.call(a,c);r||(c=G(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&I1(a,"delete",c,void 0),i}function C5(){const c=G(this),a=c.size!==0,e=c.clear();return a&&I1(c,"clear",void 0,void 0),e}function S3(c,a){return function(s,r){const i=this,f=i.__v_raw,n=G(f),l=a?w6:c?P6:c3;return!c&&M1(n,"iterate",V2),f.forEach((m,z)=>s.call(r,l(m),l(z),i))}}function N3(c,a,e){return function(...s){const r=this.__v_raw,i=G(r),f=w2(i),n=c==="entries"||c===Symbol.iterator&&f,l=c==="keys"&&f,m=r[c](...s),z=e?w6:a?P6:c3;return!a&&M1(i,"iterate",l?Y4:V2),{next(){const{value:v,done:M}=m.next();return M?{value:v,done:M}:{value:n?[z(v[0]),z(v[1])]:z(v),done:M}},[Symbol.iterator](){return this}}}}function Y1(c){return function(...a){return c==="delete"?!1:this}}function Ul(){const c={get(i){return g3(this,i)},get size(){return b3(this)},has:x3,add:t5,set:m5,delete:z5,clear:C5,forEach:S3(!1,!1)},a={get(i){return g3(this,i,!1,!0)},get size(){return b3(this)},has:x3,add:t5,set:m5,delete:z5,clear:C5,forEach:S3(!1,!0)},e={get(i){return g3(this,i,!0)},get size(){return b3(this,!0)},has(i){return x3.call(this,i,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:S3(!0,!1)},s={get(i){return g3(this,i,!0,!0)},get size(){return b3(this,!0)},has(i){return x3.call(this,i,!0)},add:Y1("add"),set:Y1("set"),delete:Y1("delete"),clear:Y1("clear"),forEach:S3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=N3(i,!1,!1),e[i]=N3(i,!0,!1),a[i]=N3(i,!1,!0),s[i]=N3(i,!0,!0)}),[c,e,a,s]}const[Ol,Il,Gl,Wl]=Ul();function k6(c,a){const e=a?c?Wl:Gl:c?Il:Ol;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(O(e,r)&&r in s?e:s,r,i)}const Zl={get:k6(!1,!1)},jl={get:k6(!1,!0)},Kl={get:k6(!0,!1)},p0=new WeakMap,d0=new WeakMap,L0=new WeakMap,Yl=new WeakMap;function Xl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jl(c){return c.__v_skip||!Object.isExtensible(c)?0:Xl(Ll(c))}function y6(c){return P2(c)?c:A6(c,!1,u0,Zl,p0)}function Ql(c){return A6(c,!1,$l,jl,d0)}function g0(c){return A6(c,!0,El,Kl,L0)}function A6(c,a,e,s,r){if(!Q(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const f=Jl(c);if(f===0)return c;const n=new Proxy(c,f===2?s:e);return r.set(c,n),n}function k2(c){return P2(c)?k2(c.__v_raw):!!(c&&c.__v_isReactive)}function P2(c){return!!(c&&c.__v_isReadonly)}function Z3(c){return!!(c&&c.__v_isShallow)}function x0(c){return k2(c)||P2(c)}function G(c){const a=c&&c.__v_raw;return a?G(a):c}function b0(c){return W3(c,"__v_skip",!0),c}const c3=c=>Q(c)?y6(c):c,P6=c=>Q(c)?g0(c):c;function S0(c){c2&&S1&&(c=G(c),H0(c.dep||(c.dep=b6())))}function N0(c,a){c=G(c),c.dep&&X4(c.dep)}function o1(c){return!!(c&&c.__v_isRef===!0)}function J4(c){return co(c,!1)}function co(c,a){return o1(c)?c:new ao(c,a)}class ao{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:G(a),this._value=e?a:c3(a)}get value(){return S0(this),this._value}set value(a){const e=this.__v_isShallow||Z3(a)||P2(a);a=e?a:G(a),Q2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:c3(a),N0(this))}}function eo(c){return o1(c)?c.value:c}const so={get:(c,a,e)=>eo(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return o1(r)&&!o1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function w0(c){return k2(c)?c:new Proxy(c,so)}var k0;class ro{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[k0]=!1,this._dirty=!0,this.effect=new S6(a,()=>{this._dirty||(this._dirty=!0,N0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=G(this);return S0(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}k0="__v_isReadonly";function io(c,a,e=!1){let s,r;const i=q(c);return i?(s=c,r=y1):(s=c.get,r=c.set),new ro(s,r,i||!r,e)}function a2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){l4(i,a,e)}return r}function A1(c,a,e,s){if(q(c)){const i=a2(c,a,e,s);return i&&o0(i)&&i.catch(f=>{l4(f,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(A1(c[i],a,e,s));return r}function l4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const f=a.proxy,n=e;for(;i;){const m=i.ec;if(m){for(let z=0;z<m.length;z++)if(m[z](c,f,n)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){a2(l,null,10,[c,f,n]);return}}fo(c,e,r,s)}function fo(c,a,e,s=!0){console.error(c)}let a3=!1,Q4=!1;const l1=[];let R1=0;const y2=[];let O1=null,z2=0;const y0=Promise.resolve();let F6=null;function no(c){const a=F6||y0;return c?a.then(this?c.bind(this):c):a}function lo(c){let a=R1+1,e=l1.length;for(;a<e;){const s=a+e>>>1;e3(l1[s])<c?a=s+1:e=s}return a}function T6(c){(!l1.length||!l1.includes(c,a3&&c.allowRecurse?R1+1:R1))&&(c.id==null?l1.push(c):l1.splice(lo(c.id),0,c),A0())}function A0(){!a3&&!Q4&&(Q4=!0,F6=y0.then(F0))}function oo(c){const a=l1.indexOf(c);a>R1&&l1.splice(a,1)}function to(c){R(c)?y2.push(...c):(!O1||!O1.includes(c,c.allowRecurse?z2+1:z2))&&y2.push(c),A0()}function v5(c,a=a3?R1+1:0){for(;a<l1.length;a++){const e=l1[a];e&&e.pre&&(l1.splice(a,1),a--,e())}}function P0(c){if(y2.length){const a=[...new Set(y2)];if(y2.length=0,O1){O1.push(...a);return}for(O1=a,O1.sort((e,s)=>e3(e)-e3(s)),z2=0;z2<O1.length;z2++)O1[z2]();O1=null,z2=0}}const e3=c=>c.id==null?1/0:c.id,mo=(c,a)=>{const e=e3(c)-e3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function F0(c){Q4=!1,a3=!0,l1.sort(mo);const a=y1;try{for(R1=0;R1<l1.length;R1++){const e=l1[R1];e&&e.active!==!1&&a2(e,null,14)}}finally{R1=0,l1.length=0,P0(),a3=!1,F6=null,(l1.length||y2.length)&&F0()}}function zo(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||J;let r=e;const i=a.startsWith("update:"),f=i&&a.slice(7);if(f&&f in s){const z=`${f==="modelValue"?"model":f}Modifiers`,{number:v,trim:M}=s[z]||J;M&&(r=e.map(x=>i1(x)?x.trim():x)),v&&(r=e.map(z0))}let n,l=s[n=R4(a)]||s[n=R4(E1(a))];!l&&i&&(l=s[n=R4(B2(a))]),l&&A1(l,c,6,r);const m=s[n+"Once"];if(m){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,A1(m,c,6,r)}}function T0(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let f={},n=!1;if(!q(c)){const l=m=>{const z=T0(m,a,!0);z&&(n=!0,C1(f,z))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!n?(Q(c)&&s.set(c,null),null):(R(i)?i.forEach(l=>f[l]=null):C1(f,i),Q(c)&&s.set(c,f),f)}function o4(c,a){return!c||!s4(a)?!1:(a=a.slice(2).replace(/Once$/,""),O(c,a[0].toLowerCase()+a.slice(1))||O(c,B2(a))||O(c,a))}let z1=null,_0=null;function j3(c){const a=z1;return z1=c,_0=c&&c.type.__scopeId||null,a}function $(c,a=z1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&g5(-1);const i=j3(a);let f;try{f=c(...r)}finally{j3(i),s._d&&g5(1)}return f};return s._n=!0,s._c=!0,s._d=!0,s}function E4(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[f],slots:n,attrs:l,emit:m,render:z,renderCache:v,data:M,setupState:x,ctx:D,inheritAttrs:T}=c;let I,L;const w=j3(c);try{if(e.shapeFlag&4){const E=r||s;I=D1(z.call(E,E,v,i,x,M,D)),L=l}else{const E=a;I=D1(E.length>1?E(i,{attrs:l,slots:n,emit:m}):E(i,null)),L=a.props?l:Co(l)}}catch(E){K2.length=0,l4(E,c,1),I=k(s2)}let N=I;if(L&&T!==!1){const E=Object.keys(L),{shapeFlag:W}=N;E.length&&W&7&&(f&&E.some(d6)&&(L=vo(L,f)),N=F2(N,L))}return e.dirs&&(N=F2(N),N.dirs=N.dirs?N.dirs.concat(e.dirs):e.dirs),e.transition&&(N.transition=e.transition),I=N,j3(w),I}const Co=c=>{let a;for(const e in c)(e==="class"||e==="style"||s4(e))&&((a||(a={}))[e]=c[e]);return a},vo=(c,a)=>{const e={};for(const s in c)(!d6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function ho(c,a,e){const{props:s,children:r,component:i}=c,{props:f,children:n,patchFlag:l}=a,m=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?h5(s,f,m):!!f;if(l&8){const z=a.dynamicProps;for(let v=0;v<z.length;v++){const M=z[v];if(f[M]!==s[M]&&!o4(m,M))return!0}}}else return(r||n)&&(!n||!n.$stable)?!0:s===f?!1:s?f?h5(s,f,m):!0:!!f;return!1}function h5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!o4(e,i))return!0}return!1}function Ho({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Vo=c=>c.__isSuspense;function Mo(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):to(c)}function uo(c,a){if(f1){let e=f1.provides;const s=f1.parent&&f1.parent.provides;s===e&&(e=f1.provides=Object.create(s)),e[c]=a}}function q3(c,a,e=!1){const s=f1||z1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&q(a)?a.call(s.proxy):a}}const w3={};function E3(c,a,e){return B0(c,a,e)}function B0(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:f}=J){const n=f1;let l,m=!1,z=!1;if(o1(c)?(l=()=>c.value,m=Z3(c)):k2(c)?(l=()=>c,s=!0):R(c)?(z=!0,m=c.some(N=>k2(N)||Z3(N)),l=()=>c.map(N=>{if(o1(N))return N.value;if(k2(N))return x2(N);if(q(N))return a2(N,n,2)})):q(c)?a?l=()=>a2(c,n,2):l=()=>{if(!(n&&n.isUnmounted))return v&&v(),A1(c,n,3,[M])}:l=y1,a&&s){const N=l;l=()=>x2(N())}let v,M=N=>{v=L.onStop=()=>{a2(N,n,4)}},x;if(r3)if(M=y1,a?e&&A1(a,n,3,[l(),z?[]:void 0,M]):l(),r==="sync"){const N=Ct();x=N.__watcherHandles||(N.__watcherHandles=[])}else return y1;let D=z?new Array(c.length).fill(w3):w3;const T=()=>{if(L.active)if(a){const N=L.run();(s||m||(z?N.some((E,W)=>Q2(E,D[W])):Q2(N,D)))&&(v&&v(),A1(a,n,3,[N,D===w3?void 0:z&&D[0]===w3?[]:D,M]),D=N)}else L.run()};T.allowRecurse=!!a;let I;r==="sync"?I=T:r==="post"?I=()=>H1(T,n&&n.suspense):(T.pre=!0,n&&(T.id=n.uid),I=()=>T6(T));const L=new S6(l,I);a?e?T():D=L.run():r==="post"?H1(L.run.bind(L),n&&n.suspense):L.run();const w=()=>{L.stop(),n&&n.scope&&L6(n.scope.effects,L)};return x&&x.push(w),w}function po(c,a,e){const s=this.proxy,r=i1(c)?c.includes(".")?D0(s,c):()=>s[c]:c.bind(s,s);let i;q(a)?i=a:(i=a.handler,e=a);const f=f1;T2(this);const n=B0(r,i.bind(s),e);return f?T2(f):M2(),n}function D0(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function x2(c,a){if(!Q(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),o1(c))x2(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)x2(c[e],a);else if(l0(c)||w2(c))c.forEach(e=>{x2(e,a)});else if(m0(c))for(const e in c)x2(c[e],a);return c}function _6(c){return q(c)?{setup:c,name:c.name}:c}const Z2=c=>!!c.type.__asyncLoader,R0=c=>c.type.__isKeepAlive;function Lo(c,a){q0(c,"a",a)}function go(c,a){q0(c,"da",a)}function q0(c,a,e=f1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(t4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)R0(r.parent.vnode)&&xo(s,a,e,r),r=r.parent}}function xo(c,a,e,s){const r=t4(a,c,s,!0);E0(()=>{L6(s[a],r)},e)}function t4(c,a,e=f1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...f)=>{if(e.isUnmounted)return;D2(),T2(e);const n=A1(a,e,c,f);return M2(),R2(),n});return s?r.unshift(i):r.push(i),i}}const j1=c=>(a,e=f1)=>(!r3||c==="sp")&&t4(c,(...s)=>a(...s),e),bo=j1("bm"),So=j1("m"),No=j1("bu"),wo=j1("u"),ko=j1("bum"),E0=j1("um"),yo=j1("sp"),Ao=j1("rtg"),Po=j1("rtc");function Fo(c,a=f1){t4("ec",c,a)}function o2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let f=0;f<r.length;f++){const n=r[f];i&&(n.oldValue=i[f].value);let l=n.dir[s];l&&(D2(),A1(l,e,8,[c.el,n,c,a]),R2())}}const $0="components";function d2(c,a){return _o($0,c,!0,a)||c}const To=Symbol();function _o(c,a,e=!0,s=!1){const r=z1||f1;if(r){const i=r.type;if(c===$0){const n=tt(i,!1);if(n&&(n===a||n===E1(a)||n===f4(E1(a))))return i}const f=H5(r[c]||i[c],a)||H5(r.appContext[c],a);return!f&&s?i:f}}function H5(c,a){return c&&(c[a]||c[E1(a)]||c[f4(E1(a))])}function G2(c,a,e={},s,r){if(z1.isCE||z1.parent&&Z2(z1.parent)&&z1.parent.isCE)return a!=="default"&&(e.name=a),k("slot",e,s&&s());let i=c[a];i&&i._c&&(i._d=!1),s1();const f=i&&U0(i(e)),n=C2(d1,{key:e.key||f&&f.key||`_${a}`},f||(s?s():[]),f&&c._===1?64:-2);return!r&&n.scopeId&&(n.slotScopeIds=[n.scopeId+"-s"]),i&&i._c&&(i._d=!0),n}function U0(c){return c.some(a=>Y3(a)?!(a.type===s2||a.type===d1&&!U0(a.children)):!0)?c:null}const c6=c=>c?Q0(c)?E6(c)||c.proxy:c6(c.parent):null,j2=C1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>c6(c.parent),$root:c=>c6(c.root),$emit:c=>c.emit,$options:c=>B6(c),$forceUpdate:c=>c.f||(c.f=()=>T6(c.update)),$nextTick:c=>c.n||(c.n=no.bind(c.proxy)),$watch:c=>po.bind(c)}),$4=(c,a)=>c!==J&&!c.__isScriptSetup&&O(c,a),Bo={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:f,type:n,appContext:l}=c;let m;if(a[0]!=="$"){const x=f[a];if(x!==void 0)switch(x){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if($4(s,a))return f[a]=1,s[a];if(r!==J&&O(r,a))return f[a]=2,r[a];if((m=c.propsOptions[0])&&O(m,a))return f[a]=3,i[a];if(e!==J&&O(e,a))return f[a]=4,e[a];a6&&(f[a]=0)}}const z=j2[a];let v,M;if(z)return a==="$attrs"&&M1(c,"get",a),z(c);if((v=n.__cssModules)&&(v=v[a]))return v;if(e!==J&&O(e,a))return f[a]=4,e[a];if(M=l.config.globalProperties,O(M,a))return M[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return $4(r,a)?(r[a]=e,!0):s!==J&&O(s,a)?(s[a]=e,!0):O(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},f){let n;return!!e[f]||c!==J&&O(c,f)||$4(a,f)||(n=i[0])&&O(n,f)||O(s,f)||O(j2,f)||O(r.config.globalProperties,f)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:O(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let a6=!0;function Do(c){const a=B6(c),e=c.proxy,s=c.ctx;a6=!1,a.beforeCreate&&V5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:f,watch:n,provide:l,inject:m,created:z,beforeMount:v,mounted:M,beforeUpdate:x,updated:D,activated:T,deactivated:I,beforeDestroy:L,beforeUnmount:w,destroyed:N,unmounted:E,render:W,renderTracked:v1,renderTriggered:n1,errorCaptured:x1,serverPrefetch:p1,expose:$1,inheritAttrs:E2,components:u3,directives:p3,filters:_4}=a;if(m&&Ro(m,s,null,c.appContext.config.unwrapInjectedRef),f)for(const c1 in f){const j=f[c1];q(j)&&(s[c1]=j.bind(e))}if(r){const c1=r.call(e,e);Q(c1)&&(c.data=y6(c1))}if(a6=!0,i)for(const c1 in i){const j=i[c1],n2=q(j)?j.bind(e,e):q(j.get)?j.get.bind(e,e):y1,d3=!q(j)&&q(j.set)?j.set.bind(e):y1,l2=L1({get:n2,set:d3});Object.defineProperty(s,c1,{enumerable:!0,configurable:!0,get:()=>l2.value,set:P1=>l2.value=P1})}if(n)for(const c1 in n)O0(n[c1],s,e,c1);if(l){const c1=q(l)?l.call(e):l;Reflect.ownKeys(c1).forEach(j=>{uo(j,c1[j])})}z&&V5(z,c,"c");function t1(c1,j){R(j)?j.forEach(n2=>c1(n2.bind(e))):j&&c1(j.bind(e))}if(t1(bo,v),t1(So,M),t1(No,x),t1(wo,D),t1(Lo,T),t1(go,I),t1(Fo,x1),t1(Po,v1),t1(Ao,n1),t1(ko,w),t1(E0,E),t1(yo,p1),R($1))if($1.length){const c1=c.exposed||(c.exposed={});$1.forEach(j=>{Object.defineProperty(c1,j,{get:()=>e[j],set:n2=>e[j]=n2})})}else c.exposed||(c.exposed={});W&&c.render===y1&&(c.render=W),E2!=null&&(c.inheritAttrs=E2),u3&&(c.components=u3),p3&&(c.directives=p3)}function Ro(c,a,e=y1,s=!1){R(c)&&(c=e6(c));for(const r in c){const i=c[r];let f;Q(i)?"default"in i?f=q3(i.from||r,i.default,!0):f=q3(i.from||r):f=q3(i),o1(f)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>f.value,set:n=>f.value=n}):a[r]=f}}function V5(c,a,e){A1(R(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function O0(c,a,e,s){const r=s.includes(".")?D0(e,s):()=>e[s];if(i1(c)){const i=a[c];q(i)&&E3(r,i)}else if(q(c))E3(r,c.bind(e));else if(Q(c))if(R(c))c.forEach(i=>O0(i,a,e,s));else{const i=q(c.handler)?c.handler.bind(e):a[c.handler];q(i)&&E3(r,i,c)}}function B6(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:f}}=c.appContext,n=i.get(a);let l;return n?l=n:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(m=>K3(l,m,f,!0)),K3(l,a,f)),Q(a)&&i.set(a,l),l}function K3(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&K3(c,i,e,!0),r&&r.forEach(f=>K3(c,f,e,!0));for(const f in a)if(!(s&&f==="expose")){const n=qo[f]||e&&e[f];c[f]=n?n(c[f],a[f]):a[f]}return c}const qo={data:M5,props:m2,emits:m2,methods:m2,computed:m2,beforeCreate:m1,created:m1,beforeMount:m1,mounted:m1,beforeUpdate:m1,updated:m1,beforeDestroy:m1,beforeUnmount:m1,destroyed:m1,unmounted:m1,activated:m1,deactivated:m1,errorCaptured:m1,serverPrefetch:m1,components:m2,directives:m2,watch:$o,provide:M5,inject:Eo};function M5(c,a){return a?c?function(){return C1(q(c)?c.call(this,this):c,q(a)?a.call(this,this):a)}:a:c}function Eo(c,a){return m2(e6(c),e6(a))}function e6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function m1(c,a){return c?[...new Set([].concat(c,a))]:a}function m2(c,a){return c?C1(C1(Object.create(null),c),a):a}function $o(c,a){if(!c)return a;if(!a)return c;const e=C1(Object.create(null),c);for(const s in a)e[s]=m1(c[s],a[s]);return e}function Uo(c,a,e,s=!1){const r={},i={};W3(i,z4,1),c.propsDefaults=Object.create(null),I0(c,a,r,i);for(const f in c.propsOptions[0])f in r||(r[f]=void 0);e?c.props=s?r:Ql(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function Oo(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:f}}=c,n=G(r),[l]=c.propsOptions;let m=!1;if((s||f>0)&&!(f&16)){if(f&8){const z=c.vnode.dynamicProps;for(let v=0;v<z.length;v++){let M=z[v];if(o4(c.emitsOptions,M))continue;const x=a[M];if(l)if(O(i,M))x!==i[M]&&(i[M]=x,m=!0);else{const D=E1(M);r[D]=s6(l,n,D,x,c,!1)}else x!==i[M]&&(i[M]=x,m=!0)}}}else{I0(c,a,r,i)&&(m=!0);let z;for(const v in n)(!a||!O(a,v)&&((z=B2(v))===v||!O(a,z)))&&(l?e&&(e[v]!==void 0||e[z]!==void 0)&&(r[v]=s6(l,n,v,void 0,c,!0)):delete r[v]);if(i!==n)for(const v in i)(!a||!O(a,v))&&(delete i[v],m=!0)}m&&I1(c,"set","$attrs")}function I0(c,a,e,s){const[r,i]=c.propsOptions;let f=!1,n;if(a)for(let l in a){if(R3(l))continue;const m=a[l];let z;r&&O(r,z=E1(l))?!i||!i.includes(z)?e[z]=m:(n||(n={}))[z]=m:o4(c.emitsOptions,l)||(!(l in s)||m!==s[l])&&(s[l]=m,f=!0)}if(i){const l=G(e),m=n||J;for(let z=0;z<i.length;z++){const v=i[z];e[v]=s6(r,l,v,m[v],c,!O(m,v))}}return f}function s6(c,a,e,s,r,i){const f=c[e];if(f!=null){const n=O(f,"default");if(n&&s===void 0){const l=f.default;if(f.type!==Function&&q(l)){const{propsDefaults:m}=r;e in m?s=m[e]:(T2(r),s=m[e]=l.call(null,a),M2())}else s=l}f[0]&&(i&&!n?s=!1:f[1]&&(s===""||s===B2(e))&&(s=!0))}return s}function G0(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,f={},n=[];let l=!1;if(!q(c)){const z=v=>{l=!0;const[M,x]=G0(v,a,!0);C1(f,M),x&&n.push(...x)};!e&&a.mixins.length&&a.mixins.forEach(z),c.extends&&z(c.extends),c.mixins&&c.mixins.forEach(z)}if(!i&&!l)return Q(c)&&s.set(c,N2),N2;if(R(i))for(let z=0;z<i.length;z++){const v=E1(i[z]);u5(v)&&(f[v]=J)}else if(i)for(const z in i){const v=E1(z);if(u5(v)){const M=i[z],x=f[v]=R(M)||q(M)?{type:M}:Object.assign({},M);if(x){const D=L5(Boolean,x.type),T=L5(String,x.type);x[0]=D>-1,x[1]=T<0||D<T,(D>-1||O(x,"default"))&&n.push(v)}}}const m=[f,n];return Q(c)&&s.set(c,m),m}function u5(c){return c[0]!=="$"}function p5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function d5(c,a){return p5(c)===p5(a)}function L5(c,a){return R(a)?a.findIndex(e=>d5(e,c)):q(a)&&d5(a,c)?0:-1}const W0=c=>c[0]==="_"||c==="$stable",D6=c=>R(c)?c.map(D1):[D1(c)],Io=(c,a,e)=>{if(a._n)return a;const s=$((...r)=>D6(a(...r)),e);return s._c=!1,s},Z0=(c,a,e)=>{const s=c._ctx;for(const r in c){if(W0(r))continue;const i=c[r];if(q(i))a[r]=Io(r,i,s);else if(i!=null){const f=D6(i);a[r]=()=>f}}},j0=(c,a)=>{const e=D6(a);c.slots.default=()=>e},Go=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=G(a),W3(a,"_",e)):Z0(a,c.slots={})}else c.slots={},a&&j0(c,a);W3(c.slots,z4,1)},Wo=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,f=J;if(s.shapeFlag&32){const n=a._;n?e&&n===1?i=!1:(C1(r,a),!e&&n===1&&delete r._):(i=!a.$stable,Z0(a,r)),f=a}else a&&(j0(c,a),f={default:1});if(i)for(const n in r)!W0(n)&&!(n in f)&&delete r[n]};function K0(){return{app:null,config:{isNativeTag:ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zo=0;function jo(c,a){return function(s,r=null){q(s)||(s=Object.assign({},s)),r!=null&&!Q(r)&&(r=null);const i=K0(),f=new Set;let n=!1;const l=i.app={_uid:Zo++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:vt,get config(){return i.config},set config(m){},use(m,...z){return f.has(m)||(m&&q(m.install)?(f.add(m),m.install(l,...z)):q(m)&&(f.add(m),m(l,...z))),l},mixin(m){return i.mixins.includes(m)||i.mixins.push(m),l},component(m,z){return z?(i.components[m]=z,l):i.components[m]},directive(m,z){return z?(i.directives[m]=z,l):i.directives[m]},mount(m,z,v){if(!n){const M=k(s,r);return M.appContext=i,z&&a?a(M,m):c(M,m,v),n=!0,l._container=m,m.__vue_app__=l,E6(M.component)||M.component.proxy}},unmount(){n&&(c(null,l._container),delete l._container.__vue_app__)},provide(m,z){return i.provides[m]=z,l}};return l}}function r6(c,a,e,s,r=!1){if(R(c)){c.forEach((M,x)=>r6(M,a&&(R(a)?a[x]:a),e,s,r));return}if(Z2(s)&&!r)return;const i=s.shapeFlag&4?E6(s.component)||s.component.proxy:s.el,f=r?null:i,{i:n,r:l}=c,m=a&&a.r,z=n.refs===J?n.refs={}:n.refs,v=n.setupState;if(m!=null&&m!==l&&(i1(m)?(z[m]=null,O(v,m)&&(v[m]=null)):o1(m)&&(m.value=null)),q(l))a2(l,n,12,[f,z]);else{const M=i1(l),x=o1(l);if(M||x){const D=()=>{if(c.f){const T=M?O(v,l)?v[l]:z[l]:l.value;r?R(T)&&L6(T,i):R(T)?T.includes(i)||T.push(i):M?(z[l]=[i],O(v,l)&&(v[l]=z[l])):(l.value=[i],c.k&&(z[c.k]=l.value))}else M?(z[l]=f,O(v,l)&&(v[l]=f)):x&&(l.value=f,c.k&&(z[c.k]=f))};f?(D.id=-1,H1(D,e)):D()}}}const H1=Mo;function Ko(c){return Yo(c)}function Yo(c,a){const e=bl();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:f,createText:n,createComment:l,setText:m,setElementText:z,parentNode:v,nextSibling:M,setScopeId:x=y1,insertStaticContent:D}=c,T=(o,t,h,V=null,H=null,d=null,b=!1,p=null,g=!!t.dynamicChildren)=>{if(o===t)return;o&&!U2(o,t)&&(V=L3(o),P1(o,H,d,!0),o=null),t.patchFlag===-2&&(g=!1,t.dynamicChildren=null);const{type:u,ref:P,shapeFlag:y}=t;switch(u){case m4:I(o,t,h,V);break;case s2:L(o,t,h,V);break;case $3:o==null&&w(t,h,V,b);break;case d1:u3(o,t,h,V,H,d,b,p,g);break;default:y&1?W(o,t,h,V,H,d,b,p,g):y&6?p3(o,t,h,V,H,d,b,p,g):(y&64||y&128)&&u.process(o,t,h,V,H,d,b,p,g,L2)}P!=null&&H&&r6(P,o&&o.ref,d,t||o,!t)},I=(o,t,h,V)=>{if(o==null)s(t.el=n(t.children),h,V);else{const H=t.el=o.el;t.children!==o.children&&m(H,t.children)}},L=(o,t,h,V)=>{o==null?s(t.el=l(t.children||""),h,V):t.el=o.el},w=(o,t,h,V)=>{[o.el,o.anchor]=D(o.children,t,h,V,o.el,o.anchor)},N=({el:o,anchor:t},h,V)=>{let H;for(;o&&o!==t;)H=M(o),s(o,h,V),o=H;s(t,h,V)},E=({el:o,anchor:t})=>{let h;for(;o&&o!==t;)h=M(o),r(o),o=h;r(t)},W=(o,t,h,V,H,d,b,p,g)=>{b=b||t.type==="svg",o==null?v1(t,h,V,H,d,b,p,g):p1(o,t,H,d,b,p,g)},v1=(o,t,h,V,H,d,b,p)=>{let g,u;const{type:P,props:y,shapeFlag:F,transition:B,dirs:U}=o;if(g=o.el=f(o.type,d,y&&y.is,y),F&8?z(g,o.children):F&16&&x1(o.children,g,null,V,H,d&&P!=="foreignObject",b,p),U&&o2(o,null,V,"created"),y){for(const Z in y)Z!=="value"&&!R3(Z)&&i(g,Z,null,y[Z],d,o.children,V,H,U1);"value"in y&&i(g,"value",null,y.value),(u=y.onVnodeBeforeMount)&&T1(u,V,o)}n1(g,o,o.scopeId,b,V),U&&o2(o,null,V,"beforeMount");const K=(!H||H&&!H.pendingBranch)&&B&&!B.persisted;K&&B.beforeEnter(g),s(g,t,h),((u=y&&y.onVnodeMounted)||K||U)&&H1(()=>{u&&T1(u,V,o),K&&B.enter(g),U&&o2(o,null,V,"mounted")},H)},n1=(o,t,h,V,H)=>{if(h&&x(o,h),V)for(let d=0;d<V.length;d++)x(o,V[d]);if(H){let d=H.subTree;if(t===d){const b=H.vnode;n1(o,b,b.scopeId,b.slotScopeIds,H.parent)}}},x1=(o,t,h,V,H,d,b,p,g=0)=>{for(let u=g;u<o.length;u++){const P=o[u]=p?Q1(o[u]):D1(o[u]);T(null,P,t,h,V,H,d,b,p)}},p1=(o,t,h,V,H,d,b)=>{const p=t.el=o.el;let{patchFlag:g,dynamicChildren:u,dirs:P}=t;g|=o.patchFlag&16;const y=o.props||J,F=t.props||J;let B;h&&t2(h,!1),(B=F.onVnodeBeforeUpdate)&&T1(B,h,t,o),P&&o2(t,o,h,"beforeUpdate"),h&&t2(h,!0);const U=H&&t.type!=="foreignObject";if(u?$1(o.dynamicChildren,u,p,h,V,U,d):b||j(o,t,p,null,h,V,U,d,!1),g>0){if(g&16)E2(p,t,y,F,h,V,H);else if(g&2&&y.class!==F.class&&i(p,"class",null,F.class,H),g&4&&i(p,"style",y.style,F.style,H),g&8){const K=t.dynamicProps;for(let Z=0;Z<K.length;Z++){const e1=K[Z],b1=y[e1],g2=F[e1];(g2!==b1||e1==="value")&&i(p,e1,b1,g2,H,o.children,h,V,U1)}}g&1&&o.children!==t.children&&z(p,t.children)}else!b&&u==null&&E2(p,t,y,F,h,V,H);((B=F.onVnodeUpdated)||P)&&H1(()=>{B&&T1(B,h,t,o),P&&o2(t,o,h,"updated")},V)},$1=(o,t,h,V,H,d,b)=>{for(let p=0;p<t.length;p++){const g=o[p],u=t[p],P=g.el&&(g.type===d1||!U2(g,u)||g.shapeFlag&70)?v(g.el):h;T(g,u,P,null,V,H,d,b,!0)}},E2=(o,t,h,V,H,d,b)=>{if(h!==V){if(h!==J)for(const p in h)!R3(p)&&!(p in V)&&i(o,p,h[p],null,b,t.children,H,d,U1);for(const p in V){if(R3(p))continue;const g=V[p],u=h[p];g!==u&&p!=="value"&&i(o,p,u,g,b,t.children,H,d,U1)}"value"in V&&i(o,"value",h.value,V.value)}},u3=(o,t,h,V,H,d,b,p,g)=>{const u=t.el=o?o.el:n(""),P=t.anchor=o?o.anchor:n("");let{patchFlag:y,dynamicChildren:F,slotScopeIds:B}=t;B&&(p=p?p.concat(B):B),o==null?(s(u,h,V),s(P,h,V),x1(t.children,h,P,H,d,b,p,g)):y>0&&y&64&&F&&o.dynamicChildren?($1(o.dynamicChildren,F,h,H,d,b,p),(t.key!=null||H&&t===H.subTree)&&Y0(o,t,!0)):j(o,t,h,P,H,d,b,p,g)},p3=(o,t,h,V,H,d,b,p,g)=>{t.slotScopeIds=p,o==null?t.shapeFlag&512?H.ctx.activate(t,h,V,b,g):_4(t,h,V,H,d,b,g):c5(o,t,g)},_4=(o,t,h,V,H,d,b)=>{const p=o.component=it(o,V,H);if(R0(o)&&(p.ctx.renderer=L2),ft(p),p.asyncDep){if(H&&H.registerDep(p,t1),!o.el){const g=p.subTree=k(s2);L(null,g,t,h)}return}t1(p,o,t,h,H,d,b)},c5=(o,t,h)=>{const V=t.component=o.component;if(ho(o,t,h))if(V.asyncDep&&!V.asyncResolved){c1(V,t,h);return}else V.next=t,oo(V.update),V.update();else t.el=o.el,V.vnode=t},t1=(o,t,h,V,H,d,b)=>{const p=()=>{if(o.isMounted){let{next:P,bu:y,u:F,parent:B,vnode:U}=o,K=P,Z;t2(o,!1),P?(P.el=U.el,c1(o,P,b)):P=U,y&&q4(y),(Z=P.props&&P.props.onVnodeBeforeUpdate)&&T1(Z,B,P,U),t2(o,!0);const e1=E4(o),b1=o.subTree;o.subTree=e1,T(b1,e1,v(b1.el),L3(b1),o,H,d),P.el=e1.el,K===null&&Ho(o,e1.el),F&&H1(F,H),(Z=P.props&&P.props.onVnodeUpdated)&&H1(()=>T1(Z,B,P,U),H)}else{let P;const{el:y,props:F}=t,{bm:B,m:U,parent:K}=o,Z=Z2(t);if(t2(o,!1),B&&q4(B),!Z&&(P=F&&F.onVnodeBeforeMount)&&T1(P,K,t),t2(o,!0),y&&D4){const e1=()=>{o.subTree=E4(o),D4(y,o.subTree,o,H,null)};Z?t.type.__asyncLoader().then(()=>!o.isUnmounted&&e1()):e1()}else{const e1=o.subTree=E4(o);T(null,e1,h,V,o,H,d),t.el=e1.el}if(U&&H1(U,H),!Z&&(P=F&&F.onVnodeMounted)){const e1=t;H1(()=>T1(P,K,e1),H)}(t.shapeFlag&256||K&&Z2(K.vnode)&&K.vnode.shapeFlag&256)&&o.a&&H1(o.a,H),o.isMounted=!0,t=h=V=null}},g=o.effect=new S6(p,()=>T6(u),o.scope),u=o.update=()=>g.run();u.id=o.uid,t2(o,!0),u()},c1=(o,t,h)=>{t.component=o;const V=o.vnode.props;o.vnode=t,o.next=null,Oo(o,t.props,V,h),Wo(o,t.children,h),D2(),v5(),R2()},j=(o,t,h,V,H,d,b,p,g=!1)=>{const u=o&&o.children,P=o?o.shapeFlag:0,y=t.children,{patchFlag:F,shapeFlag:B}=t;if(F>0){if(F&128){d3(u,y,h,V,H,d,b,p,g);return}else if(F&256){n2(u,y,h,V,H,d,b,p,g);return}}B&8?(P&16&&U1(u,H,d),y!==u&&z(h,y)):P&16?B&16?d3(u,y,h,V,H,d,b,p,g):U1(u,H,d,!0):(P&8&&z(h,""),B&16&&x1(y,h,V,H,d,b,p,g))},n2=(o,t,h,V,H,d,b,p,g)=>{o=o||N2,t=t||N2;const u=o.length,P=t.length,y=Math.min(u,P);let F;for(F=0;F<y;F++){const B=t[F]=g?Q1(t[F]):D1(t[F]);T(o[F],B,h,null,H,d,b,p,g)}u>P?U1(o,H,d,!0,!1,y):x1(t,h,V,H,d,b,p,g,y)},d3=(o,t,h,V,H,d,b,p,g)=>{let u=0;const P=t.length;let y=o.length-1,F=P-1;for(;u<=y&&u<=F;){const B=o[u],U=t[u]=g?Q1(t[u]):D1(t[u]);if(U2(B,U))T(B,U,h,null,H,d,b,p,g);else break;u++}for(;u<=y&&u<=F;){const B=o[y],U=t[F]=g?Q1(t[F]):D1(t[F]);if(U2(B,U))T(B,U,h,null,H,d,b,p,g);else break;y--,F--}if(u>y){if(u<=F){const B=F+1,U=B<P?t[B].el:V;for(;u<=F;)T(null,t[u]=g?Q1(t[u]):D1(t[u]),h,U,H,d,b,p,g),u++}}else if(u>F)for(;u<=y;)P1(o[u],H,d,!0),u++;else{const B=u,U=u,K=new Map;for(u=U;u<=F;u++){const V1=t[u]=g?Q1(t[u]):D1(t[u]);V1.key!=null&&K.set(V1.key,u)}let Z,e1=0;const b1=F-U+1;let g2=!1,s5=0;const $2=new Array(b1);for(u=0;u<b1;u++)$2[u]=0;for(u=B;u<=y;u++){const V1=o[u];if(e1>=b1){P1(V1,H,d,!0);continue}let F1;if(V1.key!=null)F1=K.get(V1.key);else for(Z=U;Z<=F;Z++)if($2[Z-U]===0&&U2(V1,t[Z])){F1=Z;break}F1===void 0?P1(V1,H,d,!0):($2[F1-U]=u+1,F1>=s5?s5=F1:g2=!0,T(V1,t[F1],h,null,H,d,b,p,g),e1++)}const r5=g2?Xo($2):N2;for(Z=r5.length-1,u=b1-1;u>=0;u--){const V1=U+u,F1=t[V1],i5=V1+1<P?t[V1+1].el:V;$2[u]===0?T(null,F1,h,i5,H,d,b,p,g):g2&&(Z<0||u!==r5[Z]?l2(F1,h,i5,2):Z--)}}},l2=(o,t,h,V,H=null)=>{const{el:d,type:b,transition:p,children:g,shapeFlag:u}=o;if(u&6){l2(o.component.subTree,t,h,V);return}if(u&128){o.suspense.move(t,h,V);return}if(u&64){b.move(o,t,h,L2);return}if(b===d1){s(d,t,h);for(let y=0;y<g.length;y++)l2(g[y],t,h,V);s(o.anchor,t,h);return}if(b===$3){N(o,t,h);return}if(V!==2&&u&1&&p)if(V===0)p.beforeEnter(d),s(d,t,h),H1(()=>p.enter(d),H);else{const{leave:y,delayLeave:F,afterLeave:B}=p,U=()=>s(d,t,h),K=()=>{y(d,()=>{U(),B&&B()})};F?F(d,U,K):K()}else s(d,t,h)},P1=(o,t,h,V=!1,H=!1)=>{const{type:d,props:b,ref:p,children:g,dynamicChildren:u,shapeFlag:P,patchFlag:y,dirs:F}=o;if(p!=null&&r6(p,null,h,o,!0),P&256){t.ctx.deactivate(o);return}const B=P&1&&F,U=!Z2(o);let K;if(U&&(K=b&&b.onVnodeBeforeUnmount)&&T1(K,t,o),P&6)zl(o.component,h,V);else{if(P&128){o.suspense.unmount(h,V);return}B&&o2(o,null,t,"beforeUnmount"),P&64?o.type.remove(o,t,h,H,L2,V):u&&(d!==d1||y>0&&y&64)?U1(u,t,h,!1,!0):(d===d1&&y&384||!H&&P&16)&&U1(g,t,h),V&&a5(o)}(U&&(K=b&&b.onVnodeUnmounted)||B)&&H1(()=>{K&&T1(K,t,o),B&&o2(o,null,t,"unmounted")},h)},a5=o=>{const{type:t,el:h,anchor:V,transition:H}=o;if(t===d1){ml(h,V);return}if(t===$3){E(o);return}const d=()=>{r(h),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(o.shapeFlag&1&&H&&!H.persisted){const{leave:b,delayLeave:p}=H,g=()=>b(h,d);p?p(o.el,d,g):g()}else d()},ml=(o,t)=>{let h;for(;o!==t;)h=M(o),r(o),o=h;r(t)},zl=(o,t,h)=>{const{bum:V,scope:H,update:d,subTree:b,um:p}=o;V&&q4(V),H.stop(),d&&(d.active=!1,P1(b,o,t,h)),p&&H1(p,t),H1(()=>{o.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve())},U1=(o,t,h,V=!1,H=!1,d=0)=>{for(let b=d;b<o.length;b++)P1(o[b],t,h,V,H)},L3=o=>o.shapeFlag&6?L3(o.component.subTree):o.shapeFlag&128?o.suspense.next():M(o.anchor||o.el),e5=(o,t,h)=>{o==null?t._vnode&&P1(t._vnode,null,null,!0):T(t._vnode||null,o,t,null,null,null,h),v5(),P0(),t._vnode=o},L2={p:T,um:P1,m:l2,r:a5,mt:_4,mc:x1,pc:j,pbc:$1,n:L3,o:c};let B4,D4;return a&&([B4,D4]=a(L2)),{render:e5,hydrate:B4,createApp:jo(e5,B4)}}function t2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Y0(c,a,e=!1){const s=c.children,r=a.children;if(R(s)&&R(r))for(let i=0;i<s.length;i++){const f=s[i];let n=r[i];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=r[i]=Q1(r[i]),n.el=f.el),e||Y0(f,n)),n.type===m4&&(n.el=f.el)}}function Xo(c){const a=c.slice(),e=[0];let s,r,i,f,n;const l=c.length;for(s=0;s<l;s++){const m=c[s];if(m!==0){if(r=e[e.length-1],c[r]<m){a[s]=r,e.push(s);continue}for(i=0,f=e.length-1;i<f;)n=i+f>>1,c[e[n]]<m?i=n+1:f=n;m<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,f=e[i-1];i-- >0;)e[i]=f,f=a[f];return e}const Jo=c=>c.__isTeleport,d1=Symbol(void 0),m4=Symbol(void 0),s2=Symbol(void 0),$3=Symbol(void 0),K2=[];let w1=null;function s1(c=!1){K2.push(w1=c?null:[])}function Qo(){K2.pop(),w1=K2[K2.length-1]||null}let s3=1;function g5(c){s3+=c}function X0(c){return c.dynamicChildren=s3>0?w1||N2:null,Qo(),s3>0&&w1&&w1.push(c),c}function g1(c,a,e,s,r,i){return X0(C(c,a,e,s,r,i,!0))}function C2(c,a,e,s,r){return X0(k(c,a,e,s,r,!0))}function Y3(c){return c?c.__v_isVNode===!0:!1}function U2(c,a){return c.type===a.type&&c.key===a.key}const z4="__vInternal",J0=({key:c})=>c??null,U3=({ref:c,ref_key:a,ref_for:e})=>c!=null?i1(c)||o1(c)||q(c)?{i:z1,r:c,k:a,f:!!e}:c:null;function C(c,a=null,e=null,s=0,r=null,i=c===d1?0:1,f=!1,n=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&J0(a),ref:a&&U3(a),scopeId:_0,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:z1};return n?(q6(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=i1(e)?8:16),s3>0&&!f&&w1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&w1.push(l),l}const k=ct;function ct(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===To)&&(c=s2),Y3(c)){const n=F2(c,a,!0);return e&&q6(n,e),s3>0&&!i&&w1&&(n.shapeFlag&6?w1[w1.indexOf(c)]=n:w1.push(n)),n.patchFlag|=-2,n}if(mt(c)&&(c=c.__vccOpts),a){a=at(a);let{class:n,style:l}=a;n&&!i1(n)&&(a.class=p6(n)),Q(l)&&(x0(l)&&!R(l)&&(l=C1({},l)),a.style=e4(l))}const f=i1(c)?1:Vo(c)?128:Jo(c)?64:Q(c)?4:q(c)?2:0;return C(c,a,e,s,r,f,i,!0)}function at(c){return c?x0(c)||z4 in c?C1({},c):c:null}function F2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:f}=c,n=a?et(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:n,key:n&&J0(n),ref:a&&a.ref?e&&r?R(r)?r.concat(U3(a)):[r,U3(a)]:U3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:f,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==d1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&F2(c.ssContent),ssFallback:c.ssFallback&&F2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function _(c=" ",a=0){return k(m4,null,c,a)}function C4(c,a){const e=k($3,null,c);return e.staticCount=a,e}function R6(c="",a=!1){return a?(s1(),C2(s2,null,c)):k(s2,null,c)}function D1(c){return c==null||typeof c=="boolean"?k(s2):R(c)?k(d1,null,c.slice()):typeof c=="object"?Q1(c):k(m4,null,String(c))}function Q1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:F2(c)}function q6(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),q6(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(z4 in a)?a._ctx=z1:r===3&&z1&&(z1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else q(a)?(a={default:a,_ctx:z1},e=32):(a=String(a),s&64?(e=16,a=[_(a)]):e=8);c.children=a,c.shapeFlag|=e}function et(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=p6([a.class,s.class]));else if(r==="style")a.style=e4([a.style,s.style]);else if(s4(r)){const i=a[r],f=s[r];f&&i!==f&&!(R(i)&&i.includes(f))&&(a[r]=i?[].concat(i,f):f)}else r!==""&&(a[r]=s[r])}return a}function T1(c,a,e,s=null){A1(c,a,7,[e,s])}const st=K0();let rt=0;function it(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||st,i={uid:rt++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G0(s,r),emitsOptions:T0(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=zo.bind(null,i),c.ce&&c.ce(i),i}let f1=null;const T2=c=>{f1=c,c.scope.on()},M2=()=>{f1&&f1.scope.off(),f1=null};function Q0(c){return c.vnode.shapeFlag&4}let r3=!1;function ft(c,a=!1){r3=a;const{props:e,children:s}=c.vnode,r=Q0(c);Uo(c,e,r,a),Go(c,s);const i=r?nt(c,a):void 0;return r3=!1,i}function nt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=b0(new Proxy(c.ctx,Bo));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?ot(c):null;T2(c),D2();const i=a2(s,c,0,[c.props,r]);if(R2(),M2(),o0(i)){if(i.then(M2,M2),a)return i.then(f=>{x5(c,f,a)}).catch(f=>{l4(f,c,0)});c.asyncDep=i}else x5(c,i,a)}else c7(c,a)}function x5(c,a,e){q(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:Q(a)&&(c.setupState=w0(a)),c7(c,e)}let b5;function c7(c,a,e){const s=c.type;if(!c.render){if(!a&&b5&&!s.render){const r=s.template||B6(c).template;if(r){const{isCustomElement:i,compilerOptions:f}=c.appContext.config,{delimiters:n,compilerOptions:l}=s,m=C1(C1({isCustomElement:i,delimiters:n},f),l);s.render=b5(r,m)}}c.render=s.render||y1}T2(c),D2(),Do(c),R2(),M2()}function lt(c){return new Proxy(c.attrs,{get(a,e){return M1(c,"get","$attrs"),a[e]}})}function ot(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=lt(c))},slots:c.slots,emit:c.emit,expose:a}}function E6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(w0(b0(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in j2)return j2[e](c)},has(a,e){return e in a||e in j2}}))}function tt(c,a=!0){return q(c)?c.displayName||c.name:c.name||a&&c.__name}function mt(c){return q(c)&&"__vccOpts"in c}const L1=(c,a)=>io(c,a,r3);function a7(c,a,e){const s=arguments.length;return s===2?Q(a)&&!R(a)?Y3(a)?k(c,null,[a]):k(c,a):k(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&Y3(e)&&(e=[e]),k(c,a,e))}const zt=Symbol(""),Ct=()=>q3(zt),vt="3.2.45",ht="http://www.w3.org/2000/svg",v2=typeof document<"u"?document:null,S5=v2&&v2.createElement("template"),Ht={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?v2.createElementNS(ht,c):v2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>v2.createTextNode(c),createComment:c=>v2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>v2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const f=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{S5.innerHTML=s?`<svg>${c}</svg>`:c;const n=S5.content;if(s){const l=n.firstChild;for(;l.firstChild;)n.appendChild(l.firstChild);n.removeChild(l)}a.insertBefore(n,e)}return[f?f.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Vt(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Mt(c,a,e){const s=c.style,r=i1(e);if(e&&!r){for(const i in e)i6(s,i,e[i]);if(a&&!i1(a))for(const i in a)e[i]==null&&i6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const N5=/\s*!important$/;function i6(c,a,e){if(R(e))e.forEach(s=>i6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=ut(c,a);N5.test(e)?c.setProperty(B2(s),e.replace(N5,""),"important"):c[s]=e}}const w5=["Webkit","Moz","ms"],U4={};function ut(c,a){const e=U4[a];if(e)return e;let s=E1(a);if(s!=="filter"&&s in c)return U4[a]=s;s=f4(s);for(let r=0;r<w5.length;r++){const i=w5[r]+s;if(i in c)return U4[a]=i}return a}const k5="http://www.w3.org/1999/xlink";function pt(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(k5,a.slice(6,a.length)):c.setAttributeNS(k5,a,e);else{const i=Ml(a);e==null||i&&!f0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function dt(c,a,e,s,r,i,f){if(a==="innerHTML"||a==="textContent"){s&&f(s,r,i),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e??"";(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let n=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=f0(e):e==null&&l==="string"?(e="",n=!0):l==="number"&&(e=0,n=!0)}try{c[a]=e}catch{}n&&c.removeAttribute(a)}function Lt(c,a,e,s){c.addEventListener(a,e,s)}function gt(c,a,e,s){c.removeEventListener(a,e,s)}function xt(c,a,e,s,r=null){const i=c._vei||(c._vei={}),f=i[a];if(s&&f)f.value=s;else{const[n,l]=bt(a);if(s){const m=i[a]=wt(s,r);Lt(c,n,m,l)}else f&&(gt(c,n,f,l),i[a]=void 0)}}const y5=/(?:Once|Passive|Capture)$/;function bt(c){let a;if(y5.test(c)){a={};let s;for(;s=c.match(y5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):B2(c.slice(2)),a]}let O4=0;const St=Promise.resolve(),Nt=()=>O4||(St.then(()=>O4=0),O4=Date.now());function wt(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;A1(kt(s,e.value),a,5,[s])};return e.value=c,e.attached=Nt(),e}function kt(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const A5=/^on[a-z]/,yt=(c,a,e,s,r=!1,i,f,n,l)=>{a==="class"?Vt(c,s,r):a==="style"?Mt(c,e,s):s4(a)?d6(a)||xt(c,a,e,s,f):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):At(c,a,s,r))?dt(c,a,s,i,f,n,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),pt(c,a,s,r))};function At(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&A5.test(a)&&q(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||A5.test(a)&&i1(e)?!1:a in c}const Pt=C1({patchProp:yt},Ht);let P5;function Ft(){return P5||(P5=Ko(Pt))}const Tt=(...c)=>{const a=Ft().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=_t(s);if(!r)return;const i=a._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const f=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),f},a};function _t(c){return i1(c)?document.querySelector(c):c}const Bt="/perfil.jpg",t3=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Dt={},Rt={class:"mt-16 text-white"},qt=C("img",{class:"rounded-full w-36 shadow-xl shadow-zinc-900 inline-block",src:Bt},null,-1),Et=C("div",{class:"mt-12 text-4xl font-bold"}," Marcos Gtz. ",-1),$t=C("div",{class:"mt-2 text-zinc-300 text-md font-light"},"Programador web",-1),Ut={class:"mt-6 text-xl"},Ot={class:"mx-3",href:"https://www.linkedin.com/",target:"_blank"},It={class:"mx-3",href:"https://www.facebook.com/marcos.gtz.16/",target:"_blank"},Gt={class:"mx-3",href:"https://twitter.com/MarcosG52811338",target:"_blank"},Wt=C("a",{class:"inline-block mt-12 px-8 py-2 rounded-full border-2 border-white",href:"https://docs.google.com/presentation/d/1dgAs-2XnmkFbhRVE3UGviVdESzElpgsO1EqWduR0VaU/edit?usp=share_link",target:"_blank"}," Descargar CV ",-1),Zt=C("div",{class:"absolute bottom-3 left-0 right-0 m-auto text-zinc-300 font-light text-xs"}," © 2022 No rights reserved. ",-1);function jt(c,a){const e=d2("font-awesome-icon");return s1(),g1("div",Rt,[qt,Et,$t,C("div",Ut,[C("a",Ot,[k(e,{icon:"fa-brands fa-linkedin-in"})]),C("a",It,[k(e,{icon:"fa-brands fa-facebook-f"})]),C("a",Gt,[k(e,{icon:"fa-brands fa-twitter"})])]),Wt,Zt])}const Kt=t3(Dt,[["render",jt]]),Yt={},Xt={class:"text-center h-full flex items-center justify-center"},Jt=C("div",null,[C("h1",{class:"text-6xl font-bold text-white w-full"},"Marcos Gtz."),C("h2",{class:"text-xl text-gray-400"},"Programador web")],-1),Qt=[Jt];function cm(c,a){return s1(),g1("div",Xt,Qt)}const am=t3(Yt,[["render",cm]]),em={class:"text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll"},sm=C("h1",{class:"text-3xl font-bold"},[_(" Acerca de "),C("span",{class:"text-emerald-500"},"Mí")],-1),rm={class:"grid grid-cols-3 gap-10 mt-8 font-light"},im={class:"col-span-2 leading-7"},fm=C("br",null,null,-1),nm=C("br",null,null,-1),lm=C("span",{class:"font-bold"},"espageti",-1),om={class:"leading-9"},tm=C("span",{class:"text-emerald-600 font-bold mr-2"},"Edad",-1),mm=C("br",null,null,-1),zm=C("span",{class:"text-emerald-600 font-bold mr-2"},"Residencia",-1),Cm=C("br",null,null,-1),vm=C("span",{class:"text-emerald-600 font-bold mr-2"},"Dirección",-1),hm=C("br",null,null,-1),Hm=C("span",{class:"text-emerald-600 font-bold mr-2"},"Correo",-1),Vm=C("a",{href:"mailto:gtzcrash@gmail.com"},"gtzcrash@gmail.com",-1),Mm=C("br",null,null,-1),um=C("span",{class:"text-emerald-600 font-bold mr-2"},"Teléfono",-1),pm=C("h1",{class:"text-2xl font-bold mt-12 mb-8"},[_(" Que puedo "),C("span",{class:"text-emerald-500"},"Hacer?")],-1),dm={class:"grid grid-cols-2 gap-x-14 gap-y-6 text-justify"},Lm=C("h3",{class:"text-xl font-bold mt-2"},"Front-End",-1),gm=C("div",{class:"leading-6 font-light text-sm"}," Conocimiento intermedio de js; básico-intermedio de bootstrap, tailwind, vue y angular. ",-1),xm=C("h3",{class:"text-xl font-bold mt-2"},"Back-End",-1),bm=C("div",{class:"leading-6 font-light text-sm"}," Conocimiento avanzado de PHP. Intermedio de Laravel, Lumen, Twig, Inertia. Básico en nodejs + expressjs ",-1),Sm=C("h3",{class:"text-xl font-bold mt-2"},"Servicios",-1),Nm=C("div",{class:"leading-6 font-light text-sm"}," Instalación y configuración de servicios web (apache, nginx, iis), manejo de ssh, ftp, bash, php-(fpm,cli), mysql, oracle. ",-1),wm=C("h3",{class:"text-xl font-bold mt-2"},"Terceros",-1),km=C("div",{class:"leading-6 font-light text-sm"}," Autenticaciones con Ldap, Azure, Google, Saml. Creación de plugins básicos para wordpress. Google Admin SDK con PHP. Manejo de firmas electrónicas. ",-1),ym={__name:"AboutMe",setup(c){const a=new Date().getFullYear(),e=()=>Math.abs(a-new Date("1988-04-20").getFullYear()),s=()=>Math.abs(a-new Date("2011-02-01").getFullYear());return(r,i)=>{const f=d2("font-awesome-icon");return s1(),g1("div",em,[sm,C("div",rm,[C("div",im,[_(" Soy programador web con "+G3(s())+" años de experiencia en Front-End y Back-End. Conozco un poco de cada lenguaje de programación, pero mi especialidad es PHP. ",1),fm,nm,_(" Tengo la habilidad de entender, modificar y adaptarme a las metodologías más comunes de programación, incluido el "),lm,_(". Estoy abierto a investigar por mi cuenta las cosas que desconozco y aprender en el proceso. ")]),C("div",om,[tm,_(G3(e())+" ",1),mm,zm,_("MEX "),Cm,vm,_("Buenos Aires, Tuxtla Gutiérrez, Chiapas "),hm,Hm,Vm,Mm,um,_("+52 9611876874 ")])]),pm,C("div",dm,[C("div",null,[k(f,{class:"text-3xl text-emerald-600",icon:"fa-solid fa-palette"}),Lm,gm]),C("div",null,[k(f,{class:"text-3xl text-emerald-600",icon:"fa-solid fa-tools"}),xm,bm]),C("div",null,[k(f,{class:"text-3xl text-emerald-600",icon:"fa-solid fa-server"}),Sm,Nm]),C("div",null,[k(f,{class:"text-3xl text-emerald-600",icon:"fa-solid fa-gifts"}),wm,km])])])}}},Am={},Pm={class:"text-right text-zinc-500 pr-6 pt-6"},Fm={class:"font-bold"},Tm=C("br",null,null,-1),_m={class:"text-xs"},Bm={class:"col-span-2 border-l pl-6 pt-6 relative"},Dm={class:"font-bold"},Rm=C("br",null,null,-1),qm={class:"text-zinc-300"};function Em(c,a){const e=d2("font-awesome-icon");return s1(),g1(d1,null,[C("div",Pm,[C("span",Fm,[G2(c.$slots,"date")]),Tm,C("span",_m,[G2(c.$slots,"place")])]),C("div",Bm,[k(e,{icon:"fa-solid fa-circle",class:"absolute -left-2 text-emerald-600"}),C("span",Dm,[G2(c.$slots,"title")]),Rm,C("span",qm,[G2(c.$slots,"description")])])],64)}const X1=t3(Am,[["render",Em]]),$m={class:"grid grid-cols-2 text-sm mb-4"},Um={class:"font-bold text-left"},Om={class:"text-right font-zinc-600 text-xs"},Im={class:"col-span-2 border rounded-full border-emerald-700 p-0.5 h-3"},_1={__name:"ResumeSkills",props:{percent:String,skill:String},setup(c){return(a,e)=>(s1(),g1("div",$m,[C("div",Um,G3(c.skill),1),C("div",Om,G3(c.percent)+"% ",1),C("div",Im,[C("div",{class:"bg-emerald-700 h-full rounded-full",style:e4({width:c.percent+"%"})},null,4)])]))}},Gm={class:"text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll"},Wm=C("h1",{class:"text-3xl font-bold"}," Resumen ",-1),Zm={class:"grid grid-cols-2 gap-8 mt-6"},jm=C("h2",{class:"text-2xl font-bold mb-6"},"Educación",-1),Km={class:"grid grid-cols-3 text-sm"},Ym=C("h2",{class:"text-2xl font-bold mb-6 mt-10"},"Experiencia",-1),Xm={class:"grid grid-cols-3 text-sm"},Jm=C("h1",{class:"text-2xl font-bold mb-8"},[_(" Habilidades "),C("span",{class:"text-emerald-500"},"Web")],-1),Qm=C("h1",{class:"text-2xl font-bold mt-12 mb-8"},[_(" Habilidades "),C("span",{class:"text-emerald-500"},"Frameworks")],-1),cz=C4('<h1 class="text-2xl font-bold mt-12 mb-7"> Otro Conocimientos </h1><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Oracle</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">MySQL</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">PostgreSQL</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">MongoDB</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Python</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Linux</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">SSH</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Xen Server</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">VMWare</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">pfSense</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Git</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">IIS</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Apache</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Nginx</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">SimpleSamlPHP</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Google API&#39;s</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Ldap</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Azure</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Bash</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Joomla</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Wordpress</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Moodle</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Rest API&#39;s</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Certbot</div><div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Firma Electrónica</div>',26),az=C4('<div class="col-span-2"><a class="inline-block text-2xl font-bold mb-6 mt-10" href="https://www.dropbox.com/sh/jz7x7p2nl0jb43b/AAA7b4-4rp6GWkz1_oL5KBCqa?dl=0" target="_blank">Cursos</a><div class="grid grid-cols-2 gap-10"><div class="grid grid-cols-3 border border-zinc-600 rounded-lg"><div class="bg-zinc-700 text-center rounded-l-lg flex items-center justify-center"><a href="https://platzi.com/@marcos.gutierrez/" target="_blank"><img src="https://static.platzi.com/static/images/footer/logo.png" class="max-h-10 max-w-20"></a></div><div class="col-span-2 text-sm p-4"><ul class="list-disc ml-4 leading-6"><li>Administración de servidores Linux</li><li>Backend con Node.JS: Api Rest con Express.js</li><li>Creación de plugins para Wordpress</li><li>Curso básico de MongoDB</li><li>Curso de PostgreSQL</li><li>Curso profesional de Git y Github</li><li>Fundamentos de Node.JS</li><li>Docker</li><li>Single Page Applications en Laravel con Inertia y Vue.js</li></ul></div></div><div class="grid grid-cols-3 border border-zinc-600 rounded-lg"><div class="bg-zinc-700 text-center rounded-l-lg flex items-center justify-center"><a href="https://www.dropbox.com/sh/jz7x7p2nl0jb43b/AAA7b4-4rp6GWkz1_oL5KBCqa?dl=0" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png" class="max-h-10 max-w-20"></a></div><div class="col-span-2 text-sm p-4"><ul class="list-disc ml-4 leading-6"><li>Oracle Database 12c: Administration Workshop Ed 2</li><li>Oracle Database 12c: Install and Upgrade Workshop</li></ul></div></div></div></div>',1),ez={__name:"Resume",setup(c){return(a,e)=>(s1(),g1("div",Gm,[Wm,C("div",Zm,[C("div",null,[jm,C("div",Km,[k(X1,null,{date:$(()=>[_("2006")]),place:$(()=>[_("Instituto Tecnológico de Tuxtla Gutiérrez")]),title:$(()=>[_("Ing. en Sistemas Computacionales")]),description:$(()=>[_("Cédula Profesional: 7262067")]),_:1}),k(X1,null,{date:$(()=>[_("2012")]),place:$(()=>[_("Universidad Autónoma de Chiapas")]),title:$(()=>[_("Mtro. En Administración con Terminal en Tecnologías de Información")]),description:$(()=>[_("Cédula Profesional: 11577979")]),_:1})]),Ym,C("div",Xm,[k(X1,null,{date:$(()=>[_("2011 - 2012")]),place:$(()=>[_("Universidad Autónoma de Chiapas")]),title:$(()=>[_("Desarrollo web")]),description:$(()=>[_("Coordinación de Tecnologías de Información. Sistema de ficha de aspirantes v2")]),_:1}),k(X1,null,{date:$(()=>[_("2012 - 2014")]),place:$(()=>[_("Universidad Autónoma de Chiapas")]),title:$(()=>[_("Desarrollo web y Servidores")]),description:$(()=>[_("Departamento Técnico del SAUCE. Sistema de reinscipción en línea. Portabilidad del sistema de servicios escolares a web. DBA Oracle. Administración de servidores")]),_:1}),k(X1,null,{date:$(()=>[_("2017")]),place:$(()=>[_("Jóvenes Constructores de la Comunidad A.C")]),title:$(()=>[_("Desarrollo web")]),description:$(()=>[_("Trabajo por proyecto: sistema web en C#")]),_:1}),k(X1,null,{date:$(()=>[_("2014 - 2021")]),place:$(()=>[_("Universidad Autónoma de Chiapas")]),title:$(()=>[_("Desarrollo web y Servidores")]),description:$(()=>[_("Coordinación de Tecnologías de Información. Administración de servidores. Desarrollo de páginas web con firma electrónica")]),_:1}),k(X1,null,{date:$(()=>[_("2018")]),place:$(()=>[_("Universidad Autónoma de Chiapas")]),title:$(()=>[_("Desarrollo web")]),description:$(()=>[_("Departamento Técnico del SAUCE. Apoyo para el desarrollo del sistema de titulación electrónica")]),_:1}),k(X1,null,{date:$(()=>[_("2021 - Actualidad")]),place:$(()=>[_("S4Learning")]),title:$(()=>[_("Desarrollo web")]),description:$(()=>[_("Área de Innovación. Mantenimiento y desarrollo")]),_:1})])]),C("div",null,[Jm,k(_1,{percent:"85",skill:"PHP"}),k(_1,{percent:"70",skill:"Javascript"}),k(_1,{percent:"90",skill:"HTML/CSS"}),k(_1,{percent:"30",skill:"Vue 3"}),k(_1,{percent:"40",skill:"NodeJS"}),k(_1,{percent:"20",skill:"C#"}),Qm,k(_1,{percent:"60",skill:"Laravel"}),k(_1,{percent:"50",skill:"Inertia"}),k(_1,{percent:"30",skill:"Twig"}),k(_1,{percent:"45",skill:"ExpressJS"}),cz])]),az]))}},sz={},rz={class:"text-white px-16 h-full overflow-hidden hover:overflow-y-scroll"},iz=C("h1",{class:"text-3xl font-bold"}," Contacto ",-1),fz={class:"grid grid-cols-3 gap-10 mt-8 font-light"},nz={class:"bg-zinc-800 border border-zinc-600 m-auto pt-6 pb-6 text-white text-center"},lz=C("br",null,null,-1),oz=C("span",{class:"text-lg font-bold"},"Chiapas, México",-1),tz={class:"bg-zinc-800 border border-zinc-600 m-auto pt-6 pb-6 text-white text-center mt-4"},mz=C("br",null,null,-1),zz=C("span",{class:"text-lg font-bold"},"+529611876874",-1),Cz={class:"bg-zinc-800 border border-zinc-600 m-auto pt-6 pb-6 text-white text-center mt-4"},vz=C("br",null,null,-1),hz=C("span",{class:"text-lg font-bold"},"gtzcrash@gmail.com",-1),Hz=C("div",{class:"col-span-2"},[C("div",{class:"gmap_canvas"},[C("iframe",{width:"100%",height:"200",id:"gmap_canvas",src:"https://www.google.com/maps/place/Plaza+Central+de+Tuxtla+Guti%C3%A9rrez/@16.7543668,-93.1200801,17z/data=!3m1!4b1!4m6!3m5!1s0x85ecd88c8c5266ef:0x90bbd6a4cd6cc9d6!8m2!3d16.7543617!4d-93.1155954!16s%2Fg%2F1hd_hnl_3",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"})])],-1);function Vz(c,a){const e=d2("font-awesome-icon");return s1(),g1("div",rz,[iz,C("div",fz,[C("div",null,[C("div",nz,[k(e,{icon:"fa-solid fa-location-dot",class:"text-emerald-600 text-4xl m-auto mb-4"}),lz,oz]),C("div",tz,[k(e,{icon:"fa-solid fa-phone",class:"text-emerald-600 text-4xl m-auto mb-4"}),mz,zz]),C("div",Cz,[k(e,{icon:"fa-solid fa-envelope",class:"text-emerald-600 text-4xl m-auto mb-4"}),vz,hz])]),Hz])])}const Mz=t3(sz,[["render",Vz]]),e7="/2019-siae01.jpg",s7="/2020-docs01.jpg",uz="/2019-siae02.jpg",pz={key:0,class:"fixed w-full h-full bg-zinc-800 top-0 left-0 z-10 text-white overflow-auto"},dz={class:"w-1/2 mx-auto pt-8"},Lz={class:"w-full text-right"},gz=C("h1",{class:"font-bold text-white text-4xl"},"SIAE",-1),xz={class:"grid grid-cols-3 gap-8 mt-6"},bz=C("div",{class:"col-span-2"},[C("img",{class:"",src:e7}),C("img",{class:"my-5",src:uz})],-1),Sz={class:"bg-zinc-900 px-6 py-4"},Nz=C("h2",{class:"font-bold mb-4"},"Description",-1),wz={class:"my-2"},kz=C("a",{class:"text-blue-500 text-sm",href:"https://siae.unach.mx",target:"_blank"},"https://siae.unach.mx",-1),yz={class:"my-2"},Az=C("span",{class:"text-sm"},"January, 2014",-1),Pz=C4('<p class="font-light"><br> Sistema de control escolar para alumnos y administrativos. Entre los módulos que desarrollé fueron la reinscripción en línea, actualización de datos personales, reseteo de contraseñas, historial académico, reportes, busqueda de alumnos, titulación electrónica, avisos, estadísticas. <br><br> Los diseños de la página de inicio y acceso fueron hechos por su servidor. </p><h2 class="font-bold my-6">Technology</h2><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">PHP</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Oracle</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Jquery</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Bootstrap</div>',6),Fz={__name:"Siae",props:{show:!1},emits:["close"],setup(c,{emit:a}){const e=()=>{a("close")};return(s,r)=>{const i=d2("font-awesome-icon");return c.show?(s1(),g1("div",pz,[C("div",dz,[C("div",Lz,[C("div",{class:"cursor-pointer text-2xl text-center mt-2 bg-zinc-500 text-zinc-200 inline-block h-8 w-8",onClick:r[0]||(r[0]=f=>e())},"x")]),gz,C("div",xz,[bz,C("div",null,[C("div",Sz,[Nz,C("div",wz,[k(i,{icon:"fa-solid fa-earth-americas",class:"text-emerald-600 mr-3"}),kz]),C("div",yz,[k(i,{icon:"fa-solid fa-calendar",class:"text-emerald-600 mr-3"}),Az]),Pz])])])])])):R6("",!0)}}},Tz="/2020-docs02.jpg",_z="/2020-docs03.jpg",Bz={key:0,class:"fixed w-full h-full bg-zinc-800 top-0 left-0 z-10 text-white overflow-auto"},Dz={class:"w-1/2 mx-auto pt-8"},Rz={class:"w-full text-right"},qz=C("h1",{class:"font-bold text-white text-4xl"},"Docs",-1),Ez={class:"grid grid-cols-3 gap-8 mt-6"},$z=C("div",{class:"col-span-2"},[C("img",{class:"",src:s7}),C("img",{class:"my-5",src:Tz}),C("img",{class:"my-5",src:_z})],-1),Uz={class:"bg-zinc-900 px-6 py-4"},Oz=C("h2",{class:"font-bold mb-4"},"Description",-1),Iz={class:"my-2"},Gz=C("a",{class:"text-blue-500 text-sm",href:"https://docs.unach.mx",target:"_blank"},"https://docs.unach.mx",-1),Wz={class:"my-2"},Zz=C("span",{class:"text-sm"},"November, 2019",-1),jz=C4('<p class="font-light"><br> Sistema para elaboración de oficios electrónicos con la finalidad de usar 0-papel. El sistema fue creación propia desarrollado de cero; implementa administración de usuarios, firma electrónica con validación de 2 entidades certificadoras (propia y SAT) generación de oficio en formato pdf o html, soporte para archivos adjuntos, añadir comentarios, asignación a otras áreas para su atención. <br><br> Los diseños fueron elaborados y aplicados por su servidor. </p><h2 class="font-bold my-6">Technology</h2><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">PHP</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Oracle</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Jquery</div><div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Bootstrap</div>',6),Kz={__name:"Docs",props:{show:!1},emits:["close"],setup(c,{emit:a}){const e=()=>{a("close")};return(s,r)=>{const i=d2("font-awesome-icon");return c.show?(s1(),g1("div",Bz,[C("div",Dz,[C("div",Rz,[C("div",{class:"cursor-pointer text-2xl text-center mt-2 bg-zinc-500 text-zinc-200 inline-block h-8 w-8",onClick:r[0]||(r[0]=f=>e())},"x")]),qz,C("div",Ez,[$z,C("div",null,[C("div",Uz,[Oz,C("div",Iz,[k(i,{icon:"fa-solid fa-earth-americas",class:"text-emerald-600 mr-3"}),Gz]),C("div",Wz,[k(i,{icon:"fa-solid fa-calendar",class:"text-emerald-600 mr-3"}),Zz]),jz])])])])])):R6("",!0)}}},Yz={class:"text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll"},Xz=C("h1",{class:"text-3xl font-bold"}," Portfolio ",-1),Jz={class:"grid grid-cols-3 gap-8 mt-6"},Qz=C("div",{class:"hidden group-hover:flex absolute h-full w-full bg-slate-800/75 text-white text-3xl font-bold items-center justify-center"}," SIAE ",-1),cC=C("img",{src:e7,class:"w-full"},null,-1),aC=[Qz,cC],eC=C("div",{class:"hidden group-hover:flex absolute h-full w-full bg-slate-800/75 text-white text-3xl font-bold items-center justify-center"}," Oficios ",-1),sC=C("img",{src:s7,class:"w-full"},null,-1),rC=[eC,sC],iC={__name:"Portfolio",setup(c){const a=J4(!1),e=J4(!1);return(s,r)=>(s1(),g1("div",Yz,[Xz,k(Fz,{show:a.value,onClose:r[0]||(r[0]=i=>a.value=!1)},null,8,["show"]),k(Kz,{show:e.value,onClose:r[1]||(r[1]=i=>e.value=!1)},null,8,["show"]),C("div",Jz,[C("div",{class:"relative group cursor-pointer",onClick:r[2]||(r[2]=i=>a.value=!0)},aC),C("div",{class:"relative group cursor-pointer",onClick:r[3]||(r[3]=i=>e.value=!0)},rC)])]))}},fC={},nC={class:"tooltip-text absolute hidden top-0 md:right-36 xl:-right-2 translate-x-full px-3 py-1 bg-[#444444] rounded-lg text-center text-white text-sm w-auto"};function lC(c,a){return s1(),g1("span",nC,[G2(c.$slots,"default")])}const O2=t3(fC,[["render",lC]]),oC={class:"h-full w-8/12 m-auto relative",style:{"padding-top":"10vh"}},tC={class:"grid grid-cols-12 h-5/6 bg-[#444444] rounded-3xl"},mC={class:"col-span-3 text-center h-full mx-auto overflow-hidden relative"},zC={class:"col-span-9 bg-[#222222] rounded-3xl px-2 py-12 h-full overflow-hidden relative"},CC={class:"absolute -right-20 bg-[#444444] w-16 pt-6 pb-6 rounded-full text-2xl text-black text-center text-gray-400",style:{top:"10vh"}},vC={class:"block cursor-pointer mb-6 relative tooltip"},hC={__name:"App",setup(c){const a=J4("Home");return(e,s)=>{const r=d2("font-awesome-icon");return s1(),g1("div",oC,[C("div",tC,[C("div",mC,[k(Kt)]),C("div",zC,[a.value=="Home"?(s1(),C2(am,{key:0})):a.value=="AboutMe"?(s1(),C2(ym,{key:1})):a.value=="Contact"?(s1(),C2(Mz,{key:2})):a.value=="Resume"?(s1(),C2(ez,{key:3})):a.value=="Portfolio"?(s1(),C2(iC,{key:4})):R6("",!0)])]),C("div",CC,[C("div",{class:"block cursor-pointer mb-6 relative tooltip",onClick:s[0]||(s[0]=i=>a.value="Home")},[k(r,{icon:"fa-solid fa-house"}),k(O2,null,{default:$(()=>[_("Home")]),_:1})]),C("div",{class:"block cursor-pointer mb-6 relative tooltip",onClick:s[1]||(s[1]=i=>a.value="AboutMe")},[k(r,{icon:"fa-solid fa-user"}),k(O2,null,{default:$(()=>[_("About me")]),_:1})]),C("div",{class:"block cursor-pointer mb-6 relative tooltip",onClick:s[2]||(s[2]=i=>a.value="Resume")},[k(r,{icon:"fa-solid fa-graduation-cap"}),k(O2,null,{default:$(()=>[_("Resume")]),_:1})]),C("div",{class:"block cursor-pointer mb-6 relative tooltip",onClick:s[3]||(s[3]=i=>a.value="Portfolio")},[k(r,{icon:"fa-solid fa-briefcase"}),k(O2,null,{default:$(()=>[_("Portfolio")]),_:1})]),C("div",vC,[k(r,{icon:"fa-solid fa-envelope",onClick:s[4]||(s[4]=i=>a.value="Contact")}),k(O2,null,{default:$(()=>[_("Concact")]),_:1})])])])}}};function F5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function S(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?F5(Object(e),!0).forEach(function(s){r1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):F5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function X3(c){return X3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},X3(c)}function HC(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function T5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function VC(c,a,e){return a&&T5(c.prototype,a),e&&T5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function r1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function $6(c,a){return uC(c)||dC(c,a)||r7(c,a)||gC()}function m3(c){return MC(c)||pC(c)||r7(c)||LC()}function MC(c){if(Array.isArray(c))return f6(c)}function uC(c){if(Array.isArray(c))return c}function pC(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function dC(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,f,n;try{for(e=e.call(c);!(r=(f=e.next()).done)&&(s.push(f.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,n=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw n}}return s}}function r7(c,a){if(c){if(typeof c=="string")return f6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f6(c,a)}}function f6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function LC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _5=function(){},U6={},i7={},f7=null,n7={mark:_5,measure:_5};try{typeof window<"u"&&(U6=window),typeof document<"u"&&(i7=document),typeof MutationObserver<"u"&&(f7=MutationObserver),typeof performance<"u"&&(n7=performance)}catch{}var xC=U6.navigator||{},B5=xC.userAgent,D5=B5===void 0?"":B5,r2=U6,X=i7,R5=f7,k3=n7;r2.document;var K1=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",l7=~D5.indexOf("MSIE")||~D5.indexOf("Trident/"),y3,A3,P3,F3,T3,G1="___FONT_AWESOME___",n6=16,o7="fa",t7="svg-inline--fa",u2="data-fa-i2svg",l6="data-fa-pseudo-element",bC="data-fa-pseudo-element-pending",O6="data-prefix",I6="data-icon",q5="fontawesome-i2svg",SC="async",NC=["HTML","HEAD","STYLE","SCRIPT"],m7=function(){try{return!0}catch{return!1}}(),Y="classic",a1="sharp",G6=[Y,a1];function z3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[Y]}})}var i3=z3((y3={},r1(y3,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),r1(y3,a1,{fa:"solid",fass:"solid","fa-solid":"solid"}),y3)),f3=z3((A3={},r1(A3,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),r1(A3,a1,{solid:"fass"}),A3)),n3=z3((P3={},r1(P3,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),r1(P3,a1,{fass:"fa-solid"}),P3)),wC=z3((F3={},r1(F3,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),r1(F3,a1,{"fa-solid":"fass"}),F3)),kC=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,z7="fa-layers-text",yC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,AC=z3((T3={},r1(T3,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),r1(T3,a1,{900:"fass"}),T3)),C7=[1,2,3,4,5,6,7,8,9,10],PC=C7.concat([11,12,13,14,15,16,17,18,19,20]),FC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l3=new Set;Object.keys(f3[Y]).map(l3.add.bind(l3));Object.keys(f3[a1]).map(l3.add.bind(l3));var TC=[].concat(G6,m3(l3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h2.GROUP,h2.SWAP_OPACITY,h2.PRIMARY,h2.SECONDARY]).concat(C7.map(function(c){return"".concat(c,"x")})).concat(PC.map(function(c){return"w-".concat(c)})),Y2=r2.FontAwesomeConfig||{};function _C(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function BC(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var DC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DC.forEach(function(c){var a=$6(c,2),e=a[0],s=a[1],r=BC(_C(e));r!=null&&(Y2[s]=r)})}var v7={styleDefault:"solid",familyDefault:"classic",cssPrefix:o7,replacementClass:t7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y2.familyPrefix&&(Y2.cssPrefix=Y2.familyPrefix);var _2=S(S({},v7),Y2);_2.autoReplaceSvg||(_2.observeMutations=!1);var A={};Object.keys(v7).forEach(function(c){Object.defineProperty(A,c,{enumerable:!0,set:function(e){_2[c]=e,X2.forEach(function(s){return s(A)})},get:function(){return _2[c]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(a){_2.cssPrefix=a,X2.forEach(function(e){return e(A)})},get:function(){return _2.cssPrefix}});r2.FontAwesomeConfig=A;var X2=[];function RC(c){return X2.push(c),function(){X2.splice(X2.indexOf(c),1)}}var J1=n6,q1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qC(c){if(!(!c||!K1)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=i)}return X.head.insertBefore(a,s),c}}var EC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o3(){for(var c=12,a="";c-- >0;)a+=EC[Math.random()*62|0];return a}function q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function W6(c){return c.classList?q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function h7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $C(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(h7(c[e]),'" ')},"").trim()}function v4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Z6(c){return c.size!==q1.size||c.x!==q1.x||c.y!==q1.y||c.rotate!==q1.rotate||c.flipX||c.flipY}function UC(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},m={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:m}}function OC(c){var a=c.transform,e=c.width,s=e===void 0?n6:e,r=c.height,i=r===void 0?n6:r,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&l7?l+="translate(".concat(a.x/J1-s/2,"em, ").concat(a.y/J1-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/J1,"em), calc(-50% + ").concat(a.y/J1,"em)) "):l+="translate(".concat(a.x/J1,"em, ").concat(a.y/J1,"em) "),l+="scale(".concat(a.size/J1*(a.flipX?-1:1),", ").concat(a.size/J1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var IC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function H7(){var c=o7,a=t7,e=A.cssPrefix,s=A.replacementClass,r=IC;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(s))}return r}var E5=!1;function I4(){A.autoAddCss&&!E5&&(qC(H7()),E5=!0)}var GC={mixout:function(){return{dom:{css:H7,insertCss:I4}}},hooks:function(){return{beforeDOMElementCreation:function(){I4()},beforeI2svg:function(){I4()}}}},W1=r2||{};W1[G1]||(W1[G1]={});W1[G1].styles||(W1[G1].styles={});W1[G1].hooks||(W1[G1].hooks={});W1[G1].shims||(W1[G1].shims=[]);var k1=W1[G1],V7=[],WC=function c(){X.removeEventListener("DOMContentLoaded",c),J3=1,V7.map(function(a){return a()})},J3=!1;K1&&(J3=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),J3||X.addEventListener("DOMContentLoaded",WC));function ZC(c){K1&&(J3?setTimeout(c,0):V7.push(c))}function C3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?h7(c):"<".concat(a," ").concat($C(s),">").concat(i.map(C3).join(""),"</").concat(a,">")}function $5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var jC=function(a,e){return function(s,r,i,f){return a.call(e,s,r,i,f)}},G4=function(a,e,s,r){var i=Object.keys(a),f=i.length,n=r!==void 0?jC(e,r):e,l,m,z;for(s===void 0?(l=1,z=a[i[0]]):(l=0,z=s);l<f;l++)m=i[l],z=n(z,a[m],m,a);return z};function KC(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function o6(c){var a=KC(c);return a.length===1?a[0].toString(16):null}function YC(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function U5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function t6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=U5(a);typeof k1.hooks.addPack=="function"&&!r?k1.hooks.addPack(c,U5(a)):k1.styles[c]=S(S({},k1.styles[c]||{}),i),c==="fas"&&t6("fa",a)}var _3,B3,D3,b2=k1.styles,XC=k1.shims,JC=(_3={},r1(_3,Y,Object.values(n3[Y])),r1(_3,a1,Object.values(n3[a1])),_3),j6=null,M7={},u7={},p7={},d7={},L7={},QC=(B3={},r1(B3,Y,Object.keys(i3[Y])),r1(B3,a1,Object.keys(i3[a1])),B3);function cv(c){return~TC.indexOf(c)}function av(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!cv(r)?r:null}var g7=function(){var a=function(i){return G4(b2,function(f,n,l){return f[l]=G4(n,i,{}),f},{})};M7=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){r[l.toString(16)]=f})}return r}),u7=a(function(r,i,f){if(r[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){r[l]=f})}return r}),L7=a(function(r,i,f){var n=i[2];return r[f]=f,n.forEach(function(l){r[l]=f}),r});var e="far"in b2||A.autoFetchSvg,s=G4(XC,function(r,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof f=="string"&&(r.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:n,iconName:l}),r},{names:{},unicodes:{}});p7=s.names,d7=s.unicodes,j6=h4(A.styleDefault,{family:A.familyDefault})};RC(function(c){j6=h4(c.styleDefault,{family:A.familyDefault})});g7();function K6(c,a){return(M7[c]||{})[a]}function ev(c,a){return(u7[c]||{})[a]}function H2(c,a){return(L7[c]||{})[a]}function x7(c){return p7[c]||{prefix:null,iconName:null}}function sv(c){var a=d7[c],e=K6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function i2(){return j6}var Y6=function(){return{prefix:null,iconName:null,rest:[]}};function h4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?Y:e,r=i3[s][c],i=f3[s][c]||f3[s][r],f=c in k1.styles?c:null;return i||f||null}var O5=(D3={},r1(D3,Y,Object.keys(n3[Y])),r1(D3,a1,Object.keys(n3[a1])),D3);function H4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},r1(a,Y,"".concat(A.cssPrefix,"-").concat(Y)),r1(a,a1,"".concat(A.cssPrefix,"-").concat(a1)),a),f=null,n=Y;(c.includes(i[Y])||c.some(function(m){return O5[Y].includes(m)}))&&(n=Y),(c.includes(i[a1])||c.some(function(m){return O5[a1].includes(m)}))&&(n=a1);var l=c.reduce(function(m,z){var v=av(A.cssPrefix,z);if(b2[z]?(z=JC[n].includes(z)?wC[n][z]:z,f=z,m.prefix=z):QC[n].indexOf(z)>-1?(f=z,m.prefix=h4(z,{family:n})):v?m.iconName=v:z!==A.replacementClass&&z!==i[Y]&&z!==i[a1]&&m.rest.push(z),!r&&m.prefix&&m.iconName){var M=f==="fa"?x7(m.iconName):{},x=H2(m.prefix,m.iconName);M.prefix&&(f=null),m.iconName=M.iconName||x||m.iconName,m.prefix=M.prefix||m.prefix,m.prefix==="far"&&!b2.far&&b2.fas&&!A.autoFetchSvg&&(m.prefix="fas")}return m},Y6());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===a1&&(b2.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=H2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=i2()||"fas"),l}var rv=function(){function c(){HC(this,c),this.definitions={}}return VC(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){e.definitions[n]=S(S({},e.definitions[n]||{}),f[n]),t6(n,f[n]);var l=n3[Y][n];l&&t6(l,f[n]),g7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var f=r[i],n=f.prefix,l=f.iconName,m=f.icon,z=m[2];e[n]||(e[n]={}),z.length>0&&z.forEach(function(v){typeof v=="string"&&(e[n][v]=m)}),e[n][l]=m}),e}}]),c}(),I5=[],S2={},A2={},iv=Object.keys(A2);function fv(c,a){var e=a.mixoutsTo;return I5=c,S2={},Object.keys(A2).forEach(function(s){iv.indexOf(s)===-1&&delete A2[s]}),I5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(e[f]=r[f]),X3(r[f])==="object"&&Object.keys(r[f]).forEach(function(n){e[f]||(e[f]={}),e[f][n]=r[f][n]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(f){S2[f]||(S2[f]=[]),S2[f].push(i[f])})}s.provides&&s.provides(A2)}),e}function m6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=S2[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(s))}),a}function p2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=S2[c]||[];r.forEach(function(i){i.apply(null,e)})}function Z1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return A2[c]?A2[c].apply(null,a):void 0}function z6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||i2();if(a)return a=H2(e,a)||a,$5(b7.definitions,e,a)||$5(k1.styles,e,a)}var b7=new rv,nv=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,p2("noAuto")},lv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K1?(p2("beforeI2svg",a),Z1("pseudoElements2svg",a),Z1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,ZC(function(){tv({autoReplaceSvgRoot:e}),p2("watch",a)})}},ov={icon:function(a){if(a===null)return null;if(X3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:H2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=h4(a[0]);return{prefix:s,iconName:H2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(A.cssPrefix,"-"))>-1||a.match(kC))){var r=H4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||i2(),iconName:H2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=i2();return{prefix:i,iconName:H2(i,a)||a}}}},u1={noAuto:nv,config:A,dom:lv,parse:ov,library:b7,findIconDefinition:z6,toHtml:C3},tv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?X:e;(Object.keys(k1.styles).length>0||A.autoFetchSvg)&&K1&&A.autoReplaceSvg&&u1.dom.i2svg({node:s})};function V4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return C3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(K1){var s=X.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function mv(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(Z6(f)&&e.found&&!s.found){var n=e.width,l=e.height,m={x:n/l/2,y:.5};r.style=v4(S(S({},i),{},{"transform-origin":"".concat(m.x+f.x/16,"em ").concat(m.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function zv(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(A.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},r),{},{id:f}),children:s}]}]}function X6(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,m=c.maskId,z=c.titleId,v=c.extra,M=c.watchable,x=M===void 0?!1:M,D=s.found?s:e,T=D.width,I=D.height,L=r==="fak",w=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(p1){return v.classes.indexOf(p1)===-1}).filter(function(p1){return p1!==""||!!p1}).concat(v.classes).join(" "),N={children:[],attributes:S(S({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(I)})},E=L&&!~v.classes.indexOf("fa-fw")?{width:"".concat(T/I*16*.0625,"em")}:{};x&&(N.attributes[u2]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(z||o3())},children:[l]}),delete N.attributes.title);var W=S(S({},N),{},{prefix:r,iconName:i,main:e,mask:s,maskId:m,transform:f,symbol:n,styles:S(S({},E),v.styles)}),v1=s.found&&e.found?Z1("generateAbstractMask",W)||{children:[],attributes:{}}:Z1("generateAbstractIcon",W)||{children:[],attributes:{}},n1=v1.children,x1=v1.attributes;return W.children=n1,W.attributes=x1,n?zv(W):mv(W)}function G5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,m=S(S(S({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(m[u2]="");var z=S({},f.styles);Z6(r)&&(z.transform=OC({transform:r,startCentered:!0,width:e,height:s}),z["-webkit-transform"]=z.transform);var v=v4(z);v.length>0&&(m.style=v);var M=[];return M.push({tag:"span",attributes:m,children:[a]}),i&&M.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),M}function Cv(c){var a=c.content,e=c.title,s=c.extra,r=S(S(S({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=v4(s.styles);i.length>0&&(r.style=i);var f=[];return f.push({tag:"span",attributes:r,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var W4=k1.styles;function C6(c){var a=c[0],e=c[1],s=c.slice(4),r=$6(s,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(h2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(h2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(h2.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var vv={found:!1,width:512,height:512};function hv(c,a){!m7&&!A.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function v6(c,a){var e=a;return a==="fa"&&A.styleDefault!==null&&(a=i2()),new Promise(function(s,r){if(Z1("missingIconAbstract"),e==="fa"){var i=x7(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&W4[a]&&W4[a][c]){var f=W4[a][c];return s(C6(f))}hv(c,a),s(S(S({},vv),{},{icon:A.showMissingIcons&&c?Z1("missingIconAbstract")||{}:{}}))})}var W5=function(){},h6=A.measurePerformance&&k3&&k3.mark&&k3.measure?k3:{mark:W5,measure:W5},W2='FA "6.2.1"',Hv=function(a){return h6.mark("".concat(W2," ").concat(a," begins")),function(){return S7(a)}},S7=function(a){h6.mark("".concat(W2," ").concat(a," ends")),h6.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},J6={begin:Hv,end:S7},O3=function(){};function Z5(c){var a=c.getAttribute?c.getAttribute(u2):null;return typeof a=="string"}function Vv(c){var a=c.getAttribute?c.getAttribute(O6):null,e=c.getAttribute?c.getAttribute(I6):null;return a&&e}function Mv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(A.replacementClass)}function uv(){if(A.autoReplaceSvg===!0)return I3.replace;var c=I3[A.autoReplaceSvg];return c||I3.replace}function pv(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function dv(c){return X.createElement(c)}function N7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?pv:dv:e;if(typeof c=="string")return X.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(N7(f,{ceFn:s}))}),r}function Lv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var I3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(N7(r),e)}),e.getAttribute(u2)===null&&A.keepOriginalSource){var s=X.createComment(Lv(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~W6(e).indexOf(A.replacementClass))return I3.replace(a);var r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(n,l){return l===A.replacementClass||l.match(r)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=s.map(function(n){return C3(n)}).join(`
`);e.setAttribute(u2,""),e.innerHTML=f}};function j5(c){c()}function w7(c,a){var e=typeof a=="function"?a:O3;if(c.length===0)e();else{var s=j5;A.mutateApproach===SC&&(s=r2.requestAnimationFrame||j5),s(function(){var r=uv(),i=J6.begin("mutate");c.map(r),i(),e()})}}var Q6=!1;function k7(){Q6=!0}function H6(){Q6=!1}var Q3=null;function K5(c){if(R5&&A.observeMutations){var a=c.treeCallback,e=a===void 0?O3:a,s=c.nodeCallback,r=s===void 0?O3:s,i=c.pseudoElementsCallback,f=i===void 0?O3:i,n=c.observeMutationsRoot,l=n===void 0?X:n;Q3=new R5(function(m){if(!Q6){var z=i2();q2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Z5(v.addedNodes[0])&&(A.searchPseudoElements&&f(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&A.searchPseudoElements&&f(v.target.parentNode),v.type==="attributes"&&Z5(v.target)&&~FC.indexOf(v.attributeName))if(v.attributeName==="class"&&Vv(v.target)){var M=H4(W6(v.target)),x=M.prefix,D=M.iconName;v.target.setAttribute(O6,x||z),D&&v.target.setAttribute(I6,D)}else Mv(v.target)&&r(v.target)})}}),K1&&Q3.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gv(){Q3&&Q3.disconnect()}function xv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(s[f]=n.join(":").trim()),s},{})),e}function bv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=H4(W6(c));return r.prefix||(r.prefix=i2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=ev(r.prefix,c.innerText)||K6(r.prefix,o6(c.innerText))),!r.iconName&&A.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Sv(c){var a=q2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return A.autoA11y&&(e?a["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(s||o3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Nv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bv(c),s=e.iconName,r=e.prefix,i=e.rest,f=Sv(c),n=m6("parseNodeAttributes",{},c),l=a.styleParser?xv(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:q1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var wv=k1.styles;function y7(c){var a=A.autoReplaceSvg==="nest"?Y5(c,{styleParser:!1}):Y5(c);return~a.extra.classes.indexOf(z7)?Z1("generateLayersText",c,a):Z1("generateSvgReplacementMutation",c,a)}var f2=new Set;G6.map(function(c){f2.add("fa-".concat(c))});Object.keys(i3[Y]).map(f2.add.bind(f2));Object.keys(i3[a1]).map(f2.add.bind(f2));f2=m3(f2);function X5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K1)return Promise.resolve();var e=X.documentElement.classList,s=function(v){return e.add("".concat(q5,"-").concat(v))},r=function(v){return e.remove("".concat(q5,"-").concat(v))},i=A.autoFetchSvg?f2:G6.map(function(z){return"fa-".concat(z)}).concat(Object.keys(wv));i.includes("fa")||i.push("fa");var f=[".".concat(z7,":not([").concat(u2,"])")].concat(i.map(function(z){return".".concat(z,":not([").concat(u2,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=q2(c.querySelectorAll(f))}catch{}if(n.length>0)s("pending"),r("complete");else return Promise.resolve();var l=J6.begin("onTree"),m=n.reduce(function(z,v){try{var M=y7(v);M&&z.push(M)}catch(x){m7||x.name==="MissingIcon"&&console.error(x)}return z},[]);return new Promise(function(z,v){Promise.all(m).then(function(M){w7(M,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),z()})}).catch(function(M){l(),v(M)})})}function kv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;y7(c).then(function(e){e&&w7([e],a)})}function yv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:z6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:z6(r||{})),c(s,S(S({},e),{},{mask:r}))}}var Av=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?q1:s,i=e.symbol,f=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,m=e.maskId,z=m===void 0?null:m,v=e.title,M=v===void 0?null:v,x=e.titleId,D=x===void 0?null:x,T=e.classes,I=T===void 0?[]:T,L=e.attributes,w=L===void 0?{}:L,N=e.styles,E=N===void 0?{}:N;if(a){var W=a.prefix,v1=a.iconName,n1=a.icon;return V4(S({type:"icon"},a),function(){return p2("beforeDOMElementCreation",{iconDefinition:a,params:e}),A.autoA11y&&(M?w["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(D||o3()):(w["aria-hidden"]="true",w.focusable="false")),X6({icons:{main:C6(n1),mask:l?C6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:v1,transform:S(S({},q1),r),symbol:f,title:M,maskId:z,titleId:D,extra:{attributes:w,styles:E,classes:I}})})}},Pv={mixout:function(){return{icon:yv(Av)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=X5,e.nodeCallback=kv,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?X:s,i=e.callback,f=i===void 0?function(){}:i;return X5(r,f)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,f=s.titleId,n=s.prefix,l=s.transform,m=s.symbol,z=s.mask,v=s.maskId,M=s.extra;return new Promise(function(x,D){Promise.all([v6(r,n),z.iconName?v6(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var I=$6(T,2),L=I[0],w=I[1];x([e,X6({icons:{main:L,mask:w},prefix:n,iconName:r,transform:l,symbol:m,maskId:v,title:i,titleId:f,extra:M,watchable:!0})])}).catch(D)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.transform,n=e.styles,l=v4(n);l.length>0&&(r.style=l);var m;return Z6(f)&&(m=Z1("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),s.push(m||i.icon),{children:s,attributes:r}}}},Fv={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return V4({type:"layer"},function(){p2("beforeDOMElementCreation",{assembler:e,params:s});var f=[];return e(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(m3(i)).join(" ")},children:f}]})}}}},Tv={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,f=s.classes,n=f===void 0?[]:f,l=s.attributes,m=l===void 0?{}:l,z=s.styles,v=z===void 0?{}:z;return V4({type:"counter",content:e},function(){return p2("beforeDOMElementCreation",{content:e,params:s}),Cv({content:e.toString(),title:i,extra:{attributes:m,styles:v,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(m3(n))}})})}}}},_v={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?q1:r,f=s.title,n=f===void 0?null:f,l=s.classes,m=l===void 0?[]:l,z=s.attributes,v=z===void 0?{}:z,M=s.styles,x=M===void 0?{}:M;return V4({type:"text",content:e},function(){return p2("beforeDOMElementCreation",{content:e,params:s}),G5({content:e,transform:S(S({},q1),i),title:n,extra:{attributes:v,styles:x,classes:["".concat(A.cssPrefix,"-layers-text")].concat(m3(m))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,f=s.extra,n=null,l=null;if(l7){var m=parseInt(getComputedStyle(e).fontSize,10),z=e.getBoundingClientRect();n=z.width/m,l=z.height/m}return A.autoA11y&&!r&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,G5({content:e.innerHTML,width:n,height:l,transform:i,title:r,extra:f,watchable:!0})])}}},Bv=new RegExp('"',"ug"),J5=[1105920,1112319];function Dv(c){var a=c.replace(Bv,""),e=YC(a,0),s=e>=J5[0]&&e<=J5[1],r=a.length===2?a[0]===a[1]:!1;return{value:o6(r?a[0]:a),isSecondary:s||r}}function Q5(c,a){var e="".concat(bC).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=q2(c.children),f=i.filter(function(n1){return n1.getAttribute(l6)===a})[0],n=r2.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(yC),m=n.getPropertyValue("font-weight"),z=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),s();if(l&&z!=="none"&&z!==""){var v=n.getPropertyValue("content"),M=~["Sharp"].indexOf(l[2])?a1:Y,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?f3[M][l[2].toLowerCase()]:AC[M][m],D=Dv(v),T=D.value,I=D.isSecondary,L=l[0].startsWith("FontAwesome"),w=K6(x,T),N=w;if(L){var E=sv(T);E.iconName&&E.prefix&&(w=E.iconName,x=E.prefix)}if(w&&!I&&(!f||f.getAttribute(O6)!==x||f.getAttribute(I6)!==N)){c.setAttribute(e,N),f&&c.removeChild(f);var W=Nv(),v1=W.extra;v1.attributes[l6]=a,v6(w,x).then(function(n1){var x1=X6(S(S({},W),{},{icons:{main:n1,mask:Y6()},prefix:x,iconName:N,extra:v1,watchable:!0})),p1=X.createElement("svg");a==="::before"?c.insertBefore(p1,c.firstChild):c.appendChild(p1),p1.outerHTML=x1.map(function($1){return C3($1)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Rv(c){return Promise.all([Q5(c,"::before"),Q5(c,"::after")])}function qv(c){return c.parentNode!==document.head&&!~NC.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(l6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function c0(c){if(K1)return new Promise(function(a,e){var s=q2(c.querySelectorAll("*")).filter(qv).map(Rv),r=J6.begin("searchPseudoElements");k7(),Promise.all(s).then(function(){r(),H6(),a()}).catch(function(){r(),H6(),e()})})}var Ev={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=c0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?X:s;A.searchPseudoElements&&c0(r)}}},a0=!1,$v={mixout:function(){return{dom:{unwatch:function(){k7(),a0=!0}}}},hooks:function(){return{bootstrap:function(){K5(m6("mutationObserverCallbacks",{}))},noAuto:function(){gv()},watch:function(e){var s=e.observeMutationsRoot;a0?H6():K5(m6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},e0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),f=i[0],n=i.slice(1).join("-");if(f&&n==="h")return s.flipX=!0,s;if(f&&n==="v")return s.flipY=!0,s;if(n=parseFloat(n),isNaN(n))return s;switch(f){case"grow":s.size=s.size+n;break;case"shrink":s.size=s.size-n;break;case"left":s.x=s.x-n;break;case"right":s.x=s.x+n;break;case"up":s.y=s.y-n;break;case"down":s.y=s.y+n;break;case"rotate":s.rotate=s.rotate+n;break}return s},e)},Uv={mixout:function(){return{parse:{transform:function(e){return e0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=e0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,f=e.iconWidth,n={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(m," ").concat(z)},M={transform:"translate(".concat(f/2*-1," -256)")},x={outer:n,inner:v,path:M};return{tag:"g",attributes:S({},x.outer),children:[{tag:"g",attributes:S({},x.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:S(S({},s.icon.attributes),x.path)}]}]}}}},Z4={x:0,y:0,width:"100%",height:"100%"};function s0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Ov(c){return c.tag==="g"?c.children:[c]}var Iv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?H4(r.split(" ").map(function(f){return f.trim()})):Y6();return i.prefix||(i.prefix=i2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.mask,n=e.maskId,l=e.transform,m=i.width,z=i.icon,v=f.width,M=f.icon,x=UC({transform:l,containerWidth:v,iconWidth:m}),D={tag:"rect",attributes:S(S({},Z4),{},{fill:"white"})},T=z.children?{children:z.children.map(s0)}:{},I={tag:"g",attributes:S({},x.inner),children:[s0(S({tag:z.tag,attributes:S(S({},z.attributes),x.path)},T))]},L={tag:"g",attributes:S({},x.outer),children:[I]},w="mask-".concat(n||o3()),N="clip-".concat(n||o3()),E={tag:"mask",attributes:S(S({},Z4),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,L]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ov(M)},E]};return s.push(W,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(w,")")},Z4)}),{children:s,attributes:r}}}},Gv={provides:function(a){var e=!1;r2.matchMedia&&(e=r2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:S(S({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=S(S({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:S(S({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||n.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(n),s.push({tag:"path",attributes:S(S({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(S({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:S(S({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Wv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Zv=[GC,Pv,Fv,Tv,_v,Ev,$v,Uv,Iv,Gv,Wv];fv(Zv,{mixoutsTo:u1});u1.noAuto;var A7=u1.config,jv=u1.library;u1.dom;var c4=u1.parse;u1.findIconDefinition;u1.toHtml;var Kv=u1.icon;u1.layer;var Yv=u1.text;u1.counter;function r0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function N1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?r0(Object(e),!0).forEach(function(s){h1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):r0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function a4(c){return a4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a4(c)}function h1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function Xv(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function Jv(c,a){if(c==null)return{};var e=Xv(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(c,s)&&(e[s]=c[s])}return e}function V6(c){return Qv(c)||ch(c)||ah(c)||eh()}function Qv(c){if(Array.isArray(c))return M6(c)}function ch(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ah(c,a){if(c){if(typeof c=="string")return M6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M6(c,a)}}function M6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function eh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.