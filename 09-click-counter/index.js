let counter = 0;

document.getElementById("previous-button").onclick = function () {
  counter--;
  document.getElementById("counter").innerHTML = counter;
};

document.getElementById("reset-button").onclick = function () {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
};

document.getElementById("next-button").onclick = function () {
  counter++;
  document.getElementById("counter").innerHTML = counter;
};
