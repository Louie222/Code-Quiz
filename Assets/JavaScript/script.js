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



var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question2");
var choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

var counter = 0;




// choiceA.innerHTML = questions[0].options[0];
// choiceB.innerHTML = questions[0].options[1];
// choiceC.innerHTML = questions[0].options[2];

function displayQuestion() {

    question.innerHTML = questions[counter].title;
    choices.innerHTML = "";

    for (var i = 0; i < questions[counter].options.length; i++) {
        var answersDiv = document.createElement("div");

        answersDiv.innerHTML = questions[counter].options[i];

        choices.append(answersDiv);
    
    answersDiv.addEventListener("click",function(){
        counter = counter + 1
        displayQuestion()
    })



        //add event listener here to let the user know what answer they have selected, and to move on from the question
                // increase counter 
                // then call the displayQuestion function 

    }

}

displayQuestion(); 








