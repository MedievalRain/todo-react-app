import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
import { TodoItemType } from "./types";
import { useState } from "react";
const placeholderItems: TodoItemType[] = [
  {
    text: "Create ToDo app",
    done: true,
    key: "cf6407bf-ac88-4adb-b959-5f40b235cad0",
  },
  {
    text: "Deploy the app on Vercel",
    done: true,
    key: "494a6513-f5a4-4dac-aeb1-f4c5c6a3f58b",
  },
  { text: "?????", done: false, key: "53017efb-65dd-4558-b3ae-37f24c4e4266" },
  { text: "PROFIT", done: false, key: "e1531810-a27b-450c-b223-50768d206b6a" },
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
