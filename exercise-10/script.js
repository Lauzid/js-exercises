/**
 * Exercise 10:
 * ------------
 * Write a JavaScript program to check a given string contains 
 * 2 to 4 occurrences of a specified character.
 */

/**
 * Esta função exclui os caracteres que não sejam iguais ao especificado no parametro.
 * 
 * 1. str.split('')
 *    * split('') é usado para dividir 'str' em um array de caracteres. Se 'str' for 'abc', 
 *      isso resulta em ['a', 'b', 'c'].
 * 2. .filter(ch => ch === char)
 *    * O método filter () é aplicado ao array de caracteres criado pela operação 'split'.
 *    * A função de callback dentro de filter (ch => ch === char) 
 *      é executada para cada elemento do array.
 *    * 'ch' representa cada caractere individual do array, e a expressão 
 *      'ch === char' verifica se o caractere é igual ao caractere específico 
 *      fornecido como argumento ('char').
 *    * Se a expressão for verdadeira, o caractere é mantido no array resultante. 
 *      Se for falsa, o caractere é removido.
 * 3. .length
 *    * Finalmente, o método length é aplicado ao array resultante após o filter, 
 *      retornando o número de elementos restantes no array.
 *    * Isso representa o número de ocorrências do caractere específico na string original.
 */
const countChar = (str, char) =>
  str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) => 
  countChar(str, char) >= 2 && countChar(str, char) <= 4;

console.log(contains2To4('ah', 'a'))
console.log(contains2To4('aah', 'a'))
console.log(contains2To4('aaah', 'a'))
console.log(contains2To4('aaaah', 'a'))
console.log(contains2To4('aaaaah', 'a'))
console.log(contains2To4('aaaaaah', 'a'))