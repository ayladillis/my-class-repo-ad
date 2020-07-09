var fs = require("fs");

function logBefore(message,func) {
  console.log(message);

  func();
}


function runIf(func, bool) {
  if (bool) {
    func();
  }
}

function wrap(func, value) {
  return function() {
    return func(value);
  };
}

var output = wrap(function(val){
  // console.log("Hello " + val)
  return "Hello" + val
}, 2)

console.log(output());

// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

});

// Alternatively, we can assign our function to a variable,
// and pass it by name.
var writeFileCallback = function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

};

fs.writeFile("log.txt", "Log message!", writeFileCallback);
