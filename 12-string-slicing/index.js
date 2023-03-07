let fullName = "Snoop Dogg";

// Wrong solution
// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);
// console.log("First name:", firstName);
// console.log("Last name:", lastName);

let firstName = fullName.slice(0, fullName.indexOf(" ")).trim();
let lastName = fullName.slice(fullName.indexOf(" ")).trim();

console.log("First name:", firstName);
console.log("Last name:", lastName);