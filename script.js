var length
var special 
var upper
var lower
var numeric

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log (specialCharacters, upperCase, lowerCase, numericCharacters)

/* 
var index = Math.floor(Math.random() * specialCharacters.length);
var index = Math.floor(Math.random() * upperCase.length);
var index = Math.floor(Math.random() * lowerCase.length);
var index = Math.floor(Math.random() * numericCharacters.length);
*/

function generatePassword () {
  askHowManyCharacters()
  askIfSpecialCharactersWanted()
  askIfUpperCaseWanted()
  askIfLowerCaseWanted()
  askIfNumbersWanted()

  // if special, upper, lower, and numeric are all false, try again
  var options = []
  if (special) {
    // options = options + specialCharacters
    options += specialCharacters
  }
  if (upper) {
    // options = options + upperCase
    options += upperCase
  }
  if (lower) {
    // options = options + lowerCase
    options += lowerCase
  }
  if (numeric) {
    // options = options + numericCharacters
    options += numericCharacters
  }

var password = ''
  //for loop that iterates over the length variable
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * options.length);
    //use index to select a character from the options array and add that to the password
  }
  return password
}
function askHowManyCharacters (){
  var num = prompt("How long do you want your password to be?")
  if (num < 8 || num > 128 || typeof num === NaN) {
    alert("Invalid length, please enter a number 8-128")
    askHowManyCharacters()
  } else {
    length = num
  }
}
function askIfSpecialCharactersWanted (){
  special = confirm("Do you want special characters in your password?")
}
function askIfUpperCaseWanted (){
  upper = confirm("Do you want uppercase letters in your password?")
}
function askIfLowerCaseWanted (){
  lower = confirm("Do you want lowercase letters in your password?")
}
function askIfNumbersWanted (){
  numeric = confirm("Do you want numbers in your password?")
}

var generateBtn = document.querySelector("#generate");
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)