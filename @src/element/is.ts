export const is = {
  script(t: Element): t is HTMLScriptElement {
    return t.tagName === "SCRIPT"
  },
  title(t: Element): t is HTMLTitleElement {
    return t.tagName === "TITLE"
  },
  style(t: Element): t is HTMLStyleElement {
    return t.tagName === "STYLE"
  },
  link(t: Element): t is HTMLLinkElement {
    return t.tagName === "LINK"
  },
  element(t: Element | Text | ChildNode): t is Element {
    return t.nodeType === Node.ELEMENT_NODE
  },
  text(t: Element | Text | ChildNode): t is Text {
    return t.nodeType === Node.TEXT_NODE
  },
  comment(t: any): t is Comment {
    return t.nodeType === Node.COMMENT_NODE
  },
  meta(t: any): t is HTMLMetaElement {
    return t.tagName === "META"
  }
}

window.isTest = is
