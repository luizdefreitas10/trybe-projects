const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    product1 = productDetails('Alcool gel', 'Máscara')[0].name;
    product2 = productDetails('Alcool gel', 'Máscara')[1].name;
    expect(product1 !== product2).toBe(true);
    productDetails1 = productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123'); //https://www.w3schools.com/Jsref/jsref_endswith.asp
    productDetails2 = productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123'); // https://www.w3schools.com/Jsref/jsref_endswith.asp
    expect(productDetails1 && productDetails2).toBe(true);
  });
});


// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.