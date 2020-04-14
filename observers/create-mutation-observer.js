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
/* Intersection observer polyfill for IE */
import { ChannelledObservable } from '../reactive/observable';
export function createMutationObservable(config) {
    if (config === void 0) { config = {
        characterData: false,
        attributes: true,
        childList: true,
    }; }
    var observable = new ChannelledObservable(function (_a) {
        var next = _a.next;
        var sources = new Map();
        return {
            onSubscribe: function (channel) {
                var observer = new MutationObserver(function (mutations) {
                    return next(channel, mutations);
                });
                sources.set(channel, observer);
                observer.observe(channel, config);
            },
            onUnsubscribe: function (channel) {
                var observer = sources.get(channel);
                observer.disconnect();
            },
            destroy: function () {
                var e_1, _a;
                try {
                    for (var _b = __values(sources.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var source = _c.value;
                        source.disconnect();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                sources = new Map();
            },
        };
    });
    return observable;
}
//# sourceMappingURL=create-mutation-observer.js.map