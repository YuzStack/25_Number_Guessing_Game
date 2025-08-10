"use strict";

let curScore = 20;
let highScore;
console.log(curScore);

let secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);
  console.log(guessedNumber, typeof guessedNumber);

  if (!guessedNumber) {
    message.textContent = "🚫 No number!";
  } else if (guessedNumber === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    highScore = curScore;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guessedNumber < secretNumber) {
    if (curScore > 1) {
      message.textContent = "📉 That's too low!";
      curScore--;
      document.querySelector(".score").textContent = curScore;
    } else {
      message.textContent = "😞 Sorry, You've lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessedNumber > secretNumber) {
    if (curScore > 1) {
      message.textContent = "📈 That's too high!";
      curScore--;
      document.querySelector(".score").textContent = curScore;
    } else {
      message.textContent = "💥 You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  /* const resetBtn = document.querySelector(".again");
  resetBtn.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".score").textContent = 20;
  }); */
});
