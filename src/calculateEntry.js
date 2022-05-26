const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitorsCounter = {};
  const childAge = entrants.filter((entrant) => entrant.age < 18).length;
  const adultAge = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorAge = entrants.filter((entrant) => entrant.age >= 50).length;
  visitorsCounter.adult = adultAge;
  visitorsCounter.child = childAge;
  visitorsCounter.senior = seniorAge;
  return visitorsCounter;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const counter = countEntrants(entrants);
  const adultPrice = counter.adult * prices.adult;
  const childPrice = counter.child * prices.child;
  const seniorPrice = counter.senior * prices.senior;
  return adultPrice + childPrice + seniorPrice;
}

console.log(calculateEntry([
  { name: 'Núbia Souza', age: 18 },
]));

module.exports = { calculateEntry, countEntrants };
