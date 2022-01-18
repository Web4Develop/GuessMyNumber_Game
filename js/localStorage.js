"use strict";
localStorage.setItem("name", "Player One");
console.log(localStorage.name);
// const playerName = (document.getElementById("text").innerHTML =
// localStorage.getItem("name"));
// console.log(playerName);

//

const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const confirm = document.getElementById("confirm");
const compare = document.getElementById("compare");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const done = document.getElementById("done");
const playerBox = document.getElementById("playerBox");
const playerOneColor = document.getElementById("playerOneColor");
const buttonColorConfirm = document.getElementById("buttonColorConfirm");
const playerOneName = document.getElementById("playerOneName");
// let highscore = 0;
// let turns = (document.querySelector(".turns").textContent = "20");

// console.log(playerOneColor.value);
console.log(playerOneName.textContent);

// buttonColorConfirm.onclick = function () {
//   const playerOneConfirmColor = playerOneName.style.color = playerOneColor.value;
//   const x = localStorage.setItem("playerOneConfirmColor", playerOneConfirmColor);
//   const y = localStorage.getItem("playerOneConfirmColor");
//   console.log(y);
// };

done.style.display = "none";

reset.style.display = "none";
reset.onclick = function () {
  localStorage.removeItem("playerOneNumber");
  localStorage.removeItem("playerTwoNumber");
  location.reload();
};

confirm.onclick = function () {
  const playerOneNumber = playerOne.value;

  if (!playerOneNumber) {
    alert("No number was entered!");
  } else if (playerOneNumber >= 1 && playerOneNumber <= 10) {
    localStorage.setItem("playerOneNumber", playerOneNumber);
    playerOne.style.display = "none";
    confirm.style.display = "none";
    done.style.display = "inline";
    console.log(localStorage.playerOneNumber);
  } else if (playerOneNumber <= 0 || playerOneNumber >= 11) {
    alert("This number is NOT between 1 and 10!");
  } else {
    console.log("something went wrong. Please reload.");
  }
};
compare.onclick = function () {
  const playerTwoNumber = playerTwo.value;

  if (!playerTwoNumber) {
    alert("No number was entered!");
  } else if (playerTwoNumber >= 1 && playerTwoNumber <= 10) {
    localStorage.setItem("playerTwoNumber", playerTwoNumber);
    console.log(localStorage.playerTwoNumber);
    if (
      localStorage.getItem("playerTwoNumber") ===
      localStorage.getItem("playerOneNumber")
    ) {
      console.log("Correct");
      result.innerHTML =
        "Correct!" + " " + "You got it right!" + " " + "Your awesome!";
      // result.style.width = "300px";
      reset.style.display = "inline";
      compare.style.display = "none";
    } else if (
      localStorage.getItem("playerTwoNumber") !=
      localStorage.getItem("playerOneNumber")
    ) {
      console.log("Wrong");
      result.innerHTML =
        "Wrong!" +
        " " +
        "Player One's number is" +
        " " +
        localStorage.getItem("playerOneNumber");
      reset.style.display = "inline";
      compare.style.display = "none";
    }
  } else if (playerTwoNumber <= 0 || playerTwoNumber >= 11) {
    alert("This number is NOT between 1 and 10!");
  } else {
    console.log("Wrong");
  }
};
