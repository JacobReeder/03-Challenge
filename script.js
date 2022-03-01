// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardbody = document.querySelector("#password");

function promptWindows (){
  alert ("Welcome to the Password Generator")
  }
 

// Write password to the #password input
function writePassword () {
  var password = generatePassword("#generate"); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
  console.log(writePassword)
  
}

function promptWindows (){
window.prompt ("Welcome to the Password Generator")
}

  var generatePassword = function() {
    var length = 20,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        pass = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        
        console.log(generatePassword)

      }
    return pass;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
cardbody.addEventListener("click", generatePassword);


