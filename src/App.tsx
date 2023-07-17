import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
import { TodoItemType } from "./types";
import { useState } from "react";
const placeholderList: TodoItemType[] = [
  { text: "task1", done: false },
  { text: "task2", done: false },
  { text: "task3", done: true },
];

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>(placeholderList);
  return (
    <>
      <TodoList items={todoItems} />
      <AddItem setTodoItems={setTodoItems} />
    </>
  );
}

export default App;
