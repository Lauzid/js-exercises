/**
 * Exercise 6:
 * -----------
 * Write a JavaScript program to create a new string 
 * from a given string taking the first 3 characters 
 * and the last 3 characters of a string and adding 
 * them together. The string length must be 3 or more, 
 * if not, the original string is returned.
 */

const createStr = (str) => 
  str.length >= 3 ? str.slice(0, 3) + str.slice(-3) : str;
  
console.log(createStr('z'));
console.log(createStr('ze'));
console.log(createStr('abc'));
console.log(createStr('abc123edf456'));
console.log(createStr('abcdefghijklmnopqrstuvxywz'));