import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
import { TodoItemType } from "./types";
const placeholderList: TodoItemType[] = [
  { text: "task1", done: false },
  { text: "task2", done: false },
  { text: "task3", done: true },
];

function App() {
  return (
    <>
      <TodoList items={placeholderList} />
      <AddItem />
    </>
  );
}

export default App;
