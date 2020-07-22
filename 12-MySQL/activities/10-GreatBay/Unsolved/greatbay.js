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

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

// function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
          postAuction();
        }
        else {
          bidAuction();
        }
      });
  }

function postAuction(){
    inquirer
        .prompt([
            {
            name: "bidItem",
            type: "input",
            message: "What is the item you are entering?"
        },
        {
            name: "bidCategory",
            type: "input",
            message: "What category is it in?"
        },
        {
            name: "startBid",
            type: "input",
            message: "What is the starting bid?"
        },
    ]).then(async function({bidItem, bidCategory, startBid}){
           await createProduct(bidItem, bidCategory, startBid);
        })
 }


 function createProduct(bidItem, bidCategory, startBid) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO auctions SET ?",
      {
        item_name: bidItem, 
        category: bidCategory, 
        starting_bid: parseInt(startBid),
        highest_bid: 0
      },
      function(err, res) {
        if (err) console.log(err)
        console.log(res.affectedRows + " product inserted!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
