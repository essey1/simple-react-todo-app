import "./style.css"

export default function App() {
  return (
    <>
      <form className="add-todo-form">
        <div className="form-row">
          <label htmlFor="add-todo">New Item</label>
          <input type="text" id="add-todo" placeholder="Write your todo" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="heading">Todo List</h1>
      <ul className="todo-list">
        <li>
          <label>
            <input type="checkbox" />
            A todo list
          </label>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
      <ul className="todo-list">
        <li>
          <label>
            <input type="checkbox" />
            A todo list
          </label>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
    </>
  )
}