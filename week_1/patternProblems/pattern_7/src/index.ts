/**
 * Javascript Pyramid Pattern
 *               *
 *              ***
 *             *****
 *            *******
 *           *********
 */

const pyramid = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(pyramid(5));
