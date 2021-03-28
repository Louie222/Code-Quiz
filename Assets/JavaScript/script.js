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
    options: ["'This isn't correct'", "1234", "console.log","true/false"],
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
},
]

function displayQuestion(index) {

    document.getElementById("content").innerHTML = "";
    questionTitle.textContent = questions[index].title;

    document.getElementById("content").append(questionTitle);

    for (var i = 0; i < questions[index].options.length; i++) {
        var questionOptions = document.createElement("button");
        questionsOptions.textContent = questions[index].options[i];
        document.getElementById("content").append(questionOptions);
    }

    document
    .querySelectorAll("button")
    .forEach((button) =>
        button.addEventListener("click", () => displayQuestion(index + 1))
    )

}