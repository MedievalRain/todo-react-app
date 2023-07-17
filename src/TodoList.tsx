import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: TodoItemType[];
  setTodoItems: (arg: TodoItemType[]) => void;
}

function TodoList({ items, setTodoItems }: TodoListProps) {
  const editItem = (eventIndex: number, newItem: TodoItemType) => {
    setTodoItems(
      items.map((item, index) => {
        if (index === eventIndex) {
          return newItem;
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
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
