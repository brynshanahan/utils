(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js ***!
  \*********************************************************************/
/*! exports provided: DOMRectReadOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectReadOnly", function() { return DOMRectReadOnly; });
var DOMRectReadOnly = function () {
  function DOMRectReadOnly(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return Object.freeze(this);
  }

  DOMRectReadOnly.prototype.toJSON = function () {
    var _a = this,
        x = _a.x,
        y = _a.y,
        top = _a.top,
        right = _a.right,
        bottom = _a.bottom,
        left = _a.left,
        width = _a.width,
        height = _a.height;

    return {
      x: x,
      y: y,
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      width: width,
      height: height
    };
  };

  DOMRectReadOnly.fromRect = function (rectangle) {
    return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };

  return DOMRectReadOnly;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js ***!
  \***********************************************************************/
/*! exports provided: ResizeObservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObservation", function() { return ResizeObservation; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");




var skipNotifyOnElement = function skipNotifyOnElement(target) {
  return !Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__["isSVG"])(target) && !Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__["isReplacedElement"])(target) && getComputedStyle(target).display === 'inline';
};

var ResizeObservation = function () {
  function ResizeObservation(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }

  ResizeObservation.prototype.isActive = function () {
    var size = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__["calculateBoxSize"])(this.target, this.observedBox);

    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size;
    }

    if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) {
      return true;
    }

    return false;
  };

  return ResizeObservation;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js ***!
  \********************************************************************/
/*! exports provided: ResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return ResizeObserver; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");



var ResizeObserver = function () {
  function ResizeObserver(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (typeof callback !== 'function') {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }

    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].connect(this, callback);
  }

  ResizeObserver.prototype.observe = function (target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (!Object(_utils_element__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }

    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].observe(this, target, options);
  };

  ResizeObserver.prototype.unobserve = function (target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (!Object(_utils_element__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }

    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].unobserve(this, target);
  };

  ResizeObserver.prototype.disconnect = function () {
    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].disconnect(this);
  };

  ResizeObserver.toString = function () {
    return 'function ResizeObserver () { [polyfill code] }';
  };

  return ResizeObserver;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js ***!
  \******************************************************************************/
/*! exports provided: ResizeObserverBoxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverBoxOptions", function() { return ResizeObserverBoxOptions; });
var ResizeObserverBoxOptions;

(function (ResizeObserverBoxOptions) {
  ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js ***!
  \******************************************************************************/
/*! exports provided: ResizeObserverController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverController", function() { return ResizeObserverController; });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scheduler */ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js");
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObservation */ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js");
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeObserverDetail */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js");
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");




var observerMap = new Map();

var getObservationIndex = function getObservationIndex(observationTargets, target) {
  var _LP = Date.now();

  for (var i = 0; i < observationTargets.length; i += 1) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(7, 4);

      break;
    }

    if (observationTargets[i].target === target) {
      return i;
    }
  }

  return -1;
};

var ResizeObserverController = function () {
  function ResizeObserverController() {}

  ResizeObserverController.connect = function (resizeObserver, callback) {
    var detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__["ResizeObserverDetail"](resizeObserver, callback);
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__["resizeObservers"].push(detail);
    observerMap.set(resizeObserver, detail);
  };

  ResizeObserverController.observe = function (resizeObserver, target, options) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);

      if (getObservationIndex(detail.observationTargets, target) < 0) {
        detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__["ResizeObservation"](target, options && options.box));
        Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__["updateCount"])(1);
        _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__["scheduler"].schedule();
      }
    }
  };

  ResizeObserverController.unobserve = function (resizeObserver, target) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);
      var index = getObservationIndex(detail.observationTargets, target);

      if (index >= 0) {
        detail.observationTargets.splice(index, 1);
        Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__["updateCount"])(-1);
      }
    }
  };

  ResizeObserverController.disconnect = function (resizeObserver) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);
      _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__["resizeObservers"].splice(_utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__["resizeObservers"].indexOf(detail), 1);
      observerMap["delete"](resizeObserver);
      Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__["updateCount"])(-detail.observationTargets.length);
    }
  };

  return ResizeObserverController;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js ***!
  \**************************************************************************/
/*! exports provided: ResizeObserverDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverDetail", function() { return ResizeObserverDetail; });
var ResizeObserverDetail = function () {
  function ResizeObserverDetail(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }

  return ResizeObserverDetail;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js ***!
  \*************************************************************************/
/*! exports provided: ResizeObserverEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverEntry", function() { return ResizeObserverEntry; });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");


var ResizeObserverEntry = function () {
  function ResizeObserverEntry(target) {
    var boxes = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__["calculateBoxSizes"])(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = [boxes.borderBoxSize];
    this.contentBoxSize = [boxes.contentBoxSize];
    this.devicePixelContentBoxSize = [boxes.devicePixelContentBoxSize];
  }

  return ResizeObserverEntry;
}();



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js ***!
  \********************************************************************************************/
/*! exports provided: broadcastActiveObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broadcastActiveObservations", function() { return broadcastActiveObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");





var broadcastActiveObservations = function broadcastActiveObservations() {
  var shallowestDepth = Infinity;
  var callbacks = [];
  _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }

    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__["ResizeObserverEntry"](ot.target);
      var targetDepth = Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__["calculateDepthForNode"])(ot.target);
      entries.push(entry);
      ot.lastReportedSize = Object(_calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__["calculateBoxSize"])(ot.target, ot.observedBox);

      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });

  var _LP = Date.now();

  for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(27, 4);

      break;
    }

    var callback = callbacks_1[_i];
    callback();
  }

  return shallowestDepth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js ***!
  \*********************************************************************************/
/*! exports provided: calculateBoxSize, calculateBoxSizes, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBoxSize", function() { return calculateBoxSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBoxSizes", function() { return calculateBoxSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMRectReadOnly */ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");




var cache = new Map();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(_utils_global__WEBPACK_IMPORTED_MODULE_3__["global"].navigator && _utils_global__WEBPACK_IMPORTED_MODULE_3__["global"].navigator.userAgent);

var parseDimension = function parseDimension(pixel) {
  return parseFloat(pixel || '0');
};

var size = function size(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }

  if (blockSize === void 0) {
    blockSize = 0;
  }

  if (switchSizes === void 0) {
    switchSizes = false;
  }

  return Object.freeze({
    inlineSize: (switchSizes ? blockSize : inlineSize) || 0,
    blockSize: (switchSizes ? inlineSize : blockSize) || 0
  });
};

var zeroBoxes = Object.freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__["DOMRectReadOnly"](0, 0, 0, 0)
});

var calculateBoxSizes = function calculateBoxSizes(target) {
  if (cache.has(target)) {
    return cache.get(target);
  }

  if (Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__["isHidden"])(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }

  var cs = getComputedStyle(target);
  var svg = Object(_utils_element__WEBPACK_IMPORTED_MODULE_2__["isSVG"])(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === 'border-box';
  var switchSizes = verticalRegexp.test(cs.writingMode || '');
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = Object.freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__["DOMRectReadOnly"](paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};

var calculateBoxSize = function calculateBoxSize(target, observedBox) {
  var _a = calculateBoxSizes(target),
      borderBoxSize = _a.borderBoxSize,
      contentBoxSize = _a.contentBoxSize,
      devicePixelContentBoxSize = _a.devicePixelContentBoxSize;

  switch (observedBox) {
    case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;

    case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].BORDER_BOX:
      return borderBoxSize;

    default:
      return contentBoxSize;
  }
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js ***!
  \**************************************************************************************/
/*! exports provided: calculateDepthForNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDepthForNode", function() { return calculateDepthForNode; });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");


var calculateDepthForNode = function calculateDepthForNode(node) {
  if (Object(_utils_element__WEBPACK_IMPORTED_MODULE_0__["isHidden"])(node)) {
    return Infinity;
  }

  var depth = 0;
  var parent = node.parentNode;

  var _LP = Date.now();

  while (parent) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(8, 4);

      break;
    }

    depth += 1;
    parent = parent.parentNode;
  }

  return depth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js ***!
  \***************************************************************************************/
/*! exports provided: deliverResizeLoopError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deliverResizeLoopError", function() { return deliverResizeLoopError; });
var msg = 'ResizeObserver loop completed with undelivered notifications.';

var deliverResizeLoopError = function deliverResizeLoopError() {
  var event;

  if (typeof ErrorEvent === 'function') {
    event = new ErrorEvent('error', {
      message: msg
    });
  } else {
    event = document.createEvent('Event');
    event.initEvent('error', false, false);
    event.message = msg;
  }

  window.dispatchEvent(event);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js ***!
  \************************************************************************************************/
/*! exports provided: gatherActiveObservationsAtDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatherActiveObservationsAtDepth", function() { return gatherActiveObservationsAtDepth; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");




var gatherActiveObservationsAtDepth = function gatherActiveObservationsAtDepth(depth) {
  _calculateBoxSize__WEBPACK_IMPORTED_MODULE_2__["cache"].clear();
  _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__["calculateDepthForNode"])(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js ***!
  \**************************************************************************************/
/*! exports provided: hasActiveObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasActiveObservations", function() { return hasActiveObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");


var hasActiveObservations = function hasActiveObservations() {
  return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].some(function (ro) {
    return ro.activeTargets.length > 0;
  });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js ***!
  \***************************************************************************************/
/*! exports provided: hasSkippedObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSkippedObservations", function() { return hasSkippedObservations; });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");


var hasSkippedObservations = function hasSkippedObservations() {
  return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].some(function (ro) {
    return ro.skippedTargets.length > 0;
  });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js ***!
  \*****************************************************************************/
/*! exports provided: ResizeObserver, ResizeObserverEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserver */ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"]; });

/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverEntry", function() { return _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__["ResizeObserverEntry"]; });




/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/element.js ***!
  \*******************************************************************/
/*! exports provided: isSVG, isHidden, isElement, isReplacedElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReplacedElement", function() { return isReplacedElement; });
var isSVG = function isSVG(target) {
  return target instanceof SVGElement && 'getBBox' in target;
};

var isHidden = function isHidden(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(),
        width = _a.width,
        height = _a.height;

    return !width && !height;
  }

  var _b = target,
      offsetWidth = _b.offsetWidth,
      offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};

var isElement = function isElement(obj) {
  var _a, _b;

  var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
  return !!(scope && obj instanceof scope.Element);
};

var isReplacedElement = function isReplacedElement(target) {
  switch (target.tagName) {
    case 'INPUT':
      if (target.type !== 'image') {
        break;
      }

    case 'VIDEO':
    case 'AUDIO':
    case 'EMBED':
    case 'OBJECT':
    case 'CANVAS':
    case 'IFRAME':
    case 'IMG':
      return true;
  }

  return false;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/global.js ***!
  \******************************************************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
var global = typeof window !== 'undefined' ? window : {};

/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/process.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/process.js ***!
  \*******************************************************************/
/*! exports provided: process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/hasActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js");
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/hasSkippedObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js");
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/deliverResizeLoopError */ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js");
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/broadcastActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js");
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/gatherActiveObservationsAtDepth */ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js");






var process = function process() {
  var depth = 0;
  Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__["gatherActiveObservationsAtDepth"])(depth);

  var _LP = Date.now();

  while (Object(_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__["hasActiveObservations"])()) {
    if (Date.now() - _LP > 300) {
      (function () {
        throw Error('Infinite loop');
      })(9, 4);

      break;
    }

    depth = Object(_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__["broadcastActiveObservations"])();
    Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__["gatherActiveObservationsAtDepth"])(depth);
  }

  if (Object(_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__["hasSkippedObservations"])()) {
    Object(_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__["deliverResizeLoopError"])();
  }

  return depth > 0;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js ***!
  \**************************************************************************/
/*! exports provided: queueMicroTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueMicroTask", function() { return queueMicroTask; });
var trigger;
var callbacks = [];

var notify = function notify() {
  return callbacks.splice(0).forEach(function (cb) {
    return cb();
  });
};

var queueMicroTask = function queueMicroTask(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode('');
    var config = {
      characterData: true
    };
    new MutationObserver(function () {
      return notify();
    }).observe(el_1, config);

    trigger = function trigger() {
      el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
    };
  }

  callbacks.push(callback);
  trigger();
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js ***!
  \*******************************************************************************/
/*! exports provided: queueResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueResizeObserver", function() { return queueResizeObserver; });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queueMicroTask */ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js");


var queueResizeObserver = function queueResizeObserver(cb) {
  Object(_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__["queueMicroTask"])(function ResizeObserver() {
    requestAnimationFrame(cb);
  });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js ***!
  \***************************************************************************/
/*! exports provided: resizeObservers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeObservers", function() { return resizeObservers; });
var resizeObservers = [];


/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js ***!
  \*********************************************************************/
/*! exports provided: scheduler, updateCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduler", function() { return scheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCount", function() { return updateCount; });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process */ "./node_modules/@juggle/resize-observer/lib/utils/process.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queueResizeObserver */ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js");



var watching = 0;

var isWatching = function isWatching() {
  return !!watching;
};

var CATCH_FRAMES = 60 / 5;
var observerConfig = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
};
var events = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'];
var scheduled = false;

var Scheduler = function () {
  function Scheduler() {
    var _this = this;

    this.stopped = true;

    this.listener = function () {
      return _this.schedule();
    };
  }

  Scheduler.prototype.run = function (frames) {
    var _this = this;

    if (scheduled) {
      return;
    }

    scheduled = true;
    Object(_queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__["queueResizeObserver"])(function () {
      var elementsHaveResized = false;

      try {
        elementsHaveResized = Object(_process__WEBPACK_IMPORTED_MODULE_0__["process"])();
      } finally {
        scheduled = false;

        if (!isWatching()) {
          return;
        }

        if (elementsHaveResized) {
          _this.run(60);
        } else if (frames) {
          _this.run(frames - 1);
        } else {
          _this.start();
        }
      }
    });
  };

  Scheduler.prototype.schedule = function () {
    this.stop();
    this.run(CATCH_FRAMES);
  };

  Scheduler.prototype.observe = function () {
    var _this = this;

    var cb = function cb() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };

    document.body ? cb() : _global__WEBPACK_IMPORTED_MODULE_1__["global"].addEventListener('DOMContentLoaded', cb);
  };

  Scheduler.prototype.start = function () {
    var _this = this;

    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function (name) {
        return _global__WEBPACK_IMPORTED_MODULE_1__["global"].addEventListener(name, _this.listener, true);
      });
    }
  };

  Scheduler.prototype.stop = function () {
    var _this = this;

    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function (name) {
        return _global__WEBPACK_IMPORTED_MODULE_1__["global"].removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };

  return Scheduler;
}();

var scheduler = new Scheduler();

var updateCount = function updateCount(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL0RPTVJlY3RSZWFkT25seS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckRldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvY2FsY3VsYXRlRGVwdGhGb3JOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9leHBvcnRzL3Jlc2l6ZS1vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9xdWV1ZVJlc2l6ZU9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcmVzaXplT2JzZXJ2ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvc2NoZWR1bGVyLmpzIl0sIm5hbWVzIjpbIkRPTVJlY3RSZWFkT25seSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJPYmplY3QiLCJmcmVlemUiLCJwcm90b3R5cGUiLCJ0b0pTT04iLCJfYSIsImZyb21SZWN0IiwicmVjdGFuZ2xlIiwic2tpcE5vdGlmeU9uRWxlbWVudCIsInRhcmdldCIsImlzU1ZHIiwiaXNSZXBsYWNlZEVsZW1lbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIlJlc2l6ZU9ic2VydmF0aW9uIiwib2JzZXJ2ZWRCb3giLCJSZXNpemVPYnNlcnZlckJveE9wdGlvbnMiLCJDT05URU5UX0JPWCIsImxhc3RSZXBvcnRlZFNpemUiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwiaXNBY3RpdmUiLCJzaXplIiwiY2FsY3VsYXRlQm94U2l6ZSIsIlJlc2l6ZU9ic2VydmVyIiwiY2FsbGJhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIiLCJjb25uZWN0Iiwib2JzZXJ2ZSIsIm9wdGlvbnMiLCJpc0VsZW1lbnQiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0IiwidG9TdHJpbmciLCJvYnNlcnZlck1hcCIsIk1hcCIsImdldE9ic2VydmF0aW9uSW5kZXgiLCJvYnNlcnZhdGlvblRhcmdldHMiLCJpIiwiRXJyb3IiLCJyZXNpemVPYnNlcnZlciIsImRldGFpbCIsIlJlc2l6ZU9ic2VydmVyRGV0YWlsIiwicmVzaXplT2JzZXJ2ZXJzIiwicHVzaCIsInNldCIsImhhcyIsImdldCIsImJveCIsInVwZGF0ZUNvdW50Iiwic2NoZWR1bGVyIiwic2NoZWR1bGUiLCJpbmRleCIsInNwbGljZSIsImluZGV4T2YiLCJhY3RpdmVUYXJnZXRzIiwic2tpcHBlZFRhcmdldHMiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyRW50cnkiLCJib3hlcyIsImNhbGN1bGF0ZUJveFNpemVzIiwiY29udGVudFJlY3QiLCJib3JkZXJCb3hTaXplIiwiY29udGVudEJveFNpemUiLCJkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplIiwiYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zIiwic2hhbGxvd2VzdERlcHRoIiwiSW5maW5pdHkiLCJjYWxsYmFja3MiLCJmb3JFYWNoIiwicHJvY2Vzc09ic2VydmVyIiwicm8iLCJlbnRyaWVzIiwicHJvY2Vzc1RhcmdldCIsIm90IiwiZW50cnkiLCJ0YXJnZXREZXB0aCIsImNhbGN1bGF0ZURlcHRoRm9yTm9kZSIsInJlc2l6ZU9ic2VydmVyQ2FsbGJhY2siLCJjYWxsIiwiX2kiLCJjYWxsYmFja3NfMSIsImNhY2hlIiwic2Nyb2xsUmVnZXhwIiwidmVydGljYWxSZWdleHAiLCJJRSIsInRlc3QiLCJnbG9iYWwiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwYXJzZURpbWVuc2lvbiIsInBpeGVsIiwicGFyc2VGbG9hdCIsInN3aXRjaFNpemVzIiwiemVyb0JveGVzIiwiaXNIaWRkZW4iLCJjcyIsInN2ZyIsIm93bmVyU1ZHRWxlbWVudCIsImdldEJCb3giLCJyZW1vdmVQYWRkaW5nIiwiYm94U2l6aW5nIiwid3JpdGluZ01vZGUiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5Iiwib3ZlcmZsb3dZIiwiY2FuU2Nyb2xsSG9yaXpvbnRhbGx5Iiwib3ZlcmZsb3dYIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsImJvcmRlclRvcCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJMZWZ0IiwiYm9yZGVyTGVmdFdpZHRoIiwiaG9yaXpvbnRhbFBhZGRpbmciLCJ2ZXJ0aWNhbFBhZGRpbmciLCJob3Jpem9udGFsQm9yZGVyQXJlYSIsInZlcnRpY2FsQm9yZGVyQXJlYSIsImhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJ3aWR0aFJlZHVjdGlvbiIsImhlaWdodFJlZHVjdGlvbiIsImNvbnRlbnRXaWR0aCIsImNvbnRlbnRIZWlnaHQiLCJib3JkZXJCb3hXaWR0aCIsImJvcmRlckJveEhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImRldmljZVBpeGVsUmF0aW8iLCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1giLCJCT1JERVJfQk9YIiwibm9kZSIsImRlcHRoIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIm1zZyIsImRlbGl2ZXJSZXNpemVMb29wRXJyb3IiLCJldmVudCIsIkVycm9yRXZlbnQiLCJtZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIiwic2l6ZUNhY2hlIiwiY2xlYXIiLCJoYXNBY3RpdmVPYnNlcnZhdGlvbnMiLCJzb21lIiwiaGFzU2tpcHBlZE9ic2VydmF0aW9ucyIsIlNWR0VsZW1lbnQiLCJfYiIsImdldENsaWVudFJlY3RzIiwib2JqIiwic2NvcGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJFbGVtZW50IiwidGFnTmFtZSIsInR5cGUiLCJwcm9jZXNzIiwidHJpZ2dlciIsIm5vdGlmeSIsImNiIiwicXVldWVNaWNyb1Rhc2siLCJ0b2dnbGVfMSIsImVsXzEiLCJjcmVhdGVUZXh0Tm9kZSIsImNvbmZpZyIsImNoYXJhY3RlckRhdGEiLCJNdXRhdGlvbk9ic2VydmVyIiwidGV4dENvbnRlbnQiLCJxdWV1ZVJlc2l6ZU9ic2VydmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2F0Y2hpbmciLCJpc1dhdGNoaW5nIiwiQ0FUQ0hfRlJBTUVTIiwib2JzZXJ2ZXJDb25maWciLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImV2ZW50cyIsInNjaGVkdWxlZCIsIlNjaGVkdWxlciIsIl90aGlzIiwic3RvcHBlZCIsImxpc3RlbmVyIiwicnVuIiwiZnJhbWVzIiwiZWxlbWVudHNIYXZlUmVzaXplZCIsInN0YXJ0Iiwic3RvcCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwibmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLGVBQWUsR0FBSSxZQUFZO0FBQy9CLFdBQVNBLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQkMsS0FBL0IsRUFBc0NDLE1BQXRDLEVBQThDO0FBQzFDLFNBQUtILENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxDQUFoQjtBQUNBLFNBQUtJLElBQUwsR0FBWSxLQUFLTCxDQUFqQjtBQUNBLFNBQUtNLE1BQUwsR0FBYyxLQUFLRixHQUFMLEdBQVcsS0FBS0QsTUFBOUI7QUFDQSxTQUFLSSxLQUFMLEdBQWEsS0FBS0YsSUFBTCxHQUFZLEtBQUtILEtBQTlCO0FBQ0EsV0FBT00sTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxDQUFQO0FBQ0g7O0FBQ0RWLGlCQUFlLENBQUNXLFNBQWhCLENBQTBCQyxNQUExQixHQUFtQyxZQUFZO0FBQzNDLFFBQUlDLEVBQUUsR0FBRyxJQUFUO0FBQUEsUUFBZVosQ0FBQyxHQUFHWSxFQUFFLENBQUNaLENBQXRCO0FBQUEsUUFBeUJDLENBQUMsR0FBR1csRUFBRSxDQUFDWCxDQUFoQztBQUFBLFFBQW1DRyxHQUFHLEdBQUdRLEVBQUUsQ0FBQ1Is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RSxRQUFwQyxFQUE4QyxJQUE5QyxDQUFQO0FBQTZELE9BQTlGO0FBQ0g7QUFDSixHQVJEOztBQVNBSCxXQUFTLENBQUNqTSxTQUFWLENBQW9CeU0sSUFBcEIsR0FBMkIsWUFBWTtBQUNuQyxRQUFJUCxLQUFLLEdBQUcsSUFBWjs7QUFDQSxRQUFJLENBQUMsS0FBS0MsT0FBVixFQUFtQjtBQUNmLFdBQUsxSSxRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBY3pCLFVBQWQsRUFBakI7QUFDQStKLFlBQU0sQ0FBQzFILE9BQVAsQ0FBZSxVQUFVdUksSUFBVixFQUFnQjtBQUFFLGVBQU9ySCw4Q0FBTSxDQUFDc0gsbUJBQVAsQ0FBMkJELElBQTNCLEVBQWlDVixLQUFLLENBQUNFLFFBQXZDLEVBQWlELElBQWpELENBQVA7QUFBZ0UsT0FBakc7QUFDQSxXQUFLRCxPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0osR0FQRDs7QUFRQSxTQUFPRixTQUFQO0FBQ0gsQ0E3RGdCLEVBQWpCOztBQThEQSxJQUFJL0ksU0FBUyxHQUFHLElBQUkrSSxTQUFKLEVBQWhCOztBQUNBLElBQUloSixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVNkosQ0FBVixFQUFhO0FBQzNCLEdBQUN0QixRQUFELElBQWFzQixDQUFDLEdBQUcsQ0FBakIsSUFBc0I1SixTQUFTLENBQUNzSixLQUFWLEVBQXRCO0FBQ0FoQixVQUFRLElBQUlzQixDQUFaO0FBQ0EsR0FBQ3RCLFFBQUQsSUFBYXRJLFNBQVMsQ0FBQ3VKLElBQVYsRUFBYjtBQUNILENBSkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICBET01SZWN0UmVhZE9ubHkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgbGVmdCA9IF9hLmxlZnQsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdG9wOiB0b3AsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b20sIGxlZnQ6IGxlZnQsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICB9O1xuICAgIERPTVJlY3RSZWFkT25seS5mcm9tUmVjdCA9IGZ1bmN0aW9uIChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBET01SZWN0UmVhZE9ubHkocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIERPTVJlY3RSZWFkT25seTtcbn0oKSk7XG5leHBvcnQgeyBET01SZWN0UmVhZE9ubHkgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyJztcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudCc7XG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IFRoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmNvbm5lY3QodGhpcywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlKHRoaXMsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUodGhpcywgdGFyZ2V0KTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uIFJlc2l6ZU9ic2VydmVyICgpIHsgW3BvbHlmaWxsIGNvZGVdIH0nO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zO1xuKGZ1bmN0aW9uIChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMpIHtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJCT1JERVJfQk9YXCJdID0gXCJib3JkZXItYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQ09OVEVOVF9CT1hcIl0gPSBcImNvbnRlbnQtYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YXCJdID0gXCJkZXZpY2UtcGl4ZWwtY29udGVudC1ib3hcIjtcbn0pKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB8fCAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zID0ge30pKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9O1xuIiwiaW1wb3J0IHsgc2NoZWR1bGVyLCB1cGRhdGVDb3VudCB9IGZyb20gJy4vdXRpbHMvc2NoZWR1bGVyJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZhdGlvbic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJEZXRhaWwnO1xuaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIG9ic2VydmVyTWFwID0gbmV3IE1hcCgpO1xudmFyIGdldE9ic2VydmF0aW9uSW5kZXggPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb25UYXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG5ldyBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spO1xuICAgICAgICByZXNpemVPYnNlcnZlcnMucHVzaChkZXRhaWwpO1xuICAgICAgICBvYnNlcnZlck1hcC5zZXQocmVzaXplT2JzZXJ2ZXIsIGRldGFpbCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvYnNlcnZlck1hcC5oYXMocmVzaXplT2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9wdGlvbnMgJiYgb3B0aW9ucy5ib3gpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgxKTtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChvYnNlcnZlck1hcC5oYXMocmVzaXplT2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldE9ic2VydmF0aW9uSW5kZXgoZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50KC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG9ic2VydmVyTWFwLmhhcyhyZXNpemVPYnNlcnZlcikpIHtcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXJzLnNwbGljZShyZXNpemVPYnNlcnZlcnMuaW5kZXhPZihkZXRhaWwpLCAxKTtcbiAgICAgICAgICAgIG9ic2VydmVyTWFwLmRlbGV0ZShyZXNpemVPYnNlcnZlcik7XG4gICAgICAgICAgICB1cGRhdGVDb3VudCgtZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyRGV0YWlsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuc2tpcHBlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IHJlc2l6ZU9ic2VydmVyO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckRldGFpbDtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9O1xuIiwiaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZXMgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGJveGVzID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY29udGVudFJlY3QgPSBib3hlcy5jb250ZW50UmVjdDtcbiAgICAgICAgdGhpcy5ib3JkZXJCb3hTaXplID0gW2JveGVzLmJvcmRlckJveFNpemVdO1xuICAgICAgICB0aGlzLmNvbnRlbnRCb3hTaXplID0gW2JveGVzLmNvbnRlbnRCb3hTaXplXTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gW2JveGVzLmRldmljZVBpeGVsQ29udGVudEJveFNpemVdO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckVudHJ5IH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyRW50cnknO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGFsbG93ZXN0RGVwdGggPSBJbmZpbml0eTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIGlmIChyby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvdC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHRhcmdldERlcHRoID0gY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCk7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgb3QubGFzdFJlcG9ydGVkU2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUob3QudGFyZ2V0LCBvdC5vYnNlcnZlZEJveCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVwdGggPCBzaGFsbG93ZXN0RGVwdGgpIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93ZXN0RGVwdGggPSB0YXJnZXREZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIHJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICByby5jYWxsYmFjay5jYWxsKHJvLm9ic2VydmVyLCBlbnRyaWVzLCByby5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjYWxsYmFja3NfMSA9IGNhbGxiYWNrczsgX2kgPCBjYWxsYmFja3NfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFbX2ldO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhbGxvd2VzdERlcHRoO1xufTtcbmV4cG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IERPTVJlY3RSZWFkT25seSB9IGZyb20gJy4uL0RPTVJlY3RSZWFkT25seSc7XG5pbXBvcnQgeyBpc1NWRywgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4uL3V0aWxzL2dsb2JhbCc7XG52YXIgY2FjaGUgPSBuZXcgTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGlubGluZVNpemU6IChzd2l0Y2hTaXplcyA/IGJsb2NrU2l6ZSA6IGlubGluZVNpemUpIHx8IDAsXG4gICAgICAgIGJsb2NrU2l6ZTogKHN3aXRjaFNpemVzID8gaW5saW5lU2l6ZSA6IGJsb2NrU2l6ZSkgfHwgMFxuICAgIH0pO1xufTtcbnZhciB6ZXJvQm94ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChjYWNoZS5oYXModGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChpc0hpZGRlbih0YXJnZXQpKSB7XG4gICAgICAgIGNhY2hlLnNldCh0YXJnZXQsIHplcm9Cb3hlcyk7XG4gICAgICAgIHJldHVybiB6ZXJvQm94ZXM7XG4gICAgfVxuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICB2YXIgc3ZnID0gaXNTVkcodGFyZ2V0KSAmJiB0YXJnZXQub3duZXJTVkdFbGVtZW50ICYmIHRhcmdldC5nZXRCQm94KCk7XG4gICAgdmFyIHJlbW92ZVBhZGRpbmcgPSAhSUUgJiYgY3MuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIHN3aXRjaFNpemVzID0gdmVydGljYWxSZWdleHAudGVzdChjcy53cml0aW5nTW9kZSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbFZlcnRpY2FsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbEhvcml6b250YWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dYIHx8ICcnKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nVG9wKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdSaWdodCk7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0JvdHRvbSk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgYm9yZGVyVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclRvcFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgdmFyIGJvcmRlckJvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgdmFyIGJvcmRlckxlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyTGVmdFdpZHRoKTtcbiAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxCb3JkZXJBcmVhID0gYm9yZGVyTGVmdCArIGJvcmRlclJpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbEJvcmRlckFyZWEgPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRIZWlnaHQgLSB2ZXJ0aWNhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxWZXJ0aWNhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRXaWR0aCAtIGhvcml6b250YWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aWR0aFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyBob3Jpem9udGFsUGFkZGluZyArIGhvcml6b250YWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgaGVpZ2h0UmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IHZlcnRpY2FsUGFkZGluZyArIHZlcnRpY2FsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHN2ZyA/IHN2Zy53aWR0aCA6IHBhcnNlRGltZW5zaW9uKGNzLndpZHRoKSAtIHdpZHRoUmVkdWN0aW9uIC0gdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBzdmcgPyBzdmcuaGVpZ2h0IDogcGFyc2VEaW1lbnNpb24oY3MuaGVpZ2h0KSAtIGhlaWdodFJlZHVjdGlvbiAtIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGJvcmRlckJveFdpZHRoID0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbFBhZGRpbmcgKyB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyArIGhvcml6b250YWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3JkZXJCb3hIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxQYWRkaW5nICsgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyArIHZlcnRpY2FsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm94ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94KSB7XG4gICAgdmFyIF9hID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0KSwgYm9yZGVyQm94U2l6ZSA9IF9hLmJvcmRlckJveFNpemUsIGNvbnRlbnRCb3hTaXplID0gX2EuY29udGVudEJveFNpemUsIGRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBfYS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgIHN3aXRjaCAob2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm9yZGVyQm94U2l6ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Qm94U2l6ZTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSwgY2FsY3VsYXRlQm94U2l6ZXMsIGNhY2hlIH07XG4iLCJpbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2VsZW1lbnQnO1xudmFyIGNhbGN1bGF0ZURlcHRoRm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKGlzSGlkZGVuKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgZGVwdGggKz0gMTtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbn07XG5leHBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfTtcbiIsInZhciBtc2cgPSAnUmVzaXplT2JzZXJ2ZXIgbG9vcCBjb21wbGV0ZWQgd2l0aCB1bmRlbGl2ZXJlZCBub3RpZmljYXRpb25zLic7XG52YXIgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IEVycm9yRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgICAgbWVzc2FnZTogbXNnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdlcnJvcicsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGV2ZW50Lm1lc3NhZ2UgPSBtc2c7XG4gICAgfVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5leHBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FjaGUgYXMgc2l6ZUNhY2hlIH0gZnJvbSAnLi9jYWxjdWxhdGVCb3hTaXplJztcbnZhciBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoID0gZnVuY3Rpb24gKGRlcHRoKSB7XG4gICAgc2l6ZUNhY2hlLmNsZWFyKCk7XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMuc3BsaWNlKDAsIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLm9ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIGlmIChvdC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH07XG4iLCJleHBvcnQgeyBSZXNpemVPYnNlcnZlciB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyJztcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbiIsInZhciBpc1NWRyA9IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgJ2dldEJCb3gnIGluIHRhcmdldDsgfTtcbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoaXNTVkcodGFyZ2V0KSkge1xuICAgICAgICB2YXIgX2EgPSB0YXJnZXQuZ2V0QkJveCgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiAhd2lkdGggJiYgIWhlaWdodDtcbiAgICB9XG4gICAgdmFyIF9iID0gdGFyZ2V0LCBvZmZzZXRXaWR0aCA9IF9iLm9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgPSBfYi5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuICEob2Zmc2V0V2lkdGggfHwgb2Zmc2V0SGVpZ2h0IHx8IHRhcmdldC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59O1xudmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBzY29wZSA9IChfYiA9IChfYSA9IG9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yJztcbmltcG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfSBmcm9tICcuLi9hbGdvcml0aG1zL2dhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgnO1xudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB3aGlsZSAoaGFzQWN0aXZlT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVwdGggPSBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMoKTtcbiAgICAgICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgfVxuICAgIGlmIChoYXNTa2lwcGVkT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVsaXZlclJlc2l6ZUxvb3BFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGggPiAwO1xufTtcbmV4cG9ydCB7IHByb2Nlc3MgfTtcbiIsInZhciB0cmlnZ2VyO1xudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrcy5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pOyB9O1xudmFyIHF1ZXVlTWljcm9UYXNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgIHZhciB0b2dnbGVfMSA9IDA7XG4gICAgICAgIHZhciBlbF8xID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeSgpOyB9KS5vYnNlcnZlKGVsXzEsIGNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7IGVsXzEudGV4dENvbnRlbnQgPSBcIlwiICsgKHRvZ2dsZV8xID8gdG9nZ2xlXzEtLSA6IHRvZ2dsZV8xKyspOyB9O1xuICAgIH1cbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgdHJpZ2dlcigpO1xufTtcbmV4cG9ydCB7IHF1ZXVlTWljcm9UYXNrIH07XG4iLCJpbXBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9IGZyb20gJy4vcXVldWVNaWNyb1Rhc2snO1xudmFyIHF1ZXVlUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBxdWV1ZU1pY3JvVGFzayhmdW5jdGlvbiBSZXNpemVPYnNlcnZlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH07XG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuL3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9IGZyb20gJy4vcXVldWVSZXNpemVPYnNlcnZlcic7XG52YXIgd2F0Y2hpbmcgPSAwO1xudmFyIGlzV2F0Y2hpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXdhdGNoaW5nOyB9O1xudmFyIENBVENIX0ZSQU1FUyA9IDYwIC8gNTtcbnZhciBvYnNlcnZlckNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG52YXIgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdsb2FkJyxcbiAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAna2V5dXAnLFxuICAgICdrZXlkb3duJyxcbiAgICAnbW91c2V1cCcsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNlb3V0JyxcbiAgICAnYmx1cicsXG4gICAgJ2ZvY3VzJ1xuXTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNjaGVkdWxlKCk7IH07XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKGZyYW1lcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcXVldWVSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHNIYXZlUmVzaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0hhdmVSZXNpemVkID0gcHJvY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNIYXZlUmVzaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4oNjApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKGZyYW1lcyAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKENBVENIX0ZSQU1FUyk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=