const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    const NE = data.species.filter((element) => element.location === 'NE')
      .map((element) => `${element.name}`);

    const NW = data.species.filter((element) => element.location === 'NW')
      .map((element) => `${element.name}`);

    const SE = data.species.filter((element) => element.location === 'SE')
      .map((element) => `${element.name}`);

    const SW = data.species.filter((element) => element.location === 'SW')
      .map((element) => `${element.name}`);

    return { NE, NW, SE, SW };
  }
  // if (options.includeNames === true) {
  // }
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
