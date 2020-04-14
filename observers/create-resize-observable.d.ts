import { ResizeObserver as Polyfill } from '@juggle/resize-observer';
import { ChannelledObservable } from '../reactive/observable';
declare global {
    interface Window {
        ResizeObserver: typeof Polyfill;
    }
}
export declare function createResizeObservable(): ChannelledObservable<Element, Polyfill>;
//# sourceMappingURL=create-resize-observable.d.ts.map