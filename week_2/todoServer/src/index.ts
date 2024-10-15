import express, { Request, Response } from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;
const databasePath = "./todoData.json";

app.use(express.json());

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

let todosArr: Todo[] = [];

const loadTodosFromDatabase = () => {
  if (fs.existsSync(databasePath)) {
    const existingData = fs.readFileSync(databasePath, "utf-8");
    try {
      todosArr = existingData ? JSON.parse(existingData) : [];
    } catch (error) {
      console.error(
        `Error while parsing data, initializing with an empty array`
      );
      todosArr = [];
    }
  }
};

const saveTodosToDatabase = () => {
  fs.writeFileSync(databasePath, JSON.stringify(todosArr, null, 2));
};

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Todos Server" });
});

app.get("/todos", (req: Request, res: Response) => {
  res.status(200).json(todosArr);
});

app.get("/todos/:id", (req: Request, res: Response) => {
  const todo = todosArr.find((todo) => todo.id === req.params.id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(400).send("Todo not found.");
  }
});

app.post("/todos", (req: Request, res: Response) => {
  const { title, description, completed = false } = req.body;
  const newTodo: Todo = {
    id: uuidv4(),
    title,
    description,
    completed,
  };
  todosArr.push(newTodo);
  saveTodosToDatabase();
  res.status(200).json({ message: "Todo added successfully", id: newTodo.id });
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const todoIndex = todosArr.findIndex((todo) => todo.id === req.params.id);
  if (todoIndex > -1) {
    const updateTodo = { ...todosArr[todoIndex], ...req.body };
    todosArr[todoIndex] = updateTodo;
    saveTodosToDatabase();
    res
      .status(200)
      .json({ message: "Todo updated successfully.", id: updateTodo.id });
  } else {
    res.status(404).json({ message: "Todo not found." });
  }
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const todoIndex = todosArr.findIndex((todo) => todo.id === req.params.id);
  if (todoIndex > -1) {
    todosArr.splice(todoIndex, 1);
    saveTodosToDatabase();
    res.status(200).json({ message: "Todo deleted successfully." });
  } else {
    res.status(404).json({ message: "Todo not found." });
  }
});

app.use((req: Request, res: Response) => {
  res.status(400).send("Not found");
});

loadTodosFromDatabase();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
