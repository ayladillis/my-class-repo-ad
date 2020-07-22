var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "popQuizDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
    readBreakfast();
  });

  function readBreakfast() {
    console.log("Selecting all breakfast...\n");
    connection.query("SELECT * FROM breakfast", function(err, res) {
      if (err) throw err;
      
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }