import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

interface User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

const userDataArr: User[] = [];

const port = 3000;
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Authentication server..." });
});
app.post("/signup", (req: Request, res: Response) => {
  const { userName, firstName, lastName, password } = req.body;
  const userExists = userDataArr.find((user) => user.userName === userName);
  if (userExists) {
    res.status(400).json({ message: "UserName already exists." });
    return;
  }
  const newUser: User = {
    id: uuidv4(),
    userName,
    firstName,
    lastName,
    password,
  };
  userDataArr.push(newUser);
  res
    .status(201)
    .json({ message: "User created successfully.", userId: newUser.id });
});

app.post("/signin", (req: Request, res: Response) => {
  const { userName, password } = req.body;
  const user = userDataArr.find(
    (user) => userName === user.userName && password === user.password
  );
  if (!user) {
    res.status(401).json({ message: "Invalid login credentials" });
    return;
  }

  const filteredUser = {
    id: user.id,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const authToken = user.id;
  res.status(200).json({
    message: "Login successful",
    token: authToken,
    user: filteredUser,
  });
});

app.get("/data", (req: Request, res: Response) => {
  const userName = req.headers.username as string;
  const password = req.headers.password as string;

  if (!userName || !password) {
    res
      .status(401)
      .json({ message: "username and password required in the headers" });
    return;
  }
  const user = userDataArr.find(
    (user) => userName === user.userName && password === user.password
  );
  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }
  const users = userDataArr.map(({ id, firstName, lastName }) => ({
    id,
    firstName,
    lastName,
  }));

  res.status(200).json({ users });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
