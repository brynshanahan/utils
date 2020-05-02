export const is = {
    script(t) {
        return t.tagName === "script";
    },
    title(t) {
        return t.tagName === "title";
    },
    style(t) {
        return t.tagName === "style";
    },
    link(t) {
        return t.tagName === "link";
    },
    element(t) {
        return t.nodeType === Node.ELEMENT_NODE;
    },
    text(t) {
        return t.nodeType === Node.TEXT_NODE;
    },
    comment(t) {
        return t.nodeType === Node.COMMENT_NODE;
    }
};
//# sourceMappingURL=is.js.map