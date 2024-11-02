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
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvelteElement = exports.SvelteComponentTyped = exports.SvelteComponentDev = exports.SvelteComponent = exports.ResizeObserverSingleton = exports.HtmlTagHydration = exports.HtmlTag = void 0;
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_iframe_resize_listener = add_iframe_resize_listener;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_styles = add_styles;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.append_empty_stylesheet = append_empty_stylesheet;
exports.append_hydration = append_hydration;
exports.append_hydration_dev = append_hydration_dev;
exports.append_styles = append_styles;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.attribute_to_object = attribute_to_object;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.binding_callbacks = void 0;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_comment = claim_comment;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_html_tag = claim_html_tag;
exports.claim_space = claim_space;
exports.claim_svg_element = claim_svg_element;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.comment = comment;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.construct_svelte_component = construct_svelte_component;
exports.construct_svelte_component_dev = construct_svelte_component_dev;
exports.contenteditable_truthy_values = void 0;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.current_component = void 0;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dirty_components = void 0;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.end_hydrating = end_hydrating;
exports.escape = escape;
exports.escape_attribute_value = escape_attribute_value;
exports.escape_object = escape_object;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.flush_render_callbacks = flush_render_callbacks;
exports.getAllContexts = getAllContexts;
exports.getContext = getContext;
exports.get_all_dirty_from_scope = get_all_dirty_from_scope;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_custom_elements_slots = get_custom_elements_slots;
exports.get_root_for_style = get_root_for_style;
exports.get_slot_changes = get_slot_changes;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.globals = void 0;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.hasContext = hasContext;
exports.has_prop = void 0;
exports.head_selector = head_selector;
exports.identity = void 0;
exports.init = init;
exports.init_binding_group = init_binding_group;
exports.init_binding_group_dynamic = init_binding_group_dynamic;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.insert_hydration = insert_hydration;
exports.insert_hydration_dev = insert_hydration_dev;
exports.is_client = exports.invalid_attribute_name_character = exports.intros = void 0;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.is_void = is_void;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.merge_ssr_styles = merge_ssr_styles;
exports.missing_component = void 0;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.now = void 0;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.resize_observer_device_pixel_content_box = exports.resize_observer_content_box = exports.resize_observer_border_box = exports.raf = void 0;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_custom_element_data_map = set_custom_element_data_map;
exports.set_data = set_data;
exports.set_data_contenteditable = set_data_contenteditable;
exports.set_data_contenteditable_dev = set_data_contenteditable_dev;
exports.set_data_dev = set_data_dev;
exports.set_data_maybe_contenteditable = set_data_maybe_contenteditable;
exports.set_data_maybe_contenteditable_dev = set_data_maybe_contenteditable_dev;
exports.set_dynamic_element_data = set_dynamic_element_data;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.split_css_unit = split_css_unit;
exports.spread = spread;
exports.src_url_equal = src_url_equal;
exports.start_hydrating = start_hydrating;
exports.stop_immediate_propagation = stop_immediate_propagation;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.trusted = trusted;
exports.update_await_block_branch = update_await_block_branch;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.update_slot_base = update_slot_base;
exports.validate_component = validate_component;
exports.validate_dynamic_element = validate_dynamic_element;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.validate_void_dynamic_element = validate_void_dynamic_element;
exports.xlink_attr = xlink_attr;
function noop() {}
const identity = x => x;
exports.identity = identity;
function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];
  return tar;
}
// Adapted from https://github.com/then/is-promise/blob/master/index.js
// Distributed under MIT License https://github.com/then/is-promise/blob/master/LICENSE
function is_promise(value) {
  return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === 'function';
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement('a');
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === undefined) {
      return lets;
    }
    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props) if (k[0] !== '$') result[k] = props[k];
  return result;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
  return rest;
}
function compute_slots(slots) {
  const result = {};
  for (const key in slots) {
    result[key] = true;
  }
  return result;
}
function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}
function null_to_empty(value) {
  return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
exports.has_prop = has_prop;
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
function split_css_unit(value) {
  const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || 'px'] : [value, 'px'];
}
const contenteditable_truthy_values = exports.contenteditable_truthy_values = ['', true, 1, 'true', 'contenteditable'];
const is_client = exports.is_client = typeof window !== 'undefined';
let now = exports.now = is_client ? () => window.performance.now() : () => Date.now();
let raf = exports.raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
  exports.now = now = fn;
}
function set_raf(fn) {
  exports.raf = raf = fn;
}
const tasks = new Set();
function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const globals = exports.globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

/**
 * Resize observer singleton.
 * One listener per element only!
 * https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ
 */
class ResizeObserverSingleton {
  constructor(options) {
    this.options = options;
    this._listeners = 'WeakMap' in globals ? new WeakMap() : undefined;
  }
  observe(element, listener) {
    this._listeners.set(element, listener);
    this._getObserver().observe(element, this.options);
    return () => {
      this._listeners.delete(element);
      this._observer.unobserve(element); // this line can probably be removed
    };
  }
  _getObserver() {
    var _a;
    return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver(entries => {
      var _a;
      for (const entry of entries) {
        ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a = this._listeners.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
      }
    });
  }
}
// Needs to be written like this to pass the tree-shake-test
exports.ResizeObserverSingleton = ResizeObserverSingleton;
ResizeObserverSingleton.entries = 'WeakMap' in globals ? new WeakMap() : undefined;

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function upper_bound(low, high, key, value) {
  // Return first index of value larger than input value in the range [low, high)
  while (low < high) {
    const mid = low + (high - low >> 1);
    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true;
  // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
  let children = target.childNodes;
  // If target is <head>, there may be children without claim_order
  if (target.nodeName === 'HEAD') {
    const myChildren = [];
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.claim_order !== undefined) {
        myChildren.push(node);
      }
    }
    children = myChildren;
  }
  /*
  * Reorder claimed children optimally.
  * We can reorder claimed children optimally by finding the longest subsequence of
  * nodes that are already claimed in order and only moving the rest. The longest
  * subsequence of nodes that are claimed in order can be found by
  * computing the longest increasing subsequence of .claim_order values.
  *
  * This algorithm is optimal in generating the least amount of reorder operations
  * possible.
  *
  * Proof:
  * We know that, given a set of reordering operations, the nodes that do not move
  * always form an increasing subsequence, since they do not move among each other
  * meaning that they must be already ordered among each other. Thus, the maximal
  * set of nodes that do not move form a longest increasing subsequence.
  */
  // Compute longest increasing subsequence
  // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
  const m = new Int32Array(children.length + 1);
  // Predecessor indices + 1
  const p = new Int32Array(children.length);
  m[0] = -1;
  let longest = 0;
  for (let i = 0; i < children.length; i++) {
    const current = children[i].claim_order;
    // Find the largest subsequence length such that it ends in a value less than our current value
    // upper_bound returns first greater value, so we subtract one
    // with fast path for when we are on the current longest subsequence
    const seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
    p[i] = m[seqLen] + 1;
    const newLen = seqLen + 1;
    // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
    m[newLen] = i;
    longest = Math.max(newLen, longest);
  }
  // The longest increasing subsequence of nodes (initially reversed)
  const lis = [];
  // The rest of the nodes, nodes that will be moved
  const toMove = [];
  let last = children.length - 1;
  for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children[cur - 1]);
    for (; last >= cur; last--) {
      toMove.push(children[last]);
    }
    last--;
  }
  for (; last >= 0; last--) {
    toMove.push(children[last]);
  }
  lis.reverse();
  // We sort the nodes being moved to guarantee that their insertion order matches the claim order
  toMove.sort((a, b) => a.claim_order - b.claim_order);
  // Finally, we move the nodes
  for (let i = 0, j = 0; i < toMove.length; i++) {
    while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
      j++;
    }
    const anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[i], anchor);
  }
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node) return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_empty_stylesheet(node) {
  const style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);
    if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentNode !== target) {
      target.actual_end_child = target.firstChild;
    }
    // Skip nodes of undefined ordering
    while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }
    if (node !== target.actual_end_child) {
      // We only insert if the ordering of this node should be modified or the parent node is not target
      if (node.claim_order !== undefined || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}
function object_without_properties(obj, exclude) {
  const target = {};
  for (const k in obj) {
    if (has_prop(obj, k)
    // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }
  return target;
}
function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(' ');
}
function empty() {
  return text('');
}
function comment(content) {
  return document.createComment(content);
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function (event) {
    event.preventDefault();
    // @ts-ignore
    return fn.call(this, event);
  };
}
function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation();
    // @ts-ignore
    return fn.call(this, event);
  };
}
function stop_immediate_propagation(fn) {
  return function (event) {
    event.stopImmediatePropagation();
    // @ts-ignore
    return fn.call(this, event);
  };
}
function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}
function trusted(fn) {
  return function (event) {
    // @ts-ignore
    if (event.isTrusted) fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
/**
 * List of attributes that should always be set through the attr method,
 * because updating them through the property setter doesn't work reliably.
 * In the example of `width`/`height`, the problem is that the setter only
 * accepts numeric values, but the attribute can also be set to a string like `50%`.
 * If this list becomes too big, rethink this approach.
 */
const always_set_through_set_attribute = ['width', 'height'];
function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}
function set_custom_element_data_map(node, data_map) {
  Object.keys(data_map).forEach(key => {
    set_custom_element_data(node, key, data_map[key]);
  });
}
function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
  } else {
    attr(node, prop, value);
  }
}
function set_dynamic_element_data(tag) {
  return /-/.test(tag) ? set_custom_element_data_map : set_attributes;
}
function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
  const value = new Set();
  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }
  if (!checked) {
    value.delete(__value);
  }
  return Array.from(value);
}
function init_binding_group(group) {
  let _inputs;
  return {
    /* push */p(...inputs) {
      _inputs = inputs;
      _inputs.forEach(input => group.push(input));
    },
    /* remove */r() {
      _inputs.forEach(input => group.splice(group.indexOf(input), 1));
    }
  };
}
function init_binding_group_dynamic(group, indexes) {
  let _group = get_binding_group(group);
  let _inputs;
  function get_binding_group(group) {
    for (let i = 0; i < indexes.length; i++) {
      group = group[indexes[i]] = group[indexes[i]] || [];
    }
    return group;
  }
  function push() {
    _inputs.forEach(input => _group.push(input));
  }
  function remove() {
    _inputs.forEach(input => _group.splice(_group.indexOf(input), 1));
  }
  return {
    /* update */u(new_indexes) {
      indexes = new_indexes;
      const new_group = get_binding_group(group);
      if (new_group !== _group) {
        remove();
        _group = new_group;
        push();
      }
    },
    /* push */p(...inputs) {
      _inputs = inputs;
      push();
    },
    /* remove */r: remove
  };
}
function to_number(value) {
  return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
  const array = [];
  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }
  return array;
}
function children(element) {
  return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
  if (nodes.claim_info === undefined) {
    nodes.claim_info = {
      last_index: 0,
      total_claimed: 0
    };
  }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
  // Try to find nodes in an order such that we lengthen the longest increasing subsequence
  init_claim_info(nodes);
  const resultNode = (() => {
    // We first try to find an element after the previous one
    for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
      const node = nodes[i];
      if (predicate(node)) {
        const replacement = processNode(node);
        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }
        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }
        return node;
      }
    }
    // Otherwise, we try to find one before
    // We iterate in reverse so that we don't go too far back
    for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
      const node = nodes[i];
      if (predicate(node)) {
        const replacement = processNode(node);
        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }
        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        } else if (replacement === undefined) {
          // Since we spliced before the last_index, we decrease it
          nodes.claim_info.last_index--;
        }
        return node;
      }
    }
    // If we can't find any matching node, we create a new one
    return createNode();
  })();
  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(nodes, node => node.nodeName === name, node => {
    const remove = [];
    for (let j = 0; j < node.attributes.length; j++) {
      const attribute = node.attributes[j];
      if (!attributes[attribute.name]) {
        remove.push(attribute.name);
      }
    }
    remove.forEach(v => node.removeAttribute(v));
    return undefined;
  }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
  return claim_node(nodes, node => node.nodeType === 3, node => {
    const dataStr = '' + data;
    if (node.data.startsWith(dataStr)) {
      if (node.data.length !== dataStr.length) {
        return node.splitText(dataStr.length);
      }
    } else {
      node.data = dataStr;
    }
  }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function claim_space(nodes) {
  return claim_text(nodes, ' ');
}
function claim_comment(nodes, data) {
  return claim_node(nodes, node => node.nodeType === 8, node => {
    node.data = '' + data;
    return undefined;
  }, () => comment(data), true);
}
function find_comment(nodes, text, start) {
  for (let i = start; i < nodes.length; i += 1) {
    const node = nodes[i];
    if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
      return i;
    }
  }
  return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
  // find html opening tag
  const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
  const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
  if (start_index === end_index) {
    return new HtmlTagHydration(undefined, is_svg);
  }
  init_claim_info(nodes);
  const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
  detach(html_tag_nodes[0]);
  detach(html_tag_nodes[html_tag_nodes.length - 1]);
  const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
  for (const n of claimed_nodes) {
    n.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
  }
  return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text, data) {
  data = '' + data;
  if (text.data === data) return;
  text.data = data;
}
function set_data_contenteditable(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  text.data = data;
}
function set_data_maybe_contenteditable(text, data, attr_value) {
  if (~contenteditable_truthy_values.indexOf(attr_value)) {
    set_data_contenteditable(text, data);
  } else {
    set_data(text, data);
  }
}
function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {
    // do nothing
  }
}
function set_style(node, key, value, important) {
  if (value == null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}
function select_option(select, value, mounting) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== undefined) {
    select.selectedIndex = -1; // no option should be selected
  }
}
function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}
function select_value(select) {
  const selected_option = select.querySelector(':checked');
  return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;
    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }
  return crossorigin;
}
function add_iframe_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);
  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }
  const iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;
  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';
    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
      // make sure an initial resize event is fired _after_ the iframe is loaded (which is asynchronous)
      // see https://github.com/sveltejs/svelte/issues/4233
      fn();
    };
  }
  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }
    detach(iframe);
  };
}
const resize_observer_content_box = exports.resize_observer_content_box = /* @__PURE__ */new ResizeObserverSingleton({
  box: 'content-box'
});
const resize_observer_border_box = exports.resize_observer_border_box = /* @__PURE__ */new ResizeObserverSingleton({
  box: 'border-box'
});
const resize_observer_device_pixel_content_box = exports.resize_observer_device_pixel_content_box = /* @__PURE__ */new ResizeObserverSingleton({
  box: 'device-pixel-content-box'
});
function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, {
  bubbles = false,
  cancelable = false
} = {}) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}
function head_selector(nodeId, head) {
  const result = [];
  let started = 0;
  for (const node of head.childNodes) {
    if (node.nodeType === 8 /* comment node */) {
      const comment = node.textContent.trim();
      if (comment === `HEAD_${nodeId}_END`) {
        started -= 1;
        result.push(node);
      } else if (comment === `HEAD_${nodeId}_START`) {
        started += 1;
        result.push(node);
      }
    } else if (started > 0) {
      result.push(node);
    }
  }
  return result;
}
class HtmlTag {
  constructor(is_svg = false) {
    this.is_svg = false;
    this.is_svg = is_svg;
    this.e = this.n = null;
  }
  c(html) {
    this.h(html);
  }
  m(html, target, anchor = null) {
    if (!this.e) {
      if (this.is_svg) this.e = svg_element(target.nodeName);
      /** #7364  target for <template> may be provided as #document-fragment(11) */else this.e = element(target.nodeType === 11 ? 'TEMPLATE' : target.nodeName);
      this.t = target.tagName !== 'TEMPLATE' ? target : target.content;
      this.c(html);
    }
    this.i(anchor);
  }
  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes);
  }
  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }
  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }
  d() {
    this.n.forEach(detach);
  }
}
exports.HtmlTag = HtmlTag;
class HtmlTagHydration extends HtmlTag {
  constructor(claimed_nodes, is_svg = false) {
    super(is_svg);
    this.e = this.n = null;
    this.l = claimed_nodes;
  }
  c(html) {
    if (this.l) {
      this.n = this.l;
    } else {
      super.c(html);
    }
  }
  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert_hydration(this.t, this.n[i], anchor);
    }
  }
}
exports.HtmlTagHydration = HtmlTagHydration;
function attribute_to_object(attributes) {
  const result = {};
  for (const attribute of attributes) {
    result[attribute.name] = attribute.value;
  }
  return result;
}
function get_custom_elements_slots(element) {
  const result = {};
  element.childNodes.forEach(node => {
    result[node.slot || 'default'] = true;
  });
  return result;
}
function construct_svelte_component(component, props) {
  return new component(props);
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
  let hash = 5381;
  let i = str.length;
  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);
  return hash >>> 0;
}
function create_style_information(doc, node) {
  const info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';
  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }
  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const {
    stylesheet,
    rules
  } = managed_styles.get(doc) || create_style_information(doc, node);
  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}
function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;
  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active) return;
    managed_styles.forEach(info => {
      const {
        ownerNode
      } = info.stylesheet;
      // there is no ownerNode if it runs on jsdom.
      if (ownerNode) detach(ownerNode);
    });
    managed_styles.clear();
  });
}
function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;
  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }
    if (!delay) {
      started = true;
    }
  }
  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }
  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }
    if (started && now >= end) {
      tick(1, 0);
      stop();
    }
    if (!running) {
      return false;
    }
    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }
    return true;
  });
  start();
  tick(0, 1);
  return stop;
}
function fix_position(node) {
  const style = getComputedStyle(node);
  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}
function add_transform(node, a) {
  const b = node.getBoundingClientRect();
  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}
let current_component = exports.current_component = void 0;
function set_current_component(component) {
  exports.current_component = current_component = component;
}
function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}
/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`
 *
 * https://svelte.dev/docs#run-time-svelte-beforeupdate
 */
function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}
/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs#run-time-svelte-onmount
 */
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`
 */
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs#run-time-svelte-ondestroy
 */
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
 */
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, {
    cancelable = false
  } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail, {
        cancelable
      });
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-setcontext
 */
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}
/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-getcontext
 */
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
/**
 * Retrieves the whole context map that belongs to the closest parent component.
 * Must be called during component initialisation. Useful, for example, if you
 * programmatically create a component and want to pass the existing context to it.
 *
 * https://svelte.dev/docs#run-time-svelte-getallcontexts
 */
function getAllContexts() {
  return get_current_component().$$.context;
}
/**
 * Checks whether a given `key` has been set in the context of a parent component.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-hascontext
 */
function hasContext(key) {
  return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(fn => fn.call(this, event));
  }
}
const dirty_components = exports.dirty_components = [];
const intros = exports.intros = {
  enabled: false
};
const binding_callbacks = exports.binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
  // Do not reenter flush while dirty components are updated, as this can
  // result in an infinite loop. Instead, let the inner flush handle it.
  // Reentrancy is ok afterwards for bindings etc.
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    // first, call beforeUpdate functions
    // and update components
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      // reset dirty state to not end up in a deadlocked state and then rethrow
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
/**
 * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
 */
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach(c => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach(c => c());
  render_callbacks = filtered;
}
let promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
const null_transition = {
  duration: 0
};
function create_in_transition(node, fn, params) {
  const options = {
    direction: 'in'
  };
  let config = fn(node, params, options);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;
  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }
  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }
        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }
      return running;
    });
  }
  let started = false;
  return {
    start() {
      if (started) return;
      started = true;
      delete_rule(node);
      if (is_function(config)) {
        config = config(options);
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate() {
      started = false;
    },
    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}
function create_out_transition(node, fn, params) {
  const options = {
    direction: 'out'
  };
  let config = fn(node, params, options);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;
  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');
          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }
          return false;
        }
        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }
      return running;
    });
  }
  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config(options);
      go();
    });
  } else {
    go();
  }
  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }
      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}
function create_bidirectional_transition(node, fn, params, intro) {
  const options = {
    direction: 'both'
  };
  let config = fn(node, params, options);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }
  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };
    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }
      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }
        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');
            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config(options);
          go(b);
        });
      } else {
        go(b);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
function handle_promise(promise, info) {
  const token = info.token = {};
  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks) info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    // if we previously had a then/catch block, destroy it
    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const {
    resolved
  } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--) old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  const updates = [];
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      // defer updates until all the DOM shuffling is done
      updates.push(() => block.p(child_ctx, dirty));
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = new Set();
  const did_move = new Set();
  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }
  while (n) insert(new_blocks[n - 1]);
  run_all(updates);
  return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();
  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));
    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }
    keys.add(key);
  }
}
function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }
  return update;
}
function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}
const _boolean_attributes = ['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'inert', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected'];
/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** regex of all html void element names */
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}
const invalid_attribute_name_character = exports.invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += ' ' + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += ' ' + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += ' ' + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(';')) {
    const colon_index = individual_style.indexOf(':');
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name) continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = '';
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
    last = i + 1;
  }
  return escaped + str.substring(last);
}
function escape_attribute_value(value) {
  // keep booleans, null, and undefined for the sake of `spread`
  const should_escape = typeof value === 'string' || value && typeof value === 'object';
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  let str = '';
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = exports.missing_component = {
  $$render: () => ''
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component;
}
function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
  console.log(values); // eslint-disable-line no-console
  return '';
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {
      $$slots = {},
      context = new Map()
    } = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function add_classes(classes) {
  return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(key => style_object[key]).map(key => `${key}: ${escape_attribute_value(style_object[key])};`).join(' ');
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : '';
}
function bind(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
  const {
    fragment,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      // if the component was destroyed immediately
      // it will update the `$$.on_destroy` reference to `null`.
      // the destructured on_destroy may still reference to the old array
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  // `false` as a special case of no DOM component
  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
let SvelteElement = exports.SvelteElement = void 0;
if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }
    connectedCallback() {
      const {
        on_mount
      } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
exports.SvelteComponent = SvelteComponent;
function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.59.2'
  }, detail), {
    bubbles: true
  }));
}
function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node
  });
  append(target, node);
}
function append_hydration_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node
  });
  append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node,
    anchor
  });
  insert_hydration(target, node, anchor);
}
function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node
  });
  detach(node);
}
function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}
function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}
function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
  const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  if (has_stop_immediate_propagation) modifiers.push('stopImmediatePropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}
function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node,
    attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node,
    attribute,
    value
  });
}
function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node,
    property,
    value
  });
}
function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev('SvelteDOMSetDataset', {
    node,
    property,
    value
  });
}
function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data
  });
  text.data = data;
}
function set_data_contenteditable_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data
  });
  text.data = data;
}
function set_data_maybe_contenteditable_dev(text, data, attr_value) {
  if (~contenteditable_truthy_values.indexOf(attr_value)) {
    set_data_contenteditable_dev(text, data);
  } else {
    set_data_dev(text, data);
  }
}
function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';
    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }
    throw new Error(msg);
  }
}
function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
function validate_dynamic_element(tag) {
  const is_string = typeof tag === 'string';
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
  }
}
function construct_svelte_component_dev(component, props) {
  const error_message = 'this={...} of <svelte:component> should specify a Svelte component.';
  try {
    const instance = new component(props);
    if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy) {
      throw new Error(error_message);
    }
    return instance;
  } catch (err) {
    const {
      message
    } = err;
    if (typeof message === 'string' && message.indexOf('is not a constructor') !== -1) {
      throw new Error(error_message);
    } else {
      throw err;
    }
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn('Component was already destroyed'); // eslint-disable-line no-console
    };
  }
  $capture_state() {}
  $inject_state() {}
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */
exports.SvelteComponentDev = SvelteComponentDev;
class SvelteComponentTyped extends SvelteComponentDev {
  constructor(options) {
    super(options);
  }
}
exports.SvelteComponentTyped = SvelteComponentTyped;
function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error('Infinite loop detected');
    }
  };
}
},{}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _index.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "SvelteComponentTyped", {
  enumerable: true,
  get: function () {
    return _index.SvelteComponentTyped;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _index.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _index.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _index.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getAllContexts", {
  enumerable: true,
  get: function () {
    return _index.getAllContexts;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _index.getContext;
  }
});
Object.defineProperty(exports, "hasContext", {
  enumerable: true,
  get: function () {
    return _index.hasContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _index.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _index.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _index.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _index.tick;
  }
});
var _index = require("./internal/index.mjs");
},{"./internal/index.mjs":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _internal = require("svelte/internal");
var _svelte = require("svelte");
/* components/App.svelte generated by Svelte v3.59.2 */

const file = "components/App.svelte";

// (60:0) {#if Map && List && Waste}
function create_if_block(ctx) {
  let div2;
  let div0;
  let switch_instance0;
  let t0;
  let switch_instance1;
  let t1;
  let div1;
  let switch_instance2;
  let current;
  var switch_value = /*Waste*/ctx[2];
  function switch_props(ctx) {
    return {
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance0 = (0, _internal.construct_svelte_component_dev)(switch_value, switch_props(ctx));
  }
  var switch_value_1 = /*List*/ctx[1];
  function switch_props_1(ctx) {
    return {
      $$inline: true
    };
  }
  if (switch_value_1) {
    switch_instance1 = (0, _internal.construct_svelte_component_dev)(switch_value_1, switch_props_1(ctx));
  }
  var switch_value_2 = /*Map*/ctx[0];
  function switch_props_2(ctx) {
    return {
      $$inline: true
    };
  }
  if (switch_value_2) {
    switch_instance2 = (0, _internal.construct_svelte_component_dev)(switch_value_2, switch_props_2(ctx));
  }
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      if (switch_instance0) (0, _internal.create_component)(switch_instance0.$$.fragment);
      t0 = (0, _internal.space)();
      if (switch_instance1) (0, _internal.create_component)(switch_instance1.$$.fragment);
      t1 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      if (switch_instance2) (0, _internal.create_component)(switch_instance2.$$.fragment);
      (0, _internal.attr_dev)(div0, "class", "pane left svelte-10xnkmn");
      (0, _internal.add_location)(div0, file, 61, 4, 1104);
      (0, _internal.attr_dev)(div1, "class", "pane right svelte-10xnkmn");
      (0, _internal.add_location)(div1, file, 66, 4, 1218);
      (0, _internal.attr_dev)(div2, "class", "container svelte-10xnkmn");
      (0, _internal.add_location)(div2, file, 60, 3, 1076);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.append_dev)(div2, div0);
      if (switch_instance0) (0, _internal.mount_component)(switch_instance0, div0, null);
      (0, _internal.append_dev)(div0, t0);
      if (switch_instance1) (0, _internal.mount_component)(switch_instance1, div0, null);
      (0, _internal.append_dev)(div2, t1);
      (0, _internal.append_dev)(div2, div1);
      if (switch_instance2) (0, _internal.mount_component)(switch_instance2, div1, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty & /*Waste*/4 && switch_value !== (switch_value = /*Waste*/ctx[2])) {
        if (switch_instance0) {
          (0, _internal.group_outros)();
          const old_component = switch_instance0;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }
        if (switch_value) {
          switch_instance0 = (0, _internal.construct_svelte_component_dev)(switch_value, switch_props(ctx));
          (0, _internal.create_component)(switch_instance0.$$.fragment);
          (0, _internal.transition_in)(switch_instance0.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance0, div0, t0);
        } else {
          switch_instance0 = null;
        }
      } else if (switch_value) {}
      if (dirty & /*List*/2 && switch_value_1 !== (switch_value_1 = /*List*/ctx[1])) {
        if (switch_instance1) {
          (0, _internal.group_outros)();
          const old_component = switch_instance1;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }
        if (switch_value_1) {
          switch_instance1 = (0, _internal.construct_svelte_component_dev)(switch_value_1, switch_props_1(ctx));
          (0, _internal.create_component)(switch_instance1.$$.fragment);
          (0, _internal.transition_in)(switch_instance1.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance1, div0, null);
        } else {
          switch_instance1 = null;
        }
      } else if (switch_value_1) {}
      if (dirty & /*Map*/1 && switch_value_2 !== (switch_value_2 = /*Map*/ctx[0])) {
        if (switch_instance2) {
          (0, _internal.group_outros)();
          const old_component = switch_instance2;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }
        if (switch_value_2) {
          switch_instance2 = (0, _internal.construct_svelte_component_dev)(switch_value_2, switch_props_2(ctx));
          (0, _internal.create_component)(switch_instance2.$$.fragment);
          (0, _internal.transition_in)(switch_instance2.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance2, div1, null);
        } else {
          switch_instance2 = null;
        }
      } else if (switch_value_2) {}
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance0) (0, _internal.transition_in)(switch_instance0.$$.fragment, local);
      if (switch_instance1) (0, _internal.transition_in)(switch_instance1.$$.fragment, local);
      if (switch_instance2) (0, _internal.transition_in)(switch_instance2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance0) (0, _internal.transition_out)(switch_instance0.$$.fragment, local);
      if (switch_instance1) (0, _internal.transition_out)(switch_instance1.$$.fragment, local);
      if (switch_instance2) (0, _internal.transition_out)(switch_instance2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div2);
      if (switch_instance0) (0, _internal.destroy_component)(switch_instance0);
      if (switch_instance1) (0, _internal.destroy_component)(switch_instance1);
      if (switch_instance2) (0, _internal.destroy_component)(switch_instance2);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(60:0) {#if Map && List && Waste}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = /*Map*/ctx[0] && /*List*/ctx[1] && /*Waste*/ctx[2] && create_if_block(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      if ( /*Map*/ctx[0] && /*List*/ctx[1] && /*Waste*/ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & /*Map, List, Waste*/7) {
            (0, _internal.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0, _internal.detach_dev)(if_block_anchor);
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
function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)('App', slots, []);
  let Map, List, Waste;
  (0, _svelte.onMount)(async () => {
    const [MapModule, ListModule, WasteModule] = await Promise.all([require("_bundle_loader")(require.resolve('./Map.svelte')), require("_bundle_loader")(require.resolve('./List.svelte')), require("_bundle_loader")(require.resolve('./Waste.svelte'))]);
    $$invalidate(0, Map = MapModule.default);
    $$invalidate(1, List = ListModule.default);
    $$invalidate(2, Waste = WasteModule.default);
  });
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    onMount: _svelte.onMount,
    Map,
    List,
    Waste
  });
  $$self.$inject_state = $$props => {
    if ('Map' in $$props) $$invalidate(0, Map = $$props.Map);
    if ('List' in $$props) $$invalidate(1, List = $$props.List);
    if ('Waste' in $$props) $$invalidate(2, Waste = $$props.Waste);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Map, List, Waste];
}
class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }
}
var _default = exports.default = App;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./Map.svelte":[["Map.13326f82.js","components/Map.svelte"],"Map.13326f82.js.map","Map.13326f82.css","components/Map.svelte"],"./List.svelte":[["List.a959738d.js","components/List.svelte"],"List.a959738d.js.map","List.a959738d.css","components/List.svelte"],"./Waste.svelte":[["Waste.e46be673.js","components/Waste.svelte"],"Waste.e46be673.js.map","Waste.e46be673.css","components/Waste.svelte"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _index.get_store_value;
  }
});
exports.readable = readable;
exports.readonly = readonly;
exports.writable = writable;
var _index = require("../internal/index.mjs");
const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier} [start]
 */
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=} start
 */
function writable(value, start = _index.noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, _index.safe_not_equal)(value, new_value)) {
      value = new_value;
      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = _index.noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || _index.noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return {
    set,
    update,
    subscribe
  };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = _index.noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = (0, _index.is_function)(result) ? result : _index.noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => (0, _index.subscribe)(store, value => {
      values[i] = value;
      pending &= ~(1 << i);
      if (started) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    started = true;
    sync();
    return function stop() {
      (0, _index.run_all)(unsubscribers);
      cleanup();
      // We need to set this to false because callbacks can still happen despite having unsubscribed:
      // Callbacks might already be placed in the queue which doesn't know it should no longer
      // invoke this derived store.
      started = false;
    };
  });
}
/**
 * Takes a store and returns a new one derived from the old one that is readable.
 *
 * @param store - store to make readonly
 */
function readonly(store) {
  return {
    subscribe: store.subscribe.bind(store)
  };
}
},{"../internal/index.mjs":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/deepmerge/dist/cjs.js":[function(require,module,exports) {
'use strict';

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }
  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
},{}],"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__addDisposableResource = __addDisposableResource;
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__disposeResources = __disposeResources;
exports.__esDecorate = __esDecorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__propKey = __propKey;
exports.__read = __read;
exports.__rest = __rest;
exports.__runInitializers = __runInitializers;
exports.__setFunctionName = __setFunctionName;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
exports.default = void 0;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = exports.__createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function (e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
var _default = exports.default = {
  __extends: __extends,
  __assign: __assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources
};
},{}],"../node_modules/@formatjs/icu-messageformat-parser/lib/error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorKind = void 0;
var ErrorKind;
(function (ErrorKind) {
  /** Argument is unclosed (e.g. `{0`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  /** Argument is empty (e.g. `{}`). */
  ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
  /** Argument is malformed (e.g. `{foo!}``) */
  ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
  /** Expect an argument type (e.g. `{foo,}`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
  /** Unsupported argument type (e.g. `{foo,foo}`) */
  ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
  /** Expect an argument style (e.g. `{foo, number, }`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
  /** The number skeleton is invalid. */
  ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
  /** The date time skeleton is invalid. */
  ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
  /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
  ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
  /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
  ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
  /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
  ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  /** Missing select argument options (e.g. `{foo, select}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  /**
   * Expecting a message fragment after the `plural` or `selectordinal` selector
   * (e.g. `{foo, plural, one}`)
   */
  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  /**
   * Duplicate selectors in `plural` or `selectordinal` argument.
   * (e.g. {foo, plural, one {#} one {#}})
   */
  ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  /** Duplicate selectors in `select` argument.
   * (e.g. {foo, select, apple {apple} apple {apple}})
   */
  ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  /** Plural or select argument option must have `other` clause. */
  ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
  /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
  ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
  /** The tag name is invalid. (e.g. `<123>foo</123>`) */
  ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
  /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
  ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
  /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
  ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (exports.ErrorKind = ErrorKind = {}));
},{}],"../node_modules/@formatjs/icu-messageformat-parser/lib/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE = exports.SKELETON_TYPE = void 0;
exports.createLiteralElement = createLiteralElement;
exports.createNumberElement = createNumberElement;
exports.isArgumentElement = isArgumentElement;
exports.isDateElement = isDateElement;
exports.isDateTimeSkeleton = isDateTimeSkeleton;
exports.isLiteralElement = isLiteralElement;
exports.isNumberElement = isNumberElement;
exports.isNumberSkeleton = isNumberSkeleton;
exports.isPluralElement = isPluralElement;
exports.isPoundElement = isPoundElement;
exports.isSelectElement = isSelectElement;
exports.isTagElement = isTagElement;
exports.isTimeElement = isTimeElement;
var TYPE;
(function (TYPE) {
  /**
   * Raw text
   */
  TYPE[TYPE["literal"] = 0] = "literal";
  /**
   * Variable w/o any format, e.g `var` in `this is a {var}`
   */
  TYPE[TYPE["argument"] = 1] = "argument";
  /**
   * Variable w/ number format
   */
  TYPE[TYPE["number"] = 2] = "number";
  /**
   * Variable w/ date format
   */
  TYPE[TYPE["date"] = 3] = "date";
  /**
   * Variable w/ time format
   */
  TYPE[TYPE["time"] = 4] = "time";
  /**
   * Variable w/ select format
   */
  TYPE[TYPE["select"] = 5] = "select";
  /**
   * Variable w/ plural format
   */
  TYPE[TYPE["plural"] = 6] = "plural";
  /**
   * Only possible within plural argument.
   * This is the `#` symbol that will be substituted with the count.
   */
  TYPE[TYPE["pound"] = 7] = "pound";
  /**
   * XML-like tag
   */
  TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (exports.TYPE = TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
  SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
  SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (exports.SKELETON_TYPE = SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
  return el.type === TYPE.literal;
}
function isArgumentElement(el) {
  return el.type === TYPE.argument;
}
function isNumberElement(el) {
  return el.type === TYPE.number;
}
function isDateElement(el) {
  return el.type === TYPE.date;
}
function isTimeElement(el) {
  return el.type === TYPE.time;
}
function isSelectElement(el) {
  return el.type === TYPE.select;
}
function isPluralElement(el) {
  return el.type === TYPE.plural;
}
function isPoundElement(el) {
  return el.type === TYPE.pound;
}
function isTagElement(el) {
  return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
  return {
    type: TYPE.literal,
    value: value
  };
}
function createNumberElement(value, style) {
  return {
    type: TYPE.number,
    value: value,
    style: style
  };
}
},{}],"../node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITE_SPACE_REGEX = exports.SPACE_SEPARATOR_REGEX = void 0;
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = exports.SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = exports.WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;
},{}],"../node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDateTimeSkeleton = parseDateTimeSkeleton;
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
  var result = {};
  skeleton.replace(DATE_TIME_REGEX, function (match) {
    var len = match.length;
    switch (match[0]) {
      // Era
      case 'G':
        result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
        break;
      // Year
      case 'y':
        result.year = len === 2 ? '2-digit' : 'numeric';
        break;
      case 'Y':
      case 'u':
      case 'U':
      case 'r':
        throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
      // Quarter
      case 'q':
      case 'Q':
        throw new RangeError('`q/Q` (quarter) patterns are not supported');
      // Month
      case 'M':
      case 'L':
        result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
        break;
      // Week
      case 'w':
      case 'W':
        throw new RangeError('`w/W` (week) patterns are not supported');
      case 'd':
        result.day = ['numeric', '2-digit'][len - 1];
        break;
      case 'D':
      case 'F':
      case 'g':
        throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
      // Weekday
      case 'E':
        result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
        break;
      case 'e':
        if (len < 4) {
          throw new RangeError('`e..eee` (weekday) patterns are not supported');
        }
        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;
      case 'c':
        if (len < 4) {
          throw new RangeError('`c..ccc` (weekday) patterns are not supported');
        }
        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;
      // Period
      case 'a':
        // AM, PM
        result.hour12 = true;
        break;
      case 'b': // am, pm, noon, midnight
      case 'B':
        // flexible day periods
        throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
      // Hour
      case 'h':
        result.hourCycle = 'h12';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'H':
        result.hourCycle = 'h23';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'K':
        result.hourCycle = 'h11';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'k':
        result.hourCycle = 'h24';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;
      case 'j':
      case 'J':
      case 'C':
        throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
      // Minute
      case 'm':
        result.minute = ['numeric', '2-digit'][len - 1];
        break;
      // Second
      case 's':
        result.second = ['numeric', '2-digit'][len - 1];
        break;
      case 'S':
      case 'A':
        throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
      // Zone
      case 'z':
        // 1..3, 4: specific non-location format
        result.timeZoneName = len < 4 ? 'short' : 'long';
        break;
      case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
      case 'O': // 1, 4: milliseconds in day short, long
      case 'v': // 1, 4: generic non-location format
      case 'V': // 1, 2, 3, 4: time zone ID or city
      case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
      case 'x':
        // 1, 2, 3, 4: The ISO8601 varios formats
        throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
    }
    return '';
  });
  return result;
}
},{}],"../node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITE_SPACE_REGEX = void 0;
// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = exports.WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
},{}],"../node_modules/@formatjs/icu-skeleton-parser/lib/number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNumberSkeleton = parseNumberSkeleton;
exports.parseNumberSkeletonFromString = parseNumberSkeletonFromString;
var _tslib = require("tslib");
var _regex = require("./regex.generated");
function parseNumberSkeletonFromString(skeleton) {
  if (skeleton.length === 0) {
    throw new Error('Number skeleton cannot be empty');
  }
  // Parse the skeleton
  var stringTokens = skeleton.split(_regex.WHITE_SPACE_REGEX).filter(function (x) {
    return x.length > 0;
  });
  var tokens = [];
  for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
    var stringToken = stringTokens_1[_i];
    var stemAndOptions = stringToken.split('/');
    if (stemAndOptions.length === 0) {
      throw new Error('Invalid number skeleton');
    }
    var stem = stemAndOptions[0],
      options = stemAndOptions.slice(1);
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
      var option = options_1[_a];
      if (option.length === 0) {
        throw new Error('Invalid number skeleton');
      }
    }
    tokens.push({
      stem: stem,
      options: options
    });
  }
  return tokens;
}
function icuUnitToEcma(unit) {
  return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
  var result = {};
  if (str[str.length - 1] === 'r') {
    result.roundingPriority = 'morePrecision';
  } else if (str[str.length - 1] === 's') {
    result.roundingPriority = 'lessPrecision';
  }
  str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
    // @@@ case
    if (typeof g2 !== 'string') {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length;
    }
    // @@@+ case
    else if (g2 === '+') {
      result.minimumSignificantDigits = g1.length;
    }
    // .### case
    else if (g1[0] === '#') {
      result.maximumSignificantDigits = g1.length;
    }
    // .@@## or .@@@ case
    else {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
    }
    return '';
  });
  return result;
}
function parseSign(str) {
  switch (str) {
    case 'sign-auto':
      return {
        signDisplay: 'auto'
      };
    case 'sign-accounting':
    case '()':
      return {
        currencySign: 'accounting'
      };
    case 'sign-always':
    case '+!':
      return {
        signDisplay: 'always'
      };
    case 'sign-accounting-always':
    case '()!':
      return {
        signDisplay: 'always',
        currencySign: 'accounting'
      };
    case 'sign-except-zero':
    case '+?':
      return {
        signDisplay: 'exceptZero'
      };
    case 'sign-accounting-except-zero':
    case '()?':
      return {
        signDisplay: 'exceptZero',
        currencySign: 'accounting'
      };
    case 'sign-never':
    case '+_':
      return {
        signDisplay: 'never'
      };
  }
}
function parseConciseScientificAndEngineeringStem(stem) {
  // Engineering
  var result;
  if (stem[0] === 'E' && stem[1] === 'E') {
    result = {
      notation: 'engineering'
    };
    stem = stem.slice(2);
  } else if (stem[0] === 'E') {
    result = {
      notation: 'scientific'
    };
    stem = stem.slice(1);
  }
  if (result) {
    var signDisplay = stem.slice(0, 2);
    if (signDisplay === '+!') {
      result.signDisplay = 'always';
      stem = stem.slice(2);
    } else if (signDisplay === '+?') {
      result.signDisplay = 'exceptZero';
      stem = stem.slice(2);
    }
    if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
      throw new Error('Malformed concise eng/scientific notation');
    }
    result.minimumIntegerDigits = stem.length;
  }
  return result;
}
function parseNotationOptions(opt) {
  var result = {};
  var signOpts = parseSign(opt);
  if (signOpts) {
    return signOpts;
  }
  return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
  var result = {};
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    switch (token.stem) {
      case 'percent':
      case '%':
        result.style = 'percent';
        continue;
      case '%x100':
        result.style = 'percent';
        result.scale = 100;
        continue;
      case 'currency':
        result.style = 'currency';
        result.currency = token.options[0];
        continue;
      case 'group-off':
      case ',_':
        result.useGrouping = false;
        continue;
      case 'precision-integer':
      case '.':
        result.maximumFractionDigits = 0;
        continue;
      case 'measure-unit':
      case 'unit':
        result.style = 'unit';
        result.unit = icuUnitToEcma(token.options[0]);
        continue;
      case 'compact-short':
      case 'K':
        result.notation = 'compact';
        result.compactDisplay = 'short';
        continue;
      case 'compact-long':
      case 'KK':
        result.notation = 'compact';
        result.compactDisplay = 'long';
        continue;
      case 'scientific':
        result = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
          notation: 'scientific'
        }), token.options.reduce(function (all, opt) {
          return (0, _tslib.__assign)((0, _tslib.__assign)({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case 'engineering':
        result = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
          notation: 'engineering'
        }), token.options.reduce(function (all, opt) {
          return (0, _tslib.__assign)((0, _tslib.__assign)({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case 'notation-simple':
        result.notation = 'standard';
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case 'unit-width-narrow':
        result.currencyDisplay = 'narrowSymbol';
        result.unitDisplay = 'narrow';
        continue;
      case 'unit-width-short':
        result.currencyDisplay = 'code';
        result.unitDisplay = 'short';
        continue;
      case 'unit-width-full-name':
        result.currencyDisplay = 'name';
        result.unitDisplay = 'long';
        continue;
      case 'unit-width-iso-code':
        result.currencyDisplay = 'symbol';
        continue;
      case 'scale':
        result.scale = parseFloat(token.options[0]);
        continue;
      case 'rounding-mode-floor':
        result.roundingMode = 'floor';
        continue;
      case 'rounding-mode-ceiling':
        result.roundingMode = 'ceil';
        continue;
      case 'rounding-mode-down':
        result.roundingMode = 'trunc';
        continue;
      case 'rounding-mode-up':
        result.roundingMode = 'expand';
        continue;
      case 'rounding-mode-half-even':
        result.roundingMode = 'halfEven';
        continue;
      case 'rounding-mode-half-down':
        result.roundingMode = 'halfTrunc';
        continue;
      case 'rounding-mode-half-up':
        result.roundingMode = 'halfExpand';
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case 'integer-width':
        if (token.options.length > 1) {
          throw new RangeError('integer-width stems only accept a single optional option');
        }
        token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
          if (g1) {
            result.minimumIntegerDigits = g2.length;
          } else if (g3 && g4) {
            throw new Error('We currently do not support maximum integer digits');
          } else if (g5) {
            throw new Error('We currently do not support exact integer digits');
          }
          return '';
        });
        continue;
    }
    // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
    if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
      result.minimumIntegerDigits = token.stem.length;
      continue;
    }
    if (FRACTION_PRECISION_REGEX.test(token.stem)) {
      // Precision
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
      // precision-integer case
      if (token.options.length > 1) {
        throw new RangeError('Fraction-precision stems only accept a single optional option');
      }
      token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
        // .000* case (before ICU67 it was .000+)
        if (g2 === '*') {
          result.minimumFractionDigits = g1.length;
        }
        // .### case
        else if (g3 && g3[0] === '#') {
          result.maximumFractionDigits = g3.length;
        }
        // .00## case
        else if (g4 && g5) {
          result.minimumFractionDigits = g4.length;
          result.maximumFractionDigits = g4.length + g5.length;
        } else {
          result.minimumFractionDigits = g1.length;
          result.maximumFractionDigits = g1.length;
        }
        return '';
      });
      var opt = token.options[0];
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
      if (opt === 'w') {
        result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
          trailingZeroDisplay: 'stripIfInteger'
        });
      } else if (opt) {
        result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), parseSignificantPrecision(opt));
      }
      continue;
    }
    // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
    if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
      result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), parseSignificantPrecision(token.stem));
      continue;
    }
    var signOpts = parseSign(token.stem);
    if (signOpts) {
      result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), signOpts);
    }
    var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
    if (conciseScientificAndEngineeringOpts) {
      result = (0, _tslib.__assign)((0, _tslib.__assign)({}, result), conciseScientificAndEngineeringOpts);
    }
  }
  return result;
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","./regex.generated":"../node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js"}],"../node_modules/@formatjs/icu-skeleton-parser/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dateTime = require("./date-time");
Object.keys(_dateTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dateTime[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dateTime[key];
    }
  });
});
var _number = require("./number");
Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _number[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _number[key];
    }
  });
});
},{"./date-time":"../node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js","./number":"../node_modules/@formatjs/icu-skeleton-parser/lib/number.js"}],"../node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeData = void 0;
// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = exports.timeData = {
  "001": ["H", "h"],
  "AC": ["H", "h", "hb", "hB"],
  "AD": ["H", "hB"],
  "AE": ["h", "hB", "hb", "H"],
  "AF": ["H", "hb", "hB", "h"],
  "AG": ["h", "hb", "H", "hB"],
  "AI": ["H", "h", "hb", "hB"],
  "AL": ["h", "H", "hB"],
  "AM": ["H", "hB"],
  "AO": ["H", "hB"],
  "AR": ["H", "h", "hB", "hb"],
  "AS": ["h", "H"],
  "AT": ["H", "hB"],
  "AU": ["h", "hb", "H", "hB"],
  "AW": ["H", "hB"],
  "AX": ["H"],
  "AZ": ["H", "hB", "h"],
  "BA": ["H", "hB", "h"],
  "BB": ["h", "hb", "H", "hB"],
  "BD": ["h", "hB", "H"],
  "BE": ["H", "hB"],
  "BF": ["H", "hB"],
  "BG": ["H", "hB", "h"],
  "BH": ["h", "hB", "hb", "H"],
  "BI": ["H", "h"],
  "BJ": ["H", "hB"],
  "BL": ["H", "hB"],
  "BM": ["h", "hb", "H", "hB"],
  "BN": ["hb", "hB", "h", "H"],
  "BO": ["H", "hB", "h", "hb"],
  "BQ": ["H"],
  "BR": ["H", "hB"],
  "BS": ["h", "hb", "H", "hB"],
  "BT": ["h", "H"],
  "BW": ["H", "h", "hb", "hB"],
  "BY": ["H", "h"],
  "BZ": ["H", "h", "hb", "hB"],
  "CA": ["h", "hb", "H", "hB"],
  "CC": ["H", "h", "hb", "hB"],
  "CD": ["hB", "H"],
  "CF": ["H", "h", "hB"],
  "CG": ["H", "hB"],
  "CH": ["H", "hB", "h"],
  "CI": ["H", "hB"],
  "CK": ["H", "h", "hb", "hB"],
  "CL": ["H", "h", "hB", "hb"],
  "CM": ["H", "h", "hB"],
  "CN": ["H", "hB", "hb", "h"],
  "CO": ["h", "H", "hB", "hb"],
  "CP": ["H"],
  "CR": ["H", "h", "hB", "hb"],
  "CU": ["H", "h", "hB", "hb"],
  "CV": ["H", "hB"],
  "CW": ["H", "hB"],
  "CX": ["H", "h", "hb", "hB"],
  "CY": ["h", "H", "hb", "hB"],
  "CZ": ["H"],
  "DE": ["H", "hB"],
  "DG": ["H", "h", "hb", "hB"],
  "DJ": ["h", "H"],
  "DK": ["H"],
  "DM": ["h", "hb", "H", "hB"],
  "DO": ["h", "H", "hB", "hb"],
  "DZ": ["h", "hB", "hb", "H"],
  "EA": ["H", "h", "hB", "hb"],
  "EC": ["H", "hB", "h", "hb"],
  "EE": ["H", "hB"],
  "EG": ["h", "hB", "hb", "H"],
  "EH": ["h", "hB", "hb", "H"],
  "ER": ["h", "H"],
  "ES": ["H", "hB", "h", "hb"],
  "ET": ["hB", "hb", "h", "H"],
  "FI": ["H"],
  "FJ": ["h", "hb", "H", "hB"],
  "FK": ["H", "h", "hb", "hB"],
  "FM": ["h", "hb", "H", "hB"],
  "FO": ["H", "h"],
  "FR": ["H", "hB"],
  "GA": ["H", "hB"],
  "GB": ["H", "h", "hb", "hB"],
  "GD": ["h", "hb", "H", "hB"],
  "GE": ["H", "hB", "h"],
  "GF": ["H", "hB"],
  "GG": ["H", "h", "hb", "hB"],
  "GH": ["h", "H"],
  "GI": ["H", "h", "hb", "hB"],
  "GL": ["H", "h"],
  "GM": ["h", "hb", "H", "hB"],
  "GN": ["H", "hB"],
  "GP": ["H", "hB"],
  "GQ": ["H", "hB", "h", "hb"],
  "GR": ["h", "H", "hb", "hB"],
  "GT": ["H", "h", "hB", "hb"],
  "GU": ["h", "hb", "H", "hB"],
  "GW": ["H", "hB"],
  "GY": ["h", "hb", "H", "hB"],
  "HK": ["h", "hB", "hb", "H"],
  "HN": ["H", "h", "hB", "hb"],
  "HR": ["H", "hB"],
  "HU": ["H", "h"],
  "IC": ["H", "h", "hB", "hb"],
  "ID": ["H"],
  "IE": ["H", "h", "hb", "hB"],
  "IL": ["H", "hB"],
  "IM": ["H", "h", "hb", "hB"],
  "IN": ["h", "H"],
  "IO": ["H", "h", "hb", "hB"],
  "IQ": ["h", "hB", "hb", "H"],
  "IR": ["hB", "H"],
  "IS": ["H"],
  "IT": ["H", "hB"],
  "JE": ["H", "h", "hb", "hB"],
  "JM": ["h", "hb", "H", "hB"],
  "JO": ["h", "hB", "hb", "H"],
  "JP": ["H", "K", "h"],
  "KE": ["hB", "hb", "H", "h"],
  "KG": ["H", "h", "hB", "hb"],
  "KH": ["hB", "h", "H", "hb"],
  "KI": ["h", "hb", "H", "hB"],
  "KM": ["H", "h", "hB", "hb"],
  "KN": ["h", "hb", "H", "hB"],
  "KP": ["h", "H", "hB", "hb"],
  "KR": ["h", "H", "hB", "hb"],
  "KW": ["h", "hB", "hb", "H"],
  "KY": ["h", "hb", "H", "hB"],
  "KZ": ["H", "hB"],
  "LA": ["H", "hb", "hB", "h"],
  "LB": ["h", "hB", "hb", "H"],
  "LC": ["h", "hb", "H", "hB"],
  "LI": ["H", "hB", "h"],
  "LK": ["H", "h", "hB", "hb"],
  "LR": ["h", "hb", "H", "hB"],
  "LS": ["h", "H"],
  "LT": ["H", "h", "hb", "hB"],
  "LU": ["H", "h", "hB"],
  "LV": ["H", "hB", "hb", "h"],
  "LY": ["h", "hB", "hb", "H"],
  "MA": ["H", "h", "hB", "hb"],
  "MC": ["H", "hB"],
  "MD": ["H", "hB"],
  "ME": ["H", "hB", "h"],
  "MF": ["H", "hB"],
  "MG": ["H", "h"],
  "MH": ["h", "hb", "H", "hB"],
  "MK": ["H", "h", "hb", "hB"],
  "ML": ["H"],
  "MM": ["hB", "hb", "H", "h"],
  "MN": ["H", "h", "hb", "hB"],
  "MO": ["h", "hB", "hb", "H"],
  "MP": ["h", "hb", "H", "hB"],
  "MQ": ["H", "hB"],
  "MR": ["h", "hB", "hb", "H"],
  "MS": ["H", "h", "hb", "hB"],
  "MT": ["H", "h"],
  "MU": ["H", "h"],
  "MV": ["H", "h"],
  "MW": ["h", "hb", "H", "hB"],
  "MX": ["H", "h", "hB", "hb"],
  "MY": ["hb", "hB", "h", "H"],
  "MZ": ["H", "hB"],
  "NA": ["h", "H", "hB", "hb"],
  "NC": ["H", "hB"],
  "NE": ["H"],
  "NF": ["H", "h", "hb", "hB"],
  "NG": ["H", "h", "hb", "hB"],
  "NI": ["H", "h", "hB", "hb"],
  "NL": ["H", "hB"],
  "NO": ["H", "h"],
  "NP": ["H", "h", "hB"],
  "NR": ["H", "h", "hb", "hB"],
  "NU": ["H", "h", "hb", "hB"],
  "NZ": ["h", "hb", "H", "hB"],
  "OM": ["h", "hB", "hb", "H"],
  "PA": ["h", "H", "hB", "hb"],
  "PE": ["H", "hB", "h", "hb"],
  "PF": ["H", "h", "hB"],
  "PG": ["h", "H"],
  "PH": ["h", "hB", "hb", "H"],
  "PK": ["h", "hB", "H"],
  "PL": ["H", "h"],
  "PM": ["H", "hB"],
  "PN": ["H", "h", "hb", "hB"],
  "PR": ["h", "H", "hB", "hb"],
  "PS": ["h", "hB", "hb", "H"],
  "PT": ["H", "hB"],
  "PW": ["h", "H"],
  "PY": ["H", "h", "hB", "hb"],
  "QA": ["h", "hB", "hb", "H"],
  "RE": ["H", "hB"],
  "RO": ["H", "hB"],
  "RS": ["H", "hB", "h"],
  "RU": ["H"],
  "RW": ["H", "h"],
  "SA": ["h", "hB", "hb", "H"],
  "SB": ["h", "hb", "H", "hB"],
  "SC": ["H", "h", "hB"],
  "SD": ["h", "hB", "hb", "H"],
  "SE": ["H"],
  "SG": ["h", "hb", "H", "hB"],
  "SH": ["H", "h", "hb", "hB"],
  "SI": ["H", "hB"],
  "SJ": ["H"],
  "SK": ["H"],
  "SL": ["h", "hb", "H", "hB"],
  "SM": ["H", "h", "hB"],
  "SN": ["H", "h", "hB"],
  "SO": ["h", "H"],
  "SR": ["H", "hB"],
  "SS": ["h", "hb", "H", "hB"],
  "ST": ["H", "hB"],
  "SV": ["H", "h", "hB", "hb"],
  "SX": ["H", "h", "hb", "hB"],
  "SY": ["h", "hB", "hb", "H"],
  "SZ": ["h", "hb", "H", "hB"],
  "TA": ["H", "h", "hb", "hB"],
  "TC": ["h", "hb", "H", "hB"],
  "TD": ["h", "H", "hB"],
  "TF": ["H", "h", "hB"],
  "TG": ["H", "hB"],
  "TH": ["H", "h"],
  "TJ": ["H", "h"],
  "TL": ["H", "hB", "hb", "h"],
  "TM": ["H", "h"],
  "TN": ["h", "hB", "hb", "H"],
  "TO": ["h", "H"],
  "TR": ["H", "hB"],
  "TT": ["h", "hb", "H", "hB"],
  "TW": ["hB", "hb", "h", "H"],
  "TZ": ["hB", "hb", "H", "h"],
  "UA": ["H", "hB", "h"],
  "UG": ["hB", "hb", "H", "h"],
  "UM": ["h", "hb", "H", "hB"],
  "US": ["h", "hb", "H", "hB"],
  "UY": ["H", "h", "hB", "hb"],
  "UZ": ["H", "hB", "h"],
  "VA": ["H", "h", "hB"],
  "VC": ["h", "hb", "H", "hB"],
  "VE": ["h", "H", "hB", "hb"],
  "VG": ["h", "hb", "H", "hB"],
  "VI": ["h", "hb", "H", "hB"],
  "VN": ["H", "h"],
  "VU": ["h", "H"],
  "WF": ["H", "hB"],
  "WS": ["h", "H"],
  "XK": ["H", "hB", "h"],
  "YE": ["h", "hB", "hb", "H"],
  "YT": ["H", "hB"],
  "ZA": ["H", "h", "hb", "hB"],
  "ZM": ["h", "hb", "H", "hB"],
  "ZW": ["H", "h"],
  "af-ZA": ["H", "h", "hB", "hb"],
  "ar-001": ["h", "hB", "hb", "H"],
  "ca-ES": ["H", "h", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  "es-BO": ["H", "h", "hB", "hb"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-EC": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "es-PE": ["H", "h", "hB", "hb"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "hi-IN": ["hB", "h", "H"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  "ta-IN": ["hB", "h", "hb", "H"],
  "te-IN": ["hB", "h", "H"],
  "zu-ZA": ["H", "hB", "hb", "h"]
};
},{}],"../node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBestPattern = getBestPattern;
var _timeData = require("./time-data.generated");
/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
  var skeletonCopy = '';
  for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
    var patternChar = skeleton.charAt(patternPos);
    if (patternChar === 'j') {
      var extraLength = 0;
      while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
        extraLength++;
        patternPos++;
      }
      var hourLen = 1 + (extraLength & 1);
      var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
      var dayPeriodChar = 'a';
      var hourChar = getDefaultHourSymbolFromLocale(locale);
      if (hourChar == 'H' || hourChar == 'k') {
        dayPeriodLen = 0;
      }
      while (dayPeriodLen-- > 0) {
        skeletonCopy += dayPeriodChar;
      }
      while (hourLen-- > 0) {
        skeletonCopy = hourChar + skeletonCopy;
      }
    } else if (patternChar === 'J') {
      skeletonCopy += 'H';
    } else {
      skeletonCopy += patternChar;
    }
  }
  return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
  var hourCycle = locale.hourCycle;
  if (hourCycle === undefined &&
  // @ts-ignore hourCycle(s) is not identified yet
  locale.hourCycles &&
  // @ts-ignore
  locale.hourCycles.length) {
    // @ts-ignore
    hourCycle = locale.hourCycles[0];
  }
  if (hourCycle) {
    switch (hourCycle) {
      case 'h24':
        return 'k';
      case 'h23':
        return 'H';
      case 'h12':
        return 'h';
      case 'h11':
        return 'K';
      default:
        throw new Error('Invalid hourCycle');
    }
  }
  // TODO: Once hourCycle is fully supported remove the following with data generation
  var languageTag = locale.language;
  var regionTag;
  if (languageTag !== 'root') {
    regionTag = locale.maximize().region;
  }
  var hourCycles = _timeData.timeData[regionTag || ''] || _timeData.timeData[languageTag || ''] || _timeData.timeData["".concat(languageTag, "-001")] || _timeData.timeData['001'];
  return hourCycles[0];
}
},{"./time-data.generated":"../node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js"}],"../node_modules/@formatjs/icu-messageformat-parser/lib/parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;
var _tslib = require("tslib");
var _error = require("./error");
var _types = require("./types");
var _regex = require("./regex.generated");
var _icuSkeletonParser = require("@formatjs/icu-skeleton-parser");
var _dateTimePatternGenerator = require("./date-time-pattern-generator");
var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(_regex.SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(_regex.SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
  return {
    start: start,
    end: end
  };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function (n) {
  return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
};
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
  var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
  /**
   * legacy Edge or Xbox One browser
   * Unicode flag support: supported
   * Pattern_Syntax support: not supported
   * See https://github.com/formatjs/formatjs/issues/2822
   */
  REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
} catch (_) {
  REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith ?
// Native
function startsWith(s, search, position) {
  return s.startsWith(search, position);
} :
// For IE11
function startsWith(s, search, position) {
  return s.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint :
// IE11
function fromCodePoint() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  var elements = '';
  var length = codePoints.length;
  var i = 0;
  var code;
  while (length > i) {
    code = codePoints[i++];
    if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
    elements += code < 0x10000 ? String.fromCharCode(code) : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00);
  }
  return elements;
};
var fromEntries =
// native
hasNativeFromEntries ? Object.fromEntries :
// Ponyfill
function fromEntries(entries) {
  var obj = {};
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i],
      k = _a[0],
      v = _a[1];
    obj[k] = v;
  }
  return obj;
};
var codePointAt = hasNativeCodePointAt ?
// Native
function codePointAt(s, index) {
  return s.codePointAt(index);
} :
// IE 11
function codePointAt(s, index) {
  var size = s.length;
  if (index < 0 || index >= size) {
    return undefined;
  }
  var first = s.charCodeAt(index);
  var second;
  return first < 0xd800 || first > 0xdbff || index + 1 === size || (second = s.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? first : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};
var trimStart = hasTrimStart ?
// Native
function trimStart(s) {
  return s.trimStart();
} :
// Ponyfill
function trimStart(s) {
  return s.replace(SPACE_SEPARATOR_START_REGEX, '');
};
var trimEnd = hasTrimEnd ?
// Native
function trimEnd(s) {
  return s.trimEnd();
} :
// Ponyfill
function trimEnd(s) {
  return s.replace(SPACE_SEPARATOR_END_REGEX, '');
};
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
  return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
  // Native
  var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var _a;
    IDENTIFIER_PREFIX_RE_1.lastIndex = index;
    var match = IDENTIFIER_PREFIX_RE_1.exec(s);
    return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
  };
} else {
  // IE11
  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var match = [];
    while (true) {
      var c = codePointAt(s, index);
      if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
        break;
      }
      match.push(c);
      index += c >= 0x10000 ? 2 : 1;
    }
    return fromCodePoint.apply(void 0, match);
  };
}
var Parser = exports.Parser = /** @class */function () {
  function Parser(message, options) {
    if (options === void 0) {
      options = {};
    }
    this.message = message;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!options.ignoreTag;
    this.locale = options.locale;
    this.requiresOtherClause = !!options.requiresOtherClause;
    this.shouldParseSkeletons = !!options.shouldParseSkeletons;
  }
  Parser.prototype.parse = function () {
    if (this.offset() !== 0) {
      throw Error('parser can only be used once');
    }
    return this.parseMessage(0, '', false);
  };
  Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
    var elements = [];
    while (!this.isEOF()) {
      var char = this.char();
      if (char === 123 /* `{` */) {
        var result = this.parseArgument(nestingLevel, expectingCloseTag);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else if (char === 125 /* `}` */ && nestingLevel > 0) {
        break;
      } else if (char === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
        var position = this.clonePosition();
        this.bump();
        elements.push({
          type: _types.TYPE.pound,
          location: createLocation(position, this.clonePosition())
        });
      } else if (char === 60 /* `<` */ && !this.ignoreTag && this.peek() === 47 // char code for '/'
      ) {
        if (expectingCloseTag) {
          break;
        } else {
          return this.error(_error.ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
        }
      } else if (char === 60 /* `<` */ && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
        var result = this.parseTag(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else {
        var result = this.parseLiteral(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      }
    }
    return {
      val: elements,
      err: null
    };
  };
  /**
   * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
   * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
   * are accepted:
   *
   * ```
   * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
   * tagName ::= [a-z] (PENChar)*
   * PENChar ::=
   *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
   *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
   *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
   * ```
   *
   * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
   * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
   * since other tag-based engines like React allow it
   */
  Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
    var startPosition = this.clonePosition();
    this.bump(); // `<`
    var tagName = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf('/>')) {
      // Self closing tag
      return {
        val: {
          type: _types.TYPE.literal,
          value: "<".concat(tagName, "/>"),
          location: createLocation(startPosition, this.clonePosition())
        },
        err: null
      };
    } else if (this.bumpIf('>')) {
      var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
      if (childrenResult.err) {
        return childrenResult;
      }
      var children = childrenResult.val;
      // Expecting a close tag
      var endTagStartPosition = this.clonePosition();
      if (this.bumpIf('</')) {
        if (this.isEOF() || !_isAlpha(this.char())) {
          return this.error(_error.ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        var closingTagNameStartPosition = this.clonePosition();
        var closingTagName = this.parseTagName();
        if (tagName !== closingTagName) {
          return this.error(_error.ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (!this.bumpIf('>')) {
          return this.error(_error.ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        return {
          val: {
            type: _types.TYPE.tag,
            value: tagName,
            children: children,
            location: createLocation(startPosition, this.clonePosition())
          },
          err: null
        };
      } else {
        return this.error(_error.ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
      }
    } else {
      return this.error(_error.ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
    }
  };
  /**
   * This method assumes that the caller has peeked ahead for the first tag character.
   */
  Parser.prototype.parseTagName = function () {
    var startOffset = this.offset();
    this.bump(); // the first tag name character
    while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
      this.bump();
    }
    return this.message.slice(startOffset, this.offset());
  };
  Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
    var start = this.clonePosition();
    var value = '';
    while (true) {
      var parseQuoteResult = this.tryParseQuote(parentArgType);
      if (parseQuoteResult) {
        value += parseQuoteResult;
        continue;
      }
      var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
      if (parseUnquotedResult) {
        value += parseUnquotedResult;
        continue;
      }
      var parseLeftAngleResult = this.tryParseLeftAngleBracket();
      if (parseLeftAngleResult) {
        value += parseLeftAngleResult;
        continue;
      }
      break;
    }
    var location = createLocation(start, this.clonePosition());
    return {
      val: {
        type: _types.TYPE.literal,
        value: value,
        location: location
      },
      err: null
    };
  };
  Parser.prototype.tryParseLeftAngleBracket = function () {
    if (!this.isEOF() && this.char() === 60 /* `<` */ && (this.ignoreTag ||
    // If at the opening tag or closing tag position, bail.
    !_isAlphaOrSlash(this.peek() || 0))) {
      this.bump(); // `<`
      return '<';
    }
    return null;
  };
  /**
   * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
   * a character that requires quoting (that is, "only where needed"), and works the same in
   * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
   */
  Parser.prototype.tryParseQuote = function (parentArgType) {
    if (this.isEOF() || this.char() !== 39 /* `'` */) {
      return null;
    }
    // Parse escaped char following the apostrophe, or early return if there is no escaped char.
    // Check if is valid escaped character
    switch (this.peek()) {
      case 39 /* `'` */:
        // double quote, should return as a single quote.
        this.bump();
        this.bump();
        return "'";
      // '{', '<', '>', '}'
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        // '#'
        if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
          break;
        }
        return null;
      default:
        return null;
    }
    this.bump(); // apostrophe
    var codePoints = [this.char()]; // escaped char
    this.bump();
    // read chars until the optional closing apostrophe is found
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch === 39 /* `'` */) {
        if (this.peek() === 39 /* `'` */) {
          codePoints.push(39);
          // Bump one more time because we need to skip 2 characters.
          this.bump();
        } else {
          // Optional closing apostrophe.
          this.bump();
          break;
        }
      } else {
        codePoints.push(ch);
      }
      this.bump();
    }
    return fromCodePoint.apply(void 0, codePoints);
  };
  Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
    if (this.isEOF()) {
      return null;
    }
    var ch = this.char();
    if (ch === 60 /* `<` */ || ch === 123 /* `{` */ || ch === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal') || ch === 125 /* `}` */ && nestingLevel > 0) {
      return null;
    } else {
      this.bump();
      return fromCodePoint(ch);
    }
  };
  Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
    var openingBracePosition = this.clonePosition();
    this.bump(); // `{`
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(_error.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    if (this.char() === 125 /* `}` */) {
      this.bump();
      return this.error(_error.ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    // argument name
    var value = this.parseIdentifierIfPossible().value;
    if (!value) {
      return this.error(_error.ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(_error.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    switch (this.char()) {
      // Simple argument: `{name}`
      case 125 /* `}` */:
        {
          this.bump(); // `}`
          return {
            val: {
              type: _types.TYPE.argument,
              // value does not include the opening and closing braces.
              value: value,
              location: createLocation(openingBracePosition, this.clonePosition())
            },
            err: null
          };
        }
      // Argument with options: `{name, format, ...}`
      case 44 /* `,` */:
        {
          this.bump(); // `,`
          this.bumpSpace();
          if (this.isEOF()) {
            return this.error(_error.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
        }
      default:
        return this.error(_error.ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
  };
  /**
   * Advance the parser until the end of the identifier, if it is currently on
   * an identifier character. Return an empty string otherwise.
   */
  Parser.prototype.parseIdentifierIfPossible = function () {
    var startingPosition = this.clonePosition();
    var startOffset = this.offset();
    var value = matchIdentifierAtIndex(this.message, startOffset);
    var endOffset = startOffset + value.length;
    this.bumpTo(endOffset);
    var endPosition = this.clonePosition();
    var location = createLocation(startingPosition, endPosition);
    return {
      value: value,
      location: location
    };
  };
  Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
    var _a;
    // Parse this range:
    // {name, type, style}
    //        ^---^
    var typeStartPosition = this.clonePosition();
    var argType = this.parseIdentifierIfPossible().value;
    var typeEndPosition = this.clonePosition();
    switch (argType) {
      case '':
        // Expecting a style string number, date, time, plural, selectordinal, or select.
        return this.error(_error.ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
      case 'number':
      case 'date':
      case 'time':
        {
          // Parse this range:
          // {name, number, style}
          //              ^-------^
          this.bumpSpace();
          var styleAndLocation = null;
          if (this.bumpIf(',')) {
            this.bumpSpace();
            var styleStartPosition = this.clonePosition();
            var result = this.parseSimpleArgStyleIfPossible();
            if (result.err) {
              return result;
            }
            var style = trimEnd(result.val);
            if (style.length === 0) {
              return this.error(_error.ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var styleLocation = createLocation(styleStartPosition, this.clonePosition());
            styleAndLocation = {
              style: style,
              styleLocation: styleLocation
            };
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_1 = createLocation(openingBracePosition, this.clonePosition());
          // Extract style or skeleton
          if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
            // Skeleton starts with `::`.
            var skeleton = trimStart(styleAndLocation.style.slice(2));
            if (argType === 'number') {
              var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
              if (result.err) {
                return result;
              }
              return {
                val: {
                  type: _types.TYPE.number,
                  value: value,
                  location: location_1,
                  style: result.val
                },
                err: null
              };
            } else {
              if (skeleton.length === 0) {
                return this.error(_error.ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
              }
              var dateTimePattern = skeleton;
              // Get "best match" pattern only if locale is passed, if not, let it
              // pass as-is where `parseDateTimeSkeleton()` will throw an error
              // for unsupported patterns.
              if (this.locale) {
                dateTimePattern = (0, _dateTimePatternGenerator.getBestPattern)(skeleton, this.locale);
              }
              var style = {
                type: _types.SKELETON_TYPE.dateTime,
                pattern: dateTimePattern,
                location: styleAndLocation.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? (0, _icuSkeletonParser.parseDateTimeSkeleton)(dateTimePattern) : {}
              };
              var type = argType === 'date' ? _types.TYPE.date : _types.TYPE.time;
              return {
                val: {
                  type: type,
                  value: value,
                  location: location_1,
                  style: style
                },
                err: null
              };
            }
          }
          // Regular style or no style.
          return {
            val: {
              type: argType === 'number' ? _types.TYPE.number : argType === 'date' ? _types.TYPE.date : _types.TYPE.time,
              value: value,
              location: location_1,
              style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
            },
            err: null
          };
        }
      case 'plural':
      case 'selectordinal':
      case 'select':
        {
          // Parse this range:
          // {name, plural, options}
          //              ^---------^
          var typeEndPosition_1 = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(',')) {
            return this.error(_error.ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, (0, _tslib.__assign)({}, typeEndPosition_1)));
          }
          this.bumpSpace();
          // Parse offset:
          // {name, plural, offset:1, options}
          //                ^-----^
          //
          // or the first option:
          //
          // {name, plural, one {...} other {...}}
          //                ^--^
          var identifierAndLocation = this.parseIdentifierIfPossible();
          var pluralOffset = 0;
          if (argType !== 'select' && identifierAndLocation.value === 'offset') {
            if (!this.bumpIf(':')) {
              return this.error(_error.ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var result = this.tryParseDecimalInteger(_error.ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _error.ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (result.err) {
              return result;
            }
            // Parse another identifier for option parsing
            this.bumpSpace();
            identifierAndLocation = this.parseIdentifierIfPossible();
            pluralOffset = result.val;
          }
          var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
          if (optionsResult.err) {
            return optionsResult;
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_2 = createLocation(openingBracePosition, this.clonePosition());
          if (argType === 'select') {
            return {
              val: {
                type: _types.TYPE.select,
                value: value,
                options: fromEntries(optionsResult.val),
                location: location_2
              },
              err: null
            };
          } else {
            return {
              val: {
                type: _types.TYPE.plural,
                value: value,
                options: fromEntries(optionsResult.val),
                offset: pluralOffset,
                pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                location: location_2
              },
              err: null
            };
          }
        }
      default:
        return this.error(_error.ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
    }
  };
  Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
    // Parse: {value, number, ::currency/GBP }
    //
    if (this.isEOF() || this.char() !== 125 /* `}` */) {
      return this.error(_error.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bump(); // `}`
    return {
      val: true,
      err: null
    };
  };
  /**
   * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
   */
  Parser.prototype.parseSimpleArgStyleIfPossible = function () {
    var nestedBraces = 0;
    var startPosition = this.clonePosition();
    while (!this.isEOF()) {
      var ch = this.char();
      switch (ch) {
        case 39 /* `'` */:
          {
            // Treat apostrophe as quoting but include it in the style part.
            // Find the end of the quoted literal text.
            this.bump();
            var apostrophePosition = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(_error.ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
            }
            this.bump();
            break;
          }
        case 123 /* `{` */:
          {
            nestedBraces += 1;
            this.bump();
            break;
          }
        case 125 /* `}` */:
          {
            if (nestedBraces > 0) {
              nestedBraces -= 1;
            } else {
              return {
                val: this.message.slice(startPosition.offset, this.offset()),
                err: null
              };
            }
            break;
          }
        default:
          this.bump();
          break;
      }
    }
    return {
      val: this.message.slice(startPosition.offset, this.offset()),
      err: null
    };
  };
  Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
    var tokens = [];
    try {
      tokens = (0, _icuSkeletonParser.parseNumberSkeletonFromString)(skeleton);
    } catch (e) {
      return this.error(_error.ErrorKind.INVALID_NUMBER_SKELETON, location);
    }
    return {
      val: {
        type: _types.SKELETON_TYPE.number,
        tokens: tokens,
        location: location,
        parsedOptions: this.shouldParseSkeletons ? (0, _icuSkeletonParser.parseNumberSkeleton)(tokens) : {}
      },
      err: null
    };
  };
  /**
   * @param nesting_level The current nesting level of messages.
   *     This can be positive when parsing message fragment in select or plural argument options.
   * @param parent_arg_type The parent argument's type.
   * @param parsed_first_identifier If provided, this is the first identifier-like selector of
   *     the argument. It is a by-product of a previous parsing attempt.
   * @param expecting_close_tag If true, this message is directly or indirectly nested inside
   *     between a pair of opening and closing tags. The nested message will not parse beyond
   *     the closing tag boundary.
   */
  Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
    var _a;
    var hasOtherClause = false;
    var options = [];
    var parsedSelectors = new Set();
    var selector = parsedFirstIdentifier.value,
      selectorLocation = parsedFirstIdentifier.location;
    // Parse:
    // one {one apple}
    // ^--^
    while (true) {
      if (selector.length === 0) {
        var startPosition = this.clonePosition();
        if (parentArgType !== 'select' && this.bumpIf('=')) {
          // Try parse `={number}` selector
          var result = this.tryParseDecimalInteger(_error.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, _error.ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (result.err) {
            return result;
          }
          selectorLocation = createLocation(startPosition, this.clonePosition());
          selector = this.message.slice(startPosition.offset, this.offset());
        } else {
          break;
        }
      }
      // Duplicate selector clauses
      if (parsedSelectors.has(selector)) {
        return this.error(parentArgType === 'select' ? _error.ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : _error.ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
      }
      if (selector === 'other') {
        hasOtherClause = true;
      }
      // Parse:
      // one {one apple}
      //     ^----------^
      this.bumpSpace();
      var openingBracePosition = this.clonePosition();
      if (!this.bumpIf('{')) {
        return this.error(parentArgType === 'select' ? _error.ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : _error.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
      }
      var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
      if (fragmentResult.err) {
        return fragmentResult;
      }
      var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
      if (argCloseResult.err) {
        return argCloseResult;
      }
      options.push([selector, {
        value: fragmentResult.val,
        location: createLocation(openingBracePosition, this.clonePosition())
      }]);
      // Keep track of the existing selectors
      parsedSelectors.add(selector);
      // Prep next selector clause.
      this.bumpSpace();
      _a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
    }
    if (options.length === 0) {
      return this.error(parentArgType === 'select' ? _error.ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : _error.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
    }
    if (this.requiresOtherClause && !hasOtherClause) {
      return this.error(_error.ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
    }
    return {
      val: options,
      err: null
    };
  };
  Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
    var sign = 1;
    var startingPosition = this.clonePosition();
    if (this.bumpIf('+')) {} else if (this.bumpIf('-')) {
      sign = -1;
    }
    var hasDigits = false;
    var decimal = 0;
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
        hasDigits = true;
        decimal = decimal * 10 + (ch - 48);
        this.bump();
      } else {
        break;
      }
    }
    var location = createLocation(startingPosition, this.clonePosition());
    if (!hasDigits) {
      return this.error(expectNumberError, location);
    }
    decimal *= sign;
    if (!isSafeInteger(decimal)) {
      return this.error(invalidNumberError, location);
    }
    return {
      val: decimal,
      err: null
    };
  };
  Parser.prototype.offset = function () {
    return this.position.offset;
  };
  Parser.prototype.isEOF = function () {
    return this.offset() === this.message.length;
  };
  Parser.prototype.clonePosition = function () {
    // This is much faster than `Object.assign` or spread.
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  /**
   * Return the code point at the current position of the parser.
   * Throws if the index is out of bound.
   */
  Parser.prototype.char = function () {
    var offset = this.position.offset;
    if (offset >= this.message.length) {
      throw Error('out of bound');
    }
    var code = codePointAt(this.message, offset);
    if (code === undefined) {
      throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
    }
    return code;
  };
  Parser.prototype.error = function (kind, location) {
    return {
      val: null,
      err: {
        kind: kind,
        message: this.message,
        location: location
      }
    };
  };
  /** Bump the parser to the next UTF-16 code unit. */
  Parser.prototype.bump = function () {
    if (this.isEOF()) {
      return;
    }
    var code = this.char();
    if (code === 10 /* '\n' */) {
      this.position.line += 1;
      this.position.column = 1;
      this.position.offset += 1;
    } else {
      this.position.column += 1;
      // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
      this.position.offset += code < 0x10000 ? 1 : 2;
    }
  };
  /**
   * If the substring starting at the current position of the parser has
   * the given prefix, then bump the parser to the character immediately
   * following the prefix and return true. Otherwise, don't bump the parser
   * and return false.
   */
  Parser.prototype.bumpIf = function (prefix) {
    if (startsWith(this.message, prefix, this.offset())) {
      for (var i = 0; i < prefix.length; i++) {
        this.bump();
      }
      return true;
    }
    return false;
  };
  /**
   * Bump the parser until the pattern character is found and return `true`.
   * Otherwise bump to the end of the file and return `false`.
   */
  Parser.prototype.bumpUntil = function (pattern) {
    var currentOffset = this.offset();
    var index = this.message.indexOf(pattern, currentOffset);
    if (index >= 0) {
      this.bumpTo(index);
      return true;
    } else {
      this.bumpTo(this.message.length);
      return false;
    }
  };
  /**
   * Bump the parser to the target offset.
   * If target offset is beyond the end of the input, bump the parser to the end of the input.
   */
  Parser.prototype.bumpTo = function (targetOffset) {
    if (this.offset() > targetOffset) {
      throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
    }
    targetOffset = Math.min(targetOffset, this.message.length);
    while (true) {
      var offset = this.offset();
      if (offset === targetOffset) {
        break;
      }
      if (offset > targetOffset) {
        throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  };
  /** advance the parser through all whitespace to the next non-whitespace code unit. */
  Parser.prototype.bumpSpace = function () {
    while (!this.isEOF() && _isWhiteSpace(this.char())) {
      this.bump();
    }
  };
  /**
   * Peek at the *next* Unicode codepoint in the input without advancing the parser.
   * If the input has been exhausted, then this returns null.
   */
  Parser.prototype.peek = function () {
    if (this.isEOF()) {
      return null;
    }
    var code = this.char();
    var offset = this.offset();
    var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
    return nextCode !== null && nextCode !== void 0 ? nextCode : null;
  };
  return Parser;
}();
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
  return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
  return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
  return c === 45 /* '-' */ || c === 46 /* '.' */ || c >= 48 && c <= 57 /* 0..9 */ || c === 95 /* '_' */ || c >= 97 && c <= 122 /** a..z */ || c >= 65 && c <= 90 /* A..Z */ || c == 0xb7 || c >= 0xc0 && c <= 0xd6 || c >= 0xd8 && c <= 0xf6 || c >= 0xf8 && c <= 0x37d || c >= 0x37f && c <= 0x1fff || c >= 0x200c && c <= 0x200d || c >= 0x203f && c <= 0x2040 || c >= 0x2070 && c <= 0x218f || c >= 0x2c00 && c <= 0x2fef || c >= 0x3001 && c <= 0xd7ff || c >= 0xf900 && c <= 0xfdcf || c >= 0xfdf0 && c <= 0xfffd || c >= 0x10000 && c <= 0xeffff;
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
  return c >= 0x0009 && c <= 0x000d || c === 0x0020 || c === 0x0085 || c >= 0x200e && c <= 0x200f || c === 0x2028 || c === 0x2029;
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
  return c >= 0x0021 && c <= 0x0023 || c === 0x0024 || c >= 0x0025 && c <= 0x0027 || c === 0x0028 || c === 0x0029 || c === 0x002a || c === 0x002b || c === 0x002c || c === 0x002d || c >= 0x002e && c <= 0x002f || c >= 0x003a && c <= 0x003b || c >= 0x003c && c <= 0x003e || c >= 0x003f && c <= 0x0040 || c === 0x005b || c === 0x005c || c === 0x005d || c === 0x005e || c === 0x0060 || c === 0x007b || c === 0x007c || c === 0x007d || c === 0x007e || c === 0x00a1 || c >= 0x00a2 && c <= 0x00a5 || c === 0x00a6 || c === 0x00a7 || c === 0x00a9 || c === 0x00ab || c === 0x00ac || c === 0x00ae || c === 0x00b0 || c === 0x00b1 || c === 0x00b6 || c === 0x00bb || c === 0x00bf || c === 0x00d7 || c === 0x00f7 || c >= 0x2010 && c <= 0x2015 || c >= 0x2016 && c <= 0x2017 || c === 0x2018 || c === 0x2019 || c === 0x201a || c >= 0x201b && c <= 0x201c || c === 0x201d || c === 0x201e || c === 0x201f || c >= 0x2020 && c <= 0x2027 || c >= 0x2030 && c <= 0x2038 || c === 0x2039 || c === 0x203a || c >= 0x203b && c <= 0x203e || c >= 0x2041 && c <= 0x2043 || c === 0x2044 || c === 0x2045 || c === 0x2046 || c >= 0x2047 && c <= 0x2051 || c === 0x2052 || c === 0x2053 || c >= 0x2055 && c <= 0x205e || c >= 0x2190 && c <= 0x2194 || c >= 0x2195 && c <= 0x2199 || c >= 0x219a && c <= 0x219b || c >= 0x219c && c <= 0x219f || c === 0x21a0 || c >= 0x21a1 && c <= 0x21a2 || c === 0x21a3 || c >= 0x21a4 && c <= 0x21a5 || c === 0x21a6 || c >= 0x21a7 && c <= 0x21ad || c === 0x21ae || c >= 0x21af && c <= 0x21cd || c >= 0x21ce && c <= 0x21cf || c >= 0x21d0 && c <= 0x21d1 || c === 0x21d2 || c === 0x21d3 || c === 0x21d4 || c >= 0x21d5 && c <= 0x21f3 || c >= 0x21f4 && c <= 0x22ff || c >= 0x2300 && c <= 0x2307 || c === 0x2308 || c === 0x2309 || c === 0x230a || c === 0x230b || c >= 0x230c && c <= 0x231f || c >= 0x2320 && c <= 0x2321 || c >= 0x2322 && c <= 0x2328 || c === 0x2329 || c === 0x232a || c >= 0x232b && c <= 0x237b || c === 0x237c || c >= 0x237d && c <= 0x239a || c >= 0x239b && c <= 0x23b3 || c >= 0x23b4 && c <= 0x23db || c >= 0x23dc && c <= 0x23e1 || c >= 0x23e2 && c <= 0x2426 || c >= 0x2427 && c <= 0x243f || c >= 0x2440 && c <= 0x244a || c >= 0x244b && c <= 0x245f || c >= 0x2500 && c <= 0x25b6 || c === 0x25b7 || c >= 0x25b8 && c <= 0x25c0 || c === 0x25c1 || c >= 0x25c2 && c <= 0x25f7 || c >= 0x25f8 && c <= 0x25ff || c >= 0x2600 && c <= 0x266e || c === 0x266f || c >= 0x2670 && c <= 0x2767 || c === 0x2768 || c === 0x2769 || c === 0x276a || c === 0x276b || c === 0x276c || c === 0x276d || c === 0x276e || c === 0x276f || c === 0x2770 || c === 0x2771 || c === 0x2772 || c === 0x2773 || c === 0x2774 || c === 0x2775 || c >= 0x2794 && c <= 0x27bf || c >= 0x27c0 && c <= 0x27c4 || c === 0x27c5 || c === 0x27c6 || c >= 0x27c7 && c <= 0x27e5 || c === 0x27e6 || c === 0x27e7 || c === 0x27e8 || c === 0x27e9 || c === 0x27ea || c === 0x27eb || c === 0x27ec || c === 0x27ed || c === 0x27ee || c === 0x27ef || c >= 0x27f0 && c <= 0x27ff || c >= 0x2800 && c <= 0x28ff || c >= 0x2900 && c <= 0x2982 || c === 0x2983 || c === 0x2984 || c === 0x2985 || c === 0x2986 || c === 0x2987 || c === 0x2988 || c === 0x2989 || c === 0x298a || c === 0x298b || c === 0x298c || c === 0x298d || c === 0x298e || c === 0x298f || c === 0x2990 || c === 0x2991 || c === 0x2992 || c === 0x2993 || c === 0x2994 || c === 0x2995 || c === 0x2996 || c === 0x2997 || c === 0x2998 || c >= 0x2999 && c <= 0x29d7 || c === 0x29d8 || c === 0x29d9 || c === 0x29da || c === 0x29db || c >= 0x29dc && c <= 0x29fb || c === 0x29fc || c === 0x29fd || c >= 0x29fe && c <= 0x2aff || c >= 0x2b00 && c <= 0x2b2f || c >= 0x2b30 && c <= 0x2b44 || c >= 0x2b45 && c <= 0x2b46 || c >= 0x2b47 && c <= 0x2b4c || c >= 0x2b4d && c <= 0x2b73 || c >= 0x2b74 && c <= 0x2b75 || c >= 0x2b76 && c <= 0x2b95 || c === 0x2b96 || c >= 0x2b97 && c <= 0x2bff || c >= 0x2e00 && c <= 0x2e01 || c === 0x2e02 || c === 0x2e03 || c === 0x2e04 || c === 0x2e05 || c >= 0x2e06 && c <= 0x2e08 || c === 0x2e09 || c === 0x2e0a || c === 0x2e0b || c === 0x2e0c || c === 0x2e0d || c >= 0x2e0e && c <= 0x2e16 || c === 0x2e17 || c >= 0x2e18 && c <= 0x2e19 || c === 0x2e1a || c === 0x2e1b || c === 0x2e1c || c === 0x2e1d || c >= 0x2e1e && c <= 0x2e1f || c === 0x2e20 || c === 0x2e21 || c === 0x2e22 || c === 0x2e23 || c === 0x2e24 || c === 0x2e25 || c === 0x2e26 || c === 0x2e27 || c === 0x2e28 || c === 0x2e29 || c >= 0x2e2a && c <= 0x2e2e || c === 0x2e2f || c >= 0x2e30 && c <= 0x2e39 || c >= 0x2e3a && c <= 0x2e3b || c >= 0x2e3c && c <= 0x2e3f || c === 0x2e40 || c === 0x2e41 || c === 0x2e42 || c >= 0x2e43 && c <= 0x2e4f || c >= 0x2e50 && c <= 0x2e51 || c === 0x2e52 || c >= 0x2e53 && c <= 0x2e7f || c >= 0x3001 && c <= 0x3003 || c === 0x3008 || c === 0x3009 || c === 0x300a || c === 0x300b || c === 0x300c || c === 0x300d || c === 0x300e || c === 0x300f || c === 0x3010 || c === 0x3011 || c >= 0x3012 && c <= 0x3013 || c === 0x3014 || c === 0x3015 || c === 0x3016 || c === 0x3017 || c === 0x3018 || c === 0x3019 || c === 0x301a || c === 0x301b || c === 0x301c || c === 0x301d || c >= 0x301e && c <= 0x301f || c === 0x3020 || c === 0x3030 || c === 0xfd3e || c === 0xfd3f || c >= 0xfe45 && c <= 0xfe46;
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","./error":"../node_modules/@formatjs/icu-messageformat-parser/lib/error.js","./types":"../node_modules/@formatjs/icu-messageformat-parser/lib/types.js","./regex.generated":"../node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js","@formatjs/icu-skeleton-parser":"../node_modules/@formatjs/icu-skeleton-parser/lib/index.js","./date-time-pattern-generator":"../node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js"}],"../node_modules/@formatjs/icu-messageformat-parser/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  parse: true,
  _Parser: true
};
exports._Parser = void 0;
exports.parse = parse;
var _tslib = require("tslib");
var _error = require("./error");
var _parser = require("./parser");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function pruneLocation(els) {
  els.forEach(function (el) {
    delete el.location;
    if ((0, _types.isSelectElement)(el) || (0, _types.isPluralElement)(el)) {
      for (var k in el.options) {
        delete el.options[k].location;
        pruneLocation(el.options[k].value);
      }
    } else if ((0, _types.isNumberElement)(el) && (0, _types.isNumberSkeleton)(el.style)) {
      delete el.style.location;
    } else if (((0, _types.isDateElement)(el) || (0, _types.isTimeElement)(el)) && (0, _types.isDateTimeSkeleton)(el.style)) {
      delete el.style.location;
    } else if ((0, _types.isTagElement)(el)) {
      pruneLocation(el.children);
    }
  });
}
function parse(message, opts) {
  if (opts === void 0) {
    opts = {};
  }
  opts = (0, _tslib.__assign)({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, opts);
  var result = new _parser.Parser(message, opts).parse();
  if (result.err) {
    var error = SyntaxError(_error.ErrorKind[result.err.kind]);
    // @ts-expect-error Assign to error object
    error.location = result.err.location;
    // @ts-expect-error Assign to error object
    error.originalMessage = result.err.message;
    throw error;
  }
  if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
    pruneLocation(result.val);
  }
  return result.val;
}
// only for testing
var _Parser = exports._Parser = _parser.Parser;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./error":"../node_modules/@formatjs/icu-messageformat-parser/lib/error.js","./parser":"../node_modules/@formatjs/icu-messageformat-parser/lib/parser.js","./types":"../node_modules/@formatjs/icu-messageformat-parser/lib/types.js"}],"../node_modules/@formatjs/fast-memoize/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoize = memoize;
exports.strategies = void 0;
//
// Main
//
function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache: cache,
    serializer: serializer
  });
}
//
// Strategy
//
function isPrimitive(value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
  return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
  return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
  return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
  this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};
var cacheDefault = {
  create: function create() {
    // @ts-ignore
    return new ObjectWithoutPrototypeCache();
  }
};
var strategies = exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
},{}],"../node_modules/intl-messageformat/lib/src/error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissingValueError = exports.InvalidValueTypeError = exports.InvalidValueError = exports.FormatError = exports.ErrorCode = void 0;
var _tslib = require("tslib");
var ErrorCode;
(function (ErrorCode) {
  // When we have a placeholder but no value to format
  ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
  // When value supplied is invalid
  ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
  // When we need specific Intl API but it's not available
  ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
var FormatError = exports.FormatError = /** @class */function (_super) {
  (0, _tslib.__extends)(FormatError, _super);
  function FormatError(msg, code, originalMessage) {
    var _this = _super.call(this, msg) || this;
    _this.code = code;
    _this.originalMessage = originalMessage;
    return _this;
  }
  FormatError.prototype.toString = function () {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };
  return FormatError;
}(Error);
var InvalidValueError = exports.InvalidValueError = /** @class */function (_super) {
  (0, _tslib.__extends)(InvalidValueError, _super);
  function InvalidValueError(variableId, value, options, originalMessage) {
    return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueError;
}(FormatError);
var InvalidValueTypeError = exports.InvalidValueTypeError = /** @class */function (_super) {
  (0, _tslib.__extends)(InvalidValueTypeError, _super);
  function InvalidValueTypeError(value, type, originalMessage) {
    return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueTypeError;
}(FormatError);
var MissingValueError = exports.MissingValueError = /** @class */function (_super) {
  (0, _tslib.__extends)(MissingValueError, _super);
  function MissingValueError(variableId, originalMessage) {
    return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
  }
  return MissingValueError;
}(FormatError);
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/intl-messageformat/lib/src/formatters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PART_TYPE = void 0;
exports.formatToParts = formatToParts;
exports.isFormatXMLElementFn = isFormatXMLElementFn;
var _icuMessageformatParser = require("@formatjs/icu-messageformat-parser");
var _error = require("./error");
var PART_TYPE;
(function (PART_TYPE) {
  PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
  PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (exports.PART_TYPE = PART_TYPE = {}));
function mergeLiteral(parts) {
  if (parts.length < 2) {
    return parts;
  }
  return parts.reduce(function (all, part) {
    var lastPart = all[all.length - 1];
    if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
      all.push(part);
    } else {
      lastPart.value += part.value;
    }
    return all;
  }, []);
}
function isFormatXMLElementFn(el) {
  return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue,
// For debugging
originalMessage) {
  // Hot path for straight simple msg translations
  if (els.length === 1 && (0, _icuMessageformatParser.isLiteralElement)(els[0])) {
    return [{
      type: PART_TYPE.literal,
      value: els[0].value
    }];
  }
  var result = [];
  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i];
    // Exit early for string parts.
    if ((0, _icuMessageformatParser.isLiteralElement)(el)) {
      result.push({
        type: PART_TYPE.literal,
        value: el.value
      });
      continue;
    }
    // TODO: should this part be literal type?
    // Replace `#` in plural rules with the actual numeric value.
    if ((0, _icuMessageformatParser.isPoundElement)(el)) {
      if (typeof currentPluralValue === 'number') {
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales).format(currentPluralValue)
        });
      }
      continue;
    }
    var varName = el.value;
    // Enforce that all required values are provided by the caller.
    if (!(values && varName in values)) {
      throw new _error.MissingValueError(varName, originalMessage);
    }
    var value = values[varName];
    if ((0, _icuMessageformatParser.isArgumentElement)(el)) {
      if (!value || typeof value === 'string' || typeof value === 'number') {
        value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
      }
      result.push({
        type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
        value: value
      });
      continue;
    }
    // Recursively format plural and select parts' option — which can be a
    // nested pattern structure. The choosing of the option to use is
    // abstracted-by and delegated-to the part helper object.
    if ((0, _icuMessageformatParser.isDateElement)(el)) {
      var style = typeof el.style === 'string' ? formats.date[el.style] : (0, _icuMessageformatParser.isDateTimeSkeleton)(el.style) ? el.style.parsedOptions : undefined;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if ((0, _icuMessageformatParser.isTimeElement)(el)) {
      var style = typeof el.style === 'string' ? formats.time[el.style] : (0, _icuMessageformatParser.isDateTimeSkeleton)(el.style) ? el.style.parsedOptions : formats.time.medium;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if ((0, _icuMessageformatParser.isNumberElement)(el)) {
      var style = typeof el.style === 'string' ? formats.number[el.style] : (0, _icuMessageformatParser.isNumberSkeleton)(el.style) ? el.style.parsedOptions : undefined;
      if (style && style.scale) {
        value = value * (style.scale || 1);
      }
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getNumberFormat(locales, style).format(value)
      });
      continue;
    }
    if ((0, _icuMessageformatParser.isTagElement)(el)) {
      var children = el.children,
        value_1 = el.value;
      var formatFn = values[value_1];
      if (!isFormatXMLElementFn(formatFn)) {
        throw new _error.InvalidValueTypeError(value_1, 'function', originalMessage);
      }
      var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
      var chunks = formatFn(parts.map(function (p) {
        return p.value;
      }));
      if (!Array.isArray(chunks)) {
        chunks = [chunks];
      }
      result.push.apply(result, chunks.map(function (c) {
        return {
          type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
          value: c
        };
      }));
    }
    if ((0, _icuMessageformatParser.isSelectElement)(el)) {
      var opt = el.options[value] || el.options.other;
      if (!opt) {
        throw new _error.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
      continue;
    }
    if ((0, _icuMessageformatParser.isPluralElement)(el)) {
      var opt = el.options["=".concat(value)];
      if (!opt) {
        if (!Intl.PluralRules) {
          throw new _error.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error.ErrorCode.MISSING_INTL_API, originalMessage);
        }
        var rule = formatters.getPluralRules(locales, {
          type: el.pluralType
        }).select(value - (el.offset || 0));
        opt = el.options[rule] || el.options.other;
      }
      if (!opt) {
        throw new _error.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
      continue;
    }
  }
  return mergeLiteral(result);
}
},{"@formatjs/icu-messageformat-parser":"../node_modules/@formatjs/icu-messageformat-parser/lib/index.js","./error":"../node_modules/intl-messageformat/lib/src/error.js"}],"../node_modules/intl-messageformat/lib/src/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlMessageFormat = void 0;
var _tslib = require("tslib");
var _icuMessageformatParser = require("@formatjs/icu-messageformat-parser");
var _fastMemoize = require("@formatjs/fast-memoize");
var _formatters = require("./formatters");
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
  if (!c2) {
    return c1;
  }
  return (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function (all, k) {
    all[k] = (0, _tslib.__assign)((0, _tslib.__assign)({}, c1[k]), c2[k] || {});
    return all;
  }, {}));
}
function mergeConfigs(defaultConfig, configs) {
  if (!configs) {
    return defaultConfig;
  }
  return Object.keys(defaultConfig).reduce(function (all, k) {
    all[k] = mergeConfig(defaultConfig[k], configs[k]);
    return all;
  }, (0, _tslib.__assign)({}, defaultConfig));
}
function createFastMemoizeCache(store) {
  return {
    create: function () {
      return {
        get: function (key) {
          return store[key];
        },
        set: function (key, value) {
          store[key] = value;
        }
      };
    }
  };
}
function createDefaultFormatters(cache) {
  if (cache === void 0) {
    cache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
  }
  return {
    getNumberFormat: (0, _fastMemoize.memoize)(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, _tslib.__spreadArray)([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.number),
      strategy: _fastMemoize.strategies.variadic
    }),
    getDateTimeFormat: (0, _fastMemoize.memoize)(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, _tslib.__spreadArray)([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.dateTime),
      strategy: _fastMemoize.strategies.variadic
    }),
    getPluralRules: (0, _fastMemoize.memoize)(function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a = Intl.PluralRules).bind.apply(_a, (0, _tslib.__spreadArray)([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.pluralRules),
      strategy: _fastMemoize.strategies.variadic
    })
  };
}
var IntlMessageFormat = exports.IntlMessageFormat = /** @class */function () {
  function IntlMessageFormat(message, locales, overrideFormats, opts) {
    var _this = this;
    if (locales === void 0) {
      locales = IntlMessageFormat.defaultLocale;
    }
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function (values) {
      var parts = _this.formatToParts(values);
      // Hot path for straight simple msg translations
      if (parts.length === 1) {
        return parts[0].value;
      }
      var result = parts.reduce(function (all, part) {
        if (!all.length || part.type !== _formatters.PART_TYPE.literal || typeof all[all.length - 1] !== 'string') {
          all.push(part.value);
        } else {
          all[all.length - 1] += part.value;
        }
        return all;
      }, []);
      if (result.length <= 1) {
        return result[0] || '';
      }
      return result;
    };
    this.formatToParts = function (values) {
      return (0, _formatters.formatToParts)(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
    };
    this.resolvedOptions = function () {
      var _a;
      return {
        locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
      };
    };
    this.getAst = function () {
      return _this.ast;
    };
    // Defined first because it's used to build the format pattern.
    this.locales = locales;
    this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
    if (typeof message === 'string') {
      this.message = message;
      if (!IntlMessageFormat.__parse) {
        throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
      }
      var _a = opts || {},
        formatters = _a.formatters,
        parseOpts = (0, _tslib.__rest)(_a, ["formatters"]);
      // Parse string messages into an AST.
      this.ast = IntlMessageFormat.__parse(message, (0, _tslib.__assign)((0, _tslib.__assign)({}, parseOpts), {
        locale: this.resolvedLocale
      }));
    } else {
      this.ast = message;
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError('A message must be provided as a String or AST.');
    }
    // Creates a new object with the specified `formats` merged with the default
    // formats.
    this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
    this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
  }
  Object.defineProperty(IntlMessageFormat, "defaultLocale", {
    get: function () {
      if (!IntlMessageFormat.memoizedDefaultLocale) {
        IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
      }
      return IntlMessageFormat.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true
  });
  IntlMessageFormat.memoizedDefaultLocale = null;
  IntlMessageFormat.resolveLocale = function (locales) {
    if (typeof Intl.Locale === 'undefined') {
      return;
    }
    var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
    if (supportedLocales.length > 0) {
      return new Intl.Locale(supportedLocales[0]);
    }
    return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
  };
  IntlMessageFormat.__parse = _icuMessageformatParser.parse;
  // Default format options used as the prototype of the `formats` provided to the
  // constructor. These are used when constructing the internal Intl.NumberFormat
  // and Intl.DateTimeFormat instances.
  IntlMessageFormat.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: 'currency'
      },
      percent: {
        style: 'percent'
      }
    },
    date: {
      short: {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
      },
      medium: {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      long: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      },
      full: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    time: {
      short: {
        hour: 'numeric',
        minute: 'numeric'
      },
      medium: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      },
      long: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      },
      full: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      }
    }
  };
  return IntlMessageFormat;
}();
},{"tslib":"../node_modules/tslib/tslib.es6.js","@formatjs/icu-messageformat-parser":"../node_modules/@formatjs/icu-messageformat-parser/lib/index.js","@formatjs/fast-memoize":"../node_modules/@formatjs/fast-memoize/lib/index.js","./formatters":"../node_modules/intl-messageformat/lib/src/formatters.js"}],"../node_modules/intl-messageformat/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  IntlMessageFormat: true
};
Object.defineProperty(exports, "IntlMessageFormat", {
  enumerable: true,
  get: function () {
    return _core.IntlMessageFormat;
  }
});
exports.default = void 0;
var _core = require("./src/core");
Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _core[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _core[key];
    }
  });
});
var _error = require("./src/error");
Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});
var _formatters = require("./src/formatters");
Object.keys(_formatters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formatters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatters[key];
    }
  });
});
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var _default = exports.default = _core.IntlMessageFormat;
},{"./src/core":"../node_modules/intl-messageformat/lib/src/core.js","./src/error":"../node_modules/intl-messageformat/lib/src/error.js","./src/formatters":"../node_modules/intl-messageformat/lib/src/formatters.js"}],"../node_modules/svelte-i18n/dist/runtime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = void 0;
exports.addMessages = addMessages;
exports.date = void 0;
exports.defineMessages = defineMessages;
exports.getTimeFormatter = exports.getNumberFormatter = exports.getMessageFormatter = exports.getLocaleFromQueryString = exports.getLocaleFromPathname = exports.getLocaleFromNavigator = exports.getLocaleFromHostname = exports.getLocaleFromHash = exports.getDateFormatter = exports.format = exports.dictionary = void 0;
exports.init = init;
exports.number = exports.locales = exports.locale = exports.json = exports.isLoading = void 0;
exports.register = registerLocaleLoader;
exports.time = exports.t = void 0;
exports.unwrapFunctionStore = unwrapFunctionStore;
exports.waitLocale = waitLocale;
var _store = require("svelte/store");
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _intlMessageformat = require("intl-messageformat");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function delve(obj, fullKey) {
  if (fullKey == null) return void 0;
  if (fullKey in obj) {
    return obj[fullKey];
  }
  const keys = fullKey.split(".");
  let result = obj;
  for (let p = 0; p < keys.length; p++) {
    if (typeof result === "object") {
      if (p > 0) {
        const partialKey = keys.slice(p, keys.length).join(".");
        if (partialKey in result) {
          result = result[partialKey];
          break;
        }
      }
      result = result[keys[p]];
    } else {
      result = void 0;
    }
  }
  return result;
}
const lookupCache = {};
const addToCache = (path, locale, message) => {
  if (!message) return message;
  if (!(locale in lookupCache)) lookupCache[locale] = {};
  if (!(path in lookupCache[locale])) lookupCache[locale][path] = message;
  return message;
};
const lookup = (path, refLocale) => {
  if (refLocale == null) return void 0;
  if (refLocale in lookupCache && path in lookupCache[refLocale]) {
    return lookupCache[refLocale][path];
  }
  const locales = getPossibleLocales(refLocale);
  for (let i = 0; i < locales.length; i++) {
    const locale = locales[i];
    const message = getMessageFromDictionary(locale, path);
    if (message) {
      return addToCache(path, refLocale, message);
    }
  }
  return void 0;
};
let dictionary;
const $dictionary = exports.dictionary = (0, _store.writable)({});
function getLocaleDictionary(locale) {
  return dictionary[locale] || null;
}
function hasLocaleDictionary(locale) {
  return locale in dictionary;
}
function getMessageFromDictionary(locale, id) {
  if (!hasLocaleDictionary(locale)) {
    return null;
  }
  const localeDictionary = getLocaleDictionary(locale);
  const match = delve(localeDictionary, id);
  return match;
}
function getClosestAvailableLocale(refLocale) {
  if (refLocale == null) return void 0;
  const relatedLocales = getPossibleLocales(refLocale);
  for (let i = 0; i < relatedLocales.length; i++) {
    const locale = relatedLocales[i];
    if (hasLocaleDictionary(locale)) {
      return locale;
    }
  }
  return void 0;
}
function addMessages(locale, ...partials) {
  delete lookupCache[locale];
  $dictionary.update(d => {
    d[locale] = _deepmerge.default.all([d[locale] || {}, ...partials]);
    return d;
  });
}
const $locales = exports.locales = (0, _store.derived)([$dictionary], ([dictionary2]) => Object.keys(dictionary2));
$dictionary.subscribe(newDictionary => dictionary = newDictionary);
const queue = {};
function createLocaleQueue(locale) {
  queue[locale] = /* @__PURE__ */new Set();
}
function removeLoaderFromQueue(locale, loader) {
  queue[locale].delete(loader);
  if (queue[locale].size === 0) {
    delete queue[locale];
  }
}
function getLocaleQueue(locale) {
  return queue[locale];
}
function getLocalesQueues(locale) {
  return getPossibleLocales(locale).map(localeItem => {
    const localeQueue = getLocaleQueue(localeItem);
    return [localeItem, localeQueue ? [...localeQueue] : []];
  }).filter(([, localeQueue]) => localeQueue.length > 0);
}
function hasLocaleQueue(locale) {
  if (locale == null) return false;
  return getPossibleLocales(locale).some(localeQueue => {
    var _a;
    return (_a = getLocaleQueue(localeQueue)) == null ? void 0 : _a.size;
  });
}
function loadLocaleQueue(locale, localeQueue) {
  const allLoadersPromise = Promise.all(localeQueue.map(loader => {
    removeLoaderFromQueue(locale, loader);
    return loader().then(partial => partial.default || partial);
  }));
  return allLoadersPromise.then(partials => addMessages(locale, ...partials));
}
const activeFlushes = {};
function flush(locale) {
  if (!hasLocaleQueue(locale)) {
    if (locale in activeFlushes) {
      return activeFlushes[locale];
    }
    return Promise.resolve();
  }
  const queues = getLocalesQueues(locale);
  activeFlushes[locale] = Promise.all(queues.map(([localeName, localeQueue]) => loadLocaleQueue(localeName, localeQueue))).then(() => {
    if (hasLocaleQueue(locale)) {
      return flush(locale);
    }
    delete activeFlushes[locale];
  });
  return activeFlushes[locale];
}
function registerLocaleLoader(locale, loader) {
  if (!getLocaleQueue(locale)) createLocaleQueue(locale);
  const localeQueue = getLocaleQueue(locale);
  if (getLocaleQueue(locale).has(loader)) return;
  if (!hasLocaleDictionary(locale)) {
    $dictionary.update(d => {
      d[locale] = {};
      return d;
    });
  }
  localeQueue.add(loader);
}
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
const defaultFormats = {
  number: {
    scientific: {
      notation: "scientific"
    },
    engineering: {
      notation: "engineering"
    },
    compactLong: {
      notation: "compact",
      compactDisplay: "long"
    },
    compactShort: {
      notation: "compact",
      compactDisplay: "short"
    }
  },
  date: {
    short: {
      month: "numeric",
      day: "numeric",
      year: "2-digit"
    },
    medium: {
      month: "short",
      day: "numeric",
      year: "numeric"
    },
    long: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    full: {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  },
  time: {
    short: {
      hour: "numeric",
      minute: "numeric"
    },
    medium: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function defaultMissingKeyHandler({
  locale,
  id
}) {
  console.warn(`[svelte-i18n] The message "${id}" was not found in "${getPossibleLocales(locale).join('", "')}".${hasLocaleQueue(getCurrentLocale()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`);
}
const defaultOptions = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: defaultFormats,
  warnOnMissingMessages: true,
  handleMissingMessage: void 0,
  ignoreTag: true
};
const options = defaultOptions;
function getOptions() {
  return options;
}
function init(opts) {
  const _a = opts,
    {
      formats
    } = _a,
    rest = __objRest$1(_a, ["formats"]);
  let initialLocale = opts.fallbackLocale;
  if (opts.initialLocale) {
    try {
      if (_intlMessageformat.IntlMessageFormat.resolveLocale(opts.initialLocale)) {
        initialLocale = opts.initialLocale;
      }
    } catch (e) {
      console.warn(`[svelte-i18n] The initial locale "${opts.initialLocale}" is not a valid locale.`);
    }
  }
  if (rest.warnOnMissingMessages) {
    delete rest.warnOnMissingMessages;
    if (rest.handleMissingMessage == null) {
      rest.handleMissingMessage = defaultMissingKeyHandler;
    } else {
      console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.');
    }
  }
  Object.assign(options, rest, {
    initialLocale
  });
  if (formats) {
    if ("number" in formats) {
      Object.assign(options.formats.number, formats.number);
    }
    if ("date" in formats) {
      Object.assign(options.formats.date, formats.date);
    }
    if ("time" in formats) {
      Object.assign(options.formats.time, formats.time);
    }
  }
  return $locale.set(initialLocale);
}
const $isLoading = exports.isLoading = (0, _store.writable)(false);
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b)) {
    if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
let current;
const internalLocale = (0, _store.writable)(null);
function getSubLocales(refLocale) {
  return refLocale.split("-").map((_, i, arr) => arr.slice(0, i + 1).join("-")).reverse();
}
function getPossibleLocales(refLocale, fallbackLocale = getOptions().fallbackLocale) {
  const locales = getSubLocales(refLocale);
  if (fallbackLocale) {
    return [... /* @__PURE__ */new Set([...locales, ...getSubLocales(fallbackLocale)])];
  }
  return locales;
}
function getCurrentLocale() {
  return current != null ? current : void 0;
}
internalLocale.subscribe(newLocale => {
  current = newLocale != null ? newLocale : void 0;
  if (typeof window !== "undefined" && newLocale != null) {
    document.documentElement.setAttribute("lang", newLocale);
  }
});
const set = newLocale => {
  if (newLocale && getClosestAvailableLocale(newLocale) && hasLocaleQueue(newLocale)) {
    const {
      loadingDelay
    } = getOptions();
    let loadingTimer;
    if (typeof window !== "undefined" && getCurrentLocale() != null && loadingDelay) {
      loadingTimer = window.setTimeout(() => $isLoading.set(true), loadingDelay);
    } else {
      $isLoading.set(true);
    }
    return flush(newLocale).then(() => {
      internalLocale.set(newLocale);
    }).finally(() => {
      clearTimeout(loadingTimer);
      $isLoading.set(false);
    });
  }
  return internalLocale.set(newLocale);
};
const $locale = exports.locale = __spreadProps(__spreadValues$1({}, internalLocale), {
  set
});
const getFromQueryString = (queryString, key) => {
  const keyVal = queryString.split("&").find(i => i.indexOf(`${key}=`) === 0);
  if (keyVal) {
    return keyVal.split("=").pop();
  }
  return null;
};
const getFirstMatch = (base, pattern) => {
  const match = pattern.exec(base);
  if (!match) return null;
  return match[1] || null;
};
const getLocaleFromHostname = hostname => {
  if (typeof window === "undefined") return null;
  return getFirstMatch(window.location.hostname, hostname);
};
exports.getLocaleFromHostname = getLocaleFromHostname;
const getLocaleFromPathname = pathname => {
  if (typeof window === "undefined") return null;
  return getFirstMatch(window.location.pathname, pathname);
};
exports.getLocaleFromPathname = getLocaleFromPathname;
const getLocaleFromNavigator = () => {
  if (typeof window === "undefined") return null;
  return window.navigator.language || window.navigator.languages[0];
};
exports.getLocaleFromNavigator = getLocaleFromNavigator;
const getLocaleFromQueryString = search => {
  if (typeof window === "undefined") return null;
  return getFromQueryString(window.location.search.substr(1), search);
};
exports.getLocaleFromQueryString = getLocaleFromQueryString;
const getLocaleFromHash = hash => {
  if (typeof window === "undefined") return null;
  return getFromQueryString(window.location.hash.substr(1), hash);
};
exports.getLocaleFromHash = getLocaleFromHash;
const monadicMemoize = fn => {
  const cache = /* @__PURE__ */Object.create(null);
  const memoizedFn = arg => {
    const cacheKey = JSON.stringify(arg);
    if (cacheKey in cache) {
      return cache[cacheKey];
    }
    return cache[cacheKey] = fn(arg);
  };
  return memoizedFn;
};
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
const getIntlFormatterOptions = (type, name) => {
  const {
    formats
  } = getOptions();
  if (type in formats && name in formats[type]) {
    return formats[type][name];
  }
  throw new Error(`[svelte-i18n] Unknown "${name}" ${type} format.`);
};
const createNumberFormatter = monadicMemoize(_a => {
  var _b = _a,
    {
      locale,
      format
    } = _b,
    options = __objRest(_b, ["locale", "format"]);
  if (locale == null) {
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  }
  if (format) {
    options = getIntlFormatterOptions("number", format);
  }
  return new Intl.NumberFormat(locale, options);
});
const createDateFormatter = monadicMemoize(_c => {
  var _d = _c,
    {
      locale,
      format
    } = _d,
    options = __objRest(_d, ["locale", "format"]);
  if (locale == null) {
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  }
  if (format) {
    options = getIntlFormatterOptions("date", format);
  } else if (Object.keys(options).length === 0) {
    options = getIntlFormatterOptions("date", "short");
  }
  return new Intl.DateTimeFormat(locale, options);
});
const createTimeFormatter = monadicMemoize(_e => {
  var _f = _e,
    {
      locale,
      format
    } = _f,
    options = __objRest(_f, ["locale", "format"]);
  if (locale == null) {
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  }
  if (format) {
    options = getIntlFormatterOptions("time", format);
  } else if (Object.keys(options).length === 0) {
    options = getIntlFormatterOptions("time", "short");
  }
  return new Intl.DateTimeFormat(locale, options);
});
const getNumberFormatter = (_g = {}) => {
  var _h = _g,
    {
      locale = getCurrentLocale()
    } = _h,
    args = __objRest(_h, ["locale"]);
  return createNumberFormatter(__spreadValues({
    locale
  }, args));
};
exports.getNumberFormatter = getNumberFormatter;
const getDateFormatter = (_i = {}) => {
  var _j = _i,
    {
      locale = getCurrentLocale()
    } = _j,
    args = __objRest(_j, ["locale"]);
  return createDateFormatter(__spreadValues({
    locale
  }, args));
};
exports.getDateFormatter = getDateFormatter;
const getTimeFormatter = (_k = {}) => {
  var _l = _k,
    {
      locale = getCurrentLocale()
    } = _l,
    args = __objRest(_l, ["locale"]);
  return createTimeFormatter(__spreadValues({
    locale
  }, args));
};
exports.getTimeFormatter = getTimeFormatter;
const getMessageFormatter = exports.getMessageFormatter = monadicMemoize(
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
(message, locale = getCurrentLocale()) => new _intlMessageformat.IntlMessageFormat(message, locale, getOptions().formats, {
  ignoreTag: getOptions().ignoreTag
}));
const formatMessage = (id, options = {}) => {
  var _a, _b, _c, _d;
  let messageObj = options;
  if (typeof id === "object") {
    messageObj = id;
    id = messageObj.id;
  }
  const {
    values,
    locale = getCurrentLocale(),
    default: defaultValue
  } = messageObj;
  if (locale == null) {
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  }
  let message = lookup(id, locale);
  if (!message) {
    message = (_d = (_c = (_b = (_a = getOptions()).handleMissingMessage) == null ? void 0 : _b.call(_a, {
      locale,
      id,
      defaultValue
    })) != null ? _c : defaultValue) != null ? _d : id;
  } else if (typeof message !== "string") {
    console.warn(`[svelte-i18n] Message with id "${id}" must be of type "string", found: "${typeof message}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`);
    return message;
  }
  if (!values) {
    return message;
  }
  let result = message;
  try {
    result = getMessageFormatter(message, locale).format(values);
  } catch (e) {
    if (e instanceof Error) {
      console.warn(`[svelte-i18n] Message "${id}" has syntax error:`, e.message);
    }
  }
  return result;
};
const formatTime = (t, options) => {
  return getTimeFormatter(options).format(t);
};
const formatDate = (d, options) => {
  return getDateFormatter(options).format(d);
};
const formatNumber = (n, options) => {
  return getNumberFormatter(options).format(n);
};
const getJSON = (id, locale = getCurrentLocale()) => {
  return lookup(id, locale);
};
const $format = exports.t = exports.format = exports._ = (0, _store.derived)([$locale, $dictionary], () => formatMessage);
const $formatTime = exports.time = (0, _store.derived)([$locale], () => formatTime);
const $formatDate = exports.date = (0, _store.derived)([$locale], () => formatDate);
const $formatNumber = exports.number = (0, _store.derived)([$locale], () => formatNumber);
const $getJSON = exports.json = (0, _store.derived)([$locale, $dictionary], () => getJSON);
function unwrapFunctionStore(store) {
  let localReference;
  const cancel = store.subscribe(value => localReference = value);
  const fn = (...args) => localReference(...args);
  fn.freeze = cancel;
  return fn;
}
function defineMessages(i) {
  return i;
}
function waitLocale(locale) {
  return flush(locale || getCurrentLocale() || getOptions().initialLocale);
}
},{"svelte/store":"../node_modules/svelte/store/index.mjs","deepmerge":"../node_modules/deepmerge/dist/cjs.js","intl-messageformat":"../node_modules/intl-messageformat/lib/index.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLanguage = changeLanguage;
exports.default = void 0;
var _App = _interopRequireDefault(require("./components/App.svelte"));
var _svelteI18n = require("svelte-i18n");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Registering language modules
(0, _svelteI18n.register)('en', () => require("_bundle_loader")(require.resolve('./lang/en.json')));
(0, _svelteI18n.register)('lt', () => require("_bundle_loader")(require.resolve('./lang/lt.json')));

// Function to detect the locale from the URL hash
function detectInitialLocale() {
  // Extract language from the hash segment of the URL
  const hash = window.location.hash.replace('#/', ''); // Removing '#/' to get just the language code
  if (['en', 'lt'].includes(hash)) return hash;
  return (0, _svelteI18n.getLocaleFromNavigator)();
}

// Initialize the i18n settings with the detected locale
(0, _svelteI18n.init)({
  fallbackLocale: 'en',
  initialLocale: detectInitialLocale()
});
const app = new _App.default({
  target: document.body
});

// Listen for hash changes to update the locale
window.addEventListener('hashchange', () => {
  const newLocale = detectInitialLocale();
  _svelteI18n.locale.set(newLocale);
});

// Exporting the function to change the language if needed elsewhere
function changeLanguage(lang) {
  window.location.hash = `/${lang}`;
  _svelteI18n.locale.set(lang); // Updating the locale when the language is changed manually
}
var _default = exports.default = app;
},{"./components/App.svelte":"components/App.svelte","svelte-i18n":"../node_modules/svelte-i18n/dist/runtime.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./lang/en.json":[["en.2cf6c9fe.js","lang/en.json"],"en.2cf6c9fe.js.map","lang/en.json"],"./lang/lt.json":[["lt.b9844141.js","lang/lt.json"],"lt.b9844141.js.map","lang/lt.json"]}],"components/consts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItems = exports.accessToken = void 0;
const accessToken = exports.accessToken = 'pk.eyJ1IjoiZ2UyYXMiLCJhIjoiY2t3YWgyNTMzMGNhczJwbXdwOXJ2cHpiaiJ9.i00XsA_peJjXSUM1ia7vJA';
const listItems = exports.listItems = [{
  name: '',
  ltname: '',
  description: "<span style=\"padding-left:15px\"> </span><strong>Beržoras</strong> village is a hidden gem located near the picturesque Beržoras, Ilgis, and Plateliai Lakes in Lithuania! Steeped in rich history, Beržoras has been mentioned in historical records since the 15th century and today is a state-protected cultural treasure. As you explore this charming village, you will discover an abundance of beautifully preserved chapels, crosses, and wayside shrines adorned with intricate sculptures of saints. These religious monuments stand as a testament to the deep faith and cultural traditions cherished by generations of Beržoras residents. With its idyllic location near the tranquil Beržoras Lake, this village is the perfect destination for both nature lovers and history enthusiasts. Whether you're seeking a peaceful retreat from the hustle and bustle of city life, or looking to immerse yourself in the vibrant culture of rural Lithuania, Beržoras offers something for everyone. Come and discover the beauty and charm of Beržoras Village for yourself – we can't wait to welcome you! This site serves as your gateway to the wonders of Beržoras Village. Not only will you discover the village's historical and cultural landmarks, but you will also find handpicked links guiding you to comfortable accommodations.",
  ltdescription: '<span style="padding-left:15px"> </span><strong>Beržoro kaimas</strong> – tai paslėptas perlas, įsikūręs prie vaizdingų Beržoro, Ilgio ir Platelių ežerų. Turtinga istorija apipintas Beržoras istoriniuose šaltiniuose minimas nuo XV amžiaus, o šiandien yra valstybės saugomas kultūros paminklas. Tyrinėdami šį žavingą kaimelį, atrasite daugybę nuostabiai išsaugotų koplyčių, kryžių ir pakelės koplytstulpių, papuoštų įmantriomis šventųjų skulptūromis. Šie religiniai paminklai liudija apie gilų tikėjimą ir kultūrines tradicijas, kurias puoselėjo daugelis Beržoro gyventojų kartų. Įsikūręs šalia ramaus Beržoro ežero, šis kaimas yra puiki vieta tiek gamtos mylėtojams, tiek istorijos entuziastams. Nesvarbu, ar ieškote ramios poilsio vietos nuo miesto šurmulio, ar norite pasinerti į gyvybingą Lietuvos kaimo kultūrą, Beržoras pasiūlys kažką kiekvienam. Atvykite ir patys atraskite Beržoro kaimelio grožį ir žavesį! Ši svetainė yra Jūsų vartai į Beržoro kaimo stebuklus. Joje Jūs ne tik atrasite kaimo istorinius ir kultūrinius paminklus, bet ir rasite kruopščiai atrinktas nuorodas, nukreipsiančias Jus į patogų apgyvendinimą.',
  address: 'Beržoras, Platelių pšt., 90036 Plungės r.',
  image: '#',
  website: 'http://zemaitijosnp.lt/en/veikla/places-to-visit/berzoras/',
  coordinates: [21.812835, 56.025181],
  icon: 'place-of-worship-11'
}, {
  name: 'Church of St. Stanislaus the Bishop',
  ltname: 'Beržoro šv. vyskupo Stanislovo bažnyčia',
  description: 'Church of St. Stanislaus the Bishop is a wooden Roman Catholic church in Beržoras, Plungė District Municipality, Lithuania. The church complex includes a 14-station outdoor Way of the Cross.  It is said that a shepherd saw a painting of the Holy Virgin Mary in a treetop. The priests brought the painting down and took it to the Plateliai church; however, the painting disappeared from the church and reappeared in the same place in the treetop. According to the legend, it was then decided to build a new church on this spot where the painting would hang.The first building of the complex, the wooden chapel of St. John of Nepomuk, rose no later than in the 18th century. Unfortunately, the exact date is not known. Eventually, the number of Christians in the village grew so that they could not fit into the chapel. Thus, in 1746 a larger church was built and it was given the title of St. Stanislaus the Bishop. The church has the characteristics of Lithuanian folk architecture, with a wooden and cross-shaped design. However, the main altar of the church is considered to be Baroque in style, and there are four altars in total.The Calvary of Beržoras has been in use since 1760, and is the only Calvary to be established in the 18th-century Lithuania. The Calvary was established by the parish priest Juozapas Vaitkevičius. In the fourteen chapels, the usual 14 Stations of the Cross can be found. In early 1970s, the chapels were demolished, but once Lithuania regained independence they were rebuilt.',
  ltdescription: 'Legenda pasakoja apie piemenį, beržo viršūnėje išvydusį Marijos paveikslą. Nepaisant bandymų perkelti jį į Platelių bažnyčią, paveikslas stebuklingai sugrįždavo. Žemaičiai beržą nukirtę ir jo vietoje pastatę koplyčia, o vėliau, 1746 m., Platelių klebonas Juozapas Vaitkevičius pastatė ir bažnyčią. Šiandien Beržoro bažnyčia žavi savo autentiška medine architektūra. Jos aukštas stogas, be pjūklo apdirbtos sienos ir unikali konstrukcija be vidinių atramų atspindi liaudies meistrų talentą. Bažnyčios viduje rasite didįjį altorių su stebuklingu Dievo Motinos paveikslu, aštuonių balsų vargonus ir barokinius šoninius altorius. Greta bažnyčios stovi medinė varpinė su dviem varpais, o šiek tiek toliau – jauki XVIII a. koplyčia. Bažnyčią supa senosios kapinaitės, garsėjančios unikaliais mediniais kryžiais ir koplytėlėmis.',
  address: 'Beržoras, Platelių pšt., 90036 Plungės r.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ber%C5%BEoro_%C5%A0v._Stanislovo_ba%C5%BEny%C4%8Dios_pastat%C5%B3_kompleksas_.jpg/1024px-Ber%C5%BEoro_%C5%A0v._Stanislovo_ba%C5%BEny%C4%8Dios_pastat%C5%B3_kompleksas_.jpg',
  website: 'https://en.wikipedia.org/wiki/Church_of_St._Stanislaus_the_Bishop,_Ber%C5%BEoras',
  coordinates: [21.812835, 56.025181],
  icon: 'dentist-small'
}, {
  name: 'Stations of the Cross',
  ltname: 'Kryžiaus kelio koplyčlios',
  description: 'Fourteen stations of the Cross. In the early 1960s, the chapels in Beržoras were demolished, but rebuilt after Lithuania regained its independence.',
  ltdescription: 'Platelių klebonas Juozapas Vaitkevičius, siekdamas įamžinti Išganytojo kančią, 1759 m. pradėjo Beržore kurti Kryžiaus kelią. Gavęs popiežiaus leidimą ir Žemaičių vyskupo A. Tiškevičiaus pritarimą, jis, padedamas parapijiečių, 1760 m. Beržoro pušyne pastatė 14 medinių koplyčių. Šios koplyčios, pašventintos bernardinų provinciolo P. Samavičiaus, tapo svarbiu tikėjimo simboliu Beržoro bendruomenei. Deja, XX a. septintajame dešimtmetyje koplyčios buvo nugriautos. Tačiau tikėjimas ir atmintis nugalėjo – koplyčios atstatytos ir vėl kviečia tikinčiuosius apmąstyti Kristaus kančios kelią. Kasmet čia vyksta atlaidai, suburiantys Beržoro gyventojus ir svečius iš tolimesnių vietovių.',
  address: 'Beržoras, Platelių pšt., 90036 Plungės r.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ber%C5%BEoro_etnoarchitekt%C5%ABrinis_kaimo_sodybos.jpg/1024px-Ber%C5%BEoro_etnoarchitekt%C5%ABrinis_kaimo_sodybos.jpg',
  website: 'https://www.klasika-tradicijos.lt/zemaitijos-grozis-berzoras-zemaicio-dvasine-tvirtove/',
  coordinates: [21.809302, 56.024373],
  icon: 'place-of-worship-11'
}, {
  name: 'Lake Beržoras recreation area',
  ltname: 'Beržoro ežero poilsio aikštelė',
  description: 'Looking for a place to relax and enjoy the tranquility of nature? The recreation area located on the shore of Lake Beržoras is a great choice for your rest or a short break. Here you will find gazebos and benches where you can comfortably hide from the sun or rain and simply enjoy the lake views.  Little visitors will have fun in the specially equipped childrens playground, and a convenient, large car park will ensure you dont have to worry about parking. The recreation area also has toilets, an outdoor grill area for preparing delicious food in nature, and a pontoon bridge that offers even more opportunities to admire the landscape of Lake Beržoras. The tranquility of the lake allows you to unwind and relax, making it perfect for both a short break during a hike or a full-day family outing with a picnic, games, sunbathing, or swimming. Come and discover your oasis of relaxation in the embrace of Žemaitija National Park!',
  ltdescription: 'Ieškote vietos, kur atsipalaiduoti ir pasimėgauti gamtos ramybe? Beržoro ežero pakrantėje įsikūrusi poilsio aikštelė  – puikus pasirinkimas Jūsų poilsiui ar trumpam sustojimui. Čia rasite pavėsines ir suoliukus, kur galėsite patogiai pasislėpti nuo saulės ar lietaus bei tiesiog pasimėgauti ežero vaizdais. Mažieji lankytojai smagiai praleis laiką specialiai įrengtoje vaikų žaidimų aikštelėje, o patogi, didelė automobilių stovėjimo aikštelė užtikrins, kad nereikėtų jaudintis dėl vietos automobiliui. Poilsio aikštelėje taip pat yra tualetai, lauko grilio zona gardžiam maistui pasigaminti gamtoje, o pantoninis tiltas atveria dar daugiau galimybių pasigrožėti Beržoro ežero kraštovaizdžiu. Ežero ramybė leidžia užsimiršti ir atsipalaiduoti, todėl čia puikiai tiks tiek trumpam atokvėpiui žygio metu, tiek visos dienos šeimos išvykai su pikniku, žaidimais, deginimusi ar maudynėmis. Atvykite ir atraskite savo poilsio oazę Žemaitijos nacionalinio parko glėbyje!',
  address: 'Platelių sen., Plungės rajonas',
  image: 'https://zemelapis.kelionessuvaikais.lt/data/tourism_objects/large/berzoro_atokvepio_aikstele_2.jpg',
  website: 'https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/berzoro-atokvepio-vieta-prie-berzoro-ezero/',
  coordinates: [21.827562, 56.023248],
  icon: 'lodging-11'
}, {
  name: 'Beržynėlis campsite',
  ltname: 'Poilsiavietė Beržynėlis',
  description: 'The campsite is located on the southern shore of Lake Plateliai, in a forest. There are fireplaces, outdoor furniture (tables, benches) and places to pitch tents.',
  ltdescription: 'Čia rasite įrengtas laužavietes, kurias supa rami gamtos aplinka, tad galėsite susiburti prie laužo, kepti maistą, dalintis įspūdžiais ir mėgautis jaukia atmosfera. Stovyklavietėje taip pat įrengti patogūs lauko baldai – pavėsinės, staliukai ir suoliukai – leis Jums patogiai įsikurti ir atsipalaiduoti gamtos apsuptyje. O norintiems nakvoti po žvaigždėmis, nemokamoje stovyklavietėje paruoštos vietos palapinėms statyti.',
  address: 'Gaso street 12, Beržoras village, Plungės dstr.s',
  image: 'https://cdn3.park4night.com/lieu/177301_177400/177327_gd.jpg',
  website: 'https://park4night.com/en/lieu/75113/en-pleine-nature/ber%C5%BEyn%C4%97lis-(birchwood)-plateliai/lithuania/#prettyPhoto',
  coordinates: [21.836288, 56.024769],
  icon: 'lodging-11'
}, {
  name: 'Liepijas hiking trail',
  ltname: 'Liepijų pėsčiųjų trasa',
  description: "The area of the Liepijas Landscape Reserve is 278.3 ha. It is located on the western edge of the Plateliai Plateau massif. The reserve covers the Liepijas Forest, with the Ringupis River meandering along its western edge, surrounded by the villages of Medsėdžiai, Kentai, Kadžiai and Pamedinčiai. The territory of the Liepijas Landscape Reserve is dominated by a forested landscape. The largest part of the landscape reserve is occupied by the Liepija forest (about 87 %), while meadows, marshes and water bodies account for about 13 %. About 75 % of all stands are of native origin, the rest are cultivated. Almost all of the forests in the Liepijas Landscape Reserve (98.3 %) are classified as ecosystem protection forests. More than half of the area is covered by private land, with 79 private plots of land included in the reserve. The Liepijas forest has expanded considerably over the last 100 years, mainly during the Soviet era. It has been found that the Liepijos Forest is the most beetle species-rich area in the Žemaitija National Park. It is the only place where populations of 7-8 rare beetle species can be revived. Since 2007, forestry activities have been discontinued in some blocks, as 4 types of habitats of European Community importance are protected here. The forest has a 4 km long circular hiking trail. The track is in natural forest, without any specially constructed surface. Information boards at the most interesting points of the trail provide intriguing facts about the local features. Red acorns on the trees (see photo below) show you where to go. The trail\\'s distinctive features: knowledge of nature, flora and fauna, rare plant species, landscape.",
  ltdescription: 'Žiedinė 4 km Liepijų pėsčiųjų trasa, įrengta Žemaitijos nacionalinio parko Liepijų kraštovaizdžio draustinyje, nukels jus į gamtos stebuklų pasaulį. Čia atrasite ne tik šimtamečius ąžuolus, bet ir įvairias saugomas miško buveines, į Raudonąją knygą įrašytas paukščių, augalų, kerpių ir grybų rūšis. Pasigrožėkite išskirtiniu Liepijų kraštovaizdžio draustinio reljefu, išraižytu griovų ir raguvų. Atraskite didžiausią Platelių apylinkių akmenį – Ubagų kalno akmenį, apipintą legendomis apie pagoniškas apeigas. Sužinokite, kodėl Liepijų miškas yra gausiausia vabalų rūšimis teritorija Žemaitijos nacionalinio parke. Norintiems patogiai keliauti Liepijų pėsčiųjų trasa, įrengti informaciniai stendai, ženklinimas ant medžių – raudoni „giliukai“. Be to, galite naudotis mobiliąja programėle „Audio Guide of Zemaitija National Park“, kurioje rasite maršrutą ir audiogido įrašus..',
  address: 'Plungės g. 12, Beržoro k., Plungės r.',
  image: 'https://zemaitijosnp.lt/wp-content/uploads/2019/07/Liepiju_pesciuju_trasa_2019-05-15-16.jpg',
  website: 'https://zemaitijosnp.lt/liepiju-pesciuju-trasa/',
  coordinates: [21.781655, 56.033205],
  icon: 'park-11'
}, {
  name: 'Ilgis lake hiking trail',
  ltname: 'Ilgio ežero pėsčiųjų trasa',
  description: 'Explore the natural nature trail along the picturesque shores of Lakes Ilgis and Žiedelis, and the neighboring coastal forests. The highlight of the 3.3 km trail is the birdwatching tower of Lake Ilgis, offering an opportunity to observe the local birdlife.\\n\\nThe trail consists of two parts:\\n- **Short course (1.5 km):** A circular route, starting at the Pauošniai - Plateliai road, 6.3 km. Follow the signs and turn left at the diverging directions for a scenic experience along the shore of Lake Ilgis. A birdwatching tower awaits 800 m from the trailhead.\\n- **Long route (2.7 km):** Start from the birdwatching tower or the rest area. Follow the path marked with blue ducks between Lakes Ilgis and Žiedelis, and return to the starting point or follow the marked trail to the birdwatching hut. The total length of this track is about 3 km.',
  ltdescription: 'Šis natūralus 2,7 km ilgio gamtos takas, besidriekiantis vaizdingomis Ilgio ir Žiedelio ežerų pakrantėmis bei priekrantės miškais, nukelia į ramybės ir biologinės įvairovės kupiną pasaulį. Trasos akcentas – paukščių stebėjimo bokštelis, iš kurio atsiveria nuostabūs vaizdai ir galimybė stebėti gausybę paukščių rūšių, tarp kurių mažasis ir didysis dančiasnapis, jūrinis erelis, erelis žuvininkas, nendrinė lingė, paprastasis suopis, didysis baublys, kuoduotasis antis, pilkasis ir didysis baltasis garniai, ausuotasis kragas, gulbė giesmininkė ir gulbė nebylė. Ilgio ežero botaninis-zoologinis draustinis saugo natūralią ir biologiškai įvairią Ilgio ežero, paežerės pelkių ir miškų ekosistemą su Europos Bendrijos svarbos buveinėmis, saugomomis augalų ir gyvūnų rūšimis. Trasa susideda iš dviejų dalių: mažosios (1,5 km) ir ilgosios. Mažoji trasa yra žiedinė ir veda vaizdingu Ilgio ežero pakrantės šlaitu. Ilgoji trasa veda taku palei Ilgio ežero pakrantę ir miško keliuku, tarp Ilgio ir Žiedelio ežerų. Trasa pažymėta mėlynomis „ančių“ nuorodomis ant medžių. Pasirūpinkite patogia avalyne ir apranga, tinkama žygiams gamtoje, atsineškite vandens ir užkandžių. Būkite atidūs ir saugokite gamtą, palikite šiukšles tam skirtose vietose. Nepamirškite fotoaparato – gamtos grožis čia nepaliks abejingų!',
  address: 'Plungės g. 12, Beržoro k., Plungės r.',
  image: 'https://zemaitijosnp.lt/wp-content/uploads/2023/05/IMG_20220321_111904-1.jpg',
  website: 'https://zemaitijosnp.lt/veikla/pesciujudviraciu-takai/ilgio-ezero-pesciuju-trasa/',
  coordinates: [21.83493, 56.010696],
  icon: 'park-11'
}, {
  name: 'Siberia Observation Tower',
  ltname: 'Siberijos apžvalgos bokštas',
  description: 'Climb up the 15-meter-high Siberia Observation Tower built on Cidabras Hill located 166 meter above sea level to feel the true greatness of Lake Plateliai of Samogitia. The tower gives breathtaking views of the surrounding lakes, forests, swamps and towns.',
  ltdescription: 'Norintiems patirti nepamirštamą Platelių, didžiausio Žemaitijos ežero, grožį, rekomenduojame užkopti į Siberijos apžvalgos bokštą. Pastatytas ant Cidabro kalno, 166 m aukštyje virš jūros lygio, bokštas siūlo dar aukštesnę perspektyvą ir leidžia pasigrožėti kvapą gniaužiančiais vaizdais. Nuo bokšto aikštelės atsiveria įspūdinga panorama, apimanti ne tik patį Platelių ežerą, bet ir aplinkinius miškus, pelkes bei miestelius. Ežero mėlynas tolimas, miškų žaluma, pelkių ramybė ir miestelių raudoni stogai sukuria nepamirštamą spalvų ir gamtos formų mozaiką. Nesvarbu, ar esate gamtos mylėtojas, keliautojas, ar tiesiog norite ramiai praleisti laiką, Siberijos apžvalgos bokštas – puiki vieta atsipalaiduoti ir pasimėgauti vaizdais, kurie ilgam išliks atmintyje.',
  address: 'Beržoras, Platelių pšt., 90036 Plungės r.',
  image: 'https://www.campingroutes.com/data/tourism_objects/large/34_1.jpg',
  website: 'https://www.campingroutes.com/en/sightseeing-places/siberian-viewing-tower/',
  coordinates: [21.814449, 56.030439],
  icon: 'castle-11'
}, {
  name: 'Jonušai Folk Art - Ethnography Museum',
  ltname: 'Jonušų tautodailės – etnografijos muziejus',
  description: 'Justinas Jonušas was born in 1926 in the village of Godeliai. He graduated from 4 sections of primary school. He worked as an eigel, and later on he worked in various jobs at the Šateikiai Soviet farm. His first artistic abilities were revealed at school. He started painting in 1974 and carving in about 1950. He died in 2021. Justinas Jonušas, together with his wife Regina (1926 - 2016), who also painted and carved, founded a private museum of folk art and ethnography at their homestead in the village of Godelių. They started collecting exhibits for the museum in the early 1960s. In the early 1980s, the first visitors arrived. The museum has a large and varied collection of wood carvings, paintings and iron crosses made by the owners themselves and other craftsmen in the area. Sculptures by the famous Žemaitija folk artist Stanislovas Riauba, a woodcarver from Godeliškis, can also be seen here. The cottage houses an exposition of ancient artefacts.',
  ltdescription: 'Justinas Jonušas gimė 1926 m. Godelių kaime. Baigė pradžios mokyklos 4 skyrius. Dirbo eiguliu, vėliau – įvairius darbus Šateikių tarybiniame ūkyje. Pirmieji meniniai sugebėjimai atsiskleidė mokykloje. Tapyti pradėjo nuo 1974 m., o drožinėti – apie 1950 m. Mėgo tapyti portretus, drožė Užgavėnių kaukes, šventuosius, monumentalias skulptūras. Mirė 2021 m. Justinas Jonušas kartu su savo žmona Regina (1926 – 2016), kuri taip pat tapė, drožinėjo, savo sodyboje Godelių kaime įkūrė privatų tautodailės ir etnografijos muziejų. Eksponatus muziejui tautodailininkai pradėjo rinkti 6-to dešimtmečio pradžioje. 8-to dešimtmečio pradžioje sulaukta pirmųjų lankytojų. Muziejuje sukaupta gausi ir įvairi pačių šeimininkų bei kitų apylinkių meistrų medžio drožinių, paveikslų, geležinių kryžių kolekcija. Čia galima pamatyti ir garsaus Žemaitijos tautodailininko medžio drožėjo godeliškio Stanislovo Riaubos skulptūrų. Klėtelėje įrengta senovės daiktų ekspozicija.',
  address: 'Bajorų g. 10, Godelių k., Plungės r.',
  image: 'https://zemaitijosnp.lt/wp-content/uploads/2017/04/J.Jonusas-savo-ekspozicijoje.-K.Stalnionytes-n.jpg',
  website: 'https://zemaitijosnp.lt/veikla/lankytini-objektai/jonusu-tautodailes-etnografijos-muziejus/',
  coordinates: [21.780275668887768, 55.989215464059086],
  icon: 'lodging-11'
}, {
  name: 'Soviet Nuclear Weapon Site - Cold War Museum',
  ltname: 'Šaltojo karo muziejus',
  description: 'Cold War Museum is located in the former Soviet Union`s complex of ballistic missile silo launch. Since 1963 up to 1978, there had been deployed four medium- range ballistic missiles SS-4, armed with 2- megaton power thermonuclear warheads. These missiles, together with the nearby terrestrial platforms of analogue missile launching, had created a common Soviet nuclear armament group in Lithuania, which was able to destroy all the Europe.',
  ltdescription: 'Vienintelis Europoje muziejus, įsikūręs buvusiame sovietų branduolinių raketų komplekse, nukelia į Šaltojo karo – vieno pavojingiausių konfliktų žmonijos istorijoje – laikus. Lankytojai gali apžiūrėti atstatytą apsaugos sistemą, bazės veikimo vaizdus, technologinį bloką ir keturias požemines raketų šachtas. Bunkerio ekspozicija pasakoja apie Šaltojo karo pradžią, branduolinio ginklavimosi varžybas, nusiginklavimo eigą ir ginkluotės evoliuciją. Maketai vaizduoja komplekso struktūrą, raketų šachtos vidų, o vienintelis tikslus SS-4 raketos maketas atskleidžia sovietų karinę galią. Bunkerio vado kabinetas, ryšio mazgas ir politinės propagandos ekspozicija atskleidžia to meto atmosferą. Apatiniame aukšte lankytojai gali susipažinti su komplekso elektros jėgaine, civilinės gynybos sistema ir pamatyti branduolinio sprogimo imitaciją. Šaltojo karo muziejus – tai ne tik įspūdinga vieta, bet ir priminimas apie karo baisumus ir taikos svarbą.',
  address: 'Šilinė str. 4, Plokščiai village, Plungė district.',
  image: 'https://www.visitplunge.lt/data/tourism_objects/1inline/nlo_4402.jpg',
  website: 'https://zemaitijosnp.lt/en/expositions/',
  coordinates: [21.905927, 56.030391],
  icon: 'lodging-11'
}, {
  name: 'Bat hibernation sites',
  ltname: 'Pelėausių žiemavietės',
  description: 'Built in the 1960s, the walls of the four cellars are a reminder of a bygone era when vegetables were stored in them. There is no trace of the food stocks that were then stored to feed the military men who lived in Plokštinė. But the cellars are not empty. During the cold season, they shelter bats.',
  ltdescription: 'Keturių rūsių, pastatytų XX a. septintajame dešimtmetyje, sienos mena senus praėjusius laikus, kai juose buvo laikomos daržovės. Maisto atsargų, tuomet kauptų Plokštinėje šeimininkavusiems kariškiams pamaitinti, nelikę nei kvapo. Bet rūsiai ne tušti. Šaltuoju metų laiku jie priglaudžia šikšnosparnius.',
  address: 'Platelių sen., Plungės rajonas',
  image: 'https://live.staticflickr.com/65535/51812744830_905dd51e2f_k.jpg',
  website: 'https://zemaitijosnp.lt/i-svecius-pas-peleausius/',
  coordinates: [21.910827, 56.025819],
  icon: 'lodging-11'
}, {
  name: 'Žemaitė Memorial Museum',
  ltname: 'Žemaitės memorialinis muziejus ',
  description: "Julija Beniuševičiūtė-Žymantienė, a classic Lithuanian writer, known in literature under the pseudonym of Žemaitė, was born on 4 June 1845 in Bukantė manor, near Šateikiai. This manor belonged to Count Pranciškis Plateris in the 19th century. At that time, Julia\\'s parents were the caretakers of the estate\\: her father was a gamekeeper and her mother was a housekeeper. In 1965, on the occasion of the 120th anniversary of Žemaitė\\'s birth, a memorial exhibition was set up in the restored house in her birthplace. In 2012, the manor house was renovated again, and the barn and stable were rebuilt. The writer\\'s home farmhouse is home to an exhibition reflecting her life and work. A memorial exposition of Stanislovas Riauba has been opened in the barn of the manor\\: here you will get to know in detail one of the most outstanding folk masters of Samogitia and his unique work. The restored barn offers an insight into the sacral heritage of the Plungė region\\: traditional Samogitian crosses and statues of saints. Since 1994, the Žemaitė Memorial Museum has been part of the Samogitian Art Museum.",
  ltdescription: '1965 m., minint rašytojos 120-ąsias gimimo metines, jos gimtajame restauruotame name buvo įrengta Žemaitės memorialinė ekspozicija. 2012 m, vykdant projektą „Bukantės dvaro sodybos restauravimas ir pritaikymas turizmo reikmėms“, sodyboje suremontuotas dvarelio gyvenamasis namas, atstatytas tvartas ir svirnas. Rašytojos gimtojoje troboje kviečiama susipažinti su memorialine ekspozicija, atspindinčia jos gyvenimo ir kūrybos kelią. Bukantės dvarelio svirne atidaryta memorialinė Stanislovo Riaubos ekspozicija, kurioje išsamiai galima susipažinti su vienu iškiliausiu Žemaitijos liaudies meistru, jo savita, filosofiškų ženklų pagražinta gyvenamąja aplinka ir unikalia kūryba. Atstatytame tvarte susipažinti galima su Žemaitijos sakraliniu liaudies paveldu: tradiciniai žemaičių kryžiai, koplytėlės, koplytstulpiai, šventųjų skulptūrėlės – dvasinis paveldas.',
  address: 'Platelių sen., Plungės rajonas',
  image: 'https://www.atostogoskaime.lt/data/tourism_objects/large/zemaites_memorialinis_muziejus_lankytinos_vietos_atostogoskaime.lt.png',
  website: 'https://www.visitplunge.lt/lankytinos-vietos/zemaites-memorialinis-muziejus-bukantes-dvaro-muziejus/',
  coordinates: [21.754174, 55.986754],
  icon: 'lodging-11'
}, {
  name: 'Farmhouse "Beržoro pakrantė"',
  ltname: 'Sodyba „Beržoro pakrantė“',
  description: '"Beržoro Pakrantė" is located next to Lake Beržoras and has the Žemaitija National Park product label. Guests have a great opportunity to stay in a cosy homestead with stunning views. In the evening you can relax in the sauna. Privacy, cosiness, cleanliness, excellent service and other amenities await you at the farmhouse to ensure your stay. In the evening you can book the sauna and hot tub.',
  ltdescription: 'Nemokama automobilių stovėjimo aikštelė ir terasos su nuostabiais ežero vaizdais – tai tik keli privalumai, kurių galite tikėtis atvykę į kaimo turizmo sodybą „Beržoro pakrantė“, įsikūrusią Beržoro km. Sodybos teritorijoje įrengta vaikų žaidimų aikštelė, tad mažieji svečiai čia tikrai nenuobodžiaus. O Jūs galėsite leistis į žygius pėsčiomis, žvejoti ar tyrinėti apylinkes dviračiais. Sodyba „Beržoro pakrantė“ – puiki vieta poilsiui gamtos apsuptyje!',
  address: 'Gaso g. 14, Beržoro k., Platelių sen., Plungės r.',
  image: 'https://lh3.googleusercontent.com/p/AF1QipPz0o-LdTwqGCoqrNbekzsUgwi4u3rckY-R2iI0=w1080-h608-p-no-v0',
  website: 'https://berzoro-pakrante.business.site/',
  coordinates: [21.81009, 56.024223],
  icon: 'lodging-11'
}, {
  name: 'Homestead "Where the Bells Ring"',
  ltname: 'Sodyba „Kur Skamba Varpai“',
  description: 'There is a large private courtyard, a childrens play area, a terrace, as well as a sauna and hot tub.',
  ltdescription: 'Didelis privatus kiemas, vaikų žaidimo zona, terasa bei pavėsinė, taip pat pirtis bei kubilas.',
  address: 'Gaso g. 14, Beržoro k., Platelių sen., Plungės r.',
  image: 'https://www.prieezero.lt/uploads/hotel4888/sodyba-kur-116356.jpeg',
  website: 'https://www.prieezero.lt/lt/apgyvendinimas/sodyba-kur-skamba-varpai-4888/',
  coordinates: [21.812114, 56.025156],
  icon: 'lodging-11'
}, {
  name: 'Villa "AUKSINĖ GERVĖ"',
  ltname: 'Vila "AUKSINĖ GERVĖ"',
  description: ' Lovely villa "AUKSINĖ GERVĖ" for an active and peaceful holiday. Apartments with terraces and stunning views of the lake. The lakeside vila is open in winter.',
  ltdescription: 'Terasa, bendra poilsio zona ir nuostabus sodas – visa tai Jūsų laukia apgyvendinimo įstaigoje „Auksinė gervė“, įsikūrusioje Beržore. Čia galėsite atsipalaiduoti ir mėgautis gamtos ramybe. Visiems svečiams siūlomas nemokamas belaidis internetas, o virtuvėlėje rasite viską, ko reikia patogiam maisto gaminimui: šaldytuvą, mikrobangų krosnelę ir virdulį. Kiekvieną rytą Jūsų lauks lengvi pusryčiai. O vakare galėsite kepti kepsnius lauko kepsninėje ir smagiai leisti laiką su šeima ar draugais. „Auksinė gervė“ siūlo įvairių pramogų: galėsite žaisti stalo tenisą, žvejoti ar leistis į paviršinio nardymo nuotykius. Atvykite į „Auksinę gervę“ ir patirkite nepamirštamą poilsį Beržore!',
  address: 'Gaso g. 10, Beržoro kaimas. Plungės raj. Lietuva.',
  image: 'https://www.visitplunge.lt/data/tourism_objects/large/2017_08_20_19_10_14.jpg',
  website: 'https://auksinegerve.lt/',
  coordinates: [21.810806, 56.024761],
  icon: 'lodging-11'
}, {
  name: 'Homestead "Pas tėvukus"',
  ltname: 'Sodyba "Pas tėvukus"',
  address: 'Plungės g. 42, Beržoro k., Platelių sen., Plungės r 42, Beržoras 9041',
  website: 'https://www.pastevukus.lt/',
  image: 'https://images.squarespace-cdn.com/content/v1/53172b1be4b0cc8a5401db4a/1609355963935-0CNNWIS820NAT6XFOOWL/IMG_9427.jpg?format=750w',
  description: 'Rural tourism homestead. Ethnographic-style spacious and welcoming house on the shores of Lake Beržoras. It is an ideal place for your holidays or business meetings.',
  ltdescription: 'Sodyba „Pas tėvukus“, įsikūrusi jaukioje Beržoro ežero pakrantėje, siūlo ne tik etnografinio stiliaus namus šeimyniniam poilsiui ar jaukiems susitikimams su draugais, bet ir galimybę surengti verslo renginius. Jūsų patogumui įrengta erdvi 20 vietų salė seminarams, pristatymams, banketų ar uždarų vakarų organizavimui. Atpalaiduojančios pirties procedūros, maudynės ežere, aktyvus laisvalaikis su valtimis, vandens dviračiais, krepšiniu ar tiesiog mėgavimasis  irklente – visa tai rasite čia. Sodyba „Pas tėvukus“ garantuoja puikią vietą poilsiui, verslo renginiams ir nepamirštamiems įspūdžiams!',
  coordinates: [21.822492, 56.024017],
  icon: 'lodging-11'
}, {
  name: 'Beržoro Homestead',
  ltname: 'Beržoro sodyba',
  address: 'Plungės g. 25, Beržoro k., Plungės r.',
  website: 'https://www.visitplunge.lt/apgyvendinimas/berzoro-sodyba/',
  image: 'https://www.visitplunge.lt/data/tourism_objects/large/Dailidonio_KTS.jpg',
  description: 'The farmhouse has three cosily furnished chalets. Each house has an outdoor pergola and fireplace. There is a common sports ground, boats on the lake, bicycles for rent.  There are many attractions nearby. We can accommodate up to 20 people at a time.',
  ltdescription: 'Kviečiame šeimas, draugus ir individualius keliautojus atsipalaiduoti ir patirti nepamirštamų įspūdžių kaimo turizmo sodyboje Beržoro kaime, Žemaitijos nacionaliniame parke. Nesvarbu, ar norite ramaus poilsio, ar aktyvių pramogų, ar tiesiog pabendrauti su draugais – sodyboje rasite viską, ko reikia puikioms atostogoms. Jūsų patogumui įrengti trys jaukūs nameliai su lauko pavėsinėmis ir laužavietėmis. Sodyboje taip pat yra bendra sporto aikštelė, siūloma valčių nuoma ežere ir dviračių nuoma. Netoliese rasite daugybę įdomių lankytinų vietų. Sodyboje galime apgyvendinti iki 20 žmonių. ',
  coordinates: [21.818458, 56.02518],
  icon: 'lodging-11'
}, {
  name: 'Homestead "Laumiu lankos"',
  ltname: '"Laumių lankų" sodyba',
  description: 'In "Laumiu lankos" the homestead you can relax by two lakes, Plateliai and Beržoras. Campers are supplied with electricity, there is a possibility to drain sewage and fill with water..',
  ltdescription: 'tai senovinė vienkiemio sodyba, įsikūrusi ežerų apsuptyje, Žemaitijos nacionalinio parko ribose. Čia galėsite mėgautis nepakartojamu gamtos grožiu ir ramybe, apsupti Platelių, Beržoro, Ilgio, Piktežerio ir Žiedelio ežerų. Sodyboje galima poilsiauti prie dviejų ežerų, Platelių ir Beržoro. Poilsiui skirti keturviečiai nameliai su pavėsinėmis vos 10 - 60 metrų nuo ežero kranto. Kiekviename namelyje rasite 2 dvigules sofos-lovas, stalą, šaldytuvą ir virdulį. Kemperiams tiekiama elektra, yra galimybė išpilti nuotekas ir pasipildyti vandens. Veikia bevielis internetas, tad galite ilsėtis su augintiniais. Įrengtos krepšinio ir tinklinio aikštelės aktyviam laisvalaikiui. Patogus, smėlėtas ežero dugnas puikiai tinka maudynėms. Lieptas suteikia galimybę nardyti ir žvejoti. Nuomojamos keturvietės valtys ir keturvietis vandens dviratis. Stovyklavietė driekiasi palei dviejų ežerų krantus, mėgstantiems stovyklauti su palapinėmis įrengtos pavėsinės su stalais, ugniakurai, šašlykinės, vietos automobiliams šalia jų. Pavėsinės įvairių dydžių, talpina nuo 10 iki 40 žmonių. Yra ir atskiros teritorijos individualiam poilsiui. Sodyboje rasite geriamą vandenį, elektrą, šaldytuvus (pagal poreikį) ir tualetus. Tvarkinga veja, prie pavėsinių ar stalų, patogu statyti ir palapines, ir automobilius. Atvykite į Laumių Lankų Sodybą ir atraskite nepamirštamą poilsį gamtos apsuptyje!',
  address: 'Plunge district, Plateliai eldership Laumalenku village, Plunges str. 5',
  image: 'https://static.wixstatic.com/media/74e96a_28a1b88a0d634e69b0c7227335532fa7~mv2.jpg',
  website: 'https://www.laumiulankos.lt/',
  coordinates: [21.830224, 56.020245],
  icon: 'campsite-11'
}, {
  name: 'Farmstead "Prie Žiedelio"',
  description: 'Rural tourism farmstead “Prie Žiedelio” is located in the Samogitia National Park, in the grange, in the beautiful corner of nature on the shore of Žiedelis lake.',
  address: 'Plunge district, Plateliai eldership Laumalenku village, Plunges str. 5',
  image: 'https://www.prieziedelio.lt/wp-content/uploads/2020/04/4-1-scaled.jpg',
  website: 'https://www.prieziedelio.lt/',
  coordinates: [21.830669, 56.015463],
  icon: 'lodging-11'
}, {
  name: 'Villa “Laumiu lankos”',
  description: 'In the mornings, you can enjoy a delicious cup of coffee on the terrace, and in the evenings, you can cozy up to the sun or enjoy the company of friends.',
  address: 'Plungės r., Laumalenkų km., Plungės g. 20',
  image: 'https://www.visitplunge.lt/data/tourism_objects/large/web_82.jpg',
  website: 'https://www.prieziedelio.lt/',
  coordinates: [21.837732, 56.012879],
  icon: 'lodging-11'
}, {
  name: 'Povilo Sukausko tourist camp”',
  description: 'Cosy place near the lake.',
  address: 'Plungės g. 12, Beržoro k., Plungės r.',
  image: 'https://www.visitplunge.lt/data/tourism_objects/large/dsc_0055.jpg',
  website: 'https://www.visitplunge.lt/apgyvendinimas/povilo-sukausko-turistine-stovykla/',
  coordinates: [21.827019, 56.011293],
  icon: 'lodging-11'
}, {
  name: 'Pilelio spring',
  description: 'In the Paplatelė forest, surrounded by snow-covered spruce trees, the Pilelis spring gushes. A small well has been installed here for the convenience of visitors, and the water never runs out. The water from this spring, which has been valued by the local population since ancient times, has not lost its importance even today. It is probably the most visited spring in Žemaitija National Park. Some people stop to refresh themselves along the Plokštinė nature trail, others come to bring water home. In 2012, the Lithuanian Geological Survey found that about 10 m³ of water flows from this spring per day. The spring water is low in dissolved minerals (359 mg/l) and relatively hard. Nitrite and ammonium were not detected in the water. The nitrate content is typical of the background environment (2 mg/l). The water has very low levels of sodium, chlorine and iron. The spring water is of the calcium, magnesium bicarbonate type.',
  address: 'Platelių sen., Plungės rajonas',
  image: 'https://live.staticflickr.com/65535/51812745100_7c78cd06fd_k.jpg',
  website: 'https://www.ezerobangele.lt/',
  coordinates: [21.904969, 56.037566],
  icon: 'lodging-11'
}, {
  name: 'Homestead "Ežero bangelė"',
  description: 'In the homestead, which is located by lakes and forests, you will not only have a great rest, but you will also experience unforgettable impressions. Whether you like a relaxing or active holiday, whether you just want to meet and chat with friends, or whether you want to do it all together, here are the perfect conditions for it! Cosy cottages and welcoming hosts, the beautiful nature of the National Park, great opportunities for hiking, cycling, swimming and many attractions in the surrounding area - all this for you.',
  address: 'Plungės g.25, Beržoro kaimas Platelių sen., Plungės rajonas',
  image: 'https://www.prieezero.lt/uploads/hotel3461/sodyba-ezero-58822.jpg',
  website: 'https://www.ezerobangele.lt/',
  coordinates: [21.816465, 56.024388],
  icon: 'lodging-11'
}];
},{}],"components/stores.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeMapItem = exports.activeListItem = void 0;
var _store = require("svelte/store");
const activeListItem = exports.activeListItem = (0, _store.writable)(0);
const activeMapItem = exports.activeMapItem = (0, _store.writable)(0);
},{"svelte/store":"../node_modules/svelte/store/index.mjs"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js":[function(require,module,exports) {
module.exports = function loadCSSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bundle;
    link.onerror = function (e) {
      link.onerror = link.onload = null;
      reject(e);
    };
    link.onload = function () {
      link.onerror = link.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(link);
  });
};
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };
    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("css",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js"));b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map