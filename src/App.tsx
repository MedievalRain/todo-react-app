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
    <div className="flex flex-col pt-2 max-w-xl bg-zinc-300 mx-auto rounded-b-md overflow-hidden">
      <h1 className="text-xl font-semibold font-mono">To Do list</h1>
      <TodoList items={todoItems} setTodoItems={setTodoItems} />
      <AddItem items={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
