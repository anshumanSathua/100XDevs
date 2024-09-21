/**
 * Right Triangle Pattern in Javascript
 *               *
 *              **
 *             ***
 *            ****
 *           *****
 */

const rightTriangle = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < i; k++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(rightTriangle(5));
