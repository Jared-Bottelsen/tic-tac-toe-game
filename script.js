"use strict";

const player = document.querySelector(".player");
let currentPlayer;
let playerX;
let playerO;
let winningOutcomes;

const r1t1 = document.querySelector(".row-1-tile-1");
const r1t2 = document.querySelector(".row-1-tile-2");
const r1t3 = document.querySelector(".row-1-tile-3");
const r2t1 = document.querySelector(".row-2-tile-1");
const r2t2 = document.querySelector(".row-2-tile-2");
const r2t3 = document.querySelector(".row-2-tile-3");
const r3t1 = document.querySelector(".row-3-tile-1");
const r3t2 = document.querySelector(".row-3-tile-2");
const r3t3 = document.querySelector(".row-3-tile-3");

const init = () => {
  playerX = "X";
  playerO = "O";
  currentPlayer = playerX;
  player.textContent = currentPlayer;
  winningOutcomes = ["", "", "", "", "", "", "", "", ""];
  document.querySelector("#r1t1").textContent = "--";
  document.querySelector("#r1t2").textContent = "--";
  document.querySelector("#r1t3").textContent = "--";
  document.querySelector("#r2t1").textContent = "--";
  document.querySelector("#r2t2").textContent = "--";
  document.querySelector("#r2t3").textContent = "--";
  document.querySelector("#r3t1").textContent = "--";
  document.querySelector("#r3t2").textContent = "--";
  document.querySelector("#r3t3").textContent = "--";
};
init();

const changeplayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
    player.textContent = playerO;
  } else if (currentPlayer === playerO) {
    currentPlayer = playerX;
    player.textContent = playerX;
  }
};

const tileChange = (tile) => {
  tile.classList.add("winning-tile");
};

const checkWinner = function () {
  if (
    winningOutcomes[0] == "X" &&
    winningOutcomes[1] == winningOutcomes[0] &&
    winningOutcomes[2] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r1t2);
    tileChange(r1t3);
  } else if (
    winningOutcomes[0] == "O" &&
    winningOutcomes[1] == winningOutcomes[0] &&
    winningOutcomes[2] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r1t2);
    tileChange(r1t3);
  } else if (
    winningOutcomes[3] == "X" &&
    winningOutcomes[4] == winningOutcomes[3] &&
    winningOutcomes[5] == winningOutcomes[3]
  ) {
    tileChange(r2t1);
    tileChange(r2t2);
    tileChange(r2t3);
  } else if (
    winningOutcomes[3] == "O" &&
    winningOutcomes[4] == winningOutcomes[3] &&
    winningOutcomes[5] == winningOutcomes[3]
  ) {
    tileChange(r2t1);
    tileChange(r2t2);
    tileChange(r2t3);
  } else if (
    winningOutcomes[6] == "X" &&
    winningOutcomes[7] == winningOutcomes[6] &&
    winningOutcomes[8] == winningOutcomes[6]
  ) {
    tileChange(r3t1);
    tileChange(r3t2);
    tileChange(r3t3);
  } else if (
    winningOutcomes[6] == "O" &&
    winningOutcomes[7] == winningOutcomes[6] &&
    winningOutcomes[8] == winningOutcomes[6]
  ) {
    tileChange(r3t1);
    tileChange(r3t2);
    tileChange(r3t3);
  } else if (
    winningOutcomes[0] == "X" &&
    winningOutcomes[3] == winningOutcomes[0] &&
    winningOutcomes[6] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r2t1);
    tileChange(r3t1);
  } else if (
    winningOutcomes[0] == "O" &&
    winningOutcomes[3] == winningOutcomes[0] &&
    winningOutcomes[6] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r2t1);
    tileChange(r3t1);
  } else if (
    winningOutcomes[1] == "X" &&
    winningOutcomes[4] == winningOutcomes[1] &&
    winningOutcomes[7] == winningOutcomes[1]
  ) {
    tileChange(r1t2);
    tileChange(r2t2);
    tileChange(r3t2);
  } else if (
    winningOutcomes[1] == "O" &&
    winningOutcomes[4] == winningOutcomes[1] &&
    winningOutcomes[7] == winningOutcomes[1]
  ) {
    tileChange(r1t2);
    tileChange(r2t2);
    tileChange(r3t2);
  } else if (
    winningOutcomes[2] == "X" &&
    winningOutcomes[5] == winningOutcomes[2] &&
    winningOutcomes[8] == winningOutcomes[2]
  ) {
    tileChange(r1t3);
    tileChange(r2t3);
    tileChange(r3t3);
  } else if (
    winningOutcomes[2] == "O" &&
    winningOutcomes[5] == winningOutcomes[2] &&
    winningOutcomes[8] == winningOutcomes[2]
  ) {
    tileChange(r1t3);
    tileChange(r2t3);
    tileChange(r3t3);
  } else if (
    winningOutcomes[2] == "X" &&
    winningOutcomes[4] == winningOutcomes[2] &&
    winningOutcomes[6] == winningOutcomes[2]
  ) {
    tileChange(r1t3);
    tileChange(r2t2);
    tileChange(r3t1);
  } else if (
    winningOutcomes[2] == "O" &&
    winningOutcomes[4] == winningOutcomes[2] &&
    winningOutcomes[6] == winningOutcomes[2]
  ) {
    tileChange(r1t3);
    tileChange(r2t2);
    tileChange(r3t1);
  } else if (
    winningOutcomes[0] == "X" &&
    winningOutcomes[4] == winningOutcomes[0] &&
    winningOutcomes[8] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r2t2);
    tileChange(r3t3);
  } else if (
    winningOutcomes[0] == "O" &&
    winningOutcomes[4] == winningOutcomes[0] &&
    winningOutcomes[8] == winningOutcomes[0]
  ) {
    tileChange(r1t1);
    tileChange(r2t2);
    tileChange(r3t3);
  }
};

const playTile = function (tile, tileText) {
  if (tile === r1t1) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(0, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r1t2) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(1, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r1t3) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(2, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r2t1) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(3, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r2t2) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(4, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r2t3) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(5, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r3t1) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(6, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r3t2) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(7, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  } else if (tile === r3t3) {
    tile.addEventListener("click", function () {
      document.querySelector(tileText).textContent = currentPlayer;
      winningOutcomes.splice(8, 1, currentPlayer);
      changeplayer();
      checkWinner();
    });
  }
};

playTile(r1t1, "#r1t1");
playTile(r1t2, "#r1t2");
playTile(r1t3, "#r1t3");
playTile(r2t1, "#r2t1");
playTile(r2t2, "#r2t2");
playTile(r2t3, "#r2t3");
playTile(r3t1, "#r3t1");
playTile(r3t2, "#r3t2");
playTile(r3t3, "#r3t3");

const resetGame = () => {
  init();
  r1t1.classList.remove("winning-tile");
  r1t2.classList.remove("winning-tile");
  r1t3.classList.remove("winning-tile");
  r2t1.classList.remove("winning-tile");
  r2t2.classList.remove("winning-tile");
  r2t3.classList.remove("winning-tile");
  r3t1.classList.remove("winning-tile");
  r3t2.classList.remove("winning-tile");
  r3t3.classList.remove("winning-tile");
};
