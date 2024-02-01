/**
 * Exercise 1:
 * -----------
 * Write a JavaScript program to check two 
 * numbers and return true if one of the number
 * is 100 or if the sum of the two numbers is 100.
 */

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b === 100);

// returns true
console.log(isEqualTo100(100, 0)); 
console.log(isEqualTo100(0, 100));

// returns false
console.log(isEqualTo100(10, 20));
console.log(isEqualTo100(20, 10));

// returns true
console.log(isEqualTo100(50, 50));
console.log(isEqualTo100(40, 60));

