/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

const isAnagram = (str1: string, str2: string): boolean => {
  let arr1: string[] = str1.split("");
  let arr2: string[] = str2.split("");

  if (arr1.length === arr2.length && arr1.every((a) => arr2.includes(a))) {
    return true;
  } else {
    return false;
  }
};

let str1: string = "listen";
let str2: string = "silent";
console.log(isAnagram(str1, str2));

let str3: string = "rail safety";
let str4: string = "fairy tales";
console.log(isAnagram(str3, str4));

let str5: string = "hello";
let str6: string = "world";
console.log(isAnagram(str5, str6));
