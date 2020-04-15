export function debounce(callback: (...args: any[]) => any, time: number) {
  let timer: number
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, time)
  }
}
