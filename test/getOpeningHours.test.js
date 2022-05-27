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
  it('Verifica se, passado argumentos inválidos, retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Thu', '04:00-PM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
