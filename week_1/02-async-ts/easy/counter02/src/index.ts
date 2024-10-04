/**
 * Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
 */

let count: number = 0;
let isRunning: boolean = true;

const counter = (): void => {
  if (isRunning) {
    count++;
    console.log(count);
    setTimeout(counter, 1000);
  }
};
setTimeout(counter, 1000);
setTimeout(() => (isRunning = false), 10000);
