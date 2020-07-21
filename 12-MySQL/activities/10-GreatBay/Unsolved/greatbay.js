var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "greatbayDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });
  
inquirer.prompt ([
    {
        type: "list",
        name: "prompts",
        message: "Will you be posting or bidding?",
        choices: [
            "Bidding",
            "Posing"
        ]
    },
    {

    }
]).then(function(data){

})
