/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reactive/observable.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiRXJyb3IiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsInN1cGVyUHJvcEJhc2UiLCJyZXF1aXJlIiwiX2dldCIsInByb3BlcnR5IiwicmVjZWl2ZXIiLCJSZWZsZWN0IiwiZ2V0IiwiYmFzZSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjYWxsIiwiX2dldFByb3RvdHlwZU9mIiwibyIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl90eXBlb2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJfc3VwZXJQcm9wQmFzZSIsIm9iamVjdCIsImhhc093blByb3BlcnR5IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJPYnNlcnZhYmxlIiwic291cmNlIiwibmV4dCIsImVycm9yIiwiY29tcGxldGUiLCJzdHJlYW1Tb3VyY2UiLCJiaW5kIiwiaW5kZXgiLCJ2YWwiLCJrIiwibGlzdGVuZXJzIiwiZW1pdCIsImRlc3Ryb3kiLCJjYW5jZWxzIiwiZm4iLCJnZXRLZXkiLCJhY3RpdmVMaXN0ZW5lcnMiLCJ1bnN1YnNjcmliZUZyb21Tb3VyY2UiLCJmbk9yT2JzZXJ2ZXIiLCJzdWJzY3JpYmVkIiwiaXNPYnNlcnZlciIsIm9iaktleXMiLCJrZXlzIiwiZm9yRWFjaCIsIm9iaktleSIsImNhbmNlbCIsImNsZWFudXAiLCJ1bnN1YnNjcmliZSIsIm9ic2VydmVyIiwiaXNMaXN0ZW5lciIsIkJlaGF2aW91clN1YmplY3QiLCJsYXN0TmV4dCIsImlzQ2hhbm5lbEFQSSIsImFyZyIsIkJvb2xlYW4iLCJDaGFubmVsbGVkT2JzZXJ2YWJsZSIsIk1hcCIsImNoYW5uZWwiLCJjIiwiY2hhbm5lbHMiLCJvblVuc3Vic2NyaWJlIiwiY2hhbm5lbEtleSIsInNldCIsIm9uU3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsU0FBU0Esc0JBQVQsQ0FBZ0NDLElBQWhDLEVBQXNDO0FBQ3BDLE1BQUlBLElBQUksS0FBSyxLQUFLLENBQWxCLEVBQXFCO0FBQ25CLFVBQU0sSUFBSUMsY0FBSixDQUFtQiwyREFBbkIsQ0FBTjtB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QmdFLE1BQXBCO0FBRUEsZUFBTztBQUFFRSxxQkFBVyxFQUFFRixNQUFmO0FBQXVCRyxrQkFBUSxFQUFFVjtBQUFqQyxTQUFQO0FBQ0Q7O0FBRUQsVUFBSVcsVUFBVSxDQUFDWCxZQUFELENBQWQsRUFBOEI7QUFDNUJtQixlQUFPLENBQUNuQyxJQUFSLENBQWF6QyxHQUFiLElBQW9CeUQsWUFBcEI7QUFDQSxhQUFLRixlQUFMLElBQXdCLENBQXhCOztBQUVBLFlBQU1TLFFBQU0sR0FBRyxTQUFUQSxRQUFTLEdBQU07QUFDbkIsZ0JBQUksQ0FBQ1QsZUFBTCxJQUF3QixDQUF4QjtBQUNBLGlCQUFPLE1BQUksQ0FBQ3VCLFFBQUwsQ0FBY2hFLEdBQWQsQ0FBa0JrRSxVQUFsQixFQUE4QnZDLElBQTlCLENBQW1DekMsR0FBbkMsQ0FBUDtBQUNBLGlCQUFPLE1BQUksQ0FBQ29ELE9BQUwsQ0FBYXBELEdBQWIsQ0FBUDs7QUFDQSxnQkFBSSxDQUFDaUUsT0FBTCxDQUFhZSxVQUFiO0FBQ0QsU0FMRDs7QUFPQSxhQUFLNUIsT0FBTCxDQUFhcEQsR0FBYjtBQUVBLGVBQU87QUFBRWtFLHFCQUFXLEVBQUVGLFFBQWY7QUFBdUJHLGtCQUFRLEVBQUVWO0FBQWpDLFNBQVA7QUFDRDtBQUNGO0FBL0hIOztBQUFBO0FBQUE7QUFrSWVsQix5RUFBZixFIiwiZmlsZSI6Ii9yZWFjdGl2ZS9vYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmVhY3RpdmUvb2JzZXJ2YWJsZS50c1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbnRlcmZhY2UgT2JzZXJ2ZXI8VD4ge1xuICBuZXh0OiBMaXN0ZW5lcjxUPlxuICBjb21wbGV0ZT86IExpc3RlbmVyXG4gIGVycm9yPzogTGlzdGVuZXI8RXJyb3I+XG59XG50eXBlIExpc3RlbmVyPFQgPSBhbnk+ID0gKHZhbHVlOiBUKSA9PiBhbnlcbnR5cGUgQ2xlYW51cCA9ICgpID0+IGFueVxuaW50ZXJmYWNlIERpY3Q8VD4ge1xuICBba2V5OiBzdHJpbmddOiBUXG59XG5leHBvcnQgaW50ZXJmYWNlIExpc3RlbmVyR3JvdXAge1xuICBuZXh0OiBEaWN0PExpc3RlbmVyPlxuICBlcnJvcjogRGljdDxMaXN0ZW5lcj5cbiAgY29tcGxldGU6IERpY3Q8TGlzdGVuZXI+XG59XG5cbmNsYXNzIE9ic2VydmFibGU8VCA9IGFueT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwXG4gIHByaXZhdGUgc3RyZWFtU291cmNlOiAob2JzZXJ2ZXI6IE9ic2VydmFibGU8VD4pID0+IENsZWFudXBcbiAgcHJpdmF0ZSBzdWJzY3JpYmVkOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSBhY3RpdmVMaXN0ZW5lcnMgPSAwXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVGcm9tU291cmNlOiBDbGVhbnVwID0gKCkgPT4ge31cbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IExpc3RlbmVyR3JvdXAgPSB7XG4gICAgbmV4dDoge30sXG4gICAgZXJyb3I6IHt9LFxuICAgIGNvbXBsZXRlOiB7fVxuICB9XG4gIHByaXZhdGUgY2FuY2VsczogRGljdDxDbGVhbnVwPiA9IHt9XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBPYnNlcnZhYmxlWydzdHJlYW1Tb3VyY2UnXSkge1xuICAgIHRoaXMuc3RyZWFtU291cmNlID0gc291cmNlXG4gICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICB0aGlzLmNvbXBsZXRlID0gdGhpcy5jb21wbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoKSB7XG4gICAgcmV0dXJuICdrJyArIHRoaXMuaW5kZXgrK1xuICB9XG5cbiAgZW1pdChrZXk6ICduZXh0JyB8ICdlcnJvcicgfCAnY29tcGxldGUnLCB2YWw/OiBUIHwgRXJyb3IpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnNba2V5XVtrXSh2YWwpXG4gICAgfVxuICB9XG5cbiAgLyogRW1pdCB0aGUgbmV4dCB2YWx1ZSAqL1xuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5lbWl0KCduZXh0JywgdmFsdWUpXG4gIH1cblxuICBlcnJvcihlcnJvcjogRXJyb3IpIHtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpXG4gIH1cblxuICAvKiBFbWl0IGFuIGVuZCBldmVudCB0byBldmVyeXRoaW5nICovXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuZW1pdCgnY29tcGxldGUnKVxuICAgIHRoaXMuZGVzdHJveSgpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNhbmNlbHMpIHtcbiAgICAgIHRoaXMuY2FuY2Vsc1trXSgpXG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95IChmbjpDbGVhbnVwKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoKVxuXG4gICAgdGhpcy5jYW5jZWxzW2tleV0gPSAoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgIGZuKClcbiAgICB9XG4gIH1cblxuICAvKiBcbiAgVGhpcyBpcyBjYWxsZWQgd2hlbiBhIG9ic2VydmVyIHVuc3Vic2NyaWJlc1xuICBpZiBpdCB3YXMgdGhlIGxhc3QgcmVtYWluaW5nIG9ic2VydmVyIHRoZW4gaXQgdW5zdWJzY3JpYmVzIGZyb20gdGhlIHNvdXJjZVxuICAqL1xuICBjbGVhbnVwKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKClcbiAgICB9XG4gIH1cblxuICAvKlxuICBTdWJzY3JpYmUgY2FuIGJlIHBhc3NlZCBlaXRoZXIgYSBcbiAgTGlzdGVuZXI6IChuZXh0VmFsKSA9PiB7fSBcbiAgICBvciBhblxuICBPYnNlcnZlcjogeyBuZXh0OiBuZXh0VmFsID0+IHt9LCBlcnJvcjogZXJyID0+IHt9LCB9XG4gICovXG4gIHN1YnNjcmliZShmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFQ+IHwgT2JzZXJ2ZXI8VD4pIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UgPSB0aGlzLnN0cmVhbVNvdXJjZSh0aGlzKVxuICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICBpZiAoaXNPYnNlcnZlcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMoZm5Pck9ic2VydmVyKSBhcyAoa2V5b2YgT2JzZXJ2ZXI8VD4pW11cbiAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzICs9IDFcblxuICAgICAgb2JqS2V5cy5mb3JFYWNoKG9iaktleSA9PiB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW29iaktleV1ba2V5XSA9IGZuT3JPYnNlcnZlcltvYmpLZXldXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzIC09IDFcbiAgICAgICAgb2JqS2V5cy5mb3JFYWNoKG9iaktleSA9PiB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW29iaktleV1ba2V5XVxuICAgICAgICB9KVxuICAgICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYW5jZWxzW2tleV0gPSBjYW5jZWxcblxuICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IGNhbmNlbCwgb2JzZXJ2ZXI6IGZuT3JPYnNlcnZlciB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLm5leHRba2V5XSA9IGZuT3JPYnNlcnZlclxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzIC09IDFcbiAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzLm5leHRba2V5XVxuICAgICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYW5jZWxzW2tleV1cblxuICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IGNhbmNlbCwgb2JzZXJ2ZXI6IGZuT3JPYnNlcnZlciB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXI8VD4ob2JqOiBhbnkpOiBvYmogaXMgT2JzZXJ2ZXI8VD4ge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLm5leHQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTGlzdGVuZXI8VD4oZm46IGFueSk6IGZuIGlzIExpc3RlbmVyPFQ+IHtcbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyogU2FtZSBhcyByZWd1bGFyIG9ic2VydmFibGUgZXhjZXB0IGl0IGFsd2F5cyBlbWl0cyB0aGUgbGFzdCB2YWx1ZSAqL1xuZXhwb3J0IGNsYXNzIEJlaGF2aW91clN1YmplY3Q8VCA9IGFueT4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcbiAgbGFzdE5leHQ6IFRcblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5lbWl0KCduZXh0JywgdmFsdWUpXG4gICAgdGhpcy5sYXN0TmV4dCA9IHZhbHVlXG4gIH1cblxuICAvKiBWZXJ5IHNpbWlsYXIgdG8gb2JzZXJ2YWJsZSBleGNlcHQgaXQgc2VuZHMgdGhlIG1vc3QgcmVjZW50IHZhbHVlIG9uIHN1YnNjcmliZSAqL1xuICBzdWJzY3JpYmUoZm5Pck9ic2VydmVyOiBMaXN0ZW5lcjxUPiB8IE9ic2VydmVyPFQ+KSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBzdXBlci5zdWJzY3JpYmUoZm5Pck9ic2VydmVyKVxuICAgIGlmIChpc09ic2VydmVyKG9ic2VydmVyLm9ic2VydmVyKSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZXIubmV4dCh0aGlzLmxhc3ROZXh0KVxuICAgIH0gZWxzZSBpZiAoaXNMaXN0ZW5lcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBmbk9yT2JzZXJ2ZXIodGhpcy5sYXN0TmV4dClcbiAgICB9XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cbn1cblxuaW50ZXJmYWNlIENoYW5uZWxBUEk8Qz4ge1xuICBvblN1YnNjcmliZTogKGNoYW5uZWw6IEMpID0+IGFueVxuICBvblVuc3Vic2NyaWJlOiAoY2hhbm5lbDogQykgPT4gYW55XG4gIGRlc3Ryb3k6ICgpID0+IGFueVxufVxuXG5mdW5jdGlvbiBpc0NoYW5uZWxBUEk8Qz4oYXJnKTogYXJnIGlzIENoYW5uZWxBUEk8Qz4ge1xuICByZXR1cm4gQm9vbGVhbihhcmcuZGVzdHJveSlcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxsZWRPYnNlcnZhYmxlPEMgPSBhbnksIFYgPSBhbnk+IHtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMFxuICBwcml2YXRlIHN0cmVhbVNvdXJjZTogKG9ic2VydmVyOiBDaGFubmVsbGVkT2JzZXJ2YWJsZTxDLCBWPikgPT4gQ2xlYW51cCB8IENoYW5uZWxBUEk8Qz5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVkOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSBhY3RpdmVMaXN0ZW5lcnMgPSAwXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVGcm9tU291cmNlOiBDbGVhbnVwIHwgQ2hhbm5lbEFQSTxDPiA9ICgpID0+IHt9XG4gIGNoYW5uZWxzOiBNYXA8QywgTGlzdGVuZXJHcm91cD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSBjYW5jZWxzOiBEaWN0PENsZWFudXA+ID0ge31cblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IENoYW5uZWxsZWRPYnNlcnZhYmxlWydzdHJlYW1Tb3VyY2UnXSkge1xuICAgIHRoaXMuc3RyZWFtU291cmNlID0gc291cmNlXG4gICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICB0aGlzLmNvbXBsZXRlID0gdGhpcy5jb21wbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoKSB7XG4gICAgcmV0dXJuICdrJyArIHRoaXMuaW5kZXgrK1xuICB9XG5cbiAgZW1pdChjaGFubmVsOiBDLCBrZXk6ICduZXh0JyB8ICdlcnJvcicgfCAnY29tcGxldGUnLCB2YWw/OiBWIHwgRXJyb3IpIHtcbiAgICBjb25zdCBjID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbClcbiAgICBmb3IgKGNvbnN0IGsgaW4gY1trZXldKSB7XG4gICAgICBjW2tleV1ba10odmFsKVxuICAgIH1cbiAgfVxuXG4gIG5leHQoY2hhbm5lbDogQywgdmFsdWU6IFYpIHtcbiAgICB0aGlzLmVtaXQoY2hhbm5lbCwgJ25leHQnLCB2YWx1ZSlcbiAgfVxuICBlcnJvcihjaGFubmVsOiBDLCBlcnJvcjogRXJyb3IpIHtcbiAgICB0aGlzLmVtaXQoY2hhbm5lbCwgJ2Vycm9yJywgZXJyb3IpXG4gIH1cbiAgY29tcGxldGUoY2hhbm5lbDogQykge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnY29tcGxldGUnKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5jYW5jZWxzKSB7XG4gICAgICB0aGlzLmNhbmNlbHNba10oKVxuICAgIH1cbiAgfVxuXG4gIG9uRGVzdHJveSAoZm46Q2xlYW51cCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5KClcblxuICAgIHRoaXMuY2FuY2Vsc1trZXldID0gKCkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXMuY2FuY2Vsc1trZXldXG4gICAgICBmbigpXG4gICAgfVxuICB9XG5cbiAgLyogXG4gIFRoaXMgaXMgY2FsbGVkIHdoZW4gYSBvYnNlcnZlciB1bnN1YnNjcmliZXNcbiAgaWYgaXQgd2FzIHRoZSBsYXN0IHJlbWFpbmluZyBvYnNlcnZlciB0aGVuIGl0IHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBzb3VyY2VcbiAgKi9cbiAgY2xlYW51cChjaGFubmVsOiBDKSB7XG4gICAgaWYgKGlzQ2hhbm5lbEFQSSh0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSkpIHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlLm9uVW5zdWJzY3JpYmUoY2hhbm5lbClcblxuICAgIGlmICghdGhpcy5hY3RpdmVMaXN0ZW5lcnMpIHtcbiAgICAgIGlzQ2hhbm5lbEFQSSh0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSkgPyB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZS5kZXN0cm95KCkgOiB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSgpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgU3Vic2NyaWJlIGNhbiBiZSBwYXNzZWQgZWl0aGVyIGEgXG4gIExpc3RlbmVyOiAobmV4dFZhbCkgPT4ge30gXG4gICAgb3IgYW5cbiAgT2JzZXJ2ZXI6IHsgbmV4dDogbmV4dFZhbCA9PiB7fSwgZXJyb3I6IGVyciA9PiB7fSwgfVxuICAqL1xuICBzdWJzY3JpYmUoY2hhbm5lbEtleTogQywgZm5Pck9ic2VydmVyOiBMaXN0ZW5lcjxWPiB8IE9ic2VydmVyPFY+KSB7XG4gICAgaWYgKCF0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlID0gdGhpcy5zdHJlYW1Tb3VyY2UodGhpcylcbiAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IHRydWVcbiAgICB9XG5cbiAgICBsZXQgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZ2V0KGNoYW5uZWxLZXkpXG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoKVxuXG4gICAgaWYgKCFjaGFubmVsKSB7XG4gICAgICBjaGFubmVsID0geyBuZXh0OiB7fSwgZXJyb3I6IHt9LCBjb21wbGV0ZToge30gfVxuICAgICAgdGhpcy5jaGFubmVscy5zZXQoY2hhbm5lbEtleSwgY2hhbm5lbClcbiAgICB9XG5cbiAgICBpZiAoaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2Uub25TdWJzY3JpYmUoY2hhbm5lbEtleSlcbiAgICB9XG5cbiAgICAvKiAgKi9cbiAgICBpZiAoaXNPYnNlcnZlcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMoZm5Pck9ic2VydmVyKSBhcyAoa2V5b2YgT2JzZXJ2ZXI8Vj4pW11cbiAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzICs9IDFcblxuICAgICAgb2JqS2V5cy5mb3JFYWNoKG9iaktleSA9PiB7XG4gICAgICAgIGNoYW5uZWxbb2JqS2V5XVtrZXldID0gZm5Pck9ic2VydmVyW29iaktleV1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBjb25zdCBjID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbEtleSlcbiAgICAgICAgb2JqS2V5cy5mb3JFYWNoKG9iaktleSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGNbb2JqS2V5XVtrZXldXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoY2hhbm5lbEtleSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYW5jZWxzW2tleV0gPSBjYW5jZWxcblxuICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IGNhbmNlbCwgb2JzZXJ2ZXI6IGZuT3JPYnNlcnZlciB9XG4gICAgfVxuXG4gICAgaWYgKGlzTGlzdGVuZXIoZm5Pck9ic2VydmVyKSkge1xuICAgICAgY2hhbm5lbC5uZXh0W2tleV0gPSBmbk9yT2JzZXJ2ZXJcbiAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzICs9IDFcblxuICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyAtPSAxXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsS2V5KS5uZXh0W2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXMuY2FuY2Vsc1trZXldXG4gICAgICAgIHRoaXMuY2xlYW51cChjaGFubmVsS2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XVxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==