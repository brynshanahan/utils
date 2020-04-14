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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reactive/subject.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0aXZlL3N1YmplY3QudHMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXlMaWtlVG9BcnJheSIsInJlcXVpcmUiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVTcHJlYWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfdHlwZW9mIiwiY29uc3RydWN0b3IiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJvIiwibWluTGVuIiwibiIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwibmFtZSIsInRlc3QiLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWNvcmQiLCJyZXN1bHQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIm5leHQiLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwib3JpZ2luYWxNb2R1bGUiLCJ3ZWJwYWNrUG9seWZpbGwiLCJjaGlsZHJlbiIsImdldCIsImwiLCJzdWJqZWN0IiwiU3ViamVjdCIsImluZGV4IiwibGlzdGVuZXJzIiwiY2FuY2VscyIsIm9uIiwiYmluZCIsImVtaXQiLCJvbmNlIiwiZGVzdHJveSIsIm5hbWVPckNhbGxiYWNrIiwiY2FsbGJhY2siLCJldmVudE5hbWVzIiwic3BsaXQiLCJldmVudE5hbWUiLCJjYW5jZWxsZWQiLCJtYXAiLCJoYW5kbGVycyIsInJlc3VsdHMiLCJoYW5kbGVyIiwicmVkdWNlIiwidmFsIiwicmVzdCIsImdldEhhbmRsZXJzIiwibWVtbyIsInYiLCJsYXN0IiwiY2FuY2VsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUM7QUFDbkMsTUFBSUEsR0FBRyxJQUFJLElBQVAsSUFBZUEsR0FBRyxHQUFHRCxHQUFHLENBQUNFLE1BQTdCLEVBQXFDRCxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBVjs7QUFERjs7QUFHbkMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXQyxJQUFJLEdBQUcsSUFBSUMsS0FBSixDQUFVSixHQUFW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QVBNLEVBT0pwTSxLQVBJLEM7OztpREFVRkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUd1QndMLFMsRUFBY2xMLEUsRUFBNkI7QUFDekUsYUFBTyxLQUFLeUssRUFBTCxDQUFRUyxTQUFSLEVBQW1CbEwsRUFBbkIsQ0FBUDtBQUNEOzs7eUJBRWdDOEMsSSxFQUFTOUMsRSxFQUE2QjtBQUNyRTtBQUNBLFVBQUkrTCxNQUFNLEdBQUcsS0FBS3RCLEVBQUwsQ0FBUTNILElBQVIsRUFBYyxZQUFhO0FBQ3RDLFlBQUlpSixNQUFKLEVBQVlBLE1BQU07QUFDbEIvTCxVQUFFLE1BQUY7QUFDRCxPQUhZLENBQWI7QUFJRDs7OzhCQUVTO0FBQ1JrQixZQUFNLENBQUNpRSxNQUFQLENBQWMsS0FBS2lGLE9BQUwsRUFBY0ksT0FBNUIsRUFBcUNqRixPQUFyQyxDQUE2QyxVQUFBdkYsRUFBRTtBQUFBLGVBQUlBLEVBQUUsRUFBTjtBQUFBLE9BQS9DO0FBQ0QiLCJmaWxlIjoiL3JlYWN0aXZlL3N1YmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9yZWFjdGl2ZS9zdWJqZWN0LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gY29uc3QgU3ltYm9sID0gc3RyID0+IHN0ciArICdfJyArIChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoMylcbmNvbnN0IHN1YmplY3QgPSBTeW1ib2woXCJzdWJqZWN0XCIpXG5cbnR5cGUgQ2FsbGJhY2s8QXJncyBleHRlbmRzIFtdID0gYW55W10sIFJlc3VsdCA9IGFueT4gPSAoLi4uYXJnczogQXJncykgPT4gUmVzdWx0XG5cbnR5cGUgU3ViamVjdFByb3BlcnRpZXM8VHlwZXM+ID0ge1xuICBpbmRleDogbnVtYmVyXG4gIGxpc3RlbmVyczoge1xuICAgIFtrIGluIGtleW9mIFR5cGVzXToge1xuICAgICAgW2w6IHN0cmluZ106IENhbGxiYWNrPFR5cGVzW2tdPlxuICAgIH1cbiAgfVxuICBjYW5jZWxzOiB7XG4gICAgW2s6IHN0cmluZ106IENhbGxiYWNrXG4gIH1cbiAga2V5OiAoKSA9PiBzdHJpbmdcbn1cblxudHlwZSBHZXRFbGVtZW50VHlwZTxUIGV4dGVuZHMgQXJyYXk8YW55Pj4gPSBUIGV4dGVuZHMgKGluZmVyIFUpW10gPyBVIDogbmV2ZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdDxFdmVudFR5cGVzID0geyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0+IHtcbiAgW3N1YmplY3RdOiBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXNbc3ViamVjdF0gPSB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICBjYW5jZWxzOiB7fSxcbiAgICAgIGtleSgpIHtcbiAgICAgICAgcmV0dXJuIGBsaXN0ZW5lcl8ke3RoaXNbc3ViamVjdF0uaW5kZXgrK31gXG4gICAgICB9XG4gICAgfSBhcyBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gICAgLy8gQmluZCBhbGwgdGhlIG1ldGhvZHNcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpXG4gICAgdGhpc1tzdWJqZWN0XS5rZXkgPSB0aGlzW3N1YmplY3RdLmtleS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbWl0ID0gdGhpcy5lbWl0LmJpbmQodGhpcylcbiAgICB0aGlzLm9uY2UgPSB0aGlzLm9uY2UuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpXG4gIH1cblxuICAvKiBMaXN0ZW4gdG8gICovXG4gIG9uPEtleSBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWVPckNhbGxiYWNrOiBLZXkgfCBDYWxsYmFjaywgZm4/OiBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+KSB7XG4gICAgbGV0IG5hbWUgPSBuYW1lT3JDYWxsYmFjayBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgbGV0IGNhbGxiYWNrID0gZm4gYXMgQ2FsbGJhY2sgfCBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+XG4gICAgaWYgKCFmbiAmJiB0eXBlb2YgbmFtZU9yQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lT3JDYWxsYmFjayBhcyBDYWxsYmFja1xuICAgICAgLyogTGlzdGVuIHRvIGFsbCBldmVudHMgKi9cbiAgICAgIG5hbWUgPSAoc3ViamVjdCBhcyB1bmtub3duKSBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZXZlbnQgbGlzdGVuZXIgaXMgZ2l2ZW4gaXQncyBvd24ga2V5XG4gICAgY29uc3Qga2V5ID0gdGhpc1tzdWJqZWN0XS5rZXkoKVxuXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiID8gKG5hbWUuc3BsaXQoXCIgXCIpIGFzIChrZXlvZiBFdmVudFR5cGVzKVtdKSA6IFtuYW1lXVxuXG4gICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgbGlzdGVuZXIgb2YgdHlwZSBldmVudE5hbWUgdGhlbiBsaXN0ZW5lcnNbZXZlbnROYW1lXSB3aWxsIGJlIGVtcHR5XG4gICAgICBpZiAoIXRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSB7fVxuXG4gICAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBsaXN0ZW5lciBvYmplY3RcbiAgICAgIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV1ba2V5XSA9IGNhbGxiYWNrXG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGZ1bmN0aW9uIGRlbGV0ZXMgdGhlIGxpc3RlbmVyIGFuZCBpdHNlbGYgZnJvbSBTdWJqZWN0XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgbGV0IGNhbmNlbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgIGNhbmNlbHMgPSAoKSA9PiB7fVxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdW2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldXG5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGNhbmNlbCB0byB0aGUgc3ViamVjdCBhcnJheVxuICAgIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldID0gY2FuY2Vsc1xuXG4gICAgLy8gUmV0dXJuIHRoZSBldmVudCBkaXBvc2VyXG4gICAgcmV0dXJuIGNhbmNlbHNcbiAgfVxuXG4gIGVtaXQ8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5hbWUgIT09IHN1YmplY3QpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuZW1pdChzdWJqZWN0LCAuLi5hcmdzKVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGV2ZW4gaXMgaW4gdGhlIGxpc3RlbmVycyBvYmplY3RcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5tYXAoZm4gPT4gZm4oLi4uYXJncykpXG4gICAgfVxuICB9XG5cbiAgZ2V0SGFuZGxlcnM8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPltdID0gW11cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzXG4gICAgICB9LFxuICAgICAgbWFwOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXVtrZXldXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZuKGhhbmRsZXIsIGtleSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV1cbiAgICAgICAgICBmbihoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWR1Y2U6IChcbiAgICAgICAgZm46IENhbGxiYWNrPFtFdmVudFR5cGVzW1RdWzBdLCBDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+LFxuICAgICAgICB2YWw/OiBFdmVudFR5cGVzW1RdWzBdXG4gICAgICApID0+IHtcbiAgICAgICAgbGV0IHByZXYgPSB2YWxcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV1ba2V5XVxuICAgICAgICAgIHByZXYgPSBmbihwcmV2LCBoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWR1Y2U8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pOiBFdmVudFR5cGVzW1RdWzBdIHtcbiAgICBjb25zdCBbdmFsdWUsIC4uLnJlc3RdID0gYXJnc1xuICAgIGxldCBwcmV2XG4gICAgaWYgKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIYW5kbGVycyhuYW1lKS5yZWR1Y2UoKG1lbW8sIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihtZW1vLCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBwcmV2ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgICAgfVxuICAgICAgfSwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBhc3luYyBhc3luY1JlZHVjZTxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCwgLi4uYXJnczogRXZlbnRUeXBlc1tUXSk6IEV2ZW50VHlwZXNbVF1bMF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgLi4ucmVzdF0gPSBhcmdzXG4gICAgbGV0IHByZXZcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5yZWR1Y2UoKGxhc3QsIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihsYXN0LCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBsYXN0ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhc3RcbiAgICAgIH0sIHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgYWRkPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihldmVudE5hbWU6IFQsIGZuOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihuYW1lOiBULCBmbjogQ2FsbGJhY2s8RXZlbnRUeXBlc1tUXT4pIHtcbiAgICAvLyBVc2UgdmFyIHRvIGhvaXN0IHZhcmlhYmxlIChub3Qgc3VyZSBpZiBuZWVkZWQpXG4gICAgdmFyIGNhbmNlbCA9IHRoaXMub24obmFtZSwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjYW5jZWwpIGNhbmNlbCgpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIE9iamVjdC52YWx1ZXModGhpc1tzdWJqZWN0XS5jYW5jZWxzKS5mb3JFYWNoKGZuID0+IGZuKCkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=