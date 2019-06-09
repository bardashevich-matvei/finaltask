const Project = require('../models/project').modelProject;
const User = require('../models/user').modelUser;
const Uip = require('../models/uip').modelUip;

exports.addProject = function(req, res) {
    Project.create({ name: req.body.name, begin: new Date().toISOString().slice(0, 10), end: ''}, function(err, result){ 
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            if (err) {
                console.log(err);
                res.json(err);
            } else
            User.one({login: req.body.login, password: req.body.password}, function (err, result2) {
                Uip.create({ iduser: result2.iduser, idproject: result.idproject}, function(err) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else res.status(200).json();
                });
            })
        }
    });
};

exports.updateProject = function(req, res) {

};

exports.deleteProject = function(req, res) {

};

exports.getProject = function(req, res) {

};