"use strict";

function getComputerGuess() {
  let generatedRandomNumber = Math.random();
  let computerGuess = "";
  console.log(computerGuess);

  if (generatedRandomNumber >= 0 && generatedRandomNumber < 1 / 3) {
    computerGuess = "rock";
  } else if (generatedRandomNumber >= 1 / 3 && generatedRandomNumber < 2 / 3) {
    computerGuess = "paper";
  } else if (generatedRandomNumber >= 2 / 3 && generatedRandomNumber < 1) {
    computerGuess = "scissors";
  }

  return computerGuess;
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(userMove) {
  let computerGuess = getComputerGuess();
  let result = "";

  if (userMove === "rock") {
    if (computerGuess === "rock") {
      result = "Tie";
    } else if (computerGuess === "paper") {
      result = "You lose";
    } else if (computerGuess === "scissors") {
      result = "You win";
    }
  } else if (userMove === "paper") {
    if (computerGuess === "rock") {
      result = "You win";
    } else if (computerGuess === "paper") {
      result = "Tie";
    } else if (computerGuess === "scissors") {
      result = "You lose";
    }
  } else if (userMove === "scissors") {
    if (computerGuess === "rock") {
      result = "You lose";
    } else if (computerGuess === "paper") {
      result = "You win";
    } else if (computerGuess === "scissors") {
      result = "Tie";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  let resultContent = ` 
  <div class="userMove">
  <div>
  <h4> Your Guess: ${userMove} </h4>
  <h4>Computer Guess: ${computerGuess}</h4> 
  </div>
  <div>
  <h4>Your wins: ${score.wins}</h4>
  <h4>Your losses: ${score.losses}</h4>
  </div>
  </div>
  <div class="userResult">
  <div>
  <h4>Ties: ${score.ties}</h4>
  <h4>Game result: ${result}</h4>
  </div>
  </div>
`;

  resultDisplay.innerHTML = resultContent;
  resultDisplay.style.display = "block";
}

let RockBtn = document.querySelector("#rock-btn");
let PaperBtn = document.querySelector("#paper-btn");
let ScissorsBtn = document.querySelector("#scissors-btn");
let ResetBtn = document.querySelector("#reset");
let resultDisplay = document.querySelector("#resultDisplay");

RockBtn.addEventListener("click", function () {
  playGame("rock");
});
PaperBtn.addEventListener("click", function () {
  playGame("paper");
});
ScissorsBtn.addEventListener("click", function () {
  playGame("scissors");
});
ResetBtn.addEventListener("click", function () {
  (score.wins = 0), (score.losses = 0), (score.ties = 0), alert("Game reset");
});
