/* Intersection observer polyfill for IE */
import { ChannelledObservable } from '../reactive/observable'

export function createMutationObservable(
  config: MutationObserverInit = {
    characterData: false,
    attributes: true,
    childList: true,
  }
) {
  const observable = new ChannelledObservable<Element, typeof MutationObserver>(
    ({ next }) => {
      let sources = new Map()

      return {
        onSubscribe(channel) {
          const observer = new MutationObserver((mutations) =>
            next(channel, mutations)
          )
          sources.set(channel, observer)
          observer.observe(channel, config)
        },
        onUnsubscribe(channel) {
          const observer = sources.get(channel)
          observer.disconnect()
        },
        destroy() {
          for (let source of sources.values()) {
            source.disconnect()
          }
          sources = new Map()
        },
      }
    }
  )

  return observable
}
