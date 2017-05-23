var http = require('http');

var balance = require('./module_3');

http.createServer(function (req, res) {

res.write(balance.balance());
res.write(balance.numToDollar());
res.end(); //send response now

}).listen(3000); //listening on port 3000
