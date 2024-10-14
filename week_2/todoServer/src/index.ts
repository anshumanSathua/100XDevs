import express, { Request, Response } from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;
const todosFilePath = "./todoData.json";

app.use(express.json());

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

let todos: Todo[] = [];

// Load existing todos
const loadTodosFromFile = () => {
  if (fs.existsSync(todosFilePath)) {
    const fileContent = fs.readFileSync(todosFilePath, "utf-8");
    try {
      todos = fileContent ? JSON.parse(fileContent) : [];
    } catch (err) {
      console.error(
        "Error parsing JSON from file. Starting with an empty todos array."
      );
      todos = [];
    }
  }
};

// Save todos to file
const saveTodosToFile = () => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Todos server..." });
});

//  GET /todos
app.get("/todos", (req: Request, res: Response) => {
  res.status(200).json(todos);
});

//  GET /todos/:id
app.get("/todos/:id", (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

//  POST /todos
app.post("/todos", (req: Request, res: Response) => {
  const { title, description, completed = false } = req.body;
  const newTodo: Todo = {
    id: uuidv4(),
    title,
    description,
    completed,
  };
  todos.push(newTodo);
  saveTodosToFile();
  res.status(201).json({ id: newTodo.id });
});

// PUT /todos/:id
app.put("/todos/:id", (req: Request, res: Response) => {
  const todoIndex = todos.findIndex((t) => t.id === req.params.id);
  if (todoIndex > -1) {
    const updatedTodo = { ...todos[todoIndex], ...req.body };
    todos[todoIndex] = updatedTodo;
    saveTodosToFile();
    res.status(200).send("Todo updated successfully");
  } else {
    res.status(404).send("Todo not found");
  }
});

// DELETE /todos/:id
app.delete("/todos/:id", (req: Request, res: Response) => {
  const todoIndex = todos.findIndex((t) => t.id === req.params.id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodosToFile(); // Save updated todos to file
    res.status(200).send("Todo deleted successfully");
  } else {
    res.status(404).send("Todo not found");
  }
});

// Handle any other routes
app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

loadTodosFromFile();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
