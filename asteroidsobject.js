var colorclass = require('./colorclass.js');
var date = require('./date.js');


// Function to sort JSON data by miss distance of asteroids, and return html markup for a table containing the data.
// Depending on the distance, a different class is embedded into the Miss Distance <td> element.

function collect(JSONdata) {

    var num = date.getDate();
    var array = [];

    for (var i = 0; i < (JSONdata.near_earth_objects[num]).length; i++) {
        array[i] = JSONdata.near_earth_objects[num][i];
    }

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

    for (var i = 0; i < (JSONdata.near_earth_objects[num]).length; i++) {

        newarray.push(
            "<table>" +

           "<th>#" + (i+1) + "</th>" +

            "<tr>" +
              "<td>" + "Name: " +      "</td>" +
              "<td>" + array[i].name + "</td>" +
            "</tr>" +

             "<tr>" +
              "<td>" + "Miss Distance: " +  "</td>" +
              colorclass.colorpicker(Math.round(array[i].close_approach_data[0].miss_distance.kilometers)) +
            "</tr>" +

             "<tr>" +
              "<td>" + "Relative Velocity: " +      "</td>" +
              "<td>" + Number(array[i].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2) + "kmh</td>" +
            "</tr>" +

             "<tr>" +
              "<td>" + "Est Diameter: " +      "</td>" +
              "<td>" + Number(array[i].estimated_diameter.kilometers.estimated_diameter_min).toFixed(2) * 1000 + "m</td>" +
            "</tr>" +

            "</table>")
    }
    return newarray.join("");

}

module.exports.collect = collect;
