"use strict";
/**
 * Write a function that returns a promise that resolves after
 * n seconds have passed, where n is passed as an argument to the
 * function.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const wait = (n) => {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    });
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting...");
    yield wait(5);
    console.log("Finished!");
});
main();
