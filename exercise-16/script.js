/**
 * Exercise 16:
 * ------------
 * Given a year, report it is a leap year. Return true or false.
 */

// Código mais com mais coisas desnecessárias. Versão melhorar no script2.js

const reportLeapYear = (year) => {
  yr = year.toString().slice(-2)
  if (yr == 0o0 || yr % 4 == 0) {
    return true
  } else {
    return false
  }
}

console.log(reportLeapYear(2020))
console.log(reportLeapYear(2022))
console.log(reportLeapYear(2024))
console.log(reportLeapYear(2000))