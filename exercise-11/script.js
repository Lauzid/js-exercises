/**
 * Exercise 10:
 * ------------
 * Write a JavaScript program to find the number of even 
 * digits in a an array of integers.
 */

/**
 * Example:
 * [1, 2, 3, 4, 5, 6]
 * even numbers are: 2 4 6 
 * should return 3 because there's three even numbers.
 */

// Não se pede array como parametro usando [].
// A função dentro do método filter PRECISA ser uma função que retorna true para funcionar.
// Para chamar argumentos dentro de um array, continue usando a sintaxe: método([argumentos])
// no caso de chamar argumentos no formato de um array.

const findEvens = (arr) =>
  arr.filter(even => even % 2 === 0).length;

console.log(findEvens([1, 2, 3, 4, 5, 6]))
console.log(findEvens([-3, -2, -1, 0, 1, 2, 3]))
console.log(findEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))