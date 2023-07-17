import { TodoItemType } from "./types";
import { useState } from "react";
interface AddItemProps {
  setTodoItems: (arg: TodoItemType[]) => void;
  items: TodoItemType[];
}

function AddItem({ setTodoItems, items }: AddItemProps) {
  const [item, setItem] = useState<string>("ww");
  return (
    <div className="flex flex-col gap-1">
      <input
        className="bg-slate-200"
        type="text"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button
        className="bg-slate-200"
        onClick={() => {
          setTodoItems([...items, { text: item, done: false }]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddItem;