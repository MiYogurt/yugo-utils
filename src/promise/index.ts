type Tresolve<T> = (value?: T) => void
type Treject<T> = (reason?: T) => void

declare global {
  interface PromiseConstructor {
    ready<T>(): {
      go: (value?: T) => void
      error: (reason?: T) => void
      shouldWait: Promise<T>
    }
  }
}

export function ready<T extends any>() {
  let go: Tresolve<T>, error: Treject<T>
  const shouldWait = new Promise<T>((res, rej) => {
    ;[go, error] = [res, rej]
  })
  return {
    go,
    error,
    shouldWait
  }
}

export default function install() {
  if (typeof Promise !== 'undefined') {
    Promise.ready = ready
  }
}
