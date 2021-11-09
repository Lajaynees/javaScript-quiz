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

// start quiz-set time- set questions countdown -displays next question/answers
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];

    }
}

function checkAnswer(event) {
    event.preventDefault();

 yesnoEl.style.display = "block";
    let p = document.createElement("p");
    yesnoEl.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // answer checker
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
   
    setQuestion(questionCount);
}

// add all score functions
function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // Add to localStorage/Parsing
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
   
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

//ALL Event Listners

// Start timer-displayd finished
startBtn.addEventListener("click", startQuiz);

//score
submitScrBtn.addEventListener("click", addScore);

//back button
goBackBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 100;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

//answers loop
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});


