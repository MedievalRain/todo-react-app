import { useState } from "react";
import ThrashIcon from "./icons/ThrashIcon";
import { TodoItemType } from "./types";
import EditIcon from "./icons/EditIcon";
import DoneIcon from "./icons/DoneIcon";

interface TodoItemProps {
  item: TodoItemType;
  editItem: (newItem: TodoItemType) => void;
  deleteItem: (arg: string) => void;
}

function TodoItem({ item, editItem, deleteItem }: TodoItemProps) {
  const [showButton, setshowButton] = useState(false);
  const [editMode, setEditMode] = useState(false);
  let editValue = item.text;
  return (
    <li
      className="flex justify-between p-1 gap-4"
      onMouseOver={() => {
        setshowButton(true);
      }}
      onMouseLeave={() => {
        setshowButton(false);
      }}
    >
      <div className="flex gap-1 w-full max-w-lg">
        <input
          className="outline-slate-600"
          type="checkbox"
          checked={item.done}
          onChange={() => {
            editItem({
              text: item.text,
              done: !item.done,
              key: item.key,
            });
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
                editItem({
                  text: editValue,
                  done: item.done,
                  key: item.key,
                });
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
              deleteItem(item.key);
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
