// Easy way using a window prompt
// let firstname = window.prompt("What's your first name?");
// document.getElementById("name").innerHTML = "Hello, " + firstname;

// Hard way: using HTML elements

let username;
document.getElementById("submit-button").onclick = function () {
    textbox = document.getElementById("firstname");
    username = textbox.value;
    textbox.value = ""
    document.getElementById("name").innerHTML = username;
}