const router = require('express').Router()
const db = require('../utils/db')

router.get('/', db.getTasks)
router.get('/:id', db.getTaskById)
router.post('/', db.createTask)
router.put('/:id', db.updateTask)
router.delete('/:id', db.deleteTask)


module.exports = router;