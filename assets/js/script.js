// pull empty elements from HTML
var questionsContainerEl = document.querySelector("#questions");
var promptEl = document.querySelector("#question-prompt");
var choicesEl = document.querySelector("#question-choices");
var finalScoreEl = document.querySelector("#final-score");
var timerEl = document.querySelector("#countdown");
var feedbackEl = document.getElementById("right-wrong");
var highScoreScreenEl = document.getElementById("highscore-input");
var initialsEl = document.getElementById("initials");

// variables for quiz 
var currentQuestion = 0;
var time = 100;
var timer;

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

var startQuiz = function() {
    // hide start info
    var startInfoEl = document.querySelector(".start-info");
    startInfoEl.setAttribute("class", "hide");

    // display question container
    questionsContainerEl.removeAttribute("class");

    // start countdown timer
    timer = setInterval(clock, 1000);

    // display timer
    timerEl.textContent = time;

    displayQuestion();
}

var displayQuestion = function() {
    // track current question
    var questionIndex = questions[currentQuestion];

    // display question
    promptEl.textContent = questionIndex.title;

    // clear previous question choices
    choicesEl.innerHTML = "";

    // for each loop to loop through the choices
    questionIndex.choices.forEach(function(choices, i) {
        // create a button for each choice
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = i + 1 + ". " + choice;

        // attach click event listener to choices
        choiceBtn.onclick = choiceClick;

        // display on page
        choicesEl.appendChild(choiceBtn);
    });
};

var choiceClick = function() {
    // check if answer is wrong
    if (this.value !== questions[currentQuestion].answer) {
        // subtract time off timer
        time -= 10;

        // display updated time 
        timerEl.textContent = time;

        // display feedback
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    };

    // flash feedback on page
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move onto next question
    currentQuestion++;

    // check to see if questions are done
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    };
};

var clock = function() {
    // decrement time to mimick countdown
    time--;
    timerEl.textContent = time;

    // check to see if time runs out
    if (time <= 0) {
        endQuiz();
    }
};

var endQuiz = function() {
    // stop countdown timer
    clearInterval(timer);

    // hide questions
    questionsContainerEl.setAttribute("class", "hide");

    // display high score page
    highScoreScreenEl.removeAttribute("class");

    // display final score
    finalScoreEl.textContent = time;
};

var saveScore = function() {
    // get initials from text box
    var initials = initialsEl.value.trim();

    // check to see if value is empty
    if (initials !== "") {
        // retrieve scores from localstorage
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // create score object for current user
        var userScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
        highscores.push(userScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // direct user to high scores page
        window.location.href = "highscores.html";
    };
};