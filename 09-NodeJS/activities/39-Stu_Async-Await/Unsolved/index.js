const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const dogs = await fs.readFileAsync('dog.json', "utf8");
    console.log("woof woof");
    const cats = await fs.readFileAsync('cats.json', "utf8");
    console.log("meow mewo");
    const goldfish = await fs.readFileAsync('goldfish.json', "utf8");
    const hampster = await fs.readFileAsync('hampster.json', "utf8");

    const animalJSON = [hampser, dog, cat, goldfish].map(JSON.parse);

    await writeFileAsync(
      "combined.json",
      JSON.stringify(animalJSON, null, 2),
      "utf8"
    );

      console.log("successfully wrote to 'combined.json' file");
  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
