var fs = require("fs");

function logBefore(message,func) {
    console.log(messge);

    func();
}

function runIF(func, bool) {
    if(bool) {
        func();
    }
}

function wrap(func, value) {
    return function() {
        return func(value);
    };
}

var output = wrap(function(val){
    return "Hello" + val
}, 2)
console.log(output());

fs.writeFile("log.txt", "Log message!", function(err){
    
})