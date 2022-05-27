const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função retorna um objeto contendo o horário padrão da semana', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toStrictEqual(expected);
  });
  it('Verifica se, passado Monday e  09:00-AM como parâmetro, retorna uma mensagem a indicar que o zoo está fechado ', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });
  it('Verifica se, passado Tuesday e 09:00-AM como parâmetros, retorna uma string com a indicação de que o zoo está aberto ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se, passado Wednesday e 09:00-PM como parâmetros, retorna uma string com a indicação de que o zoo está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
