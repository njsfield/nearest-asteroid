var http = require('http');
var router = require('./router.js');

// Creates a server
// The two functions handle the homepage request and the nasa data request

var server = http.createServer(function (request, response) {
    router.home(request, response);
    router.nasa(request, response);

})


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port)
});
