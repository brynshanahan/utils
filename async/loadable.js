var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import Subject from '../reactive/subject';
var Loadable = /** @class */ (function (_super) {
    __extends(Loadable, _super);
    function Loadable(resources, timeout) {
        var e_1, _a;
        if (timeout === void 0) { timeout = 0; }
        var _this = _super.call(this) || this;
        _this.start = Date.now();
        _this.complete = false;
        _this.promises = resources;
        _this.loaded = 0;
        try {
            for (var _b = __values(_this.promises), _c = _b.next(); !_c.done; _c = _b.next()) {
                var promise = _c.value;
                promise.then(function (arg) {
                    _this.loaded++;
                    _this.emitProgress();
                    return arg;
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (timeout) {
            _this.timeout = setTimeout(function () {
                _this.emitComplete();
            }, timeout);
        }
        return _this;
    }
    Loadable.prototype.finished = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.complete) {
                resolve();
            }
            else {
                _this.once('complete', function (update) {
                    resolve();
                });
            }
        });
    };
    Loadable.prototype.emitComplete = function () {
        if (this.complete)
            return;
        this.complete = true;
        this.emit('complete', {
            percent: 1,
            start: this.start,
            time: Date.now() - this.start,
        });
    };
    Loadable.prototype.emitProgress = function () {
        var update = {
            percent: this.loaded / this.promises.length,
            start: this.start,
            time: Date.now() - this.start,
        };
        this.emit('progress', update);
        if (update.percent === 1) {
            this.emitComplete();
        }
    };
    return Loadable;
}(Subject));
export { Loadable };
//# sourceMappingURL=loadable.js.map