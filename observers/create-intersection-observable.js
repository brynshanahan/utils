var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Intersection observer polyfill for IE */
import { ChannelledObservable } from '../reactive/observable';
export class CustomIntersectionObserverEntry {
    constructor(entry, winHeight = window.innerHeight) {
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRatio = entry.intersectionRatio;
        this.intersectionRect = entry.intersectionRect;
        this.isIntersecting = entry.isIntersecting;
        this.rootBounds = entry.rootBounds;
        this.target = entry.target;
        this.time = entry.time;
        this.isCompletelyInView = entry.intersectionRatio === 1;
        this.isAbove =
            entry.intersectionRatio < 1 ? entry.boundingClientRect.top < 0 : false;
        this.isBelow =
            entry.intersectionRatio < 1
                ? entry.boundingClientRect.bottom > winHeight
                : false;
    }
}
export function createIntersectionObservable(root = window, opts = {}) {
    const observable = new ChannelledObservable(({ next, error, complete }) => {
        /* Intersection observer targets the window by default */
        const options = Object.assign({}, opts);
        /* If root isnt the window set it to be the intersection observer root */
        if (isElement(root)) {
            options.root = root;
        }
        let disconnected = false;
        let started = false;
        let source;
        function getSource() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!window.IntersectionObserver) {
                    yield import('intersection-observer');
                }
                if (disconnected)
                    return;
                started = true;
                return new IntersectionObserver((entries) => {
                    const winHeight = window.innerHeight;
                    entries.forEach((entry) => {
                        const customEntry = new CustomIntersectionObserverEntry(entry, winHeight);
                        /* Get the callback for the specific element */
                        next(entry.target, customEntry);
                    });
                }, options);
            });
        }
        source = getSource().then((r) => {
            source = r;
            return r;
        });
        /* Entries is an array of entries for every element that changed */
        return {
            onSubscribe(channel) {
                return __awaiter(this, void 0, void 0, function* () {
                    let src = yield source;
                    src.observe(channel);
                });
            },
            onUnsubscribe(channel) {
                return __awaiter(this, void 0, void 0, function* () {
                    let src = yield source;
                    src.unobserve(channel);
                });
            },
            destroy() {
                return __awaiter(this, void 0, void 0, function* () {
                    disconnected = true;
                    if (started) {
                        let src = yield source;
                        src.disconnect();
                    }
                });
            },
        };
    });
    return observable;
}
function isElement(arg) {
    return arg && arg !== window;
}
//# sourceMappingURL=create-intersection-observable.js.map