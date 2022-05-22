const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

const getAnimalsOlderThan = (animalName, inputAge) => species
  .find((specie) => specie.name === animalName).residents
  .every(({ age }) => inputAge < age);

// const getAnimalsOlderThan = (animalName, inputAge) => {
//   return species.find((specie) => {
//     return specie.name === animalName;
//   }).residents.every(({ age }) => {
//     return inputAge < age;
//   });
// };

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
