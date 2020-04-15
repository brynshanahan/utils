import Subject from './subject';
let all = Symbol('all');
export default function reactive(initialState = {}) {
    let state = initialState;
    let subject = new Subject();
    const target = new Proxy(function () { }, {
        get(target, prop) {
            if (prop === 'toJSON')
                return () => state;
            return state[prop];
        },
        set(target, prop, value) {
            let prev = state[prop];
            state[prop] = value;
            if (prev !== value) {
                subject.emit(all, state, prop, prev);
                subject.emit(prop, state, prop, prev);
            }
            return true;
        },
        apply(target, self, args) {
            args.find(f => typeof f === 'function')(state);
            return subject.on(...args);
        }
    });
    return target;
}
//# sourceMappingURL=reactive.js.map