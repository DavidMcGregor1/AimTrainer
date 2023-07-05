var target = document.getElementById("target");
var gameContainer = document.getElementById("gameContainer");
var score = 0;
var timeLimit = 30;
var countdownTimer;
var resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetGame);

function startGame() {
  score = 0;
  updateScore();
  countdownTimer = setInterval(countdown, 1000);
  moveTarget();
}
