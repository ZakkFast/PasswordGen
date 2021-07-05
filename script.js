var generateBtn = document.querySelector("#generate");

//Characters to be used in generation of password
const numbers = ['123456789']
const alpha = ['abcdefghijklmnopqrstuvwxyz']
const symbols = ['!@#$%&*']

// String into Array
const arrayOfNums = Array.from(String(numbers), Number)
const arrayOfAlpha = Array.from(String(alpha), String)
const arrayOfSpecial = Array.from(String(symbols), String)

//Super Awesome

console.log(arrayOfSpecial)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

