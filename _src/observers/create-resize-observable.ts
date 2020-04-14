/* Intersection observer polyfill for IE */
import { ResizeObserver as Polyfill } from '@juggle/resize-observer'
import { ChannelledObservable } from '../reactive/observable'

declare global {
  interface Window {
    ResizeObserver: typeof Polyfill
  }
}

type RO = import('@juggle/resize-observer').ResizeObserver

export function createResizeObservable() {
  const observable = new ChannelledObservable<Element, RO>(
    ({ next, error, complete }) => {
      /* Entries is an array of entries for every element that changed */
      let disconnected = false
      let started = false
      let source: Promise<RO> | RO
      let getSource = async () => {
        const ResizeObserver =
          window.ResizeObserver ||
          (await import('@juggle/resize-observer')).ResizeObserver
        if (disconnected) return
        started = true
        return new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            /* Get the callback for the specific element */
            next(entry.target, entry)
          })
        })
      }

      source = getSource().then((r) => {
        source = r
        return r
      })

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
    }
  )

  return observable
}
