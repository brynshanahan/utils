interface Observer<T> {
    next: Listener<T>;
    complete?: Listener;
    error?: Listener<Error>;
}
declare type Listener<T = any> = (value: T) => any;
declare type Cleanup = () => any;
interface Dict<T> {
    [key: string]: T;
}
export interface ListenerGroup {
    next: Dict<Listener>;
    error: Dict<Listener>;
    complete: Dict<Listener>;
}
declare class Observable<T = any> {
    private index;
    private streamSource;
    private subscribed;
    private activeListeners;
    private unsubscribeFromSource;
    private listeners;
    private cancels;
    constructor(source: Observable['streamSource']);
    private getKey;
    emit(key: 'next' | 'error' | 'complete', val?: T | Error): void;
    next(value: T): void;
    error(error: Error): void;
    complete(): void;
    destroy(): void;
    onDestroy(fn: Cleanup): void;
    cleanup(): void;
    subscribe(fnOrObserver: Listener<T> | Observer<T>): {
        unsubscribe: () => void;
        observer: Observer<T>;
    } | {
        unsubscribe: () => void;
        observer: Listener<T>;
    };
}
export declare class BehaviourSubject<T = any> extends Observable<T> {
    lastNext: T;
    next(value: T): void;
    subscribe(fnOrObserver: Listener<T> | Observer<T>): {
        unsubscribe: () => void;
        observer: Observer<T>;
    } | {
        unsubscribe: () => void;
        observer: Listener<T>;
    };
}
export declare class ChannelledObservable<C = any, V = any> {
    private index;
    private streamSource;
    private subscribed;
    private activeListeners;
    private unsubscribeFromSource;
    channels: Map<C, ListenerGroup>;
    private cancels;
    constructor(source: ChannelledObservable['streamSource']);
    private getKey;
    emit(channel: C, key: 'next' | 'error' | 'complete', val?: V | Error): void;
    next(channel: C, value: V): void;
    error(channel: C, error: Error): void;
    complete(channel: C): void;
    destroy(): void;
    onDestroy(fn: Cleanup): void;
    cleanup(channel: C): void;
    subscribe(channelKey: C, fnOrObserver: Listener<V> | Observer<V>): {
        unsubscribe: () => void;
        observer: Observer<V>;
    } | {
        unsubscribe: () => void;
        observer: Listener<unknown>;
    };
}
export default Observable;
//# sourceMappingURL=observable.d.ts.map