/**
 * Exercise 15:
 * ------------
 * Write a JavaScript program to replace the first digit in a 
 * string (should contains at least digit) with $ character.
 */

// /\d/ é uma RegEx para capturar dígito.
const replaceFirstDigit = (str) =>
  str.replace(/\d/, '$')

console.log(replaceFirstDigit('witcher300'))
