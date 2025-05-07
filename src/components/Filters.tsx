import { TODO_FILTERS } from "../consts/consts";

interface Props {
    filtersSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
    onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void;
}

export const Filters: React.FC<Props> = ({filtersSelected, onFilterChange}) => {
  return (
    <ul className="filters">
        <li> 
            <a href="#" onClick={() => onFilterChange(TODO_FILTERS.ALL)} className={filtersSelected === TODO_FILTERS.ALL ? "selected" : ""}>{TODO_FILTERS.ALL}</a>
        </li>
        <li>
            <a href="#" onClick={() => onFilterChange(TODO_FILTERS.ACTIVE)} className={filtersSelected === TODO_FILTERS.ACTIVE ? "selected" : ""}>{TODO_FILTERS.ACTIVE}</a>
        </li>
        <li>
            <a href="#" onClick={() => onFilterChange(TODO_FILTERS.COMPLETED)} className={filtersSelected === TODO_FILTERS.COMPLETED ? "selected" : ""}>{TODO_FILTERS.COMPLETED}</a>
        </li>
    </ul>
  )
}
