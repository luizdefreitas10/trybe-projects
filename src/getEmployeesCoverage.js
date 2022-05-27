const data = require('../data/zoo_data');

const { species, employees } = data;

const animalsId = (id) => species.find((specie) => specie.id === id);

const makingObj = (object) => {
  const getEmployee = employees
    .find((e) => e.firstName === object.name || e.lastName === object.name || e.id === object.id);
  if (getEmployee === undefined) { throw new Error('Informações inválidas'); }
  const mapResponsible = getEmployee.responsibleFor
    .map((animalId) => animalsId(animalId));
  const newObj = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: mapResponsible.map((animal) => animal.name),
    locations: mapResponsible.map((animal) => animal.location),
  };
  return newObj;
};

function getEmployeesCoverage(object) {
  if (!object) {
    return employees.map(getEmployeesCoverage);
  }
  return makingObj(object);
}

// console.log(makingObj({ name: 'Nelson' }));

// getEmployeesCoverage({ id: 'id inválido' });

module.exports = getEmployeesCoverage;
