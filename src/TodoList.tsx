import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  items: TodoItemType[];
};

function TodoList({ items }: TodoListProps) {
  return (
    <>
      <ul>
        {items.map((todoItem) => (
          <TodoItem item={todoItem} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
