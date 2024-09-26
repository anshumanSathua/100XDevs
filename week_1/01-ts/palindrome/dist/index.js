"use strict";
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
const isPalindrome = (str) => {
    let stringArr = str.toLowerCase().split("");
    let reversedStr = stringArr.reverse().join("");
    return str === reversedStr;
};
let str1 = "level";
let str2 = "racecar";
let str3 = "hello";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
