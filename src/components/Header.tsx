import type { TodoTitle } from "../types/types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: ({title}: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({onAddTodo}) => {
    const handleAddTodo = ({title}: TodoTitle) => {
        onAddTodo({title})
    }
  return (
    <header className="header">
      <h1>todos</h1>
      <CreateTodo saveTodo={handleAddTodo} />
    </header>
  )
}
