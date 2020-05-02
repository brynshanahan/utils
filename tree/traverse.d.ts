declare type Node<T> = {
    children: T[];
    parent: T | null;
};
export declare function traverse<T extends Node<T>>(node: T): IterableIterator<T>;
export {};
//# sourceMappingURL=traverse.d.ts.map