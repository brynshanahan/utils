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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChannelledObservable = exports.BehaviourSubject = void 0;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observable = /*#__PURE__*/function () {
  function Observable(source) {
    _classCallCheck(this, Observable);

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

  _createClass(Observable, [{
    key: "getKey",
    value: function getKey() {
      return 'k' + this.index++;
    }
  }, {
    key: "emit",
    value: function emit(key, val) {
      for (var k in this.listeners[key]) {
        this.listeners[key][k](val);
      }
    }
    /* Emit the next value */

  }, {
    key: "next",
    value: function next(value) {
      this.emit('next', value);
    }
  }, {
    key: "error",
    value: function error(_error) {
      this.emit('error', _error);
    }
    /* Emit an end event to everything */

  }, {
    key: "complete",
    value: function complete() {
      this.emit('complete');
      this.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var k in this.cancels) {
        this.cancels[k]();
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy(fn) {
      var _this = this;

      var key = this.getKey();

      this.cancels[key] = function () {
        delete _this.cancels[key];
        fn();
      };
    }
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */

  }, {
    key: "cleanup",
    value: function cleanup() {
      if (!this.activeListeners) {
        this.unsubscribeFromSource();
      }
    }
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */

  }, {
    key: "subscribe",
    value: function subscribe(fnOrObserver) {
      var _this2 = this;

      if (!this.subscribed) {
        this.unsubscribeFromSource = this.streamSource(this);
        this.subscribed = true;
      }

      var key = this.getKey();

      if (isObserver(fnOrObserver)) {
        var objKeys = Object.keys(fnOrObserver);
        this.activeListeners += 1;
        objKeys.forEach(function (objKey) {
          _this2.listeners[objKey][key] = fnOrObserver[objKey];
        });

        var cancel = function cancel() {
          _this2.activeListeners -= 1;
          objKeys.forEach(function (objKey) {
            delete _this2.listeners[objKey][key];
          });
          delete _this2.cancels[key];

          _this2.cleanup();
        };

        this.cancels[key] = cancel;
        return {
          unsubscribe: cancel,
          observer: fnOrObserver
        };
      } else {
        this.listeners.next[key] = fnOrObserver;
        this.activeListeners += 1;

        var _cancel = function _cancel() {
          _this2.activeListeners -= 1;
          delete _this2.listeners.next[key];
          delete _this2.cancels[key];

          _this2.cleanup();
        };

        this.cancels[key];
        return {
          unsubscribe: _cancel,
          observer: fnOrObserver
        };
      }
    }
  }]);

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


var BehaviourSubject = /*#__PURE__*/function (_Observable) {
  _inherits(BehaviourSubject, _Observable);

  var _super = _createSuper(BehaviourSubject);

  function BehaviourSubject() {
    _classCallCheck(this, BehaviourSubject);

    return _super.apply(this, arguments);
  }

  _createClass(BehaviourSubject, [{
    key: "next",
    value: function next(value) {
      this.emit('next', value);
      this.lastNext = value;
    }
    /* Very similar to observable except it sends the most recent value on subscribe */

  }, {
    key: "subscribe",
    value: function subscribe(fnOrObserver) {
      var observer = _get(_getPrototypeOf(BehaviourSubject.prototype), "subscribe", this).call(this, fnOrObserver);

      if (isObserver(observer.observer)) {
        observer.observer.next(this.lastNext);
      } else if (isListener(fnOrObserver)) {
        fnOrObserver(this.lastNext);
      }

      return observer;
    }
  }]);

  return BehaviourSubject;
}(Observable);

exports.BehaviourSubject = BehaviourSubject;

function isChannelAPI(arg) {
  return Boolean(arg.destroy);
}

var ChannelledObservable = /*#__PURE__*/function () {
  function ChannelledObservable(source) {
    _classCallCheck(this, ChannelledObservable);

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

  _createClass(ChannelledObservable, [{
    key: "getKey",
    value: function getKey() {
      return 'k' + this.index++;
    }
  }, {
    key: "emit",
    value: function emit(channel, key, val) {
      var c = this.channels.get(channel);

      for (var k in c[key]) {
        c[key][k](val);
      }
    }
  }, {
    key: "next",
    value: function next(channel, value) {
      this.emit(channel, 'next', value);
    }
  }, {
    key: "error",
    value: function error(channel, _error2) {
      this.emit(channel, 'error', _error2);
    }
  }, {
    key: "complete",
    value: function complete(channel) {
      this.emit(channel, 'complete');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var k in this.cancels) {
        this.cancels[k]();
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy(fn) {
      var _this3 = this;

      var key = this.getKey();

      this.cancels[key] = function () {
        delete _this3.cancels[key];
        fn();
      };
    }
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */

  }, {
    key: "cleanup",
    value: function cleanup(channel) {
      if (isChannelAPI(this.unsubscribeFromSource)) this.unsubscribeFromSource.onUnsubscribe(channel);

      if (!this.activeListeners) {
        isChannelAPI(this.unsubscribeFromSource) ? this.unsubscribeFromSource.destroy() : this.unsubscribeFromSource();
      }
    }
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */

  }, {
    key: "subscribe",
    value: function subscribe(channelKey, fnOrObserver) {
      var _this4 = this;

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
        var objKeys = Object.keys(fnOrObserver);
        this.activeListeners += 1;
        objKeys.forEach(function (objKey) {
          channel[objKey][key] = fnOrObserver[objKey];
        });

        var cancel = function cancel() {
          _this4.activeListeners -= 1;

          var c = _this4.channels.get(channelKey);

          objKeys.forEach(function (objKey) {
            delete c[objKey][key];
          });
          delete _this4.cancels[key];

          _this4.cleanup(channelKey);
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

        var _cancel2 = function _cancel2() {
          _this4.activeListeners -= 1;
          delete _this4.channels.get(channelKey).next[key];
          delete _this4.cancels[key];

          _this4.cleanup(channelKey);
        };

        this.cancels[key];
        return {
          unsubscribe: _cancel2,
          observer: fnOrObserver
        };
      }
    }
  }]);

  return ChannelledObservable;
}();

exports.ChannelledObservable = ChannelledObservable;
var _default = Observable;
exports.default = _default;
},{}],"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
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
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"observers/create-intersection-observable.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIntersectionObservable = createIntersectionObservable;
exports.CustomIntersectionObserverEntry = void 0;

var _observable = require("../reactive/observable");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomIntersectionObserverEntry = function CustomIntersectionObserverEntry(entry) {
  var winHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerHeight;

  _classCallCheck(this, CustomIntersectionObserverEntry);

  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRatio = entry.intersectionRatio;
  this.intersectionRect = entry.intersectionRect;
  this.isIntersecting = entry.isIntersecting;
  this.rootBounds = entry.rootBounds;
  this.target = entry.target;
  this.time = entry.time;
  this.isCompletelyInView = entry.intersectionRatio === 1;
  this.isAbove = entry.intersectionRatio < 1 ? entry.boundingClientRect.top < 0 : false;
  this.isBelow = entry.intersectionRatio < 1 ? entry.boundingClientRect.bottom > winHeight : false;
};

exports.CustomIntersectionObserverEntry = CustomIntersectionObserverEntry;

function createIntersectionObservable() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var observable = new _observable.ChannelledObservable(function (_ref) {
    var next = _ref.next,
        error = _ref.error,
        complete = _ref.complete;

    /* Intersection observer targets the window by default */
    var options = _objectSpread({}, opts);
    /* If root isnt the window set it to be the intersection observer root */


    if (isElement(root)) {
      options.root = root;
    }

    var disconnected = false;
    var started = false;
    var source;

    function getSource() {
      return _getSource.apply(this, arguments);
    }

    function _getSource() {
      _getSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.IntersectionObserver) {
                  _context4.next = 3;
                  break;
                }

                _context4.next = 3;
                return require("_bundle_loader")(require.resolve('intersection-observer'));

              case 3:
                if (!disconnected) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                started = true;
                return _context4.abrupt("return", new IntersectionObserver(function (entries) {
                  var winHeight = window.innerHeight;
                  entries.forEach(function (entry) {
                    var customEntry = new CustomIntersectionObserverEntry(entry, winHeight);
                    /* Get the callback for the specific element */

                    next(entry.target, customEntry);
                  });
                }, options));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return _getSource.apply(this, arguments);
    }

    source = getSource().then(function (r) {
      source = r;
      return r;
    });
    /* Entries is an array of entries for every element that changed */

    return {
      onSubscribe: function onSubscribe(channel) {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var src;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return source;

                case 2:
                  src = _context.sent;
                  src.observe(channel);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      onUnsubscribe: function onUnsubscribe(channel) {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var src;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return source;

                case 2:
                  src = _context2.sent;
                  src.unobserve(channel);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      destroy: function destroy() {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var src;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  disconnected = true;

                  if (!started) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 4;
                  return source;

                case 4:
                  src = _context3.sent;
                  src.disconnect();

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      }
    };
  });
  return observable;
}

function isElement(arg) {
  return arg && arg !== window;
}
},{"../reactive/observable":"reactive/observable.ts","_bundle_loader":"../node_modules/parcel/src/builtins/bundle-loader.js","intersection-observer":[["../intersection-observer.f8cf3ea1.js","../node_modules/intersection-observer/intersection-observer.js"],"../intersection-observer.f8cf3ea1.js.map","../node_modules/intersection-observer/intersection-observer.js"]}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59970" + '/');

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
},{}],"../node_modules/parcel/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
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
var b=require("../node_modules/parcel/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js",0,"observers/create-intersection-observable.ts"], null)
//# sourceMappingURL=/observers/create-intersection-observable.js.map