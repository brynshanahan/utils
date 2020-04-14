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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reactive/stateful.ts");
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

/***/ "./src/reactive/stateful.ts":
/*!**********************************!*\
  !*** ./src/reactive/stateful.ts ***!
  \**********************************/
/*! exports provided: allChanges, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allChanges", function() { return allChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stateful; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject */ "./src/reactive/subject.ts");









function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var allChanges = 'all_changes' + Math.random().toFixed(4);

var Stateful = /*#__PURE__*/function (_Subject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Stateful, _Subject);

  var _super = _createSuper(Stateful);

  function Stateful() {
    var _this;

    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Stateful);

    _this = _super.call(this);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "initialState", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "isFirstChange", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "hasChanged", void 0);

    _this.state = clone(initialState || {});
    _this.initialState = initialState;
    _this.isFirstChange = true;
    _this.hasChanged = [];
    _this.setState = _this.setState.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.changed = _this.changed.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.listen = _this.listen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Stateful, [{
    key: "setState",
    value: function setState(stateOrFn) {
      var _this2 = this;

      // You can pass a function that returns state or a plain object
      var prevState = clone(this.state);
      var recievedState = typeof stateOrFn === 'function' ? stateOrFn(this.state) : stateOrFn; // Only get keys which have changed

      var changedKeys = Object.keys(recievedState).filter(function (key) {
        return recievedState[key] !== prevState[key];
      });
      if (!changedKeys.length) return; // Merge this.state with the recievedState

      var currentState = clone(this.state, recievedState);
      this.state = currentState;
      var update = {
        prevState: prevState,
        currentState: currentState,
        recievedState: recievedState,
        state: currentState,
        self: this,
        currentChanges: changedKeys,
        changed: changedKeys,
        isFirstChange: this.isFirstChange
      }; // This emits changes for listeners that are listening without a key
      // eg this.changed(() => { ...something changed }) || this.changed('myKey', () => { ...mykey changed })

      this.emit(allChanges, update); // Emit events for all the keys in changedKeys

      var _iterator = _createForOfIteratorHelper(changedKeys),
          _step;

      try {
        var _LP = Date.now();

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (Date.now() - _LP > 300) {
            (function () {
              throw Error('Infinite loop');
            })(60, 4);

            break;
          }

          var key = _step.value;
          var changeForKey = clone(update, {
            isFirstChange: !this.hasChanged.includes(key)
          });
          this.emit(key, changeForKey);
        } // No longer the first change

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (changedKeys.length && this.isFirstChange) {
        this.isFirstChange = false;
      } // Add changed keys to hasChanged


      this.hasChanged = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.hasChanged), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(changedKeys.filter(function (x) {
        return !_this2.hasChanged.includes(x);
      })));
    }
  }, {
    key: "changed",
    value: function changed() {
      // On is inherited from Subject
      if (arguments.length === 2) {
        return this.on(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
      } else {
        return this.on(allChanges, arguments.length <= 0 ? undefined : arguments[0]);
      }
    } // Alias for this.changed(() => {})

  }, {
    key: "listen",
    value: function listen(fn) {
      return this.on(allChanges, fn);
    }
  }]);

  return Stateful;
}(_subject__WEBPACK_IMPORTED_MODULE_8__["default"]);



function clone(objs) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}, objs].concat(rest));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9zdGF0ZWZ1bC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUvc3ViamVjdC50cyJdLCJuYW1lcyI6WyJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImxlbmd0aCIsImkiLCJhcnIyIiwiQXJyYXkiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheUxpa2VUb0FycmF5IiwicmVxdWlyZSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsImlzQXJyYXkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfdHlwZW9mIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJjYWxsIiwiX3NldFByb3RvdHlwZU9mIiwicCIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsInRlc3QiLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwibmV4dCIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJvcmlnaW5hbE1vZHVsZSIsIndlYnBhY2tQb2x5ZmlsbCIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImFsbENoYW5nZXMiLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCIsIlN0YXRlZnVsIiwiaW5pdGlhbFN0YXRlIiwiY2xvbmUiLCJpc0ZpcnN0Q2hhbmdlIiwiaGFzQ2hhbmdlZCIsInNldFN0YXRlIiwiYmluZCIsImNoYW5nZWQiLCJsaXN0ZW4iLCJzdGF0ZU9yRm4iLCJwcmV2U3RhdGUiLCJyZWNpZXZlZFN0YXRlIiwiY2hhbmdlZEtleXMiLCJmaWx0ZXIiLCJjdXJyZW50U3RhdGUiLCJ1cGRhdGUiLCJjdXJyZW50Q2hhbmdlcyIsImVtaXQiLCJjaGFuZ2VGb3JLZXkiLCJpbmNsdWRlcyIsIngiLCJvbiIsIlN1YmplY3QiLCJvYmpzIiwicmVzdCIsImFzc2lnbiIsInN1YmplY3QiLCJpbmRleCIsImxpc3RlbmVycyIsImNhbmNlbHMiLCJvbmNlIiwiZGVzdHJveSIsIm5hbWVPckNhbGxiYWNrIiwiY2FsbGJhY2siLCJldmVudE5hbWVzIiwic3BsaXQiLCJldmVudE5hbWUiLCJjYW5jZWxsZWQiLCJtYXAiLCJoYW5kbGVycyIsInJlc3VsdHMiLCJoYW5kbGVyIiwicmVkdWNlIiwidmFsIiwiZ2V0SGFuZGxlcnMiLCJtZW1vIiwi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QixLQUFLd00sT0FBTCxFQUFjRSxTQUFkLENBQXdCbEosSUFBeEIsQzs7Ozs7aURBQ0t4QyxNQUFNLENBQUMyRSxNQUFQLENBQWMsS0FBSzZHLE9BQUwsRUFBY0UsU0FBZCxDQUF3QmxKLElBQXhCLENBQWQsRUFBNkNnSyxNQUE3QyxDQUFvRCxVQUFDSyxJQUFELEVBQU85TixFQUFQLEVBQWM7QUFDdkUsc0JBQU02TixDQUFDLEdBQUc3TixFQUFFLE1BQUYsVUFBRzhOLElBQUgseUZBQVl2QixJQUFaLEdBQVY7O0FBQ0Esc0JBQUksT0FBT3NCLENBQVAsS0FBYSxXQUFqQixFQUE4QjtBQUM1QkMsd0JBQUksR0FBR0QsQ0FBUDtBQUNBLDJCQUFPQSxDQUFQO0FBQ0Q7O0FBQ0QseUJBQU9DLElBQVA7QUFDRCxpQkFQTSxFQU9KcE8sS0FQSSxDOzs7aURBVUZBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHdUJ5TixTLEVBQWNuTixFLEVBQTZCO0FBQ3pFLGFBQU8sS0FBS29NLEVBQUwsQ0FBUWUsU0FBUixFQUFtQm5OLEVBQW5CLENBQVA7QUFDRDs7O3lCQUVnQ3lELEksRUFBU3pELEUsRUFBNkI7QUFDckU7QUFDQSxVQUFJK04sTUFBTSxHQUFHLEtBQUszQixFQUFMLENBQVEzSSxJQUFSLEVBQWMsWUFBYTtBQUN0QyxZQUFJc0ssTUFBSixFQUFZQSxNQUFNO0FBQ2xCL04sVUFBRSxNQUFGO0FBQ0QsT0FIWSxDQUFiO0FBSUQ7Ozs4QkFFUztBQUNSaUIsWUFBTSxDQUFDMkUsTUFBUCxDQUFjLEtBQUs2RyxPQUFMLEVBQWNHLE9BQTVCLEVBQXFDNUcsT0FBckMsQ0FBNkMsVUFBQWhHLEVBQUU7QUFBQSxlQUFJQSxFQUFFLEVBQU47QUFBQSxPQUEvQztBQUNEIiwiZmlsZSI6Ii9yZWFjdGl2ZS9zdGF0ZWZ1bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlYWN0aXZlL3N0YXRlZnVsLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgU3ViamVjdCBmcm9tICcuL3N1YmplY3QnXG5cbmV4cG9ydCBjb25zdCBhbGxDaGFuZ2VzID0gJ2FsbF9jaGFuZ2VzJyArIE1hdGgucmFuZG9tKCkudG9GaXhlZCg0KVxuXG5pbnRlcmZhY2UgRGljdCB7XG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxudHlwZSBLZXkgPSBzdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVmdWw8UyBleHRlbmRzIHt9ID0gRGljdD4gZXh0ZW5kcyBTdWJqZWN0IHtcbiAgc3RhdGU6IFNcbiAgaW5pdGlhbFN0YXRlOiBTXG4gIGlzRmlyc3RDaGFuZ2U6IGJvb2xlYW5cbiAgaGFzQ2hhbmdlZDogS2V5W11cblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGU6IFMgPSB7fSBhcyBTKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IGNsb25lKGluaXRpYWxTdGF0ZSB8fCAoe30gYXMgUykpXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICB0aGlzLmlzRmlyc3RDaGFuZ2UgPSB0cnVlXG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gW11cblxuICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZWQgPSB0aGlzLmNoYW5nZWQuYmluZCh0aGlzKVxuICAgIHRoaXMubGlzdGVuID0gdGhpcy5saXN0ZW4uYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGVPckZuKSB7XG4gICAgLy8gWW91IGNhbiBwYXNzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHN0YXRlIG9yIGEgcGxhaW4gb2JqZWN0XG4gICAgY29uc3QgcHJldlN0YXRlID0gY2xvbmUodGhpcy5zdGF0ZSlcbiAgICBjb25zdCByZWNpZXZlZFN0YXRlID0gdHlwZW9mIHN0YXRlT3JGbiA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXRlT3JGbih0aGlzLnN0YXRlKSA6IHN0YXRlT3JGblxuXG4gICAgLy8gT25seSBnZXQga2V5cyB3aGljaCBoYXZlIGNoYW5nZWRcbiAgICBjb25zdCBjaGFuZ2VkS2V5cyA9IE9iamVjdC5rZXlzKHJlY2lldmVkU3RhdGUpLmZpbHRlcihrZXkgPT4gcmVjaWV2ZWRTdGF0ZVtrZXldICE9PSBwcmV2U3RhdGVba2V5XSlcblxuICAgIGlmICghY2hhbmdlZEtleXMubGVuZ3RoKSByZXR1cm5cblxuICAgIC8vIE1lcmdlIHRoaXMuc3RhdGUgd2l0aCB0aGUgcmVjaWV2ZWRTdGF0ZVxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGNsb25lKHRoaXMuc3RhdGUsIHJlY2lldmVkU3RhdGUpXG4gICAgdGhpcy5zdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuXG4gICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgcHJldlN0YXRlLFxuICAgICAgY3VycmVudFN0YXRlLFxuICAgICAgcmVjaWV2ZWRTdGF0ZSxcbiAgICAgIHN0YXRlOiBjdXJyZW50U3RhdGUsXG4gICAgICBzZWxmOiB0aGlzLFxuICAgICAgY3VycmVudENoYW5nZXM6IGNoYW5nZWRLZXlzLFxuICAgICAgY2hhbmdlZDogY2hhbmdlZEtleXMsXG4gICAgICBpc0ZpcnN0Q2hhbmdlOiB0aGlzLmlzRmlyc3RDaGFuZ2VcbiAgICB9XG5cbiAgICAvLyBUaGlzIGVtaXRzIGNoYW5nZXMgZm9yIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgd2l0aG91dCBhIGtleVxuICAgIC8vIGVnIHRoaXMuY2hhbmdlZCgoKSA9PiB7IC4uLnNvbWV0aGluZyBjaGFuZ2VkIH0pIHx8IHRoaXMuY2hhbmdlZCgnbXlLZXknLCAoKSA9PiB7IC4uLm15a2V5IGNoYW5nZWQgfSlcbiAgICB0aGlzLmVtaXQoYWxsQ2hhbmdlcywgdXBkYXRlKVxuXG4gICAgLy8gRW1pdCBldmVudHMgZm9yIGFsbCB0aGUga2V5cyBpbiBjaGFuZ2VkS2V5c1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRLZXlzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VGb3JLZXkgPSBjbG9uZSh1cGRhdGUsIHsgaXNGaXJzdENoYW5nZTogIXRoaXMuaGFzQ2hhbmdlZC5pbmNsdWRlcyhrZXkpIH0pXG4gICAgICB0aGlzLmVtaXQoa2V5LCBjaGFuZ2VGb3JLZXkpXG4gICAgfVxuXG4gICAgLy8gTm8gbG9uZ2VyIHRoZSBmaXJzdCBjaGFuZ2VcbiAgICBpZiAoY2hhbmdlZEtleXMubGVuZ3RoICYmIHRoaXMuaXNGaXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5pc0ZpcnN0Q2hhbmdlID0gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBBZGQgY2hhbmdlZCBrZXlzIHRvIGhhc0NoYW5nZWRcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBbLi4udGhpcy5oYXNDaGFuZ2VkLCAuLi5jaGFuZ2VkS2V5cy5maWx0ZXIoeCA9PiAhdGhpcy5oYXNDaGFuZ2VkLmluY2x1ZGVzKHgpKV1cbiAgfVxuXG4gIGNoYW5nZWQoLi4uYXJncykge1xuICAgIC8vIE9uIGlzIGluaGVyaXRlZCBmcm9tIFN1YmplY3RcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGFsbENoYW5nZXMsIGFyZ3NbMF0pXG4gICAgfVxuICB9XG5cbiAgLy8gQWxpYXMgZm9yIHRoaXMuY2hhbmdlZCgoKSA9PiB7fSlcbiAgbGlzdGVuKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMub24oYWxsQ2hhbmdlcywgZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmU8VD4ob2JqczogVCwgLi4ucmVzdDogVFtdKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmpzLCAuLi5yZXN0KSBhcyBUXG59XG4iLCIvLyBjb25zdCBTeW1ib2wgPSBzdHIgPT4gc3RyICsgJ18nICsgKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCgzKVxuY29uc3Qgc3ViamVjdCA9IFN5bWJvbChcInN1YmplY3RcIilcblxudHlwZSBDYWxsYmFjazxBcmdzIGV4dGVuZHMgW10gPSBhbnlbXSwgUmVzdWx0ID0gYW55PiA9ICguLi5hcmdzOiBBcmdzKSA9PiBSZXN1bHRcblxudHlwZSBTdWJqZWN0UHJvcGVydGllczxUeXBlcz4gPSB7XG4gIGluZGV4OiBudW1iZXJcbiAgbGlzdGVuZXJzOiB7XG4gICAgW2sgaW4ga2V5b2YgVHlwZXNdOiB7XG4gICAgICBbbDogc3RyaW5nXTogQ2FsbGJhY2s8VHlwZXNba10+XG4gICAgfVxuICB9XG4gIGNhbmNlbHM6IHtcbiAgICBbazogc3RyaW5nXTogQ2FsbGJhY2tcbiAgfVxuICBrZXk6ICgpID0+IHN0cmluZ1xufVxuXG50eXBlIEdldEVsZW1lbnRUeXBlPFQgZXh0ZW5kcyBBcnJheTxhbnk+PiA9IFQgZXh0ZW5kcyAoaW5mZXIgVSlbXSA/IFUgOiBuZXZlclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0PEV2ZW50VHlwZXMgPSB7IFtrZXk6IHN0cmluZ106IEFycmF5PGFueT4gfT4ge1xuICBbc3ViamVjdF06IFN1YmplY3RQcm9wZXJ0aWVzPEV2ZW50VHlwZXM+XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpc1tzdWJqZWN0XSA9IHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgIGNhbmNlbHM6IHt9LFxuICAgICAga2V5KCkge1xuICAgICAgICByZXR1cm4gYGxpc3RlbmVyXyR7dGhpc1tzdWJqZWN0XS5pbmRleCsrfWBcbiAgICAgIH1cbiAgICB9IGFzIFN1YmplY3RQcm9wZXJ0aWVzPEV2ZW50VHlwZXM+XG5cbiAgICAvLyBCaW5kIGFsbCB0aGUgbWV0aG9kc1xuICAgIHRoaXMub24gPSB0aGlzLm9uLmJpbmQodGhpcylcbiAgICB0aGlzW3N1YmplY3RdLmtleSA9IHRoaXNbc3ViamVjdF0ua2V5LmJpbmQodGhpcylcbiAgICB0aGlzLmVtaXQgPSB0aGlzLmVtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMub25jZSA9IHRoaXMub25jZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcylcbiAgfVxuXG4gIC8qIExpc3RlbiB0byAgKi9cbiAgb248S2V5IGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZU9yQ2FsbGJhY2s6IEtleSB8IENhbGxiYWNrLCBmbj86IENhbGxiYWNrPEV2ZW50VHlwZXNbS2V5XT4pIHtcbiAgICBsZXQgbmFtZSA9IG5hbWVPckNhbGxiYWNrIGFzIGtleW9mIEV2ZW50VHlwZXNcbiAgICBsZXQgY2FsbGJhY2sgPSBmbiBhcyBDYWxsYmFjayB8IENhbGxiYWNrPEV2ZW50VHlwZXNbS2V5XT5cbiAgICBpZiAoIWZuICYmIHR5cGVvZiBuYW1lT3JDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjYWxsYmFjayA9IG5hbWVPckNhbGxiYWNrIGFzIENhbGxiYWNrXG4gICAgICAvKiBMaXN0ZW4gdG8gYWxsIGV2ZW50cyAqL1xuICAgICAgbmFtZSA9IChzdWJqZWN0IGFzIHVua25vd24pIGFzIGtleW9mIEV2ZW50VHlwZXNcbiAgICB9XG5cbiAgICAvLyBFdmVyeSBldmVudCBsaXN0ZW5lciBpcyBnaXZlbiBpdCdzIG93biBrZXlcbiAgICBjb25zdCBrZXkgPSB0aGlzW3N1YmplY3RdLmtleSgpXG5cbiAgICBjb25zdCBldmVudE5hbWVzID0gdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgPyAobmFtZS5zcGxpdChcIiBcIikgYXMgKGtleW9mIEV2ZW50VHlwZXMpW10pIDogW25hbWVdXG5cbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBsaXN0ZW5lciBvZiB0eXBlIGV2ZW50TmFtZSB0aGVuIGxpc3RlbmVyc1tldmVudE5hbWVdIHdpbGwgYmUgZW1wdHlcbiAgICAgIGlmICghdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXSkgdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IHt9XG5cbiAgICAgIC8vIEFkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIGxpc3RlbmVyIG9iamVjdFxuICAgICAgdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXVtrZXldID0gY2FsbGJhY2tcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgZnVuY3Rpb24gZGVsZXRlcyB0aGUgbGlzdGVuZXIgYW5kIGl0c2VsZiBmcm9tIFN1YmplY3RcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBsZXQgY2FuY2VscyA9ICgpID0+IHtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgY2FuY2VscyA9ICgpID0+IHt9XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG5cbiAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV1ba2V5XVxuICAgICAgICBkZWxldGUgdGhpc1tzdWJqZWN0XS5jYW5jZWxzW2tleV1cblxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0pLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgY2FuY2VsIHRvIHRoZSBzdWJqZWN0IGFycmF5XG4gICAgdGhpc1tzdWJqZWN0XS5jYW5jZWxzW2tleV0gPSBjYW5jZWxzXG5cbiAgICAvLyBSZXR1cm4gdGhlIGV2ZW50IGRpcG9zZXJcbiAgICByZXR1cm4gY2FuY2Vsc1xuICB9XG5cbiAgZW1pdDxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCwgLi4uYXJnczogRXZlbnRUeXBlc1tUXSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAobmFtZSAhPT0gc3ViamVjdCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5lbWl0KHN1YmplY3QsIC4uLmFyZ3MpXG4gICAgfVxuICAgIC8vIElmIHRoaXMgZXZlbiBpcyBpbiB0aGUgbGlzdGVuZXJzIG9iamVjdFxuICAgIGlmICh0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pLm1hcChmbiA9PiBmbiguLi5hcmdzKSlcbiAgICB9XG4gIH1cblxuICBnZXRIYW5kbGVyczxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnM6IENhbGxiYWNrPEV2ZW50VHlwZXNbVF0+W10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgIGhhbmRsZXJzLnB1c2godGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV1ba2V5XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcnNcbiAgICAgIH0sXG4gICAgICBtYXA6IChmbjogQ2FsbGJhY2s8W0NhbGxiYWNrPEV2ZW50VHlwZXNbVF0+LCBzdHJpbmc/XT4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV1cbiAgICAgICAgICByZXN1bHRzLnB1c2goZm4oaGFuZGxlciwga2V5KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgICAgfSxcbiAgICAgIGZvckVhY2g6IChmbjogQ2FsbGJhY2s8W0NhbGxiYWNrPEV2ZW50VHlwZXNbVF0+LCBzdHJpbmc/XT4pID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV1ba2V5XVxuICAgICAgICAgIGZuKGhhbmRsZXIsIGtleSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlZHVjZTogKFxuICAgICAgICBmbjogQ2FsbGJhY2s8W0V2ZW50VHlwZXNbVF1bMF0sIENhbGxiYWNrPEV2ZW50VHlwZXNbVF0+LCBzdHJpbmc/XT4sXG4gICAgICAgIHZhbD86IEV2ZW50VHlwZXNbVF1bMF1cbiAgICAgICkgPT4ge1xuICAgICAgICBsZXQgcHJldiA9IHZhbFxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXVtrZXldXG4gICAgICAgICAgcHJldiA9IGZuKHByZXYsIGhhbmRsZXIsIGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZHVjZTxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCwgLi4uYXJnczogRXZlbnRUeXBlc1tUXSk6IEV2ZW50VHlwZXNbVF1bMF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgLi4ucmVzdF0gPSBhcmdzXG4gICAgbGV0IHByZXZcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEhhbmRsZXJzKG5hbWUpLnJlZHVjZSgobWVtbywgZm4pID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGZuKG1lbW8sIC4uLnJlc3QpXG4gICAgICAgIGlmICh0eXBlb2YgdiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHByZXYgPSB2XG4gICAgICAgICAgcmV0dXJuIHZcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJldlxuICAgICAgICB9XG4gICAgICB9LCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGFzeW5jIGFzeW5jUmVkdWNlPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihuYW1lOiBULCAuLi5hcmdzOiBFdmVudFR5cGVzW1RdKTogRXZlbnRUeXBlc1tUXVswXSB7XG4gICAgY29uc3QgW3ZhbHVlLCAuLi5yZXN0XSA9IGFyZ3NcbiAgICBsZXQgcHJldlxuICAgIGlmICh0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pLnJlZHVjZSgobGFzdCwgZm4pID0+IHtcbiAgICAgICAgY29uc3QgdiA9IGZuKGxhc3QsIC4uLnJlc3QpXG4gICAgICAgIGlmICh0eXBlb2YgdiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGxhc3QgPSB2XG4gICAgICAgICAgcmV0dXJuIHZcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFzdFxuICAgICAgfSwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBhZGQ8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KGV2ZW50TmFtZTogVCwgZm46IENhbGxiYWNrPEV2ZW50VHlwZXNbVF0+KSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIG9uY2U8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIGZuOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPikge1xuICAgIC8vIFVzZSB2YXIgdG8gaG9pc3QgdmFyaWFibGUgKG5vdCBzdXJlIGlmIG5lZWRlZClcbiAgICB2YXIgY2FuY2VsID0gdGhpcy5vbihuYW1lLCAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNhbmNlbCkgY2FuY2VsKClcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzW3N1YmplY3RdLmNhbmNlbHMpLmZvckVhY2goZm4gPT4gZm4oKSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==