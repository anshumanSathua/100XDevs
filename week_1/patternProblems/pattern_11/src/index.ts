/**
 * Hollow Diamond Pattern
 *               *
 *              * *
 *             *   *
 *            *     *
 *           *       *
 *            *     *
 *             *   *
 *              * *
 *               *
 */

const hollowDiamond = (n: number): string => {
  let str: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * i - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  for (let x: number = 1; x <= n; x++) {
    for (let y: number = 0; y < x; y++) {
      str += " ";
    }
    for (let z: number = 0; z < 2 * (n - x) - 1; z++) {
      if (z === 0 || z === 2 * (n - x) - 2) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
};

console.log(hollowDiamond(5));
