import ThrashIcon from "./icons/ThrashIcon";
import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  toggleDone: (arg: number) => void;
  deleteItem: (arg: number) => void;
}

function TodoItem({ item, index, toggleDone, deleteItem }: TodoItemProps) {
  return (
    <li className="flex justify-between px-1">
      <div className="flex gap-1">
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => {
            toggleDone(index);
          }}
        ></input>
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
