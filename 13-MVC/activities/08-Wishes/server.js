var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "wish_DB"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  // root route
  app.get('/', function(req, res){
      connection.query("SELECT * FROM wishes", function(err, data){
        if (err) throw err;

        res.render('index', { wish: data});
      });
  });

  app.post('/', function(req, res){
    connection.query("INSERT INTO wishes (wish) VALUES (?", [req.body.wish], function(err, result){
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
  });

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  