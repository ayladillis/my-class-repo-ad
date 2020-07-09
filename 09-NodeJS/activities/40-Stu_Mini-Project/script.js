const fs = require("fs");
const util = require("inquirer");
const inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name"
    },
    {
        type: "input",
        name: "Linkedin",
        message: "Enter your name on Linkedin?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Location",
        message: "Where are you located?"
    },
    {
        type: "input",
        name: "Bio",
        message: "Enter a Bio!"
    }
]).then(function(data){
    console.log(data);

    myName = data.name; 
    Linkedin = data.Linkedin;
    GitHub = data.GitHub;
    Location = data.Location;
    Bio = data.Bio;

    console.log(myName, Linkedin, GitHub, Location, Bio); 

var page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>

</head>
<body>
    <h1 style="text-align: center">${myName}</h1>
    <p style="text-align: center">${Linkedin}</p>
    <p style="text-align: center">${GitHub}</p>
    <p style="text-align: center">${Location}</p>
    <p style="text-align: center">${Bio}</p>
    
</body>
</html>`;

fs.writeFile('index.html', page, data, (err) => {
    if (eff) throw err;
    console.log('it worked!');
})

});