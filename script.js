var generateBtn = document.querySelector("#generate").addEventListener('click', writePassword);

//Characters to be used in generation of password
const numbers = ['0123456789']
const alphaLower = ['abcdefghijklmnopqrstuvwxyz']
const alphaUpper = ['ABCDEFGHIJKLMNOPQRSTUVQXYZ']
const symbols = ['!@#$%&*()-_=+/?<>;:[]{}`~']

// String into Array
const arrayOfNums = Array.from(String(numbers), Number)
const arrayOfAlphaLower = Array.from(String(alphaLower), String)
const arrayOfAlphaUpper = Array.from(String(alphaUpper), String)
const arrayOfSym = Array.from(String(symbols), String)


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password; 
}


// Function to collect conditions for password
function generatePassword(){
  //Prompt to collect length of password used in Generation Section
  let checkLength = prompt('Please select the desired length of your password. (Between 8 and 128 characters)')
  //If selection isnt between required parameters restarts function
  while(checkLength <= 7 || checkLength >= 129 || isNaN(checkLength)) {
    alert('Password length out of paramters. Defaulting to a length of 12')
    checkLength = 12
  }
  //Collects user's choice of character types to be used in generation
  let upperCheck = confirm('Would you like to use upper case letters in this password?')
  let lowercheck = confirm('Would you like to use lower case letters in this password?')
  let numCheck = confirm('Would you like to use numbers in this password?')
  let symCheck = confirm('Would you like to use symbols in this password?')
  //Checks if at least one choice was made. If password cannot generate will restart function
  while(upperCheck === false && lowercheck === false && numCheck === false && symCheck === false) {
    alert('No values were selected. Defaulting to all character types')
    upperCheck = true;
    lowercheck = true;
    numCheck = true;
    symCheck = true;
  }
  //Concats each string with passwordChar if character type was confirmed
  let passwordChar = [];
  
  if (upperCheck) {
    passwordChar = passwordChar.concat(arrayOfAlphaUpper)
  }
  if (lowercheck) {
    passwordChar = passwordChar.concat(arrayOfAlphaLower)
  }
  if (numCheck) {
    passwordChar = passwordChar.concat(arrayOfNums)
  }
  if (symCheck) {
    passwordChar = passwordChar.concat(arrayOfSym)
  }
  
  let randomizedPassword = ''
  //Generates password with above information based on length chosen in first section of generatePassword Function
  for(i = 0; i < checkLength; i++) {
    randomizedPassword = randomizedPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)]
  } //returns completed password for use in writePassword function.
  return randomizedPassword
}


