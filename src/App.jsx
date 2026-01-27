import { useState } from 'react'
import './App.css'

function App() {

  const todos = [
    {
      id: 1,
      body: "Finish React login page",
      completed: false,
    },
    {
      id: 2,
      body: "Fix API 404 bug",
      completed: true,
    },
    {
      id: 3,
      body: "Study for algorithms test",
      completed: false,
    },
    {
      id: 4,
      body: "Push project to GitHub",
      completed: true,
    },
    {
      id: 5,
      body: "Take a break (touch grass)",
      completed: false,
    }
  ];

  return (
    <div className="app-container" id="">
      <main className="to-selection">
        <h2 className="selection-title">All Tasks</h2>
        <div className="todo-list">
          {todos.map((todo) => {
            <div key={todo.$id} className={`todo-card ${todo.completed ? "completed" : ""}`}>
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

          })}
        </div>
      </main>
    </div>
  )
}

export default App
