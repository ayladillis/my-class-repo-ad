const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);//needs to be handed the area value;
    //super must be called before we try to use the keyword 'this'
    //the super keyword calls the parent constructor function of the subclass
    // this.area = 2;//would be 2. 
    this.sideA = sideA;
    this.sideB = sideB;
    this.example = "I am in the Rectangle";
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
console.log(rectangle);
