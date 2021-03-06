const TEMP = Symbol("nodey");
function isTemp(element) {
    return element[TEMP];
}
export default function TempNode(element, parent) {
    const traps = {
        element,
        parent,
        childNodes: new Set(),
        [TEMP]: true,
        remove() {
            if (isTemp(parent)) {
                parent && parent.childNodes.delete(this);
            }
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
            if (element.nodeType !== Node.ELEMENT_NODE)
                return undefined;
            let [start, end] = traps.element.outerHTML.split(traps.element.innerHTML);
            for (let node of traps.childNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    start += node.innerHTML;
                }
                else if (node.nodeType === Node.TEXT_NODE) {
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
        get innerText() { },
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
            traps.childNodes.add(node);
        },
        appendTo(node) {
            let futureNodes = new Set();
            for (let child of traps.childNodes) {
                if (isTemp(child)) {
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
    const target = new Proxy(element, {
        get(target, property) {
            if (property in traps) {
                return traps[property];
            }
            else {
                return target[property];
            }
        }
    });
    for (let child of element.childNodes) {
        traps.childNodes.add(TempNode(child, target));
    }
    return target;
}
window.TempNode = TempNode;
// export default class TempNode implements HTMLElement {
//   childNodes: Set<Element | Text | TempNode>
//   element: Nodey
//   get children() {
//     let children: Element[] = []
//     for (let node of this.childNodes) {
//       if (node.nodeType === Node.ELEMENT_NODE) {
//         children.push(node)
//       }
//     }
//     return children
//   }
//   constructor(element: Nodey) {
//     this.childNodes = new Set()
//     for (let node of element.childNodes) {
//       this.childNodes.add(node)
//     }
//     this.element = element
//   }
//   get innerHTML() {
//     let result = ""
//     for (let child of this.childNodes) {
//       result += is.element(child) ? child.innerHTML : child.textContent
//     }
//     return result
//   }
//   get textContent() {
//     let result = ""
//     for (let child of this.childNodes) {
//       result += child.textContent
//     }
//     return result
//   }
//   querySelector(query: string) {
//     for (let child of this.children) {
//       let result = child.querySelector(query)
//       if (result) return result
//     }
//     return null
//   }
//   matches (query:string) {
//     return this.element.matches(query)
//   }
//   querySelectorAll(query: string) {
//     const children = []
//     for (let child of this.childNodes) {
//       children.push(...child.querySelectorAll(query))
//     }
//     return children
//   }
//   appendChild(node: Nodey) {
//     this.childNodes.add(node)
//   }
//   append(node: Nodey) {
//     this.childNodes.add(node)
//   }
//   appendTo(node: Element) {
//     for (let child of this.childNodes) {
//       this.element.appendChild(child)
//     }
//     node.appendChild(this.element)
//   }
// }
//# sourceMappingURL=temp-node.js.map