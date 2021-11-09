// variables EL
let timeEl = document.querySelector("p.time");
let secondsLeft = 100;
let scoreEl = document.querySelector("#score");
//^time-score

//sections
//intro
const introEl = document.querySelector("#intro");

//questions-where and how many
const questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let questionCount = 0;
const yesnoEl = document.querySelector("#yesno");

// end sections-scores
const finalEl = document.querySelector("#final");
let initialsInput = document.querySelector("#initials");
const highscoresEl = document.querySelector("#highscores");
let scoreListEl = document.querySelector("#score-list");
let scoreList = [];

//all buttons
const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn");
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
const submitScrBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");

// Object/array for question, answer, true/false
const questions = [ 
    {
       
        question: "What is callback function in JavaScript?",
        answers: ["1. strings", "2. a function passed to another function,", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["1. <js>", "2. <javascript>", "3. <scripting>", "4. <script>"],
        answer: "4. <script>"
    },
    {
        
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    }
];

// timer function
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}