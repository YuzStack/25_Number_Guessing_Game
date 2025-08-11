"use strict";

let curScore = 20;
let highScore = Number(document.querySelector(".highscore").textContent);
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);

  // When there's no input
  if (!guessedNumber) {
    message.textContent = "🚫 No number!";

    // When the guessed number is correct ‼️‼️
  } else if (guessedNumber === secretNumber) {
    message.textContent = "🎉 Correct Number!";

    if (curScore > highScore) {
      highScore = curScore;
      document.querySelector(".highscore").textContent = highScore;
    }

    const body = document.querySelector("body");
    body.style.backgroundColor = "#60b347";
    const number = document.querySelector(".number");
    number.style.width = "25rem";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;

    // When the guessed number is wrong
  } else if (guessedNumber !== secretNumber) {
    if (curScore > 1) {
      message.textContent =
        guessedNumber > secretNumber
          ? "📈 That's too high!"
          : "📉 That's too low!";
      curScore--;
      document.querySelector(".score").textContent = curScore;
    } else {
      message.textContent = "💥 You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  } 
});

// Reset Functionality
const resetBtn = document.querySelector(".again");
resetBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".number").textContent = "?";

  curScore = 20;
  document.querySelector(".score").textContent = curScore;

  const guessInput = document.querySelector(".guess");
  guessInput.value = "";

  const body = document.querySelector("body");
  body.style.backgroundColor = "#222";

  const number = document.querySelector(".number");
  number.style.width = "15rem";

  message.textContent = "Start guessing...";

  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;
});
