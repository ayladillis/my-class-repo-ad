var poem = "Some say the world will end in 🔥, Some say in ice 🥶. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var timeEl = document.querySelector(".time");

var secondsLeft = 5;

function prepareRead() {
  // Create the countdown timer.
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till poem is read.";

      console.log(secondsLeft);

      if(secondsLeft === 0) {
      //split the string on its spaces
        poem = poem.split(" ");
        clearInterval(timerInterval);
        speedRead();
      }
  
    }, 1000);
  }

var word = 0;

function speedRead() {
  // Print words to the screen one at a time.
  var timerInterval = setInterval(function() {
  timeEl.textContent = poem[word];
  word++;
  }, 1000);
}

//call on the function
prepareRead();