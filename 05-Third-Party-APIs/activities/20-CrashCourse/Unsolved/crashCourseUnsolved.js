// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var name = "Kelechi"


// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var hobbies = ["cuddling", "grilling", "driving", "joking", "swiming"];


// Create an array of five numbers

var number = [1, 2, 3, 4, 5,]


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for (var i = 0; i < 5; i++) {
    console.log("My name is Bob");
}

// Create a for loop that loops through your five string array and prints each name

for (var i = 0; i < hobbies.length; i++) {
    console.log("my hobbies are" + hobbies[i]); 
}

// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
var divider = function(num1, num2) {
    var result = num1 / num2;
    console.log(result);
    return result; 
};



// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

var numLoop = function(arrayNumbers) {
    for (var i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i]);
    }
};

looper(hobbies);

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var hollisOak= {
    location: "Emryvill",
    age: 1,
    residents: "Boys"
};


// Console log any three of the properties in that object

console.log(hollisOak.location);
console.log(hollisOak.age);
console.log(hollisOak.residents);

// Create an Array of 3 Objects

var homeObjects = [
    {
        desk: "Ikea",
        laptop: "Mac",
        plants: 3
    },

    {
        roommates: 4,
        neighborhood: "Oceanview",
        kitchen: "Messy"
    },

    {
        pillows: 4,
        stuffedAnimals: "Kimchi",
        waterBottle: "Hydroflask"
    }
];


// Console log 3 properties for every one of the five objects
for (var i = 0; i < homeObjects; i++) {
    console.log(homeObjects[i].plants);
    console.log(homeObjects[i].neighborhood);
    console.log(homeObjects[i].stuffedAnimals);
}

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

$("#button").on("click", function(event){

})


// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
