export var is = {
    script: function (t) {
        return t.tagName === 'script';
    },
    title: function (t) {
        return t.tagName === 'title';
    },
    style: function (t) {
        return t.tagName === 'style';
    },
    link: function (t) {
        return t.tagName === 'link';
    },
    element: function (t) {
        return t.nodeType === Node.ELEMENT_NODE;
    },
    text: function (t) {
        return t.nodeType === Node.TEXT_NODE;
    },
    comment: function (t) {
        return t.nodeType === Node.COMMENT_NODE;
    },
};
//# sourceMappingURL=is.js.map