var Character = function (name, profession, age, strength, hitPoints){
    this.name = name
    this.profession = profession
    this.age = age
    this.strength = strength
    this.hitPoints = hitPoints
    this.printStats = function (){
        console.log(this.name, this.profession, this.age, this.strength, 
        this.hitPoints)
    }
}

var ayla = new Character ("Ayla", "Witch", 23, 100, 110);
console.log(ayla);
ayla.printStats(); 

var joel = new Character ("Joel", "Ninja", 5, 10, 15);
console.log(joel);
joel.printStats();

Character.prototype.isAlive = function (){
    if (this.hitPoints >= 0)
    console.log("still alvie");
}
Character.prototype.attack = (secondChar) => {
    var health = secondChar.strength - secondChar.hitPoints
    return health; 
}
Character.prototype.levelUp = () => {
    this.age = this.age +1
    this.strength = this.strength + 5
    this.hitPoints = this.hitPoints +25
}

