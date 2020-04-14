(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/observers/create-mutation-observer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  var _LP = Date.now();

  for (var i = 0; i < props.length; i++) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(2, 2);

      break;
    }

    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  var _LP = Date.now();

  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(4, 2);

      break;
    }

    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/observers/create-mutation-observer.ts":
/*!***************************************************!*\
  !*** ./src/observers/create-mutation-observer.ts ***!
  \***************************************************/
/*! exports provided: createMutationObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutationObservable", function() { return createMutationObservable; });
/* harmony import */ var _reactive_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive/observable */ "./src/reactive/observable.ts");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Intersection observer polyfill for IE */

function createMutationObservable() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    characterData: false,
    attributes: true,
    childList: true
  };
  var observable = new _reactive_observable__WEBPACK_IMPORTED_MODULE_0__["ChannelledObservable"](function (_ref) {
    var next = _ref.next;
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
        var _iterator = _createForOfIteratorHelper(sources.values()),
            _step;

        try {
          var _LP = Date.now();

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            if (Date.now() - _LP > 300) {
              (function () {
                throw Error('Infinite loop');
              })(28, 10);

              break;
            }

            var source = _step.value;
            source.disconnect();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        sources = new Map();
      }
    };
  });
  return observable;
}

/***/ }),

/***/ "./src/reactive/observable.ts":
/*!************************************!*\
  !*** ./src/reactive/observable.ts ***!
  \************************************/
/*! exports provided: BehaviourSubject, ChannelledObservable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviourSubject", function() { return BehaviourSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelledObservable", function() { return ChannelledObservable; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Observable = /*#__PURE__*/function () {
  function Observable(source) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Observable);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "index", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "streamSource", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "subscribed", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "activeListeners", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "unsubscribeFromSource", function () {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "listeners", {
      next: {},
      error: {},
      complete: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "cancels", {});

    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Observable, [{
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
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default()(obj) === 'object' && obj.next) {
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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BehaviourSubject, _Observable);

  var _super = _createSuper(BehaviourSubject);

  function BehaviourSubject() {
    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, BehaviourSubject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3), "lastNext", void 0);

    return _this3;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(BehaviourSubject, [{
    key: "next",
    value: function next(value) {
      this.emit('next', value);
      this.lastNext = value;
    }
    /* Very similar to observable except it sends the most recent value on subscribe */

  }, {
    key: "subscribe",
    value: function subscribe(fnOrObserver) {
      var observer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BehaviourSubject.prototype), "subscribe", this).call(this, fnOrObserver);

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

function isChannelAPI(arg) {
  return Boolean(arg.destroy);
}

var ChannelledObservable = /*#__PURE__*/function () {
  function ChannelledObservable(source) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, ChannelledObservable);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "index", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "streamSource", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "subscribed", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "activeListeners", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "unsubscribeFromSource", function () {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "channels", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, "cancels", {});

    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(ChannelledObservable, [{
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
      var _this4 = this;

      var key = this.getKey();

      this.cancels[key] = function () {
        delete _this4.cancels[key];
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
      var _this5 = this;

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
          _this5.activeListeners -= 1;

          var c = _this5.channels.get(channelKey);

          objKeys.forEach(function (objKey) {
            delete c[objKey][key];
          });
          delete _this5.cancels[key];

          _this5.cleanup(channelKey);
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
          _this5.activeListeners -= 1;
          delete _this5.channels.get(channelKey).next[key];
          delete _this5.cancels[key];

          _this5.cleanup(channelKey);
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
/* harmony default export */ __webpack_exports__["default"] = (Observable);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29ic2VydmVycy9jcmVhdGUtbXV0YXRpb24tb2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlL29ic2VydmFibGUudHMiXSwibmFtZXMiOlsiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJFcnJvciIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsInZhbHVlIiwic3VwZXJQcm9wQmFzZSIsInJlcXVpcmUiLCJfZ2V0IiwicHJvcGVydHkiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJnZXQiLCJiYXNlIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNhbGwiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX3R5cGVvZiIsImFzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX3NldFByb3RvdHlwZU9mIiwicCIsIl9zdXBlclByb3BCYXNlIiwib2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNyZWF0ZU11dGF0aW9uT2JzZXJ2YWJsZSIsImNvbmZpZyIsImNoYXJhY3RlckRhdGEiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwib2JzZXJ2YWJsZSIsIkNoYW5uZWxsZWRPYnNlcnZhYmxlIiwibmV4dCIsInNvdXJjZXMiLCJNYXAiLCJvblN1YnNjcmliZSIsImNoYW5uZWwiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJzZXQiLCJvYnNlcnZlIiwib25VbnN1YnNjcmliZSIsImRpc2Nvbm5lY3QiLCJkZXN0cm95IiwidmFsdWVzIiwic291cmNlIiwiT2JzZXJ2YWJsZSIsImVycm9yIiwiY29tcGxldGUiLCJzdHJlYW1Tb3VyY2UiLCJiaW5kIiwiaW5kZXgiLCJ2YWwiLCJrIiwibGlzdGVuZXJzIiwiZW1pdCIsImNhbmNlbHMiLCJmbiIsImdldEtleSIsImFjdGl2ZUxpc3RlbmVycyIsInVuc3Vic2NyaWJlRnJvbVNvdXJjZSIsImZuT3JPYnNlcnZlciIsInN1YnNjcmliZWQiLCJpc09ic2VydmVyIiwib2JqS2V5cyIsImtleXMiLCJmb3JFYWNoIiwib2JqS2V5IiwiY2FuY2VsIiwiY2xlYW51cCIsInVuc3Vic2NyaWJlIiwiaXNMaXN0ZW5lciIsIkJlaGF2aW91clN1YmplY3QiLCJsYXN0TmV4dCIsImlzQ2hhbm5lbEFQSSIsImFyZyIsIkJvb2xlYW4iLCJjIiwiY2hhbm5lbHMiLCJjaGFubmVsS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RixxQkFBVyxFQUFFRixRQUFmO0FBQXVCaEMsa0JBQVEsRUFBRXlCO0FBQWpDLFNBQVA7QUFDRDtBQUNGO0FBL0hIOztBQUFBO0FBQUE7QUFrSWVmLHlFQUFmLEUiLCJmaWxlIjoiL29ic2VydmVycy9jcmVhdGUtbXV0YXRpb24tb2JzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9vYnNlcnZlcnMvY3JlYXRlLW11dGF0aW9uLW9ic2VydmVyLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qIEludGVyc2VjdGlvbiBvYnNlcnZlciBwb2x5ZmlsbCBmb3IgSUUgKi9cclxuaW1wb3J0IHsgQ2hhbm5lbGxlZE9ic2VydmFibGUgfSBmcm9tICcuLi9yZWFjdGl2ZS9vYnNlcnZhYmxlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0aW9uT2JzZXJ2YWJsZShcclxuICBjb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xyXG4gICAgY2hhcmFjdGVyRGF0YTogZmFsc2UsXHJcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gIH1cclxuKSB7XHJcbiAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBDaGFubmVsbGVkT2JzZXJ2YWJsZTxFbGVtZW50LCB0eXBlb2YgTXV0YXRpb25PYnNlcnZlcj4oXHJcbiAgICAoeyBuZXh0IH0pID0+IHtcclxuICAgICAgbGV0IHNvdXJjZXMgPSBuZXcgTWFwKClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb25TdWJzY3JpYmUoY2hhbm5lbCkge1xyXG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PlxyXG4gICAgICAgICAgICBuZXh0KGNoYW5uZWwsIG11dGF0aW9ucylcclxuICAgICAgICAgIClcclxuICAgICAgICAgIHNvdXJjZXMuc2V0KGNoYW5uZWwsIG9ic2VydmVyKVxyXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjaGFubmVsLCBjb25maWcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblVuc3Vic2NyaWJlKGNoYW5uZWwpIHtcclxuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gc291cmNlcy5nZXQoY2hhbm5lbClcclxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzdHJveSgpIHtcclxuICAgICAgICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5kaXNjb25uZWN0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNvdXJjZXMgPSBuZXcgTWFwKClcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICByZXR1cm4gb2JzZXJ2YWJsZVxyXG59XHJcbiIsImludGVyZmFjZSBPYnNlcnZlcjxUPiB7XG4gIG5leHQ6IExpc3RlbmVyPFQ+XG4gIGNvbXBsZXRlPzogTGlzdGVuZXJcbiAgZXJyb3I/OiBMaXN0ZW5lcjxFcnJvcj5cbn1cbnR5cGUgTGlzdGVuZXI8VCA9IGFueT4gPSAodmFsdWU6IFQpID0+IGFueVxudHlwZSBDbGVhbnVwID0gKCkgPT4gYW55XG5pbnRlcmZhY2UgRGljdDxUPiB7XG4gIFtrZXk6IHN0cmluZ106IFRcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJHcm91cCB7XG4gIG5leHQ6IERpY3Q8TGlzdGVuZXI+XG4gIGVycm9yOiBEaWN0PExpc3RlbmVyPlxuICBjb21wbGV0ZTogRGljdDxMaXN0ZW5lcj5cbn1cblxuY2xhc3MgT2JzZXJ2YWJsZTxUID0gYW55PiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDBcbiAgcHJpdmF0ZSBzdHJlYW1Tb3VyY2U6IChvYnNlcnZlcjogT2JzZXJ2YWJsZTxUPikgPT4gQ2xlYW51cFxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgPSAoKSA9PiB7fVxuICBwcml2YXRlIGxpc3RlbmVyczogTGlzdGVuZXJHcm91cCA9IHtcbiAgICBuZXh0OiB7fSxcbiAgICBlcnJvcjoge30sXG4gICAgY29tcGxldGU6IHt9XG4gIH1cbiAgcHJpdmF0ZSBjYW5jZWxzOiBEaWN0PENsZWFudXA+ID0ge31cblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFQgfCBFcnJvcikge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1trZXldW2tdKHZhbClcbiAgICB9XG4gIH1cblxuICAvKiBFbWl0IHRoZSBuZXh0IHZhbHVlICovXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgfVxuXG4gIGVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcilcbiAgfVxuXG4gIC8qIEVtaXQgYW4gZW5kIGV2ZW50IHRvIGV2ZXJ5dGhpbmcgKi9cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZScpXG4gICAgdGhpcy5kZXN0cm95KClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuY2FuY2Vscykge1xuICAgICAgdGhpcy5jYW5jZWxzW2tdKClcbiAgICB9XG4gIH1cblxuICBvbkRlc3Ryb3kgKGZuOkNsZWFudXApIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICB0aGlzLmNhbmNlbHNba2V5XSA9ICgpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgZm4oKVxuICAgIH1cbiAgfVxuXG4gIC8qIFxuICBUaGlzIGlzIGNhbGxlZCB3aGVuIGEgb2JzZXJ2ZXIgdW5zdWJzY3JpYmVzXG4gIGlmIGl0IHdhcyB0aGUgbGFzdCByZW1haW5pbmcgb2JzZXJ2ZXIgdGhlbiBpdCB1bnN1YnNjcmliZXMgZnJvbSB0aGUgc291cmNlXG4gICovXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIFN1YnNjcmliZSBjYW4gYmUgcGFzc2VkIGVpdGhlciBhIFxuICBMaXN0ZW5lcjogKG5leHRWYWwpID0+IHt9IFxuICAgIG9yIGFuXG4gIE9ic2VydmVyOiB7IG5leHQ6IG5leHRWYWwgPT4ge30sIGVycm9yOiBlcnIgPT4ge30sIH1cbiAgKi9cbiAgc3Vic2NyaWJlKGZuT3JPYnNlcnZlcjogTGlzdGVuZXI8VD4gfCBPYnNlcnZlcjxUPikge1xuICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSA9IHRoaXMuc3RyZWFtU291cmNlKHRoaXMpXG4gICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5KClcblxuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxUPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldID0gZm5Pck9ic2VydmVyW29iaktleV1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldID0gZm5Pck9ic2VydmVyXG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyArPSAxXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XVxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPihvYmo6IGFueSk6IG9iaiBpcyBPYnNlcnZlcjxUPiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmoubmV4dCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNMaXN0ZW5lcjxUPihmbjogYW55KTogZm4gaXMgTGlzdGVuZXI8VD4ge1xuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKiBTYW1lIGFzIHJlZ3VsYXIgb2JzZXJ2YWJsZSBleGNlcHQgaXQgYWx3YXlzIGVtaXRzIHRoZSBsYXN0IHZhbHVlICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3VyU3ViamVjdDxUID0gYW55PiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBsYXN0TmV4dDogVFxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgICB0aGlzLmxhc3ROZXh0ID0gdmFsdWVcbiAgfVxuXG4gIC8qIFZlcnkgc2ltaWxhciB0byBvYnNlcnZhYmxlIGV4Y2VwdCBpdCBzZW5kcyB0aGUgbW9zdCByZWNlbnQgdmFsdWUgb24gc3Vic2NyaWJlICovXG4gIHN1YnNjcmliZShmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFQ+IHwgT2JzZXJ2ZXI8VD4pIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IHN1cGVyLnN1YnNjcmliZShmbk9yT2JzZXJ2ZXIpXG4gICAgaWYgKGlzT2JzZXJ2ZXIob2JzZXJ2ZXIub2JzZXJ2ZXIpKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlci5uZXh0KHRoaXMubGFzdE5leHQpXG4gICAgfSBlbHNlIGlmIChpc0xpc3RlbmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGZuT3JPYnNlcnZlcih0aGlzLmxhc3ROZXh0KVxuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbEFQSTxDPiB7XG4gIG9uU3Vic2NyaWJlOiAoY2hhbm5lbDogQykgPT4gYW55XG4gIG9uVW5zdWJzY3JpYmU6IChjaGFubmVsOiBDKSA9PiBhbnlcbiAgZGVzdHJveTogKCkgPT4gYW55XG59XG5cbmZ1bmN0aW9uIGlzQ2hhbm5lbEFQSTxDPihhcmcpOiBhcmcgaXMgQ2hhbm5lbEFQSTxDPiB7XG4gIHJldHVybiBCb29sZWFuKGFyZy5kZXN0cm95KVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbGxlZE9ic2VydmFibGU8QyA9IGFueSwgViA9IGFueT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwXG4gIHByaXZhdGUgc3RyZWFtU291cmNlOiAob2JzZXJ2ZXI6IENoYW5uZWxsZWRPYnNlcnZhYmxlPEMsIFY+KSA9PiBDbGVhbnVwIHwgQ2hhbm5lbEFQSTxDPlxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgfCBDaGFubmVsQVBJPEM+ID0gKCkgPT4ge31cbiAgY2hhbm5lbHM6IE1hcDxDLCBMaXN0ZW5lckdyb3VwPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIGNhbmNlbHM6IERpY3Q8Q2xlYW51cD4gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQ2hhbm5lbGxlZE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGNoYW5uZWw6IEMsIGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFYgfCBFcnJvcikge1xuICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsKVxuICAgIGZvciAoY29uc3QgayBpbiBjW2tleV0pIHtcbiAgICAgIGNba2V5XVtrXSh2YWwpXG4gICAgfVxuICB9XG5cbiAgbmV4dChjaGFubmVsOiBDLCB2YWx1ZTogVikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnbmV4dCcsIHZhbHVlKVxuICB9XG4gIGVycm9yKGNoYW5uZWw6IEMsIGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnZXJyb3InLCBlcnJvcilcbiAgfVxuICBjb21wbGV0ZShjaGFubmVsOiBDKSB7XG4gICAgdGhpcy5lbWl0KGNoYW5uZWwsICdjb21wbGV0ZScpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNhbmNlbHMpIHtcbiAgICAgIHRoaXMuY2FuY2Vsc1trXSgpXG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95IChmbjpDbGVhbnVwKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoKVxuXG4gICAgdGhpcy5jYW5jZWxzW2tleV0gPSAoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgIGZuKClcbiAgICB9XG4gIH1cblxuICAvKiBcbiAgVGhpcyBpcyBjYWxsZWQgd2hlbiBhIG9ic2VydmVyIHVuc3Vic2NyaWJlc1xuICBpZiBpdCB3YXMgdGhlIGxhc3QgcmVtYWluaW5nIG9ic2VydmVyIHRoZW4gaXQgdW5zdWJzY3JpYmVzIGZyb20gdGhlIHNvdXJjZVxuICAqL1xuICBjbGVhbnVwKGNoYW5uZWw6IEMpIHtcbiAgICBpZiAoaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSkgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2Uub25VbnN1YnNjcmliZShjaGFubmVsKVxuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSA/IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlLmRlc3Ryb3koKSA6IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKClcbiAgICB9XG4gIH1cblxuICAvKlxuICBTdWJzY3JpYmUgY2FuIGJlIHBhc3NlZCBlaXRoZXIgYSBcbiAgTGlzdGVuZXI6IChuZXh0VmFsKSA9PiB7fSBcbiAgICBvciBhblxuICBPYnNlcnZlcjogeyBuZXh0OiBuZXh0VmFsID0+IHt9LCBlcnJvcjogZXJyID0+IHt9LCB9XG4gICovXG4gIHN1YnNjcmliZShjaGFubmVsS2V5OiBDLCBmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFY+IHwgT2JzZXJ2ZXI8Vj4pIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UgPSB0aGlzLnN0cmVhbVNvdXJjZSh0aGlzKVxuICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbEtleSlcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICBpZiAoIWNoYW5uZWwpIHtcbiAgICAgIGNoYW5uZWwgPSB7IG5leHQ6IHt9LCBlcnJvcjoge30sIGNvbXBsZXRlOiB7fSB9XG4gICAgICB0aGlzLmNoYW5uZWxzLnNldChjaGFubmVsS2V5LCBjaGFubmVsKVxuICAgIH1cblxuICAgIGlmIChpc0NoYW5uZWxBUEkodGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UpKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZS5vblN1YnNjcmliZShjaGFubmVsS2V5KVxuICAgIH1cblxuICAgIC8qICAqL1xuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxWPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgY2hhbm5lbFtvYmpLZXldW2tleV0gPSBmbk9yT2JzZXJ2ZXJbb2JqS2V5XVxuICAgICAgfSlcblxuICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyAtPSAxXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsS2V5KVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgY1tvYmpLZXldW2tleV1cbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FuY2Vsc1trZXldXG4gICAgICAgIHRoaXMuY2xlYW51cChjaGFubmVsS2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG5cbiAgICBpZiAoaXNMaXN0ZW5lcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBjaGFubmVsLm5leHRba2V5XSA9IGZuT3JPYnNlcnZlclxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzIC09IDFcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHMuZ2V0KGNoYW5uZWxLZXkpLm5leHRba2V5XVxuICAgICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgICAgdGhpcy5jbGVhbnVwKGNoYW5uZWxLZXkpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FuY2Vsc1trZXldXG5cbiAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiBjYW5jZWwsIG9ic2VydmVyOiBmbk9yT2JzZXJ2ZXIgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlXG4iXSwic291cmNlUm9vdCI6IiJ9