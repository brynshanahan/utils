declare const TEMP: unique symbol;
interface TempNodular extends Element {
    children: TempNodular[];
    childNodes: Set<TempNodular>;
    parent: TempNodular;
    element: Element;
    appendTo(node: ChildNode): any;
}
export default function TempNode(element: Element, parent: TempNodular): Element & {
    element: Element;
    parent: TempNodular;
    childNodes: Set<Element | Text>;
    [TEMP]: boolean;
    remove(): void;
    readonly children: Element[];
    readonly innerHTML: string;
    readonly textContent: string;
    readonly innerText: void;
    querySelector(query: string): Element;
    matches(query: string): any;
    querySelectorAll(query: string): Element[];
    appendChild(node: Element): void;
    append(node: Element): void;
    appendTo(node: Element): void;
};
export {};
//# sourceMappingURL=temp-node.d.ts.map