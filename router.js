var Generate = require("./generate.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var asteroidsObject = require('./asteroidsobject.js');

//Create Date title





var commonHeaders = {'Content-Type': 'text/html'};

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show home

      var now = new Date().toString().split(" ").slice(0,4).join(" ");
      var datestring = '<h1>' + now + '</h1>';

      response.writeHead(200, commonHeaders);
      renderer.view("header", datestring, response);
      renderer.view("home", "", response);
      renderer.view("footer", "", response);
      response.end();
    } else {
      //get the post data from body
      request.on("data", function(postBody) {
        //extract the username
        var query = querystring.parse(postBody.toString());
        response.write(query.username);
        response.end();
      });

    }
  }

}

//Handle asteroid click
function nasa(request, response) {

  if(request.url == "/generate") {

    var now = new Date().toString().split(" ").slice(0,4).join(" ");
    var datestring = '<h1>' + now + '</h1>';

    response.writeHead(200, commonHeaders);
    renderer.view("header", datestring, response);

    //get json from Treehouse
    var nasaData = new Generate();
    //on "end"
    nasaData.on("end", function(profileJSON){


      //Store the values which we need
      var values = asteroidsObject.collect(profileJSON);

      //Simple response
      renderer.view("profile", values, response);
      renderer.view("footer", "", response);
      response.end();
    });

    //on "error"
    nasaData.on("error", function(error){
      //show error
      renderer.view("error", "", response);
      renderer.view("home", "", response);
      renderer.view("footer", "", response);
      response.end();
    });

  }
}


module.exports.home = home;
module.exports.nasa = nasa;
