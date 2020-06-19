//destructuring in arrays

function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const [sum, multiply, division = 'no division'] = sumAndMultiply(2, 3)

console.log(sum)
console.log(multiply)

//destructuring in objects


    const personTwo = {
        name: 'Sally',
        age: 32,
        favoriteFood: 'Melon',
        address: {
            city: 'Somewhere else',
            state: 'Any of them'
        }
    }

    const { name: firstName, age, address: { city } } = personTwo

    console.log(firstName)
    console.log(age)
    

    //Using object deconstruction inside of function inside of the arguments

    function printUser({name, age, favoriteFood}) {
        console.log('Name is: ${name}. Age is ${age}. Food is ${favoriteFood}')
    }
    
    printUser(personTwo)

    //warmup "write a function (in sudocode) that takes in an array of number and 
    //outputs the maximum number"

    // // 1. define a function of numbers 
    //    1.5 look at every number inorder to see which is the max
    // // 2. apply a string of numbers 
    //    2.5 use a for loop 
    // // 3. use Math.max to 

    solution
    
    var findMax = function (numArr) {
        var maxNum;
        for (var i = 0; i < numArr.length; i++) {
            maxNum = numArr[i]
        }
        return maxNum;
    }

