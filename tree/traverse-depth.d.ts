declare type Node<T> = {
    children: T[];
    parent: T | null;
};
export declare function traverseDepth<T extends Node<T>>(node: T): IterableIterator<T>;
export {};
//# sourceMappingURL=traverse-depth.d.ts.map