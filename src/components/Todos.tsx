import type { TodoId, TodosProps, TodoTitle } from "../types/types";
import { TodoItem } from "./TodoItem";

interface props extends TodosProps {
    onRemoveTodo: ({id}: TodoId) => void;
    onToggleTodo: ({id}: TodoId) => void;
    onAddTodo: ({title}: TodoTitle) => void;
}

export const Todos: React.FC<props> = ({todos, onRemoveTodo, onToggleTodo}) => {
  return (
      <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
        </li>
      ))}
    </ul>
  )
}
