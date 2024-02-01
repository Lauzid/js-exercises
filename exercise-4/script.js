/**
 * Exercise 3:
 * -----------
 * Write a JavaScript program to get the current date. 
 * Expected Output: 
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.
 */

const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();

const getCurrentDate = () => `(Exercicio 4.1) A data de hoje é: ${d}/${m}/${y}.`;

console.log(getCurrentDate());