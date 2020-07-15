// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // console.log(req);
  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function(data) {
    console.log("looks like data");
    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end("Hello There");
  });

}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
