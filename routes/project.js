const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const path = require("path");
const dirname = path.join(__dirname, '..' , 'html');

router.post('/', projectController.addProject);

router.put('/', projectController.updateProject);

router.delete('/login/project', projectController.deleteProject);


router.get('', function(req, res) {
    res.sendFile(path.join(dirname, 'project.html'));
});

module.exports = router;