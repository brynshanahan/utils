import Subject from "../reactive/subject";
declare type LoadableEvents = {
    progress: [{
        percent: number;
        start: number;
        time: number;
    }];
    complete: [{
        percent: 1;
        start: number;
        time: number;
    }];
};
export declare class Loadable extends Subject<LoadableEvents> {
    promises: Promise<any>[];
    loaded: number;
    start: number;
    timeout?: string | number;
    constructor(resources: Promise<any>[], timeout?: number);
    get complete(): boolean;
    finished(): Promise<unknown>;
    private emitComplete;
    private emitProgress;
}
export {};
//# sourceMappingURL=loadable.d.ts.map