var number = require('./module_1');
var dollars = require('./module_2');

exports.numToDollar = function(){

  return dollars(number(100, 1000000));
};

exports.balance = function() {
  return 'Account balance: \n';
};
