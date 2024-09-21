"use strict";
/**
 *Square Star Pattern in Javascript
 *           *****
 *           *****
 *           *****
 *           *****
 *           *****
 */
const squarePattern = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(squarePattern(5));
