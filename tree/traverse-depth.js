export function* traverseDepth(node) {
    if (node.children) {
        for (let child of node.children) {
            for (let n of traverseDepth(child)) {
                yield n;
            }
        }
    }
    yield node;
}
//# sourceMappingURL=traverse-depth.js.map