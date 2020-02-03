// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  alert("Please choose from the following password criteria in order to generate your random password");

  Lenny = prompt("Choose your password's length between 8 and 128 random characters: ");

    while(Lenny < 8 || Lenny > 128) { // validation of length
       Lenny = prompt("Please choose an appropriate password length between 8 and 128 characters!");
    }
    
  Chase = prompt("Enter l for lowercase letters, u for uppercase, n for numbers, q for unique characters and c for a combination of them all. Alternatively you can type in combinations of the single letters as well. Such as l space u for lower AND uppercase.");
    if(Chase === "lower" || Chase === "l") {
      criteria.lorrGen(Lenny);
    }
    else if(Chase === "upper" || Chase === "u") {
      criteria.upGen(Lenny);
    }
    else if(Chase === "numbers" || Chase === "n") {
      criteria.numGen(Lenny);
    }
    else if(Chase === "unique" || Chase === "q") {
      criteria.unGen(Lenny);
    }
    else if(Chase === "combo" || Chase === "c") {
      criteria.comGen(Lenny);
    }
    else if(Chase === "lower" + " " + "upper" || Chase == "l" + " " + "u" || Chase === "u" + " " + "l") {
      criteria.lowUpGen(Lenny);
    }
    else if(Chase === "lower" + " " + "numbers" || Chase == "l" + " " + "n" || Chase === "n" + " " + "l") {
      criteria.lowNumGen(Lenny);
    }
    else if(Chase === "lower" + " " + "unique" || Chase == "l" + " " + "q" || Chase === "q" + " " + "l") {
      criteria.lowUnGen(Lenny);
    }
    else if(Chase === "upper" + " " + "numbers" || Chase == "u" + " " + "n" || Chase === "n" + " " + "u") {
      criteria.upNumGen(Lenny);
    }
    else if(Chase === "upper" + " " + "unique" || Chase == "u" + " " + "q" || Chase === "q" + " " + "u") {
      criteria.upUnGen(Lenny);
    }
    else if(Chase === "numbers" + " " + "unique" || Chase == "n" + " " + "q" || Chase === "q" + " " + "n") {
      criteria.numbGen(Lenny);
    }
    else {
      
      alert("Valid entry required");
      return;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = x;

}

  criteria = {
               numbers_unique : "0123456789!\#$%&'()*+,-./:;<=>?@[\\^_`{|}~[];",
               upper_unique : "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\#$%&'()*+,-./:;<=>?@[\\^_`{|}~[];",
               upper_numbers : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
               lower_unique : "abcdefghijklmnopqrstuvwxyz!\#$%&'()*+,-./:;<=>?@[\\^_`{|}~[];",
               lower_numbers : "abcdefghijklmnopqrstuvwxyz0123456789",
               lower_uppercase : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
               lowercase : "abcdefghijklmnopqrstuvwxyz",
               uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
               numbers : "0123456789",
               unique : "!\#$%&'()*+,-./:;<=>?@[\\^_`{|}~[];", 
               combo : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0 123456789!\#$%&'()*+,-./:;<=>?@[\\^_`{|}~[];",
                    
               
              lorrGen: function (passLength) {
  
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.lowercase.charAt(Math.floor(Math.random() * criteria.lowercase.length));
                    
                      }
                      },
              upGen: function (passLength) {
  
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.uppercase.charAt(Math.floor(Math.random() * criteria.uppercase.length));
                      
                      }
                      },
              numGen: function (passLength) {
  
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.numbers.charAt(Math.floor(Math.random() * criteria.numbers.length));
                        
                      }
                      },
              unGen: function (passLength) {
  
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.unique.charAt(Math.floor(Math.random() * criteria.unique.length));
                          
                      }
                      },
              comGen: function (passLength) {
  
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.combo.charAt(Math.floor(Math.random() * criteria.combo.length));
                            
                      }
                      },
                    
              lowUpGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.lower_uppercase.charAt(Math.floor(Math.random() * criteria.lower_uppercase.length));
                              
                      }
                      },
                    
              lowNumGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {    
                      x += criteria.lower_numbers.charAt(Math.floor(Math.random() * criteria.lower_numbers.length));
                                
                      }
                      },
                                
              lowUnGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.lower_unique.charAt(Math.floor(Math.random() * criteria.lower_unique.length));
                                
                      }
                      },
                    
              upNumGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.upper_numbers.charAt(Math.floor(Math.random() * criteria.upper_numbers.length));
                                  
                      }
                      },
                    
              upUnGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.upper_unique.charAt(Math.floor(Math.random() * criteria.upper_unique.length));
                                    
                      }
                      },
                    
              numbGen: function (passLength) {
                      
                      x = "";
                      for( var i = 0; i < passLength; i++) {
                      x += criteria.numbers_unique.charAt(Math.floor(Math.random() * criteria.numbers_unique.length));
                                      
                      }
                      }
        };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
