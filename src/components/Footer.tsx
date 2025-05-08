import type { FilterValue } from "../types/types";
import { Filters } from "./Filters";

interface props {
    activeCount: number;
    completedCount: number;
    filtersSelected: FilterValue;
    onClearCompleted: () => void;
    onFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<props> = ({activeCount = 0, completedCount = 0, filtersSelected, onClearCompleted, onFilterChange}) => {
    
  return (  
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> item left
        </span>
       <Filters
        filtersSelected={filtersSelected}
        onFilterChange={onFilterChange}
       / >
       {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
        </button>
       )}
    </footer>
  )
}
