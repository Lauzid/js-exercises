/**
 * Exercise 21:
 * ------------
 * Write a JavaScript function that returns a 
 * passed string with letters in alphabetical order. 
 * 
 * Example string: 'webmaster' 
 * Expected Output: 'abeemrstw'
 */

/**
 * Plano:
 *  transformar string em array
 *  dividir cada letra da string em um elemento do array
 *  aplicar sort() no array para organizar em ordem alfabética
 *  retornar este array em uma string para retornar.
 */

const alphabeticalOrder = (str) =>
  str.split('').sort().join('')

console.log(alphabeticalOrder('webmaster'))
console.log(alphabeticalOrder('frontend'))
