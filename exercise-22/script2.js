/**
 * Exercise 22:
 * ------------
 * Write a JavaScript function that accepts a 
 * string as a parameter and counts the number 
 * of vowels within the string.
 */

const countVowels = (str, letters = ['a', 'e', 'i', 'o', 'u']) =>
  str.split('').filter(s => letters.indexOf(s) > -1).length

console.log(countVowels('javascript'))
console.log(countVowels('geralt'))
console.log(countVowels('php'))