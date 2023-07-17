import { useState } from "react";
import ThrashIcon from "./icons/ThrashIcon";
import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  toggleDone: (arg: number) => void;
  deleteItem: (arg: number) => void;
}

function TodoItem({ item, index, toggleDone, deleteItem }: TodoItemProps) {
  const [buttonStyle, setButtonStyle] = useState("hidden");
  return (
    <li
      className="flex justify-between p-1"
      onMouseOver={() => {
        setButtonStyle("block");
      }}
      onMouseLeave={() => {
        setButtonStyle("hidden");
      }}
    >
      <div className="flex gap-1">
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => {
            toggleDone(index);
          }}
        ></input>
        <div className={`${item.done ? "line-through" : ""}`}>{item.text}</div>
      </div>

      <button
        className={buttonStyle}
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
