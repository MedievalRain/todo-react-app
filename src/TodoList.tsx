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
  const deleteItem = (eventIndex: number) => {
    setTodoItems(
      items
        .filter((_value, index) => index !== eventIndex)
        .map((value) => value)
    );
  };
  return (
    <>
      <ul className="divide-y">
        {items.map((todoItem, index) => (
          <TodoItem
            item={todoItem}
            index={index}
            toggleDone={toggleDone}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
