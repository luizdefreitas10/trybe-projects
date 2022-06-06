require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('se a função fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('se fetch é chamado na execução da função fetchItem, recebendo o argumento MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('se, ao executar fetchItem com o argumento MLB1615760527, utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  test('se o retorno de fetchItem com o argumento MLB1615760527, é uma estrutura de dados igual ao objeto item importado no arquivo', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(data).toEqual(item);
  });
  test('se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem', async () => {
    const expectedFetch = await fetchItem();
    expect(expectedFetch).toEqual(new Error('You must provide an url'));
  });
});
