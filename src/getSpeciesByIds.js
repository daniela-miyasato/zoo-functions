const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((item) => data.species.find((element) => element.id === item));
}

// console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
module.exports = getSpeciesByIds;
