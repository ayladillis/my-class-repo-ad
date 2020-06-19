//pointers to leafs on the tree
var totalPrice = document.querySelector ("#totalPrice");
var tipPercentage = document.querySelector ("#tipPercentage");
var submit = document.querySelector ("#submit");
var tipAmount = document.querySelector ("#tip-amount");
var newTotal = document.querySelector ("#new-total");

// function calculateTip(total, tipPercentage){
//     var roundedResult = (total * tipPercentage).toFixed(2);
//     return roundedResult;
// }

// function calculateTotal(total, tipAmount) {
//     return parseFloat(total) + parseFloat(tipAmount);
}

submit.addEventListener("click", function(event){
    event.preventDefault ();
    // var tipPercentage = tipEl.val * .01;
    // var total = totalEl.value;
    var amount = totalPrice.value * (tipPercentage.value/100);
    tipAmount.textContent = amount;
    newTotal.textContent = totalPrice.value + amount;

})


