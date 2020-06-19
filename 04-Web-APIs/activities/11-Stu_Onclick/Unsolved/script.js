var decermentEl = document.querySelector("#decerment");
var incrementEl = document.querySelector("#incerment");
var count = document.querySelector("#count");
var num = 0;

incrementEl.addEventListener("click", function(){
        num ++;
        count.textContent = num;
});

decermentEl.addEventListener("click", function(){
    if (num !== 0){
        num --;
    }
    count.textContent = num;
});