/**
 * Exercise 3:
 * -----------
 * Write a JavaScript program to replace every
 * character in a given string with the character 
 * following it in the alphabet.
 */
// split()        significa: transforme em array.
// map()          significa: execute uma função em cada elemento do array.
// charCodeAt()   significa: retorne o Unicode de um caractere na string.
// fromCharCode() significa: transforme de Unicode para letra.
// join()         significa: retorne um array como string.
const moveCharsForward = (str) => 
  str.split('')
  .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
  .join('');

console.log(moveCharsForward('abcd'));