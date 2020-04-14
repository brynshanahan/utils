function runActions(targets, actions) {
  let result = undefined
  for (let target of targets) {
    let prev
    let t = target
    for (let action of actions) {
      if (action.get) {
        prev = t
        t = t[action.get]
      } else if (action.set) {
        result = t[action.set[0]] = action.set[1]
      } else if (action.apply) {
        const [args] = action.apply
        if (!result) {
          result = t.apply(prev, [args])
        } else {
          t.apply(prev, [args])
        }
      }
    }
  }

  return result
}

function createProxyNode(elements) {
  const targetElement = elements[0]
  let proxies = []

  function createProxy(obj, actions = []) {
    let prox = new Proxy(obj, {
      get(target, prop) {
        let val = target[prop]
        if (typeof val === 'object' || typeof val === 'function') {
          return createProxy(val, [...actions, { get: prop }])
        }
        return val
      },
      set(target, prop, value) {
        actions.push({ set: [prop, value] })
        runActions(elements, actions)
      },
      apply(target, thisArg, argumentsList) {
        actions.push({ apply: argumentsList })
        return runActions(elements, actions)
      }
    })

    proxies.push(prox)

    return prox
  }

  return createProxy(targetElement)
}
