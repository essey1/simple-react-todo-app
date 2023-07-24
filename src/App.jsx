import { useState } from "react"
import './style.css'

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = completed
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="form-row">
          <label htmlFor="add-todo">New Item</label>
          <input 
            value={newItem}
            onChange = {e => setNewItem(e.target.value)}
            type="text"
            id="add-todo"
            placeholder="Write your todo" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="heading">Todo List</h1>
      <ul className="todo-list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return <li key={todo.id}>
          <label>
            <input type="checkbox"
            checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)} />
            {todo.title}
          </label>
          <button 
            className="delete-btn"
            onClick={e => deleteTodo(todo.id)}>
            Delete
            </button>
        </li>
        })}
      </ul>
    </>
  )
}