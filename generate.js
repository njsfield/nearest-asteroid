var EventEmitter = require("events").EventEmitter;
var https = require("https");
var util = require("util");

//Creates a api url request with the current date using the date module

var date = require('./date.js');
var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-05-20&api_key=3NW9wqg2QvSWpj4WAFj3tTQYTK85Hj1UEqKsoRo4'.replace('2015-05-20', date.getDate);

/**
 * An EventEmitter to retrieve NASA NeoWS data
 */

function Generate() {

    EventEmitter.call(this);

    profileEmitter = this;

    //Connect to the API URL https://api.nasa
    var request = https.get(url, function(response) {
        var body = "";
        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error("There was an error retrieving the NASA astroid data"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                    console.log("there was error");
                }
            }
        }).on("error", function(error){
            console.log("error getting data");
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Generate, EventEmitter );

module.exports = Generate;
