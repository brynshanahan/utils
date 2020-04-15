class Observable {
    constructor(source) {
        this.index = 0;
        this.subscribed = false;
        this.activeListeners = 0;
        this.unsubscribeFromSource = () => { };
        this.listeners = {
            next: {},
            error: {},
            complete: {}
        };
        this.cancels = {};
        this.streamSource = source;
        this.next = this.next.bind(this);
        this.complete = this.complete.bind(this);
        this.error = this.error.bind(this);
    }
    getKey() {
        return 'k' + this.index++;
    }
    emit(key, val) {
        for (const k in this.listeners[key]) {
            this.listeners[key][k](val);
        }
    }
    /* Emit the next value */
    next(value) {
        this.emit('next', value);
    }
    error(error) {
        this.emit('error', error);
    }
    /* Emit an end event to everything */
    complete() {
        this.emit('complete');
        this.destroy();
    }
    destroy() {
        for (const k in this.cancels) {
            this.cancels[k]();
        }
    }
    onDestroy(fn) {
        const key = this.getKey();
        this.cancels[key] = () => {
            delete this.cancels[key];
            fn();
        };
    }
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */
    cleanup() {
        if (!this.activeListeners) {
            this.unsubscribeFromSource();
        }
    }
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */
    subscribe(fnOrObserver) {
        if (!this.subscribed) {
            this.unsubscribeFromSource = this.streamSource(this);
            this.subscribed = true;
        }
        const key = this.getKey();
        if (isObserver(fnOrObserver)) {
            const objKeys = Object.keys(fnOrObserver);
            this.activeListeners += 1;
            objKeys.forEach(objKey => {
                this.listeners[objKey][key] = fnOrObserver[objKey];
            });
            const cancel = () => {
                this.activeListeners -= 1;
                objKeys.forEach(objKey => {
                    delete this.listeners[objKey][key];
                });
                delete this.cancels[key];
                this.cleanup();
            };
            this.cancels[key] = cancel;
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
        else {
            this.listeners.next[key] = fnOrObserver;
            this.activeListeners += 1;
            const cancel = () => {
                this.activeListeners -= 1;
                delete this.listeners.next[key];
                delete this.cancels[key];
                this.cleanup();
            };
            this.cancels[key];
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
    }
}
function isObserver(obj) {
    if (typeof obj === 'object' && obj.next) {
        return true;
    }
}
function isListener(fn) {
    if (typeof fn === 'function') {
        return true;
    }
}
/* Same as regular observable except it always emits the last value */
export class BehaviourSubject extends Observable {
    next(value) {
        this.emit('next', value);
        this.lastNext = value;
    }
    /* Very similar to observable except it sends the most recent value on subscribe */
    subscribe(fnOrObserver) {
        const observer = super.subscribe(fnOrObserver);
        if (isObserver(observer.observer)) {
            observer.observer.next(this.lastNext);
        }
        else if (isListener(fnOrObserver)) {
            fnOrObserver(this.lastNext);
        }
        return observer;
    }
}
function isChannelAPI(arg) {
    return Boolean(arg.destroy);
}
export class ChannelledObservable {
    constructor(source) {
        this.index = 0;
        this.subscribed = false;
        this.activeListeners = 0;
        this.unsubscribeFromSource = () => { };
        this.channels = new Map();
        this.cancels = {};
        this.streamSource = source;
        this.next = this.next.bind(this);
        this.complete = this.complete.bind(this);
        this.error = this.error.bind(this);
    }
    getKey() {
        return 'k' + this.index++;
    }
    emit(channel, key, val) {
        const c = this.channels.get(channel);
        for (const k in c[key]) {
            c[key][k](val);
        }
    }
    next(channel, value) {
        this.emit(channel, 'next', value);
    }
    error(channel, error) {
        this.emit(channel, 'error', error);
    }
    complete(channel) {
        this.emit(channel, 'complete');
    }
    destroy() {
        for (const k in this.cancels) {
            this.cancels[k]();
        }
    }
    onDestroy(fn) {
        const key = this.getKey();
        this.cancels[key] = () => {
            delete this.cancels[key];
            fn();
        };
    }
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */
    cleanup(channel) {
        if (isChannelAPI(this.unsubscribeFromSource))
            this.unsubscribeFromSource.onUnsubscribe(channel);
        if (!this.activeListeners) {
            isChannelAPI(this.unsubscribeFromSource) ? this.unsubscribeFromSource.destroy() : this.unsubscribeFromSource();
        }
    }
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */
    subscribe(channelKey, fnOrObserver) {
        if (!this.subscribed) {
            this.unsubscribeFromSource = this.streamSource(this);
            this.subscribed = true;
        }
        let channel = this.channels.get(channelKey);
        const key = this.getKey();
        if (!channel) {
            channel = { next: {}, error: {}, complete: {} };
            this.channels.set(channelKey, channel);
        }
        if (isChannelAPI(this.unsubscribeFromSource)) {
            this.unsubscribeFromSource.onSubscribe(channelKey);
        }
        /*  */
        if (isObserver(fnOrObserver)) {
            const objKeys = Object.keys(fnOrObserver);
            this.activeListeners += 1;
            objKeys.forEach(objKey => {
                channel[objKey][key] = fnOrObserver[objKey];
            });
            const cancel = () => {
                this.activeListeners -= 1;
                const c = this.channels.get(channelKey);
                objKeys.forEach(objKey => {
                    delete c[objKey][key];
                });
                delete this.cancels[key];
                this.cleanup(channelKey);
            };
            this.cancels[key] = cancel;
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
        if (isListener(fnOrObserver)) {
            channel.next[key] = fnOrObserver;
            this.activeListeners += 1;
            const cancel = () => {
                this.activeListeners -= 1;
                delete this.channels.get(channelKey).next[key];
                delete this.cancels[key];
                this.cleanup(channelKey);
            };
            this.cancels[key];
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
    }
}
export default Observable;
//# sourceMappingURL=observable.js.map