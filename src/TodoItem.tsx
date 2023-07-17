import { TodoItemType } from "./types";

interface TodoItemProps {
  index: number;
  item: TodoItemType;
}

function TodoItem({ item }: TodoItemProps) {
  return <li>{item.text}</li>;
}

export default TodoItem;
