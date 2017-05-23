

function convertToUsd (number) {
  var dollars = number.toFixed(2);
  return '$' + dollars;
}

module.exports = convertToUsd;
