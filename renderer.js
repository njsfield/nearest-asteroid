var fs = require("fs");

function mergeValues(values, content) {

  return content + values;
}

function view(templateName, values, reponse) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  //Insert values in to the content
  fileContents = mergeValues(values, fileContents);
  //Write out the contents to the response
  reponse.write(fileContents);
}

module.exports.view = view;
