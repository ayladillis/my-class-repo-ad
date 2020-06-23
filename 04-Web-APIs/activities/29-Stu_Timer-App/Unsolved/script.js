var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
  // Write code to start the timer here


}
// function init() {
  var workMinutes = workMinutesInput.value
  var restMinutes = restMinutesInput.value 

//workMinutes in timer box
console.log(workMinutes);
// }




playButton.addEventListener("click", startTimer);

// psudo code
// 1. setInterval to set timer
// 2. constatnly re-write text on page, match time displayed on screen with internal time. 
// 3. transfer input number to timer
// 4. use addEventListener to 'click' play, pause and stop button
// 5. 