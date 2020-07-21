// dependencies
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservation data
var tables = [
    {
        
    }
]

// routes
// =============================================================
// Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  // Displays all tables
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res){
    return res.json("tables");
  });

  app.post("/api/tables", function(req, res){
    tables.push(req.body);
    return res.end(" ")
  });

  app.post("/api/reservation", function(req, res){

    });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });