const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.post('/', function(req, res) {
    res.render('main');
});

router.get('/registration', function(req, res) {
    res.render('registration');
})

router.post('/registration', userController.addUser);

router.get('/login', function (req, res) {
    res.render('login');
});


router.get('/logout', function (req, res) {
    res.render('main');
});

module.exports = router;