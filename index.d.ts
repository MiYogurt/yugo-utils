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
export default function install(): void
