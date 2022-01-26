const data = require('../data/zoo_data');

// https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const subordinados = data.employees.filter((element) => element.managers.includes(managerId)); // pega os funcionários que tem o 'managerId'como gerente
    return subordinados.map((element) => `${element.firstName} ${element.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
