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

// Password Generator Function
function generatePassword() {
  
  // Function to create an array of values
  function charArray (min, max) {
    const array = [];
    for (var i = min; i <= max; i++) {
      array.push(i);
    }
    return array;
  }

  // Let user know what to do.
  alert("Select your password criteria");
  
  // Initialize Variables
  var passwordLength;
  var passwordLengthmatch = false;

  // Loop to check password length
  while (!passwordLengthmatch) {
    
    // Prompt user for password legth
    var passwordLength = window.prompt("Choose password length of at least 8 characters and no more than 128 characters");
    
    // Check to see if user input valid value 
    const numArray = charArray(8, 128);

    for (var i = 0; i < numArray.length; i++) {
      if(passwordLength == numArray[i]) {
        passwordLengthmatch = true;
      }
    }

    // Alert user if input value is not valid
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length is either too short or too long. Try again.");
    }
    else if (!passwordLengthmatch) {
      alert("Password length must be a number. Try again.");
    }

  }

  // Ask user for different selections.
  var lowerCaseCheck = window.confirm("Lower Case?");
  var upperCaseCheck = window.confirm("Upper Case?");
  var numericCheck = window.confirm("Numeric?");
  var symbolCheck = window.confirm("Special Characters?");

  // Set up arrays of each selection
  const lowerCase = charArray(97, 122);
  const upperCase = charArray(65, 90);
  const number = charArray(48, 57);
  const symbol = charArray(33, 47).concat(charArray(58, 64)).concat(charArray(91, 96)).concat(charArray(123, 126));

  // Iniital Confirmation
  var userSelection = "User Selection:\n";

  // Verify at least one selection is selected
  while(!lowerCaseCheck && !upperCaseCheck && !numericCheck && !symbolCheck) {
    alert("No criteria was selected. Please select one.");
    var lowerCaseCheck = window.confirm("Lower Case?");
    var upperCaseCheck = window.confirm("Upper Case?");
    var numericCheck = window.confirm("Numeric?");
    var symbolCheck = window.confirm("Special Characters?");
  }

  // Initial password criteria array
  var passwordCriteria = [];
 
  // Check user check to create an array of the characters to choose from
  if (lowerCaseCheck) {
    passwordCriteria = passwordCriteria.concat(lowerCase);
    userSelection = userSelection + "Lower Case\n";
  }
  
  if (upperCaseCheck) {
    passwordCriteria = passwordCriteria.concat(upperCase);
    userSelection = userSelection + "Upper Case\n";
  }
  
  if (numericCheck) {
    passwordCriteria = passwordCriteria.concat(number);
    userSelection = userSelection + "Numeric\n";
  }
  
  if (symbolCheck) {
    passwordCriteria = passwordCriteria.concat(symbol);
    userSelection = userSelection + "Special Characters\n";
  }

  // Confirm selection for user.
  alert(userSelection);

  // Initial password array
  const password = [];

  // Create password from password criteria array
  for (var i = 0; i < passwordLength; i++) {
    const randomPassword = passwordCriteria[Math.floor(Math.random()*passwordCriteria.length)];
    password [i] = String.fromCharCode(randomPassword);
  }

  // Return password without any separators
  return password.join("");
}
