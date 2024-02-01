/**
 * Outra maneira de faze o mesmo exercício.
 */

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('Offers'));

/**
 * Esta solução também é válida, porém ela apenas confere se a string "New!" está no começo
 * (no index) da string dada como argumento. Na solução que eu fiz em "script.js", o código
 * confere a existência da string "New!" em toda a string dada como argumento, o que eu acho
 * mais eficiente.
 */