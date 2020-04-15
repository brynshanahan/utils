/* Doesn't affect the real dom when being appended to */
import { is } from "./is";
export default class TempNode {
    constructor(element) {
        this.nodeList = new Set([...element.children]);
        this.element = element;
        for (let prop in element) {
            if (typeof this[prop] === "undefined") {
                Object.defineProperty(this, prop, {
                    get() {
                        return element[prop];
                    },
                    set(value) {
                        return (element[prop] = value);
                    }
                });
            }
        }
    }
    get innerHTML() {
        let result = "";
        for (let child of this.nodeList) {
            result += is.element(child) ? child.innerHTML : child.textContent;
        }
        return result;
    }
    get textContent() {
        let result = "";
        for (let child of this.nodeList) {
            result += child.textContent;
        }
        return result;
    }
    querySelector(query) {
        for (let child of this.nodeList) {
            let result = child.querySelector(query);
            if (result)
                return result;
        }
        return null;
    }
    querySelectorAll(query) {
        const children = [];
        for (let child of this.nodeList) {
            children.push(...child.querySelectorAll(query));
        }
        return children;
    }
    appendChild(node) {
        this.nodeList.add(node);
    }
    append(node) {
        this.nodeList.add(node);
    }
    appendTo(node) {
        for (let child of this.nodeList) {
            this.element.appendChild(child);
        }
        node.appendChild(this.element);
    }
}
//# sourceMappingURL=temp-node.js.map