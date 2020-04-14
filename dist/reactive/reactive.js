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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reactive/reactive.ts");
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

/***/ "./src/reactive/reactive.ts":
/*!**********************************!*\
  !*** ./src/reactive/reactive.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reactive; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject */ "./src/reactive/subject.ts");


var all = Symbol('all');
function reactive() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var state = initialState;
  var subject = new _subject__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var target = new Proxy(function () {}, {
    get: function get(target, prop) {
      if (prop === 'toJSON') return function () {
        return state;
      };
      return state[prop];
    },
    set: function set(target, prop, value) {
      var prev = state[prop];
      state[prop] = value;

      if (prev !== value) {
        subject.emit(all, state, prop, prev);
        subject.emit(prop, state, prop, prev);
      }

      return true;
    },
    apply: function apply(target, self, args) {
      args.find(function (f) {
        return typeof f === 'function';
      })(state);
      return subject.on.apply(subject, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
    }
  });
  return target;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9yZWFjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3RpdmUvc3ViamVjdC50cyJdLCJuYW1lcyI6WyJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImxlbmd0aCIsImkiLCJhcnIyIiwiQXJyYXkiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheUxpa2VUb0FycmF5IiwicmVxdWlyZSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsImlzQXJyYXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90eXBlb2YiLCJjb25zdHJ1Y3RvciIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJuYW1lIiwidGVzdCIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwibmV4dCIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiRnVuY3Rpb24iLCJvcmlnaW5hbE1vZHVsZSIsIndlYnBhY2tQb2x5ZmlsbCIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImFsbCIsInJlYWN0aXZlIiwiaW5pdGlhbFN0YXRlIiwic3ViamVjdCIsIlN1YmplY3QiLCJQcm94eSIsInByb3AiLCJzZXQiLCJlbWl0IiwiZmluZCIsImYiLCJvbiIsImluZGV4IiwibGlzdGVuZXJzIiwiY2FuY2VscyIsImJpbmQiLCJvbmNlIiwiZGVzdHJveSIsIm5hbWVPckNhbGxiYWNrIiwiY2FsbGJhY2siLCJldmVudE5hbWVzIiwic3BsaXQiLCJldmVudE5hbWUiLCJjYW5jZWxsZWQiLCJtYXAiLCJoYW5kbGVycyIsInJlc3VsdHMiLCJoYW5kbGVyIiwicmVkdWNlIiwidmFsIiwicmVzdCIsImdldEhhbmRsZXJzIiwibWVtbyIsInYiLCJsYXN0IiwiY2FuY2VsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxNQUFJQSxHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBN0IsRUFBcUNELEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxNQUFWOztBQURGOztBQUduQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLElBQUksR0FBRyxJQUFJQyxLQUFKLENBQVVKLEdBQVYsQ0FB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TUFBRixVQUFHc00sSUFBSCx5RkFBWUosSUFBWixHQUFWOztBQUNBLHNCQUFJLE9BQU9HLENBQVAsS0FBYSxXQUFqQixFQUE4QjtBQUM1QkMsd0JBQUksR0FBR0QsQ0FBUDtBQUNBLDJCQUFPQSxDQUFQO0FBQ0Q7O0FBQ0QseUJBQU9DLElBQVA7QUFDRCxpQkFQTSxFQU9KNU0sS0FQSSxDOzs7aURBVUZBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHdUJnTSxTLEVBQWMxTCxFLEVBQTZCO0FBQ3pFLGFBQU8sS0FBSytLLEVBQUwsQ0FBUVcsU0FBUixFQUFtQjFMLEVBQW5CLENBQVA7QUFDRDs7O3lCQUVnQzhDLEksRUFBUzlDLEUsRUFBNkI7QUFDckU7QUFDQSxVQUFJdU0sTUFBTSxHQUFHLEtBQUt4QixFQUFMLENBQVFqSSxJQUFSLEVBQWMsWUFBYTtBQUN0QyxZQUFJeUosTUFBSixFQUFZQSxNQUFNO0FBQ2xCdk0sVUFBRSxNQUFGO0FBQ0QsT0FIWSxDQUFiO0FBSUQ7Ozs4QkFFUztBQUNSa0IsWUFBTSxDQUFDaUUsTUFBUCxDQUFjLEtBQUtvRixPQUFMLEVBQWNXLE9BQTVCLEVBQXFDM0YsT0FBckMsQ0FBNkMsVUFBQXZGLEVBQUU7QUFBQSxlQUFJQSxFQUFFLEVBQU47QUFBQSxPQUEvQztBQUNEIiwiZmlsZSI6Ii9yZWFjdGl2ZS9yZWFjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlYWN0aXZlL3JlYWN0aXZlLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFN1YmplY3QgZnJvbSAnLi9zdWJqZWN0J1xuXG5sZXQgYWxsID0gU3ltYm9sKCdhbGwnKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWFjdGl2ZShpbml0aWFsU3RhdGUgPSB7fSkge1xuICBsZXQgc3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgbGV0IHN1YmplY3QgPSBuZXcgU3ViamVjdCgpXG5cbiAgY29uc3QgdGFyZ2V0ID0gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ3RvSlNPTicpIHJldHVybiAoKSA9PiBzdGF0ZVxuICAgICAgcmV0dXJuIHN0YXRlW3Byb3BdXG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgbGV0IHByZXYgPSBzdGF0ZVtwcm9wXVxuICAgICAgc3RhdGVbcHJvcF0gPSB2YWx1ZVxuXG4gICAgICBpZiAocHJldiAhPT0gdmFsdWUpIHtcbiAgICAgICAgc3ViamVjdC5lbWl0KGFsbCwgc3RhdGUsIHByb3AsIHByZXYpXG4gICAgICAgIHN1YmplY3QuZW1pdChwcm9wLCBzdGF0ZSwgcHJvcCwgcHJldilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIGFwcGx5KHRhcmdldCwgc2VsZiwgYXJncykge1xuICAgICAgYXJncy5maW5kKGYgPT4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicpKHN0YXRlKVxuICAgICAgcmV0dXJuIHN1YmplY3Qub24oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiLy8gY29uc3QgU3ltYm9sID0gc3RyID0+IHN0ciArICdfJyArIChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoMylcbmNvbnN0IHN1YmplY3QgPSBTeW1ib2woXCJzdWJqZWN0XCIpXG5cbnR5cGUgQ2FsbGJhY2s8QXJncyBleHRlbmRzIFtdID0gYW55W10sIFJlc3VsdCA9IGFueT4gPSAoLi4uYXJnczogQXJncykgPT4gUmVzdWx0XG5cbnR5cGUgU3ViamVjdFByb3BlcnRpZXM8VHlwZXM+ID0ge1xuICBpbmRleDogbnVtYmVyXG4gIGxpc3RlbmVyczoge1xuICAgIFtrIGluIGtleW9mIFR5cGVzXToge1xuICAgICAgW2w6IHN0cmluZ106IENhbGxiYWNrPFR5cGVzW2tdPlxuICAgIH1cbiAgfVxuICBjYW5jZWxzOiB7XG4gICAgW2s6IHN0cmluZ106IENhbGxiYWNrXG4gIH1cbiAga2V5OiAoKSA9PiBzdHJpbmdcbn1cblxudHlwZSBHZXRFbGVtZW50VHlwZTxUIGV4dGVuZHMgQXJyYXk8YW55Pj4gPSBUIGV4dGVuZHMgKGluZmVyIFUpW10gPyBVIDogbmV2ZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdDxFdmVudFR5cGVzID0geyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0+IHtcbiAgW3N1YmplY3RdOiBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXNbc3ViamVjdF0gPSB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICBjYW5jZWxzOiB7fSxcbiAgICAgIGtleSgpIHtcbiAgICAgICAgcmV0dXJuIGBsaXN0ZW5lcl8ke3RoaXNbc3ViamVjdF0uaW5kZXgrK31gXG4gICAgICB9XG4gICAgfSBhcyBTdWJqZWN0UHJvcGVydGllczxFdmVudFR5cGVzPlxuXG4gICAgLy8gQmluZCBhbGwgdGhlIG1ldGhvZHNcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpXG4gICAgdGhpc1tzdWJqZWN0XS5rZXkgPSB0aGlzW3N1YmplY3RdLmtleS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbWl0ID0gdGhpcy5lbWl0LmJpbmQodGhpcylcbiAgICB0aGlzLm9uY2UgPSB0aGlzLm9uY2UuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpXG4gIH1cblxuICAvKiBMaXN0ZW4gdG8gICovXG4gIG9uPEtleSBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWVPckNhbGxiYWNrOiBLZXkgfCBDYWxsYmFjaywgZm4/OiBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+KSB7XG4gICAgbGV0IG5hbWUgPSBuYW1lT3JDYWxsYmFjayBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgbGV0IGNhbGxiYWNrID0gZm4gYXMgQ2FsbGJhY2sgfCBDYWxsYmFjazxFdmVudFR5cGVzW0tleV0+XG4gICAgaWYgKCFmbiAmJiB0eXBlb2YgbmFtZU9yQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lT3JDYWxsYmFjayBhcyBDYWxsYmFja1xuICAgICAgLyogTGlzdGVuIHRvIGFsbCBldmVudHMgKi9cbiAgICAgIG5hbWUgPSAoc3ViamVjdCBhcyB1bmtub3duKSBhcyBrZXlvZiBFdmVudFR5cGVzXG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZXZlbnQgbGlzdGVuZXIgaXMgZ2l2ZW4gaXQncyBvd24ga2V5XG4gICAgY29uc3Qga2V5ID0gdGhpc1tzdWJqZWN0XS5rZXkoKVxuXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiID8gKG5hbWUuc3BsaXQoXCIgXCIpIGFzIChrZXlvZiBFdmVudFR5cGVzKVtdKSA6IFtuYW1lXVxuXG4gICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgbGlzdGVuZXIgb2YgdHlwZSBldmVudE5hbWUgdGhlbiBsaXN0ZW5lcnNbZXZlbnROYW1lXSB3aWxsIGJlIGVtcHR5XG4gICAgICBpZiAoIXRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSB7fVxuXG4gICAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBsaXN0ZW5lciBvYmplY3RcbiAgICAgIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW2V2ZW50TmFtZV1ba2V5XSA9IGNhbGxiYWNrXG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIGZ1bmN0aW9uIGRlbGV0ZXMgdGhlIGxpc3RlbmVyIGFuZCBpdHNlbGYgZnJvbSBTdWJqZWN0XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgbGV0IGNhbmNlbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgIGNhbmNlbHMgPSAoKSA9PiB7fVxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdW2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldXG5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tldmVudE5hbWVdKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbZXZlbnROYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGNhbmNlbCB0byB0aGUgc3ViamVjdCBhcnJheVxuICAgIHRoaXNbc3ViamVjdF0uY2FuY2Vsc1trZXldID0gY2FuY2Vsc1xuXG4gICAgLy8gUmV0dXJuIHRoZSBldmVudCBkaXBvc2VyXG4gICAgcmV0dXJuIGNhbmNlbHNcbiAgfVxuXG4gIGVtaXQ8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5hbWUgIT09IHN1YmplY3QpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuZW1pdChzdWJqZWN0LCAuLi5hcmdzKVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGV2ZW4gaXMgaW4gdGhlIGxpc3RlbmVycyBvYmplY3RcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5tYXAoZm4gPT4gZm4oLi4uYXJncykpXG4gICAgfVxuICB9XG5cbiAgZ2V0SGFuZGxlcnM8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPltdID0gW11cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzXG4gICAgICB9LFxuICAgICAgbWFwOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzW3N1YmplY3RdLmxpc3RlbmVyc1tuYW1lXVtrZXldXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZuKGhhbmRsZXIsIGtleSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiAoZm46IENhbGxiYWNrPFtDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdW2tleV1cbiAgICAgICAgICBmbihoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWR1Y2U6IChcbiAgICAgICAgZm46IENhbGxiYWNrPFtFdmVudFR5cGVzW1RdWzBdLCBDYWxsYmFjazxFdmVudFR5cGVzW1RdPiwgc3RyaW5nP10+LFxuICAgICAgICB2YWw/OiBFdmVudFR5cGVzW1RdWzBdXG4gICAgICApID0+IHtcbiAgICAgICAgbGV0IHByZXYgPSB2YWxcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV1ba2V5XVxuICAgICAgICAgIHByZXYgPSBmbihwcmV2LCBoYW5kbGVyLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWR1Y2U8VCBleHRlbmRzIGtleW9mIEV2ZW50VHlwZXM+KG5hbWU6IFQsIC4uLmFyZ3M6IEV2ZW50VHlwZXNbVF0pOiBFdmVudFR5cGVzW1RdWzBdIHtcbiAgICBjb25zdCBbdmFsdWUsIC4uLnJlc3RdID0gYXJnc1xuICAgIGxldCBwcmV2XG4gICAgaWYgKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIYW5kbGVycyhuYW1lKS5yZWR1Y2UoKG1lbW8sIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihtZW1vLCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBwcmV2ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgICAgfVxuICAgICAgfSwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBhc3luYyBhc3luY1JlZHVjZTxUIGV4dGVuZHMga2V5b2YgRXZlbnRUeXBlcz4obmFtZTogVCwgLi4uYXJnczogRXZlbnRUeXBlc1tUXSk6IEV2ZW50VHlwZXNbVF1bMF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgLi4ucmVzdF0gPSBhcmdzXG4gICAgbGV0IHByZXZcbiAgICBpZiAodGhpc1tzdWJqZWN0XS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXNbc3ViamVjdF0ubGlzdGVuZXJzW25hbWVdKS5yZWR1Y2UoKGxhc3QsIGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBmbihsYXN0LCAuLi5yZXN0KVxuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBsYXN0ID0gdlxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhc3RcbiAgICAgIH0sIHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgYWRkPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihldmVudE5hbWU6IFQsIGZuOiBDYWxsYmFjazxFdmVudFR5cGVzW1RdPikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlPFQgZXh0ZW5kcyBrZXlvZiBFdmVudFR5cGVzPihuYW1lOiBULCBmbjogQ2FsbGJhY2s8RXZlbnRUeXBlc1tUXT4pIHtcbiAgICAvLyBVc2UgdmFyIHRvIGhvaXN0IHZhcmlhYmxlIChub3Qgc3VyZSBpZiBuZWVkZWQpXG4gICAgdmFyIGNhbmNlbCA9IHRoaXMub24obmFtZSwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjYW5jZWwpIGNhbmNlbCgpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIE9iamVjdC52YWx1ZXModGhpc1tzdWJqZWN0XS5jYW5jZWxzKS5mb3JFYWNoKGZuID0+IGZuKCkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=