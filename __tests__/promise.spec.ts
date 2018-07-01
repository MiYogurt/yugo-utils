import { ready } from '../src/promise'
import installPromise from '../src/promise'

test('should ready function working', async () => {
  const { go, error, shouldWait } = ready<number>()
  const number = 20
  setTimeout(() => {
    go(number)
  }, 20)
  expect(shouldWait).resolves.toBe(number)
})

test('should install to Promise ready', async () => {
  installPromise()
  const { go, error, shouldWait } = Promise.ready<number>()
  const number = 20
  setTimeout(() => {
    go(number)
  }, 20)
  const value = await shouldWait
  expect(value).toBe(number)
})

test('should install to Promise pipe', async () => {
  installPromise()
  const start = Promise.resolve(20)
  const addOne = num => num + 1
  const addtwo = num => num + 2
  const num = await Promise.pipe<number>(start, addOne, addtwo)
  expect(num).toBe(23)
})
