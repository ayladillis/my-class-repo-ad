const { notDeepEqual } = require("assert")

var map = function(arr, cb) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {

    }
}

// set up a variable equal called 'numbs' equal to an array of numbers.
// use 'var map = function'
// create an if else statment to return true if the array meets a condtion and 
// false if not.
// return the function 

var some = function(arr, cb){
    var isTrue = false;

    for (var i = 0; i < arr.length; i++){
        var cbOutput = cb(arr[i]);
        if(cbOutput){
            isTrue = true
        }
    }
    
}