import { useState } from "react"
import { Footer } from "./components/Footer"
import { Todos } from "./components/Todos"
import { TODO_FILTERS } from "./consts/consts"
import type { FilterValue, Todo, TodoId } from "./types/types"

const initialTodos: Todo[] = [
  { id: 1, title: "Todo 1", completed: true },
  { id: 2, title: "Todo 2", completed: false },
  { id: 3, title: "Todo 3", completed: false },
]
  
const App = () => {
  
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filtersSelected, setFiltersSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemoveTodo = ({id}: TodoId): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleTodo = ({id, completed}:Pick<Todo, "id" | "completed">): void => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed} : todo))
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFiltersSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const handleClearCompleted = (): void => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filtersSelected === TODO_FILTERS.ALL) return true
    if (filtersSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filtersSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

    return (
    <>
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <Todos 
          todos={filteredTodos}
          onRemoveTodo={handleRemoveTodo}
          onToggleTodo={handleToggleTodo}
        />
      </div>
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filtersSelected={filtersSelected}
        onFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </>
  )
}

export default App