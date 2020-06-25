

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    //
    // Within the document, set an on click listener for the element with a class of "letterA"
$(document).on("click", ".letterA", function(){
        // When that element is clicked, append the string "A" to the `text-div` element
        $("#text-div").append("A");
        })
    // Within the document, set an on click listener for the element with a class of "letterB"
$(document).on("click", ".letterB", function(){
        // When that element is clicked, append the string "B" to the `text-div` element
        $("#text-div").append("B");
    })
    // Continue for the other letters




        
})
