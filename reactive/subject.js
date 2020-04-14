var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
// const Symbol = str => str + '_' + (Math.random() * 10).toFixed(3)
var subject = Symbol("subject");
var Subject = /** @class */ (function () {
    function Subject() {
        this[subject] = {
            index: 0,
            listeners: {},
            cancels: {},
            key: function () {
                return "listener_" + this[subject].index++;
            }
        };
        // Bind all the methods
        this.on = this.on.bind(this);
        this[subject].key = this[subject].key.bind(this);
        this.emit = this.emit.bind(this);
        this.once = this.once.bind(this);
        this.destroy = this.destroy.bind(this);
    }
    /* Listen to  */
    Subject.prototype.on = function (nameOrCallback, fn) {
        var e_1, _a;
        var _this = this;
        var name = nameOrCallback;
        var callback = fn;
        if (!fn && typeof nameOrCallback === "function") {
            callback = nameOrCallback;
            /* Listen to all events */
            name = subject;
        }
        // Every event listener is given it's own key
        var key = this[subject].key();
        var eventNames = typeof name === "string" ? name.split(" ") : [name];
        try {
            for (var eventNames_1 = __values(eventNames), eventNames_1_1 = eventNames_1.next(); !eventNames_1_1.done; eventNames_1_1 = eventNames_1.next()) {
                var eventName = eventNames_1_1.value;
                // If this is the first listener of type eventName then listeners[eventName] will be empty
                if (!this[subject].listeners[eventName])
                    this[subject].listeners[eventName] = {};
                // Add the listener to the listener object
                this[subject].listeners[eventName][key] = callback;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (eventNames_1_1 && !eventNames_1_1.done && (_a = eventNames_1.return)) _a.call(eventNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Cancel function deletes the listener and itself from Subject
        var cancelled = false;
        var cancels = function () {
            var e_2, _a;
            if (cancelled)
                return;
            cancels = function () { };
            cancelled = true;
            try {
                for (var eventNames_2 = __values(eventNames), eventNames_2_1 = eventNames_2.next(); !eventNames_2_1.done; eventNames_2_1 = eventNames_2.next()) {
                    var eventName = eventNames_2_1.value;
                    delete _this[subject].listeners[eventName][key];
                    delete _this[subject].cancels[key];
                    if (!Object.keys(_this[subject].listeners[eventName]).length) {
                        delete _this[subject].listeners[eventName];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (eventNames_2_1 && !eventNames_2_1.done && (_a = eventNames_2.return)) _a.call(eventNames_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        // Add cancel to the subject array
        this[subject].cancels[key] = cancels;
        // Return the event diposer
        return cancels;
    };
    Subject.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // @ts-ignore
        if (name !== subject) {
            // @ts-ignore
            this.emit.apply(this, __spread([subject], args));
        }
        // If this even is in the listeners object
        if (this[subject].listeners[name]) {
            return Object.values(this[subject].listeners[name]).map(function (fn) { return fn.apply(void 0, __spread(args)); });
        }
    };
    Subject.prototype.getHandlers = function (name) {
        var _this = this;
        return {
            get: function () {
                var handlers = [];
                for (var key in _this[subject].listeners[name]) {
                    handlers.push(_this[subject].listeners[name][key]);
                }
                return handlers;
            },
            map: function (fn) {
                var results = [];
                for (var key in _this[subject].listeners[name]) {
                    var handler = _this[subject].listeners[name][key];
                    results.push(fn(handler, key));
                }
                return results;
            },
            forEach: function (fn) {
                for (var key in _this[subject].listeners[name]) {
                    var handler = _this[subject].listeners[name][key];
                    fn(handler, key);
                }
            },
            reduce: function (fn, val) {
                var prev = val;
                for (var key in _this[subject].listeners[name]) {
                    var handler = _this[subject].listeners[name][key];
                    prev = fn(prev, handler, key);
                }
            }
        };
    };
    Subject.prototype.reduce = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = __read(args), value = _a[0], rest = _a.slice(1);
        var prev;
        if (this[subject].listeners[name]) {
            return this.getHandlers(name).reduce(function (memo, fn) {
                var v = fn.apply(void 0, __spread([memo], rest));
                if (typeof v !== "undefined") {
                    prev = v;
                    return v;
                }
                else {
                    return prev;
                }
            }, value);
        }
        return value;
    };
    Subject.prototype.asyncReduce = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, value, rest, prev;
            return __generator(this, function (_b) {
                _a = __read(args), value = _a[0], rest = _a.slice(1);
                if (this[subject].listeners[name]) {
                    return [2 /*return*/, Object.values(this[subject].listeners[name]).reduce(function (last, fn) {
                            var v = fn.apply(void 0, __spread([last], rest));
                            if (typeof v !== "undefined") {
                                last = v;
                                return v;
                            }
                            return last;
                        }, value)];
                }
                return [2 /*return*/, value];
            });
        });
    };
    Subject.prototype.add = function (eventName, fn) {
        return this.on(eventName, fn);
    };
    Subject.prototype.once = function (name, fn) {
        // Use var to hoist variable (not sure if needed)
        var cancel = this.on(name, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (cancel)
                cancel();
            fn.apply(void 0, __spread(args));
        });
    };
    Subject.prototype.destroy = function () {
        Object.values(this[subject].cancels).forEach(function (fn) { return fn(); });
    };
    return Subject;
}());
export default Subject;
//# sourceMappingURL=subject.js.map