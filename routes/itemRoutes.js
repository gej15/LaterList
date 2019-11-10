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
}

