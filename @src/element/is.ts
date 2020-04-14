export const is = {
  script(t: Element): t is HTMLScriptElement {
    return t.tagName === 'script'
  },
  title(t: Element): t is HTMLTitleElement {
    return t.tagName === 'title'
  },
  style(t: Element): t is HTMLStyleElement {
    return t.tagName === 'style'
  },
  link(t: Element): t is HTMLLinkElement {
    return t.tagName === 'link'
  },
  element(t: Element | Text): t is Element {
    return t.nodeType === Node.ELEMENT_NODE
  },
  text(t: Element | Text): t is Text {
    return t.nodeType === Node.TEXT_NODE
  },
  comment(t: any): t is Comment {
    return t.nodeType === Node.COMMENT_NODE
  },
}
