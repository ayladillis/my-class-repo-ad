//first web server
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function jokeRequestOne(request, response) {
    response.end("some dad joke");
}

function jokeRequestTwo(request, response) {

    response.end("another dad joke");
}

var serverOne = http.createServer(jokeRequestOne);
var serverTwo = http.createServer(jokeRequestTwo);

serverOne.listen(PORTONE)