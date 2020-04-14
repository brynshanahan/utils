import { ChannelledObservable } from '../reactive/observable';
export declare function createMutationObservable(config?: MutationObserverInit): ChannelledObservable<Element, {
    new (callback: MutationCallback): MutationObserver;
    prototype: MutationObserver;
}>;
//# sourceMappingURL=create-mutation-observer.d.ts.map