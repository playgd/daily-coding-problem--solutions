'use strict'

const numbers = [10, 15, 3, 7]
const k = 17

const solution = numbers.some((number, index) => {
  const result = k - number
  return numbers.includes(result) && index > numbers.indexOf(result)
})

console.log(solution)
