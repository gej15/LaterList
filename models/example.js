// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/conection.js");

// Creates a "Book" model that matches up with DB
var User = sequelize.define("user", {
  userName: Sequelize.STRING
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;

var Item = sequelize.define("items", {
  userId: Sequelize.INTEGER,
  catagory: Sequelize.STRING,
  title: Sequelize.STRING,
  itemId: Sequelize.STRING
});

// Syncs with DB
Item.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Item;