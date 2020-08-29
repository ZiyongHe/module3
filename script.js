// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)


let letters = 'abcdefghijklmnopqrstuvwxyz'
let specialChar = '~!@#$%^&*()-+=_.'
let numeric = '0123456789'

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */


function displayNewPassword () {
  let criteria = getCriteria()
  let password = generatePassword(criteria)
  let passwordText = document.getElementById('password')
  passwordText.textContent = password
}

/* Your solution code goes here ... */
function getCriteria(){
  let hasUpperLetters 
  let hasLowerLetters
  let hasSpecialChar
  let hasNumeric
  let length 

  //Ask for password length until valid input
  while (1){
    length = prompt("Choose password length. It has to be at least 8 characters and no more than 128 characters")
    if (length >=8 && length <=128) break
  }

  
  //Ask for character type until at least 1 type selected. Return criteria in array form 
  while (1){
    alert("Choose criteria of character types for your password. At least one type needs to be selected.")
    hasUpperLetters = confirm("Password includes upper letter?")
    hasLowerLetters = confirm("Password includes lower letter?")
    hasSpecialChar = confirm("Password includes special character?")
    hasNumeric = confirm("Password includes numeric character?")

    if (hasUpperLetters||hasLowerLetters||hasSpecialChar||hasNumeric) {
      return criteria = [hasUpperLetters,hasLowerLetters,hasSpecialChar,hasNumeric,length]
    }
  }
}

function generatePassword (criteria){
  
  //generate charater set based on provided criteria 
  let charset = ''
  if (criteria[0]){
    charset = letters.toUpperCase()
  }
  if (criteria[1]){
    charset += letters
  }
  if (criteria[2]){
    charset += specialChar
  }
  if (criteria[3]){
    charset += numeric
  }

  //add up random character one by one from character set to  password string until desired string length is reached
  let passwordString=''
  while (passwordString.length < criteria[4]){
    passwordString += charset.charAt(Math.floor(Math.random()*charset.length))
  }

  //return generated password string
  return passwordString
}

