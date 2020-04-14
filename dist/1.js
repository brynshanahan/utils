(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function () {
  'use strict'; // Exit early if we're not running in a browser.

  if ((typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) !== 'object') {
    return;
  } // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.


  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }

    return;
  }
  /**
   * A local reference to the document.
   */


  var document = window.document;
  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */

  var registry = [];
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */

  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */


  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    } // Binds and throttles `this._checkForIntersections`.


    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
    /** @private @const {!Array<!Document>} */

    this._monitoringDocuments = [];
    /** @private @const {!Array<function()>} */

    this._monitoringUnsubscribes = [];
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */


  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */

  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */

  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */

  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();

    this._observationTargets.push({
      element: target,
      entry: null
    });

    this._monitorIntersections(target.ownerDocument);

    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });

    this._unmonitorIntersections(target.ownerDocument);

    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */


  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];

    this._unmonitorAllIntersections();

    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */


  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();

    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */


  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }

      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */


  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }

      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    }); // Handles shorthand.

    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._monitorIntersections = function (doc) {
    var win = doc.defaultView;

    if (!win) {
      // Already destroyed.
      return;
    }

    if (this._monitoringDocuments.indexOf(doc) != -1) {
      // Already monitoring.
      return;
    } // Private state for monitoring.


    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null; // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.

    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, 'resize', callback, true);
      addEvent(doc, 'scroll', callback, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }

    this._monitoringDocuments.push(doc);

    this._monitoringUnsubscribes.push(function () {
      // Get the window object again. When a friendly iframe is destroyed, it
      // will be null.
      var win = doc.defaultView;

      if (win) {
        if (monitoringInterval) {
          win.clearInterval(monitoringInterval);
        }

        removeEvent(win, 'resize', callback, true);
      }

      removeEvent(doc, 'scroll', callback, true);

      if (domObserver) {
        domObserver.disconnect();
      }
    }); // Also monitor the parent.


    if (doc != (this.root && this.root.ownerDocument || document)) {
      var frame = getFrameElement(doc);

      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._unmonitorIntersections = function (doc) {
    var index = this._monitoringDocuments.indexOf(doc);

    if (index == -1) {
      return;
    }

    var rootDoc = this.root && this.root.ownerDocument || document; // Check if any dependent targets are still remaining.

    var hasDependentTargets = this._observationTargets.some(function (item) {
      var itemDoc = item.element.ownerDocument; // Target is in this context.

      if (itemDoc == doc) {
        return true;
      } // Target is nested in this context.


      var _LP = Date.now();

      while (itemDoc && itemDoc != rootDoc) {
        if (Date.now() - _LP > 300) {
          (function () {
            throw Error('Infinite loop');
          })(357, 8);

          break;
        }

        var frame = getFrameElement(itemDoc);
        itemDoc = frame && frame.ownerDocument;

        if (itemDoc == doc) {
          return true;
        }
      }

      return false;
    });

    if (hasDependentTargets) {
      return;
    } // Unsubscribe.


    var unsubscribe = this._monitoringUnsubscribes[index];

    this._monitoringDocuments.splice(index, 1);

    this._monitoringUnsubscribes.splice(index, 1);

    unsubscribe(); // Also unmonitor the parent.

    if (doc != rootDoc) {
      var frame = getFrameElement(doc);

      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */


  IntersectionObserver.prototype._unmonitorAllIntersections = function () {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);

    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;

    var _LP2 = Date.now();

    for (var i = 0; i < unsubscribes.length; i++) {
      if (Date.now() - _LP2 > 300) {
        (function () {
          throw Error('Infinite loop');
        })(395, 2);

        break;
      }

      unsubscribes[i]();
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */


  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();

    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);

      var rootContainsTarget = this._rootContainsTarget(target);

      var oldEntry = item.entry;

      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */


  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, targetRect, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    var _LP3 = Date.now();

    while (!atRoot && parent) {
      if (Date.now() - _LP3 > 300) {
        (function () {
          throw Error('Infinite loop');
        })(473, 2);

        break;
      }

      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

      if (parentComputedStyle.display == 'none') return null;

      if (parent == this.root || parent.nodeType ==
      /* DOCUMENT */
      9) {
        atRoot = true;

        if (parent == this.root || parent == document) {
          parentRect = rootRect;
        } else {
          // Check if there's a frame that can be navigated to.
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);

          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);

          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        var doc = parent.ownerDocument;

        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      } // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.


      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }

      if (!intersectionRect) break;
      parent = parent && getParentNode(parent);
    }

    return intersectionRect;
  };
  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */


  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;

    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }

    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */


  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });

    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */


  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

    if (oldRatio === newRatio) return;

    var _LP4 = Date.now();

    for (var i = 0; i < this.thresholds.length; i++) {
      if (Date.now() - _LP4 > 300) {
        (function () {
          throw Error('Infinite loop');
        })(598, 2);

        break;
      }

      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.

      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */


  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */


  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target) && (!this.root || this.root.ownerDocument == target.ownerDocument);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */


  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */


  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */


  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */


  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */


  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */


  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */


  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    } || null;
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */


  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect(); // Older IE

    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }

    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */


  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {Object} parentBoundingRect The parent's bound client rect.
   * @param {Object} parentIntersectionRect The parent's own intersection rect.
   * @return {Object} The local root bounding rect for the parent's children.
   */


  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top: top,
      left: left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */


  function containsDeep(parent, child) {
    var node = child;

    var _LP5 = Date.now();

    while (node) {
      if (Date.now() - _LP5 > 300) {
        (function () {
          throw Error('Infinite loop');
        })(827, 2);

        break;
      }

      if (node == parent) return true;
      node = getParentNode(node);
    }

    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */


  function getParentNode(node) {
    var parent = node.parentNode;

    if (node.nodeType ==
    /* DOCUMENT */
    9 && node != document) {
      // If this node is a document node, look for the embedding frame.
      return getFrameElement(node);
    }

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }

    return parent;
  }
  /**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */


  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e) {
      // Ignore the error.
      return null;
    }
  } // Exposes the constructors globally.


  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJzZWN0aW9uLW9ic2VydmVyL2ludGVyc2VjdGlvbi1vYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImRvY3VtZW50IiwicmVnaXN0cnkiLCJlbnRyeSIsInRpbWUiLCJ0YXJnZXQiLCJyb290Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmVjdCIsImdldEVtcHR5UmVjdCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0UmVjdCIsInRhcmdldEFyZWEiLCJ3aWR0aCIsImhlaWdodCIsImludGVyc2VjdGlvbkFyZWEiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjYWxsYmFjayIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsIkVycm9yIiwicm9vdCIsIm5vZGVUeXBlIiwiX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyIsInRocm90dGxlIiwiYmluZCIsIlRIUk9UVExFX1RJTUVPVVQiLCJfY2FsbGJhY2siLCJfb2JzZXJ2YXRpb25UYXJnZXRzIiwiX3F1ZXVlZEVudHJpZXMiLCJfcm9vdE1hcmdpblZhbHVlcyIsIl9wYXJzZVJvb3RNYXJnaW4iLCJyb290TWFyZ2luIiwidGhyZXNob2xkcyIsIl9pbml0VGhyZXNob2xkcyIsInRocmVzaG9sZCIsIm1hcCIsIm1hcmdpbiIsInZhbHVlIiwidW5pdCIsImpvaW4iLCJfbW9uaXRvcmluZ0RvY3VtZW50cyIsIl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzIiwiUE9MTF9JTlRFUlZBTCIsIlVTRV9NVVRBVElPTl9PQlNFUlZFUiIsIm9ic2VydmUiLCJpc1RhcmdldEFscmVhZHlPYnNlcnZlZCIsInNvbWUiLCJpdGVtIiwiZWxlbWVudCIsIl9yZWdpc3Rlckluc3RhbmNlIiwicHVzaCIsIl9tb25pdG9ySW50ZXJzZWN0aW9ucyIsIm93bmVyRG9jdW1lbnQiLCJ1bm9ic2VydmUiLCJmaWx0ZXIiLCJfdW5tb25pdG9ySW50ZXJzZWN0aW9ucyIsImxlbmd0aCIsIl91bnJlZ2lzdGVySW5zdGFuY2UiLCJkaXNjb25uZWN0IiwiX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMiLCJ0YWtlUmVjb3JkcyIsInJlY29yZHMiLCJzbGljZSIsIm9wdF90aHJlc2hvbGQiLCJBcnJheSIsImlzQXJyYXkiLCJzb3J0IiwidCIsImkiLCJhIiwiaXNOYU4iLCJvcHRfcm9vdE1hcmdpbiIsIm1hcmdpblN0cmluZyIsIm1hcmdpbnMiLCJzcGxpdCIsInBhcnRzIiwiZXhlYyIsInBhcnNlRmxvYXQiLCJkb2MiLCJ3aW4iLCJkZWZhdWx0VmlldyIsImluZGV4T2YiLCJtb25pdG9yaW5nSW50ZXJ2YWwiLCJkb21PYnNlcnZlciIsInNldEludGVydmFsIiwiYWRkRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50IiwiZnJhbWUiLCJnZXRGcmFtZUVsZW1lbnQiLCJpbmRleCIsInJvb3REb2MiLCJoYXNEZXBlbmRlbnRUYXJnZXRzIiwiaXRlbURvYyIsInVuc3Vic2NyaWJlIiwic3BsaWNlIiwidW5zdWJzY3JpYmVzIiwicm9vdElzSW5Eb20iLCJfcm9vdElzSW5Eb20iLCJyb290UmVjdCIsIl9nZXRSb290UmVjdCIsImZvckVhY2giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb290Q29udGFpbnNUYXJnZXQiLCJfcm9vdENvbnRhaW5zVGFyZ2V0Iiwib2xkRW50cnkiLCJfY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24iLCJuZXdFbnRyeSIsIm5vdyIsIl9oYXNDcm9zc2VkVGhyZXNob2xkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJwYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiYXRSb290IiwicGFyZW50UmVjdCIsInBhcmVudENvbXB1dGVkU3R5bGUiLCJmcmFtZVJlY3QiLCJmcmFtZUludGVyc2VjdCIsImNvbnZlcnRGcm9tUGFyZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJvdmVyZmxvdyIsImNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uIiwiaHRtbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiY2xpZW50SGVpZ2h0IiwiX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4iLCJyZWN0IiwibmV3UmVjdCIsIm9sZFJhdGlvIiwibmV3UmF0aW8iLCJjb250YWluc0RlZXAiLCJwZXJmb3JtYW5jZSIsImZuIiwidGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsIm5vZGUiLCJldmVudCIsIm9wdF91c2VDYXB0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGF0Y2hFdmVudCIsInJlY3QxIiwicmVjdDIiLCJNYXRoIiwibWF4IiwibWluIiwiZWwiLCJlcnIiLCJwYXJlbnRCb3VuZGluZ1JlY3QiLCJwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IiwiY2hpbGQiLCJwYXJlbnROb2RlIiwiaG9zdCIsImFzc2lnbmVkU2xvdCIsImZyYW1lRWxlbWVudCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVFDLGFBQVc7QUFDWixlQURZLENBR1o7O0FBQ0EsTUFBSSxRQUFPQSxNQUFQLHNHQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzlCO0FBQ0QsR0FOVyxDQVFaO0FBQ0E7OztBQUNBLE1BQUksMEJBQTBCQSxNQUExQixJQUNBLCtCQUErQkEsTUFEL0IsSUFFQSx1QkFBdUJBLE1BQU0sQ0FBQ0MseUJBQVAsQ0FBaUNDLFNBRjVELEVBRXVFO0FBRXJFO0FBQ0E7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QixJQUFELENBQXBCO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0Q7QUFHRDs7Ozs7Ozs7QUFNQSxXQUFTN0IsYUFBVCxDQUF1QjZCLElBQXZCLEVBQTZCO0FBQzNCLFFBQUk5QixNQUFNLEdBQUc4QixJQUFJLENBQUNpQixVQUFsQjs7QUFFQSxRQUFJakIsSUFBSSxDQUFDOUgsUUFBTDtBQUFpQjtBQUFlLEtBQWhDLElBQXFDOEgsSUFBSSxJQUFJckosUUFBakQsRUFBMkQ7QUFDekQ7QUFDQSxhQUFPZ0csZUFBZSxDQUFDcUQsSUFBRCxDQUF0QjtBQUNEOztBQUVELFFBQUk5QixNQUFNLElBQUlBLE1BQU0sQ0FBQ2hHLFFBQVAsSUFBbUIsRUFBN0IsSUFBbUNnRyxNQUFNLENBQUNnRCxJQUE5QyxFQUFvRDtBQUNsRDtBQUNBLGFBQU9oRCxNQUFNLENBQUNnRCxJQUFkO0FBQ0Q7O0FBRUQsUUFBSWhELE1BQU0sSUFBSUEsTUFBTSxDQUFDaUQsWUFBckIsRUFBbUM7QUFDakM7QUFDQSxhQUFPakQsTUFBTSxDQUFDaUQsWUFBUCxDQUFvQkYsVUFBM0I7QUFDRDs7QUFFRCxXQUFPL0MsTUFBUDtBQUNEO0FBR0Q7Ozs7Ozs7QUFLQSxXQUFTdkIsZUFBVCxDQUF5QmhCLEdBQXpCLEVBQThCO0FBQzVCLFFBQUk7QUFDRixhQUFPQSxHQUFHLENBQUNFLFdBQUosSUFBbUJGLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQnVGLFlBQW5DLElBQW1ELElBQTFEO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQW4yQlcsQ0FzMkJaOzs7QUFDQWpMLFFBQU0sQ0FBQ3dCLG9CQUFQLEdBQThCQSxvQkFBOUI7QUFDQXhCLFFBQU0sQ0FBQ0MseUJBQVAsR0FBbUNBLHlCQUFuQztBQUVDLENBMTJCQSxHQUFELEMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBFeGl0IGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluIGEgYnJvd3Nlci5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0Jykge1xuICByZXR1cm47XG59XG5cbi8vIEV4aXQgZWFybHkgaWYgYWxsIEludGVyc2VjdGlvbk9ic2VydmVyIGFuZCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG4vLyBmZWF0dXJlcyBhcmUgbmF0aXZlbHkgc3VwcG9ydGVkLlxuaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4gICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuICAgICdpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKSB7XG5cbiAgLy8gTWluaW1hbCBwb2x5ZmlsbCBmb3IgRWRnZSAxNSdzIGxhY2sgb2YgYGlzSW50ZXJzZWN0aW5nYFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzIxMVxuICBpZiAoISgnaXNJbnRlcnNlY3RpbmcnIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLFxuICAgICAgJ2lzSW50ZXJzZWN0aW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm47XG59XG5cblxuLyoqXG4gKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQuXG4gKi9cbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuXG4vKipcbiAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gKiByZWZlcmVuY2UgdG8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VzIGN1cnJlbnRseSBvYnNlcnZpbmcgYSB0YXJnZXRcbiAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAqL1xudmFyIHJlZ2lzdHJ5ID0gW107XG5cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWVudHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gZW50cnkgQSBkaWN0aW9uYXJ5IG9mIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShlbnRyeSkge1xuICB0aGlzLnRpbWUgPSBlbnRyeS50aW1lO1xuICB0aGlzLnRhcmdldCA9IGVudHJ5LnRhcmdldDtcbiAgdGhpcy5yb290Qm91bmRzID0gZW50cnkucm9vdEJvdW5kcztcbiAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gIHRoaXMuaW50ZXJzZWN0aW9uUmVjdCA9IGVudHJ5LmludGVyc2VjdGlvblJlY3QgfHwgZ2V0RW1wdHlSZWN0KCk7XG4gIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3Q7XG5cbiAgLy8gQ2FsY3VsYXRlcyB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMuYm91bmRpbmdDbGllbnRSZWN0O1xuICB2YXIgdGFyZ2V0QXJlYSA9IHRhcmdldFJlY3Qud2lkdGggKiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3Q7XG4gIHZhciBpbnRlcnNlY3Rpb25BcmVhID0gaW50ZXJzZWN0aW9uUmVjdC53aWR0aCAqIGludGVyc2VjdGlvblJlY3QuaGVpZ2h0O1xuXG4gIC8vIFNldHMgaW50ZXJzZWN0aW9uIHJhdGlvLlxuICBpZiAodGFyZ2V0QXJlYSkge1xuICAgIC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMzI0XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IE51bWJlcigoaW50ZXJzZWN0aW9uQXJlYSAvIHRhcmdldEFyZWEpLnRvRml4ZWQoNCkpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGFyZWEgaXMgemVybyBhbmQgaXMgaW50ZXJzZWN0aW5nLCBzZXRzIHRvIDEsIG90aGVyd2lzZSB0byAwXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMDtcbiAgfVxufVxuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItaW50ZXJmYWNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICogICAgIGJlZW4gZW1wdGllZCBieSBjYWxsaW5nIHRoZSBgdGFrZVJlY29yZHNgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuXG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJvb3QgJiYgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3QgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG4gIH1cblxuICAvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLCB0aGlzLlRIUk9UVExFX1RJTUVPVVQpO1xuXG4gIC8vIFByaXZhdGUgcHJvcGVydGllcy5cbiAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgdGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pO1xuXG4gIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICB0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZCk7XG4gIHRoaXMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBudWxsO1xuICB0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICByZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXQ7XG4gIH0pLmpvaW4oJyAnKTtcblxuICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8IURvY3VtZW50Pn0gKi9cbiAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cyA9IFtdO1xuICAvKiogQHByaXZhdGUgQGNvbnN0IHshQXJyYXk8ZnVuY3Rpb24oKT59ICovXG4gIHRoaXMuX21vbml0b3JpbmdVbnN1YnNjcmliZXMgPSBbXTtcbn1cblxuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGludGVydmFsIHdpdGhpbiB3aGljaCB0aGUgZG9jdW1lbnQgd2lsbCBiZSBjaGVja2VkIGZvclxuICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5USFJPVFRMRV9USU1FT1VUID0gMTAwO1xuXG5cbi8qKlxuICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogdGhpcyBjYW4gYmUgdXBkYXRlZCBvbiBhIHBlciBpbnN0YW5jZSBiYXNpcyBhbmQgbXVzdCBiZSBzZXQgcHJpb3IgdG9cbiAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5QT0xMX0lOVEVSVkFMID0gbnVsbDtcblxuLyoqXG4gKiBVc2UgYSBtdXRhdGlvbiBvYnNlcnZlciBvbiB0aGUgcm9vdCBlbGVtZW50XG4gKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5VU0VfTVVUQVRJT05fT0JTRVJWRVIgPSB0cnVlO1xuXG5cbi8qKlxuICogU3RhcnRzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBiYXNlZCBvblxuICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09IHRhcmdldDtcbiAgfSk7XG5cbiAgaWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuICB9XG5cbiAgdGhpcy5fcmVnaXN0ZXJJbnN0YW5jZSgpO1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7ZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbH0pO1xuICB0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudCk7XG4gIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpO1xufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9XG4gICAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXQ7XG4gICAgICB9KTtcbiAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyh0YXJnZXQub3duZXJEb2N1bWVudCk7XG4gIGlmICh0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09IDApIHtcbiAgICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gIHRoaXMuX3VubW9uaXRvckFsbEludGVyc2VjdGlvbnMoKTtcbiAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhbnkgcXVldWUgZW50cmllcyB0aGF0IGhhdmUgbm90IHlldCBiZWVuIHJlcG9ydGVkIHRvIHRoZVxuICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY3VycmVudGx5IHF1ZXVlZCBlbnRyaWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlY29yZHMgPSB0aGlzLl9xdWV1ZWRFbnRyaWVzLnNsaWNlKCk7XG4gIHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcbiAgcmV0dXJuIHJlY29yZHM7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gKiByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB0aHJlc2hvbGQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdFxuICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxudW1iZXI9fSBvcHRfdGhyZXNob2xkIEFuIG9wdGlvbmFsIHRocmVzaG9sZCB2YWx1ZSBvclxuICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcbiAgdmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF07XG5cbiAgcmV0dXJuIHRocmVzaG9sZC5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHQsIGksIGEpIHtcbiAgICBpZiAodHlwZW9mIHQgIT0gJ251bWJlcicgfHwgaXNOYU4odCkgfHwgdCA8IDAgfHwgdCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5Jyk7XG4gICAgfVxuICAgIHJldHVybiB0ICE9PSBhW2kgLSAxXTtcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgcm9vdE1hcmdpbiB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICogZm9ybWF0dGVkIG9yIHVzZSBhIHVuaXQgb3RoZXIgdGhhbiBweCBvciAlLCBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAqICAgICBkZWZhdWx0aW5nIHRvICcwcHgnLlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICogICAgIHZhbHVlIGFuZCB1bml0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG4gIHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4JztcbiAgdmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgdmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpO1xuICAgIH1cbiAgICByZXR1cm4ge3ZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl19O1xuICB9KTtcblxuICAvLyBIYW5kbGVzIHNob3J0aGFuZC5cbiAgbWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXTtcbiAgbWFyZ2luc1szXSA9IG1hcmdpbnNbM10gfHwgbWFyZ2luc1sxXTtcblxuICByZXR1cm4gbWFyZ2lucztcbn07XG5cblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgaWYgdGhlIHBvbGxpbmcgaXMgbm90IGFscmVhZHlcbiAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY1xuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKGRvYykge1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3O1xuICBpZiAoIXdpbikge1xuICAgIC8vIEFscmVhZHkgZGVzdHJveWVkLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYykgIT0gLTEpIHtcbiAgICAvLyBBbHJlYWR5IG1vbml0b3JpbmcuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBzdGF0ZSBmb3IgbW9uaXRvcmluZy5cbiAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zO1xuICB2YXIgbW9uaXRvcmluZ0ludGVydmFsID0gbnVsbDtcbiAgdmFyIGRvbU9ic2VydmVyID0gbnVsbDtcblxuICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAvLyByZXNpemUgYW5kIHNjcm9sbCBldmVudHMgb3IgRE9NIG11dGF0aW9ucy5cbiAgaWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuICAgIG1vbml0b3JpbmdJbnRlcnZhbCA9IHdpbi5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGhpcy5QT0xMX0lOVEVSVkFMKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFdmVudCh3aW4sICdyZXNpemUnLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgYWRkRXZlbnQoZG9jLCAnc2Nyb2xsJywgY2FsbGJhY2ssIHRydWUpO1xuICAgIGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luKSB7XG4gICAgICBkb21PYnNlcnZlciA9IG5ldyB3aW4uTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgICBkb21PYnNlcnZlci5vYnNlcnZlKGRvYywge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMucHVzaChkb2MpO1xuICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgLy8gR2V0IHRoZSB3aW5kb3cgb2JqZWN0IGFnYWluLiBXaGVuIGEgZnJpZW5kbHkgaWZyYW1lIGlzIGRlc3Ryb3llZCwgaXRcbiAgICAvLyB3aWxsIGJlIG51bGwuXG4gICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldztcblxuICAgIGlmICh3aW4pIHtcbiAgICAgIGlmIChtb25pdG9yaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgd2luLmNsZWFySW50ZXJ2YWwobW9uaXRvcmluZ0ludGVydmFsKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUV2ZW50KHdpbiwgJ3Jlc2l6ZScsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudChkb2MsICdzY3JvbGwnLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgaWYgKGRvbU9ic2VydmVyKSB7XG4gICAgICBkb21PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBbHNvIG1vbml0b3IgdGhlIHBhcmVudC5cbiAgaWYgKGRvYyAhPSAodGhpcy5yb290ICYmIHRoaXMucm9vdC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KSkge1xuICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpO1xuICAgIGlmIChmcmFtZSkge1xuICAgICAgdGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoZnJhbWUub3duZXJEb2N1bWVudCk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbihkb2MpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5pbmRleE9mKGRvYyk7XG4gIGlmIChpbmRleCA9PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByb290RG9jID0gKHRoaXMucm9vdCAmJiB0aGlzLnJvb3Qub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCk7XG5cbiAgLy8gQ2hlY2sgaWYgYW55IGRlcGVuZGVudCB0YXJnZXRzIGFyZSBzdGlsbCByZW1haW5pbmcuXG4gIHZhciBoYXNEZXBlbmRlbnRUYXJnZXRzID1cbiAgICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGl0ZW1Eb2MgPSBpdGVtLmVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgLy8gVGFyZ2V0IGlzIGluIHRoaXMgY29udGV4dC5cbiAgICAgICAgaWYgKGl0ZW1Eb2MgPT0gZG9jKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFyZ2V0IGlzIG5lc3RlZCBpbiB0aGlzIGNvbnRleHQuXG4gICAgICAgIHdoaWxlIChpdGVtRG9jICYmIGl0ZW1Eb2MgIT0gcm9vdERvYykge1xuICAgICAgICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChpdGVtRG9jKTtcbiAgICAgICAgICBpdGVtRG9jID0gZnJhbWUgJiYgZnJhbWUub3duZXJEb2N1bWVudDtcbiAgICAgICAgICBpZiAoaXRlbURvYyA9PSBkb2MpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgaWYgKGhhc0RlcGVuZGVudFRhcmdldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBVbnN1YnNjcmliZS5cbiAgdmFyIHVuc3Vic2NyaWJlID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlc1tpbmRleF07XG4gIHRoaXMuX21vbml0b3JpbmdEb2N1bWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB1bnN1YnNjcmliZSgpO1xuXG4gIC8vIEFsc28gdW5tb25pdG9yIHRoZSBwYXJlbnQuXG4gIGlmIChkb2MgIT0gcm9vdERvYykge1xuICAgIHZhciBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChkb2MpO1xuICAgIGlmIChmcmFtZSkge1xuICAgICAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyhmcmFtZS5vd25lckRvY3VtZW50KTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2NcbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9yQWxsSW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdW5zdWJzY3JpYmVzID0gdGhpcy5fbW9uaXRvcmluZ1Vuc3Vic2NyaWJlcy5zbGljZSgwKTtcbiAgdGhpcy5fbW9uaXRvcmluZ0RvY3VtZW50cy5sZW5ndGggPSAwO1xuICB0aGlzLl9tb25pdG9yaW5nVW5zdWJzY3JpYmVzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdW5zdWJzY3JpYmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdW5zdWJzY3JpYmVzW2ldKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICogdG8gdGhlIGludGVybmFsIGVudHJpZXMgcXVldWUuIElmIG5ldyBlbnRyaWVzIGFyZSBmb3VuZCwgaXRcbiAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHZhciByb290SXNJbkRvbSA9IHRoaXMuX3Jvb3RJc0luRG9tKCk7XG4gIHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpO1xuXG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50O1xuICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG4gICAgdmFyIHJvb3RDb250YWluc1RhcmdldCA9IHRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpO1xuICAgIHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnk7XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSByb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCB0YXJnZXRSZWN0LCByb290UmVjdCk7XG5cbiAgICB2YXIgbmV3RW50cnkgPSBpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuICAgICAgdGltZTogbm93KCksXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgIHJvb3RCb3VuZHM6IHJvb3RSZWN0LFxuICAgICAgaW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuICAgIH0pO1xuXG4gICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgLy8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuICAgICAgLy8gdGhyZXNob2xkcywgYWRkIGEgbmV3IGVudHJ5LlxuICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgcm9vdCBpcyBub3QgaW4gdGhlIERPTSBvciB0YXJnZXQgaXMgbm90IGNvbnRhaW5lZCB3aXRoaW5cbiAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgIC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuICAgICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzKTtcblxuICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAqIFRPRE8ocGhpbGlwd2FsdG9uKTogYXQgdGhpcyB0aW1lIGNsaXAtcGF0aCBpcyBub3QgY29uc2lkZXJlZC5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSB0YXJnZXQuXG4gKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAqICAgICBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBmaW5hbCBpbnRlcnNlY3Rpb24gcmVjdCBvYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9XG4gICAgZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRSZWN0LCByb290UmVjdCkge1xuICAvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cbiAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0O1xuICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpO1xuICB2YXIgYXRSb290ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCFhdFJvb3QgJiYgcGFyZW50KSB7XG4gICAgdmFyIHBhcmVudFJlY3QgPSBudWxsO1xuICAgIHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID0gcGFyZW50Lm5vZGVUeXBlID09IDEgP1xuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge307XG5cbiAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSkge1xuICAgICAgYXRSb290ID0gdHJ1ZTtcbiAgICAgIGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuICAgICAgICBwYXJlbnRSZWN0ID0gcm9vdFJlY3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGEgZnJhbWUgdGhhdCBjYW4gYmUgbmF2aWdhdGVkIHRvLlxuICAgICAgICB2YXIgZnJhbWUgPSBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gICAgICAgIHZhciBmcmFtZVJlY3QgPSBmcmFtZSAmJiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZnJhbWUpO1xuICAgICAgICB2YXIgZnJhbWVJbnRlcnNlY3QgPVxuICAgICAgICAgICAgZnJhbWUgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKGZyYW1lLCBmcmFtZVJlY3QsIHJvb3RSZWN0KTtcbiAgICAgICAgaWYgKGZyYW1lUmVjdCAmJiBmcmFtZUludGVyc2VjdCkge1xuICAgICAgICAgIHBhcmVudCA9IGZyYW1lO1xuICAgICAgICAgIHBhcmVudFJlY3QgPSBjb252ZXJ0RnJvbVBhcmVudFJlY3QoZnJhbWVSZWN0LCBmcmFtZUludGVyc2VjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICBpbnRlcnNlY3Rpb25SZWN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgIC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuICAgICAgLy8gTm90ZTogPGJvZHk+IGFuZCA8aHRtbD4gY2Fubm90IGJlIGNsaXBwZWQgdG8gYSByZWN0IHRoYXQncyBub3QgYWxzb1xuICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICB2YXIgZG9jID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAocGFyZW50ICE9IGRvYy5ib2R5ICYmXG4gICAgICAgICAgcGFyZW50ICE9IGRvYy5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICBwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJykge1xuICAgICAgICBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG4gICAgLy8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cbiAgICBpZiAocGFyZW50UmVjdCkge1xuICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpO1xuICAgIH1cbiAgICBpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrO1xuICAgIHBhcmVudCA9IHBhcmVudCAmJiBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvblJlY3Q7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdFJlY3Q7XG4gIGlmICh0aGlzLnJvb3QpIHtcbiAgICByb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICByb290UmVjdCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuICAgICAgd2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGJvdHRvbTogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICBoZWlnaHQ6IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdCk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHJlY3QgYW5kIGV4cGFuZHMgaXQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCBUaGUgcmVjdCBvYmplY3QgdG8gZXhwYW5kLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbiA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgdmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcbiAgICByZXR1cm4gbWFyZ2luLnVuaXQgPT0gJ3B4JyA/IG1hcmdpbi52YWx1ZSA6XG4gICAgICAgIG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkgLyAxMDA7XG4gIH0pO1xuICB2YXIgbmV3UmVjdCA9IHtcbiAgICB0b3A6IHJlY3QudG9wIC0gbWFyZ2luc1swXSxcbiAgICByaWdodDogcmVjdC5yaWdodCArIG1hcmdpbnNbMV0sXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG4gICAgbGVmdDogcmVjdC5sZWZ0IC0gbWFyZ2luc1szXVxuICB9O1xuICBuZXdSZWN0LndpZHRoID0gbmV3UmVjdC5yaWdodCAtIG5ld1JlY3QubGVmdDtcbiAgbmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wO1xuXG4gIHJldHVybiBuZXdSZWN0O1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gKiB0aHJlc2hvbGQgdmFsdWVzIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcGFyYW0gez9JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBvbGRFbnRyeSBUaGUgcHJldmlvdXMgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gKiBAcGFyYW0ge0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG5ld0VudHJ5IFRoZSBjdXJyZW50IGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID1cbiAgICBmdW5jdGlvbihvbGRFbnRyeSwgbmV3RW50cnkpIHtcblxuICAvLyBUbyBtYWtlIGNvbXBhcmluZyBlYXNpZXIsIGFuIGVudHJ5IHRoYXQgaGFzIGEgcmF0aW8gb2YgMFxuICAvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcbiAgdmFyIG9sZFJhdGlvID0gb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuICAgICAgb2xkRW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuICB2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZyA/XG4gICAgICBuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cbiAgLy8gSWdub3JlIHVuY2hhbmdlZCByYXRpb3NcbiAgaWYgKG9sZFJhdGlvID09PSBuZXdSYXRpbykgcmV0dXJuO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkc1tpXTtcblxuICAgIC8vIFJldHVybiB0cnVlIGlmIGFuIGVudHJ5IG1hdGNoZXMgYSB0aHJlc2hvbGQgb3IgaWYgdGhlIG5ldyByYXRpb1xuICAgIC8vIGFuZCB0aGUgb2xkIHJhdGlvIGFyZSBvbiB0aGUgb3Bwb3NpdGUgc2lkZXMgb2YgYSB0aHJlc2hvbGQuXG4gICAgaWYgKHRocmVzaG9sZCA9PSBvbGRSYXRpbyB8fCB0aHJlc2hvbGQgPT0gbmV3UmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkIDwgb2xkUmF0aW8gIT09IHRocmVzaG9sZCA8IG5ld1JhdGlvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290SXNJbkRvbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgcmV0dXJuIGNvbnRhaW5zRGVlcCh0aGlzLnJvb3QgfHwgZG9jdW1lbnQsIHRhcmdldCkgJiZcbiAgICAoIXRoaXMucm9vdCB8fCB0aGlzLnJvb3Qub3duZXJEb2N1bWVudCA9PSB0YXJnZXQub3duZXJEb2N1bWVudCk7XG59O1xuXG5cbi8qKlxuICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICogYWxyZWFkeSBwcmVzZW50LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChyZWdpc3RyeS5pbmRleE9mKHRoaXMpIDwgMCkge1xuICAgIHJlZ2lzdHJ5LnB1c2godGhpcyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBpbnN0YW5jZSBmcm9tIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VucmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT0gLTEpIHJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICogdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBBUEkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIHBhZ2Ugd2FzIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyAmJiBwZXJmb3JtYW5jZS5ub3coKTtcbn1cblxuXG4vKipcbiAqIFRocm90dGxlcyBhIGZ1bmN0aW9uIGFuZCBkZWxheXMgaXRzIGV4ZWN1dGlvbiwgc28gaXQncyBvbmx5IGNhbGxlZCBhdCBtb3N0XG4gKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgbXVzdCBwYXNzIGJlZm9yZSB0aGVcbiAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG4gIHZhciB0aW1lciA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmbigpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG4gIH07XG59XG5cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gbm9kZSBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIGFkZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gKiAgICAgcGhhc2UuIE5vdGU6IHRoaXMgb25seSB3b3JrcyBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgaWYgKHR5cGVvZiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcbiAgfVxufVxuXG5cbi8qKlxuICogUmVtb3ZlcyBhIHByZXZpb3VzbHkgYWRkZWQgZXZlbnQgaGFuZGxlciBmcm9tIGEgRE9NIG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlciBmcm9tLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBJZiB0aGUgZXZlbnQgaGFuZGxlciB3YXMgYWRkZWQgd2l0aCB0aGlzXG4gKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIG5vZGUuZGV0YXRjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLmRldGF0Y2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcbiAgfVxufVxuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MSBUaGUgZmlyc3QgcmVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MiBUaGUgc2Vjb25kIHJlY3QuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vIGludGVyc2VjdGlvblxuICogICAgIGlzIGZvdW5kLlxuICovXG5mdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgdmFyIHRvcCA9IE1hdGgubWF4KHJlY3QxLnRvcCwgcmVjdDIudG9wKTtcbiAgdmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKTtcbiAgdmFyIGxlZnQgPSBNYXRoLm1heChyZWN0MS5sZWZ0LCByZWN0Mi5sZWZ0KTtcbiAgdmFyIHJpZ2h0ID0gTWF0aC5taW4ocmVjdDEucmlnaHQsIHJlY3QyLnJpZ2h0KTtcbiAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gIHJldHVybiAod2lkdGggPj0gMCAmJiBoZWlnaHQgPj0gMCkgJiYge1xuICAgIHRvcDogdG9wLFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9IHx8IG51bGw7XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgdHJ5IHtcbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG4gIH1cblxuICBpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuICAvLyBPbGRlciBJRVxuICBpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0KSkge1xuICAgIHJlY3QgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0O1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcbn1cblxuXG4vKipcbiAqIEludmVydHMgdGhlIGludGVyc2VjdGlvbiBhbmQgYm91bmRpbmcgcmVjdCBmcm9tIHRoZSBwYXJlbnQgKGZyYW1lKSBCQ1IgdG9cbiAqIHRoZSBsb2NhbCBCQ1Igc3BhY2UuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyZW50Qm91bmRpbmdSZWN0IFRoZSBwYXJlbnQncyBib3VuZCBjbGllbnQgcmVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0IFRoZSBwYXJlbnQncyBvd24gaW50ZXJzZWN0aW9uIHJlY3QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBsb2NhbCByb290IGJvdW5kaW5nIHJlY3QgZm9yIHRoZSBwYXJlbnQncyBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY29udmVydEZyb21QYXJlbnRSZWN0KHBhcmVudEJvdW5kaW5nUmVjdCwgcGFyZW50SW50ZXJzZWN0aW9uUmVjdCkge1xuICB2YXIgdG9wID0gcGFyZW50SW50ZXJzZWN0aW9uUmVjdC50b3AgLSBwYXJlbnRCb3VuZGluZ1JlY3QudG9wO1xuICB2YXIgbGVmdCA9IHBhcmVudEludGVyc2VjdGlvblJlY3QubGVmdCAtIHBhcmVudEJvdW5kaW5nUmVjdC5sZWZ0O1xuICByZXR1cm4ge1xuICAgIHRvcDogdG9wLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgaGVpZ2h0OiBwYXJlbnRJbnRlcnNlY3Rpb25SZWN0LmhlaWdodCxcbiAgICB3aWR0aDogcGFyZW50SW50ZXJzZWN0aW9uUmVjdC53aWR0aCxcbiAgICBib3R0b206IHRvcCArIHBhcmVudEludGVyc2VjdGlvblJlY3QuaGVpZ2h0LFxuICAgIHJpZ2h0OiBsZWZ0ICsgcGFyZW50SW50ZXJzZWN0aW9uUmVjdC53aWR0aFxuICB9O1xufVxuXG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiBhIHBhcmVudCBlbGVtZW50IGNvbnRhaW5zIGEgY2hpbGQgZWxlbWVudCAoaW5jbHVkaW5nIGluc2lkZVxuICogc2hhZG93IERPTSkuXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQuXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIFRoZSBjaGlsZCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zRGVlcChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZTtcblxuICAgIG5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vKipcbiAqIEdldHMgdGhlIHBhcmVudCBub2RlIG9mIGFuIGVsZW1lbnQgb3IgaXRzIGhvc3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IG5vZGVcbiAqIGlzIGEgc2hhZG93IHJvb3QuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgd2hvc2UgcGFyZW50IHRvIGdldC5cbiAqIEByZXR1cm4ge05vZGV8bnVsbH0gVGhlIHBhcmVudCBub2RlIG9yIG51bGwgaWYgbm8gcGFyZW50IGV4aXN0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT0gLyogRE9DVU1FTlQgKi8gOSAmJiBub2RlICE9IGRvY3VtZW50KSB7XG4gICAgLy8gSWYgdGhpcyBub2RlIGlzIGEgZG9jdW1lbnQgbm9kZSwgbG9vayBmb3IgdGhlIGVtYmVkZGluZyBmcmFtZS5cbiAgICByZXR1cm4gZ2V0RnJhbWVFbGVtZW50KG5vZGUpO1xuICB9XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGEgc2hhZG93IHJvb3QsIHJldHVybiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIHJldHVybiBwYXJlbnQuaG9zdDtcbiAgfVxuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgZGlzdHJpYnV0ZWQgaW4gYSA8c2xvdD4sIHJldHVybiB0aGUgcGFyZW50IG9mIGEgc2xvdC5cbiAgICByZXR1cm4gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGVtYmVkZGluZyBmcmFtZSBlbGVtZW50LCBpZiBhbnkuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jXG4gKiBAcmV0dXJuIHshRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0RnJhbWVFbGVtZW50KGRvYykge1xuICB0cnkge1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgJiYgZG9jLmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudCB8fCBudWxsO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlcnJvci5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbi8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9IEludGVyc2VjdGlvbk9ic2VydmVyO1xud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5O1xuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==