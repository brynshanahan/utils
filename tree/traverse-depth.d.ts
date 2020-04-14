declare type Node<T> = {
    children: T[];
    parent: T | null;
};
export declare function traverseDepth<T extends Node<T>>(node: T, forEachNode: (node: T) => any): void;
export {};
//# sourceMappingURL=traverse-depth.d.ts.map