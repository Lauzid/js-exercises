/**
 * Exercise 8:
 * -----------
 * Write a JavaScript program to concatenate two strings 
 * except their first character.
 */

const str = "";

const concatenateStrings = (str1, str2) =>
  str.concat(str1.substring(1),(str2.substring(1)));

console.log(concatenateStrings('refuse', 'resist'))

