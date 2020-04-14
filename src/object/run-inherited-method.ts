/* 
Shortcut around calling `super.method()` inside client code
*/
export function runInheritedMethod<T extends {}, K extends keyof T>(
  instance: T,
  key: K,
  ...args: T[K] extends (...args: any) => any ? Parameters<T[K]> : []
) {
  const proto = Object.getPrototypeOf(Object.getPrototypeOf(instance))
  return proto[key].apply(instance, args)
}

export function getInheritedMethod<T extends {}, K extends keyof T, V = T[K]>(
  instance: T,
  key: K
) {
  const proto = Object.getPrototypeOf(Object.getPrototypeOf(instance))
  return typeof proto[key] === 'function' ? proto[key] : undefined
}

export function runIfDifferent<Args extends []>(
  fnA: (...args: Args) => any | undefined,
  fnB: (...args: Args) => any | undefined,
  thisArg: any,
  ...args: Args
) {
  // console.log(fnA, '->', fnB, fnA === fnB)

  let results = [
    typeof fnA === 'function' ? fnA.apply(thisArg, args) : undefined,
    typeof fnB === 'function' && fnA !== fnB
      ? fnB.apply(thisArg, args)
      : undefined
  ]

  return results as [
    ReturnType<typeof fnA> | undefined,
    ReturnType<typeof fnB> | undefined
  ]
}
