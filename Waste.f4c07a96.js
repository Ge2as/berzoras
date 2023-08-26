parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KzyW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("svelte/internal"),t=require("svelte");function n(e,t,n){const a=e.slice();return a[7]=t[n],a}function a(t){let a,l,p,i,d,u,f,g,m,h,v,y,b,w,k,_=t[0],x=[];for(let e=0;e<_.length;e+=1)x[e]=s(n(t,_,e));let j=t[1]&&o(t);return{c(){a=(0,e.element)("div"),l=(0,e.element)("div"),(p=(0,e.element)("button")).textContent="Upcoming:",i=(0,e.space)(),d=(0,e.element)("div");for(let e=0;e<x.length;e+=1)x[e].c();u=(0,e.space)(),f=(0,e.element)("div"),(g=(0,e.element)("button")).innerHTML='<img src="https://cdn.iconscout.com/icon/free/png-128/push-notification-4-902097.png" alt="..." loading="lazy" class="svelte-1jfsygp"/>',m=(0,e.space)(),(h=(0,e.element)("button")).textContent="×",y=(0,e.space)(),j&&j.c(),p.disabled=!0,(0,e.set_style)(p,"padding","5px"),(0,e.attr)(d,"class","event-container svelte-1jfsygp"),(0,e.set_style)(g,"cursor","pointer"),(0,e.attr)(h,"class","close-button svelte-1jfsygp"),(0,e.attr)(f,"class","icon-container svelte-1jfsygp"),(0,e.attr)(l,"class",v="upcoming-events "+(c?"hide-padding":"")+" svelte-1jfsygp"),(0,e.attr)(a,"class",b="waste-notification "+(r?"hide":"")+" svelte-1jfsygp")},m(n,s){(0,e.insert)(n,a,s),(0,e.append)(a,l),(0,e.append)(l,p),(0,e.append)(l,i),(0,e.append)(l,d);for(let e=0;e<x.length;e+=1)x[e]&&x[e].m(d,null);(0,e.append)(l,u),(0,e.append)(l,f),(0,e.append)(f,g),(0,e.append)(f,m),(0,e.append)(f,h),(0,e.append)(a,y),j&&j.m(a,null),w||(k=[(0,e.listen)(g,"click",t[5]),(0,e.listen)(h,"click",t[3])],w=!0)},p(e,t){if(1&t){let a;for(_=e[0],a=0;a<_.length;a+=1){const o=n(e,_,a);x[a]?x[a].p(o,t):(x[a]=s(o),x[a].c(),x[a].m(d,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=_.length}e[1]?j?j.p(e,t):((j=o(e)).c(),j.m(a,null)):j&&(j.d(1),j=null)},d(t){t&&(0,e.detach)(a),(0,e.destroy_each)(x,t),j&&j.d(),w=!1,(0,e.run_all)(k)}}}function s(t){let n,a,s,o,l,r=p(t[7].name)+"",c=i(t[7].date)+"";return{c(){n=(0,e.element)("div"),a=(0,e.text)(r),s=(0,e.text)(" - "),o=(0,e.text)(c),l=(0,e.space)(),(0,e.attr)(n,"class","event svelte-1jfsygp"),(0,e.set_style)(n,"background-color",t[7].color)},m(t,r){(0,e.insert)(t,n,r),(0,e.append)(n,a),(0,e.append)(n,s),(0,e.append)(n,o),(0,e.append)(n,l)},p(t,s){1&s&&r!==(r=p(t[7].name)+"")&&(0,e.set_data)(a,r),1&s&&c!==(c=i(t[7].date)+"")&&(0,e.set_data)(o,c),1&s&&(0,e.set_style)(n,"background-color",t[7].color)},d(t){t&&(0,e.detach)(n)}}}function o(t){let n,a,s,o,l,r,c,p,i;return{c(){n=(0,e.element)("div"),a=(0,e.element)("div"),(s=(0,e.element)("button")).textContent="X",o=(0,e.space)(),(l=(0,e.element)("p")).innerHTML='<b>Receive push notifications on your phone.</b> \n      <br/> \n      <br/>\n      Subscribe to a topic &quot;berzoras_trac_waste&quot; and receive notifications about upcoming next day waste pickups via the NTFY\n      <a href="https://play.google.com/store/apps/details?id=io.heckel.ntfy" target="_blank" rel="noopener noreferrer">Android</a>\n      or \n      <a href="https://apps.apple.com/us/app/ntfy/id1625396347" target="_blank" rel="noopener noreferrer">Apple</a> app.',r=(0,e.space)(),(c=(0,e.element)("p")).textContent="Never miss your waste collection day again!",(0,e.attr)(s,"class","close-btn svelte-1jfsygp"),(0,e.attr)(a,"class","modal-content svelte-1jfsygp"),(0,e.attr)(n,"class","modal-overlay svelte-1jfsygp")},m(u,f){(0,e.insert)(u,n,f),(0,e.append)(n,a),(0,e.append)(a,s),(0,e.append)(a,o),(0,e.append)(a,l),(0,e.append)(a,r),(0,e.append)(a,c),p||(i=[(0,e.listen)(s,"click",t[2]),(0,e.listen)(a,"click",d),(0,e.listen)(n,"click",t[2])],p=!0)},p:e.noop,d(t){t&&(0,e.detach)(n),p=!1,(0,e.run_all)(i)}}}function l(t){let n,s=t[0].length>0&&a(t);return{c(){s&&s.c(),n=(0,e.empty)()},m(t,a){s&&s.m(t,a),(0,e.insert)(t,n,a)},p(e,[t]){e[0].length>0?s?s.p(e,t):((s=a(e)).c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e.noop,o:e.noop,d(t){s&&s.d(t),t&&(0,e.detach)(n)}}}let r=!1,c=!1;function p(e){switch(e){case"Pakuočių atliekos":return"Packaging waste";case"Didelių gabaritų atliekos":return"Bulky waste";case"Stiklo pakuotė":return"Glass waste";case"Mišrios komunalinės atliekos":return"Mixed waste";default:return e}}function i(e){return new Date(e).toLocaleDateString("lt-LT",{month:"short",day:"numeric"})}const d=e=>e.stopPropagation();function u(e,n,a){let{events:s=[]}=n,o=[];async function l(){try{const t=await fetch("https://raw.githubusercontent.com/gedasss/tratc_waste/main/waste_format.json"),n=await t.json(),s=new Date;s.setHours(0,0,0,0);const l=new Date(s);l.setDate(s.getDate()+7),a(0,o=n.filter(e=>{const t=new Date(e.date);return t>=s&&t<=l}).sort((e,t)=>new Date(e.date)-new Date(t.date)))}catch(e){console.error("An error occurred while fetching the waste data:",e)}}(0,t.onMount)(()=>{l();const e=setInterval(l,864e5);return()=>clearInterval(e)});let r=!1;return e.$$set=(e=>{"events"in e&&a(4,s=e.events)}),[o,r,function(){a(1,r=!1)},function(){a(0,o.length=0,o)},s,()=>a(1,r=!0)]}class f extends e.SvelteComponent{constructor(t){super(),(0,e.init)(this,t,u,l,e.safe_not_equal,{events:4})}}var g=f;exports.default=g;
},{"svelte/internal":"YkLP","svelte":"XrLp"}]},{},[], null)
//# sourceMappingURL=https://berzoras.lt/Waste.f4c07a96.js.map