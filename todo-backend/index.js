const morgan = require('morgan')
const express = require('express')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))


// Add input validation to backend!!!!!!


let tasks = [
  {
    id: 1,
    content: 'Clean your room',
  },
  {
    id: 2,
    content: 'Do your homework',
  },
  {
    id: 3,
    content: 'Go to the gym',
  }
]

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks)  
})

// Get a single task
app.get('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = tasks.find(task => task.id === id)
  if (!task) {
    res.status(404).end()
    
  }
  res.json(task)
})

// Create a new task
app.post('/api/tasks/', (req, res) => {
  const body = req.body
  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  const task = {
    id: Math.floor(Math.random() * 100000000),
    content: body.content
  }
  tasks = tasks.concat(task)
  res.json(task)
})

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const body = req.body
  const task = tasks.find(task => task.id === id)
  if (!task) {
    res.status(404).end()
  }
  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  task.content = body.content
  res.json(task)
})

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  tasks = tasks.filter(task => task.id !== id)
  res.status(204).end()
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})