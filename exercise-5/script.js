/**
 * Exercise 5:
 * -----------
 * Write a JavaScript program to create a new 
 * string adding "New!" in front of a given string. 
 * If the given string begins with "New!" already 
 * then return the original string.
 */

/**
 * Fluxograma:
 * -----------
 * 1. fazer uma função que receba uma string como parametro
 * 2. a função deve comparar se a string recebida possui a string "New!"
 * 3. condicional: 
 * 3.1. SE string recebida possuir "New!" ENTÃO concatenar "New!" nela.
 * 3.2. SE NÃO apenas retornar a string original.
 * 
 * se o valor retornado é menor que zero, quer dizer que não possui, portanto precisa concatenar
 */

const addNewTo = (str) => (str.search("New!") < 0) ? `New! ${str}` : `${str}`;

console.log(addNewTo("Offers"))

 