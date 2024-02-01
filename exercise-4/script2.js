/**
 * Outra forma de fazer o mesmo exercício com mais boas práticas:
 * 
 * 1. date.getDate() obtem o dia do mes que pode ser de 1 a 31.
 * 2. ('0' + date.getDate()) concatena '0' com o valor de getDate()
 * 3. .slice(-2) garante que mesmo que haja mais de 2 digitos, apenas 2 serão mantidos.
 * 
 * Se getDate() retornar 15, após a concatenação o valor será 015. Após slice(-2), teremos 15.
 * O exemplo prático acima se aplica para dias quantos para meses.
 * Na linha 15 em (date.getMonth() + 1) incrementei 1 para deixar na maneira adequada (de 1-12)
 * porque getMonth() retorna de 0 a 11.
 * No retorno da função temos um template string, onde dentro de '${}' posso colocar variável.
 */

const showDate = (date = new Date()) => {
  const days = ('0' + date.getDate()).slice(-2);
  const months = ('0' + (date.getMonth() + 1)).slice(-2);
  const years = date.getFullYear();
  return `(Exercicio 4.2) A data de hoje é: ${days}/${months}/${years}.`;
}

console.log(showDate());