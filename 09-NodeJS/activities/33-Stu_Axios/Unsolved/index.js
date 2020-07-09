const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res){
      const repoNames = res.data.map(function(repo){
        return repo.name;
      });

      const reponames = [];
      for (var i = 0; i < res.data.length; i++) {
        repoNames.push(res.data[i].name);
      }

      const repoNamesStr = reponames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err){
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });

