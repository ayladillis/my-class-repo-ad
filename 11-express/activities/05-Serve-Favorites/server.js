var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    switch (path){
        case "/":
            return displayRoot(res);

        case "/favFood":
            return displayfavFood(res);

        case "/favMovie":
            return displayfavMovie(res);
        
        case "/favCSS":
            return displayfavCSS(res);
    }

}