import { TodoItemType } from "./types";

export type TodoItemProps = {
  item: TodoItemType;
};

function TodoItem({ item }: TodoItemProps) {
  return <li>{item.text}</li>;
}

export default TodoItem;
