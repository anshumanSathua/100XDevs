"use strict";
/**
 * Right Pascal Star Pattern
 *           *
 *           **
 *           ***
 *           ****
 *           *****
 *           ****
 *           ***
 *           **
 *           *
 */
const rightPascal = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        str += "\n";
    }
    for (let x = 1; x <= n; x++) {
        for (let y = 0; y < n - x; y++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(rightPascal(5));
