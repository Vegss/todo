import { useState } from 'react'

const EditTask = ( {task, currentTask, handleCurrentTask, editTask} ) => {
    return(
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

export default EditTask