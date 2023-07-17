import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";
const placeholderList: TodoItemType[] = [
  { text: "task1", done: false },
  { text: "task2", done: false },
  { text: "task3", done: true },
];

function TodoList() {
  return (
    <>
      <ul>
        {placeholderList.map((todoItem) => (
          <TodoItem item={todoItem} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
