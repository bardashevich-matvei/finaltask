const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const path = require("path");
const dirname = path.join(__dirname, '..' , 'html');

router.post('/', taskController.addTask);

router.post('/user', taskController.addUser);

router.put('/', taskController.updateTask);

router.delete('/', taskController.deleteTask);

router.delete('/user', taskController.deleteUser);

router.get('/allUsers', taskController.getTaskAllUsers);

router.get('/allProjectUsers', taskController.getTaskAllProjectUsers);

router.get('/allTasks', taskController.getTaskAllTasks);


router.get('/', function(req, res) {
    res.sendFile(path.join(dirname, 'task.html'));
});


module.exports = router;