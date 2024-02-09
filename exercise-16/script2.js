/**
 * Exercise 16:
 * ------------
 * Given a year, report it is a leap year. Return true or false.
 */

const isLeap = (year) => year % 4 === 0;

console.log(isLeap(2024))
console.log(isLeap(2023))
console.log(isLeap(2022))
console.log(isLeap(2021))
console.log(isLeap(2020))