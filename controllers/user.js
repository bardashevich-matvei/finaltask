const User = require('../models/user').modelUser;
const path = require("path");
const dirname = path.join(__dirname, '..' , 'html');

exports.addUser = function(req, res) {
    User.create({ name: req.body.name, surname: req.body.surname, email: req.body.email, login:  req.body.login, password: req.body.password}, function(err, result){ 
        if (err) {
            console.log(err);
            res.json(err);
        } else res.sendFile(path.join(dirname, 'login.html'));
    });
};

exports.updateUser = function(req, res) {

};

exports.deleteUser = function(req, res) {

};

exports.getUser = function(req, res) {

};

exports.aush = function(req, res) {
    let login = req.body.login; 
    let password = req.body.password;
    User.find({ login: login, password: password}, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        } else {
            console.log(result.length);
            if (result.length > 0) res.sendFile(path.join(dirname, 'project.html'));
            else res.status(201).json("error");  
        }
    })
};