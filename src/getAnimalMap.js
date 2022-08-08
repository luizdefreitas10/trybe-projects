const data = require('../data/zoo_data');

const { species } = data;

const allAnimalNames = species.map((s) => s.name);

const creatingObj = () => {
  const obj = {
    NE: species.filter((s) => s.location === 'NE').map((a) => a.name),
    NW: species.filter((s) => s.location === 'NW').map((a) => a.name),
    SE: species.filter((s) => s.location === 'SE').map((a) => a.name),
    SW: species.filter((s) => s.location === 'SW').map((a) => a.name),
  };
  return obj;
};

const getResidentNames = species.reduce((acc, specie) => `${specie.residents} ${acc}`, []);

const creatingDiffObj = () => {
  const diffObj = {
    NE: species.reduce((acc, animal) => animal.name, []),
    NW: 0,
    SE: 0,
    SW: 0,
  };
  return diffObj;
};

function getAnimalMap(options) {
  if (!options) {
    console.log(getResidentNames);
    return creatingObj();
  }
  // if (options === ({ includeNames: true })) {
  //   return creatingObj();
  // }
}

console.log(getAnimalMap());
// console.log(creatingDiffObj());

module.exports = getAnimalMap;

// const expected = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

// COM INCLUDES:
// NE: [
//   { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//   { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
// ],
