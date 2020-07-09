// 1.
myArray = [2, 4, 6, 8];
console.log(myArray);

myArray.forEach((num) => console.log(num));

myArray.map((x) => console.log(x * 2));
//

// 2.
myObject = {
    name: "Eric",
    age: 28,
    occupation: "Curriculum Dev"
};

console.log(myObject);

console.log("Hello");
console.log("Hello".toLowerCase());

console.log(1337);
console.log((1337).toString());
//

// 3.
function Movie(title, releaseYear) {
    this.title = title;
    this.releaseYear = releaseYear;
}

Movie.prototype.logInfo = function() {
    console.log(`${this.title} was released in ${this.releaseYear}`);
};


const theShining = new Movie("The Shining", 1980)
theShining.logInfo();

console.log(theShining.hasOwnProperty('title'));//true
console.log(theShining.hasOwnProperty('logInfo'));//false
console.log(Movie.prototype.hasOwnProperty('logInfo'));//true

console.log("----------theShining------------");

console.log(theShining);
//Movie { title: 'The Shining', releaseYear: 1980 }

console.log("----------Movie.prototype------------");
console.log(Movie.prototype); 
//Movie { logInfo: [Function] }
//