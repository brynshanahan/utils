export function traverseDepth(node, forEachNode) {
    if (node.children.length) {
        node.children.forEach(node => traverseDepth(node, forEachNode));
    }
    forEachNode(node);
}
//# sourceMappingURL=traverse-depth.js.map