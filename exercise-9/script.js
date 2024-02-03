/**
 * Exercise 9:
 * -----------
 * Given two values, write a JavaScript program to find out 
 * which one is nearest to 100
 */

const nearestTo100 = (a, b) => 
  (100 - a) < (100 - b) ? a : b;

console.log(nearestTo100(70, 30))
console.log(nearestTo100(5, 3))
console.log(nearestTo100(50, 50))
console.log(nearestTo100(110, 99))