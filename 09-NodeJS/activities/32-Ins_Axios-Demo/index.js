const axios = require("axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });

  // 'promis' syntax is just a sweeter way of writting 
  //fs.readFile("animals.json", "utf8", function(err, data)
  //axios goes out and requests information about the Matrix