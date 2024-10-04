"use strict";
/**
 * Reading the contents of a file
Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand
async tasks. Try to do an expensive operation below the file read and see
how it affects the output. Make the expensive operation more and more
expensive and see how it affects the output.
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
const ReadFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    let count = 0;
    try {
        const data = yield fs_1.default.promises.readFile(fileName, "utf8");
        console.log(data);
    }
    catch (error) {
        console.log("Error reading file: ", error);
    }
});
ReadFile("./doc.txt");
