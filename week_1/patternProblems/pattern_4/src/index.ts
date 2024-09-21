/**
 * Left Triangle Pattern in Javascript
 *           *
 *           **
 *           ***
 *           ****
 *           *****
 */

const leftTriangle = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(leftTriangle(5));
