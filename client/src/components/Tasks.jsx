import { useState } from 'react'
import taskService from '../services/tasks'
import EditTask from './EditTask'

const Tasks = ( {tasks, setTasks} ) => {
  const [currentTask, setCurrentTask] = useState('')
  const [editMode, setEditMode] = useState([false, null])

  const editTask = (task) => {
      const updatedTask = {...task, content: currentTask}
      taskService
        .update(updatedTask)
        .then(resTask => {
          setTasks(tasks.map(t => t.id === task.id ? resTask : t))
          setCurrentTask('')
          setEditMode([false, null])
        })
      window.location = "/"
    }

  const handleEdit = task => {
    setEditMode([true, task.id])
    setCurrentTask(task.content)
  }

  const deleteTask = (id) => {
    taskService
      .deleteTask(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  const handleCurrentTask = event => setCurrentTask(event.target.value)

  return (
    <div>
      {tasks.map(task => {
        if (editMode && task.id === editMode[1]) {
          return (
            <EditTask key={task.id} task={task} currentTask={currentTask} handleCurrentTask={handleCurrentTask} editTask={editTask} />
          )
        }
        return (
          <div key={task.id} className="text-center border">
            <div className='text-center text-2xl p-3'>
              {task.content}
            </div>
            <button onClick={() => deleteTask(task.id)} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Delete
            </button>
            <button onClick={() => handleEdit(task)} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit
            </button>
          </div>
          )
        }
      )}
    </div>
  )
  }

export default Tasks