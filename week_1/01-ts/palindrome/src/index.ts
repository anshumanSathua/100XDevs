/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

const isPalindrome = (str: string): boolean => {
  let stringArr: string[] = str.toLowerCase().split("");
  let reversedStr: string = stringArr.reverse().join("");
  return str === reversedStr;
};

let str1: string = "level";
let str2: string = "racecar";
let str3: string = "hello";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
