// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Array of special characters to be included in password
const specialChar= [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

  // Array of numeric characters to be included in password
const numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Start of Generator code
function generatePassword () {
  let passLength = parseInt(prompt('Enter the length of your password (Min: 8 and Max: 128)'));
    if (passLength < 8 || passLength > 128 || isNaN(+passLength))
    {
    alert('ERROR! Your password length does not meet the minimum of 8 and maximum of 128 numeric characters. Please try again.')
    }
      let confirmSpecialChar = confirm("Do you want special characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmLowerCase = confirm("Do you want lower case characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmUpperCase = confirm("Do you want upper case characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmNumChar = confirm("Do you want numeric characters? Click 'OK' for Yes or 'Cancel' for No");
    
    if ( !confirmSpecialChar && !confirmLowerCase && !confirmUpperCase && !confirmNumChar)
    {
      alert("Please try again. You must select at least one password criteria")
    }

    if (confirmSpecialChar)
    {
    
    }
    if (confirmLowerCase) 
    {

    }
    if (confirmUpperCase)
    { 

    }
    if (confirmNumChar)
    { 

    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);