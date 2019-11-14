let db = require("../models")

module.exports = function(app) {
    app.post("/api/newItem", function (req, res){
        console.log(req.body);
        // console.log(req.body.name)
        db.Item.create(req.body)
        .then(function(results) {
          res.json(results)
        })
      }) 

      app.get("/api/podcast", function(req, res) {
        db.Item.findAll({}).then(function(results) {
          res.json(results);
        });
      });


app.get("/api/podcast/:id", function(req, res) {
  db.Item.findAll({
    where: {
      UserId: req.params.UserId
    }
  }).then(function(podcast) {
    res.json(podcast);
  });
});

app.get("/api/movie", function(req, res) {
  db.User.findAll({}).then(function(movie) {
    res.json(movie);
  });
});

}
