/* Doesn't affect the real dom when being appended to */
import { is } from '..'
type Nodey = Element

export default class TempNode {
  nodeList: Set<Element | Text>
  element: Nodey

  constructor(element: Nodey) {
    this.nodeList = new Set([...element.children])
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
    for (let child of this.nodeList) {
      result += is.element(child) ? child.innerHTML : 
    }
    return result
  }

  get textContent() {
    let result = ''
    for (let child of this.nodeList) {
      result += child.textContent
    }
    return result
  }

  querySelector(query: string) {
    for (let child of this.nodeList) {
      let result = child.querySelector(query)
      if (result) return result
    }
    return null
  }

  querySelectorAll(query: string) {
    const children = []
    for (let child of this.nodeList) {
      children.push(...child.querySelectorAll(query))
    }
    return children
  }

  appendChild(node: Element) {
    this.nodeList.add(node)
  }

  append(node: Element) {
    this.nodeList.add(node)
  }

  appendTo(node: Element) {
    for (let child of this.nodeList) {
      this.element.appendChild(child)
    }
    node.appendChild(this.element)
  }
}
