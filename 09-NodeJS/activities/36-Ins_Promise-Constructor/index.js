const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}
// .then if funciton is right and .catch if its wrong!
readFileAsync("example.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });



//---------------Callback Example

function readFileCallBack(path, encoding, cb) {
    fs.readFile(path, encoding, function(err, data) {
      cb(err, data)
    });
  });
}

function myCallBack(isErr, results){
   if (isErr) {
        return console.log(err);
    }

    return results
}

console.log(readFileCallBack("example.txt", "utf8", myCallBack));






