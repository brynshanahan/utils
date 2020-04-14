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
import Subject from './subject';
export var allChanges = 'all_changes' + Math.random().toFixed(4);
var Stateful = /** @class */ (function (_super) {
    __extends(Stateful, _super);
    function Stateful(initialState) {
        if (initialState === void 0) { initialState = {}; }
        var _this = _super.call(this) || this;
        _this.state = clone(initialState || {});
        _this.initialState = initialState;
        _this.isFirstChange = true;
        _this.hasChanged = [];
        _this.setState = _this.setState.bind(_this);
        _this.changed = _this.changed.bind(_this);
        _this.listen = _this.listen.bind(_this);
        return _this;
    }
    Stateful.prototype.setState = function (stateOrFn) {
        var e_1, _a;
        var _this = this;
        // You can pass a function that returns state or a plain object
        var prevState = clone(this.state);
        var recievedState = typeof stateOrFn === 'function' ? stateOrFn(this.state) : stateOrFn;
        // Only get keys which have changed
        var changedKeys = Object.keys(recievedState).filter(function (key) { return recievedState[key] !== prevState[key]; });
        if (!changedKeys.length)
            return;
        // Merge this.state with the recievedState
        var currentState = clone(this.state, recievedState);
        this.state = currentState;
        var update = {
            prevState: prevState,
            currentState: currentState,
            recievedState: recievedState,
            state: currentState,
            self: this,
            currentChanges: changedKeys,
            changed: changedKeys,
            isFirstChange: this.isFirstChange
        };
        // This emits changes for listeners that are listening without a key
        // eg this.changed(() => { ...something changed }) || this.changed('myKey', () => { ...mykey changed })
        this.emit(allChanges, update);
        try {
            // Emit events for all the keys in changedKeys
            for (var changedKeys_1 = __values(changedKeys), changedKeys_1_1 = changedKeys_1.next(); !changedKeys_1_1.done; changedKeys_1_1 = changedKeys_1.next()) {
                var key = changedKeys_1_1.value;
                var changeForKey = clone(update, { isFirstChange: !this.hasChanged.includes(key) });
                this.emit(key, changeForKey);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (changedKeys_1_1 && !changedKeys_1_1.done && (_a = changedKeys_1.return)) _a.call(changedKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // No longer the first change
        if (changedKeys.length && this.isFirstChange) {
            this.isFirstChange = false;
        }
        // Add changed keys to hasChanged
        this.hasChanged = __spread(this.hasChanged, changedKeys.filter(function (x) { return !_this.hasChanged.includes(x); }));
    };
    Stateful.prototype.changed = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // On is inherited from Subject
        if (args.length === 2) {
            return this.on(args[0], args[1]);
        }
        else {
            return this.on(allChanges, args[0]);
        }
    };
    // Alias for this.changed(() => {})
    Stateful.prototype.listen = function (fn) {
        return this.on(allChanges, fn);
    };
    return Stateful;
}(Subject));
export default Stateful;
function clone(objs) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, __spread([{}, objs], rest));
}
//# sourceMappingURL=stateful.js.map