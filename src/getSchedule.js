const data = require('../data/zoo_data');

const { species, hours } = data;
// console.log(hours);
// const weekDays = ['Tuesday'] //Object.keys(hours); // ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
const weekDays = Object.keys(hours); // ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']

const allAnimals = species.map((element) => element.name); // ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes']

const officeHour = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`; // retorna os horários de cada dia
const dayAnimals = (day) => species.filter((animal) =>
  animal.availability.includes(day))
  .map((nomes) => nomes.name); // retorna os animais de cada dia

const eachDayAnimal = (animal) => species.find((specie) => specie.name === animal).availability; // retorna os dias de cada animal

const allSchedule = () => {
  const objeto = {};
  weekDays.forEach((dia) => {
    if (dia === 'Monday') {
      objeto[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      objeto[dia] = {
        officeHour: officeHour(dia),
        exhibition: dayAnimals(dia),
      };
    }
  }); return objeto;
};

const daySchedule = (dia) => {
  const objeto = {};
  if (dia === 'Monday') {
    objeto[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    objeto[dia] = {
      officeHour: officeHour(dia),
      exhibition: dayAnimals(dia),
    };
  }
  return objeto;
};
// console.log(daySchedule('Monday'));

function getSchedule(scheduleTarget) {
  let result = '';
  if (weekDays.includes(scheduleTarget)) {
    result = daySchedule(scheduleTarget);
  }
  if (allAnimals.includes(scheduleTarget)) {
    result = eachDayAnimal(scheduleTarget);
  }
  if (result === '') {
    result = allSchedule();
  }
  return result;
}

// console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
