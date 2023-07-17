import PlusIcon from "./icons/PlusIcon";
import { TodoItemType } from "./types";
import { useState } from "react";
interface AddItemProps {
  setTodoItems: (arg: TodoItemType[]) => void;
  items: TodoItemType[];
}

function AddItem({ setTodoItems, items }: AddItemProps) {
  const [item, setItem] = useState<string>("");
  const addItem = () => {
    if (item.length > 0) {
      setTodoItems([...items, { text: item, done: false }]);
      setItem("");
    }
  };
  return (
    <>
      <input
        className="bg-slate-200 w-full px-1 outline-slate-600 -outline-offset-1"
        type="text"
        value={item}
        placeholder="New item text..."
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button
        className="rounded-full bg-slate-200 w-8 h-8 mx-auto flex items-center justify-center my-1 outline-slate-600 fill-slate-700 hover:fill-slate-900"
        onClick={addItem}
      >
        <PlusIcon />
      </button>
    </>
  );
}

export default AddItem;
