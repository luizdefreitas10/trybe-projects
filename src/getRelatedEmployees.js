const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  const managedPeople = employees.filter((employee) => employee.managers.includes(managerId));

  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managedPeople.map((person) => `${person.firstName} ${person.lastName}`);
}

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
