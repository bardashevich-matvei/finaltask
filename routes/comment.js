const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.post('/login/project/task', commentController.addComment);

router.put('/login/project/task', commentController.updateComment);

router.delete('/login/project/task', commentController.deleteComment);

router.get('/login/project/task', commentController.getComment);


module.exports = router;