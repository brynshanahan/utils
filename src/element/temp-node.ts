/* Doesn't affect the real dom when being appended to */
type Nodey = Element

export default class TempNode {
  children: Set<Element>
  element: Nodey

  constructor(element: Nodey) {
    this.children = new Set([...element.children])
    this.element = element

    for (let prop in element) {
      if (typeof this[prop] === 'undefined') {
        Object.defineProperty(this, prop, {
          get() {
            return element[prop]
          },
          set(value) {
            return (element[prop] = value)
          }
        })
      }
    }
  }

  get innerHTML() {
    let result = ''
    for (let child of this.children) {
      result += child.innerHTML
    }
    return result
  }

  get textContent() {
    let result = ''
    for (let child of this.children) {
      result += child.textContent
    }
    return result
  }

  querySelector(query: string) {
    for (let child of this.children) {
      let result = child.querySelector(query)
      if (result) return result
    }
    return null
  }

  querySelectorAll(query: string) {
    const children = []
    for (let child of this.children) {
      children.push(...child.querySelectorAll(query))
    }
    return children
  }

  appendChild(node: Element) {
    this.children.add(node)
  }

  append(node: Element) {
    this.children.add(node)
  }

  appendTo(node: Element) {
    for (let child of this.children) {
      this.element.appendChild(child)
    }
    node.appendChild(this.element)
  }
}
