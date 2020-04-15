import Subject from '../reactive/subject';
export class Loadable extends Subject {
    constructor(resources, timeout = 0) {
        super();
        this.start = Date.now();
        this.complete = false;
        this.promises = resources;
        this.loaded = 0;
        for (let promise of this.promises) {
            promise.then(arg => {
                this.loaded++;
                this.emitProgress();
                return arg;
            });
        }
        if (timeout) {
            this.timeout = setTimeout(() => {
                this.emitComplete();
            }, timeout);
        }
    }
    finished() {
        return new Promise(resolve => {
            if (this.complete) {
                resolve();
            }
            else {
                this.once('complete', update => {
                    resolve();
                });
            }
        });
    }
    emitComplete() {
        if (this.complete)
            return;
        this.complete = true;
        this.emit('complete', {
            percent: 1,
            start: this.start,
            time: Date.now() - this.start,
        });
    }
    emitProgress() {
        const update = {
            percent: this.loaded / this.promises.length,
            start: this.start,
            time: Date.now() - this.start,
        };
        this.emit('progress', update);
        if (update.percent === 1) {
            this.emitComplete();
        }
    }
}
//# sourceMappingURL=loadable.js.map