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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element/proxy-node.ts");
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    var _LP = Date.now();

    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      if (Date.now() - _LP > 300) {
        (function () {
          throw Error('Infinite loop');
        })(9, 4);

        break;
      }

      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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

/***/ "./src/element/proxy-node.ts":
/*!***********************************!*\
  !*** ./src/element/proxy-node.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);




function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function runActions(targets, actions) {
  var result = undefined;

  var _iterator = _createForOfIteratorHelper(targets),
      _step;

  try {
    var _LP = Date.now();

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      if (Date.now() - _LP > 300) {
        (function () {
          throw Error('Infinite loop');
        })(3, 2);

        break;
      }

      var target = _step.value;
      var prev = void 0;
      var t = target;

      var _iterator2 = _createForOfIteratorHelper(actions),
          _step2;

      try {
        var _LP2 = Date.now();

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          if (Date.now() - _LP2 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(6, 4);

            break;
          }

          var action = _step2.value;

          if (action.get) {
            prev = t;
            t = t[action.get];
          } else if (action.set) {
            result = t[action.set[0]] = action.set[1];
          } else if (action.apply) {
            var _action$apply = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(action.apply, 1),
                args = _action$apply[0];

            if (!result) {
              result = t.apply(prev, [args]);
            } else {
              t.apply(prev, [args]);
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

function createProxyNode(elements) {
  var targetElement = elements[0];
  var proxies = [];

  function createProxy(obj) {
    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var prox = new Proxy(obj, {
      get: function get(target, prop) {
        var val = target[prop];

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(val) === 'object' || typeof val === 'function') {
          return createProxy(val, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(actions), [{
            get: prop
          }]));
        }

        return val;
      },
      set: function set(target, prop, value) {
        actions.push({
          set: [prop, value]
        });
        runActions(elements, actions);
      },
      apply: function apply(target, thisArg, argumentsList) {
        actions.push({
          apply: argumentsList
        });
        return runActions(elements, actions);
      }
    });
    proxies.push(prox);
    return prox;
  }

  return createProxy(targetElement);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnQvcHJveHktbm9kZS50cyJdLCJuYW1lcyI6WyJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImxlbmd0aCIsImkiLCJhcnIyIiwiQXJyYXkiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfYXJyYXlXaXRoSG9sZXMiLCJpc0FycmF5IiwiYXJyYXlMaWtlVG9BcnJheSIsInJlcXVpcmUiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiT2JqZWN0IiwiZnJvbSIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnIiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3R5cGVvZiIsIm9iaiIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibyIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsIm5hbWUiLCJ0ZXN0IiwicnVuQWN0aW9ucyIsInRhcmdldHMiLCJhY3Rpb25zIiwicmVzdWx0IiwidGFyZ2V0IiwicHJldiIsInQiLCJhY3Rpb24iLCJnZXQiLCJzZXQiLCJhcHBseSIsImFyZ3MiLCJjcmVhdGVQcm94eU5vZGUiLCJlbGVtZW50cyIsInRhcmdldEVsZW1lbnQiLCJwcm94aWVzIiwiY3JlYXRlUHJveHkiLCJwcm94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TUFEb0IsRUFDWmUsSUFEWSxFQUNOO0FBQ2hCLFlBQUlDLEdBQUcsR0FBR2hCLE1BQU0sQ0FBQ2UsSUFBRCxDQUFoQjs7QUFDQSxZQUFJLHFFQUFPQyxHQUFQLE1BQWUsUUFBZixJQUEyQixPQUFPQSxHQUFQLEtBQWUsVUFBOUMsRUFBMEQ7QUFDeEQsaUJBQU9KLFdBQVcsQ0FBQ0ksR0FBRCw0RkFBVWxCLE9BQVYsSUFBbUI7QUFBRU0sZUFBRyxFQUFFVztBQUFQLFdBQW5CLEdBQWxCO0FBQ0Q7O0FBQ0QsZUFBT0MsR0FBUDtBQUNELE9BUHVCO0FBUXhCWCxTQVJ3QixlQVFwQkwsTUFSb0IsRUFRWmUsSUFSWSxFQVFOOUMsS0FSTSxFQVFDO0FBQ3ZCNkIsZUFBTyxDQUFDOUIsSUFBUixDQUFhO0FBQUVxQyxhQUFHLEVBQUUsQ0FBQ1UsSUFBRCxFQUFPOUMsS0FBUDtBQUFQLFNBQWI7QUFDQTJCLGtCQUFVLENBQUNhLFFBQUQsRUFBV1gsT0FBWCxDQUFWO0FBQ0QsT0FYdUI7QUFZeEJRLFdBWndCLGlCQVlsQk4sTUFaa0IsRUFZVmlCLE9BWlUsRUFZREMsYUFaQyxFQVljO0FBQ3BDcEIsZUFBTyxDQUFDOUIsSUFBUixDQUFhO0FBQUVzQyxlQUFLLEVBQUVZO0FBQVQsU0FBYjtBQUNBLGVBQU90QixVQUFVLENBQUNhLFFBQUQsRUFBV1gsT0FBWCxDQUFqQjtBQUNEO0FBZnVCLEtBQWYsQ0FBWDtBQWtCQWEsV0FBTyxDQUFDM0MsSUFBUixDQUFhNkMsSUFBYjtBQUVBLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFPRCxXQUFXLENBQUNGLGFBQUQsQ0FBbEI7QUFDRCxDIiwiZmlsZSI6Ii9lbGVtZW50L3Byb3h5LW5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbGVtZW50L3Byb3h5LW5vZGUudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gcnVuQWN0aW9ucyh0YXJnZXRzLCBhY3Rpb25zKSB7XG4gIGxldCByZXN1bHQgPSB1bmRlZmluZWRcbiAgZm9yIChsZXQgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBsZXQgcHJldlxuICAgIGxldCB0ID0gdGFyZ2V0XG4gICAgZm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcbiAgICAgIGlmIChhY3Rpb24uZ2V0KSB7XG4gICAgICAgIHByZXYgPSB0XG4gICAgICAgIHQgPSB0W2FjdGlvbi5nZXRdXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5zZXQpIHtcbiAgICAgICAgcmVzdWx0ID0gdFthY3Rpb24uc2V0WzBdXSA9IGFjdGlvbi5zZXRbMV1cbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmFwcGx5KSB7XG4gICAgICAgIGNvbnN0IFthcmdzXSA9IGFjdGlvbi5hcHBseVxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHQuYXBwbHkocHJldiwgW2FyZ3NdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQuYXBwbHkocHJldiwgW2FyZ3NdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm94eU5vZGUoZWxlbWVudHMpIHtcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnRzWzBdXG4gIGxldCBwcm94aWVzID0gW11cblxuICBmdW5jdGlvbiBjcmVhdGVQcm94eShvYmosIGFjdGlvbnMgPSBbXSkge1xuICAgIGxldCBwcm94ID0gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W3Byb3BdXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb3h5KHZhbCwgWy4uLmFjdGlvbnMsIHsgZ2V0OiBwcm9wIH1dKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH0sXG4gICAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBhY3Rpb25zLnB1c2goeyBzZXQ6IFtwcm9wLCB2YWx1ZV0gfSlcbiAgICAgICAgcnVuQWN0aW9ucyhlbGVtZW50cywgYWN0aW9ucylcbiAgICAgIH0sXG4gICAgICBhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpIHtcbiAgICAgICAgYWN0aW9ucy5wdXNoKHsgYXBwbHk6IGFyZ3VtZW50c0xpc3QgfSlcbiAgICAgICAgcmV0dXJuIHJ1bkFjdGlvbnMoZWxlbWVudHMsIGFjdGlvbnMpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHByb3hpZXMucHVzaChwcm94KVxuXG4gICAgcmV0dXJuIHByb3hcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm94eSh0YXJnZXRFbGVtZW50KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==