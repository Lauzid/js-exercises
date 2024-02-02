/**
 * Exercise 7:
 * -----------
 * Write a JavaScript program to extract the first 
 * half of a string of even length. 
 */

/**
 * 1. capturar tamanho da string
 * 2. calcular modulo do tamanho da string para saber se é par, se der zero é par.
 * 3. sendo par, capturar metade da string com slice(vou pensar nos argumentos)
 * 4. retornar a metade capturada.
 * 5. se nao for par, retornar false.
 */

const getHalfEvenString = (str) => str.length % 2 == 0 ? str.slice(0, str.length / 2) : false;

console.log(getHalfEvenString('javascript'))
console.log(getHalfEvenString('python'))
console.log(getHalfEvenString('cobol'))
console.log(getHalfEvenString('php'))