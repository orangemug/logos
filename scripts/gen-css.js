var fs         = require("fs");
var path       = require("path");
var Handlebars = require("handlebars");

var basedir     = __dirname+"/../logos";
var templateRaw = fs.readFileSync(__dirname+"/templates/css.handlebars").toString();
var outputPath  = __dirname+"/../css/logos.css";

fs.readdir(basedir, function(err, files) {
  var logos = files.map(function(file) {
    return path.basename(
      file,
      path.extname(file)
    );
  });

  var css = Handlebars.compile(templateRaw)({
    logos: logos
  });

  fs.writeFile(outputPath, css, function() {
    console.log("Written to: %s", outputPath);
  });
});

