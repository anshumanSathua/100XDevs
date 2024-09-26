/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

const calculateTime = (n: number): number => {
  const startingtime: number = Date.now();
  let sum: number = 0;
  for (let i: number = 1; i <= n; i++) {
    sum += i;
  }
  const endingtime: number = Date.now();
  const timeTaken = endingtime - startingtime;
  return timeTaken;
};

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
