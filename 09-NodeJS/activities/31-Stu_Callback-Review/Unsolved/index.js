const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});

// For each element in aniaml - 'back function'
animalJSON.forEach(function(aniaml){
  if (animal.species === "dog"){
    dog.push(animal);
  }else if(animal.species === "cat") {
    cats.push(animal);
  } 
});
//turn the arrays into json strings so they can be written to files
const dogJSON = JSON.stringify(dogs, null, 2);
const catJSON = JSON.stringify(cats, null, 2);

fs.writeFile("dogs.json", dogJSON, function(err){
  if(err) {
    throw err;
  }
  fs.writeFile("cats.json", catJSON, function(err){
    if(err) {
      throw err;
    }

});


