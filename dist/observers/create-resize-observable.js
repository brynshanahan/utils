// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"reactive/observable.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable =
/** @class */
function () {
  function Observable(source) {
    this.index = 0;
    this.subscribed = false;
    this.activeListeners = 0;

    this.unsubscribeFromSource = function () {};

    this.listeners = {
      next: {},
      error: {},
      complete: {}
    };
    this.cancels = {};
    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  Observable.prototype.getKey = function () {
    return 'k' + this.index++;
  };

  Observable.prototype.emit = function (key, val) {
    for (var k in this.listeners[key]) {
      this.listeners[key][k](val);
    }
  };
  /* Emit the next value */


  Observable.prototype.next = function (value) {
    this.emit('next', value);
  };

  Observable.prototype.error = function (error) {
    this.emit('error', error);
  };
  /* Emit an end event to everything */


  Observable.prototype.complete = function () {
    this.emit('complete');
    this.destroy();
  };

  Observable.prototype.destroy = function () {
    for (var k in this.cancels) {
      this.cancels[k]();
    }
  };

  Observable.prototype.onDestroy = function (fn) {
    var _this = this;

    var key = this.getKey();

    this.cancels[key] = function () {
      delete _this.cancels[key];
      fn();
    };
  };
  /*
  This is called when a observer unsubscribes
  if it was the last remaining observer then it unsubscribes from the source
  */


  Observable.prototype.cleanup = function () {
    if (!this.activeListeners) {
      this.unsubscribeFromSource();
    }
  };
  /*
  Subscribe can be passed either a
  Listener: (nextVal) => {}
    or an
  Observer: { next: nextVal => {}, error: err => {}, }
  */


  Observable.prototype.subscribe = function (fnOrObserver) {
    var _this = this;

    if (!this.subscribed) {
      this.unsubscribeFromSource = this.streamSource(this);
      this.subscribed = true;
    }

    var key = this.getKey();

    if (isObserver(fnOrObserver)) {
      var objKeys_1 = Object.keys(fnOrObserver);
      this.activeListeners += 1;
      objKeys_1.forEach(function (objKey) {
        _this.listeners[objKey][key] = fnOrObserver[objKey];
      });

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        objKeys_1.forEach(function (objKey) {
          delete _this.listeners[objKey][key];
        });
        delete _this.cancels[key];

        _this.cleanup();
      };

      this.cancels[key] = cancel;
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    } else {
      this.listeners.next[key] = fnOrObserver;
      this.activeListeners += 1;

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        delete _this.listeners.next[key];
        delete _this.cancels[key];

        _this.cleanup();
      };

      this.cancels[key];
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    }
  };

  return Observable;
}();

function isObserver(obj) {
  if (_typeof(obj) === 'object' && obj.next) {
    return true;
  }
}

function isListener(fn) {
  if (typeof fn === 'function') {
    return true;
  }
}
/* Same as regular observable except it always emits the last value */


var BehaviourSubject =
/** @class */
function (_super) {
  __extends(BehaviourSubject, _super);

  function BehaviourSubject() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BehaviourSubject.prototype.next = function (value) {
    this.emit('next', value);
    this.lastNext = value;
  };
  /* Very similar to observable except it sends the most recent value on subscribe */


  BehaviourSubject.prototype.subscribe = function (fnOrObserver) {
    var observer = _super.prototype.subscribe.call(this, fnOrObserver);

    if (isObserver(observer.observer)) {
      observer.observer.next(this.lastNext);
    } else if (isListener(fnOrObserver)) {
      fnOrObserver(this.lastNext);
    }

    return observer;
  };

  return BehaviourSubject;
}(Observable);

exports.BehaviourSubject = BehaviourSubject;

function isChannelAPI(arg) {
  return Boolean(arg.destroy);
}

var ChannelledObservable =
/** @class */
function () {
  function ChannelledObservable(source) {
    this.index = 0;
    this.subscribed = false;
    this.activeListeners = 0;

    this.unsubscribeFromSource = function () {};

    this.channels = new Map();
    this.cancels = {};
    this.streamSource = source;
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
    this.error = this.error.bind(this);
  }

  ChannelledObservable.prototype.getKey = function () {
    return 'k' + this.index++;
  };

  ChannelledObservable.prototype.emit = function (channel, key, val) {
    var c = this.channels.get(channel);

    for (var k in c[key]) {
      c[key][k](val);
    }
  };

  ChannelledObservable.prototype.next = function (channel, value) {
    this.emit(channel, 'next', value);
  };

  ChannelledObservable.prototype.error = function (channel, error) {
    this.emit(channel, 'error', error);
  };

  ChannelledObservable.prototype.complete = function (channel) {
    this.emit(channel, 'complete');
  };

  ChannelledObservable.prototype.destroy = function () {
    for (var k in this.cancels) {
      this.cancels[k]();
    }
  };

  ChannelledObservable.prototype.onDestroy = function (fn) {
    var _this = this;

    var key = this.getKey();

    this.cancels[key] = function () {
      delete _this.cancels[key];
      fn();
    };
  };
  /*
  This is called when a observer unsubscribes
  if it was the last remaining observer then it unsubscribes from the source
  */


  ChannelledObservable.prototype.cleanup = function (channel) {
    if (isChannelAPI(this.unsubscribeFromSource)) this.unsubscribeFromSource.onUnsubscribe(channel);

    if (!this.activeListeners) {
      isChannelAPI(this.unsubscribeFromSource) ? this.unsubscribeFromSource.destroy() : this.unsubscribeFromSource();
    }
  };
  /*
  Subscribe can be passed either a
  Listener: (nextVal) => {}
    or an
  Observer: { next: nextVal => {}, error: err => {}, }
  */


  ChannelledObservable.prototype.subscribe = function (channelKey, fnOrObserver) {
    var _this = this;

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
      var objKeys_2 = Object.keys(fnOrObserver);
      this.activeListeners += 1;
      objKeys_2.forEach(function (objKey) {
        channel[objKey][key] = fnOrObserver[objKey];
      });

      var cancel = function cancel() {
        _this.activeListeners -= 1;

        var c = _this.channels.get(channelKey);

        objKeys_2.forEach(function (objKey) {
          delete c[objKey][key];
        });
        delete _this.cancels[key];

        _this.cleanup(channelKey);
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

      var cancel = function cancel() {
        _this.activeListeners -= 1;
        delete _this.channels.get(channelKey).next[key];
        delete _this.cancels[key];

        _this.cleanup(channelKey);
      };

      this.cancels[key];
      return {
        unsubscribe: cancel,
        observer: fnOrObserver
      };
    }
  };

  return ChannelledObservable;
}();

exports.ChannelledObservable = ChannelledObservable;
exports.default = Observable;
},{}],"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeObservers = void 0;
var resizeObservers = [];
exports.resizeObservers = resizeObservers;
},{}],"../node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasActiveObservations = void 0;

var _resizeObservers = require("../utils/resizeObservers");

var hasActiveObservations = function () {
  return _resizeObservers.resizeObservers.some(function (ro) {
    return ro.activeTargets.length > 0;
  });
};

exports.hasActiveObservations = hasActiveObservations;
},{"../utils/resizeObservers":"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js"}],"../node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasSkippedObservations = void 0;

var _resizeObservers = require("../utils/resizeObservers");

var hasSkippedObservations = function () {
  return _resizeObservers.resizeObservers.some(function (ro) {
    return ro.skippedTargets.length > 0;
  });
};

exports.hasSkippedObservations = hasSkippedObservations;
},{"../utils/resizeObservers":"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js"}],"../node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deliverResizeLoopError = void 0;
var msg = 'ResizeObserver loop completed with undelivered notifications.';

var deliverResizeLoopError = function () {
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

exports.deliverResizeLoopError = deliverResizeLoopError;
},{}],"../node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObserverBoxOptions = void 0;
var ResizeObserverBoxOptions;
exports.ResizeObserverBoxOptions = ResizeObserverBoxOptions;

(function (ResizeObserverBoxOptions) {
  ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (exports.ResizeObserverBoxOptions = ResizeObserverBoxOptions = {}));
},{}],"../node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMRectReadOnly = void 0;

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

exports.DOMRectReadOnly = DOMRectReadOnly;
},{}],"../node_modules/@juggle/resize-observer/lib/utils/element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReplacedElement = exports.isElement = exports.isHidden = exports.isSVG = void 0;

var isSVG = function (target) {
  return target instanceof SVGElement && 'getBBox' in target;
};

exports.isSVG = isSVG;

var isHidden = function (target) {
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

exports.isHidden = isHidden;

var isElement = function (obj) {
  var _a, _b;

  var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
  return !!(scope && obj instanceof scope.Element);
};

exports.isElement = isElement;

var isReplacedElement = function (target) {
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

exports.isReplacedElement = isReplacedElement;
},{}],"../node_modules/@juggle/resize-observer/lib/utils/global.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = void 0;
var global = typeof window !== 'undefined' ? window : {};
exports.global = global;
},{}],"../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = exports.calculateBoxSizes = exports.calculateBoxSize = void 0;

var _ResizeObserverBoxOptions = require("../ResizeObserverBoxOptions");

var _DOMRectReadOnly = require("../DOMRectReadOnly");

var _element = require("../utils/element");

var _global = require("../utils/global");

var cache = new Map();
exports.cache = cache;
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(_global.global.navigator && _global.global.navigator.userAgent);

var parseDimension = function (pixel) {
  return parseFloat(pixel || '0');
};

var size = function (inlineSize, blockSize, switchSizes) {
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
  contentRect: new _DOMRectReadOnly.DOMRectReadOnly(0, 0, 0, 0)
});

var calculateBoxSizes = function (target) {
  if (cache.has(target)) {
    return cache.get(target);
  }

  if ((0, _element.isHidden)(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }

  var cs = getComputedStyle(target);
  var svg = (0, _element.isSVG)(target) && target.ownerSVGElement && target.getBBox();
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
    contentRect: new _DOMRectReadOnly.DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};

exports.calculateBoxSizes = calculateBoxSizes;

var calculateBoxSize = function (target, observedBox) {
  var _a = calculateBoxSizes(target),
      borderBoxSize = _a.borderBoxSize,
      contentBoxSize = _a.contentBoxSize,
      devicePixelContentBoxSize = _a.devicePixelContentBoxSize;

  switch (observedBox) {
    case _ResizeObserverBoxOptions.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;

    case _ResizeObserverBoxOptions.ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;

    default:
      return contentBoxSize;
  }
};

exports.calculateBoxSize = calculateBoxSize;
},{"../ResizeObserverBoxOptions":"../node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js","../DOMRectReadOnly":"../node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js","../utils/element":"../node_modules/@juggle/resize-observer/lib/utils/element.js","../utils/global":"../node_modules/@juggle/resize-observer/lib/utils/global.js"}],"../node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObserverEntry = void 0;

var _calculateBoxSize = require("./algorithms/calculateBoxSize");

var ResizeObserverEntry = function () {
  function ResizeObserverEntry(target) {
    var boxes = (0, _calculateBoxSize.calculateBoxSizes)(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = [boxes.borderBoxSize];
    this.contentBoxSize = [boxes.contentBoxSize];
    this.devicePixelContentBoxSize = [boxes.devicePixelContentBoxSize];
  }

  return ResizeObserverEntry;
}();

exports.ResizeObserverEntry = ResizeObserverEntry;
},{"./algorithms/calculateBoxSize":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js"}],"../node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDepthForNode = void 0;

var _element = require("../utils/element");

var calculateDepthForNode = function (node) {
  if ((0, _element.isHidden)(node)) {
    return Infinity;
  }

  var depth = 0;
  var parent = node.parentNode;

  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }

  return depth;
};

exports.calculateDepthForNode = calculateDepthForNode;
},{"../utils/element":"../node_modules/@juggle/resize-observer/lib/utils/element.js"}],"../node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastActiveObservations = void 0;

var _resizeObservers = require("../utils/resizeObservers");

var _ResizeObserverEntry = require("../ResizeObserverEntry");

var _calculateDepthForNode = require("./calculateDepthForNode");

var _calculateBoxSize = require("./calculateBoxSize");

var broadcastActiveObservations = function () {
  var shallowestDepth = Infinity;
  var callbacks = [];

  _resizeObservers.resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }

    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new _ResizeObserverEntry.ResizeObserverEntry(ot.target);
      var targetDepth = (0, _calculateDepthForNode.calculateDepthForNode)(ot.target);
      entries.push(entry);
      ot.lastReportedSize = (0, _calculateBoxSize.calculateBoxSize)(ot.target, ot.observedBox);

      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });

  for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }

  return shallowestDepth;
};

exports.broadcastActiveObservations = broadcastActiveObservations;
},{"../utils/resizeObservers":"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js","../ResizeObserverEntry":"../node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js","./calculateDepthForNode":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js","./calculateBoxSize":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js"}],"../node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gatherActiveObservationsAtDepth = void 0;

var _resizeObservers = require("../utils/resizeObservers");

var _calculateDepthForNode = require("./calculateDepthForNode");

var _calculateBoxSize = require("./calculateBoxSize");

var gatherActiveObservationsAtDepth = function (depth) {
  _calculateBoxSize.cache.clear();

  _resizeObservers.resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if ((0, _calculateDepthForNode.calculateDepthForNode)(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};

exports.gatherActiveObservationsAtDepth = gatherActiveObservationsAtDepth;
},{"../utils/resizeObservers":"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js","./calculateDepthForNode":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js","./calculateBoxSize":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js"}],"../node_modules/@juggle/resize-observer/lib/utils/process.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _hasActiveObservations = require("../algorithms/hasActiveObservations");

var _hasSkippedObservations = require("../algorithms/hasSkippedObservations");

var _deliverResizeLoopError = require("../algorithms/deliverResizeLoopError");

var _broadcastActiveObservations = require("../algorithms/broadcastActiveObservations");

var _gatherActiveObservationsAtDepth = require("../algorithms/gatherActiveObservationsAtDepth");

var process = function () {
  var depth = 0;
  (0, _gatherActiveObservationsAtDepth.gatherActiveObservationsAtDepth)(depth);

  while ((0, _hasActiveObservations.hasActiveObservations)()) {
    depth = (0, _broadcastActiveObservations.broadcastActiveObservations)();
    (0, _gatherActiveObservationsAtDepth.gatherActiveObservationsAtDepth)(depth);
  }

  if ((0, _hasSkippedObservations.hasSkippedObservations)()) {
    (0, _deliverResizeLoopError.deliverResizeLoopError)();
  }

  return depth > 0;
};

exports.process = process;
},{"../algorithms/hasActiveObservations":"../node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js","../algorithms/hasSkippedObservations":"../node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js","../algorithms/deliverResizeLoopError":"../node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js","../algorithms/broadcastActiveObservations":"../node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js","../algorithms/gatherActiveObservationsAtDepth":"../node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js"}],"../node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueMicroTask = void 0;
var trigger;
var callbacks = [];

var notify = function () {
  return callbacks.splice(0).forEach(function (cb) {
    return cb();
  });
};

var queueMicroTask = function (callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode('');
    var config = {
      characterData: true
    };
    new MutationObserver(function () {
      return notify();
    }).observe(el_1, config);

    trigger = function () {
      el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
    };
  }

  callbacks.push(callback);
  trigger();
};

exports.queueMicroTask = queueMicroTask;
},{}],"../node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueResizeObserver = void 0;

var _queueMicroTask = require("./queueMicroTask");

var queueResizeObserver = function (cb) {
  (0, _queueMicroTask.queueMicroTask)(function ResizeObserver() {
    requestAnimationFrame(cb);
  });
};

exports.queueResizeObserver = queueResizeObserver;
},{"./queueMicroTask":"../node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js"}],"../node_modules/@juggle/resize-observer/lib/utils/scheduler.js":[function(require,module,exports) {


"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCount = exports.scheduler = void 0;

var _process = require("./process");

var _global = require("./global");

var _queueResizeObserver = require("./queueResizeObserver");

var watching = 0;

var isWatching = function () {
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
    (0, _queueResizeObserver.queueResizeObserver)(function () {
      var elementsHaveResized = false;

      try {
        elementsHaveResized = (0, _process.process)();
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

    var cb = function () {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };

    document.body ? cb() : _global.global.addEventListener('DOMContentLoaded', cb);
  };

  Scheduler.prototype.start = function () {
    var _this = this;

    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function (name) {
        return _global.global.addEventListener(name, _this.listener, true);
      });
    }
  };

  Scheduler.prototype.stop = function () {
    var _this = this;

    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function (name) {
        return _global.global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };

  return Scheduler;
}();

var scheduler = new Scheduler();
exports.scheduler = scheduler;

var updateCount = function (n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};

exports.updateCount = updateCount;
},{"./process":"../node_modules/@juggle/resize-observer/lib/utils/process.js","./global":"../node_modules/@juggle/resize-observer/lib/utils/global.js","./queueResizeObserver":"../node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js"}],"../node_modules/@juggle/resize-observer/lib/ResizeObservation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObservation = void 0;

var _ResizeObserverBoxOptions = require("./ResizeObserverBoxOptions");

var _calculateBoxSize = require("./algorithms/calculateBoxSize");

var _element = require("./utils/element");

var skipNotifyOnElement = function (target) {
  return !(0, _element.isSVG)(target) && !(0, _element.isReplacedElement)(target) && getComputedStyle(target).display === 'inline';
};

var ResizeObservation = function () {
  function ResizeObservation(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || _ResizeObserverBoxOptions.ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }

  ResizeObservation.prototype.isActive = function () {
    var size = (0, _calculateBoxSize.calculateBoxSize)(this.target, this.observedBox);

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

exports.ResizeObservation = ResizeObservation;
},{"./ResizeObserverBoxOptions":"../node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js","./algorithms/calculateBoxSize":"../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js","./utils/element":"../node_modules/@juggle/resize-observer/lib/utils/element.js"}],"../node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObserverDetail = void 0;

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

exports.ResizeObserverDetail = ResizeObserverDetail;
},{}],"../node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObserverController = void 0;

var _scheduler = require("./utils/scheduler");

var _ResizeObservation = require("./ResizeObservation");

var _ResizeObserverDetail = require("./ResizeObserverDetail");

var _resizeObservers = require("./utils/resizeObservers");

var observerMap = new Map();

var getObservationIndex = function (observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }

  return -1;
};

var ResizeObserverController = function () {
  function ResizeObserverController() {}

  ResizeObserverController.connect = function (resizeObserver, callback) {
    var detail = new _ResizeObserverDetail.ResizeObserverDetail(resizeObserver, callback);

    _resizeObservers.resizeObservers.push(detail);

    observerMap.set(resizeObserver, detail);
  };

  ResizeObserverController.observe = function (resizeObserver, target, options) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);

      if (getObservationIndex(detail.observationTargets, target) < 0) {
        detail.observationTargets.push(new _ResizeObservation.ResizeObservation(target, options && options.box));
        (0, _scheduler.updateCount)(1);

        _scheduler.scheduler.schedule();
      }
    }
  };

  ResizeObserverController.unobserve = function (resizeObserver, target) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);
      var index = getObservationIndex(detail.observationTargets, target);

      if (index >= 0) {
        detail.observationTargets.splice(index, 1);
        (0, _scheduler.updateCount)(-1);
      }
    }
  };

  ResizeObserverController.disconnect = function (resizeObserver) {
    if (observerMap.has(resizeObserver)) {
      var detail = observerMap.get(resizeObserver);

      _resizeObservers.resizeObservers.splice(_resizeObservers.resizeObservers.indexOf(detail), 1);

      observerMap.delete(resizeObserver);
      (0, _scheduler.updateCount)(-detail.observationTargets.length);
    }
  };

  return ResizeObserverController;
}();

exports.ResizeObserverController = ResizeObserverController;
},{"./utils/scheduler":"../node_modules/@juggle/resize-observer/lib/utils/scheduler.js","./ResizeObservation":"../node_modules/@juggle/resize-observer/lib/ResizeObservation.js","./ResizeObserverDetail":"../node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js","./utils/resizeObservers":"../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js"}],"../node_modules/@juggle/resize-observer/lib/ResizeObserver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeObserver = void 0;

var _ResizeObserverController = require("./ResizeObserverController");

var _element = require("./utils/element");

var ResizeObserver = function () {
  function ResizeObserver(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (typeof callback !== 'function') {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }

    _ResizeObserverController.ResizeObserverController.connect(this, callback);
  }

  ResizeObserver.prototype.observe = function (target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (!(0, _element.isElement)(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }

    _ResizeObserverController.ResizeObserverController.observe(this, target, options);
  };

  ResizeObserver.prototype.unobserve = function (target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }

    if (!(0, _element.isElement)(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }

    _ResizeObserverController.ResizeObserverController.unobserve(this, target);
  };

  ResizeObserver.prototype.disconnect = function () {
    _ResizeObserverController.ResizeObserverController.disconnect(this);
  };

  ResizeObserver.toString = function () {
    return 'function ResizeObserver () { [polyfill code] }';
  };

  return ResizeObserver;
}();

exports.ResizeObserver = ResizeObserver;
},{"./ResizeObserverController":"../node_modules/@juggle/resize-observer/lib/ResizeObserverController.js","./utils/element":"../node_modules/@juggle/resize-observer/lib/utils/element.js"}],"../node_modules/@juggle/resize-observer/lib/exports/resize-observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ResizeObserver", {
  enumerable: true,
  get: function () {
    return _ResizeObserver.ResizeObserver;
  }
});
Object.defineProperty(exports, "ResizeObserverEntry", {
  enumerable: true,
  get: function () {
    return _ResizeObserverEntry.ResizeObserverEntry;
  }
});

var _ResizeObserver = require("../ResizeObserver");

var _ResizeObserverEntry = require("../ResizeObserverEntry");
},{"../ResizeObserver":"../node_modules/@juggle/resize-observer/lib/ResizeObserver.js","../ResizeObserverEntry":"../node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js"}],"observers/create-resize-observable.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var observable_1 = require("../reactive/observable");

function createResizeObservable() {
  var _this = this;

  var observable = new observable_1.ChannelledObservable(function (_a) {
    var next = _a.next,
        error = _a.error,
        complete = _a.complete;
    /* Entries is an array of entries for every element that changed */

    var disconnected = false;
    var started = false;
    var source;

    var getSource = function getSource() {
      return __awaiter(_this, void 0, void 0, function () {
        var ResizeObserver, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = window.ResizeObserver;
              if (_a) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , Promise.resolve().then(function () {
                return __importStar(require('@juggle/resize-observer'));
              })];

            case 1:
              _a = _b.sent().ResizeObserver;
              _b.label = 2;

            case 2:
              ResizeObserver = _a;
              if (disconnected) return [2
              /*return*/
              ];
              started = true;
              return [2
              /*return*/
              , new ResizeObserver(function (entries) {
                entries.forEach(function (entry) {
                  /* Get the callback for the specific element */
                  next(entry.target, entry);
                });
              })];
          }
        });
      });
    };

    source = getSource().then(function (r) {
      source = r;
      return r;
    });
    return {
      onSubscribe: function onSubscribe(channel) {
        return __awaiter(this, void 0, void 0, function () {
          var src;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , source];

              case 1:
                src = _a.sent();
                src.observe(channel);
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      onUnsubscribe: function onUnsubscribe(channel) {
        return __awaiter(this, void 0, void 0, function () {
          var src;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , source];

              case 1:
                src = _a.sent();
                src.unobserve(channel);
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      destroy: function destroy() {
        return __awaiter(this, void 0, void 0, function () {
          var src;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                disconnected = true;
                if (!started) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , source];

              case 1:
                src = _a.sent();
                src.disconnect();
                _a.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
    };
  });
  return observable;
}

exports.createResizeObservable = createResizeObservable;
},{"../reactive/observable":"reactive/observable.ts","@juggle/resize-observer":"../node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62404" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","observers/create-resize-observable.ts"], null)
//# sourceMappingURL=/observers/create-resize-observable.js.map