
// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputPasswordEl = document.querySelector("#password");

var pCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
    symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}

 window.alert("Welcome to the password generator! Click 'Ok', then click 'Generate Password' to get started");

   

 
    
 var trueInput = true; 

 while(trueInput) /* triggers window Pop up */

 passwordInput = window.prompt("Type 'symbols' for a symbol based password. Type 'numbers' for a number based password");

 if (!passwordInput) {
       newPassword();
 } else if (passwordInput) {
   
 }

 /*
// Write password to the #password input
function writePassword () {
  var password = generatePassword("#generate"); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
  console.log(writePassword)
  
}



  var generatePassword = function() {

  
          
        var length = 20,
        symbols = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~",
        pass = "";
    for (var i = 0, n = symbols.length; i < length; ++i) {
        pass += symbols.charAt(Math.floor(Math.random() * n));
        
        console.log(generatePassword)

      }
    return pass;

  }

    
    
    
    
    /*var length = 20,
    lowercase = "abcdefghijklmnopqrstuvwxy",
    pass = "";
for (var i = 0, n = lowercase.length; i < length; ++i) {
    pass += lowercase.charAt(Math.floor(Math.random() * n));
    
    console.log(generatePassword)

  
return pass;
}

var length = 20,
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
pass = "";
for (var i = 0, n = uppercase.length; i < length; ++i) {
pass += uppercase.charAt(Math.floor(Math.random() * n));

console.log(generatePassword)

}
return pass;
}*/
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
cardbody.addEventListener("click", generatePassword);


  

