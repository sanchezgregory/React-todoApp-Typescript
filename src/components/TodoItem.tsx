import type { Todo, TodoId, TodoItemProps } from "../types/types";

interface props extends TodoItemProps {
    onRemoveTodo: ({id}: TodoId) => void;
    onToggleTodo: ({id, completed}:Pick<Todo, "id" | "completed">) => void;
}

export const TodoItem: React.FC<props> = ({todo, onRemoveTodo, onToggleTodo}) => {
    
    const {id, title, completed} = todo

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleTodo({id, completed: e.target.checked})
    }

  return (
    <div className="view">
        <input
            className="toggle"
            type="checkbox"
            checked={completed} 
            onChange={handleChangeCheckbox}
            />
        <label>{title}</label>
        <button className="destroy" onClick={() => onRemoveTodo({id})} />
    </div>
  )
}
