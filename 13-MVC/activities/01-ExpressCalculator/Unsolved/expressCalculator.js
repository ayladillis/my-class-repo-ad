// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:numOne/:numTwo", function(req, res) {
 
  var operation = req.params.operation;

  var numOne = parseInt(req.params.numOne);
  var numTwo = parseInt(req.params.numTwo);
  var result;

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    case '+':
    // Add your logic here. Pun intended.
    result = numOne + numTwo;
    break;
  case "subtract":
    case '-':
    // Subtract logic
    result = numOne - numTwo;
    break;
  case "multiply":
    case '*':
    // Multiply
    result = numOne * numTwo;
    break;
  case "divide":
    case '/':
    // Divide
    result = numOne / numTwo;
    break;
  default:
    // Handle anything that isn't specified
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
