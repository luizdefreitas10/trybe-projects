require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se fetch foi chamada ao executar a função com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint correto', async () => {
    await fetchProducts('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  test('se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const fetchObj = await fetchProducts('computador');
    expect(fetchObj).toStrictEqual(computadorSearch);
  });
  test('se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem', async () => {
    const expectedFetch = await fetchProducts();
    expect(expectedFetch).toEqual(new Error('You must provide an url'));
  });
});
