declare const subject: unique symbol;
declare type Callback<Args extends [] = any[], Result = any> = (...args: Args) => Result;
declare type SubjectProperties<Types> = {
    index: number;
    listeners: {
        [k in keyof Types]: {
            [l: string]: Callback<Types[k]>;
        };
    };
    cancels: {
        [k: string]: Callback;
    };
    key: () => string;
};
export default class Subject<EventTypes = {
    [key: string]: Array<any>;
}> {
    [subject]: SubjectProperties<EventTypes>;
    on<Key extends keyof EventTypes>(nameOrCallback: Key | Callback, fn?: Callback<EventTypes[Key]>): () => void;
    emit<T extends keyof EventTypes>(name: T, ...args: EventTypes[T]): any[];
    getHandlers<T extends keyof EventTypes>(name: T): {
        get: () => Callback<EventTypes[T], any>[];
        map: (fn: Callback<[Callback<EventTypes[T], any>, string?], any>) => any[];
        forEach: (fn: Callback<[Callback<EventTypes[T], any>, string?], any>) => void;
        reduce: (fn: Callback<[EventTypes[T][0], Callback<EventTypes[T], any>, string?], any>, val?: EventTypes[T][0]) => void;
    };
    reduce<T extends keyof EventTypes>(name: T, ...args: EventTypes[T]): EventTypes[T][0];
    asyncReduce<T extends keyof EventTypes>(name: T, ...args: EventTypes[T]): EventTypes[T][0];
    add<T extends keyof EventTypes>(eventName: T, fn: Callback<EventTypes[T]>): () => void;
    once<T extends keyof EventTypes>(name: T, fn: Callback<EventTypes[T]>): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=subject.d.ts.map