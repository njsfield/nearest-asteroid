var date = require("./date.js");


function collect(JSONdata) {
    var array = JSONdata.near_earth_objects[date.getDate()];

    array.sort(function (a, b) {
        if (a.close_approach_data[0].miss_distance.kilometers > b.close_approach_data[0].miss_distance.kilometers) {
            return 1;
        }
        if (a.close_approach_data[0].miss_distance.kilometers < b.close_approach_data[0].miss_distance.kilometers) {
            return -1;
        }
        return 0;
    });
    var newarray = [];

    for (var i = 0; i < array.length; i++) {

        newarray.push("<h2>" + (i+1) + "</h2>" + "<h3>Name: </h3>" + "<span>" + array[i].name + "</span>" +
        "<h3> Miss Distance: </h3>" + "<span>" + array[i].close_approach_data[0].miss_distance.kilometers + "</span>" +
        "<h3> Relative Velocity: </h3>" + "<span>" + array[i].close_approach_data[0].relative_velocity.kilometers_per_hour + "</span>" +
        "<h3> Est Diameter: </h3>" + "<span>" + array[i].estimated_diameter.kilometers.estimated_diameter_min + "</span>")
    }
    return newarray.toString();

}

module.exports.collect = collect;
