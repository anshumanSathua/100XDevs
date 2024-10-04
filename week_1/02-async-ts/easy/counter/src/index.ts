/**
 * Create a counter in Typescript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
 */

let count: number = 0;
const Counter = (): void => {
  count++;
  console.log(count);
};

let intervalId: number = setInterval(Counter, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 11000);
