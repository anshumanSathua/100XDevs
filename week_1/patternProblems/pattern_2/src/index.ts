/**
 * Hollow Square Pattern
 *       *****
 *       *   *
 *       *   *
 *       *   *
 *       *****
 */

const hollowSquare = (n: number): string => {
  let str: string = "";
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
      if (i == 0 || i == n - 1) {
        str += "*";
      } else {
        if (j == 0 || j == n - 1) {
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

console.log(hollowSquare(5));
