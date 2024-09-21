/**
 * Downward Triangle Star Pattern
 *       *****
 *       ****
 *       ***
 *       **
 *       *
 */

const downwardTriangle = (n: number): string => {
  let str: string = "";
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n - i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(downwardTriangle(5));
