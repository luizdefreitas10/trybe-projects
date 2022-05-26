const data = require('../data/zoo_data');

const { species, hours } = data;

const availableAnimal = (day) => species.reduce((accumulator, specie) => {
  if (specie.availability.includes(day)) {
    accumulator.push(specie.name);
  }
  return accumulator;
}, []);

function makingObj() {
  const objWeekDays = {
    Tuesday: { officeHour: 'Open from 8am until 6pm', exhibition: availableAnimal('Tuesday') },
    Wednesday: { officeHour: 'Open from 8am until 6pm', exhibition: availableAnimal('Wednesday') },
    Thursday: { officeHour: 'Open from 10am until 8pm', exhibition: availableAnimal('Thursday') },
    Friday: { officeHour: 'Open from 10am until 8pm', exhibition: availableAnimal('Friday') },
    Saturday: { officeHour: 'Open from 8am until 10pm', exhibition: availableAnimal('Saturday') },
    Sunday: { officeHour: 'Open from 8am until 8pm', exhibition: availableAnimal('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return objWeekDays;
}

const daysOfWeek = Object.keys(hours);
const animals = species.map((specie) => specie.name);
const animalsAndDays = [...animals, ...daysOfWeek];

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || !animalsAndDays.includes(scheduleTarget)) {
    return makingObj();
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: makingObj()[scheduleTarget] };
  }
  if (animals.includes(scheduleTarget)) {
    const selectedAnimal = species.filter((specie) => specie.name === scheduleTarget)[0];
    return selectedAnimal.availability;
  }
}
// console.log(getSchedule('Monday'));

module.exports = getSchedule;
