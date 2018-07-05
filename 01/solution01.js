'use strict'

const numbers = [10, 15, 3, 7]
const k = 17

let solution = false
for (let index = 0; index < numbers.length; index++) {
  const result = k - numbers[index]
  if (numbers.includes(result) && index > numbers.indexOf(result)) {
    solution = true
  }
}

console.log(solution)
