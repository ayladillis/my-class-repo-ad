var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "whats your name?"
    },
    {
      type: "checkbox",
      message: "what languages do you know?",
      name: "stack",
      choices:[
          "html",
          "js",
          "python"
      ]
    },
    {
      type: "list",
      message: "what is your preferred method of commuication?",
      name: "contact",
      choices: [
          "email"
      ]
    }
  ])
  .then(function(data) {
    console.log(data)

    var filename = data.name.toLowerCase().split(' ') + ".json";

    false.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("success!");
    })
  });