'use strict';
alert("Welcome to my page!");

const usersName = prompt("What is your name?");
console.log(usersName);

document.write("Hi " + usersName + " welcome to my page!");

if (usersName == "Jonathon"){
  document.write("Hey bossman");
} else if (usersName == "Kassie"){
  document.write("Hey teach");
} else {
  document.write("Glad to have you here!");
}
