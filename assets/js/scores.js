var clearBtn = document.getElementById("clear");

var getScores = function() {
    // get scores from localstorage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // arrange scores in order from highest to lowest
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        // create list item for each high score
        var listItem = document.createElement("li");
        listItem.textContent = score.initials + ": " + score.score;

        // display on the page
        var list = document.querySelector("#highscore-list");
        list.appendChild(listItem);
    });
};

// clear high scores list
var clearScores = function() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// clear scores when user clicks on button
clearBtn.onclick = clearScores;

// run getScores function when page loads
getScores();