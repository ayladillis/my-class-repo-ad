const Vehicle = require("./vehicle");

class Car extends Vehicle{
    constructor(id, color, passangers) {
        super(id, 4, "beep");
        this.color = color; 
        
    }
}