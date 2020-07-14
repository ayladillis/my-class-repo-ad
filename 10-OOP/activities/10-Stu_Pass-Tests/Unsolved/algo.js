function Algo() {}

Algo.prototype.reverse = function(str) {
    // var reverseString = " "
    // for (var i = str.length-1; i >= 0; i--){
    //     reverseString += str[i]
    // }
    // return reverseString;
    return str
    .split("")
    .reverse()
    .join("");
};

Algo.prototype.isPalindrome = function(str) {
// var reverseString = " "
// for (var i = str.length-1; i >= 0; i--){
//     reverseString += str[i]
// }
// if(reverseString === str){
//     return true; 
// }else{
//     return false;
// }
return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
    // return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    
};

module.exports = Algo;
