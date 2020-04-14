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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/object/run-inherited-method.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/object/run-inherited-method.ts":
/*!********************************************!*\
  !*** ./src/object/run-inherited-method.ts ***!
  \********************************************/
/*! exports provided: runInheritedMethod, getInheritedMethod, runIfDifferent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInheritedMethod", function() { return runInheritedMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInheritedMethod", function() { return getInheritedMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDifferent", function() { return runIfDifferent; });
/* 
Shortcut around calling `super.method()` inside client code
*/
function runInheritedMethod(instance, key) {
  var proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return proto[key].apply(instance, args);
}
function getInheritedMethod(instance, key) {
  var proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));
  return typeof proto[key] === 'function' ? proto[key] : undefined;
}
function runIfDifferent(fnA, fnB, thisArg) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  // console.log(fnA, '->', fnB, fnA === fnB)
  var results = [typeof fnA === 'function' ? fnA.apply(thisArg, args) : undefined, typeof fnB === 'function' && fnA !== fnB ? fnB.apply(thisArg, args) : undefined];
  return results;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdC9ydW4taW5oZXJpdGVkLW1ldGhvZC50cyJdLCJuYW1lcyI6WyJydW5Jbmhlcml0ZWRNZXRob2QiLCJpbnN0YW5jZSIsImtleSIsInByb3RvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJhcmdzIiwiYXBwbHkiLCJnZXRJbmhlcml0ZWRNZXRob2QiLCJ1bmRlZmluZWQiLCJydW5JZkRpZmZlcmVudCIsImZuQSIsImZuQiIsInRoaXNBcmciLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdPLFNBQVNBLGtCQUFULENBQ0xDLFFBREssRUFFTEMsR0FGSyxFQUlMO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JELE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosUUFBdEIsQ0FBdEIsQ0FBZDs7QUFEQSxvQ0FER0ssSUFDSDtBQURHQSxRQUNIO0FBQUE7O0FBRUEsU0FBT0gsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0ssS0FBWCxDQUFpQk4sUUFBakIsRUFBMkJLLElBQTNCLENBQVA7QUFDRDtBQUVNLFNBQVNFLGtCQUFULENBQ0xQLFFBREssRUFFTEMsR0FGSyxFQUdMO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JELE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosUUFBdEIsQ0FBdEIsQ0FBZDtBQUNBLFNBQU8sT0FBT0UsS0FBSyxDQUFDRCxHQUFELENBQVosS0FBc0IsVUFBdEIsR0FBbUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUF4QyxHQUFnRE8sU0FBdkQ7QUFDRDtBQUVNLFNBQVNDLGNBQVQsQ0FDTEMsR0FESyxFQUVMQyxHQUZLLEVBR0xDLE9BSEssRUFLTDtBQUFBLHFDQURHUCxJQUNIO0FBREdBLFFBQ0g7QUFBQTs7QUFDQTtBQUVBLE1BQUlRLE9BQU8sR0FBRyxDQUNaLE9BQU9ILEdBQVAsS0FBZSxVQUFmLEdBQTRCQSxHQUFHLENBQUNKLEtBQUosQ0FBVU0sT0FBVixFQUFtQlAsSUFBbkIsQ0FBNUIsR0FBdURHLFNBRDNDLEVBRVosT0FBT0csR0FBUCxLQUFlLFVBQWYsSUFBNkJELEdBQUcsS0FBS0MsR0FBckMsR0FDSUEsR0FBRyxDQUFDTCxLQUFKLENBQVVNLE9BQVYsRUFBbUJQLElBQW5CLENBREosR0FFSUcsU0FKUSxDQUFkO0FBT0EsU0FBT0ssT0FBUDtBQUlELEMiLCJmaWxlIjoiL29iamVjdC9ydW4taW5oZXJpdGVkLW1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL29iamVjdC9ydW4taW5oZXJpdGVkLW1ldGhvZC50c1wiKTtcbiIsIi8qIFxuU2hvcnRjdXQgYXJvdW5kIGNhbGxpbmcgYHN1cGVyLm1ldGhvZCgpYCBpbnNpZGUgY2xpZW50IGNvZGVcbiovXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5oZXJpdGVkTWV0aG9kPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+KFxuICBpbnN0YW5jZTogVCxcbiAga2V5OiBLLFxuICAuLi5hcmdzOiBUW0tdIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55ID8gUGFyYW1ldGVyczxUW0tdPiA6IFtdXG4pIHtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKSlcbiAgcmV0dXJuIHByb3RvW2tleV0uYXBwbHkoaW5zdGFuY2UsIGFyZ3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlcml0ZWRNZXRob2Q8VCBleHRlbmRzIHt9LCBLIGV4dGVuZHMga2V5b2YgVCwgViA9IFRbS10+KFxuICBpbnN0YW5jZTogVCxcbiAga2V5OiBLXG4pIHtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKSlcbiAgcmV0dXJuIHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nID8gcHJvdG9ba2V5XSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSWZEaWZmZXJlbnQ8QXJncyBleHRlbmRzIFtdPihcbiAgZm5BOiAoLi4uYXJnczogQXJncykgPT4gYW55IHwgdW5kZWZpbmVkLFxuICBmbkI6ICguLi5hcmdzOiBBcmdzKSA9PiBhbnkgfCB1bmRlZmluZWQsXG4gIHRoaXNBcmc6IGFueSxcbiAgLi4uYXJnczogQXJnc1xuKSB7XG4gIC8vIGNvbnNvbGUubG9nKGZuQSwgJy0+JywgZm5CLCBmbkEgPT09IGZuQilcblxuICBsZXQgcmVzdWx0cyA9IFtcbiAgICB0eXBlb2YgZm5BID09PSAnZnVuY3Rpb24nID8gZm5BLmFwcGx5KHRoaXNBcmcsIGFyZ3MpIDogdW5kZWZpbmVkLFxuICAgIHR5cGVvZiBmbkIgPT09ICdmdW5jdGlvbicgJiYgZm5BICE9PSBmbkJcbiAgICAgID8gZm5CLmFwcGx5KHRoaXNBcmcsIGFyZ3MpXG4gICAgICA6IHVuZGVmaW5lZFxuICBdXG5cbiAgcmV0dXJuIHJlc3VsdHMgYXMgW1xuICAgIFJldHVyblR5cGU8dHlwZW9mIGZuQT4gfCB1bmRlZmluZWQsXG4gICAgUmV0dXJuVHlwZTx0eXBlb2YgZm5CPiB8IHVuZGVmaW5lZFxuICBdXG59XG4iXSwic291cmNlUm9vdCI6IiJ9