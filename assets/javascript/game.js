// random number goal
var compGuess = Math.floor(Math.random() * 102) + 19;
console.log("goal: " + compGuess)

// user's current score, starts at 0
var userScore = 0;
console.log("userscore: " + userScore);

// wins
var wins = 0;

// losses
var losses = 0;

// red value
var redGemVal = Math.floor(Math.random() * 12) +1;
console.log("red: " + redGemVal);

// blue value
var blueGemVal = Math.floor(Math.random() * 12) +1;
console.log("blue: " +blueGemVal);

//yellow value
var yellowGemVal = Math.floor(Math.random() * 12) +1;
console.log("yellow: " + yellowGemVal);

//green value
var greenGemVal = Math.floor(Math.random() * 12) +1;
console.log("green: " + greenGemVal);

// function to give all gems random values
function randomGems () {
    // gem gets new random value
    redGemVal = Math.floor(Math.random() * 12) +1;
    // gem gets new random value
    blueGemVal = Math.floor(Math.random() * 12) +1;
    // gem gets new random value
    yellowGemVal = Math.floor(Math.random() * 12) +1;
    // gem gets new random value
    greenGemVal = Math.floor(Math.random() * 12) +1;
};

// function to give gems unique values
function gemCheck() {

    while (redGemVal === blueGemVal || redGemVal === yellowGemVal || redGemVal === greenGemVal) {
        redGemVal = Math.floor(Math.random() * 12) +1;
        console.log("red: " + redGemVal);
    }
    while (blueGemVal === yellowGemVal || blueGemVal === greenGemVal || blueGemVal === redGemVal) {
        blueGemVal = Math.floor(Math.random() * 12) +1;
        console.log("blue: " + blueGemVal);
    }
    while (yellowGemVal === greenGemVal || yellowGemVal === redGemVal || yellowGemVal === blueGemVal) {
        yellowGemVal = Math.floor(Math.random() * 12) +1;
        console.log("yellow: " + yellowGemVal);
    }
    while (greenGemVal === redGemVal || greenGemVal === blueGemVal || greenGemVal === yellowGemVal) {
        yellowGemVal = Math.floor(Math.random() * 12) +1;
        console.log("yellow: " + yellowGemVal);
    }
};

// function to run when user wins
function win() {
    // wins increment by 1
    wins++;

    // fetch #wins and insert updated wins value
    $("#wins").html(wins);
    console.log("wins: " + wins);

    // new random compGuess
    compGuess = Math.floor(Math.random() * 120) + 19;

    // fetch #comp-goal and insert updated compGuess
    $("#comp-goal").html(compGuess);
    console.log("goal: " + compGuess)

    // userScore resets to 0
    userScore = 0;

    // fetch #user-score and insert updated value
    $("#user-score").html(userScore);

    // gems gets new random value
    randomGems();

    // gives gems unique values
    gemCheck();
    
    console.log("red: " + redGemVal);
    console.log("blue: " +blueGemVal);
    console.log("yellow: " + yellowGemVal);
    console.log("green: " + greenGemVal);
};

// function to run when user loses
function loss() {
    // losses increment by 1
    losses++;

    // fetch #losse and insert updated losses value
    $("#losses").html(losses);
    console.log("losses: " + losses)

    // new random compGuess
    compGuess = Math.floor(Math.random() * 120) + 19;

    // fetch #comp-goal and insert updated compGuess
    $("#comp-goal").html(compGuess);
    console.log("goal: " + compGuess)

    // userScore resets to 0
    userScore = 0;

    // fetch #user-score and insert updated value
    $("#user-score").html(userScore);

    // gems gets new random value
    randomGems();

    // gives gems unique values
    gemCheck();

    console.log("red: " + redGemVal);
    console.log("blue: " +blueGemVal);
    console.log("yellow: " + yellowGemVal);
    console.log("green: " + greenGemVal);
};








$(document).ready(function () {

    // fetch #comp-goal, insert compGuess in its html
    $("#comp-goal").html(compGuess);

    // run gemCheck function
    gemCheck();

    // when red-gem card is clicked
    $("#red-gem").on("click", function() {

        // assign userScore value of userScore+redGemVal
        userScore = userScore + redGemVal;

        // fetch #user-score and insert updated userScore value
        $("#user-score").html(userScore);
        console.log("userscore: " + userScore);

        if (userScore === compGuess) {

            // run win function
            win();
        }

        else if (userScore > compGuess) {

            // run loss function
            loss();
        }

    });

    // when blue-gem card is clicked
    $("#blue-gem").on("click", function() {

        // assign userScore value of userScore+redGemVal
        userScore = userScore + blueGemVal;

        // fetch user-score and insert updated userScore
        $("#user-score").html(userScore);
        console.log("userscore: " + userScore);

        if (userScore === compGuess) {

            // run win function
            win();
        }

        else if (userScore > compGuess) {

            // run loss function
            loss();
        }


    });

    // when yellow-gem card is clicked
    $("#yellow-gem").on("click", function() {

        // assign userScore value of userScore+redGemVal
        userScore = userScore + yellowGemVal;

        // fetch user-score and insert updated userScore
        $("#user-score").html(userScore);
        console.log("userscore: " + userScore);

        if (userScore === compGuess) {

            // run win function
            win();
        }

        else if (userScore > compGuess) {

            // run loss function
            loss();
        }


    });

    // when green-gem card is clicked
    $("#green-gem").on("click", function() {

        // assign userScore value of userScore+redGemVal
        userScore = userScore + greenGemVal;

        // fetch user-score and insert updated userScore
        $("#user-score").html(userScore);
        console.log("userscore: " + userScore);

        if (userScore === compGuess) {

            // run win function
            win();
        }

        else if (userScore > compGuess) {

            // run loss function
            loss();
        }


    });

});