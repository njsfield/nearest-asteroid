var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var asteroidsObject = require('./asteroidsobject.js');
var date = require("./date.js");


var commonHeaders = {'Content-Type': 'text/html'};

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeaders);
      renderer.view("header", "", response);
      renderer.view("search", "", response);
      renderer.view("footer", "", response);
      response.end();
    } else {
      //if url == "/" && POST

      //get the post data from body
      request.on("data", function(postBody) {
        //extract the username
        var query = querystring.parse(postBody.toString());
        response.write(query.username);
        response.end();
        //redirect to /:username
      });

    }
  }

}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {

    console.log(request.url);
  if(request.url == "/getdata") {
    response.writeHead(200, commonHeaders);
    renderer.view("header", date.getDate(), response);

    //get json from Treehouse
    var nasaData = new Profile();
    //on "end"
    nasaData.on("end", function(profileJSON){
      //log whether data received;
        console.log("data received")


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
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", "", response);
      renderer.view("footer", "", response);
      response.end();
    });

  }
}

module.exports.home = home;
module.exports.user = user;

