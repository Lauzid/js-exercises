/**
 * Exercise 2
 * ----------
 * Write a JavaScript program to get the
 * extension of a filename.
 */

/**
 * 1. fileName recebe um parâmetro "file" qualquer;
 * 2. O método split() divide uma String em uma lista ordenada de substrings,
 *    coloca essas substrings em um array e retorna o array. O método precisa receber um
 *    "separador" dentro do parâmetro, o qual neste caso é um ponto;
 * 3. O método pop() remove o último elemento de um array e retorna aquele elemento.
 * 
 * Também é possível substituir o método split pelo método slice.
 */
const fileName = (file) => file.split('.').pop();

console.log(fileName('sample.txt'));
console.log(fileName('index.html'));

/**
 * 1. getFileExtension recebe um parâmetro 'str' qualquer;
 * 2. Dentro do método slice temos "str.lastIndexOf" que captura a última ocorrência do que
 *    estiver dentro dos argumentos, neste caso, um ponto.
 * 3. O método slice vai capturar o texto que veio a partir do ponto. Neste método quando
 *    fornecemos apenas um argumento, esté o seu comportamento. Retorna tudo que está a 
 *    partir de um referencial dado (neste caso, o ponto).
 */
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('sample.txt'));
console.log(getFileExtension('index.html'));