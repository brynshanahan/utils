var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChannelledObservable } from '../reactive/observable';
export function createResizeObservable() {
    const observable = new ChannelledObservable(({ next, error, complete }) => {
        /* Entries is an array of entries for every element that changed */
        let disconnected = false;
        let started = false;
        let source;
        let getSource = () => __awaiter(this, void 0, void 0, function* () {
            const ResizeObserver = window.ResizeObserver ||
                (yield import('@juggle/resize-observer')).ResizeObserver;
            if (disconnected)
                return;
            started = true;
            return new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    /* Get the callback for the specific element */
                    next(entry.target, entry);
                });
            });
        });
        source = getSource().then((r) => {
            source = r;
            return r;
        });
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
//# sourceMappingURL=create-resize-observable.js.map