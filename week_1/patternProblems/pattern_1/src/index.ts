/**
 *Square Star Pattern in Javascript
 *           *****
 *           *****
 *           *****
 *           *****
 *           *****
 */

const squarePattern = (n: number): string => {
  let str: string = "";
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

console.log(squarePattern(5));
