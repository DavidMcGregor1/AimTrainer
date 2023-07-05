var target = document.getElementById("target");
var gameContainer = document.getElementById("gameContainer");
var score = 0;
var timeLimit = 30;
var countdownTimer;
var resetButton = document.getElementById("resetButton");
var highScore = 0;

resetButton.addEventListener("click", resetGame);

function startGame() {
  score = 0;
  updateScore();
  countdownTimer = setInterval(countdown, 1000);
  moveTarget();
}

function moveTarget() {
  var containerWidth = gameContainer.clientWidth;
  var containerHeight = gameContainer.clientHeight;
  var targetSize = target.offsetWidth;

  var maxX = containerWidth - targetSize;
  var maxY = containerHeight - targetSize;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";

  target.addEventListener("click", onClick);
}

function onClick() {
  score++;
  updateScore();
  moveTarget();
}

function updateScore() {
  document.getElementById("score").innerHTML = "Score: " + score;
}

function updateHighScore() {
  highScore = Math.max(highScore, score);
  document.getElementById("highScoreHeader").innerHTML =
    "High Score: " + highScore;
}

function countdown() {
  timeLimit--;
  document.getElementById("time").innerHTML = "Time: " + timeLimit;

  if (timeLimit <= 0) {
    clearInterval(countdownTimer);
    target.removeEventListener("click", onClick);
    resetButton.disabled = false;
    updateHighScore();
    alert("Game over! Your score: " + score);
  }
}

function resetGame() {
  score = 0;
  timeLimit = 30;
  updateScore();
  resetButton.disabled = true;
  startGame();
}

startGame();
