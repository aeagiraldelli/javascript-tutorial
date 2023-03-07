// Chapter 14: If statements
//     A basic form of decision condition

let age = window.prompt("What's your age?");
age = Number(age);

if (age >= 65) {
  console.log("You are a Senior Citizen!");
} else if (age >= 18) {
  console.log("You are an adult!");
} else if (age < 0) {
  console.log("YOU HAVEN'T BEEN BORN YET!");
} else {
  console.log("You are NOT an adult.");
}

let online = true;

if (online) {
  console.log("User is online!");
} else {
  console.log('User is offline');
}
