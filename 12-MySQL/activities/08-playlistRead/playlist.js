var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlistDB"
});
// make connection to sql
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryDanceSongs
});

function afterConnection() {
    var genre = "Rock";
    var artist = ""
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function create(title, artist, genere){
    connection.query("INSERT INTO songs(title, artist, genre) value (\"" + title + "\", " + \"" + artist +,)
}