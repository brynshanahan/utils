var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/* Doesn't affect the real dom when being appended to */
import { is } from "./is";
var TempNode = /** @class */ (function () {
    function TempNode(element) {
        this.nodeList = new Set(__spread(element.children));
        this.element = element;
        var _loop_1 = function (prop) {
            if (typeof this_1[prop] === "undefined") {
                Object.defineProperty(this_1, prop, {
                    get: function () {
                        return element[prop];
                    },
                    set: function (value) {
                        return (element[prop] = value);
                    }
                });
            }
        };
        var this_1 = this;
        for (var prop in element) {
            _loop_1(prop);
        }
    }
    Object.defineProperty(TempNode.prototype, "innerHTML", {
        get: function () {
            var e_1, _a;
            var result = "";
            try {
                for (var _b = __values(this.nodeList), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    result += is.element(child) ? child.innerHTML : child.textContent;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TempNode.prototype, "textContent", {
        get: function () {
            var e_2, _a;
            var result = "";
            try {
                for (var _b = __values(this.nodeList), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    result += child.textContent;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    TempNode.prototype.querySelector = function (query) {
        var e_3, _a;
        try {
            for (var _b = __values(this.nodeList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                var result = child.querySelector(query);
                if (result)
                    return result;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return null;
    };
    TempNode.prototype.querySelectorAll = function (query) {
        var e_4, _a;
        var children = [];
        try {
            for (var _b = __values(this.nodeList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                children.push.apply(children, __spread(child.querySelectorAll(query)));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return children;
    };
    TempNode.prototype.appendChild = function (node) {
        this.nodeList.add(node);
    };
    TempNode.prototype.append = function (node) {
        this.nodeList.add(node);
    };
    TempNode.prototype.appendTo = function (node) {
        var e_5, _a;
        try {
            for (var _b = __values(this.nodeList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.element.appendChild(child);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        node.appendChild(this.element);
    };
    return TempNode;
}());
export default TempNode;
//# sourceMappingURL=temp-node.js.map