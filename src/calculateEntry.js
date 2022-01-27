const data = require('../data/zoo_data');

// const teste = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 45 },
//   { name: 'Carlos Nogueira', age: 63 },
// ];

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;

  const adult = entrants.filter((element) =>
    element.age >= 18 && element.age < 50).length;

  const senior = entrants.filter((element) => element.age >= 50).length;

  return { child, adult, senior };
}
// console.log(countEntrants(teste));

// https://qastack.com.br/programming/6756104/get-size-of-json-object

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitants = countEntrants(entrants);
  const payment = visitants.child * 20.99 + visitants.adult * 49.99 + visitants.senior * 24.99;
  return payment;
}
// console.log(calculateEntry(teste));
module.exports = { calculateEntry, countEntrants };
