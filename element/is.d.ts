export declare const is: {
    script(t: Element): t is HTMLScriptElement;
    title(t: Element): t is HTMLTitleElement;
    style(t: Element): t is HTMLStyleElement;
    link(t: Element): t is HTMLLinkElement;
    element(t: Element | ChildNode | Text): t is Element;
    text(t: Element | ChildNode | Text): t is Text;
    comment(t: any): t is Comment;
};
//# sourceMappingURL=is.d.ts.map