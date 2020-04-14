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
function runActions(targets, actions) {
    var e_1, _a, e_2, _b;
    var result = undefined;
    try {
        for (var targets_1 = __values(targets), targets_1_1 = targets_1.next(); !targets_1_1.done; targets_1_1 = targets_1.next()) {
            var target = targets_1_1.value;
            var prev = void 0;
            var t = target;
            try {
                for (var actions_1 = (e_2 = void 0, __values(actions)), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    if (action.get) {
                        prev = t;
                        t = t[action.get];
                    }
                    else if (action.set) {
                        result = t[action.set[0]] = action.set[1];
                    }
                    else if (action.apply) {
                        var _c = __read(action.apply, 1), args = _c[0];
                        if (!result) {
                            result = t.apply(prev, [args]);
                        }
                        else {
                            t.apply(prev, [args]);
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_b = actions_1.return)) _b.call(actions_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (targets_1_1 && !targets_1_1.done && (_a = targets_1.return)) _a.call(targets_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function createProxyNode(elements) {
    var targetElement = elements[0];
    var proxies = [];
    function createProxy(obj, actions) {
        if (actions === void 0) { actions = []; }
        var prox = new Proxy(obj, {
            get: function (target, prop) {
                var val = target[prop];
                if (typeof val === 'object' || typeof val === 'function') {
                    return createProxy(val, __spread(actions, [{ get: prop }]));
                }
                return val;
            },
            set: function (target, prop, value) {
                actions.push({ set: [prop, value] });
                runActions(elements, actions);
            },
            apply: function (target, thisArg, argumentsList) {
                actions.push({ apply: argumentsList });
                return runActions(elements, actions);
            }
        });
        proxies.push(prox);
        return prox;
    }
    return createProxy(targetElement);
}
//# sourceMappingURL=proxy-node.js.map