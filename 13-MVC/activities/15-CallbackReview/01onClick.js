// 1. Explain the on click code below.
// the id of boom button is being passed to the click function
// 2. When the page loads does the anonymous function get executed?
// not until its clicked
// 3. When does the anonymous function get executed?
// after the button with the id is clicked 

$("#boomButton").on("click", function() {
  alert("boom");
});
