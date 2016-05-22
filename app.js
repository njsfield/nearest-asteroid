var http = require('http');
var router = require('./router.js');


var server = http.createServer(function (request, response) {
    router.home(request, response);
    router.nasa(request, response);

})
server.listen(8000);
console.log("Server listening at port 8000");
