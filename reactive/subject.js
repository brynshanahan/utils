var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const Symbol = str => str + '_' + (Math.random() * 10).toFixed(3)
const subject = Symbol("subject");
export default class Subject {
    constructor() {
        this[subject] = {
            index: 0,
            listeners: {},
            cancels: {},
            key() {
                return `listener_${this[subject].index++}`;
            }
        };
        // Bind all the methods
        this.on = this.on.bind(this);
        this[subject].key = this[subject].key.bind(this);
        this.emit = this.emit.bind(this);
        this.once = this.once.bind(this);
        this.destroy = this.destroy.bind(this);
    }
    /* Listen to  */
    on(nameOrCallback, fn) {
        let name = nameOrCallback;
        let callback = fn;
        if (!fn && typeof nameOrCallback === "function") {
            callback = nameOrCallback;
            /* Listen to all events */
            name = subject;
        }
        // Every event listener is given it's own key
        const key = this[subject].key();
        const eventNames = typeof name === "string" ? name.split(" ") : [name];
        for (const eventName of eventNames) {
            // If this is the first listener of type eventName then listeners[eventName] will be empty
            if (!this[subject].listeners[eventName])
                this[subject].listeners[eventName] = {};
            // Add the listener to the listener object
            this[subject].listeners[eventName][key] = callback;
        }
        // Cancel function deletes the listener and itself from Subject
        let cancelled = false;
        let cancels = () => {
            if (cancelled)
                return;
            cancels = () => { };
            cancelled = true;
            for (const eventName of eventNames) {
                delete this[subject].listeners[eventName][key];
                delete this[subject].cancels[key];
                if (!Object.keys(this[subject].listeners[eventName]).length) {
                    delete this[subject].listeners[eventName];
                }
            }
        };
        // Add cancel to the subject array
        this[subject].cancels[key] = cancels;
        // Return the event diposer
        return cancels;
    }
    emit(name, ...args) {
        // @ts-ignore
        if (name !== subject) {
            // @ts-ignore
            this.emit(subject, ...args);
        }
        // If this even is in the listeners object
        if (this[subject].listeners[name]) {
            return Object.values(this[subject].listeners[name]).map(fn => fn(...args));
        }
    }
    getHandlers(name) {
        return {
            get: () => {
                const handlers = [];
                for (const key in this[subject].listeners[name]) {
                    handlers.push(this[subject].listeners[name][key]);
                }
                return handlers;
            },
            map: (fn) => {
                const results = [];
                for (const key in this[subject].listeners[name]) {
                    const handler = this[subject].listeners[name][key];
                    results.push(fn(handler, key));
                }
                return results;
            },
            forEach: (fn) => {
                for (const key in this[subject].listeners[name]) {
                    const handler = this[subject].listeners[name][key];
                    fn(handler, key);
                }
            },
            reduce: (fn, val) => {
                let prev = val;
                for (const key in this[subject].listeners[name]) {
                    const handler = this[subject].listeners[name][key];
                    prev = fn(prev, handler, key);
                }
            }
        };
    }
    reduce(name, ...args) {
        const [value, ...rest] = args;
        let prev;
        if (this[subject].listeners[name]) {
            return this.getHandlers(name).reduce((memo, fn) => {
                const v = fn(memo, ...rest);
                if (typeof v !== "undefined") {
                    prev = v;
                    return v;
                }
                else {
                    return prev;
                }
            }, value);
        }
        return value;
    }
    asyncReduce(name, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [value, ...rest] = args;
            let prev;
            if (this[subject].listeners[name]) {
                return Object.values(this[subject].listeners[name]).reduce((last, fn) => {
                    const v = fn(last, ...rest);
                    if (typeof v !== "undefined") {
                        last = v;
                        return v;
                    }
                    return last;
                }, value);
            }
            return value;
        });
    }
    add(eventName, fn) {
        return this.on(eventName, fn);
    }
    once(name, fn) {
        // Use var to hoist variable (not sure if needed)
        var cancel = this.on(name, (...args) => {
            if (cancel)
                cancel();
            fn(...args);
        });
    }
    destroy() {
        Object.values(this[subject].cancels).forEach(fn => fn());
    }
}
//# sourceMappingURL=subject.js.map