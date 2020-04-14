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
/******/ 		"/observers/create-resize-observable": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/observers/create-resize-observable.ts");
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

/***/ "./src/observers/create-resize-observable.ts":
/*!***************************************************!*\
  !*** ./src/observers/create-resize-observable.ts ***!
  \***************************************************/
/*! exports provided: createResizeObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResizeObservable", function() { return createResizeObservable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactive_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/observable */ "./src/reactive/observable.ts");



/* Intersection observer polyfill for IE */

function createResizeObservable() {
  var observable = new _reactive_observable__WEBPACK_IMPORTED_MODULE_2__["ChannelledObservable"](function (_ref) {
    var next = _ref.next,
        error = _ref.error,
        complete = _ref.complete;

    /* Entries is an array of entries for every element that changed */
    var disconnected = false;
    var started = false;
    var source;

    var getSource = /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ResizeObserver;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = window.ResizeObserver;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @juggle/resize-observer */ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"));

              case 4:
                _context.t0 = _context.sent.ResizeObserver;

              case 5:
                ResizeObserver = _context.t0;

                if (!disconnected) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                started = true;
                return _context.abrupt("return", new ResizeObserver(function (entries) {
                  entries.forEach(function (entry) {
                    /* Get the callback for the specific element */
                    next(entry.target, entry);
                  });
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getSource() {
        return _ref2.apply(this, arguments);
      };
    }();

    source = getSource().then(function (r) {
      source = r;
      return r;
    });
    return {
      onSubscribe: function onSubscribe(channel) {
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
                  src.observe(channel);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      onUnsubscribe: function onUnsubscribe(channel) {
        return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var src;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return source;

                case 2:
                  src = _context3.sent;
                  src.unobserve(channel);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      destroy: function destroy() {
        return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
          var src;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  disconnected = true;

                  if (!started) {
                    _context4.next = 6;
                    break;
                  }

                  _context4.next = 4;
                  return source;

                case 4:
                  src = _context4.sent;
                  src.disconnect();

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vYnNlcnZlcnMvY3JlYXRlLXJlc2l6ZS1vYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGl2ZS9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiRXJyb3IiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJzdXBlclByb3BCYXNlIiwicmVxdWlyZSIsIl9nZXQiLCJwcm9wZXJ0eSIsInJlY2VpdmVyIiwiUmVmbGVjdCIsImdldCIsImJhc2UiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2FsbCIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfdHlwZW9mIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiX3N1cGVyUHJvcEJhc2UiLCJvYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiIsIm9yaWdpbmFsTW9kdWxlIiwid2VicGFja1BvbHlmaWxsIiwiY2hpbGRyZW4iLCJsIiwiY3JlYXRlUmVzaXplT2JzZXJ2YWJsZSIsIm9ic2VydmFibGUiLCJDaGFubmVsbGVkT2JzZXJ2YWJsZSIsImRpc2Nvbm5lY3RlZCIsInN0YXJ0ZWQiLCJzb3VyY2UiLCJnZXRTb3VyY2UiLCJ3aW5kb3ciLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJyIiwib25TdWJzY3JpYmUiLCJjaGFubmVsIiwic3JjIiwib2JzZXJ2ZSIsIm9uVW5zdWJzY3JpYmUiLCJ1bm9ic2VydmUiLCJkZXN0cm95IiwiZGlzY29ubmVjdCIsIk9ic2VydmFibGUiLCJzdHJlYW1Tb3VyY2UiLCJiaW5kIiwiaW5kZXgiLCJ2YWwiLCJrIiwibGlzdGVuZXJzIiwiZW1pdCIsImNhbmNlbHMiLCJnZXRLZXkiLCJhY3RpdmVMaXN0ZW5lcnMiLCJ1bnN1YnNjcmliZUZyb21Tb3VyY2UiLCJmbk9yT2JzZXJ2ZXIiLCJzdWJzY3JpYmVkIiwiaXNPYnNlcnZlciIsIm9iaktleXMiLCJvYmpLZXkiLCJjYW5jZWwiLCJjbGVhbnVwIiwidW5zdWJzY3JpYmUiLCJvYnNlcnZlciIsImlzTGlzdGVuZXIiLCJCZWhhdmlvdXJTdWJqZWN0IiwibGFzdE5leHQiLCJpc0NoYW5uZWxBUEkiLCJCb29sZWFuIiwiTWFwIiwiYyIsImNoYW5uZWxzIiwiY2hhbm5lbEtleSIsInNldCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUlBO1FBQ0E7UUFDQSwwQ0FBMEM7UUFDMUM7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1B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QUNELFNBUkQ7O0FBVUEsYUFBS3JCLE9BQUwsQ0FBYWhOLEdBQWIsSUFBb0J5TixNQUFwQjtBQUVBLGVBQU87QUFBRUUscUJBQVcsRUFBRUYsTUFBZjtBQUF1Qkcsa0JBQVEsRUFBRVI7QUFBakMsU0FBUDtBQUNEOztBQUVELFVBQUlTLFVBQVUsQ0FBQ1QsWUFBRCxDQUFkLEVBQThCO0FBQzVCbkIsZUFBTyxDQUFDckUsSUFBUixDQUFhNUgsR0FBYixJQUFvQm9OLFlBQXBCO0FBQ0EsYUFBS0YsZUFBTCxJQUF3QixDQUF4Qjs7QUFFQSxZQUFNTyxRQUFNLEdBQUcsU0FBVEEsUUFBUyxHQUFNO0FBQ25CLGdCQUFJLENBQUNQLGVBQUwsSUFBd0IsQ0FBeEI7QUFDQSxpQkFBTyxNQUFJLENBQUNrQixRQUFMLENBQWN6TCxHQUFkLENBQWtCMEwsVUFBbEIsRUFBOEJ6RyxJQUE5QixDQUFtQzVILEdBQW5DLENBQVA7QUFDQSxpQkFBTyxNQUFJLENBQUNnTixPQUFMLENBQWFoTixHQUFiLENBQVA7O0FBQ0EsZ0JBQUksQ0FBQzBOLE9BQUwsQ0FBYVcsVUFBYjtBQUNELFNBTEQ7O0FBT0EsYUFBS3JCLE9BQUwsQ0FBYWhOLEdBQWI7QUFFQSxlQUFPO0FBQUUyTixxQkFBVyxFQUFFRixRQUFmO0FBQXVCRyxrQkFBUSxFQUFFUjtBQUFqQyxTQUFQO0FBQ0Q7QUFDRjtBQS9ISDs7QUFBQTtBQUFBO0FBa0llWix5RUFBZixFIiwiZmlsZSI6Ii9vYnNlcnZlcnMvY3JlYXRlLXJlc2l6ZS1vYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCIvb2JzZXJ2ZXJzL2NyZWF0ZS1yZXNpemUtb2JzZXJ2YWJsZVwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL29ic2VydmVycy9jcmVhdGUtcmVzaXplLW9ic2VydmFibGUudHNcIik7XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLyogSW50ZXJzZWN0aW9uIG9ic2VydmVyIHBvbHlmaWxsIGZvciBJRSAqL1xyXG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xyXG5pbXBvcnQgeyBDaGFubmVsbGVkT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3JlYWN0aXZlL29ic2VydmFibGUnXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBSZXNpemVPYnNlcnZlcjogdHlwZW9mIFBvbHlmaWxsXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFJPID0gaW1wb3J0KCdAanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlcicpLlJlc2l6ZU9ic2VydmVyXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzaXplT2JzZXJ2YWJsZSgpIHtcclxuICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IENoYW5uZWxsZWRPYnNlcnZhYmxlPEVsZW1lbnQsIFJPPihcclxuICAgICh7IG5leHQsIGVycm9yLCBjb21wbGV0ZSB9KSA9PiB7XHJcbiAgICAgIC8qIEVudHJpZXMgaXMgYW4gYXJyYXkgb2YgZW50cmllcyBmb3IgZXZlcnkgZWxlbWVudCB0aGF0IGNoYW5nZWQgKi9cclxuICAgICAgbGV0IGRpc2Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgIGxldCBzdGFydGVkID0gZmFsc2VcclxuICAgICAgbGV0IHNvdXJjZTogUHJvbWlzZTxSTz4gfCBST1xyXG4gICAgICBsZXQgZ2V0U291cmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFJlc2l6ZU9ic2VydmVyID1cclxuICAgICAgICAgIHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fFxyXG4gICAgICAgICAgKGF3YWl0IGltcG9ydCgnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInKSkuUmVzaXplT2JzZXJ2ZXJcclxuICAgICAgICBpZiAoZGlzY29ubmVjdGVkKSByZXR1cm5cclxuICAgICAgICBzdGFydGVkID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgLyogR2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIHNwZWNpZmljIGVsZW1lbnQgKi9cclxuICAgICAgICAgICAgbmV4dChlbnRyeS50YXJnZXQsIGVudHJ5KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzb3VyY2UgPSBnZXRTb3VyY2UoKS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgc291cmNlID0gclxyXG4gICAgICAgIHJldHVybiByXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFzeW5jIG9uU3Vic2NyaWJlKGNoYW5uZWwpIHtcclxuICAgICAgICAgIGxldCBzcmMgPSBhd2FpdCBzb3VyY2VcclxuICAgICAgICAgIHNyYy5vYnNlcnZlKGNoYW5uZWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBvblVuc3Vic2NyaWJlKGNoYW5uZWwpIHtcclxuICAgICAgICAgIGxldCBzcmMgPSBhd2FpdCBzb3VyY2VcclxuICAgICAgICAgIHNyYy51bm9ic2VydmUoY2hhbm5lbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICBkaXNjb25uZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gYXdhaXQgc291cmNlXHJcbiAgICAgICAgICAgIHNyYy5kaXNjb25uZWN0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICByZXR1cm4gb2JzZXJ2YWJsZVxyXG59XHJcbiIsImludGVyZmFjZSBPYnNlcnZlcjxUPiB7XG4gIG5leHQ6IExpc3RlbmVyPFQ+XG4gIGNvbXBsZXRlPzogTGlzdGVuZXJcbiAgZXJyb3I/OiBMaXN0ZW5lcjxFcnJvcj5cbn1cbnR5cGUgTGlzdGVuZXI8VCA9IGFueT4gPSAodmFsdWU6IFQpID0+IGFueVxudHlwZSBDbGVhbnVwID0gKCkgPT4gYW55XG5pbnRlcmZhY2UgRGljdDxUPiB7XG4gIFtrZXk6IHN0cmluZ106IFRcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJHcm91cCB7XG4gIG5leHQ6IERpY3Q8TGlzdGVuZXI+XG4gIGVycm9yOiBEaWN0PExpc3RlbmVyPlxuICBjb21wbGV0ZTogRGljdDxMaXN0ZW5lcj5cbn1cblxuY2xhc3MgT2JzZXJ2YWJsZTxUID0gYW55PiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDBcbiAgcHJpdmF0ZSBzdHJlYW1Tb3VyY2U6IChvYnNlcnZlcjogT2JzZXJ2YWJsZTxUPikgPT4gQ2xlYW51cFxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgPSAoKSA9PiB7fVxuICBwcml2YXRlIGxpc3RlbmVyczogTGlzdGVuZXJHcm91cCA9IHtcbiAgICBuZXh0OiB7fSxcbiAgICBlcnJvcjoge30sXG4gICAgY29tcGxldGU6IHt9XG4gIH1cbiAgcHJpdmF0ZSBjYW5jZWxzOiBEaWN0PENsZWFudXA+ID0ge31cblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFQgfCBFcnJvcikge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1trZXldW2tdKHZhbClcbiAgICB9XG4gIH1cblxuICAvKiBFbWl0IHRoZSBuZXh0IHZhbHVlICovXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgfVxuXG4gIGVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcilcbiAgfVxuXG4gIC8qIEVtaXQgYW4gZW5kIGV2ZW50IHRvIGV2ZXJ5dGhpbmcgKi9cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZScpXG4gICAgdGhpcy5kZXN0cm95KClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuY2FuY2Vscykge1xuICAgICAgdGhpcy5jYW5jZWxzW2tdKClcbiAgICB9XG4gIH1cblxuICBvbkRlc3Ryb3kgKGZuOkNsZWFudXApIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICB0aGlzLmNhbmNlbHNba2V5XSA9ICgpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgZm4oKVxuICAgIH1cbiAgfVxuXG4gIC8qIFxuICBUaGlzIGlzIGNhbGxlZCB3aGVuIGEgb2JzZXJ2ZXIgdW5zdWJzY3JpYmVzXG4gIGlmIGl0IHdhcyB0aGUgbGFzdCByZW1haW5pbmcgb2JzZXJ2ZXIgdGhlbiBpdCB1bnN1YnNjcmliZXMgZnJvbSB0aGUgc291cmNlXG4gICovXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIFN1YnNjcmliZSBjYW4gYmUgcGFzc2VkIGVpdGhlciBhIFxuICBMaXN0ZW5lcjogKG5leHRWYWwpID0+IHt9IFxuICAgIG9yIGFuXG4gIE9ic2VydmVyOiB7IG5leHQ6IG5leHRWYWwgPT4ge30sIGVycm9yOiBlcnIgPT4ge30sIH1cbiAgKi9cbiAgc3Vic2NyaWJlKGZuT3JPYnNlcnZlcjogTGlzdGVuZXI8VD4gfCBPYnNlcnZlcjxUPikge1xuICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSA9IHRoaXMuc3RyZWFtU291cmNlKHRoaXMpXG4gICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5KClcblxuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxUPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldID0gZm5Pck9ic2VydmVyW29iaktleV1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbb2JqS2V5XVtrZXldXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldID0gZm5Pck9ic2VydmVyXG4gICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyArPSAxXG5cbiAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgLT0gMVxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnMubmV4dFtrZXldXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbmNlbHNba2V5XVxuICAgICAgICB0aGlzLmNsZWFudXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XVxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPihvYmo6IGFueSk6IG9iaiBpcyBPYnNlcnZlcjxUPiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmoubmV4dCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNMaXN0ZW5lcjxUPihmbjogYW55KTogZm4gaXMgTGlzdGVuZXI8VD4ge1xuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKiBTYW1lIGFzIHJlZ3VsYXIgb2JzZXJ2YWJsZSBleGNlcHQgaXQgYWx3YXlzIGVtaXRzIHRoZSBsYXN0IHZhbHVlICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3VyU3ViamVjdDxUID0gYW55PiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBsYXN0TmV4dDogVFxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmVtaXQoJ25leHQnLCB2YWx1ZSlcbiAgICB0aGlzLmxhc3ROZXh0ID0gdmFsdWVcbiAgfVxuXG4gIC8qIFZlcnkgc2ltaWxhciB0byBvYnNlcnZhYmxlIGV4Y2VwdCBpdCBzZW5kcyB0aGUgbW9zdCByZWNlbnQgdmFsdWUgb24gc3Vic2NyaWJlICovXG4gIHN1YnNjcmliZShmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFQ+IHwgT2JzZXJ2ZXI8VD4pIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IHN1cGVyLnN1YnNjcmliZShmbk9yT2JzZXJ2ZXIpXG4gICAgaWYgKGlzT2JzZXJ2ZXIob2JzZXJ2ZXIub2JzZXJ2ZXIpKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlci5uZXh0KHRoaXMubGFzdE5leHQpXG4gICAgfSBlbHNlIGlmIChpc0xpc3RlbmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGZuT3JPYnNlcnZlcih0aGlzLmxhc3ROZXh0KVxuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbEFQSTxDPiB7XG4gIG9uU3Vic2NyaWJlOiAoY2hhbm5lbDogQykgPT4gYW55XG4gIG9uVW5zdWJzY3JpYmU6IChjaGFubmVsOiBDKSA9PiBhbnlcbiAgZGVzdHJveTogKCkgPT4gYW55XG59XG5cbmZ1bmN0aW9uIGlzQ2hhbm5lbEFQSTxDPihhcmcpOiBhcmcgaXMgQ2hhbm5lbEFQSTxDPiB7XG4gIHJldHVybiBCb29sZWFuKGFyZy5kZXN0cm95KVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbGxlZE9ic2VydmFibGU8QyA9IGFueSwgViA9IGFueT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwXG4gIHByaXZhdGUgc3RyZWFtU291cmNlOiAob2JzZXJ2ZXI6IENoYW5uZWxsZWRPYnNlcnZhYmxlPEMsIFY+KSA9PiBDbGVhbnVwIHwgQ2hhbm5lbEFQSTxDPlxuICBwcml2YXRlIHN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGFjdGl2ZUxpc3RlbmVycyA9IDBcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21Tb3VyY2U6IENsZWFudXAgfCBDaGFubmVsQVBJPEM+ID0gKCkgPT4ge31cbiAgY2hhbm5lbHM6IE1hcDxDLCBMaXN0ZW5lckdyb3VwPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIGNhbmNlbHM6IERpY3Q8Q2xlYW51cD4gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQ2hhbm5lbGxlZE9ic2VydmFibGVbJ3N0cmVhbVNvdXJjZSddKSB7XG4gICAgdGhpcy5zdHJlYW1Tb3VyY2UgPSBzb3VyY2VcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpXG4gIH1cblxuICBwcml2YXRlIGdldEtleSgpIHtcbiAgICByZXR1cm4gJ2snICsgdGhpcy5pbmRleCsrXG4gIH1cblxuICBlbWl0KGNoYW5uZWw6IEMsIGtleTogJ25leHQnIHwgJ2Vycm9yJyB8ICdjb21wbGV0ZScsIHZhbD86IFYgfCBFcnJvcikge1xuICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsKVxuICAgIGZvciAoY29uc3QgayBpbiBjW2tleV0pIHtcbiAgICAgIGNba2V5XVtrXSh2YWwpXG4gICAgfVxuICB9XG5cbiAgbmV4dChjaGFubmVsOiBDLCB2YWx1ZTogVikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnbmV4dCcsIHZhbHVlKVxuICB9XG4gIGVycm9yKGNoYW5uZWw6IEMsIGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMuZW1pdChjaGFubmVsLCAnZXJyb3InLCBlcnJvcilcbiAgfVxuICBjb21wbGV0ZShjaGFubmVsOiBDKSB7XG4gICAgdGhpcy5lbWl0KGNoYW5uZWwsICdjb21wbGV0ZScpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNhbmNlbHMpIHtcbiAgICAgIHRoaXMuY2FuY2Vsc1trXSgpXG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95IChmbjpDbGVhbnVwKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoKVxuXG4gICAgdGhpcy5jYW5jZWxzW2tleV0gPSAoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgIGZuKClcbiAgICB9XG4gIH1cblxuICAvKiBcbiAgVGhpcyBpcyBjYWxsZWQgd2hlbiBhIG9ic2VydmVyIHVuc3Vic2NyaWJlc1xuICBpZiBpdCB3YXMgdGhlIGxhc3QgcmVtYWluaW5nIG9ic2VydmVyIHRoZW4gaXQgdW5zdWJzY3JpYmVzIGZyb20gdGhlIHNvdXJjZVxuICAqL1xuICBjbGVhbnVwKGNoYW5uZWw6IEMpIHtcbiAgICBpZiAoaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSkgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2Uub25VbnN1YnNjcmliZShjaGFubmVsKVxuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUxpc3RlbmVycykge1xuICAgICAgaXNDaGFubmVsQVBJKHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKSA/IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlLmRlc3Ryb3koKSA6IHRoaXMudW5zdWJzY3JpYmVGcm9tU291cmNlKClcbiAgICB9XG4gIH1cblxuICAvKlxuICBTdWJzY3JpYmUgY2FuIGJlIHBhc3NlZCBlaXRoZXIgYSBcbiAgTGlzdGVuZXI6IChuZXh0VmFsKSA9PiB7fSBcbiAgICBvciBhblxuICBPYnNlcnZlcjogeyBuZXh0OiBuZXh0VmFsID0+IHt9LCBlcnJvcjogZXJyID0+IHt9LCB9XG4gICovXG4gIHN1YnNjcmliZShjaGFubmVsS2V5OiBDLCBmbk9yT2JzZXJ2ZXI6IExpc3RlbmVyPFY+IHwgT2JzZXJ2ZXI8Vj4pIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UgPSB0aGlzLnN0cmVhbVNvdXJjZSh0aGlzKVxuICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbEtleSlcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleSgpXG5cbiAgICBpZiAoIWNoYW5uZWwpIHtcbiAgICAgIGNoYW5uZWwgPSB7IG5leHQ6IHt9LCBlcnJvcjoge30sIGNvbXBsZXRlOiB7fSB9XG4gICAgICB0aGlzLmNoYW5uZWxzLnNldChjaGFubmVsS2V5LCBjaGFubmVsKVxuICAgIH1cblxuICAgIGlmIChpc0NoYW5uZWxBUEkodGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UpKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZS5vblN1YnNjcmliZShjaGFubmVsS2V5KVxuICAgIH1cblxuICAgIC8qICAqL1xuICAgIGlmIChpc09ic2VydmVyKGZuT3JPYnNlcnZlcikpIHtcbiAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhmbk9yT2JzZXJ2ZXIpIGFzIChrZXlvZiBPYnNlcnZlcjxWPilbXVxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgY2hhbm5lbFtvYmpLZXldW2tleV0gPSBmbk9yT2JzZXJ2ZXJbb2JqS2V5XVxuICAgICAgfSlcblxuICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUxpc3RlbmVycyAtPSAxXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNoYW5uZWxzLmdldChjaGFubmVsS2V5KVxuICAgICAgICBvYmpLZXlzLmZvckVhY2gob2JqS2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgY1tvYmpLZXldW2tleV1cbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FuY2Vsc1trZXldXG4gICAgICAgIHRoaXMuY2xlYW51cChjaGFubmVsS2V5KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbmNlbHNba2V5XSA9IGNhbmNlbFxuXG4gICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogY2FuY2VsLCBvYnNlcnZlcjogZm5Pck9ic2VydmVyIH1cbiAgICB9XG5cbiAgICBpZiAoaXNMaXN0ZW5lcihmbk9yT2JzZXJ2ZXIpKSB7XG4gICAgICBjaGFubmVsLm5leHRba2V5XSA9IGZuT3JPYnNlcnZlclxuICAgICAgdGhpcy5hY3RpdmVMaXN0ZW5lcnMgKz0gMVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlzdGVuZXJzIC09IDFcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHMuZ2V0KGNoYW5uZWxLZXkpLm5leHRba2V5XVxuICAgICAgICBkZWxldGUgdGhpcy5jYW5jZWxzW2tleV1cbiAgICAgICAgdGhpcy5jbGVhbnVwKGNoYW5uZWxLZXkpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FuY2Vsc1trZXldXG5cbiAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiBjYW5jZWwsIG9ic2VydmVyOiBmbk9yT2JzZXJ2ZXIgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlXG4iXSwic291cmNlUm9vdCI6IiJ9