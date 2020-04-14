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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element/temp-node.ts");
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

/***/ "./src/element/is.ts":
/*!***************************!*\
  !*** ./src/element/is.ts ***!
  \***************************/
/*! exports provided: is */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
var is = {
  script: function script(t) {
    return t.tagName === 'script';
  },
  title: function title(t) {
    return t.tagName === 'title';
  },
  style: function style(t) {
    return t.tagName === 'style';
  },
  link: function link(t) {
    return t.tagName === 'link';
  },
  element: function element(t) {
    return t.nodeType === Node.ELEMENT_NODE;
  },
  text: function text(t) {
    return t.nodeType === Node.TEXT_NODE;
  },
  comment: function comment(t) {
    return t.nodeType === Node.COMMENT_NODE;
  }
};

/***/ }),

/***/ "./src/element/temp-node.ts":
/*!**********************************!*\
  !*** ./src/element/temp-node.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TempNode; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ "./src/element/is.ts");





function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Doesn't affect the real dom when being appended to */


var TempNode = /*#__PURE__*/function () {
  function TempNode(element) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TempNode);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "nodeList", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "element", void 0);

    this.nodeList = new Set(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(element.children));
    this.element = element;

    var _loop = function _loop(prop) {
      if (typeof _this[prop] === "undefined") {
        Object.defineProperty(_this, prop, {
          get: function get() {
            return element[prop];
          },
          set: function set(value) {
            return element[prop] = value;
          }
        });
      }
    };

    for (var prop in element) {
      _loop(prop);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TempNode, [{
    key: "querySelector",
    value: function querySelector(query) {
      var _iterator = _createForOfIteratorHelper(this.nodeList),
          _step;

      try {
        var _LP = Date.now();

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (Date.now() - _LP > 300) {
            (function () {
              throw Error('Infinite loop');
            })(44, 4);

            break;
          }

          var child = _step.value;
          var result = child.querySelector(query);
          if (result) return result;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(query) {
      var children = [];

      var _iterator2 = _createForOfIteratorHelper(this.nodeList),
          _step2;

      try {
        var _LP2 = Date.now();

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          if (Date.now() - _LP2 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(53, 4);

            break;
          }

          var child = _step2.value;
          children.push.apply(children, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(child.querySelectorAll(query)));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return children;
    }
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      this.nodeList.add(node);
    }
  }, {
    key: "append",
    value: function append(node) {
      this.nodeList.add(node);
    }
  }, {
    key: "appendTo",
    value: function appendTo(node) {
      var _iterator3 = _createForOfIteratorHelper(this.nodeList),
          _step3;

      try {
        var _LP3 = Date.now();

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          if (Date.now() - _LP3 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(68, 4);

            break;
          }

          var child = _step3.value;
          this.element.appendChild(child);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      node.appendChild(this.element);
    }
  }, {
    key: "innerHTML",
    get: function get() {
      var result = "";

      var _iterator4 = _createForOfIteratorHelper(this.nodeList),
          _step4;

      try {
        var _LP4 = Date.now();

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          if (Date.now() - _LP4 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(29, 4);

            break;
          }

          var child = _step4.value;
          result += _is__WEBPACK_IMPORTED_MODULE_4__["is"].element(child) ? child.innerHTML : child.textContent;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return result;
    }
  }, {
    key: "textContent",
    get: function get() {
      var result = "";

      var _iterator5 = _createForOfIteratorHelper(this.nodeList),
          _step5;

      try {
        var _LP5 = Date.now();

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          if (Date.now() - _LP5 > 300) {
            (function () {
              throw Error('Infinite loop');
            })(37, 4);

            break;
          }

          var child = _step5.value;
          result += child.textContent;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return result;
    }
  }]);

  return TempNode;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudC9pcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudC90ZW1wLW5vZGUudHMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXlMaWtlVG9BcnJheSIsInJlcXVpcmUiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJpc0FycmF5IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsIl9pdGVyYWJsZVRvQXJyYXkiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibyIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJpcyIsInNjcmlwdCIsInQiLCJ0YWdOYW1lIiwidGl0bGUiLCJzdHlsZSIsImxpbmsiLCJlbGVtZW50Iiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwidGV4dCIsIlRFWFRfTk9ERSIsImNvbW1lbnQiLCJDT01NRU5UX05PREUiLCJUZW1wTm9kZSIsIm5vZGVMaXN0IiwiU2V0IiwiY2hpbGRyZW4iLCJwcm9wIiwiZ2V0Iiwic2V0IiwicXVlcnkiLCJjaGlsZCIsInJlc3VsdCIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwicXVlcnlTZWxlY3RvckFsbCIsIm5vZGUiLCJhZGQiLCJhcHBl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QUFBO0FBQUE7O0FBSXRCSyxVQUFJLENBQUNFLFdBQUwsQ0FBaUIsS0FBS3ZCLE9BQXRCO0FBQ0Q7Ozt3QkE3Q2U7QUFDZCxVQUFJaUIsTUFBTSxHQUFHLEVBQWI7O0FBRGMsa0RBRUksS0FBS1IsUUFGVDtBQUFBOztBQUFBO0FBQUE7O0FBRWQsK0RBQWlDO0FBQUE7QUFBQSxhQTVCckMsWUFBTTtBQUNBLG9CQUFNakUsS0FBSyxDQUFDLGVBQUQsQ0FBWDtBQUNELGFBMEJnQzs7QUFBQTtBQUFBOztBQUFBLGNBQXhCd0UsS0FBd0I7QUFDL0JDLGdCQUFNLElBQUl4QixzQ0FBRSxDQUFDTyxPQUFILENBQVdnQixLQUFYLElBQW9CQSxLQUFLLENBQUNRLFNBQTFCLEdBQXNDUixLQUFLLENBQUNTLFdBQXREO0FBQ0Q7QUFKYTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtkLGFBQU9SLE1BQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixVQUFJQSxNQUFNLEdBQUcsRUFBYjs7QUFEZ0Isa0RBRUUsS0FBS1IsUUFGUDtBQUFBOztBQUFBO0FBQUE7O0FBRWhCLCtEQUFpQztBQUFBO0FBQUEsYUFwQ3JDLFlBQU07QUFDQSxvQkFBTWpFLEtBQUssQ0FBQyxlQUFELENBQVg7QUFDRCxhQWtDZ0M7O0FBQUE7QUFBQTs7QUFBQSxjQUF4QndFLEtBQXdCO0FBQy9CQyxnQkFBTSxJQUFJRCxLQUFLLENBQUNTLFdBQWhCO0FBQ0Q7QUFKZTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtoQixhQUFPUixNQUFQO0FBQ0QiLCJmaWxlIjoiL2VsZW1lbnQvdGVtcC1ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZWxlbWVudC90ZW1wLW5vZGUudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImV4cG9ydCBjb25zdCBpcyA9IHtcbiAgc2NyaXB0KHQ6IEVsZW1lbnQpOiB0IGlzIEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICByZXR1cm4gdC50YWdOYW1lID09PSAnc2NyaXB0J1xuICB9LFxuICB0aXRsZSh0OiBFbGVtZW50KTogdCBpcyBIVE1MVGl0bGVFbGVtZW50IHtcbiAgICByZXR1cm4gdC50YWdOYW1lID09PSAndGl0bGUnXG4gIH0sXG4gIHN0eWxlKHQ6IEVsZW1lbnQpOiB0IGlzIEhUTUxTdHlsZUVsZW1lbnQge1xuICAgIHJldHVybiB0LnRhZ05hbWUgPT09ICdzdHlsZSdcbiAgfSxcbiAgbGluayh0OiBFbGVtZW50KTogdCBpcyBIVE1MTGlua0VsZW1lbnQge1xuICAgIHJldHVybiB0LnRhZ05hbWUgPT09ICdsaW5rJ1xuICB9LFxuICBlbGVtZW50KHQ6IEVsZW1lbnQgfCBUZXh0KTogdCBpcyBFbGVtZW50IHtcbiAgICByZXR1cm4gdC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREVcbiAgfSxcbiAgdGV4dCh0OiBFbGVtZW50IHwgVGV4dCk6IHQgaXMgVGV4dCB7XG4gICAgcmV0dXJuIHQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFXG4gIH0sXG4gIGNvbW1lbnQodDogYW55KTogdCBpcyBDb21tZW50IHtcbiAgICByZXR1cm4gdC5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREVcbiAgfSxcbn1cbiIsIi8qIERvZXNuJ3QgYWZmZWN0IHRoZSByZWFsIGRvbSB3aGVuIGJlaW5nIGFwcGVuZGVkIHRvICovXG5pbXBvcnQgeyBpcyB9IGZyb20gXCIuL2lzXCJcbnR5cGUgTm9kZXkgPSBFbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBOb2RlIHtcbiAgbm9kZUxpc3Q6IFNldDxFbGVtZW50IHwgVGV4dD5cbiAgZWxlbWVudDogTm9kZXlcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBOb2RleSkge1xuICAgIHRoaXMubm9kZUxpc3QgPSBuZXcgU2V0KFsuLi5lbGVtZW50LmNoaWxkcmVuXSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIGVsZW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcCwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50W3Byb3BdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudFtwcm9wXSA9IHZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgaW5uZXJIVE1MKCkge1xuICAgIGxldCByZXN1bHQgPSBcIlwiXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlTGlzdCkge1xuICAgICAgcmVzdWx0ICs9IGlzLmVsZW1lbnQoY2hpbGQpID8gY2hpbGQuaW5uZXJIVE1MIDogY2hpbGQudGV4dENvbnRlbnRcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50KCkge1xuICAgIGxldCByZXN1bHQgPSBcIlwiXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlTGlzdCkge1xuICAgICAgcmVzdWx0ICs9IGNoaWxkLnRleHRDb250ZW50XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHF1ZXJ5U2VsZWN0b3IocXVlcnk6IHN0cmluZykge1xuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZUxpc3QpIHtcbiAgICAgIGxldCByZXN1bHQgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcXVlcnlTZWxlY3RvckFsbChxdWVyeTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZUxpc3QpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goLi4uY2hpbGQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpXG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgYXBwZW5kQ2hpbGQobm9kZTogRWxlbWVudCkge1xuICAgIHRoaXMubm9kZUxpc3QuYWRkKG5vZGUpXG4gIH1cblxuICBhcHBlbmQobm9kZTogRWxlbWVudCkge1xuICAgIHRoaXMubm9kZUxpc3QuYWRkKG5vZGUpXG4gIH1cblxuICBhcHBlbmRUbyhub2RlOiBFbGVtZW50KSB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlTGlzdCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH1cbiAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==