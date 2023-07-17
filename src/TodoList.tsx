import { TodoItemProps } from "./types";

const placeholderList: TodoItemProps[] = [
  { text: "task1", done: false },
  { text: "task2", done: false },
  { text: "task3", done: true },
];

function TodoList() {
  return (
    <ul>
      {placeholderList.map((todoItem) => (
        <li>{todoItem.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
