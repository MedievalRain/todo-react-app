import { TodoItemType } from "./types";

interface TodoItemProps {
  item: TodoItemType;
}

function TodoItem({ item }: TodoItemProps) {
  return <li>{item.text}</li>;
}

export default TodoItem;
