/**
 * Exercise 22:
 * ------------
 * Write a JavaScript function that accepts a 
 * string as a parameter and counts the number 
 * of vowels within the string.
 */

const countVowels = (str) =>
  str.match(/[aeiou]/gi).length;

console.log(countVowels('webmaster'))
console.log(countVowels('php'))