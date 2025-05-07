import type { Todo } from "../types/types"
import { Filters } from "./Filters"

export const Footer: React.FC<{activeCount: number, todos: Todo[]}> = ({activeCount, todos}) => {

    const filtersSelected = todos.filter(todo => !todo.completed).length
    const handleFilterChange = (filter: string) => {
        console.log(filter)
    }
    
  return (  
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> item left
        </span>
       <Filters
        filtersSelected={filtersSelected}
        onFilterChange={handleFilterChange}
       / >
    </footer>
  )
}
