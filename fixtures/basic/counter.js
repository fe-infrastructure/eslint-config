import { map } from 'lodash-es'
import { d } from '@/utils'
import { a, c } from './a'
import { b } from './b'

console.log(d)

/* eslint-enable */
const user = {
  name: 'foo',
  age: 18
}

export function setupCounter (element) {
  let counter = 0
  const setCounter = count => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
