export function traverse(node, forEachNode) {
    forEachNode(node);
    if (node.children.length) {
        node.children.forEach(function (node) { return traverse(node, forEachNode); });
    }
}
//# sourceMappingURL=traverse.js.map