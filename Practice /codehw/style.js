
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const highscores = document.getElementById("highscores");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const time = document.getElementById("clock");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("score");
const choice = document.querySelectorAll("li");
let seconds = 75; 

// create questions
let questions = [
    {
        question : "what does HTML stand for?",
        choiceA : "hyper text markup language",
        choiceB : "home tool markup langauge",
        choiceC : "hyperlink tool makeup language",
        correct : "hyper text markup language"
    },{
       question : "what does CSS stand for?" ,
       choiceA : "consistent styling sheets",
       choiceB : "cascading style sheets",
       choiceC : "choosing style sheets",
       correct : "cascading style sheets"
    },{
        question : "what are the three main languages of the internet?",
        choiceA : "HTML, CSS, Javascript",
        choiceB : "HTML, CSS, Python",
        choiceC : "HTML, Javascript, Python",
        correct : "HTML, CSS, Javascript"
    },{
        question : "which site can you create repositories on?",
        choiceA : "GitLink",
        choiceB : "GitLab",
        choiceC : "GitHub",
        correct : "GitHub"
    },{
        question : "what is Jerome's favorite animal?",
        choiceA : "cat",
        choiceB : "dog",
        choiceC : "guinea pig",
        correct : "cat"
    }
];

// assign variables 
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// // view highscores 


// function to make questions appear 
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
  
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    timer();
    start.style.display = "none";
    textbox.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// move through questions
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//time

function tick() {
    if (seconds > 0) {
        seconds -=1;
        clock.innerHTML = seconds;
        timer();
    }else{
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

//question answers
if (choice.innerHTML === questions.questionNumber.correct) {
    //
}

choices.addEventListener("click")

// score

function renderCounter(){
    if(count <= time){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
       
    }else{
       
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

//answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion);
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
// calculate the questions correct
const scorePerCent = Math.round(100 * score/questions.length);
    
}
