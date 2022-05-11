/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// iniciando o projeto, VQV!

// ex: [3, 4, 5];

const average = (array) => {
  let sum = 0;
  let resultAverage = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    let element = typeof array[index];
    if (element === 'number') {
    sum += array[index];
    resultAverage = sum / array.length;
    } else {
      return undefined;
    }
  }
  return Math.round(resultAverage); // https://www.alura.com.br/artigos/formatando-numeros-no-javascript
};

console.log(average([]));

module.exports = average;
