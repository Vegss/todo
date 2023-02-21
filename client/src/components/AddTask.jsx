import taskService from '../services/tasks'

const AddTask = ( {newTask, setNewTask, tasks, setTasks} ) => {
  
  const addTask = (event) => {
    if (newTask.length === 0) return (alert('Cannot submit empty task'))
    const newTaskObject = {
      content: newTask
    }
    taskService
      .create(newTaskObject)
      .then(resTask => {
        setTasks(tasks.concat(resTask))
        setNewTask('')
      })
  }

    return (
      <form onSubmit={addTask} className="my-4 text-center">
        <input 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          className="block m-auto w-full md:w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button type='submit' className='text-white my-2 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          Add Task
        </button>
      </form>
    )
  }

export default AddTask