// import draftDom from "../../../element/draft-dom"
// import { JSDOM } from "jsdom"
// import { is } from "../../../element/is"
// import { toContainHTML } from "@testing-library/jest-dom/matchers"
// expect.extend({ toContainHTML })

// function matchNodeStrict(draft, node) {
//   if (draft.element !== node) {
//     expect(draft.element).toEqual(node)
//     return false
//   }
//   for (let i = 0; i < nodeA.childNodes.length; i++) {
//     if (!matchNodeStrict(draft.childNodes[i], node.childNodes[i])) return false
//   }
//   return true
// }

// function matchNode(nodeA, nodeB) {
//   /* False if they are different node types */
//   if (nodeA.nodeType !== nodeB.nodeType) {
//     console.log(nodeA, nodeB, "failed type check")
//     return false
//   }
//   if (is.text(nodeA)) {
//     /* Only check text content for text elements */
//     console.log(nodeA, nodeB, "failed content check")
//     return nodeA.textContent === nodeB.textContent
//   } else {
//     /* If the element name is different return false */
//     if (nodeA.tagName !== nodeB.tagName) {
//       console.log(nodeA, nodeB, "failed name check")
//       return false
//     }

//     let attrsA = nodeA.getAttributeNames()
//     let attrsB = nodeB.getAttributeNames()

//     if (attrsA.length !== attrsB.length) {
//       console.log(nodeA, nodeB, "failed attrs len check")
//       return false
//     }

//     /* Check all the attributes */
//     for (let attribute of attrsA) {
//       if (nodeA.getAttribute(attribute) !== nodeB.getAttribute(attribute)) {
//         console.log(nodeA, nodeB, "failed attribute check")
//         return false
//       }
//     }
//   }

//   return true
// }

// function nodeMatchesHTML(draft, html) {
//   let { window } = new JSDOM(html.trim())

//   return structureMatches(draft, clean(window.document.body))
// }

// function structureMatches(nodeA, nodeB, checker = matchNode) {
//   if (!checker(nodeA, nodeB)) {
//     return false
//   }
//   if (nodeA.childNodes.length !== nodeB.childNodes.length) return false
//   for (let i = 0; i < nodeA.childNodes.length; i++) {
//     if (!structureMatches(nodeA.childNodes[i], nodeB.childNodes[i])) return false
//   }
//   return true
// }

// const html = (...args) => String.raw(...args)
// const INITIAL_TEMPLATE = html`
//   <div class="container">
//     <div class="child">
//       <a class="link" href="test">Description</a>
//     </div>
//   </div>
//   <div class="sibling"></div>
// `

// describe(`Draft dom`, () => {
//   test(`Matches dom structure`, () => {
//     let dom = new JSDOM(INITIAL_TEMPLATE)
//     let window = dom.window
//     let document = window.document

//     let node = document.body
//     let draft = draftDom(node)

//     expect(node).toContainHTML(draft.innerHTML)
//   })

//   test("Query returns the same elements", () => {
//     let { window } = new JSDOM(INITIAL_TEMPLATE)

//     let node = window.document.body
//     let draft = draftDom(node)

//     let queries = ["a", "div"]

//     queries.forEach(query => {
//       const el1 = node.querySelector(query)
//       const el2 = draft.querySelector(query)

//       expect(el2.element).toEqual(el1)
//     })
//   })

//   test(`Moves elements only after being appended`, () => {
//     let dom = new JSDOM(INITIAL_TEMPLATE)
//     let { window } = dom
//     let { document } = window

//     let draft = draftDom(document.body)
//     let anchor = draft.querySelector("a")

//     /* Move the element in the draft */
//     draft.querySelector(".sibling").append(anchor)
//     expect()

//     draft.appendTo(document.body.parentElement)

//     expect(document.body).toContainHTML(html`
//       <body>
//         <div class="container">
//           <div class="child"></div>
//         </div>
//         <div class="sibling"><a class="link" href="test">Description</a></div>
//       </body>
//     `)
//   })
// })
