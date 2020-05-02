/* Doesn't affect the real dom when being appended to */
import { is } from "./is";
const DRAFT = Symbol("nodey");
function isDraft(element) {
    return element[DRAFT];
}
export default function draftDom(element, parent) {
    const traps = {
        element,
        parent,
        childNodes: new Set(),
        [DRAFT]: true,
        remove() {
            if (isDraft(parent)) {
                parent && parent.childNodes.delete(this);
            }
        },
        get parentElement() {
            return traps.parent || element.parentElement;
        },
        get parentNode() {
            return traps.parent || element.parentElement;
        },
        get children() {
            let children = [];
            for (let node of this.childNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    children.push(node);
                }
            }
            return children;
        },
        get innerHTML() {
            if (!is.element(traps.element))
                return undefined;
            let [start, end] = traps.element.outerHTML.split(traps.element.innerHTML);
            for (let node of traps.childNodes) {
                if (is.element(node)) {
                    start += node.innerHTML;
                }
                else if (is.text(node)) {
                    start += node.textContent;
                }
            }
            return start + end;
        },
        get textContent() {
            let result = "";
            for (let child of traps.childNodes) {
                if (child.nodeType === Node.TEXT_NODE) {
                    result += child.textContent;
                }
            }
            return result;
        },
        get innerText() {
            let result = "";
            for (let child of traps.childNodes) {
                if (is.text(child)) {
                    result += child.textContent;
                }
            }
            return result;
        },
        querySelector(query) {
            function runQuery(n) {
                let matches = n.matches(query);
                if (matches)
                    return n;
                for (let child of n.children) {
                    let result = runQuery(child);
                    if (result)
                        return result;
                }
            }
            for (let child of traps.children) {
                let result = runQuery(child);
                if (result)
                    return result;
            }
            return null;
        },
        matches(query) {
            return this.element.matches(query);
        },
        querySelectorAll(query) {
            let matches = [];
            function runQuery(n) {
                let isMatch = n.matches(query);
                if (isMatch) {
                    matches.push(n);
                }
                for (let child of n.children) {
                    runQuery(child);
                }
            }
            for (let child of this.children) {
                runQuery(child);
            }
            return matches;
        },
        appendChild(node) {
            traps.childNodes.add(node);
        },
        append(node) {
            if (isDraft(node))
                node.remove();
            traps.childNodes.add(node);
        },
        appendTo(node) {
            let futureNodes = new Set();
            for (let child of traps.childNodes) {
                if (isDraft(child)) {
                    futureNodes.add(child.element);
                    child.appendTo(traps.element);
                }
                else {
                    traps.element.append(child);
                    futureNodes.add(child);
                }
            }
            for (let child of traps.element.childNodes) {
                if (!futureNodes.has(child)) {
                    child.remove();
                }
            }
            node.append(traps.element);
        }
    };
    const setTraps = {
        innerHTML(html) {
            const div = document.createElement("div");
            div.innerHTML = html;
            traps.childNodes.forEach(child => child.remove());
            Array.from(div.childNodes).map(node => {
                traps.append(draftDom(node, target));
            });
        },
        innerText(text) {
            const div = document.createElement("div");
            div.innerText = text;
            traps.childNodes.forEach(child => child.remove());
            Array.from(div.childNodes).forEach(node => traps.append(draftDom(node, target)));
        },
        textContent(text) {
            const div = document.createElement("div");
            div.textContent = text;
            traps.childNodes.forEach(child => child.remove());
            Array.from(div.childNodes).forEach(node => traps.append(draftDom(node, target)));
        }
    };
    const target = new Proxy(element, {
        get(target, property) {
            if (property in traps) {
                return traps[property];
            }
            else {
                return target[property];
            }
        },
        set(target, property, value) {
            if (property in setTraps) {
                return setTraps[property](value);
            }
            else {
                console.log(`setting ${property} is not supported yet`);
            }
        }
    });
    for (let child of element.childNodes) {
        traps.childNodes.add(draftDom(child, target));
    }
    return target;
}
window.draftDom = draftDom;
//# sourceMappingURL=draft-dom.js.map