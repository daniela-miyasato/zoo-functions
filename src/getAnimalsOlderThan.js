const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const theAnimal = data.species.find((element) => element.name === animal); // pega o objeto do parametro animal
  return theAnimal.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
