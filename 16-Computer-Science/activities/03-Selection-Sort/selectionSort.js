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

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp ;
}
// [4,2,6,1] 
// [4,2,6,1] 
function selectionSort(items) {

  var len = items.length;
  var min;

  for (var i = 0; i < len; i++) { // outer for loop

    // set index of minimum to this position
    min = i;

    // check the rest of the array to see if anything is smaller
    // nested for loop scanning though array 
    for (var j = i + 1; j < len; j++) {
      if (items[j] < items[min]) { // checking to see if element is less than first position 
        min = j; 
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
