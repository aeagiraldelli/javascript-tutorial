// method chaining -> calling one method after another
//                    in one continuous line of code.

let userName = "Fellow Coder";

// Not using chaining methods
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();
// console.log("Letter:", letter);

// using chaining methods.

let letter = userName.charAt(0).toUpperCase().trim();
console.log("Letter:", letter);