import './App.css'
import { useState, useEffect } from 'react'
import { db } from './appwriteConfig'
import { pass } from './pass'





function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, [])
  const getTodos = async () => {
    try {
      //total rows
      const {total,rows} = await db.listRows({
        databaseId: pass.VITE_APPWRITE_DB_ID
        , tableId: pass.VITE_APPWRITE_TABLE_TODO_lIST
      })

      setTodos(rows)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="app-container" id="">
      <main className="to-selection">
        <h2 className="selection-title">All Tasks</h2>
        <div className="todo-list">
          {todos.map((todo) => (
            <div key={todo.id} className={`todo-card ${todo.completed ? "completed" : ""}`}>
              <div className="todo-checkbox">
                {todo.completed ? (<div className="checkbox-checked">
                </div>
                ) : <div className="checkbox-unchecked">
                </div>}
              </div>
              <div className="todo-content">
                <h3 className="todo-title">{todo.body}</h3>
              </div>
            </div>
          )


          )}
        </div>
      </main>
    </div>
  )
}

export default App
