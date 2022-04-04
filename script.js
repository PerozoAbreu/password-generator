// Assignment code here
var characterLength = 10;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

}

function generatePassword() {
  // generate password based on the prompts //
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

function getPrompts() {

  choiceArr = [];

  characterlength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Try Again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);

  }
  if (confirm("Do you want special characthers in your passowrd?")) {
    choiceArr = choiceArr.concat(specialCharArr);

  }
  if (confirm("DO you want numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
