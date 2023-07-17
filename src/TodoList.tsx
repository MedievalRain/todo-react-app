import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: TodoItemType[];
  setTodoItems: (arg: TodoItemType[]) => void;
}

function TodoList({ items, setTodoItems }: TodoListProps) {
  const toggleDone = (eventIndex: number) => {
    setTodoItems(
      items.map((item, index) => {
        if (index === eventIndex) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <ul>
        {items.map((todoItem, index) => (
          <TodoItem item={todoItem} index={index} toggleDone={toggleDone} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
