export function* traverse(node) {
    yield node;
    if (node.children) {
        for (let child of node.children) {
            for (let n of traverse(child)) {
                yield n;
            }
        }
    }
}
//# sourceMappingURL=traverse.js.map