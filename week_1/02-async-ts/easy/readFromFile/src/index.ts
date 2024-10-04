/**
 * Reading the contents of a file
Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand 
async tasks. Try to do an expensive operation below the file read and see 
how it affects the output. Make the expensive operation more and more 
expensive and see how it affects the output.
 */

import fs from "fs";

const ReadFile = async (fileName: string) => {
  let count: number = 0;
  try {
    const data = await fs.promises.readFile(fileName, "utf8");
    console.log(data);
  } catch (error) {
    console.log("Error reading file: ", error);
  }
};

ReadFile("./doc.txt");
