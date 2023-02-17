import { useState } from 'react'
import taskService from '../services/tasks'

const Tasks = ( {tasks, setTasks} ) => {
  const [editMode, setEditMode] = useState([false, null])
  const [currentTask, setCurrentTask] = useState('')

  const handleEdit = task => {
    setEditMode([true, task.id])
    setCurrentTask(task.content)
  }

  const deleteTask = (id) => {
    taskService
      .deleteTask(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  const editTask = task => {
    const updatedTask = {...task, content: currentTask}
    taskService
      .update(updatedTask)
      .then(resTask => {
        setTasks(tasks.map(t => t.id === task.id ? resTask : t))
        setCurrentTask('')
        setEditMode([false, null])
      })
  }

  const handleCurrentTask = event => setCurrentTask(event.target.value)

  return (
    <div>
      {tasks.map(task => {
        if (editMode && task.id === editMode[1]) {
          return (
            <div key={task.id} className="text-center my-10">
              <input
                value={currentTask} 
                onChange={handleCurrentTask}
                className="block m-auto w-fit p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button onClick={() => editTask(task)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Save
              </button>
            </div>
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