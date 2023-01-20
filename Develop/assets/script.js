// Assignment code here
var generateBtn = document.querySelector("#generate");

var pwdCriteria = {

  pwdLength: 0,

  //array to hold lowercase letters
  pwdLowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i ", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v ", "w", "x", "y", "z"],

  //array to hold uppercase letters
  pwdUpperCase: ["A", "B", "C", "D,", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  pwdNumber: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

  //array yo hold special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
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
          if (lowerCase === true && pwdCriteria < pwdLength) {
            var lc = pwdCriteria.pwdLowercase[Math.floor(Math.random() * 26)]
            result = result + lc;
            pwdCriteria.pwdLength++;
          }

          if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
            var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
            result = result + sc;
            pwdCriteria.pwdLength++;
          }
          if (upperCase === true && pwdCriteria.pwdLength) {
            var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
            result = result + uc;
            pwdCriteria.pwdLength++;
          }
          if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
            var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
            result = result + num;
            pwdCriteria.pwdLength++;
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
