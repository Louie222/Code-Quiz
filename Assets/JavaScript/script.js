// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question - Remove element
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var questions = [

    {
        title: "What is Javascript?",
        options: ["programming language allowing you to add complex features to web pages", "programming language that is designed to have as few implementation dependencies as possible"],
        answer: "programming language allowing you to add complex features to web pages"

    },
    {
        title: "Variable are _____ that store values",
        options: ["articles", "I.D tags", "containers", "links"],
        answer: "containers"

    },
    {
        title: "How many primitive data types are there?",
        options: ["12", "7", "5", "4"],
        answer: "7"
    },
    {
        title: "A fragment of code that produces a value is called an...?",
        options: ["API", "program", "function", "expression"],
        answer: "expression"
    },
    {
        title: "What are arrays used for?",
        options: ["to store values in a single variable", "to randomise font styling", "to query something", "to position objects"],
        answer: "to store values in a single variable"
    },
    {
        title: "Which represents a string object",
        options: ["'This isn't correct'", "1234", "console.log", "true/false"],
        answer: "'This isn't correct'"
    },
    {
        title: "Objects are ______?",
        options: ["variables", "references", "statements", "functions"],
        answer: "variables"
    },
    {
        title: "If I want to run a piece of code multiple times, I should...",
        options: ["create an array", "git pull request", "no idea!", "create a loop"],
        answer: "create a loop"
    },
    {
        title: "What best describes a function?",
        options: ["procedure", "set of parameters", "iterator", "Boolean"],
        answer: "procedure"
    },
    {
        title: "The two types of scopes are?",
        options: ["domestic and international", "local and global", "scope 1 and scope 2", "Australia and overseas"],
        answer: "local and global"
    }
]

//var startButton = document.createElement("start");
    //startButton.addEventListener("click", beginQuiz)

// function to click Start Quiz! button. When clicked question, options, timer will be displayed

var quiz = document.getElementById("quiz");
var question = document.getElementById("question2");
//var choices = document.getElementById("choices");
//const choiceA = document.getElementById("A");
//const choiceB = document.getElementById("B");
//const choiceC = document.getElementById("C");
//const choiceD = document.getElementById("D");

var counter = 0;

// choiceA.innerHTML = questions[0].options[0];
// choiceB.innerHTML = questions[0].options[1];
// choiceC.innerHTML = questions[0].options[2];

// 
function displayQuestion() {

    question.innerHTML = questions[counter].title;
    choices.innerHTML = "";

    for (var i = 0; i < questions[counter].options.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.style.display = "block";

        choiceButton.innerHTML = questions[counter].options[i];

        choices.append(choiceButton);
    
        choiceButton.addEventListener("click",checkAnswer)    

        //add event listener here to let the user know what answer they have selected, and to move on from the question
                // increase counter 
                // then call the displayQuestion function 
    }   

}


displayQuestion();

function checkAnswer () {
    if (this.textContent===questions[counter].answer){
        counter = counter + 1
        // if counter is equal to questions.length then we are out of questions. Needs to be a function to end the quiz.
        // else to display next question
        displayQuestion()

    }
    {}

}

function incorrectAnswer () {
    if (this.textContent!==question[counter].answer){
        

    }

    
}
         
    
    
    
    //textContent = Wrong  
    //displayQuestion()   
    
    


        // The answer is wrong and I want a correct/incorrect message to display
        // the text I will need to create a element with an ID in the HTML (p tag, h1-h4 tag)
        // h3 id="answerInformation"></h3>
        //then I will need to retrive that element e.g. document.getElementId("")     store this elementId into a variable e.g var messageToDisplay = document.getElementId("#answerInformation")
        //then I will want to change the text of that element to e.g textContent=wrong
        // counter = counter + 1 even if question is wrong the quiz will continue
        // clear textContent when moving to a new question

    // if answer is incorrect penalise 10 seconds from timer and show next question 
