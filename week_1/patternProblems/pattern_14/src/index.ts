/**
 * Left Pascal Star Pattern
 *               *
 *              **
 *             ***
 *            ****
 *           *****
 *            ****
 *             ***
 *              **
 *               *
 */

const leftPascal = (n: number): string => {
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
  for (let x: number = 1; x <= n; x++) {
    for (let z: number = 0; z < x; z++) {
      str += " ";
    }
    for (let y: number = 0; y < n - x; y++) {
      str += "*";
    }

    str += "\n";
  }
  return str;
};

console.log(leftPascal(5));
