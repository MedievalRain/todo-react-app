import ThrashIcon from "./ThrashIcon";
import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  toggleDone: (arg: number) => void;
  deleteItem: (arg: number) => void;
}

function TodoItem({ item, index, toggleDone, deleteItem }: TodoItemProps) {
  return (
    <li className="flex justify-between">
      <div className="flex">
        <button
          onClick={() => {
            toggleDone(index);
          }}
        >
          {item.done.toString()}
        </button>
        <div>{item.text}</div>
      </div>

      <button
        onClick={() => {
          deleteItem(index);
        }}
      >
        <ThrashIcon />
      </button>
    </li>
  );
}

export default TodoItem;
