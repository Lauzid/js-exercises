/**
 * Exercise 14:
 * ------------
 * Write a JavaScript program to get the largest even number 
 * from an array of integers.
 */

/**
 * fazer função para comparar se o numero dentro do array é par, esta função recebe um array
 * como parametro.
 * esta função cria um array com todos os numeros pares que foram coletados. 
 * função deve retornar o array gerado para ser usado na proxima.
 * 
 * fazer função que recebe o array gerado pela função anterior e comparar os numeros para saber
 * qual dos numeros é o maior.
 */
// ainda vou fazer essa ideia funcionar. 
// const filterEvens = (arr) => {
//   const returnArray = [];
//   returnArray.push(arr.filter(even => even % 2 === 0))
//   return returnArray
// }

// Math.max => chamda do método max do Objeto max. Método max retorna o numero com maior valor.
// Math.max(...arr) "..." é um spread operator, ele permite copiar tudo de um array ou objeto
//  para outro array ou objeto. Só essa parte do código já é responsável por capturar o maior
//  número dentro do array, mas em seguida vem o filto que filtra somente números pares.
const maxEven = (arr) => Math.max(...arr.filter(even => even % 2 === 0))

console.log(maxEven([1, 2, 3, 4, 5]))