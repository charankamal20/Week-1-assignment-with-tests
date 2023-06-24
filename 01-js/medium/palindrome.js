/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

// let strr = "my nmae is charan";

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,"");

  let i = 0;
  let j = str.length-1;
  while(i < j)  {
    if(str.charAt(i) !== str.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

// console.log(isPalindrome(strr));

module.exports = isPalindrome;
