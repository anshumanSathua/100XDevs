/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todoArr: string[] = [];
  add(todo: string): void {
    this.todoArr.push(todo);
  }
  remove(index: number): void {
    if (index < 0 || index >= this.todoArr.length) {
      throw new Error("Invalid index");
    } else {
      this.todoArr.splice(index, 1);
    }
  }
  update(index: number, updatedTodo: string): void {
    if (index < 0 || index >= this.todoArr.length) {
      throw new Error("Invalid index");
    } else {
      this.todoArr.splice(index, 1, updatedTodo);
    }
  }
  getAll(): string[] {
    return this.todoArr;
  }
  clear(): void {
    this.todoArr = [];
  }
}

const todos = new Todo();
todos.add("Buy milk");
todos.add("Read a book");

console.log(todos.getAll());

todos.remove(0);

console.log(todos.getAll());

todos.add("Buy milk");
console.log(todos.getAll());

try {
  todos.remove(2); // Invalid index
} catch (error: any) {
  console.log(error.message);
}

todos.update(0, "Buy almond milk");

console.log(todos.getAll());

try {
  todos.update(2, "Buy almond milk"); // Invalid index
} catch (error: any) {
  console.log(error.message);
}

todos.clear();

console.log(todos.getAll());
