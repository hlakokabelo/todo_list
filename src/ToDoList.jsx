import './ToDoList.css'
import { useState, useEffect } from 'react'
import { addTask, getTasks, deleteTask, upDateTask } from './components/toDoList'
import taskImg from './assets/icon.jpg'





function ToDoList() {
  const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState('')
  useEffect(() => {
    
    handleGetTasks()
  }, [])

  const handleGetTasks = async () => {
    const res = await getTasks()
    if (res) setTodos(res)
  }

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }
  const handleAddTask = async () => {
    if (newTask !== '') {
      const task = {
        body: newTask,
        completed: false,
        $id: 'temp'
      }
      try {
        const response = await addTask(task)
       
        task.id = response.$id
        setTodos(t => [...t, task])
      } catch (error) {

      }
      setNewTask('')
    }
  }

  function handleDeleteTask($id) {
    const updatedTasks = todos.filter((todo) => todo.$id !== $id)
    deleteTask(todos.find((todo) => todo.$id === $id))
    setTodos(updatedTasks);

  }

  function handleCompleteTask($id) {
    const copy = [...todos]

    copy.forEach((t) => {
      if (t.$id === $id) {
        t.completed = !t.completed
        upDateTask(t)
      }
    })


    setTodos(copy)


  }


  return (
    <div className="app-container" id="">
      <main className="to-selection">
        <div className="title-img">
          <h2 className="selection-title">
            All Tasks
          <img className='task-img' src={taskImg} alt="" srcset="" />
        </h2></div>

        <div className="todo-list">
          <div className="add-task">
            <input type="text"
              placeholder='Enter a task'
              value={newTask}
              onChange={handleInputChange} />
            <button className="btn-add-task" onClick={handleAddTask} >Add</button>

          </div>
          {todos.map((todo) => (
            <div key={todo.$id} className={`todo-card ${todo.completed ? "completed" : ""}`}>
              <div className="todo-checkbox" onClick={() => handleCompleteTask(todo.$id)}>
                {todo.completed ? (<div className="checkbox-checked">
                </div>
                ) : <div className="checkbox-unchecked">
                </div>}
              </div>
              <div className="todo-content">
                <h3 className="todo-title">{todo.body}</h3>
              </div>

              <div className="delete-task" onClick={() => { handleDeleteTask(todo.$id) }}>
                delete
              </div>
            </div>
          )


          )}
        </div>
      </main>
    </div>
  )
}

export default ToDoList
