/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/observers/create-intersection-observable": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/observers/create-intersection-observable.ts");
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

/***/ "./src/observers/create-intersection-observable.ts":
/*!*********************************************************!*\
  !*** ./src/observers/create-intersection-observable.ts ***!
  \*********************************************************/
/*! exports provided: CustomIntersectionObserverEntry, createIntersectionObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntersectionObserverEntry", function() { return CustomIntersectionObserverEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObservable", function() { return createIntersectionObservable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reactive_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reactive/observable */ "./src/reactive/observable.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* Intersection observer polyfill for IE */

var CustomIntersectionObserverEntry = function CustomIntersectionObserverEntry(entry) {
  var winHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerHeight;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CustomIntersectionObserverEntry);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "isAbove", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "isBelow", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "isCompletelyInView", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "boundingClientRect", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "intersectionRatio", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "intersectionRect", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "isIntersecting", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "rootBounds", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "target", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "time", void 0);

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
function createIntersectionObservable() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var observable = new _reactive_observable__WEBPACK_IMPORTED_MODULE_4__["ChannelledObservable"](function (_ref) {
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
      _getSource = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.IntersectionObserver) {
                  _context4.next = 3;
                  break;
                }

                _context4.next = 3;
                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js"));

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
        return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var src;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
        return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var src;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
        return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var src;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vYnNlcnZlcnMvY3JlYXRlLWludGVyc2VjdGlvbi1vYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiRXJyb3IiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJzdXBlclByb3BCYXNlIiwicmVxdWlyZSIsIl9nZXQiLCJwcm9wZXJ0eSIsInJlY2VpdmVyIiwiUmVmbGVjdCIsImdldCIsImJhc2UiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2FsbCIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfdHlwZW9mIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiX3N1cGVyUHJvcEJhc2UiLCJvYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiIsIm9yaWdpbmFsTW9kdWxlIiwid2VicGFja1BvbHlmaWxsIiwiY2hpbGRyZW4iLCJsIiwiQ3VzdG9tSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsIndpbkhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpbnRlcnNlY3Rpb25SZWN0IiwiaXNJbnRlcnNlY3RpbmciLCJyb290Qm91bmRzIiwidGltZSIsImlzQ29tcGxldGVseUluVmlldyIsImlzQWJvdmUiLCJ0b3AiLCJpc0JlbG93IiwiYm90dG9tIiwiY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2YWJsZSIsInJvb3QiLCJvcHRzIiwib2JzZXJ2YWJsZSIsIkNoYW5uZWxsZWRPYnNlcnZhYmxlIiwib3B0aW9ucyIsImlzRWxlbWVudCIsImRpc2Nvbm5lY3RlZCIsInN0YXJ0ZWQiLCJzb3VyY2UiLCJnZXRTb3VyY2UiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJjdXN0b21FbnRyeSIsInIiLCJvblN1YnNjcmliZSIsImNoYW5uZWwiLCJzcmMiLCJvYnNlcnZlIiwib25VbnN1YnNjcmliZSIsInVub2JzZXJ2ZSIsImRlc3Ryb3kiLCJkaXNjb25uZWN0IiwiT2JzZXJ2YWJsZSIsInN0cmVhbVNvdXJjZSIsImJpbmQiLCJpbmRleCIsInZhbCIsImsiLCJsaXN0ZW5lcnMiLCJlbWl0IiwiY2FuY2VscyIsImdldEtleSIsImFjdGl2ZUxpc3RlbmVycyIsInVuc3Vic2NyaWJlRnJvbVNvdXJjZSIsImZuT3JPYnNlcnZlciIsInN1YnNjcmliZWQiLCJpc09ic2VydmVyIiwib2JqS2V5cyIsIm9iaktleSIsImNhbmNlbCIsImNsZWFudXAiLCJ1bnN1YnNjcmliZSIsIm9ic2VydmVyIiwiaXNMaXN0ZW5lciIsIkJlaGF2aW91clN1YmplY3QiLCJsYXN0TmV4dCIsImlzQ2hhbm5lbEFQSSIsIkJvb2xlYW4iLCJNYXAiLCJjIiwiY2hhbm5lbHMiLCJjaGFubmVsS2V5Iiwic2V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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T0FBTCxDQUFhbk8sR0FBYixDQUFQOztBQUNBLGdCQUFJLENBQUM2TyxPQUFMLENBQWFXLFVBQWI7QUFDRCxTQUxEOztBQU9BLGFBQUtyQixPQUFMLENBQWFuTyxHQUFiO0FBRUEsZUFBTztBQUFFOE8scUJBQVcsRUFBRUYsUUFBZjtBQUF1Qkcsa0JBQVEsRUFBRVI7QUFBakMsU0FBUDtBQUNEO0FBQ0Y7QUEvSEg7O0FBQUE7QUFBQTtBQWtJZVoseUVBQWYsRSIsImZpbGUiOiIvb2JzZXJ2ZXJzL2NyZWF0ZS1pbnRlcnNlY3Rpb24tb2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiL29ic2VydmVycy9jcmVhdGUtaW50ZXJzZWN0aW9uLW9ic2VydmFibGVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9vYnNlcnZlcnMvY3JlYXRlLWludGVyc2VjdGlvbi1vYnNlcnZhYmxlLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qIEludGVyc2VjdGlvbiBvYnNlcnZlciBwb2x5ZmlsbCBmb3IgSUUgKi9cclxuaW1wb3J0IHsgQ2hhbm5lbGxlZE9ic2VydmFibGUgfSBmcm9tICcuLi9yZWFjdGl2ZS9vYnNlcnZhYmxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcclxuICBpbXBsZW1lbnRzIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkge1xyXG4gIGlzQWJvdmU6IGJvb2xlYW5cclxuICBpc0JlbG93OiBib29sZWFuXHJcbiAgaXNDb21wbGV0ZWx5SW5WaWV3OiBib29sZWFuXHJcbiAgYm91bmRpbmdDbGllbnRSZWN0OiBET01SZWN0UmVhZE9ubHlcclxuICBpbnRlcnNlY3Rpb25SYXRpbzogbnVtYmVyXHJcbiAgaW50ZXJzZWN0aW9uUmVjdDogRE9NUmVjdFJlYWRPbmx5XHJcbiAgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW5cclxuICByb290Qm91bmRzOiBET01SZWN0UmVhZE9ubHkgfCBudWxsXHJcbiAgdGFyZ2V0OiBFbGVtZW50XHJcbiAgdGltZTogbnVtYmVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnksXHJcbiAgICB3aW5IZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICkge1xyXG4gICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3RcclxuICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpb1xyXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW50cnkuaW50ZXJzZWN0aW9uUmVjdFxyXG4gICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICB0aGlzLnJvb3RCb3VuZHMgPSBlbnRyeS5yb290Qm91bmRzXHJcbiAgICB0aGlzLnRhcmdldCA9IGVudHJ5LnRhcmdldFxyXG4gICAgdGhpcy50aW1lID0gZW50cnkudGltZVxyXG5cclxuICAgIHRoaXMuaXNDb21wbGV0ZWx5SW5WaWV3ID0gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPT09IDFcclxuICAgIHRoaXMuaXNBYm92ZSA9XHJcbiAgICAgIGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMSA/IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgPCAwIDogZmFsc2VcclxuICAgIHRoaXMuaXNCZWxvdyA9XHJcbiAgICAgIGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMVxyXG4gICAgICAgID8gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSA+IHdpbkhlaWdodFxyXG4gICAgICAgIDogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZhYmxlKFxyXG4gIHJvb3Q6IFdpbmRvdyB8IEVsZW1lbnQgPSB3aW5kb3csXHJcbiAgb3B0czogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0ge31cclxuKSB7XHJcbiAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBDaGFubmVsbGVkT2JzZXJ2YWJsZTxcclxuICAgIEVsZW1lbnQsXHJcbiAgICBDdXN0b21JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XHJcbiAgPigoeyBuZXh0LCBlcnJvciwgY29tcGxldGUgfSkgPT4ge1xyXG4gICAgLyogSW50ZXJzZWN0aW9uIG9ic2VydmVyIHRhcmdldHMgdGhlIHdpbmRvdyBieSBkZWZhdWx0ICovXHJcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5vcHRzIH1cclxuXHJcbiAgICAvKiBJZiByb290IGlzbnQgdGhlIHdpbmRvdyBzZXQgaXQgdG8gYmUgdGhlIGludGVyc2VjdGlvbiBvYnNlcnZlciByb290ICovXHJcbiAgICBpZiAoaXNFbGVtZW50KHJvb3QpKSB7XHJcbiAgICAgIG9wdGlvbnMucm9vdCA9IHJvb3RcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzY29ubmVjdGVkID0gZmFsc2VcclxuICAgIGxldCBzdGFydGVkID0gZmFsc2VcclxuICAgIGxldCBzb3VyY2U6IFByb21pc2U8SW50ZXJzZWN0aW9uT2JzZXJ2ZXI+IHwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTb3VyY2UoKSB7XHJcbiAgICAgIGlmICghd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgYXdhaXQgaW1wb3J0KCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkaXNjb25uZWN0ZWQpIHJldHVyblxyXG4gICAgICBzdGFydGVkID0gdHJ1ZVxyXG4gICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbUVudHJ5ID0gbmV3IEN1c3RvbUludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoXHJcbiAgICAgICAgICAgIGVudHJ5LFxyXG4gICAgICAgICAgICB3aW5IZWlnaHRcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC8qIEdldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBzcGVjaWZpYyBlbGVtZW50ICovXHJcbiAgICAgICAgICBuZXh0KGVudHJ5LnRhcmdldCwgY3VzdG9tRW50cnkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgb3B0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBzb3VyY2UgPSBnZXRTb3VyY2UoKS50aGVuKChyKSA9PiB7XHJcbiAgICAgIHNvdXJjZSA9IHJcclxuICAgICAgcmV0dXJuIHJcclxuICAgIH0pXHJcblxyXG4gICAgLyogRW50cmllcyBpcyBhbiBhcnJheSBvZiBlbnRyaWVzIGZvciBldmVyeSBlbGVtZW50IHRoYXQgY2hhbmdlZCAqL1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXN5bmMgb25TdWJzY3JpYmUoY2hhbm5lbCkge1xyXG4gICAgICAgIGxldCBzcmMgPSBhd2FpdCBzb3VyY2VcclxuICAgICAgICBzcmMub2JzZXJ2ZShjaGFubmVsKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBvblVuc3Vic2NyaWJlKGNoYW5uZWwpIHtcclxuICAgICAgICBsZXQgc3JjID0gYXdhaXQgc291cmNlXHJcbiAgICAgICAgc3JjLnVub2JzZXJ2ZShjaGFubmVsKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBkZXN0cm95KCkge1xyXG4gICAgICAgIGRpc2Nvbm5lY3RlZCA9IHRydWVcclxuICAgICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgICAgbGV0IHNyYyA9IGF3YWl0IHNvdXJjZVxyXG4gICAgICAgICAgc3JjLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYnNlcnZhYmxlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRWxlbWVudChhcmc6IFdpbmRvdyB8IEVsZW1lbnQpOiBhcmcgaXMgRWxlbWVudCB7XHJcbiAgcmV0dXJuIGFyZyAmJiBhcmcgIT09IHdpbmRvd1xyXG59XHJcbiIsImludGVyZmFjZSBPYnNlcnZlcjxUPiB7XG4gIG5leHQ6IExpc3RlbmVyPFQ+XG4gIGNvbXBsZXRlPzogTGlzdGVuZXJcbiAgZXJyb3I/OiBMaXN0ZW5lcjxFcnJvcj5cbn1cbnR5cGUgTGlzdGVuZXI8VCA9IGFueT4gPSAodmFsdWU6IFQpID0+IGFueVxudHlwZSBDbGVhbnVwID0gKCkgPT4gYW55XG5pbnRlcmZhY2UgRGljdDxUPiB7XG4gIFtrZXk6IHN0cmluZ106IFRcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJHcm91cCB7XG4gIG5leHQ6IERpY3Q8TGlzdGVuZXI+XG4gIGVycm9yOiBEaWN0PExpc3RlbmVyPlxuICBjb21wbGV0ZTogRGljdDxMaXN0ZW5lcj5cbn1cblxuY2xhc3MgT2JzZXJ2YWJsZTxUID0gYW55PiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDBcbiAgcHJpdmF0ZSBzdHJlYW1Tb3VyY2U6IChvYnNlcnZlcjogT2JzZXJ2YWJsZTxUPikgPT4gQ2xlYW51cFxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgPSAoKSA9PiB7fVxuICBwcml2YXRlIGxpc3RlbmVyczogTGlzdGVuZXJHcm91cCA9IHtcbiAgICBuZXh0OiB7fSxcbiAgICBlcnJvcjoge30sXG4gICAgY29tcGxldGU6IHt9XG4gIH1cbiAgcHJpdmF0ZSBjYW5jZWxzOiBEaWN0PENsZWFudXA+ID0ge31cblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFQgfCBFcnJvcikge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1trZXldW2tdKHZhbClcbiAgICB9XG4gIH1cblxuICAvKiBFbWl0IHRoZSBuZXh0IHZhbHVlICovXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgfVxuXG4gIGVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcilcbiAgfVxuXG4gIC8qIEVtaXQgYW4gZW5kIGV2ZW50IHRvIGV2ZXJ5dGhpbmcgKi9cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZScpXG4gICAgdGhpcy5kZXN0cm95KClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuY2FuY2Vscykge1xuICAgICAgdGhpcy5jYW5jZWxzW2tdKClcbiAgICB9XG4gIH1cblxuICBvbkRlc3Ryb3kgKGZuOkNsZWFudXApIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICB0aGlzLmNhbmNlbHNba2V5XSA9ICgpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgZm4oKVxuICAgIH1cbiAgfVxuXG4gIC8qIFxuICBUaGlzIGlzIGNhbGxlZCB3aGVuIGEgb2JzZXJ2ZXIgdW5zdWJzY3JpYmVzXG4gIGlmIGl0IHdhcyB0aGUgbGFzdCByZW1haW5pbmcgb2JzZXJ2ZXIgdGhlbiBpdCB1bnN1YnNjcmliZXMgZnJvbSB0aGUgc291cmNlXG4gICovXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIFN1YnNjcmliZSBjYW4gYmUgcGFzc2VkIGVpdGhlciBhIFxuICBMaXN0ZW5lcjogKG5leHRWYWwpID0+IHt9IFxuICAgIG9yIGFuXG4gIE9ic2VydmVyOiB7IG5leHQ6IG5leHRWYWwgPT4ge30sIGVycm9yOiBlcnIgPT4ge30sIH1cbiAgKi9cbiAgc3Vic2NyaWJlKGZuT3JPYnNlcnZlcjogTGlzdGVuZXI8VD4gfCBPYnNlcnZlcjxUPikge1xuICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSA9IHRoaXMuc3RyZWFtU291cmNlKHRoaXMpXG4gICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5KClcblxuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxUPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldID0gZm5Pck9ic2VydmVyW29iaktleV1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldID0gZm5Pck9ic2VydmVyXG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyArPSAxXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XVxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPihvYmo6IGFueSk6IG9iaiBpcyBPYnNlcnZlcjxUPiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmoubmV4dCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNMaXN0ZW5lcjxUPihmbjogYW55KTogZm4gaXMgTGlzdGVuZXI8VD4ge1xuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKiBTYW1lIGFzIHJlZ3VsYXIgb2JzZXJ2YWJsZSBleGNlcHQgaXQgYWx3YXlzIGVtaXRzIHRoZSBsYXN0IHZhbHVlICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3VyU3ViamVjdDxUID0gYW55PiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBsYXN0TmV4dDogVFxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgICB0aGlzLmxhc3ROZXh0ID0gdmFsdWVcbiAgfVxuXG4gIC8qIFZlcnkgc2ltaWxhciB0byBvYnNlcnZhYmxlIGV4Y2VwdCBpdCBzZW5kcyB0aGUgbW9zdCByZWNlbnQgdmFsdWUgb24gc3Vic2NyaWJlICovXG4gIHN1YnNjcmliZShmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFQ+IHwgT2JzZXJ2ZXI8VD4pIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IHN1cGVyLnN1YnNjcmliZShmbk9yT2JzZXJ2ZXIpXG4gICAgaWYgKGlzT2JzZXJ2ZXIob2JzZXJ2ZXIub2JzZXJ2ZXIpKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlci5uZXh0KHRoaXMubGFzdE5leHQpXG4gICAgfSBlbHNlIGlmIChpc0xpc3RlbmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGZuT3JPYnNlcnZlcih0aGlzLmxhc3ROZXh0KVxuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbEFQSTxDPiB7XG4gIG9uU3Vic2NyaWJlOiAoY2hhbm5lbDogQykgPT4gYW55XG4gIG9uVW5zdWJzY3JpYmU6IChjaGFubmVsOiBDKSA9PiBhbnlcbiAgZGVzdHJveTogKCkgPT4gYW55XG59XG5cbmZ1bmN0aW9uIGlzQ2hhbm5lbEFQSTxDPihhcmcpOiBhcmcgaXMgQ2hhbm5lbEFQSTxDPiB7XG4gIHJldHVybiBCb29sZWFuKGFyZy5kZXN0cm95KVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbGxlZE9ic2VydmFibGU8QyA9IGFueSwgViA9IGFueT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwXG4gIHByaXZhdGUgc3RyZWFtU291cmNlOiAob2JzZXJ2ZXI6IENoYW5uZWxsZWRPYnNlcnZhYmxlPEMsIFY+KSA9PiBDbGVhbnVwIHwgQ2hhbm5lbEFQSTxDPlxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgfCBDaGFubmVsQVBJPEM+ID0gKCkgPT4ge31cbiAgY2hhbm5lbHM6IE1hcDxDLCBMaXN0ZW5lckdyb3VwPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIGNhbmNlbHM6IERpY3Q8Q2xlYW51cD4gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQ2hhbm5lbGxlZE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGNoYW5uZWw6IEMsIGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFYgfCBFcnJvcikge1xuICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsKVxuICAgIGZvciAoY29uc3QgayBpbiBjW2tleV0pIHtcbiAgICAgIGNba2V5XVtrXSh2YWwpXG4gICAgfVxuICB9XG5cbiAgbmV4dChjaGFubmVsOiBDLCB2YWx1ZTogVikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnbmV4dCcsIHZhbHVlKVxuICB9XG4gIGVycm9yKGNoYW5uZWw6IEMsIGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnZXJyb3InLCBlcnJvcilcbiAgfVxuICBjb21wbGV0ZShjaGFubmVsOiBDKSB7XG4gICAgdGhpcy5lbWl0KGNoYW5uZWwsICdjb21wbGV0ZScpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNhbmNlbHMpIHtcbiAgICAgIHRoaXMuY2FuY2Vsc1trXSgpXG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95IChmbjpDbGVhbnVwKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoKVxuXG4gICAgdGhpcy5jYW5jZWxzW2tleV0gPSAoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgIGZuKClcbiAgICB9XG4gIH1cblxuICAvKiBcbiAgVGhpcyBpcyBjYWxsZWQgd2hlbiBhIG9ic2VydmVyIHVuc3Vic2NyaWJlc1xuICBpZiBpdCB3YXMgdGhlIGxhc3QgcmVtYWluaW5nIG9ic2VydmVyIHRoZW4gaXQgdW5zdWJzY3JpYmVzIGZyb20gdGhlIHNvdXJjZVxuICAqL1xuICBjbGVhbnVwKGNoYW5uZWw6IEMpIHtcbiAgICBpZiAoaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSkgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2Uub25VbnN1YnNjcmliZShjaGFubmVsKVxuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSA/IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlLmRlc3Ryb3koKSA6IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKClcbiAgICB9XG4gIH1cblxuICAvKlxuICBTdWJzY3JpYmUgY2FuIGJlIHBhc3NlZCBlaXRoZXIgYSBcbiAgTGlzdGVuZXI6IChuZXh0VmFsKSA9PiB7fSBcbiAgICBvciBhblxuICBPYnNlcnZlcjogeyBuZXh0OiBuZXh0VmFsID0+IHt9LCBlcnJvcjogZXJyID0+IHt9LCB9XG4gICovXG4gIHN1YnNjcmliZShjaGFubmVsS2V5OiBDLCBmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFY+IHwgT2JzZXJ2ZXI8Vj4pIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UgPSB0aGlzLnN0cmVhbVNvdXJjZSh0aGlzKVxuICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbEtleSlcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICBpZiAoIWNoYW5uZWwpIHtcbiAgICAgIGNoYW5uZWwgPSB7IG5leHQ6IHt9LCBlcnJvcjoge30sIGNvbXBsZXRlOiB7fSB9XG4gICAgICB0aGlzLmNoYW5uZWxzLnNldChjaGFubmVsS2V5LCBjaGFubmVsKVxuICAgIH1cblxuICAgIGlmIChpc0NoYW5uZWxBUEkodGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UpKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZS5vblN1YnNjcmliZShjaGFubmVsS2V5KVxuICAgIH1cblxuICAgIC8qICAqL1xuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxWPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgY2hhbm5lbFtvYmpLZXldW2tleV0gPSBmbk9yT2JzZXJ2ZXJbb2JqS2V5XVxuICAgICAgfSlcblxuICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyAtPSAxXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsS2V5KVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgY1tvYmpLZXldW2tleV1cbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FuY2Vsc1trZXldXG4gICAgICAgIHRoaXMuY2xlYW51cChjaGFubmVsS2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG5cbiAgICBpZiAoaXNMaXN0ZW5lcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBjaGFubmVsLm5leHRba2V5XSA9IGZuT3JPYnNlcnZlclxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzIC09IDFcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHMuZ2V0KGNoYW5uZWxLZXkpLm5leHRba2V5XVxuICAgICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgICAgdGhpcy5jbGVhbnVwKGNoYW5uZWxLZXkpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FuY2Vsc1trZXldXG5cbiAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiBjYW5jZWwsIG9ic2VydmVyOiBmbk9yT2JzZXJ2ZXIgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlXG4iXSwic291cmNlUm9vdCI6IiJ9