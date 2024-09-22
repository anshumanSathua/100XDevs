"use strict";
/**
 *Reversed Pyramid Star Pattern
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 */
const reversedPyramid = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(reversedPyramid(5));
