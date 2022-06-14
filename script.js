// Assignment code here
function generatePassword(){
  console.log("Hey! You Clicked the button!");

var passwordLength = window.prompt("Choose a password length 8 < 128");
var specialCharacters = window.confirm("Click OK to confirm including special characters");
var numericalCharacters = window.confirm("Click OK to confirm including numbers");
var lowerCaseCharacters = window.confirm("Click OK to confirm including lowercase characters"); 
var upperCaseCharacters = window.confirm("Click OK to confirm including uppercase characters"); 
var chars = "";
  var CHARS = "" ; 
  var numbers= "";
  var specialChar="";
  if (numericalCharacters){
    numbers="0123456789";
  }
  if (specialCharacters){
     specialChar = "!@#$%^&*()_+?><:{}[]";
    }
  if (lowerCaseCharacters){
    chars = "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCaseCharacters){
    CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var passwordBuilder= ( CHARS + numbers + chars +specialChar);
  console.log(passwordBuilder);
  for (var i=0; i<passwordLength; i++){
    
    password += passwordBuilder.charAt(Math.floor(Math.random()*100));
  
  }
  
console.log(password);
return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // document.getElementById();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);