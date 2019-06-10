const express = require('express');
const router = express.Router();
const path = require("path");
const userController = require('../controllers/user.js');
const dirname = path.join(__dirname, '..' , 'html');

router.get('', function(req, res) {
    res.sendFile(path.join(dirname, 'main.html'));
});

router.get('/registration', function(req, res) {
    res.sendFile(path.join(dirname, 'registration.html'));
})


router.post('/registration', userController.addUser);

router.get('/login', function (req, res) {
    res.sendFile(path.join(dirname, 'login.html'));
});

router.post('/login', userController.aush);


router.get('/logout', function (req, res) {
    res.sendFile(path.join(dirname, 'main.html'));
});

module.exports = router;