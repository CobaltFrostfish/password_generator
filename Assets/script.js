// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables to be used
var specialChar = '!@#$%&(*)';
var numChar = '1234567890';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
