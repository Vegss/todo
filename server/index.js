const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const app = express()

const { PORT } = require('./utils/config')

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.static('dist'))

app.use("/api/tasks", require("./routes/tasks"))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})