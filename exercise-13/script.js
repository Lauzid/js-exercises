/**
 * Exercise 13:
 * ------------
 * Write a JavaScript program to check whether a given array 
 * of integers is sorted in ascending order
 */

/** 
 * Função recebe um array como parâmetro;
 * For loop itera sobre cada elemento dentro do array;
 * Quando atinge a linha 'return false' o loop é interrompido e false é retornado;
 * Como funciona o loop:
 *  1.  Em JS o index do array começa em 0. Supondo que nosso array vai de [1, ..., 5], quando
 *      a propriedade .length entra, o valor que ela vai pegar é 5 que é o tamanho do array.
 *      Só que os indexes vão até 4 (os valores sendo de 1 ate 5, os indexes são de 0 até 4).
 *  2.  É colocado arr.length - 1 porque dessa forma a iteração não vai passar dos limites.
 * Como funciona a condição dentro de if:
 *  1.  condição => (arr[i + 1] < arr[i])
 *      significa=> Se index atual + 1 FOR MENOR QUE index atual... retorne falso.
 */
const isAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) return false
  }
  return true
}

console.log(isAscending([10, 20, 30, 35, 55]))
console.log(isAscending([1, 2, 3, 4, 5]))
console.log(isAscending([5, 10, 30, 20]))
console.log(isAscending([0, 1, -2, -3]))