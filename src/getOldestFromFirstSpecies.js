const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const staff = data.employees.find((element) => element.id.includes(id)); // pega o objeto funcionário
  const firstAnimal = staff.responsibleFor[0]; // acha o primeiro animal
  const infoAnimal = data.species.find((element) => element.id === firstAnimal); // pega o objeto animal
  // const animal = infoAnimal.residents.reduce((ant, atu) => (ant.age > atu.age ? ant : atu)); // tava dando bug, mas arrumei. (tbm funciona)
  const animal = infoAnimal.residents.sort((a, b) => b.age - a.age)[0];
  console.log(animal); // ordena (decrescente) e pega o índice 0 que seria 'age' de maior valor
  return Object.values(animal); // retorna somente os valores
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
