import { ChannelledObservable } from '../reactive/observable';
export declare class CustomIntersectionObserverEntry implements IntersectionObserverEntry {
    isAbove: boolean;
    isBelow: boolean;
    isCompletelyInView: boolean;
    boundingClientRect: DOMRectReadOnly;
    intersectionRatio: number;
    intersectionRect: DOMRectReadOnly;
    isIntersecting: boolean;
    rootBounds: DOMRectReadOnly | null;
    target: Element;
    time: number;
    constructor(entry: IntersectionObserverEntry, winHeight?: number);
}
export declare function createIntersectionObservable(root?: Window | Element, opts?: IntersectionObserverInit): ChannelledObservable<Element, CustomIntersectionObserverEntry>;
//# sourceMappingURL=create-intersection-observable.d.ts.map