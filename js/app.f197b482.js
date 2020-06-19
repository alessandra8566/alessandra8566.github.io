(function(e){function t(t){for(var n,a,i=t[0],s=t[1],c=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},l=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-6a2da09c":"11b9e99f","chunk-7208fd72":"d5ca4c29"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-6a2da09c":1,"chunk-7208fd72":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6a2da09c":"5dc3ae4a","chunk-7208fd72":"5a1ce5b4"}[e]+".css",o=s.p+n,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=l[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===n||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete a[e],h.parentNode.removeChild(h),r(l)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=u;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"568e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-area header-style-two header--fixed color-black"},[n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"header-left d-flex align-items-center"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:r("b1d1"),alt:"Digital Agency"}})])],1),n("nav",{staticClass:"mainmenunav d-lg-block ml--50"},[n("ul",{staticClass:"mainmenu"},[n("li",{staticClass:"has-droupdown"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"has-droupdown"},[n("router-link",{attrs:{to:"/service"}},[e._v("Service")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("li",{staticClass:"has-droupdown"},[n("router-link",{attrs:{to:"/pages"}},[e._v("Pages")])],1),n("li",{staticClass:"has-droupdown"},[n("router-link",{attrs:{to:"/blocks"}},[e._v("Blocks")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])])]),e._m(0)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-right"},[r("div",{staticClass:"social-share-inner"},[r("ul",{staticClass:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},[r("li")])]),r("div",{staticClass:"header-btn"},[r("a",{staticClass:"rn-btn",attrs:{href:"https://themeforest.net/checkout/from_item/25457315?license=regular"}},[r("span",[e._v("buy now")])])])])}],s=r("1157"),c=r.n(s),u={name:"Header",data(){return{currentScrollTop:0}},methods:{scroll(){window.onscroll=()=>this.currentScrollTop=document.documentElement.scrollTop}},mounted(){this.scroll()},watch:{currentScrollTop(e){this.currentScrollTop>110?c()(".header--fixed").addClass("sticky"):c()(".header--fixed").removeClass("sticky"),this.currentScrollTop=e}}},d=u,h=(r("9734"),r("2877")),m=Object(h["a"])(d,l,i,!1,null,"33401789",null),p=m.exports,f={name:"App",components:{Header:p}},b=f,v=Object(h["a"])(b,a,o,!1,null,null,null),g=v.exports,j=r("8c4f");n["default"].use(j["a"]);const w=[{path:"/",name:"HomePage",component:()=>r.e("chunk-6a2da09c").then(r.bind(null,"f4a9")),children:[{path:"/",component:()=>r.e("chunk-7208fd72").then(r.bind(null,"cc92"))}]}],A=new j["a"]({mode:"history",base:"/",routes:w});var k=A,y=r("2f62");n["default"].use(y["a"]);var E=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=r("5f5b"),G=r("b1e0");r("a41b");n["default"].config.productionTip=!1,n["default"].use(I["a"]),n["default"].use(G["a"]),new n["default"]({router:k,store:E,render:function(e){return e(g)}}).$mount("#app")},9734:function(e,t,r){"use strict";var n=r("568e"),a=r.n(n);a.a},a41b:function(e,t,r){},b1d1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZTYzYmM0ZS1jZTViLTEyNDMtODFiNi1mMTI1NjRmM2ZjM2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0REQkRFNjAyNDk3MTFFQUI2NURGNjBEREU0MjdDMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0REQkRFNUYyNDk3MTFFQUI2NURGNjBEREU0MjdDMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjgxY2NhY2EtOTMwNi1jYjQ1LTlkYjUtYjM5ZTc4M2RmOTc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjllNjNiYzRlLWNlNWItMTI0My04MWI2LWYxMjU2NGYzZmMzYSIv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"}});
//# sourceMappingURL=app.f197b482.js.map