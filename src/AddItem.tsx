import { TodoItemType } from "./types";
interface AddItemProps {
  setTodoItems: (arg: TodoItemType[]) => void;
}

function AddItem({ setTodoItems }: AddItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <input className="bg-slate-200" type="text" />
      <button className="bg-slate-200">Add</button>
    </div>
  );
}

export default AddItem;
