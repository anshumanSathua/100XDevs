"use strict";
/**
 * Diamond Pattern in Javascript
 *               *
 *              ***
 *             *****
 *            *******
 *           *********
 *            *******
 *             *****
 *              ***
 *               *
 */
const diamond = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            str += "*";
        }
        str += "\n";
    }
    for (let a = 1; a <= n; a++) {
        for (let b = 0; b < a; b++) {
            str += " ";
        }
        for (let c = 1; c <= 2 * (n - a) - 1; c++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(diamond(5));
