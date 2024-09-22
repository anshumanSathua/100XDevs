/**
 * Right Pascal Star Pattern
 *           *
 *           **
 *           ***
 *           ****
 *           *****
 *           ****
 *           ***
 *           **
 *           *
 */

const rightPascal = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  for (let x: number = 1; x <= n; x++) {
    for (let y: number = 0; y < n - x; y++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(rightPascal(5));
