//Function that takes a number, assigns a colour to it, and returns html markup containing a <td> element, with a class set to the colour, and includes the number itself

function colorpicker (num) {
    var color = ["lightgreen","darkgreen","lightyellow","darkyellow","lightorange","darkorange","lightred","darkred"];
    var result;
   if (num > 100000) result = color[0];
   if (num < 100000 && num > 80000) result = color[1];
   if (num < 80000 && num > 60000) result = color[2];
   if (num < 60000 && num > 40000) result = color[3];
   if (num < 40000 && num > 10000) result = color[4];
   if (num < 10000 && num > 5000) result = color[5];
   if (num < 5000 && num > 1000) result = color[6];
   if (num < 1000) result = color[7];
    return "<td class='" + result + "'>" + num + "km</td>";
}


module.exports.colorpicker = colorpicker;
