const Vehicle = require("./vehicle");

class Boat extends Vehicle {
    constructor(id, type, crew) {
        super(id, type, crew) 
        this.type = type;
        this.crew = crew;
    }
}