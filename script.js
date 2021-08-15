const optionsList = document.querySelector(".options");
const myScore = document.querySelector("#my-score");
const computerScore = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result");
let userChoice;
let computerChoice;

// Buttons Event Listeners

optionsList.addEventListener("click", selectOption);

// Functions

function selectOption(e) {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains("btn")) {
    switch (target.innerText) {
      case "✊":
        userChoice = "rock";
        break;
      case "✋":
        userChoice = "paper";
        break;
      case "✌":
        userChoice = "scissors";
        break;
    }
    computerOption();
  }
}

function computerOption() {
  const options = ["rock", "paper", "scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  declareWinner(userChoice, computerChoice);
}

function declareWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultMessage.innerText = `It Was A Tie! - They picked ${computerChoice} and you picked ${userChoice}`;
  }
  switch (userChoice) {
    case "rock":
      if (computerChoice === "paper") {
        youLost();
      } else if (computerChoice === "scissors") {
        youWon();
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        youLost();
      } else if (computerChoice === "rock") {
        youWon();
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        youLost();
      } else if (computerChoice === "paper") {
        youWon();
      }
  }
  checkWinner();
}

function checkWinner() {
  if (myWins == 10) {
    alert("Yessss I am the winner");
  } else if (computerWins == 10) {
    alert("fam ur trash kid");
  }
}

// Incrementing
let myWins = parseInt(myScore.innerText);
let computerWins = parseInt(computerScore.innerText);

function youLost() {
  resultMessage.innerText = `You Lost! - They picked ${computerChoice} and you picked ${userChoice}`;
  computerWins++;
  computerScore.innerText = computerWins;
}

function youWon() {
  resultMessage.innerText = `You Won! - They picked ${computerChoice} and you picked ${userChoice}`;
  myWins++;
  myScore.innerText = myWins;
}
