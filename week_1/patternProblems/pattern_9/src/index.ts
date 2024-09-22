/**
 * Hollow Pyramid Star Pattern
 *           *
 *          * *
 *         *   *
 *        *     *
 *       *********
 */

const hollowPyramid = (n: number): string => {
  let str = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * i - 1; k++) {
      if (i === n) {
        str += "*";
      } else {
        if (k === 0 || k === 2 * i - 2) {
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

console.log(hollowPyramid(5));
