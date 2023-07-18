import { TodoItemType } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: TodoItemType[];
  setTodoItems: (arg: TodoItemType[]) => void;
}

function TodoList({ items, setTodoItems }: TodoListProps) {
  const editItem = (newItem: TodoItemType) => {
    setTodoItems(
      items.map((item) => {
        if (item.key === newItem.key) {
          return newItem;
        } else {
          return item;
        }
      })
    );
  };
  const deleteItem = (eventkey: string) => {
    setTodoItems(
      items.filter((value) => value.key !== eventkey).map((value) => value)
    );
  };
  return (
    <>
      <ul className="divide-y">
        {items.map((todoItem) => (
          <TodoItem
            key={todoItem.key}
            item={todoItem}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
