type Tresolve<T> = (value?: T) => void
type Treject<T> = (reason?: T) => void
type thenFN = (value: any) => any

declare global {
  interface PromiseConstructor {
    ready<T>(): {
      go: (value?: T) => void
      error: (reason?: T) => void
      shouldWait: Promise<T>
    }
    pipe<T>(...args: Array<thenFN | Promise<any>>): Promise<T>
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

export function pipe<T>(...args: Array<thenFN | Promise<any>>): Promise<T> {
  return args.reduce((prev: Promise<any>, current: thenFN) =>
    prev.then(current)
  ) as Promise<T>
}

export default function install() {
  if (typeof Promise !== 'undefined') {
    Promise.ready = ready
    Promise.pipe = pipe
  }
}
