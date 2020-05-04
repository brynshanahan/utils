declare const DRAFT: unique symbol;
interface DraftNode extends Element {
    children: DraftNode[];
    childNodes: Set<DraftNode>;
    parent: DraftNode;
    element: Element;
    appendTo(node: ChildNode): any;
}
export default function draftDom(element: Element | ChildNode, parent?: DraftNode): Element & {
    element: Element | ChildNode;
    parent: DraftNode;
    childNodes: Set<Element | Text>;
    [DRAFT]: boolean;
    remove(): void;
    readonly parentElement: HTMLElement | DraftNode;
    readonly parentNode: HTMLElement | DraftNode;
    readonly children: Element[];
    readonly innerHTML: string;
    readonly textContent: string;
    readonly innerText: string;
    querySelector(query: string): Element;
    matches(query: string): any;
    querySelectorAll(query: string): Element[];
    appendChild(node: Element): void;
    append(node: Element): void;
    appendTo(node: Element): void;
};
export {};
//# sourceMappingURL=draft-dom.d.ts.map