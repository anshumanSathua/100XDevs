"use strict";
/**
 * File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const FileCleaner = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fs_1.default.promises.readFile(fileName, "utf8");
        console.log(`Original data: ${data}`);
        const sentence = data
            .split(" ")
            .filter((char) => char !== "")
            .join(" ")
            .trim();
        yield fs_1.default.promises.writeFile(fileName, sentence, "utf8");
        const cleanedData = yield fs_1.default.promises.readFile(fileName, "utf8");
        console.log(`Cleaned data: ${cleanedData}`);
    }
    catch (error) {
        console.log("Can not complete the operation: ", error);
    }
});
FileCleaner("./doc.txt");
