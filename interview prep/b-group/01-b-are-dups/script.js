
// ## Instructions
// Given an array, return true if there is at least one duplicate element in the array. If not, return false

// ## Example
// Test Case 1: [1,2,13,12,4,2]
// Expected Output: true

// Test Case 2:[1,2,3,4]
// Expected Output: false

let caseOne = [1, 3, 7, 1]

for (i = 0; i < caseOne.length; i++){

    for (j = 0; j < caseOne.length; j++){

        if(caseOne[j] === caseOne[j + 1]){
            console.log("duplicate")
            console.log("i and j" + i + j)
            console.log("caseOne" + caseOne[i])
        }else{
            console.log("false")
            console.log("i and j" + i + j)
            console.log("caseOne" + caseOne[i])
        }
    }
}