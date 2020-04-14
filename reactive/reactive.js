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
var all = Symbol('all');
export default function reactive(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var state = initialState;
    var subject = new Subject();
    var target = new Proxy(function () { }, {
        get: function (target, prop) {
            if (prop === 'toJSON')
                return function () { return state; };
            return state[prop];
        },
        set: function (target, prop, value) {
            var prev = state[prop];
            state[prop] = value;
            if (prev !== value) {
                subject.emit(all, state, prop, prev);
                subject.emit(prop, state, prop, prev);
            }
            return true;
        },
        apply: function (target, self, args) {
            args.find(function (f) { return typeof f === 'function'; })(state);
            return subject.on.apply(subject, __spread(args));
        }
    });
    return target;
}
//# sourceMappingURL=reactive.js.map