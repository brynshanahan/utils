export declare type Listener<E, T> = (e: E & {
    target: T;
}) => any;
declare type Disposer = () => any;
export declare type GetEventMap<T> = T extends Window ? WindowEventMap : T extends Document ? DocumentEventMap : T extends HTMLElement ? HTMLElementEventMap : T extends Animation ? AnimationEventMap : T extends HTMLMediaElement ? HTMLMediaElementEventMap : string;
export declare function on<T extends EventTarget, M = keyof GetEventMap<T>>(element: T, eve: keyof GetEventMap<T>, callback: Listener<GetEventMap<T>[M], T>): Disposer;
export {};
//# sourceMappingURL=on.d.ts.map