"use strict";
/**
 * Hollow Pyramid Star Pattern
 *           *
 *          * *
 *         *   *
 *        *     *
 *       *********
 */
const hollowPyramid = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === n) {
                str += "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    str += "*";
                }
                else {
                    str += " ";
                }
            }
        }
        str += "\n";
    }
    return str;
};
console.log(hollowPyramid(5));
