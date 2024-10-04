"use strict";
/**
 * Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand
async tasks.
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
const WriteFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.default.promises.writeFile(fileName, "Writing into doc.txt", "utf8");
        console.log("write complete");
        const data = yield fs_1.default.promises.readFile(fileName, "utf8");
        console.log(data);
    }
    catch (error) {
        console.log("Can't write to the file: ", error);
    }
});
WriteFile("./doc.txt");
