// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables to be used
var specialChar = '!@#$%&(*)';
var numChar = '1234567890';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';

function getPasswordOptions() {
  var length = prompt("Choose a password length between 8 and 128 characters.")
  var numOption = confirm("Click OK if you'd like to include numerics, otherwise click cancel.") 
  var upperOption = confirm("Click OK if you'd like to include uppercase letters, otherwise click cancel.")
  var lowerOption = confirm("Click OK if you'd like to include lowercase letters, otherwise click cancel.")
  var specOption = confirm("Click OK if you'd like to include special characters, otherwise click cancel.")
  var passwordOptions = {
    length: length,
    numbers: numOption,
    uppercase: upperOption,
    lowercase: lowerOption,
    specialCharacters: specOption
  }
  return passwordOptions
}

function generatePassword() {
  //This function is going to take in users input and build a password and return password to the right password function
  var options = getPasswordOptions()
  console.log(options)

  var possibleCharacters = ""
    if (options.numbers) {
      possibleCharacters += numChar
      console.log(possibleCharacters)
    }
    if (options.uppercase) {
      possibleCharacters += upperChar
      console.log(possibleCharacters)
    }
    if (options.lowercase) {
      possibleCharacters += lowerChar
      console.log(possibleCharacters)
    }
    if (options.specialCharacters) {
      possibleCharacters += specialChar
      console.log(possibleCharacters)
    }
    var results = ""
    for ( var i = 0; i < options.length; i++ ) {
      results += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
   }
   return results
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
