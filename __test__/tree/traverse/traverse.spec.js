import { traverseCallback, traverse } from "../../../tree/traverse"
import { traverseDepth, traverseDepthCallback } from "../../../tree/traverse-depth"

const TREE = {
  name: 1,
  children: [
    { name: 2, children: [] },
    { name: 3, children: [{ name: 4, children: [] }] },
    { name: 5, children: [] }
  ]
}

describe("Traverse", () => {
  test("Traverse in the correct order", () => {
    let name = ""
    for (let item of traverse(TREE)) {
      name += item.name
    }
    expect(name).toEqual("12345")
  })

  test("Traverse depth in the correct order", () => {
    let name = ""
    for (let item of traverseDepth(TREE)) {
      name += item.name
    }
    expect(name).toEqual("24351")
  })
})
