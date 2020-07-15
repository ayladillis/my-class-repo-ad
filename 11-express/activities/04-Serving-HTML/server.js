// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

// 1xx: Informational
// It means the request has been received and the process is continuing.

// 2xx: Success
// It means the action was successfully received, understood, and accepted.

// 3xx: Redirection
// It means further action must be taken in order to complete the request.

// 4xx: Client Error
// It means the request contains incorrect syntax or cannot be fulfilled.

// 5xx: Server Error
// It means the server failed to fulfill an apparently valid request.