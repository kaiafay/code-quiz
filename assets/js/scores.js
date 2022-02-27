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