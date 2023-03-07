let userName = " Fellow Coder  ";
let phoneNumber = "123-456-7890";

console.log("User name:", userName);
userName = userName.trim();
console.log("User name without empty spaces before and after:", userName);
console.log("User name length:", userName.length);

console.log("First char of user name:", userName.charAt(0));
console.log("Last char of user name:", userName.charAt(userName.length - 1));

console.log("First ocurrence of 'o' char:", userName.indexOf("o"));
console.log("Last ocurrence of 'o' char:", userName.lastIndexOf("o"));

console.log("To upper case:", userName.toUpperCase());
console.log("To lower case:", userName.toLowerCase());
console.log("To local upper case:", userName.toLocaleUpperCase());
console.log("To local lower case:", userName.toLocaleLowerCase());

console.log("Original phone number format:", phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log("Phone number after replacing dashes:", phoneNumber);