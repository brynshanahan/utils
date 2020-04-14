declare type Nodey = Element;
export default class TempNode {
    nodeList: Set<Element | Text>;
    element: Nodey;
    constructor(element: Nodey);
    get innerHTML(): string;
    get textContent(): string;
    querySelector(query: string): any;
    querySelectorAll(query: string): any[];
    appendChild(node: Element): void;
    append(node: Element): void;
    appendTo(node: Element): void;
}
export {};
//# sourceMappingURL=temp-node.d.ts.map