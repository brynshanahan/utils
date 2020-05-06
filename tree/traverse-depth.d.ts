declare type Node<T> = {
    children?: IterableIterator<T>;
};
export declare function traverseDepth<T extends Node<T>>(node: T): IterableIterator<T>;
export {};
//# sourceMappingURL=traverse-depth.d.ts.map