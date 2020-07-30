// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

// var array = [26 2 26 36 30 27 21 18 33 21 31 12 28 19 38 7 32 32 19 33 16 15 37 33 10 25 6 15 14 21 13 30 22 16 9 1 27 18 13 2];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
// function takes in an array
const insertionSort = (array)=>{
  for(i=1; i<array.length;i++){
    //keep track of what the current num is
    let currentNum = array[i]
  }
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
