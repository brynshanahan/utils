export function traverse(node, forEachNode) {
    forEachNode(node);
    if (node.children.length) {
        node.children.forEach(node => traverse(node, forEachNode));
    }
}
//# sourceMappingURL=traverse.js.map