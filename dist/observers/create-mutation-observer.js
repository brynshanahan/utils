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
})({"reactive/observable.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable =
/** @class */
function () {
  function Observable(source) {
    this.index = 0;
    this.subscribed = false;
    this.activeListeners = 0;

    this.unsubscribeFromSource = function () {};

    this.listeners = {
      next: {},
      error: {},
      complete: {}
    };
    this.cancels = {};
    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  Observable.prototype.getKey = function () {
    return 'k' + this.index++;
  };

  Observable.prototype.emit = function (key, val) {
    for (var k in this.listeners[key]) {
      this.listeners[key][k](val);
    }
  };
  /* Emit the next value */


  Observable.prototype.next = function (value) {
    this.emit('next', value);
  };

  Observable.prototype.error = function (error) {
    this.emit('error', error);
  };
  /* Emit an end event to everything */


  Observable.prototype.complete = function () {
    this.emit('complete');
    this.destroy();
  };

  Observable.prototype.destroy = function () {
    for (var k in this.cancels) {
      this.cancels[k]();
    }
  };

  Observable.prototype.onDestroy = function (fn) {
    var _this = this;

    var key = this.getKey();

    this.cancels[key] = function () {
      delete _this.cancels[key];
      fn();
    };
  };
  /*
  This is called when a observer unsubscribes
  if it was the last remaining observer then it unsubscribes from the source
  */


  Observable.prototype.cleanup = function () {
    if (!this.activeListeners) {
      this.unsubscribeFromSource();
    }
  };
  /*
  Subscribe can be passed either a
  Listener: (nextVal) => {}
    or an
  Observer: { next: nextVal => {}, error: err => {}, }
  */


  Observable.prototype.subscribe = function (fnOrObserver) {
    var _this = this;

    if (!this.subscribed) {
      this.unsubscribeFromSource = this.streamSource(this);
      this.subscribed = true;
    }

    var key = this.getKey();

    if (isObserver(fnOrObserver)) {
      var objKeys_1 = Object.keys(fnOrObserver);
      this.activeListeners += 1;
      objKeys_1.forEach(function (objKey) {
        _this.listeners[objKey][key] = fnOrObserver[objKey];
      });

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        objKeys_1.forEach(function (objKey) {
          delete _this.listeners[objKey][key];
        });
        delete _this.cancels[key];

        _this.cleanup();
      };

      this.cancels[key] = cancel;
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    } else {
      this.listeners.next[key] = fnOrObserver;
      this.activeListeners += 1;

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        delete _this.listeners.next[key];
        delete _this.cancels[key];

        _this.cleanup();
      };

      this.cancels[key];
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    }
  };

  return Observable;
}();

function isObserver(obj) {
  if (_typeof(obj) === 'object' && obj.next) {
    return true;
  }
}

function isListener(fn) {
  if (typeof fn === 'function') {
    return true;
  }
}
/* Same as regular observable except it always emits the last value */


var BehaviourSubject =
/** @class */
function (_super) {
  __extends(BehaviourSubject, _super);

  function BehaviourSubject() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BehaviourSubject.prototype.next = function (value) {
    this.emit('next', value);
    this.lastNext = value;
  };
  /* Very similar to observable except it sends the most recent value on subscribe */


  BehaviourSubject.prototype.subscribe = function (fnOrObserver) {
    var observer = _super.prototype.subscribe.call(this, fnOrObserver);

    if (isObserver(observer.observer)) {
      observer.observer.next(this.lastNext);
    } else if (isListener(fnOrObserver)) {
      fnOrObserver(this.lastNext);
    }

    return observer;
  };

  return BehaviourSubject;
}(Observable);

exports.BehaviourSubject = BehaviourSubject;

function isChannelAPI(arg) {
  return Boolean(arg.destroy);
}

var ChannelledObservable =
/** @class */
function () {
  function ChannelledObservable(source) {
    this.index = 0;
    this.subscribed = false;
    this.activeListeners = 0;

    this.unsubscribeFromSource = function () {};

    this.channels = new Map();
    this.cancels = {};
    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  ChannelledObservable.prototype.getKey = function () {
    return 'k' + this.index++;
  };

  ChannelledObservable.prototype.emit = function (channel, key, val) {
    var c = this.channels.get(channel);

    for (var k in c[key]) {
      c[key][k](val);
    }
  };

  ChannelledObservable.prototype.next = function (channel, value) {
    this.emit(channel, 'next', value);
  };

  ChannelledObservable.prototype.error = function (channel, error) {
    this.emit(channel, 'error', error);
  };

  ChannelledObservable.prototype.complete = function (channel) {
    this.emit(channel, 'complete');
  };

  ChannelledObservable.prototype.destroy = function () {
    for (var k in this.cancels) {
      this.cancels[k]();
    }
  };

  ChannelledObservable.prototype.onDestroy = function (fn) {
    var _this = this;

    var key = this.getKey();

    this.cancels[key] = function () {
      delete _this.cancels[key];
      fn();
    };
  };
  /*
  This is called when a observer unsubscribes
  if it was the last remaining observer then it unsubscribes from the source
  */


  ChannelledObservable.prototype.cleanup = function (channel) {
    if (isChannelAPI(this.unsubscribeFromSource)) this.unsubscribeFromSource.onUnsubscribe(channel);

    if (!this.activeListeners) {
      isChannelAPI(this.unsubscribeFromSource) ? this.unsubscribeFromSource.destroy() : this.unsubscribeFromSource();
    }
  };
  /*
  Subscribe can be passed either a
  Listener: (nextVal) => {}
    or an
  Observer: { next: nextVal => {}, error: err => {}, }
  */


  ChannelledObservable.prototype.subscribe = function (channelKey, fnOrObserver) {
    var _this = this;

    if (!this.subscribed) {
      this.unsubscribeFromSource = this.streamSource(this);
      this.subscribed = true;
    }

    var channel = this.channels.get(channelKey);
    var key = this.getKey();

    if (!channel) {
      channel = {
        next: {},
        error: {},
        complete: {}
      };
      this.channels.set(channelKey, channel);
    }

    if (isChannelAPI(this.unsubscribeFromSource)) {
      this.unsubscribeFromSource.onSubscribe(channelKey);
    }
    /*  */


    if (isObserver(fnOrObserver)) {
      var objKeys_2 = Object.keys(fnOrObserver);
      this.activeListeners += 1;
      objKeys_2.forEach(function (objKey) {
        channel[objKey][key] = fnOrObserver[objKey];
      });

      var cancel = function cancel() {
        _this.activeListeners -= 1;

        var c = _this.channels.get(channelKey);

        objKeys_2.forEach(function (objKey) {
          delete c[objKey][key];
        });
        delete _this.cancels[key];

        _this.cleanup(channelKey);
      };

      this.cancels[key] = cancel;
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    }

    if (isListener(fnOrObserver)) {
      channel.next[key] = fnOrObserver;
      this.activeListeners += 1;

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        delete _this.channels.get(channelKey).next[key];
        delete _this.cancels[key];

        _this.cleanup(channelKey);
      };

      this.cancels[key];
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    }
  };

  return ChannelledObservable;
}();

exports.ChannelledObservable = ChannelledObservable;
exports.default = Observable;
},{}],"observers/create-mutation-observer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Intersection observer polyfill for IE */

var observable_1 = require("../reactive/observable");

function createMutationObservable(config) {
  if (config === void 0) {
    config = {
      characterData: false,
      attributes: true,
      childList: true
    };
  }

  var observable = new observable_1.ChannelledObservable(function (_a) {
    var next = _a.next;
    var sources = new Map();
    return {
      onSubscribe: function onSubscribe(channel) {
        var observer = new MutationObserver(function (mutations) {
          return next(channel, mutations);
        });
        sources.set(channel, observer);
        observer.observe(channel, config);
      },
      onUnsubscribe: function onUnsubscribe(channel) {
        var observer = sources.get(channel);
        observer.disconnect();
      },
      destroy: function destroy() {
        for (var _i = 0, _a = sources.values(); _i < _a.length; _i++) {
          var source = _a[_i];
          source.disconnect();
        }

        sources = new Map();
      }
    };
  });
  return observable;
}

exports.createMutationObservable = createMutationObservable;
},{"../reactive/observable":"reactive/observable.ts"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62404" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","observers/create-mutation-observer.ts"], null)
//# sourceMappingURL=/observers/create-mutation-observer.js.map