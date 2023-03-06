let dice6 = 0;
let dice8 = 0;
let dice20 = 0;

document.getElementById("reset-button").onclick = function () {
  reset();
  displayValues();
};

document.getElementById("roll-button").onclick = function () {
  roll();
  displayValues();
};

document.getElementById("values-button").onclick = function () {
  diceValues();
  displayValues();
};

function reset() {
  dice6 = 0;
  dice8 = 0;
  dice20 = 0;
}

function diceValues() {
  dice6 = 6;
  dice8 = 8;
  dice20 = 20;
}

function roll() {
  dice6 = Math.round(Math.random() * 6) + 1;
  dice8 = Math.round(Math.random() * 8) + 1;
  dice20 = Math.round(Math.random() * 20) + 1;
}

function displayValues() {
  document.getElementById("dice-6").innerHTML = dice6;
  document.getElementById("dice-8").innerHTML = dice8;
  document.getElementById("dice-20").innerHTML = dice20;
}
