type Node<T> = {
  children?: IterableIterator<T>
}

export function* traverseDepth<T extends Node<T>>(node: T): IterableIterator<T> {
  if (node.children) {
    for (let child of node.children) {
      for (let n of traverseDepth(child)) {
        yield n
      }
    }
  }
  yield node
}
