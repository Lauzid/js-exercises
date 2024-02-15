/**
 * Exercise 20:
 * ------------
 * Write a JavaScript function that returns true 
 * if the provided predicate function returns true 
 * for all elements in a collection, false otherwise.
 */

// Função que retorna true se todos elementos forem maiores que zero, se não, retorna false.
const isGreaterThanZero2 = (arr) => {
  for (let x of arr) {
    if (x <= 0) return false
  }
  return true
}

console.log(isGreaterThanZero2([1,2,3,4,5]))