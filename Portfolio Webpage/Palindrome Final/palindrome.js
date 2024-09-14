/*
//Method 1


function palindromeCheck1(str) {                              // L1 - create function where we can input a 'string', and then perform following to said string:
  return (                                                   // L2 - return() -> will output a boolean value based on the === operator, true or false
    str.replace(/[\W_]/g, "").toLowerCase() ===               // L3 - "first version" deletes all non-alpha numeric elements, and lowercase remaining characters -> "mjrocks"

    str                                                       // L4 - "second version" aka the reversed version
      .replace(/[\W_]/g, "")                                  // L5 - deletes all non-alpha numeric elements
      .toLowerCase()                                          // L6 - lowercase the remaining characters      
      .split("")                                              // L7 - splits the characters into elements with an array because strings are immutable (cannot be altered)
      .reverse()                                              // L8 - and then we can reverse the elements within the array -> ["s", "k", "c", "o", "r", "j", "m"]
      .join("")                                               // L9 - and then convert it back into a string --> "skcorjm"
  );                                                          // L10 - therefore, does "mjrocks" === "skcorjm"? --> FALSE
}

//Test Example
console.log(palindromeCheck1 ("Race car_"));
console.log(palindromeCheck1("mjrocks"));

*/

function palindromeCheck2(str) {                                            // L1 
  const nonAlphaNum = /[\W_]/g;                                            // L2
  let firstVersion = str.toLowerCase().replace(nonAlphaNum, '')             // L3 
  let reversedVersion = firstVersion.split('').reverse().join('');          // L4 

  return reversedVersion === firstVersion;                                  // L5
}

console.log(palindromeCheck2 ("Race car_"));
console.log(palindromeCheck2 ("mjrocks"));

/*

// L3
created our first version of the string. We converted all elements to lowercase, and removed all non 
alpha-numeric characters. .replace syntax --> .replace(find value, new value). We referenced back to 
our first variable 'const nonAlphaNum' to find all current non alpha-numeric characters, and replace 
it with the '' which will replace anything found with nothing AKA deleting the element.

str.toLowerCase() -> "Mjrocks_"
.replace(nonAlphaNum, ''); -> "mjrocks"

// L4
created our second version, aka the reversed version, of the string where we took our first version and applied a few more methods to it.
firstVersion -> takes our modified string from before with all toLowerCase and nonAlphaNum characters removed
.split('') -> create a new array with all characters in the string separated into single characters -> ["m", "j", "r", "o", "c", "k", "s"]
.reverse() -> reverse the order of the elements in an array -> ["s", "k", "c", "o", "r", "j", "m"]
.join('') -> converts an array of elements into one string -> "skcorjm"

// L5
reversedVersion === firstVersion        ->        "mjrocks" === "skcorjm"     ->      FALSE
 */

// WEB API from JS to HTML

let submitButtonEvent = document.getElementById("submitButton");

submitButtonEvent.addEventListener("click", function() {
  'use strict';

const value = document.getElementById("inputString").value;

const notification = document.getElementById("notification");

const displayWord = document.getElementById("displayWord");

if (palindromeCheck2(value)) {
  notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;
  displayWord.innerHTML = 
  `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
} else {
  notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOTs a Palindrome!`;
  displayWord.innerHTML = 
  `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
}
});