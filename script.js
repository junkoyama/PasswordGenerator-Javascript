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
const upperCasedChar = [
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

  let randomArray = [];
  let password = '';

// Generates prompt to ask user the length of desired password
  let passLength = parseInt(prompt('Enter the length of your password (Min: 8 and Max: 128)'));
// If less than 8 and greater than 128 characters then generate an alert that tells user to try again  
  if (passLength < 8 || passLength > 128 || isNaN(+passLength))
    {
    alert('ERROR! Your password length does not meet the minimum of 8 and maximum of 128 numeric characters. Please try again.');

// Instead of making user go through the below prompts - this would return the user to original page with Please try again in text box
    return 'Please try again';

    }
// Generates a prompt box asking users Yes or No to desired characters 
      let confirmSpecialChar = confirm("Do you want special characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmLowerCase = confirm("Do you want lower case characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmUpperCase = confirm("Do you want upper case characters? Click 'OK' for Yes or 'Cancel' for No");
      let confirmNumChar = confirm("Do you want numeric characters? Click 'OK' for Yes or 'Cancel' for No");
// If user does not select at least one option then an alert is generated for user to try again
    if ( !confirmSpecialChar && !confirmLowerCase && !confirmUpperCase && !confirmNumChar)
    {
// Instead of getting 'undefined' in the text box, the user would see 'Please try again'  
      alert("Please try again. You must select at least one password criteria");

      return 'Please try again';
    }
// If user responds true or false to the prompts then a code will read from which random arrays to choose from or not choose from
    if (confirmSpecialChar)
    { randomArray = randomArray.concat(specialChar)
    }

    if (confirmLowerCase) 
    {randomArray = randomArray.concat(lowerCasedChar)
    }

    if (confirmUpperCase)
    { randomArray = randomArray.concat(upperCasedChar)
    }

    if (confirmNumChar)
    { randomArray = randomArray.concat(numericChar)
    }

// Generates code based on the length of desired password from the first prompt 
    for (var i = 0; i < passLength; i++) {
      var numero = Math.floor(Math.random() * randomArray.length);
      password += randomArray[numero]
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);