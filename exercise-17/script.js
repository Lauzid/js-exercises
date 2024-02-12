/**
 * Exercise 17:
 * ------------
 * Write a JavaScript program to compare two objects 
 * to determine if the first one contains the same 
 * properties as the second one (which may also have 
 * additional properties)
 */

/**
 * Definindo objetos:
 *  Usa-se a mesma sintaxe de uma variável, porém usando const e {} para definir objeto.
 *  Usando o primeiro exemplo, objA = {a: 1, ...}, onde {(chave):(valor)}.
 */
const objA = {a: 1, b: 2, c: 1};
const objB = {a: 1, b: 1, c: 1};
const objC = {a: 1, b: 1, d: 1};

/**
 * Função recebe dois objetos como parâmetro e compara se o primeiro objeto possui as mesmas
 * chaves do segundo.
 * 
 * Object.keys(a) itera sobre as chaves de um objeto e retorna um Array com os nomes delas
 * 
 * .every() é um método de Array Iteration. Esse método checa se todos valores de um array
 * passam por um teste, se passar, retorna true.
 * O método every() trabalha sobre o Array retornado por "Object.keys(a)".
 * 
 * O "parâmetro" dentro do método every() é uma função de callback que faz o seguinte:
 *  'key' é a chave atual do objeto 'a' que está sendo verificada.
 *  'b[key]' verifica se a chave atual 'key' existe no objeto 'b' e retorna o valor associado-
 *  a essa chave. Se a chave não existir em 'b', 'b[key]' será undefined, o que é avaliado como
 *  false em JS.
 */
const compareObjects = (a, b) => 
  Object.keys(a).every(key => b[key])

console.log(compareObjects(objA, objB))
console.log(compareObjects(objB, objB))
console.log(compareObjects(objB, objC))
console.log(compareObjects(objA, objC))