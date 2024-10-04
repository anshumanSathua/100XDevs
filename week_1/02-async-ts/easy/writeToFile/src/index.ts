/**
 * Write to a file
Using the fs library again, try to write to the contents of a file. 
You can use the fs library to as a black box, the goal is to understand 
async tasks.
 */

import fs from "fs";

const WriteFile = async (fileName: string) => {
  try {
    await fs.promises.writeFile(fileName, "Writing into doc.txt", "utf8");
    console.log("write complete");
    const data = await fs.promises.readFile(fileName, "utf8");
    console.log(data);
  } catch (error) {
    console.log("Can't write to the file: ", error);
  }
};

WriteFile("./doc.txt");
