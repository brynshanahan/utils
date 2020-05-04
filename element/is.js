export const is = {
    script(t) {
        return t.tagName === "SCRIPT";
    },
    title(t) {
        return t.tagName === "TITLE";
    },
    style(t) {
        return t.tagName === "STYLE";
    },
    link(t) {
        return t.tagName === "LINK";
    },
    element(t) {
        return t.nodeType === Node.ELEMENT_NODE;
    },
    text(t) {
        return t.nodeType === Node.TEXT_NODE;
    },
    comment(t) {
        return t.nodeType === Node.COMMENT_NODE;
    },
    meta(t) {
        return t.tagName === "META";
    }
};
window.isTest = is;
//# sourceMappingURL=is.js.map