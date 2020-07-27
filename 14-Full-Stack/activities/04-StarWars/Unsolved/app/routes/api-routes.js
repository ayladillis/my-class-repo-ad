// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Characters = require("../config/character.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters", function(req, res) {
    Characters.findOne({ 
      where: {
        name: req.body.name
      }
     }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
    // If the user provides a specific character in the URL...
    if (res.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      characters.searchCharacter(res.params.characters, function(data) {
        res.json(data);
      });

    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Characters.findAll({ })
      .then(function(results){
        res.json(results);
      });
        
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    // Then send it to the ORM to "save" into the DB.
    // orm.addCharacter(character, function(data) {
    //   console.log(data);
    // });

  });
};
