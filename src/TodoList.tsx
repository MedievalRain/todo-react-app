import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
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
      <AddItem />
    </>
  );
}

export default TodoList;
