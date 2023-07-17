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
  const [showButton, setshowButton] = useState(false);
  const [editMode, setEditMode] = useState(false);
  let editValue = item.text;
  return (
    <li
      className="flex justify-between p-1"
      onMouseOver={() => {
        setshowButton(true);
      }}
      onMouseLeave={() => {
        setshowButton(false);
      }}
    >
      <div className="flex gap-1 w-full max-w-sm">
        <input
          className="outline-slate-600"
          type="checkbox"
          checked={item.done}
          onChange={() => {
            editItem(index, { text: item.text, done: !item.done });
          }}
        ></input>
        {editMode ? (
          <>
            <input
              className="outline-slate-600 w-full"
              type="text"
              defaultValue={item.text}
              onChange={(event) => {
                editValue = event.target.value;
              }}
            />
            <button
              className="outline-slate-600 fill-slate-700 hover:fill-slate-900"
              onClick={() => {
                setEditMode(false);
                editItem(index, { text: editValue, done: item.done });
              }}
            >
              <DoneIcon />
            </button>
          </>
        ) : (
          <div
            className={`${
              item.done ? "line-through" : ""
            } overflow-auto break-all max-w-lg`}
          >
            {item.text}
          </div>
        )}
      </div>
      {showButton ? (
        <div className="flex gap-1">
          <button
            className={"outline-slate-600 fill-slate-700 hover:fill-slate-900"}
            onClick={() => {
              setEditMode(true);
            }}
          >
            <EditIcon />
          </button>

          <button
            className={"outline-slate-600 fill-slate-700 hover:fill-slate-900"}
            onClick={() => {
              setEditMode(false);
              deleteItem(index);
            }}
          >
            <ThrashIcon />
          </button>
        </div>
      ) : null}
    </li>
  );
}

export default TodoItem;
