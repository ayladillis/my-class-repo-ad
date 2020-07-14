class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
    this.example = "I am in the Shape";
  }

  printInfo() {
    for (var key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

module.exports = Shape;
