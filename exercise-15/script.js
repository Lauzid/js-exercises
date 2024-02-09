/**
 * Exercise 15:
 * ------------
 * Write a JavaScript program to replace the first digit in a 
 * string (should contains at least digit) with $ character.
 */

// Fiz um código diferente do proposto. O oficial está em "script2.js".
const replaceFirstChar = (str) => {
  const chars = str.split('')
  chars[0] = '$'
  return chars.join('')
}

console.log(replaceFirstChar('geralt'))
console.log(replaceFirstChar('witcher'))
console.log(replaceFirstChar('vesemir'))