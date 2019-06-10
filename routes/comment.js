const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');
const path = require("path");
const dirname = path.join(__dirname, '..' , 'html');

router.post('/comment', commentController.addComment);

router.put('/login/project/task', commentController.updateComment);

router.delete('/login/project/task', commentController.deleteComment);

router.get('/all',  commentController.getComments);

router.get('/', function(req, res) {
    res.sendFile(path.join(dirname, 'comment.html'));
});


module.exports = router;