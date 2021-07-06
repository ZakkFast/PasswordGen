var generateBtn = document.querySelector("#generate").addEventListener('click', writePassword);

//Characters to be used in generation of password
const numbers = ['123456789']
const alphaLower = ['abcdefghijklmnopqrstuvwxyz']
const alphaUpper = ['ABCDEFGHIJKLMNOPQRSTUVQXYZ']
const symbols = ['!@#$%&*']

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
  const checkLength = prompt('Please select the desired length of your password. (Between 8 and 128 characters)')
  //If selection isnt between required parameters restarts function
  if(checkLength <= 7 || checkLength >= 129) {
    alert('Please select a value between 8 and 128')
    generatePassword()
  }
  //Collects user's choice of character types to be used in generation
  const upperCheck = confirm('Would you like to use upper case letters in this password?')
  const lowercheck = confirm('Would you like to use lower case letters in this password?')
  const numCheck = confirm('Would you like to use numbers in this password?')
  const symCheck = confirm('Would you like to use symbols in this password?')
  
  //Checks if at least one choice was made. If password cannot generate will restart function
  if(upperCheck === false && lowercheck === false && numCheck === false && symCheck === false) {
    alert('You must select at least one type of character to generate password. Please try again.')
    generatePassword();
  }
  
  //Concats each string with passwordChar if character type was confirmed
  var passwordChar = [];
  
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
  
  var randomizedPassword = ''
  //Generates password with above information based on length chosen in first section of generatePassword Function
  for(i = 0; i < checkLength; i++) {
    randomizedPassword = randomizedPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)]
  } //returns completed password for use in writePassword function
  return randomizedPassword
}


