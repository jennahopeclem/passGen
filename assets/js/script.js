// Assignment Code
//Defining variables for password criteria
// var upperCase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'].split(' , ')
// var lowerCase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',')
// var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
// var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// console.log("this hit")


// Length of password has to be AT LEAST 8 characters and no more than 128 characters

// Password needs to include lowercase, uppercase, numeric, and/or special characters

//c reate a function to prompt user for password options

function passOptions() {
// Variable to store my user length
// As a user, a number must be converted from a string to an integer
var length = parseInt(
prompt("How many characters would you like your password to be?")
);
console.log(length)

if (Number.isNaN(length)) {
    alert('Password MUST be a numeric number')
    return null;
}

// conditional to check if user enters a number 8 and greater
if (length < 8) {
    alert('Pass length has to be 8 or more');
    return null;
}

// checking to make sure user inputs a NUMERIC value


// conditional to check if user enters a number 8 and greater
if (length > 128) {
  alert('Pass length has to be 128 or more');
  return null;
}

// conditional statments to check whether a user wants lower, upper, number, or special character

var hasLowerCase = confirm('Do you want to include lower case letters?');
var hasUpperCase = confirm('Do you want to include upper case letters?');
var hasNumbers = confirm('Do you want to include numbers letters?');
var hasSpecChar = confirm('Do you want to include special characters letters?');

// Create a condiitonal statement to make sure at least one character type is selected
if (
  hasLowerCase === false && 
  hasUpperCase === false && 
  hasNumbers === false && 
  hasSpecChar === false 
) {
  alert("Must choose one character type");
  return null;
}

//Object to store user inputs
var passwordOptions = {
  length: length,
  // key value pair^
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasSpecChar: hasSpecChar,
  hasNumbers: hasNumbers
};

console.log(passwordOptions)
return passwordOptions
// at the very end of my function, i was to run passwordOptions; content won't be able to be used


}


passOptions()



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
