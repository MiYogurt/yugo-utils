# 0.o

## usgae

```js
import install from '0.o'

install()
const { go, error, shouldWait } = Promise.ready<number>()
const number = 20
setTimeout(() => {
  go(number)
}, 20)
shouldWait.then(console.log) // -> 20
```
