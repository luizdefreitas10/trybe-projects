const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const colaborator = employees.find((employee) => employee.id === id);
  const firstSpecie = colaborator.responsibleFor[0];
  const pickingResidents = species.find((specie) => specie.id === firstSpecie).residents;
  const sortedItem = pickingResidents.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    }
    return true;
  });
  const older = sortedItem[0];
  const olderFromSpecie = Object.values(older);
  return olderFromSpecie;
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;
