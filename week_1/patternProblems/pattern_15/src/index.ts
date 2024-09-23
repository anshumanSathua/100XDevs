/**
 * Heart Star Pattern In JavaScript
 *           ***   ***
 *          ***** *****
 *          ***********
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 */

const heart = (n: number): string => {
  let str: string = "";

  for (let i: number = n / 2; i < n; i += 2) {
    for (let j = 1; j < n - i; j += 2) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < i; j++) {
      str += " ";
    }
    for (let k: number = 0; k < 2 * (n - i) - 1; k++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
};

console.log(heart(6));
