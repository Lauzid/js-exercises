/**
 * Exercise 20:
 * ------------
 * Write a JavaScript function that returns true 
 * if the provided predicate function returns true 
 * for all elements in a collection, false otherwise.
 */

// Função que retorna true se todos elementos forem maiores que zero, se não, retorna false.
const isGreaterThanZero = (arr) =>
  arr.every(val => val > 0)

console.log(isGreaterThanZero([1,2,3,4,5]))