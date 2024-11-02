// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/in-view/dist/in-view.min.js":[function(require,module,exports) {
var define;
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.inView=e():t.inView=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=r(i),u=n(3),f=r(u),s=n(4),c=function(){if("undefined"!=typeof window){var t=100,e=["scroll","resize","load"],n={history:[]},r={offset:{},threshold:0,test:s.inViewport},i=(0,o["default"])(function(){n.history.forEach(function(t){n[t].check()})},t);e.forEach(function(t){return addEventListener(t,i)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(i).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var u=function(t){if("string"==typeof t){var e=[].slice.call(document.querySelectorAll(t));return n.history.indexOf(t)>-1?n[t].elements=e:(n[t]=(0,f["default"])(e,r),n.history.push(t)),n[t]}};return u.offset=function(t){if(void 0===t)return r.offset;var e=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(e(t)?function(e){return r.offset[e]=t}:function(n){return e(t[n])?r.offset[n]=t[n]:null}),r.offset},u.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?r.threshold=t:r.threshold},u.test=function(t){return"function"==typeof t?r.test=t:r.test},u.is=function(t){return r.test(t,r)},u.offset(0),u}};e["default"]=c()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,r){n(this,t),this.options=r,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return r(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),r=t.current.indexOf(e),i=r>-1,o=n&&!i,u=!n&&i;o&&(t.current.push(e),t.emit("enter",e)),u&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e["default"]=function(t,e){return new i(t,e)}},function(t,e){"use strict";function n(t,e){var n=t.getBoundingClientRect(),r=n.top,i=n.right,o=n.bottom,u=n.left,f=n.width,s=n.height,c={t:o,r:window.innerWidth-u,b:window.innerHeight-r,l:i},a={x:e.threshold*f,y:e.threshold*s};return c.t>e.offset.top+a.y&&c.r>e.offset.right+a.x&&c.b>e.offset.bottom+a.y&&c.l>e.offset.left+a.x}Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=n},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){function r(t,e,n){function r(e){var n=x,r=m;return x=m=void 0,E=e,w=t.apply(r,n)}function a(t){return E=t,j=setTimeout(h,e),M?r(t):w}function l(t){var n=t-O,r=t-E,i=e-n;return _?c(i,g-r):i}function d(t){var n=t-O,r=t-E;return void 0===O||n>=e||n<0||_&&r>=g}function h(){var t=o();return d(t)?p(t):void(j=setTimeout(h,l(t)))}function p(t){return j=void 0,T&&x?r(t):(x=m=void 0,w)}function v(){void 0!==j&&clearTimeout(j),E=0,x=O=m=j=void 0}function y(){return void 0===j?w:p(o())}function b(){var t=o(),n=d(t);if(x=arguments,m=this,O=t,n){if(void 0===j)return a(O);if(_)return j=setTimeout(h,e),r(O)}return void 0===j&&(j=setTimeout(h,e)),w}var x,m,g,w,j,O,E=0,M=!1,_=!1,T=!0;if("function"!=typeof t)throw new TypeError(f);return e=u(e)||0,i(n)&&(M=!!n.leading,_="maxWait"in n,g=_?s(u(n.maxWait)||0,e):g,T="trailing"in n?!!n.trailing:T),b.cancel=v,b.flush=y,b}var i=n(1),o=n(8),u=n(10),f="Expected a function",s=Math.max,c=Math.min;t.exports=r},function(t,e,n){var r=n(6),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){function r(t,e,n){var r=!0,f=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(r="leading"in n?!!n.leading:r,f="trailing"in n?!!n.trailing:f),i(t,e,{leading:r,maxWait:e,trailing:f})}var i=n(7),o=n(1),u="Expected a function";t.exports=r},function(t,e){function n(t){return t}t.exports=n}])});
},{}],"components/List.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _internal = require("svelte/internal");
var _svelteI18n = require("svelte-i18n");
var _svelte = require("svelte");
var _inView = _interopRequireDefault(require("in-view"));
var _consts = require("./consts.js");
var _stores = require("./stores.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* components/List.svelte generated by Svelte v3.59.2 */

const {
  Error: Error_1
} = _internal.globals;
const file = "components/List.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  child_ctx[21] = i;
  return child_ctx;
}

// (1:0) <style>  .lname {   padding-top: 30px; }
function create_catch_block(ctx) {
  const block = {
    c: _internal.noop,
    m: _internal.noop,
    p: _internal.noop,
    d: _internal.noop
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_catch_block.name,
    type: "catch",
    source: "(1:0) <style>  .lname {   padding-top: 30px; }",
    ctx
  });
  return block;
}

// (539:2) {:then weatherInfo}
function create_then_block(ctx) {
  let p;
  let t_1_value = /*weatherInfo*/ctx[22] + "";
  let t_1;
  const block = {
    c: function create() {
      p = (0, _internal.element)("p");
      t_1 = (0, _internal.text)(t_1_value);
      (0, _internal.attr_dev)(p, "class", "svelte-15t08fl");
      (0, _internal.add_location)(p, file, 539, 4, 14854);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, p, anchor);
      (0, _internal.append_dev)(p, t_1);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(p);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_then_block.name,
    type: "then",
    source: "(539:2) {:then weatherInfo}",
    ctx
  });
  return block;
}

// (538:23)    {:then weatherInfo}
function create_pending_block(ctx) {
  const block = {
    c: _internal.noop,
    m: _internal.noop,
    p: _internal.noop,
    d: _internal.noop
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_pending_block.name,
    type: "pending",
    source: "(538:23)    {:then weatherInfo}",
    ctx
  });
  return block;
}

// (561:2) {#each listItems as listItem, index}
function create_each_block(ctx) {
  let div;
  let a;
  let img;
  let img_data_src_value;
  let img_alt_value;
  let a_href_value;
  let t0;
  let center;
  let h1;
  let t1_value = /*getName*/ctx[7]( /*listItem*/ctx[19], /*$locale*/ctx[0]) + "";
  let t1;
  let t2;
  let p;
  let raw_value = /*getDescription*/ctx[6]( /*listItem*/ctx[19], /*$locale*/ctx[0]) + "";
  let t3;
  let button;
  let svg;
  let path0;
  let path1;
  let t4;
  let div_id_value;
  let mounted;
  let dispose;
  function click_handler_2() {
    return /*click_handler_2*/ctx[10]( /*listItem*/ctx[19]);
  }
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      a = (0, _internal.element)("a");
      img = (0, _internal.element)("img");
      t0 = (0, _internal.space)();
      center = (0, _internal.element)("center");
      h1 = (0, _internal.element)("h1");
      t1 = (0, _internal.text)(t1_value);
      t2 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t3 = (0, _internal.space)();
      button = (0, _internal.element)("button");
      svg = (0, _internal.svg_element)("svg");
      path0 = (0, _internal.svg_element)("path");
      path1 = (0, _internal.svg_element)("path");
      t4 = (0, _internal.space)();
      (0, _internal.attr_dev)(img, "data-src", img_data_src_value = /*listItem*/ctx[19].image);
      (0, _internal.attr_dev)(img, "alt", img_alt_value = /*getName*/ctx[7]( /*listItem*/ctx[19], /*$locale*/ctx[0]));
      (0, _internal.attr_dev)(img, "class", "lazyload svelte-15t08fl");
      (0, _internal.add_location)(img, file, 563, 8, 15580);
      (0, _internal.attr_dev)(a, "href", a_href_value = /*listItem*/ctx[19].website);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "nofollow");
      (0, _internal.attr_dev)(a, "class", "svelte-15t08fl");
      (0, _internal.add_location)(a, file, 562, 6, 15511);
      (0, _internal.attr_dev)(h1, "class", "lname svelte-15t08fl");
      (0, _internal.add_location)(h1, file, 566, 8, 15739);
      (0, _internal.attr_dev)(center, "class", "svelte-15t08fl");
      (0, _internal.add_location)(center, file, 565, 6, 15722);
      (0, _internal.attr_dev)(p, "class", "description svelte-15t08fl");
      (0, _internal.add_location)(p, file, 568, 6, 15813);
      (0, _internal.attr_dev)(path0, "d", "M63.3 512.2a448.5 448 0 1 0 897 0 448.5 448 0 1 0-897 0Z");
      (0, _internal.attr_dev)(path0, "fill", "#4D6BFF");
      (0, _internal.add_location)(path0, file, 571, 91, 16138);
      (0, _internal.attr_dev)(path1, "d", "M416.09375 605.09375c1.21875 0.5625 2.15625 1.5 2.71875 2.71875l82.3125 175.6875c3.1875 6.84375 12.84375 7.03125 15.75 0.375l201.84375-465.75c3.5625-8.15625-4.78125-16.5-12.9375-12.9375L240.125 507.03125c-6.75 2.90625-6.5625 12.5625 0.375 15.75l175.59375 82.3125z");
      (0, _internal.attr_dev)(path1, "fill", "#ffffff");
      (0, _internal.add_location)(path1, file, 571, 174, 16221);
      (0, _internal.attr_dev)(svg, "viewBox", "0 0 1024 1024");
      (0, _internal.attr_dev)(svg, "class", "icon svelte-15t08fl");
      (0, _internal.attr_dev)(svg, "version", "1.1");
      (0, _internal.attr_dev)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.add_location)(svg, file, 571, 0, 16047);
      (0, _internal.attr_dev)(button, "class", "directions-button svelte-15t08fl");
      (0, _internal.add_location)(button, file, 570, 6, 15919);
      (0, _internal.attr_dev)(div, "class", "list-item svelte-15t08fl");
      (0, _internal.attr_dev)(div, "id", div_id_value = "list-item-" + /*index*/ctx[21]);
      (0, _internal.add_location)(div, file, 561, 4, 15458);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, a);
      (0, _internal.append_dev)(a, img);
      (0, _internal.append_dev)(div, t0);
      (0, _internal.append_dev)(div, center);
      (0, _internal.append_dev)(center, h1);
      (0, _internal.append_dev)(h1, t1);
      (0, _internal.append_dev)(div, t2);
      (0, _internal.append_dev)(div, p);
      p.innerHTML = raw_value;
      (0, _internal.append_dev)(div, t3);
      (0, _internal.append_dev)(div, button);
      (0, _internal.append_dev)(button, svg);
      (0, _internal.append_dev)(svg, path0);
      (0, _internal.append_dev)(svg, path1);
      (0, _internal.append_dev)(div, t4);
      if (!mounted) {
        dispose = (0, _internal.listen_dev)(button, "click", click_handler_2, false, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*$locale*/1 && img_alt_value !== (img_alt_value = /*getName*/ctx[7]( /*listItem*/ctx[19], /*$locale*/ctx[0]))) {
        (0, _internal.attr_dev)(img, "alt", img_alt_value);
      }
      if (dirty & /*$locale*/1 && t1_value !== (t1_value = /*getName*/ctx[7]( /*listItem*/ctx[19], /*$locale*/ctx[0]) + "")) (0, _internal.set_data_dev)(t1, t1_value);
      if (dirty & /*$locale*/1 && raw_value !== (raw_value = /*getDescription*/ctx[6]( /*listItem*/ctx[19], /*$locale*/ctx[0]) + "")) p.innerHTML = raw_value;
      ;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(561:2) {#each listItems as listItem, index}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let div7;
  let div1;
  let small;
  let a0;
  let t0_value = /*$t*/ctx[3]('bendruomene') + "";
  let t0;
  let t1;
  let a1;
  let t2_value = /*$t*/ctx[3]('parkas') + "";
  let t2;
  let t3;
  let a2;
  let t4_value = /*$t*/ctx[3]('seniunija') + "";
  let t4;
  let t5;
  let a3;
  let t6_value = /*$t*/ctx[3]('savivaldybe') + "";
  let t6;
  let t7;
  let div0;
  let promise;
  let t8;
  let button0;
  let t9;
  let button0_class_value;
  let t10;
  let button1;
  let t11;
  let button1_class_value;
  let t12;
  let div4;
  let div3;
  let div2;
  let t13;
  let div6;
  let div5;
  let h1;
  let t14_value = /*$t*/ctx[3]('welcome') + "";
  let t14;
  let t15;
  let mounted;
  let dispose;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 22
  };
  (0, _internal.handle_promise)(promise = /*weatherPromise*/ctx[5], info);
  let each_value = _consts.listItems;
  (0, _internal.validate_each_argument)(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div7 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      small = (0, _internal.element)("small");
      a0 = (0, _internal.element)("a");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.space)();
      a1 = (0, _internal.element)("a");
      t2 = (0, _internal.text)(t2_value);
      t3 = (0, _internal.space)();
      a2 = (0, _internal.element)("a");
      t4 = (0, _internal.text)(t4_value);
      t5 = (0, _internal.space)();
      a3 = (0, _internal.element)("a");
      t6 = (0, _internal.text)(t6_value);
      t7 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      info.block.c();
      t8 = (0, _internal.space)();
      button0 = (0, _internal.element)("button");
      t9 = (0, _internal.text)("LT");
      t10 = (0, _internal.space)();
      button1 = (0, _internal.element)("button");
      t11 = (0, _internal.text)("EN");
      t12 = (0, _internal.space)();
      div4 = (0, _internal.element)("div");
      div3 = (0, _internal.element)("div");
      div2 = (0, _internal.element)("div");
      t13 = (0, _internal.space)();
      div6 = (0, _internal.element)("div");
      div5 = (0, _internal.element)("div");
      h1 = (0, _internal.element)("h1");
      t14 = (0, _internal.text)(t14_value);
      t15 = (0, _internal.space)();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      (0, _internal.attr_dev)(a0, "class", "usLink svelte-15t08fl");
      (0, _internal.attr_dev)(a0, "href", "https://www.facebook.com/groups/1576634512426828/");
      (0, _internal.attr_dev)(a0, "target", "_blank");
      (0, _internal.attr_dev)(a0, "rel", "nofollow noopener noreferrer");
      (0, _internal.add_location)(a0, file, 531, 6, 14219);
      (0, _internal.attr_dev)(a1, "class", "usLink svelte-15t08fl");
      (0, _internal.attr_dev)(a1, "href", "http://zemaitijosnp.lt");
      (0, _internal.attr_dev)(a1, "target", "_blank");
      (0, _internal.attr_dev)(a1, "rel", "nofollow noopener noreferrer");
      (0, _internal.add_location)(a1, file, 532, 6, 14375);
      (0, _internal.attr_dev)(a2, "class", "usLink svelte-15t08fl");
      (0, _internal.attr_dev)(a2, "href", "https://www.facebook.com/plateliuseniunija");
      (0, _internal.attr_dev)(a2, "target", "_blank");
      (0, _internal.attr_dev)(a2, "rel", "nofollow noopener noreferrer");
      (0, _internal.add_location)(a2, file, 533, 6, 14499);
      (0, _internal.attr_dev)(a3, "class", "usLink svelte-15t08fl");
      (0, _internal.attr_dev)(a3, "href", "https://www.plunge.lt/");
      (0, _internal.attr_dev)(a3, "target", "_blank");
      (0, _internal.attr_dev)(a3, "rel", "nofollow noopener noreferrer");
      (0, _internal.add_location)(a3, file, 534, 6, 14646);
      (0, _internal.add_location)(small, file, 530, 4, 14205);
      (0, _internal.attr_dev)(div0, "class", "weather svelte-15t08fl");
      (0, _internal.add_location)(div0, file, 536, 0, 14782);
      (0, _internal.attr_dev)(button0, "class", button0_class_value = "language-switch " + ( /*activeLanguage*/ctx[2] === 'lt' ? 'active' : '') + " svelte-15t08fl");
      (0, _internal.add_location)(button0, file, 544, 2, 14901);
      (0, _internal.attr_dev)(button1, "class", button1_class_value = "language-switch " + ( /*activeLanguage*/ctx[2] === 'en' || /*activeLanguage*/ctx[2] === 'en-US' ? 'active' : '') + " svelte-15t08fl");
      (0, _internal.add_location)(button1, file, 545, 2, 15029);
      (0, _internal.attr_dev)(div1, "class", "head svelte-15t08fl");
      (0, _internal.add_location)(div1, file, 529, 2, 14182);
      (0, _internal.attr_dev)(div2, "class", "typed-in svelte-15t08fl");
      (0, _internal.add_location)(div2, file, 551, 6, 15253);
      (0, _internal.attr_dev)(div3, "class", "column svelte-15t08fl");
      (0, _internal.add_location)(div3, file, 550, 4, 15226);
      (0, _internal.attr_dev)(div4, "class", "columns svelte-15t08fl");
      (0, _internal.add_location)(div4, file, 549, 2, 15200);
      (0, _internal.attr_dev)(h1, "class", "svelte-15t08fl");
      (0, _internal.add_location)(h1, file, 556, 6, 15369);
      (0, _internal.attr_dev)(div5, "class", "typed-out svelte-15t08fl");
      (0, _internal.attr_dev)(div5, "style", "");
      (0, _internal.add_location)(div5, file, 555, 4, 15330);
      (0, _internal.attr_dev)(div6, "class", "headtwo svelte-15t08fl");
      (0, _internal.add_location)(div6, file, 554, 2, 15304);
      (0, _internal.attr_dev)(div7, "id", "list-items");
      (0, _internal.attr_dev)(div7, "class", "svelte-15t08fl");
      (0, _internal.add_location)(div7, file, 527, 0, 14115);
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div7, anchor);
      (0, _internal.append_dev)(div7, div1);
      (0, _internal.append_dev)(div1, small);
      (0, _internal.append_dev)(small, a0);
      (0, _internal.append_dev)(a0, t0);
      (0, _internal.append_dev)(small, t1);
      (0, _internal.append_dev)(small, a1);
      (0, _internal.append_dev)(a1, t2);
      (0, _internal.append_dev)(small, t3);
      (0, _internal.append_dev)(small, a2);
      (0, _internal.append_dev)(a2, t4);
      (0, _internal.append_dev)(small, t5);
      (0, _internal.append_dev)(small, a3);
      (0, _internal.append_dev)(a3, t6);
      (0, _internal.append_dev)(div1, t7);
      (0, _internal.append_dev)(div1, div0);
      info.block.m(div0, info.anchor = null);
      info.mount = () => div0;
      info.anchor = null;
      (0, _internal.append_dev)(div1, t8);
      (0, _internal.append_dev)(div1, button0);
      (0, _internal.append_dev)(button0, t9);
      (0, _internal.append_dev)(div1, t10);
      (0, _internal.append_dev)(div1, button1);
      (0, _internal.append_dev)(button1, t11);
      (0, _internal.append_dev)(div7, t12);
      (0, _internal.append_dev)(div7, div4);
      (0, _internal.append_dev)(div4, div3);
      (0, _internal.append_dev)(div3, div2);
      (0, _internal.append_dev)(div7, t13);
      (0, _internal.append_dev)(div7, div6);
      (0, _internal.append_dev)(div6, div5);
      (0, _internal.append_dev)(div5, h1);
      (0, _internal.append_dev)(h1, t14);
      (0, _internal.append_dev)(div7, t15);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div7, null);
        }
      }

      /*div7_binding*/
      ctx[11](div7);
      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(button0, "click", /*click_handler*/ctx[8], false, false, false, false), (0, _internal.listen_dev)(button1, "click", /*click_handler_1*/ctx[9], false, false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & /*$t*/8 && t0_value !== (t0_value = /*$t*/ctx[3]('bendruomene') + "")) (0, _internal.set_data_dev)(t0, t0_value);
      if (dirty & /*$t*/8 && t2_value !== (t2_value = /*$t*/ctx[3]('parkas') + "")) (0, _internal.set_data_dev)(t2, t2_value);
      if (dirty & /*$t*/8 && t4_value !== (t4_value = /*$t*/ctx[3]('seniunija') + "")) (0, _internal.set_data_dev)(t4, t4_value);
      if (dirty & /*$t*/8 && t6_value !== (t6_value = /*$t*/ctx[3]('savivaldybe') + "")) (0, _internal.set_data_dev)(t6, t6_value);
      (0, _internal.update_await_block_branch)(info, ctx, dirty);
      if (dirty & /*activeLanguage*/4 && button0_class_value !== (button0_class_value = "language-switch " + ( /*activeLanguage*/ctx[2] === 'lt' ? 'active' : '') + " svelte-15t08fl")) {
        (0, _internal.attr_dev)(button0, "class", button0_class_value);
      }
      if (dirty & /*activeLanguage*/4 && button1_class_value !== (button1_class_value = "language-switch " + ( /*activeLanguage*/ctx[2] === 'en' || /*activeLanguage*/ctx[2] === 'en-US' ? 'active' : '') + " svelte-15t08fl")) {
        (0, _internal.attr_dev)(button1, "class", button1_class_value);
      }
      if (dirty & /*$t*/8 && t14_value !== (t14_value = /*$t*/ctx[3]('welcome') + "")) (0, _internal.set_data_dev)(t14, t14_value);
      if (dirty & /*openGoogleMapsDirections, listItems, getDescription, $locale, getName*/193) {
        each_value = _consts.listItems;
        (0, _internal.validate_each_argument)(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div7, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div7);
      info.block.d();
      info.token = null;
      info = null;
      (0, _internal.destroy_each)(each_blocks, detaching);
      /*div7_binding*/
      ctx[11](null);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function detectUserLanguage() {
  // Check if the URL already specifies a language
  const hash = window.location.hash.replace('#/', '');
  if (['en', 'lt'].includes(hash)) {
    // If URL has language set, return undefined or the hash value itself
    return hash; // or return undefined and handle where this function is called
  }

  // Otherwise, detect from navigator
  return navigator.language || navigator.userLanguage;
}

//     function initializeMetaTags(lang) {
//     // Your existing functions to update meta tags
//     updateMetaDescription(descriptions[lang]);
//
// updateOgTitle(ogTitles[$locale]);
//     // Add here any other meta tag updates you need
//   }
function openGoogleMapsDirections(lat, lng) {
  // Construct the web URL as fallback
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

  // Check for iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Construct the URL scheme or intent URL
  let mobileDirectionsUrl = directionsUrl; // Default to web URL

  if (isIOS) {
    // iOS URL scheme
    mobileDirectionsUrl = `comgooglemaps://?daddr=${lat},${lng}&directionsmode=driving`;
  } else if (/Android/.test(navigator.userAgent)) {
    // Android Intent URL
    mobileDirectionsUrl = `intent://maps.google.com/maps?daddr=${lat},${lng}&directionsmode=driving#Intent;scheme=https;package=com.google.android.apps.maps;end`;
  }

  // Open the URL
  window.open(mobileDirectionsUrl, '_blank');
}
function updateMetaDescription(content) {
  const metaDescription = document.querySelector('meta[name="Description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', content);
  } else {
    // If for some reason the meta tag does not exist, create it
    const metaTag = document.createElement('meta');
    metaTag.name = "Description";
    metaTag.content = content;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
}
function updateOgTitle(content) {
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', content);
  } else {
    // If the meta tag does not exist, create it
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', "og:title");
    ogTitle.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(ogTitle);
  }
}
function instance($$self, $$props, $$invalidate) {
  let activeLanguage;
  let $locale;
  let $activeMapItem;
  let $t;
  (0, _internal.validate_store)(_svelteI18n.locale, 'locale');
  (0, _internal.component_subscribe)($$self, _svelteI18n.locale, $$value => $$invalidate(0, $locale = $$value));
  (0, _internal.validate_store)(_stores.activeMapItem, 'activeMapItem');
  (0, _internal.component_subscribe)($$self, _stores.activeMapItem, $$value => $$invalidate(13, $activeMapItem = $$value));
  (0, _internal.validate_store)(_svelteI18n.t, 't');
  (0, _internal.component_subscribe)($$self, _svelteI18n.t, $$value => $$invalidate(3, $t = $$value));
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)('List', slots, []);
  const ogTitles = {
    en: "Explore Beržoras | Where to Stay and What to See in Plateliai Region",
    lt: "Atraskite Beržorą | Kur Apsistoti ir Ką Pamatyti Platelių apylinkėse"
  };

  // Your descriptions
  const descriptions = {
    en: "Plan your trip to Beržoras Village, near tourist-favorite Plateliai, Lithuania. Discover landmarks, local culture, and find the best places to stay.",
    lt: "Atraskite Beržoro žavesį! Suplanuokite savo kelionę į šį nuostabų Žemaitijos kampelį netoli Platelių. Čia rasite įžymybes, vietinės kultūros paslaptis ir geriausias vietas apsistoti. Nepraleiskite progos!"
  };
  function changeLanguage(lang) {
    window.location.hash = `/${lang}`;
    _svelteI18n.locale.set(lang); // This will trigger reactive updates, but we'll also directly update meta tags to be sure

    // Normalize lang code if necessary
    const normalizedLang = lang.includes('-') ? lang.split('-')[0] : lang;

    // Directly update meta tags with the new language
    // This ensures that updates are applied immediately, without waiting for reactive statements
    updateMetaDescription(descriptions[normalizedLang]);
    updateOgTitle(ogTitles[normalizedLang]);
  }
  let listRef;
  let timeout;
  let weatherPromise = fetch('https://wttr.in/Berzoras?format=%c+%t&lang=en').then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch weather');
    }
    return response.text();
  });
  const scrollHandler = () => {
    const listItems = Array.from(document.getElementsByClassName('list-item'));
    const visibleListItems = listItems.map(_inView.default.is);
    const topMostVisible = visibleListItems.indexOf(true);
    listItems.forEach((item, index) => {
      if (index !== topMostVisible) {
        item.style.filter = 'blur(5px)';
        item.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
        item.style.color = 'transparent';
      } else {
        item.style.filter = '';
        item.style.textShadow = '';
        item.style.color = '';
      }
    });

    // Ensure topMostVisible is within bounds before setting activeMapItem
    if (topMostVisible !== -1 && topMostVisible < listItems.length) {
      if (topMostVisible !== $activeMapItem) {
        _stores.activeMapItem.set(topMostVisible);
      }
    }
  };
  const debouncedScrollHandler = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      scrollHandler();
    }, 1);
  };
  const setupLazyLoad = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px'
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  };
  (0, _svelte.onMount)(() => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
    _inView.default.offset(200);
    listRef.addEventListener('scroll', debouncedScrollHandler);
    setupLazyLoad();

    // const userPreferredLang = detectUserLanguage();
    // locale.set(userPreferredLang);
    // Ensure meta tags are updated directly after setting the initial locale
    // Use the base language code if your descriptions and titles use them
    const baseLang = userPreferredLang.split('-')[0];
    updateMetaDescription(descriptions[baseLang]);
    updateOgTitle(ogTitles[baseLang]);
  }); // const userPreferredLang = detectUserLanguage();
  // locale.set(userPreferredLang); 
  // initializeMetaTags(userPreferredLang); // Initialize meta tags based on the detected or default language

  (0, _svelte.onDestroy)(() => {
    listRef.removeEventListener('scroll', debouncedScrollHandler);
  });
  const getDescription = (item, currentLocale) => {
    // Fallback to English description if Lithuanian is undefined or the locale is not Lithuanian
    return currentLocale.startsWith('lt') && item.ltdescription ? item.ltdescription : item.description;
  };
  const getName = (item, currentLocale) => {
    // Fallback to English name if Lithuanian is undefined or the locale is not Lithuanian
    return currentLocale.startsWith('lt') && item.ltname ? item.ltname : item.name;
  };
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<List> was created with unknown prop '${key}'`);
  });
  const click_handler = () => changeLanguage('lt');
  const click_handler_1 = () => changeLanguage('en');
  const click_handler_2 = listItem => openGoogleMapsDirections(listItem.coordinates[1], listItem.coordinates[0]);
  function div7_binding($$value) {
    _internal.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
      listRef = $$value;
      $$invalidate(1, listRef);
    });
  }
  $$self.$capture_state = () => ({
    t: _svelteI18n.t,
    onMount: _svelte.onMount,
    onDestroy: _svelte.onDestroy,
    inView: _inView.default,
    listItems: _consts.listItems,
    activeMapItem: _stores.activeMapItem,
    locale: _svelteI18n.locale,
    ogTitles,
    descriptions,
    detectUserLanguage,
    openGoogleMapsDirections,
    updateMetaDescription,
    updateOgTitle,
    changeLanguage,
    listRef,
    timeout,
    weatherPromise,
    scrollHandler,
    debouncedScrollHandler,
    setupLazyLoad,
    getDescription,
    getName,
    activeLanguage,
    $locale,
    $activeMapItem,
    $t
  });
  $$self.$inject_state = $$props => {
    if ('listRef' in $$props) $$invalidate(1, listRef = $$props.listRef);
    if ('timeout' in $$props) timeout = $$props.timeout;
    if ('weatherPromise' in $$props) $$invalidate(5, weatherPromise = $$props.weatherPromise);
    if ('activeLanguage' in $$props) $$invalidate(2, activeLanguage = $$props.activeLanguage);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$locale*/1) {
      // Reactive statement to watch for changes in $locale
      $: $$invalidate(2, activeLanguage = $locale.includes('-') ? $locale.split('-')[0] : $locale); // Normalize to language code for UI consistency
    }
    if ($$self.$$.dirty & /*$locale*/1) {
      // Whenever the locale changes, update the <html> lang attribute
      $: {
        document.documentElement.lang = $locale;
      }
    }
    if ($$self.$$.dirty & /*$locale*/1) {
      // Reactively update the description when the locale changes
      $: {
        updateMetaDescription(descriptions[$locale]);
      }
    }
    if ($$self.$$.dirty & /*$locale*/1) {
      // Reactively update the keywords when the locale changes
      // $: {
      //   updateMetaKeywords(keywords[$locale]);
      // }
      // Whenever the locale changes, update the og:title content
      $: {
        updateOgTitle(ogTitles[$locale]);
      }
    }
  };
  return [$locale, listRef, activeLanguage, $t, changeLanguage, weatherPromise, getDescription, getName, click_handler, click_handler_1, click_handler_2, div7_binding];
}
class List extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "List",
      options,
      id: create_fragment.name
    });
  }
}
var _default = exports.default = List;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-i18n":"../node_modules/svelte-i18n/dist/runtime.js","svelte":"../node_modules/svelte/index.mjs","in-view":"../node_modules/in-view/dist/in-view.min.js","./consts.js":"components/consts.js","./stores.js":"components/stores.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44399" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/List.a959738d.js.map