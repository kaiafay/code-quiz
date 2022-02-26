// pull empty elements from HTML
var questionsContainerEl = document.querySelector("#questions");
var promptEl = document.querySelector("#question-prompt");
var choicesEl = document.querySelector("#question-choices");
var finalScoreEl = document.querySelector("#final-score");

// array for questions
var questions = [
    {
        prompt: "Which is NOT a data type in JavaScript?",
        choices: ["Boolean", "Numbers", "String", "Alerts"],
        answer: "Alerts"
    },
    {
        prompt: "An array is enclosed in __________.",
        choices: ["Curly brackets", "Parantheses", "Square brackets", "Quotations"],
        answer: "Square brackets"
    },
    {
        prompt: "Which is referred to as the assignment operator?",
        choices: ["=", "==", "!", "++"],
        answer: "="
    },
    {
        prompt: "A function can be nested inside another function.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        prompt: "A variable declared using 'const' can later be reassigned.",
        choices: ["True", "False"],
        answer: "False"
    }
];

// pseudocode:
// 1. pull empty elements into js file using DOM
// 2. create elements for questions to be pushed to the HTML
// 3. use a for loop to loop through questions array and display them on the page
// 4. validate user's answer by comparing it to the correct answer
// 5. set up a countdown timer and display it on the page when the start button is clicked