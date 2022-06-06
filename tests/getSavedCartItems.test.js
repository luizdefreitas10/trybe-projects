const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('se ao executar a função, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('se ao executar a função, o método localStorage.getItem é chamado com o cartItems como parámetro', () => {
    getSavedCartItems();;
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
