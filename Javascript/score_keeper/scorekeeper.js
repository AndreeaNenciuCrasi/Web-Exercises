var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameWinnerScoreDisplay = document.querySelector("p span");
var inputWinningScore = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var gameWinnerScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === gameWinnerScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});


p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === gameWinnerScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }

});


resetButton.addEventListener("click", function (){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


inputWinningScore.addEventListener("change", function () {
    gameWinnerScoreDisplay.textContent = inputWinningScore.value;
    gameWinnerScore = Number(inputWinningScore.value);
    reset();
})
