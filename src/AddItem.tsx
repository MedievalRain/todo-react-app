import PlusIcon from "./icons/PlusIcon";
import { TodoItemType } from "./types";
import { useState } from "react";
interface AddItemProps {
  setTodoItems: (arg: TodoItemType[]) => void;
  items: TodoItemType[];
}

function AddItem({ setTodoItems, items }: AddItemProps) {
  const [item, setItem] = useState<string>("ww");
  const addItem = () => {
    setTodoItems([...items, { text: item, done: false }]);
    setItem("");
  };
  return (
    <>
      <input
        className="bg-slate-200 w-full"
        type="text"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button
        className="rounded-full bg-slate-200 w-8 h-8 mx-auto flex items-center justify-center mt-2"
        onClick={addItem}
      >
        <PlusIcon />
      </button>
    </>
  );
}

export default AddItem;
