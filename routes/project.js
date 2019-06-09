const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.post('/login/project', projectController.addProject);

router.put('/login/project', projectController.updateProject);

router.delete('/login/project', projectController.deleteProject);

router.get('/login/project', projectController.getProject);



module.exports = router;