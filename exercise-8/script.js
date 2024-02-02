/**
 * Exercise 8:
 * -----------
 * Write a JavaScript program to concatenate two strings 
 * except their first character.
 */


const concatenateStrings = (str1, str2) =>
  str1.substring(1) + str2.substring(1);

console.log(concatenateStrings('refuse', 'resist'))
console.log(concatenateStrings('simpler', 'way'))
console.log(concatenateStrings('abcd', 'efgh'))

