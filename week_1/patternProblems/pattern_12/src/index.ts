/**
 * Hourglass Star Pattern
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 *              ***
 *             *****
 *            *******
 *           *********
 */

const hourglass = (n: number): string => {
  let str = "";
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * (n - i) - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  for (let x: number = 2; x <= n; x++) {
    for (let y: number = 0; y < n - x; y++) {
      str += " ";
    }
    for (let z: number = 0; z < 2 * x - 1; z++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(hourglass(5));
