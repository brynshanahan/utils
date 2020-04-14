/* Intersection observer polyfill for IE */
import { ChannelledObservable } from '../reactive/observable'

export class CustomIntersectionObserverEntry
  implements IntersectionObserverEntry {
  isAbove: boolean
  isBelow: boolean
  isCompletelyInView: boolean
  boundingClientRect: DOMRectReadOnly
  intersectionRatio: number
  intersectionRect: DOMRectReadOnly
  isIntersecting: boolean
  rootBounds: DOMRectReadOnly | null
  target: Element
  time: number

  constructor(
    entry: IntersectionObserverEntry,
    winHeight: number = window.innerHeight
  ) {
    this.boundingClientRect = entry.boundingClientRect
    this.intersectionRatio = entry.intersectionRatio
    this.intersectionRect = entry.intersectionRect
    this.isIntersecting = entry.isIntersecting
    this.rootBounds = entry.rootBounds
    this.target = entry.target
    this.time = entry.time

    this.isCompletelyInView = entry.intersectionRatio === 1
    this.isAbove =
      entry.intersectionRatio < 1 ? entry.boundingClientRect.top < 0 : false
    this.isBelow =
      entry.intersectionRatio < 1
        ? entry.boundingClientRect.bottom > winHeight
        : false
  }
}

export function createIntersectionObservable(
  root: Window | Element = window,
  opts: IntersectionObserverInit = {}
) {
  const observable = new ChannelledObservable<
    Element,
    CustomIntersectionObserverEntry
  >(({ next, error, complete }) => {
    /* Intersection observer targets the window by default */
    const options = { ...opts }

    /* If root isnt the window set it to be the intersection observer root */
    if (isElement(root)) {
      options.root = root
    }

    let disconnected = false
    let started = false
    let source: Promise<IntersectionObserver> | IntersectionObserver

    async function getSource() {
      if (!window.IntersectionObserver) {
        await import('intersection-observer')
      }
      if (disconnected) return
      started = true
      return new IntersectionObserver((entries) => {
        const winHeight = window.innerHeight

        entries.forEach((entry) => {
          const customEntry = new CustomIntersectionObserverEntry(
            entry,
            winHeight
          )
          /* Get the callback for the specific element */
          next(entry.target, customEntry)
        })
      }, options)
    }

    source = getSource().then((r) => {
      source = r
      return r
    })

    /* Entries is an array of entries for every element that changed */
    return {
      async onSubscribe(channel) {
        let src = await source
        src.observe(channel)
      },
      async onUnsubscribe(channel) {
        let src = await source
        src.unobserve(channel)
      },
      async destroy() {
        disconnected = true
        if (started) {
          let src = await source
          src.disconnect()
        }
      },
    }
  })
  return observable
}

function isElement(arg: Window | Element): arg is Element {
  return arg && arg !== window
}
