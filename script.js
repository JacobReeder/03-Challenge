
// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputPasswordEl = document.querySelector("#password");
var passwordInput = "";
var newArray = "";



//research indexes more. how is this stored in functions?
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

var passGenerator = function() { 

 var passwordInput = "";
 var newArray = "";
    
 var trueInput = true; 

 while(trueInput) /* triggers window Pop up */

 passwordInput = window.prompt("YOU NEED A NEW PASSWORD, YOU HAVE COME TO THE RIGHT PLACE. INPUT YOUR CRITERIA!");

 if (!passwordInput) {
       newPassword();
 } else if (passwordInput) {
               /* Requires valid input from user */
  passwordInput = passwordInput.split("");
  newArray = passwordInput.slice(0,userInput.length);

   window.alert("SO, YOU HAVE CHOSEN:" + newArray);

   trueInput = false;

    //Is a for loop optional here?
    //research .length and indexes, arrays. is this considered an array or index?

    for (var i =0; i < passwordInput.length; i++) {
     
      var charCriteria = passwordInput[i];
      //is this assigning the index to the passwordInput with the use of [i]?
      var charCriteriaI = parseInt(charCriteria);
      //research parse

      switch(charCriteriaI) { //research more about switch and what case means
        case 1:
          case 2:
            case 3:
              case 4:

              break; //research break

              
      }

    }

 } 
}

function passWordLimit () { /*how long the password should be?

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


} 

