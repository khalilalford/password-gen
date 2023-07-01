
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecialChar;

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// a created variable that is referencing the button from the html
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  
}

generatePassword()
// Write password to the #password input
// function called "writePassword"
function writePassword() {
// creates variable "password" with function called "generatePassword"
var password = generatePassword
// creates variable "passwordText" with function grabbing "id=password" in html
var passwordText = document.querySelector("#password");
// setting value to password
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// PHASE 1-Creating variable and getting the info we need
// what do we need to do?
// must PROMPT use for lengthof word (8-128)(use prompt)
enter = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128"));
if (!enter){
  alert("This needs a value");
}else if (enter < 8 || enter > 128) {
  enter = (prompt)("Please choose between 8 and 128")
}else{
  confirmUppercase = ("Will it contain uppercase letters?")
  confirmLowercase = ("Will it contain lowercase letters?")
  confirmNumbers =("Will it contain numbers?")
  confirmSpecialChar = ("Will it contain a special character?")
};

// confirm user is theyd like to use special characters
//  I confirmed the user if theyd like to use numbers
// create a pool of available characters(lowercase/uppercase/numbers/special)
// if they said yes to numbers, add the numbers to availableChars

// all are yes/no except for length
// THINK about edge cases for bad length inputs**
if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecialChar) {
  choices = alert("You must choose a valid option");
  
  // confirm user for upper/lower case (yes no? USE CONFIRM)
  
}    else if (confirmSpecialChar && confirmNumbers && confirmUppercase && confirmLowercase) {

  choices = specialChar.concat(numbers, upperCase, lowerCase);
}
else if (confirmSpecialChar && confirmNumbers && confirmUppercase) {
  choices = specialChar.concat(numbers, upperCase);
}
else if (confirmSpecialChar && confirmNumbers && confirmLowercase) {
  choices = specialChar.concat(numbers, lowerCase);
}
else if (confirmSpecialChar && confirmLowercase && confirmUppercase) {
  choices = specialChar.concat(lowerCase, upperCase);
}
else if (confirmNumbers && confirmLowercase && confirmUppercase) {
  choices = numbers.concat(lowerCase, upperCase);
}

else if (confirmSpecialChar && confirmNumbers) {
  choices = specialChar.concat(numbers);

} else if (confirmSpecialChar && confirmLowercase) {
  choices = specialChar.concat(lowerCase);

} else if (confirmSpecialChar && confirmUppercase) {
  choices = specialChar.concat(upperCase);
}
else if (confirmLowercase && confirmNumbers) {
  choices = lowerCase.concat(numbers);

} else if (confirmLowercase && confirmUppercase) {
  choices = lowerCase.concat(upperCase);

} else if (confirmNumbers && confirmUppercase) {
  choices = numbers.concat(upperCase);
}

else if (confirmSpecialChar) {
  choices = specialChar;
}
else if (confirmNumber) {
  choices = numbers;
}
else if (confirmLowercase) {
  choices = lowerCase;
};
var password = [];

for (var i = 0; i < enter; i++) {
    var selectRandom = choices[Math.floor(Math.random() * choices.length)];
    password.push(selectRandom);
}
var ps = password.join("");{
UserInput(ps);

}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

// if user types in 6 characters - tell them what they did wrong/ terminate function /restart
// "if length is less than 8" tell themit was too small
// "if length is less than 128"tell them too big
// "if no length indicated and non numerical" tell them wrong entry
// if user says no to every type of character / tell them to select at least 1 type of character/ restart
// ^^^I completed these steps to solve these psuedocodes from above 
