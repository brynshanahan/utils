var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Observable = /** @class */ (function () {
    function Observable(source) {
        this.index = 0;
        this.subscribed = false;
        this.activeListeners = 0;
        this.unsubscribeFromSource = function () { };
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
    Observable.prototype.getKey = function () {
        return 'k' + this.index++;
    };
    Observable.prototype.emit = function (key, val) {
        for (var k in this.listeners[key]) {
            this.listeners[key][k](val);
        }
    };
    /* Emit the next value */
    Observable.prototype.next = function (value) {
        this.emit('next', value);
    };
    Observable.prototype.error = function (error) {
        this.emit('error', error);
    };
    /* Emit an end event to everything */
    Observable.prototype.complete = function () {
        this.emit('complete');
        this.destroy();
    };
    Observable.prototype.destroy = function () {
        for (var k in this.cancels) {
            this.cancels[k]();
        }
    };
    Observable.prototype.onDestroy = function (fn) {
        var _this = this;
        var key = this.getKey();
        this.cancels[key] = function () {
            delete _this.cancels[key];
            fn();
        };
    };
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */
    Observable.prototype.cleanup = function () {
        if (!this.activeListeners) {
            this.unsubscribeFromSource();
        }
    };
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */
    Observable.prototype.subscribe = function (fnOrObserver) {
        var _this = this;
        if (!this.subscribed) {
            this.unsubscribeFromSource = this.streamSource(this);
            this.subscribed = true;
        }
        var key = this.getKey();
        if (isObserver(fnOrObserver)) {
            var objKeys_1 = Object.keys(fnOrObserver);
            this.activeListeners += 1;
            objKeys_1.forEach(function (objKey) {
                _this.listeners[objKey][key] = fnOrObserver[objKey];
            });
            var cancel = function () {
                _this.activeListeners -= 1;
                objKeys_1.forEach(function (objKey) {
                    delete _this.listeners[objKey][key];
                });
                delete _this.cancels[key];
                _this.cleanup();
            };
            this.cancels[key] = cancel;
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
        else {
            this.listeners.next[key] = fnOrObserver;
            this.activeListeners += 1;
            var cancel = function () {
                _this.activeListeners -= 1;
                delete _this.listeners.next[key];
                delete _this.cancels[key];
                _this.cleanup();
            };
            this.cancels[key];
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
    };
    return Observable;
}());
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
var BehaviourSubject = /** @class */ (function (_super) {
    __extends(BehaviourSubject, _super);
    function BehaviourSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BehaviourSubject.prototype.next = function (value) {
        this.emit('next', value);
        this.lastNext = value;
    };
    /* Very similar to observable except it sends the most recent value on subscribe */
    BehaviourSubject.prototype.subscribe = function (fnOrObserver) {
        var observer = _super.prototype.subscribe.call(this, fnOrObserver);
        if (isObserver(observer.observer)) {
            observer.observer.next(this.lastNext);
        }
        else if (isListener(fnOrObserver)) {
            fnOrObserver(this.lastNext);
        }
        return observer;
    };
    return BehaviourSubject;
}(Observable));
export { BehaviourSubject };
function isChannelAPI(arg) {
    return Boolean(arg.destroy);
}
var ChannelledObservable = /** @class */ (function () {
    function ChannelledObservable(source) {
        this.index = 0;
        this.subscribed = false;
        this.activeListeners = 0;
        this.unsubscribeFromSource = function () { };
        this.channels = new Map();
        this.cancels = {};
        this.streamSource = source;
        this.next = this.next.bind(this);
        this.complete = this.complete.bind(this);
        this.error = this.error.bind(this);
    }
    ChannelledObservable.prototype.getKey = function () {
        return 'k' + this.index++;
    };
    ChannelledObservable.prototype.emit = function (channel, key, val) {
        var c = this.channels.get(channel);
        for (var k in c[key]) {
            c[key][k](val);
        }
    };
    ChannelledObservable.prototype.next = function (channel, value) {
        this.emit(channel, 'next', value);
    };
    ChannelledObservable.prototype.error = function (channel, error) {
        this.emit(channel, 'error', error);
    };
    ChannelledObservable.prototype.complete = function (channel) {
        this.emit(channel, 'complete');
    };
    ChannelledObservable.prototype.destroy = function () {
        for (var k in this.cancels) {
            this.cancels[k]();
        }
    };
    ChannelledObservable.prototype.onDestroy = function (fn) {
        var _this = this;
        var key = this.getKey();
        this.cancels[key] = function () {
            delete _this.cancels[key];
            fn();
        };
    };
    /*
    This is called when a observer unsubscribes
    if it was the last remaining observer then it unsubscribes from the source
    */
    ChannelledObservable.prototype.cleanup = function (channel) {
        if (isChannelAPI(this.unsubscribeFromSource))
            this.unsubscribeFromSource.onUnsubscribe(channel);
        if (!this.activeListeners) {
            isChannelAPI(this.unsubscribeFromSource) ? this.unsubscribeFromSource.destroy() : this.unsubscribeFromSource();
        }
    };
    /*
    Subscribe can be passed either a
    Listener: (nextVal) => {}
      or an
    Observer: { next: nextVal => {}, error: err => {}, }
    */
    ChannelledObservable.prototype.subscribe = function (channelKey, fnOrObserver) {
        var _this = this;
        if (!this.subscribed) {
            this.unsubscribeFromSource = this.streamSource(this);
            this.subscribed = true;
        }
        var channel = this.channels.get(channelKey);
        var key = this.getKey();
        if (!channel) {
            channel = { next: {}, error: {}, complete: {} };
            this.channels.set(channelKey, channel);
        }
        if (isChannelAPI(this.unsubscribeFromSource)) {
            this.unsubscribeFromSource.onSubscribe(channelKey);
        }
        /*  */
        if (isObserver(fnOrObserver)) {
            var objKeys_2 = Object.keys(fnOrObserver);
            this.activeListeners += 1;
            objKeys_2.forEach(function (objKey) {
                channel[objKey][key] = fnOrObserver[objKey];
            });
            var cancel = function () {
                _this.activeListeners -= 1;
                var c = _this.channels.get(channelKey);
                objKeys_2.forEach(function (objKey) {
                    delete c[objKey][key];
                });
                delete _this.cancels[key];
                _this.cleanup(channelKey);
            };
            this.cancels[key] = cancel;
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
        if (isListener(fnOrObserver)) {
            channel.next[key] = fnOrObserver;
            this.activeListeners += 1;
            var cancel = function () {
                _this.activeListeners -= 1;
                delete _this.channels.get(channelKey).next[key];
                delete _this.cancels[key];
                _this.cleanup(channelKey);
            };
            this.cancels[key];
            return { unsubscribe: cancel, observer: fnOrObserver };
        }
    };
    return ChannelledObservable;
}());
export { ChannelledObservable };
export default Observable;
//# sourceMappingURL=observable.js.map