var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/* Intersection observer polyfill for IE */
import { ChannelledObservable } from '../reactive/observable';
var CustomIntersectionObserverEntry = /** @class */ (function () {
    function CustomIntersectionObserverEntry(entry, winHeight) {
        if (winHeight === void 0) { winHeight = window.innerHeight; }
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRatio = entry.intersectionRatio;
        this.intersectionRect = entry.intersectionRect;
        this.isIntersecting = entry.isIntersecting;
        this.rootBounds = entry.rootBounds;
        this.target = entry.target;
        this.time = entry.time;
        this.isCompletelyInView = entry.intersectionRatio === 1;
        this.isAbove =
            entry.intersectionRatio < 1 ? entry.boundingClientRect.top < 0 : false;
        this.isBelow =
            entry.intersectionRatio < 1
                ? entry.boundingClientRect.bottom > winHeight
                : false;
    }
    return CustomIntersectionObserverEntry;
}());
export { CustomIntersectionObserverEntry };
export function createIntersectionObservable(root, opts) {
    if (root === void 0) { root = window; }
    if (opts === void 0) { opts = {}; }
    var observable = new ChannelledObservable(function (_a) {
        var next = _a.next, error = _a.error, complete = _a.complete;
        /* Intersection observer targets the window by default */
        var options = __assign({}, opts);
        /* If root isnt the window set it to be the intersection observer root */
        if (isElement(root)) {
            options.root = root;
        }
        var disconnected = false;
        var started = false;
        var source;
        function getSource() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!window.IntersectionObserver) return [3 /*break*/, 2];
                            return [4 /*yield*/, import('intersection-observer')];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (disconnected)
                                return [2 /*return*/];
                            started = true;
                            return [2 /*return*/, new IntersectionObserver(function (entries) {
                                    var winHeight = window.innerHeight;
                                    entries.forEach(function (entry) {
                                        var customEntry = new CustomIntersectionObserverEntry(entry, winHeight);
                                        /* Get the callback for the specific element */
                                        next(entry.target, customEntry);
                                    });
                                }, options)];
                    }
                });
            });
        }
        source = getSource().then(function (r) {
            source = r;
            return r;
        });
        /* Entries is an array of entries for every element that changed */
        return {
            onSubscribe: function (channel) {
                return __awaiter(this, void 0, void 0, function () {
                    var src;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, source];
                            case 1:
                                src = _a.sent();
                                src.observe(channel);
                                return [2 /*return*/];
                        }
                    });
                });
            },
            onUnsubscribe: function (channel) {
                return __awaiter(this, void 0, void 0, function () {
                    var src;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, source];
                            case 1:
                                src = _a.sent();
                                src.unobserve(channel);
                                return [2 /*return*/];
                        }
                    });
                });
            },
            destroy: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var src;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                disconnected = true;
                                if (!started) return [3 /*break*/, 2];
                                return [4 /*yield*/, source];
                            case 1:
                                src = _a.sent();
                                src.disconnect();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            },
        };
    });
    return observable;
}
function isElement(arg) {
    return arg && arg !== window;
}
//# sourceMappingURL=create-intersection-observable.js.map