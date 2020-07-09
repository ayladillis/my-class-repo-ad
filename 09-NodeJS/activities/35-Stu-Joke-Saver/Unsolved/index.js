const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {

    console.log(res.data.joke);
 

  fs.appendFile(`jokes.txt`, res.data.joke, (err) => {
    if (err) throw err; 
    console.log(`success`);
  });

  // fs.readFile(`jokes.txt`, (err, data) => {
  //   if (err) throw err;
    // console.log(data);
  // })
});