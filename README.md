# @carpo/utils

## Usage

```js
import install from 'yugo-utils'

install()
const { go, error, shouldWait } = Promise.ready<number>()
const number = 20
setTimeout(() => {
  go(number)
}, 20)
shouldWait.then(console.log) // -> 20
```
