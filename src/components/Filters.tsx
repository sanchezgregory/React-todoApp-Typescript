import { FILTER_BUTTONS } from "../consts/consts";
import type { FilterValue } from "../types/types";

interface Props {
    filtersSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void; 
}

export const Filters: React.FC<Props> = ({filtersSelected, onFilterChange}) => {
    
    const handleClick = (filter: FilterValue, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onFilterChange(filter)
    } 
    
  return (
    <ul className="filters">
        {Object.entries(FILTER_BUTTONS).map(([key, {label, href}]) => {
            const isSelected = filtersSelected === key
            const className = isSelected ? "selected" : ""
            return (
                <li key={key}>
                    <a href={href} onClick={(e) => handleClick(key, e)} className={className}>{label}</a>
                </li>
           )
        })}
    </ul>
  )
}
