const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const objAnimals = {};
    species.forEach((specie) => {
      objAnimals[specie.name] = specie.residents.length;
    });
    return objAnimals;
  }
  const animalFound = species.filter((specie) => animal.specie === specie.name);
  const animalSex = animalFound[0].residents
    .filter((residentAnimal) => residentAnimal.sex === animal.sex || !animal.sex)
    .reduce((acc) => acc + 1, 0);
  // console.log(animalFound);
  // console.log(animalSex);
  return animalSex;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));

module.exports = countAnimals;