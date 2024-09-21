"use strict";
/**
 * Left Triangle Pattern in Javascript
 *           *
 *           **
 *           ***
 *           ****
 *           *****
 */
const leftTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
};
console.log(leftTriangle(5));
