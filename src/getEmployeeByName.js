// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const matchNames = (item) =>
    item.firstName === employeeName
    || item.lastName === employeeName; // callback

  const theEmployee = data.employees.find(matchNames);
  return theEmployee;
}

module.exports = getEmployeeByName;
