let startButton = document.querySelector("#start-button");
let startScreen = document.getElementById("start-screen");
let questions1 = document.getElementById("questions1");
let questionList = document.getElementById("question-list");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let testAnswer = "cat";
let seconds = 75;

startButton.addEventListener('click', function(event) {
  event.preventDefault();
  timer();
  startScreen.setAttribute("style", "display: none;");
  questions1.setAttribute("style", "display: block;");
});

//questions
function testAnswer1() {
  if (answer1.innerHTML === testAnswer) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}
function testAnswer2() {
  if (answer2.innerHTML === testAnswer) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}
function testAnswer3() {
  if (answer3.innerHTML === testAnswer) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}

function startButton(){
    timer();
    startButton.style.display = "none";
}

//timer

function tick() {
  if (seconds > 0) {
    seconds -=1;
    clock.innerHTML = seconds;
    timer();
  } else {
    stopClock();
    clearTimeout(t);
  }
}
function timer() {
  t = setTimeout(tick, 1000);
}
function stopClock () {
  clearTimeout(t);
}


