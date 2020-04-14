import Subject from './subject';
export declare const allChanges: string;
interface Dict {
    [k: string]: any;
}
declare type Key = string;
export default class Stateful<S extends {} = Dict> extends Subject {
    state: S;
    initialState: S;
    isFirstChange: boolean;
    hasChanged: Key[];
    constructor(initialState?: S);
    setState(stateOrFn: any): void;
    changed(...args: any[]): () => void;
    listen(fn: any): () => void;
}
export {};
//# sourceMappingURL=stateful.d.ts.map