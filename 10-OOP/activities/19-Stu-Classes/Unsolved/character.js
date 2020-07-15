class Character {
  constructor(name, strength, hitpoints) {
    if (!name) {
      throw new Error("You are missing a name.");
    }
    if (!strength){
      throw new Error("You are missing the strenght.");
    }
    if (!higPoings){
      throw new Error("You are missing a hitPoints.");
    }

  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`NAME has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.strength <= 0){
      console.log("your still alive!")
    }else{
      console.log("you died :(")
      return;
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    console.log(`${opponent} was hit with ${this.strength} force power`)
    var newOpponentHealth = opponent.hitpoints-this.strength
    return newOpponentHealth;

  }
}

// Create two unique characters using the "character" class
class Ayla {
  constructor ( )
  
}

// Create an interval that alternates attacks every 2000 milliseconds
