/**
 * Exercise 19:
 * ------------
 * Write a JavaScript program to generate a
 * random hexadecimal color code.
 */

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const getRandomNumber = () =>
  Math.floor(Math.random() * hex.length)

const getRandomHex = () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  return hexColor
}

console.log(getRandomHex())
  