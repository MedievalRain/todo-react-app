import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
import { TodoItemType } from "./types";
import { useState } from "react";
const placeholderItems: TodoItemType[] = [
  { text: "Create ToDo app", done: true },
  { text: "Deploy the app on Vercel", done: true },
  { text: "?????", done: false },
  { text: "PROFIT", done: false },
];

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>(placeholderItems);
  return (
    <div className="flex flex-col pt-2 max-w-xl bg-zinc-300 mx-auto rounded-b-md overflow-hidden">
      <h1 className="px-1 text-xl font-semibold font-mono">To Do list</h1>
      <TodoList items={todoItems} setTodoItems={setTodoItems} />
      <AddItem items={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
