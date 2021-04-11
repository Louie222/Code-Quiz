// Variables from HTML elements 
const startButton = document.getElementById("start-btn")
const restartButton = document.getElementById("restart-btn")
const highScoreButton = document.querySelector("view-leaderboard")
const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
startButton.addEventListener("click", startGame)
let shuffledQuestions, questionIndex
let result = document.querySelector("#status")
let answersContainer = document.querySelector("#answer-buttons")
let timer = 60;
let countDownTimer = document.getElementById("countdown")
let timerStart;


// Functions 
function startGame() {
    // console.log("Started")
    startButton.classList.add("hide")
    questionIndex = 0
    questionContainer.classList.remove("hide")
    timerStart = setInterval(theFinalCountDown, 1000);
    setNextQuestion()
}
function setNextQuestion() {
    answersContainer.innerHTML = ''
    showQuestion(questions[questionIndex])
    console.log(questionIndex)
    questionIndex++
}

function showHighScores(){
    highScoreButton.addEventListener("click", function() {
        if (highScoreButton.style.display === "none") {
            highScoreButton.style.display = "block";
            
        } else if (highScoreButton.style.display === "block") {
            highScoreButton.style.display = "none";
        } else {
            return alert ("No scores to show.");
        }
        
    });

  
}

function showQuestion(question) {
    // adding question
    questionElement.innerText = question.question
    question.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option
        // button.classList.add("btn")
        answersContainer.appendChild(button)
        if (option === question.answer) {
            // button.dataset.correct = 'correct'
            button.addEventListener('click',() => {
                result.innerHTML = 'Correct'  
                setTimeout(() => {
                    setNextQuestion()
                    result.innerHTML = ''           
                }, 500) 
            })
        } 
        else {
            button.addEventListener('click', () => { 
                result.innerHTML = 'Incorrect'
                timer = timer - 10;
                setTimeout(() => {
                    setNextQuestion()
                    result.innerHTML = ''           
                }, 500) 
            })
        }
        
    })
    restartToStartOfQuiz();  
    
}

function theFinalCountDown() {
    timer--;
    countDownTimer.textContent = timer;
    if (timer <=0) {
        timer = 0;
        countDownTimer.textContent = timer;
        gameOver();
    }
}

function gameOver (){
    clearInterval(timerStart);
    if (timer <=0) {
        document.getElementById("question-container").innerHTML = '';
    var h1 = document.createElement("h1");
    h1.innerHTML = "Game Over!";
    document.getElementById("question-container").append(h1);
    }
    restartToStartOfQuiz();
    localStorage.setItem("score", timer)
    var score = localStorage.getItem("score");

    var h3 = document.createElement("h3");
    h3.innerHTML = "This is your score: " + score;
    document.getElementById("question-container").append(h3);
    console.log(firstName)
}

function restartToStartOfQuiz (){
    restartButton.addEventListener("click", function(){
        location.reload();
    })
}



var questions = [
    {
        question: "What is Javascript?",
        options: ["programming language allowing you to add complex features to web pages", "programming language that is designed to have as few implementation dependencies as possible"],
        answer: "programming language allowing you to add complex features to web pages"
    },
    {
        question: "Variable are _____ that store values",
        options: ["articles", "I.D tags", "containers", "links"],
        answer: "containers"
    },
    {
        question: "How many primitive data types are there?",
        options: ["12", "7", "5", "4"],
        answer: "7"
    },
    {
        question: "A fragment of code that produces a value is called an...?",
        options: ["API", "program", "function", "expression"],
        answer: "expression"
    },
    {
        question: "What are arrays used for?",
        options: ["to store values in a single variable", "to randomise font styling", "to query something", "to position objects"],
        answer: "to store values in a single variable"
    },
    {
        question: "Which represents a string object",
        options: ["'This isn't correct'", "1234", "console.log", "true/false"],
        answer: "'This isn't correct'"
    },
    {
        question: "Objects are ______?",
        options: ["variables", "references", "statements", "functions"],
        answer: "variables"
    },
    {
        question: "If I want to run a piece of code multiple times, I should...",
        options: ["create an array", "git pull request", "no idea!", "create a loop"],
        answer: "create a loop"
    },
    {
        question: "What best describes a function?",
        options: ["procedure", "set of parameters", "iterator", "Boolean"],
        answer: "procedure"
    },
    {
        question: "The two types of scopes are?",
        options: ["domestic and international", "local and global", "scope 1 and scope 2", "Australia and overseas"],
        answer: "local and global"
    }
]