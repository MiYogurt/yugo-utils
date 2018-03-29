type Tresolve<T> = (value?: T) => void
type Treject<T> = (reason?: T) => void

declare global {
  interface PromiseConstructor {
    ready<T>(): { go: Tresolve<T>; error: Treject<T>; shouldWait: Promise<T> }
  }
}

export default function install(): void
