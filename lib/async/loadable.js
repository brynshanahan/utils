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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/async/loadable.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  var _LP = Date.now();

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(4, 2);

      break;
    }

    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      var _LP = Date.now();

      while (true) {
        if (Date.now() - _LP > 300) {
          (function () {
            throw Error('Infinite loop');
          })(245, 6);

          break;
        }

        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      var _LP2 = Date.now();

      while (keys.length) {
        if (Date.now() - _LP2 > 300) {
          (function () {
            throw Error('Infinite loop');
          })(445, 6);

          break;
        }

        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          var _LP3 = Date.now();

          while (++i < iterable.length) {
            if (Date.now() - _LP3 > 300) {
              (function () {
                throw Error('Infinite loop');
              })(475, 10);

              break;
            }

            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      var _LP4 = Date.now();

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        if (Date.now() - _LP4 > 300) {
          (function () {
            throw Error('Infinite loop');
          })(564, 6);

          break;
        }

        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      var _LP5 = Date.now();

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        if (Date.now() - _LP5 > 300) {
          (function () {
            throw Error('Infinite loop');
          })(604, 6);

          break;
        }

        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      var _LP6 = Date.now();

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        if (Date.now() - _LP6 > 300) {
          (function () {
            throw Error('Infinite loop');
          })(657, 6);

          break;
        }

        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      var _LP7 = Date.now();

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        if (Date.now() - _LP7 > 300) {
          (function () {
            throw Error('Infinite loop');
          })(668, 6);

          break;
        }

        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/async/loadable.ts":
/*!*******************************!*\
  !*** ./src/async/loadable.ts ***!
  \*******************************/
/*! exports provided: Loadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loadable", function() { return Loadable; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reactive_subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reactive/subject */ "./src/reactive/subject.ts");








function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var Loadable = /*#__PURE__*/function (_Subject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Loadable, _Subject);

  var _super = _createSuper(Loadable);

  function Loadable(resources) {
    var _this;

    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Loadable);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "promises", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "loaded", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "start", Date.now());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "timeout", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "complete", false);

    _this.promises = resources;
    _this.loaded = 0;

    var _iterator = _createForOfIteratorHelper(_this.promises),
        _step;

    try {
      var _LP = Date.now();

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        if (Date.now() - _LP > 300) {
          (function () {
            throw Error('Infinite loop');
          })(33, 4);

          break;
        }

        var promise = _step.value;
        promise.then(function (arg) {
          _this.loaded++;

          _this.emitProgress();

          return arg;
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (timeout) {
      _this.timeout = setTimeout(function () {
        _this.emitComplete();
      }, timeout);
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Loadable, [{
    key: "finished",
    value: function finished() {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.complete) {
          resolve();
        } else {
          _this2.once('complete', function (update) {
            resolve();
          });
        }
      });
    }
  }, {
    key: "emitComplete",
    value: function emitComplete() {
      if (this.complete) return;
      this.complete = true;
      this.emit('complete', {
        percent: 1,
        start: this.start,
        time: Date.now() - this.start
      });
    }
  }, {
    key: "emitProgress",
    value: function emitProgress() {
      var update = {
        percent: this.loaded / this.promises.length,
        start: this.start,
        time: Date.now() - this.start
      };
      this.emit('progress', update);

      if (update.percent === 1) {
        this.emitComplete();
      }
    }
  }]);

  return Loadable;
}(_reactive_subject__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "./src/reactive/subject.ts":
/*!*********************************!*\
  !*** ./src/reactive/subject.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subject; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);







function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// const Symbol = str => str + '_' + (Math.random() * 10).toFixed(3)
var subject = Symbol("subject");

var Subject = /*#__PURE__*/function () {
  function Subject() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Subject);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(this, subject, void 0);

    this[subject] = {
      index: 0,
      listeners: {},
      cancels: {},
      key: function key() {
        return "listener_".concat(this[subject].index++);
      }
    }; // Bind all the methods

    this.on = this.on.bind(this);
    this[subject].key = this[subject].key.bind(this);
    this.emit = this.emit.bind(this);
    this.once = this.once.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  /* Listen to  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Subject, [{
    key: "on",
    value: function on(nameOrCallback, fn) {
      var _this = this;

      var name = nameOrCallback;
      var callback = fn;

      if (!fn && typeof nameOrCallback === "function") {
        callback = nameOrCallback;
        /* Listen to all events */

        name = subject;
      } // Every event listener is given it's own key


      var key = this[subject].key();
      var eventNames = typeof name === "string" ? name.split(" ") : [name];

      var _iterator = _createForOfIteratorHelper(eventNames),
          _step;

      try {
        var _LP2 = Date.now();

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (Date.now() - _LP2 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(57, 4);

            break;
          }

          var eventName = _step.value;
          // If this is the first listener of type eventName then listeners[eventName] will be empty
          if (!this[subject].listeners[eventName]) this[subject].listeners[eventName] = {}; // Add the listener to the listener object

          this[subject].listeners[eventName][key] = callback;
        } // Cancel function deletes the listener and itself from Subject

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var cancelled = false;

      var _cancels = function cancels() {
        if (cancelled) return;

        _cancels = function cancels() {};

        cancelled = true;

        var _iterator2 = _createForOfIteratorHelper(eventNames),
            _step2;

        try {
          var _LP = Date.now();

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            if (Date.now() - _LP > 300) {
              (function () {
                throw Error('Infinite loop');
              })(72, 6);

              break;
            }

            var eventName = _step2.value;
            delete _this[subject].listeners[eventName][key];
            delete _this[subject].cancels[key];

            if (!Object.keys(_this[subject].listeners[eventName]).length) {
              delete _this[subject].listeners[eventName];
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }; // Add cancel to the subject array


      this[subject].cancels[key] = _cancels; // Return the event diposer

      return _cancels;
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // @ts-ignore
      if (name !== subject) {
        // @ts-ignore
        this.emit.apply(this, [subject].concat(args));
      } // If this even is in the listeners object


      if (this[subject].listeners[name]) {
        return Object.values(this[subject].listeners[name]).map(function (fn) {
          return fn.apply(void 0, args);
        });
      }
    }
  }, {
    key: "getHandlers",
    value: function getHandlers(name) {
      var _this2 = this;

      return {
        get: function get() {
          var handlers = [];

          for (var _key2 in _this2[subject].listeners[name]) {
            handlers.push(_this2[subject].listeners[name][_key2]);
          }

          return handlers;
        },
        map: function map(fn) {
          var results = [];

          for (var _key3 in _this2[subject].listeners[name]) {
            var handler = _this2[subject].listeners[name][_key3];
            results.push(fn(handler, _key3));
          }

          return results;
        },
        forEach: function forEach(fn) {
          for (var _key4 in _this2[subject].listeners[name]) {
            var handler = _this2[subject].listeners[name][_key4];
            fn(handler, _key4);
          }
        },
        reduce: function reduce(fn, val) {
          var prev = val;

          for (var _key5 in _this2[subject].listeners[name]) {
            var handler = _this2[subject].listeners[name][_key5];
            prev = fn(prev, handler, _key5);
          }
        }
      };
    }
  }, {
    key: "reduce",
    value: function reduce(name) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key6 = 1; _key6 < _len2; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      var value = args[0],
          rest = args.slice(1);
      var prev;

      if (this[subject].listeners[name]) {
        return this.getHandlers(name).reduce(function (memo, fn) {
          var v = fn.apply(void 0, [memo].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(rest)));

          if (typeof v !== "undefined") {
            prev = v;
            return v;
          } else {
            return prev;
          }
        }, value);
      }

      return value;
    }
  }, {
    key: "asyncReduce",
    value: function () {
      var _asyncReduce = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
        var _len3,
            args,
            _key7,
            value,
            rest,
            prev,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len3 = _args.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key7 = 1; _key7 < _len3; _key7++) {
                  args[_key7 - 1] = _args[_key7];
                }

                value = args[0], rest = args.slice(1);

                if (!this[subject].listeners[name]) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", Object.values(this[subject].listeners[name]).reduce(function (last, fn) {
                  var v = fn.apply(void 0, [last].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(rest)));

                  if (typeof v !== "undefined") {
                    last = v;
                    return v;
                  }

                  return last;
                }, value));

              case 4:
                return _context.abrupt("return", value);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function asyncReduce(_x) {
        return _asyncReduce.apply(this, arguments);
      }

      return asyncReduce;
    }()
  }, {
    key: "add",
    value: function add(eventName, fn) {
      return this.on(eventName, fn);
    }
  }, {
    key: "once",
    value: function once(name, fn) {
      // Use var to hoist variable (not sure if needed)
      var cancel = this.on(name, function () {
        if (cancel) cancel();
        fn.apply(void 0, arguments);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object.values(this[subject].cancels).forEach(function (fn) {
        return fn();
      });
    }
  }]);

  return Subject;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2xvYWRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9zdWJqZWN0LnRzIl0sIm5hbWVzIjpbIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5TGlrZVRvQXJyYXkiLCJyZXF1aXJlIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiaXNBcnJheSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl90eXBlb2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsImNhbGwiLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibWluTGVuIiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJuYW1lIiwidGVzdCIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVjb3JkIiwicmVzdWx0IiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJuZXh0Iiwic3RhdGUiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiIsIm9yaWdpbmFsTW9kdWxlIiwid2VicGFja1BvbHlmaWxsIiwiY2hpbGRyZW4iLCJnZXQiLCJsIiwiTG9hZGFibGUiLCJyZXNvdXJjZXMiLCJ0aW1lb3V0IiwiRGF0ZSIsIm5vdyIsInByb21pc2VzIiwibG9hZGVkIiwicHJvbWlzZSIsImVtaXRQcm9ncmVzcyIsInNldFRpbWVvdXQiLCJlbWl0Q29tcGxldGUiLCJvbmNlIiwidXBkYXRlIiwiZW1pdCIsInBlcmNlbnQiLCJzdGFydCIsInRpbWUiLCJTdWJqZWN0Iiwic3ViamVjdCIsImluZGV4IiwibGlzdGVuZXJzIiwiY2FuY2VscyIsIm9uIiwiYmluZCIsImRlc3Ryb3kiLCJuYW1lT3JDYWxsYmFjayIsImNhbGxiYWNrIiwiZXZlbnROYW1lcyIsInNwbGl0IiwiZXZlbnROYW1lIiwiY2FuY2VsbGVkIiwibWFwIiwiaGFuZGxlcnMiLCJyZXN1bHRzIiwiaGFuZGxlciIsInJlZHVjZSIsInZhbCIsInJlc3QiLCJnZXRIYW5kbGVycyIsIm1lbW8iLCJ2IiwibGFzdCIsImNhbmNlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FB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US9NLEk7O3FCQUVyQixLQUFLNEwsT0FBTCxFQUFjRSxTQUFkLENBQXdCdEksSUFBeEIsQzs7Ozs7aURBQ0t4QyxNQUFNLENBQUMyRSxNQUFQLENBQWMsS0FBS2lHLE9BQUwsRUFBY0UsU0FBZCxDQUF3QnRJLElBQXhCLENBQWQsRUFBNkNxSixNQUE3QyxDQUFvRCxVQUFDTSxJQUFELEVBQU9wTixFQUFQLEVBQWM7QUFDdkUsc0JBQU1tTixDQUFDLEdBQUduTixFQUFFLE1BQUYsVUFBR29OLElBQUgseUZBQVlKLElBQVosR0FBVjs7QUFDQSxzQkFBSSxPQUFPRyxDQUFQLEtBQWEsV0FBakIsRUFBOEI7QUFDNUJDLHdCQUFJLEdBQUdELENBQVA7QUFDQSwyQkFBT0EsQ0FBUDtBQUNEOztBQUNELHlCQUFPQyxJQUFQO0FBQ0QsaUJBUE0sRUFPSjFOLEtBUEksQzs7O2lEQVVGQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBR3VCOE0sUyxFQUFjeE0sRSxFQUE2QjtBQUN6RSxhQUFPLEtBQUtpTSxFQUFMLENBQVFPLFNBQVIsRUFBbUJ4TSxFQUFuQixDQUFQO0FBQ0Q7Ozt5QkFFZ0N5RCxJLEVBQVN6RCxFLEVBQTZCO0FBQ3JFO0FBQ0EsVUFBSXFOLE1BQU0sR0FBRyxLQUFLcEIsRUFBTCxDQUFReEksSUFBUixFQUFjLFlBQWE7QUFDdEMsWUFBSTRKLE1BQUosRUFBWUEsTUFBTTtBQUNsQnJOLFVBQUUsTUFBRjtBQUNELE9BSFksQ0FBYjtBQUlEOzs7OEJBRVM7QUFDUmlCLFlBQU0sQ0FBQzJFLE1BQVAsQ0FBYyxLQUFLaUcsT0FBTCxFQUFjRyxPQUE1QixFQUFxQ2hHLE9BQXJDLENBQTZDLFVBQUFoRyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxFQUFOO0FBQUEsT0FBL0M7QUFDRCIsImZpbGUiOiIvYXN5bmMvbG9hZGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hc3luYy9sb2FkYWJsZS50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vcmVhY3RpdmUvc3ViamVjdCdcblxudHlwZSBMb2FkYWJsZUV2ZW50cyA9IHtcbiAgcHJvZ3Jlc3M6IFtcbiAgICB7XG4gICAgICBwZXJjZW50OiBudW1iZXJcbiAgICAgIHN0YXJ0OiBudW1iZXJcbiAgICAgIHRpbWU6IG51bWJlclxuICAgIH1cbiAgXVxuICBjb21wbGV0ZTogW1xuICAgIHtcbiAgICAgIHBlcmNlbnQ6IDFcbiAgICAgIHN0YXJ0OiBudW1iZXJcbiAgICAgIHRpbWU6IG51bWJlclxuICAgIH1cbiAgXVxufVxuZXhwb3J0IGNsYXNzIExvYWRhYmxlIGV4dGVuZHMgU3ViamVjdDxMb2FkYWJsZUV2ZW50cz4ge1xuICBwcm9taXNlczogUHJvbWlzZTxhbnk+W11cbiAgbG9hZGVkOiBudW1iZXJcblxuICBzdGFydDogbnVtYmVyID0gRGF0ZS5ub3coKVxuICB0aW1lb3V0Pzogc3RyaW5nIHwgTm9kZUpTLlRpbWVvdXRcbiAgY29tcGxldGUgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHJlc291cmNlczogUHJvbWlzZTxhbnk+W10sIHRpbWVvdXQgPSAwKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5wcm9taXNlcyA9IHJlc291cmNlc1xuICAgIHRoaXMubG9hZGVkID0gMFxuXG4gICAgZm9yIChsZXQgcHJvbWlzZSBvZiB0aGlzLnByb21pc2VzKSB7XG4gICAgICBwcm9taXNlLnRoZW4oYXJnID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWQrK1xuICAgICAgICB0aGlzLmVtaXRQcm9ncmVzcygpXG4gICAgICAgIHJldHVybiBhcmdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXRDb21wbGV0ZSgpXG4gICAgICB9LCB0aW1lb3V0KVxuICAgIH1cbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbmNlKCdjb21wbGV0ZScsIHVwZGF0ZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgZW1pdENvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXRlKSByZXR1cm5cbiAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgIHRoaXMuZW1pdCgnY29tcGxldGUnLCB7XG4gICAgICBwZXJjZW50OiAxLFxuICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICB0aW1lOiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydCxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UHJvZ3Jlc3MoKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgcGVyY2VudDogdGhpcy5sb2FkZWQgLyB0aGlzLnByb21pc2VzLmxlbmd0aCxcbiAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQsXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdwcm9ncmVzcycsIHVwZGF0ZSlcblxuICAgIGlmICh1cGRhdGUucGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5lbWl0Q29tcGxldGUoKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gY29uc3QgU3ltYm9sID0gc3RyID0+IHN0ciArICdfJyArIChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoMylcbmNvbnN0IHN1YmplY3QgPSBTeW1ib2woXCJzdWJqZWN0XCIpXG5cbnR5cGUgQ2FsbGJhY2s8QXJncyBleHRlbmRzIFtdID0gYW55W10sIFJlc3VsdCA9IGFueT4gPSAoLi4uYXJnczogQXJncykgPT4gUmVzdWx0XG5cbnR5cGUgU3ViamVjdFByb3BlcnRpZXM8VHlwZXM+ID0ge1xuICBpbmRleDogbnVtYmVyXG4gIGxpc3RlbmVyczoge1xuICAgIFtrIGluIGtleW9mIFR5cGVzXToge1xuICAgICAgW2w6IHN0cmluZ106IENhbGxiYWNrPFR5cGVzW2tdPlxuICAgIH1cbiAgfVxuICBjYW5jZWxzOiB7XG4gICAgW2s6IHN0cmluZ106IENhbGxiYWNrXG4gIH1cbiAga2V5OiAoKSA9PiBzdHJpbmdcbn1cblxudHlwZSBHZXRFbGVtZW50VHlwZTxUIGV4dGVuZHMgQXJyYXk8YW55Pj4gPSBUIGV4dGVuZHMgKGluZmVyIFUpW10gPyBVIDogbmV2ZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdDxFdmVudFR5cGVzID0geyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0+IHtcbiAgW3N1YmplY3RdOiBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXNbc3ViamVjdF0gPSB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICBjYW5jZWxzOiB7fSxcbiAgICAgIGtleSgpIHtcbiAgICAgICAgcmV0dXJuIGBsaXN0ZW5lcl8ke3RoaXNbc3ViamVjdF0uaW5kZXgrK31gXG4gICAgICB9XG4gICAgfSBhcyBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gICAgLy8gQmluZCBhbGwgdGhlIG1ldGhvZHNcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpXG4gICAgdGhpc1tzdWJqZWN0XS5rZXkgPSB0aGlzW3N1YmplY3RdLmtleS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbWl0ID0gdGhpcy5lbWl0LmJpbmQodGhpcylcbiAgICB0aGlzLm9uY2UgPSB0aGlzLm9uY2UuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpXG4gIH1cblxuICAvKiBMaXN0ZW4gdG8gICovXG4gIG9uPEtleSBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWVPckNhbGxiYWNrOiBLZXkgfCBDYWxsYmFjaywgZm4/OiBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+KSB7XG4gICAgbGV0IG5hbWUgPSBuYW1lT3JDYWxsYmFjayBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgbGV0IGNhbGxiYWNrID0gZm4gYXMgQ2FsbGJhY2sgfCBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+XG4gICAgaWYgKCFmbiAmJiB0eXBlb2YgbmFtZU9yQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lT3JDYWxsYmFjayBhcyBDYWxsYmFja1xuICAgICAgLyogTGlzdGVuIHRvIGFsbCBldmVudHMgKi9cbiAgICAgIG5hbWUgPSAoc3ViamVjdCBhcyB1bmtub3duKSBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZXZlbnQgbGlzdGVuZXIgaXMgZ2l2ZW4gaXQncyBvd24ga2V5XG4gICAgY29uc3Qga2V5ID0gdGhpc1tzdWJqZWN0XS5rZXkoKVxuXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiID8gKG5hbWUuc3BsaXQoXCIgXCIpIGFzIChrZXlvZiBFdmVudFR5cGVzKVtdKSA6IFtuYW1lXVxuXG4gICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgbGlzdGVuZXIgb2YgdHlwZSBldmVudE5hbWUgdGhlbiBsaXN0ZW5lcnNbZXZlbnROYW1lXSB3aWxsIGJlIGVtcHR5XG4gICAgICBpZiAoIXRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSB7fVxuXG4gICAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBsaXN0ZW5lciBvYmplY3RcbiAgICAgIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV1ba2V5XSA9IGNhbGxiYWNrXG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGZ1bmN0aW9uIGRlbGV0ZXMgdGhlIGxpc3RlbmVyIGFuZCBpdHNlbGYgZnJvbSBTdWJqZWN0XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgbGV0IGNhbmNlbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgIGNhbmNlbHMgPSAoKSA9PiB7fVxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdW2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldXG5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGNhbmNlbCB0byB0aGUgc3ViamVjdCBhcnJheVxuICAgIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldID0gY2FuY2Vsc1xuXG4gICAgLy8gUmV0dXJuIHRoZSBldmVudCBkaXBvc2VyXG4gICAgcmV0dXJuIGNhbmNlbHNcbiAgfVxuXG4gIGVtaXQ8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5hbWUgIT09IHN1YmplY3QpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuZW1pdChzdWJqZWN0LCAuLi5hcmdzKVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGV2ZW4gaXMgaW4gdGhlIGxpc3RlbmVycyBvYmplY3RcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5tYXAoZm4gPT4gZm4oLi4uYXJncykpXG4gICAgfVxuICB9XG5cbiAgZ2V0SGFuZGxlcnM8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPltdID0gW11cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzXG4gICAgICB9LFxuICAgICAgbWFwOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXVtrZXldXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZuKGhhbmRsZXIsIGtleSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV1cbiAgICAgICAgICBmbihoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWR1Y2U6IChcbiAgICAgICAgZm46IENhbGxiYWNrPFtFdmVudFR5cGVzW1RdWzBdLCBDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+LFxuICAgICAgICB2YWw/OiBFdmVudFR5cGVzW1RdWzBdXG4gICAgICApID0+IHtcbiAgICAgICAgbGV0IHByZXYgPSB2YWxcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV1ba2V5XVxuICAgICAgICAgIHByZXYgPSBmbihwcmV2LCBoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWR1Y2U8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pOiBFdmVudFR5cGVzW1RdWzBdIHtcbiAgICBjb25zdCBbdmFsdWUsIC4uLnJlc3RdID0gYXJnc1xuICAgIGxldCBwcmV2XG4gICAgaWYgKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIYW5kbGVycyhuYW1lKS5yZWR1Y2UoKG1lbW8sIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihtZW1vLCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBwcmV2ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgICAgfVxuICAgICAgfSwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBhc3luYyBhc3luY1JlZHVjZTxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCwgLi4uYXJnczogRXZlbnRUeXBlc1tUXSk6IEV2ZW50VHlwZXNbVF1bMF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgLi4ucmVzdF0gPSBhcmdzXG4gICAgbGV0IHByZXZcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5yZWR1Y2UoKGxhc3QsIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihsYXN0LCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBsYXN0ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhc3RcbiAgICAgIH0sIHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgYWRkPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihldmVudE5hbWU6IFQsIGZuOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihuYW1lOiBULCBmbjogQ2FsbGJhY2s8RXZlbnRUeXBlc1tUXT4pIHtcbiAgICAvLyBVc2UgdmFyIHRvIGhvaXN0IHZhcmlhYmxlIChub3Qgc3VyZSBpZiBuZWVkZWQpXG4gICAgdmFyIGNhbmNlbCA9IHRoaXMub24obmFtZSwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjYW5jZWwpIGNhbmNlbCgpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIE9iamVjdC52YWx1ZXModGhpc1tzdWJqZWN0XS5jYW5jZWxzKS5mb3JFYWNoKGZuID0+IGZuKCkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=