"use strict";
/**
 * Downward Triangle Star Pattern
 *       *****
 *       ****
 *       ***
 *       **
 *       *
 */
const downwardTriangle = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(downwardTriangle(5));
