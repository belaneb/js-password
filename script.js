var length = prompt("How long do you want your password to be?")
var special = confirm("Do you want special characters in your password?")
var upper = confirm("Do you want uppercase letters in your password?")
var lower = confirm("Do you want lowercase letters in your password?")
var numeric = confirm("Do you want numbers in your password?")

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log (specialCharacters, upperCase, lowerCase, numericCharacters)


var index = Math.floor(Math.random() * specialCharacters.length);
var index = Math.floor(Math.random() * upperCase.length);
var index = Math.floor(Math.random() * lowerCase.length);
var index = Math.floor(Math.random() * numericCharacters.length);

function generatePassword () {
}
function askHowManyCharacters (){
}
function askIfSpecialCharactersWanted (){
}
function askIfUpperCaseWanted (){
}
function askIfLowerCaseWanted (){
}
function askIfNumbersWanted (){
}

var generateBtn = document.querySelector("#generate");
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)