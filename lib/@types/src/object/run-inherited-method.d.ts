export declare function runInheritedMethod<T extends {}, K extends keyof T>(instance: T, key: K, ...args: T[K] extends (...args: any) => any ? Parameters<T[K]> : []): any;
export declare function getInheritedMethod<T extends {}, K extends keyof T, V = T[K]>(instance: T, key: K): any;
export declare function runIfDifferent<Args extends []>(fnA: (...args: Args) => any | undefined, fnB: (...args: Args) => any | undefined, thisArg: any, ...args: Args): [any, any];
//# sourceMappingURL=run-inherited-method.d.ts.map