"use strict";
/**
 * Right Triangle Pattern in Javascript
 *               *
 *              **
 *             ***
 *            ****
 *           *****
 */
const rightTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < i; k++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(rightTriangle(5));
