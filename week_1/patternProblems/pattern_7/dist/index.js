"use strict";
/**
 * Javascript Pyramid Pattern
 *               *
 *              ***
 *             *****
 *            *******
 *           *********
 */
const pyramid = (n) => {
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
    return str;
};
console.log(pyramid(5));
