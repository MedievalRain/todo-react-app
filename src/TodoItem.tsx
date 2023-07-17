import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  toggleDone: (arg: number) => void;
  deleteItem: (arg: number) => void;
}

function TodoItem({ item, index, toggleDone, deleteItem }: TodoItemProps) {
  return (
    <li>
      <div>{item.text}</div>
      <button
        onClick={() => {
          toggleDone(index);
        }}
      >
        {item.done.toString()}
      </button>
      <button
        onClick={() => {
          deleteItem(index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
