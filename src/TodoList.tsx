import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: TodoItemType[];
}

function TodoList({ items }: TodoListProps) {
  return (
    <>
      <ul>
        {items.map((todoItem, index) => (
          <TodoItem item={todoItem} index={index} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
