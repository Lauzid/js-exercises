/**
 * Exercise 19:
 * ------------
 * Write a JavaScript program to generate a
 * random hexadecimal color code.
 */

/**
 * .toString(16) está sendo aplicado á um Number Object que é "Math.floor(Math.random() * 16)",
 * portanto, pode receber no parâmetro um 'radix' de 2 - 36. Se o radix for 16 converte a String
 * em Hexadecimal, se for 2 vai converter para binario.
 */ 

const getRandomHexNumber = () =>
  Math.floor(Math.random() * 16).toString(16)

const getRandomHexColor = () =>
  '#' + Array.from({ length: 6 }).map(getRandomHexNumber).join('')

console.log(getRandomHexColor())
console.log(getRandomHexColor())
console.log(getRandomHexColor())