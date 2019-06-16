// random number goal
var compGuess = Math.floor(Math.random() * 120) + 19;
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





$(document).ready(function () {

    // fetch #comp-goal, insert compGuess in its html
    $("#comp-goal").html(compGuess);

    // when red-gem card is clicked
    $("#red-gem").on("click", function() {

        // assign userScore value of userScore+redGemVal
        userScore = userScore + redGemVal;

        // fetch #user-score and insert updated userScore value
        $("#user-score").html(userScore);
        console.log("userscore: " + userScore);

        if (userScore === compGuess) {

            // wins increment by 1
            wins++;

            // fetch #wins and insert updated wins value
            $("#wins").html(wins);
            console.log("wins: " + wins);
        }

        else if (userScore > compGuess) {

            // losses increment by 1
            losses++;

            // fetch #losse and insert updated losses value
            $("#losses").html(losses);
            console.log("losses: " + losses)

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

            // wins increment by 1
            wins++;

            // fetch #wins and insert updated wins value
            $("#wins").html(wins);
            console.log("wins: " + wins);
        }

        else if (userScore > compGuess) {

            // losses increment by 1
            losses++;

            // fetch #losse and insert updated losses value
            $("#losses").html(losses);
            console.log("losses: " + losses)

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

            // wins increment by 1
            wins++;

            // fetch #wins and insert updated wins value
            $("#wins").html(wins);
            console.log("wins: " + wins);
        }

        else if (userScore > compGuess) {

            // losses increment by 1
            losses++;

            // fetch #losse and insert updated losses value
            $("#losses").html(losses);
            console.log("losses: " + losses)

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

            // wins increment by 1
            wins++;

            // fetch #wins and insert updated wins value
            $("#wins").html(wins);
            console.log("wins: " + wins);
        }

        else if (userScore > compGuess) {

            // losses increment by 1
            losses++;

            // fetch #losse and insert updated losses value
            $("#losses").html(losses);
            console.log("losses: " + losses)

        }


    });

});