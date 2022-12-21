// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //asks user how long they want their pw to be
  var passwordLength = prompt("Please enter a value for your password length. The value must be between 8 and 128.");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a value for your password length. The value must be between 8 and 128.");
  } 
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var upperCase = confirm("Would you like to use uppercase letters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSymbols = confirm("Would you like to use symbols?");

  var questions = [lowerCase, upperCase, useNumbers, useSymbols];
  while (!lowerCase && !upperCase && !useNumbers && !useSymbols) {
    alert('Please select at least one type of character!');
    lowerCase = confirm("Would you like to use lowercase letters?");
    upperCase = confirm("Would you like to use uppercase letters?");
    useNumbers = confirm("Would you like to use numbers?");
    useSymbols = confirm("Would you like to use symbols?");
    questions = [lowerCase, upperCase, useNumbers, useSymbols];
  }
  var arrNames = ["lowerArr", "upperArr", "numArr", "symbolArr"];
  var passwordArr = [];

  for (let j = 0 ; j < 4; j++) {
    if(questions[j]) {
      passwordArr = passwordArr.concat(characters[arrNames[j]]);
      console.log(arrNames[j]);
      console.log(passwordArr.length)
    }
  }
  console.log(passwordArr); 
  var newPassword = "";
  for (k = 0; k < passwordLength; k++) {
    var x = getRandomInt(0, passwordArr.length);
    console.log(passwordArr[x]);
    newPassword += passwordArr[x];
  }
  return newPassword + ' 👀';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const characters = {
 lowerArr:  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
 upperArr:  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 numArr:  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
 symbolArr: [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\\", "\]", "^", "_", "`", "{", "|", "}", "~"]
};

