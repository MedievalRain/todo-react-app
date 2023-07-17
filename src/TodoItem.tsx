import { useState } from "react";
import ThrashIcon from "./icons/ThrashIcon";
import { TodoItemType } from "./types";
import EditIcon from "./icons/EditIcon";
import DoneIcon from "./icons/DoneIcon";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  editItem: (eventIndex: number, newItem: TodoItemType) => void;
  deleteItem: (arg: number) => void;
}

function TodoItem({ item, index, editItem, deleteItem }: TodoItemProps) {
  const [buttonStyle, setButtonStyle] = useState("hidden");
  const [editMode, setEditMode] = useState(false);
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
            editItem(index, { text: item.text, done: !item.done });
          }}
        ></input>
        {editMode ? (
          <input type="text" value={item.text} />
        ) : (
          <div className={`${item.done ? "line-through" : ""}`}>
            {item.text}
          </div>
        )}
      </div>
      <div className="flex gap-1">
        {editMode ? (
          <button
            onClick={() => {
              setEditMode(false);
            }}
          >
            <DoneIcon />
          </button>
        ) : (
          <button
            className={buttonStyle}
            onClick={() => {
              setEditMode(true);
            }}
          >
            <EditIcon />
          </button>
        )}
        <button
          className={buttonStyle}
          onClick={() => {
            deleteItem(index);
          }}
        >
          <ThrashIcon />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
