import { useState } from "react"
import type { TodoTitle } from "../types/types"

interface props {
    saveTodo: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<props> = ({saveTodo}) => {
    
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveTodo({title: inputValue})
        setInputValue("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="title" 
        className="new-todo" 
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
    </form>
  )
}
