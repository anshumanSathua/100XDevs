"use strict";
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
const isAnagram = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    if (arr1.length === arr2.length && arr1.every((a) => arr2.includes(a))) {
        return true;
    }
    else {
        return false;
    }
};
let str1 = "listen";
let str2 = "silent";
console.log(isAnagram(str1, str2));
let str3 = "rail safety";
let str4 = "fairy tales";
console.log(isAnagram(str3, str4));
let str5 = "hello";
let str6 = "world";
console.log(isAnagram(str5, str6));
