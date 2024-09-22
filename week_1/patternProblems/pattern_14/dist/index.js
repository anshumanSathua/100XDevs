"use strict";
/**
 * Left Pascal Star Pattern
 *               *
 *              **
 *             ***
 *            ****
 *           *****
 *            ****
 *             ***
 *              **
 *               *
 */
const leftPascal = (n) => {
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
    for (let x = 1; x <= n; x++) {
        for (let z = 0; z < x; z++) {
            str += " ";
        }
        for (let y = 0; y < n - x; y++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(leftPascal(5));
