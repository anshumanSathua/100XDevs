import { isUtf8 } from "buffer";
import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

const filesDir = "./files";

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the files server..." });
});

app.get("/files", (req: Request, res: Response) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      res.status(500).json({ message: "Error reading files directory." });
      return;
    }
    res.status(200).json(files);
  });
});

app.get("/file/:fileName", (req: Request, res: Response) => {
  const fileName = req.params.fileName;
  const filePath = path.join(filesDir, fileName);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({ message: "Can not read the file" });
      return;
    }
    res.status(200).json(data);
  });
});

// Handle 404 for other routes
app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
