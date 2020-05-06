type Node<T> = {
  children: IterableIterator<T>
}

export function* traverse<T extends Node<T>>(node: T): IterableIterator<T> {
  yield node
  if (node.children) {
    for (let child of node.children) {
      for (let n of traverse(child)) {
        yield n
      }
    }
  }
}
