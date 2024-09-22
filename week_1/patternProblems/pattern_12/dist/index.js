"use strict";
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
const hourglass = (n) => {
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
    for (let x = 2; x <= n; x++) {
        for (let y = 0; y < n - x; y++) {
            str += " ";
        }
        for (let z = 0; z < 2 * x - 1; z++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(hourglass(5));
