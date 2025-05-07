import { useState } from "react"
import { Todos } from "./components/Todos"
import type { Todo, TodoId, TodoTitle } from "./types/types"

const initialTodos: Todo[] = [
  { id: 1, title: "Todo 1", completed: true },
  { id: 2, title: "Todo 2", completed: false },
  { id: 3, title: "Todo 3", completed: false },
]
  
const App = () => {
  
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = useState<string>("")

  const handleRemoveTodo = ({id}: TodoId) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleTodo = ({id}: TodoId, completed: boolean) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed} : todo))
  }

  const handleAddTodo = ({title}: TodoTitle) => {
    setTodos([...todos, {id: Date.now(), title, completed: false}])
    setNewTodo("")
  }

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
          todos={todos}
          onRemoveTodo={handleRemoveTodo}
          onToggleTodo={handleToggleTodo}
          onAddTodo={handleAddTodo}
        />
      </div>
    </>
  )
}

export default App