/*
Shortcut around calling `super.method()` inside client code
*/
export function runInheritedMethod(instance, key, ...args) {
    const proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));
    return proto[key].apply(instance, args);
}
export function getInheritedMethod(instance, key) {
    const proto = Object.getPrototypeOf(Object.getPrototypeOf(instance));
    return typeof proto[key] === 'function' ? proto[key] : undefined;
}
export function runIfDifferent(fnA, fnB, thisArg, ...args) {
    // console.log(fnA, '->', fnB, fnA === fnB)
    let results = [
        typeof fnA === 'function' ? fnA.apply(thisArg, args) : undefined,
        typeof fnB === 'function' && fnA !== fnB
            ? fnB.apply(thisArg, args)
            : undefined
    ];
    return results;
}
//# sourceMappingURL=run-inherited-method.js.map