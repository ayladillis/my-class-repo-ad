// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================

    for (var i = arr.length -1; i <= 0; i--) {
        for (var j = 1; i <= i; j++) {
            if(arr[j - 1] > arr[j]) {
                var temp = arr[j -1];
                arr[j - 1] = arr[s];
                arr[j] = temp;
            }
        }
    }
    return arr;


// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);