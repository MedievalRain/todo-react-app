import { TodoItemType } from "./types";

type TodoItemProps = {
  item: TodoItemType;
};

function TodoItem({ item }: TodoItemProps) {
  return <li>{item.text}</li>;
}

export default TodoItem;
