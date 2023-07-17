import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
  toggleDone: (arg: number) => void;
}

function TodoItem({ item, index, toggleDone }: TodoItemProps) {
  return (
    <li>
      <div>{item.text}</div>
      <button
        onClick={() => {
          toggleDone(index);
        }}
      >
        {item.done.toString()}
      </button>
    </li>
  );
}

export default TodoItem;
