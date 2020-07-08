var firstArg = process.argv[2]

console.log(firstArg);

/////

var fs = require("fs");

fs.appendFile('log.txt', " " + firstArg, (err) => {
    if (err) throw err;
    console.log('The' + firstArg + 'was appended to file!');
  });