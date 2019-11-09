const User = require("../models/example");
const Item = require("../models/example");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    User.findAll({}).then(function(user) {
      res.json(user);
    });
  });

  // app.post("/api/user", function (res, req){
  //   User.create(req.body).then(function(user){
  //     res.json(user)
  //   })
  // })

//   Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
