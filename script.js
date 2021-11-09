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

