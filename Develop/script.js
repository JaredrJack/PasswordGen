// Assignment code here
var generateBtn = document.querySelector("#generate");

var pwdCriteria = {

  pwdLength: 0,

  //array to hold lowercase letters
  var alpha = "lowercase"

//array to hold uppercase letters
var bravo = "uppercase"

//array to hold numbers
var charlie = "numeric"

//array yo hold special characters
var delta: "special characters";

}
// Get references to the #generate element
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
  var result = "";
  var passwordLength = 0(prompt("8 to 128 length"))
  console.log(passwordLength);
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;
}

passwordLength = 0;
pwdCriteria.pwdLength = 0;
result = "";


while (passwordLength >= 8 && passwordLength <= 128) {
  passwordLength = prompt("Please enter number greater than 8 of less than 128");

  if (passwordLength === null) {
    return "Your secured password";
  }

  else {
    if (!isFinite(passwordLength)) {
      alert(" Please enter number");
      return "Your secured password";
    }
    else {
      if (passwordLength < 8 || passwordLength > 128) {
        alert(" Password must be between 8 and 128 characters.");
        return " Your secure password";
      }
    
      showPrompts();
      while (pwdCriteria.pwdLength < passwordLength) {
        if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
          alert("You must use at least one requirement of lowercase , uppercase, numbers or special charaters")
          showPrompts();
        }
        else {
          if (lowerCase === true && passwordReq < passwordLength) {
            var lowerCase = passwordReq.passwordLowerCase[Math.floor(Math.random())]
            result = result + lowerCase;
            passwordReq.passwordLength++;
          }
          if (specialChar === true && passwordLength.passwordLength < passwordLength) {
            var specialChar = passwordReq.passwordCharater[Math.floor(Math.random())]
            result = result + specialChar;
            passwordReq.passwordLength++;
          }
          if (upperCase === true && passwordReq.passwordLength) {
            var upperCase = passwordReq.passwordUpperCase[Math.floor(Math.random())]
            result = result + upperCase;
            passwordReq.passwordLength++;
          }
          if (numbers === true && passwordReq.passwordLength < passwordLength) {
            var number = passwordReq.passwordNum[Math.floor(Math.random())]
            result = result + numbers;
            passwordReq.passwordLength++
          }
        }
      }
    }
  }
  function showPrompts() {
    lowerCase = confirm("Do you want to use lower case letters?");
    upperCase = confirm(" Do you want upper case letters?");
    number = confirm("Do you want to use numbers?");
    specialChar = confirm("Do you want to use any special characters?");
  }
}
