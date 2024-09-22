/**
 *Reversed Pyramid Star Pattern
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 */

const reversedPyramid = (n: number): string => {
  let str: string = "";
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * (n - i) - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(reversedPyramid(5));
