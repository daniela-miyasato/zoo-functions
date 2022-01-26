const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objeto = {};
  // const especie = data.species.find((element) => element.name === animal.specie);

  if (animal === undefined) {
    data.species.forEach((elemento) => { objeto[elemento.name] = elemento.residents.length; });
    return objeto;
  }
  if (animal.sex === undefined) {
    return data.species.find((element) => element.name === animal.specie).residents.length;
  }
  // if (animal.sex === undefined) {
  //   return especie.residents.length;
  // }
  const sexFilter = (element) => element.sex === animal.sex;

  return data.species.find((element) =>
    element.name === animal.specie).residents.filter(sexFilter).length;
}
console.log(countAnimals({ specie: 'bears' }));
module.exports = countAnimals;
