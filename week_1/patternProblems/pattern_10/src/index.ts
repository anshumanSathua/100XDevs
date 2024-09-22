/**
 * Diamond Pattern in Javascript
 *               *
 *              ***
 *             *****
 *            *******
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 */

const diamond = (n: number): string => {
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
  for (let a: number = 1; a <= n; a++) {
    for (let b: number = 0; b < a; b++) {
      str += " ";
    }
    for (let c: number = 1; c <= 2 * (n - a) - 1; c++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(diamond(5));
