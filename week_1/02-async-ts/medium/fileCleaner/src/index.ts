/**
 * File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman
 */

import fs from "fs";

const FileCleaner = async (fileName: string) => {
  try {
    const data = await fs.promises.readFile(fileName, "utf8");
    console.log(`Original data: ${data}`);
    const sentence = data
      .split(" ")
      .filter((char) => char !== "")
      .join(" ")
      .trim();
    await fs.promises.writeFile(fileName, sentence, "utf8");
    const cleanedData = await fs.promises.readFile(fileName, "utf8");
    console.log(`Cleaned data: ${cleanedData}`);
  } catch (error) {
    console.log("Can not complete the operation: ", error);
  }
};

FileCleaner("./doc.txt");
