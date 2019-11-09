require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


// Static directory
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"))
// // Routes
// =============================================================


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


module.exports = app;
