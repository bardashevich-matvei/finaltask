const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.post('/login/project/task', taskController.addTask);

router.put('/login/project/task', taskController.updateTask);

router.delete('/login/project/task', taskController.deleteTask);

router.get('/login/project/task', taskController.getTask);


module.exports = router;