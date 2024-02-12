/**
 * Exercise 18:
 * ------------
 * Write a JavaScript program to convert a comma-separated 
 * values (CSV) string to a 2D array. A new line indicates 
 * a new row in the array.
 * 
 * Example:
 * --------
 * abc,def,ghi
 * jkl,mno,pqr
 * stu,vwx,yza
 */

/**
 * Método split vai criar um Array com a string fornecida e irá separar os elementos do Array
 * usando a RegExp \n, que significa que irá separar a cada nova linha.
 * 
 * Método map aplica esta função row => row.split(',') para cada elemento do array.
 */
const convertCSV = (csvStr) =>
  csvStr.split('\n').map(row => row.split(','))

const str = 
`abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(convertCSV(str))