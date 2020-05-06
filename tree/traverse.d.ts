declare type Node<T> = {
    children: IterableIterator<T>;
};
export declare function traverse<T extends Node<T>>(node: T): IterableIterator<T>;
export {};
//# sourceMappingURL=traverse.d.ts.map