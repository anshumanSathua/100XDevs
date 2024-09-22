/**
 * Hollow Triangle Star Pattern
 *           *
 *           **
 *           * *
 *           *  *
 *           *   *
 *           ******
 */

const hollowTriangle = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < i; j++) {
      if (i == n) {
        str += "*";
      } else {
        if (j == 0 || j == i - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    str += "\n";
  }
  return str;
};

console.log(hollowTriangle(6));
