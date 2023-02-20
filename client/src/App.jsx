import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import taskService from './services/tasks'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  

  useEffect(() => {
    taskService
      .getAll()
      .then(initialTasks => {
        setTasks(initialTasks)
      })
  }, [])

  return (
    <div>
      <h1 className='text-6xl text-center font-bold bg-lime-400 shadow-md'>ToDo</h1>
      <AddTask newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App