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
    Project.one({ name: req.body.name}, function(err, result2) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            result2.remove((err) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else res.status(200).json();
            });
        }
    });
};

exports.getProject = function(req, res) {
    Project.find({}, function(err, result){
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            let arr = [];
            for (let i=0; i<result.length; i++) {
                arr.push({name: result[i].name});
            }
            console.log(JSON.stringify({arr}));
            res.json(JSON.stringify({arr}));
        }
    })
};

exports.getProjectAllMy = function(req, res) {
    let login = req.get('login'), password = req.get('password');
    User.one({ login: login, password: password}, function(err, result2) {
        Uip.find({ iduser: result2.iduser }, function(err, result3){
            let arr = [];
            for (let i=0; i<result3.length; i++) {
                arr.push(result3[i].idproject);
            }
            Project.find({idproject: arr}, function(err, result){
                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    let arr = [];
                    for (let i=0; i<result.length; i++) {
                        arr.push({name: result[i].name});
                    }
                    console.log(JSON.stringify({arr}));
                    res.json(JSON.stringify({arr}));
                }
            });
        });
    });

};

exports.getProjectAllUsers = function(req, res) {
    let login = req.get('login'), password = req.get('password');
    User.one({ login: login, password: password}, function(err, result2) {
        Uip.find({ iduser: result2.iduser }, function(err, result3){
            let arr = [];
            for (let i=0; i<result3.length; i++) {
                arr.push(result3[i].idproject);
            }
            Project.find({idproject: arr}, function(err, result){
                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    let arr = [];
                    for (let i=0; i<result.length; i++) {
                        arr.push({name: result[i].name});
                    }
                    console.log(JSON.stringify({arr}));
                    res.json(JSON.stringify({arr}));
                }
            });
        });
    });

};