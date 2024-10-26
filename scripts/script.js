// Initialize variables

var start = document.getElementById("start");
var endPoint = document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");
var maze = document.getElementById("game")

// Start the game

var gameStarted = false;
var mouseInsideMaze = false;

start.addEventListener("mouseover", function(){
    if(gameStarted === false){
        document.body.style.backgroundColor = "#4bdb5b";
        gameStarted = true;
        alert("The game started! Avoid the barriers :)")
        startGame();
    }
});

function startGame(){
    if(gameStarted === true){
        console.log("The game starts, Go on!")

        endPoint.addEventListener("mouseover", function(){
            if(!gameStarted) return;
            console.log("You Wins! Excellent!");
            alert("Congratulation, you reached the end and win!");
            resetBackgroundColor();
            gameStarted = false;
        });

        boundaries.forEach(boundary => {
            boundary.addEventListener("mouseover", function(){
                if(!gameStarted) return;
                console.log("You lose! Try again")
                alert("You hit a barrier! Try again!");
                resetBackgroundColor();
                gameStarted = false;
            });
        });

        maze.addEventListener("mouseleave", function(){
            if(!gameStarted) return;
            console.log("You lose! Try again")
            alert("You are outside the barrier! Try again!");
            resetBackgroundColor();
            gameStarted = false;
        });
    }
}

function resetBackgroundColor(){
    document.body.style.backgroundColor = "white";
}