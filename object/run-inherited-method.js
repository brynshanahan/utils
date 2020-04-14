/*
Shortcut around calling `super.method()` inside client code
*/
export function runInheritedMethod(instance, key) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));
    return proto[key].apply(instance, args);
}
export function getInheritedMethod(instance, key) {
    var proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));
    return typeof proto[key] === 'function' ? proto[key] : undefined;
}
export function runIfDifferent(fnA, fnB, thisArg) {
    // console.log(fnA, '->', fnB, fnA === fnB)
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var results = [
        typeof fnA === 'function' ? fnA.apply(thisArg, args) : undefined,
        typeof fnB === 'function' && fnA !== fnB
            ? fnB.apply(thisArg, args)
            : undefined
    ];
    return results;
}
//# sourceMappingURL=run-inherited-method.js.map