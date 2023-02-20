const Pool = require('pg').Pool

const pool = new Pool({
  user: "vegss",
  password: "zXN0fRaWACxDFcNOkcQ4L2asgH44pkkt",
  host: "dpg-cfpoqh14rebfdauqqt90-a",
  port: 5432,
  database: "todoapp_qwxd"
})

const getTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks")
    res.json(allTasks.rows)
  } catch (err) {
    console.error(err.message)
  }
}

const getTaskById = async (req, res) => {
  try {
    const id = String(req.params.id)
    const task = await pool.query(
      "SELECT * FROM tasks WHERE id = $1",
      [id]
    )
    res.json(task.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}

const createTask = async (req, res) => {
  try {
    const content = req.body.content
    const newTask = await pool.query(
      "INSERT INTO tasks (content) VALUES($1) RETURNING *",
      [content]
    )
    res.json(newTask.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}

const updateTask = async (req, res) => {
  try{
    const id = String(req.params.id)
    const { content } = req.body
    const updatedTask = await pool.query(
      "UPDATE tasks SET content = $1 WHERE id = $2",
      [content, id]
    )
    res.json(`Task with id ${id} was updated!`)
  } catch (err) {
    console.error(err.message)
  }
}

const deleteTask = async (req, res) => {
  try {
    const id = String(req.params.id)
    const deleteTask = await pool.query(
      "DELETE FROM tasks WHERE id = $1",
      [id]
    )
    res.json(`Task with id ${id} was deleted!`)
  } catch (err) {
    console.error(err.message)
  }
}


module.exports = {
  getTasks,
  getTaskById,
  updateTask,
  createTask,
  deleteTask
}