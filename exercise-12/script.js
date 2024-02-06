/**
 * Exercise 12:
 * ------------
 * Write a JavaScript program to find the number of even 
 * values up to a given number
 */

// Esta função retorna quantos números pares existem dentro do array.
const findEvens = (arr) =>
  arr.filter(even => even % 2 === 0).length;

/**
 * Esta função cria um array baseado num número dado.
 * 1. Declara um array vazio;
 * 2. Faz um loop onde a cada iteração é adicionado um elemento ao array;
 *    Ex.: se o número dado for 5, adiciona 1 depois 2 depois 3 depois 4 depois 5.
 * 3. Por fim, retorna o array.
 */
const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i++) {
    returnArray.push(i);
  }
  return returnArray
}

// Aqui fiz 'nesting' para chamar os dois métodos ao mesmo tempo.
console.log(findEvens(createArrayOfNumbers(5)));
console.log(findEvens(createArrayOfNumbers(6)));
console.log(findEvens(createArrayOfNumbers(10)));
console.log(findEvens(createArrayOfNumbers(100)));
