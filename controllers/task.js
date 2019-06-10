const Task = require('../models/task').modelTask;
const Project = require('../models/project').modelProject;
const User = require('../models/user').modelUser;
const Uip = require('../models/uip').modelUip;

exports.addTask = function(req, res) {
    Project.one({ name: req.body.project}, function(err, result){
        console.log(req.get('project'));
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        Task.create({ name: req.body.name, priority: 0, begin: new Date().toISOString().slice(0, 10), end: '', idproject: result.idproject}, function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else res.status(200).json();
        })
    })
};

exports.updateTask = function(req, res) {

};

exports.deleteTask = function(req, res) {
    Task.one({ name: req.body.name }, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            result.end = new Date().toISOString().slice(0, 10);
            result.save((err) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else res.status(200).json();
            })
        }
    })
};

exports.deleteUser = function(req, res) {
    Project.one({ name: req.body.project }, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        User.one({ login: req.body.login } , function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                Uip.find({ iduser: result2.iduser, idproject: result.idproject}).remove(function(err) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else res.status(200).json();
                });
            }
        });
    });
};

exports.getTaskAllUsers = function(req, res) {
    let login = req.get('login'), password = req.get('login');
    User.find({}, function(err, result3) {
        if (err) {
            console.log(err);
            res.json(err);
        } else { 
            let arr = [];
            for (let i=0; i<result3.length; i++) {
                if (result3[i].login !== login && result3[i].password !== password) arr.push(result3[i]);
            }
            res.json(JSON.stringify({arr}));
        }
    });
};

exports.getTaskAllProjectUsers = function(req, res) {
    let login = req.get('login'), password = req.get('login'), project = req.get('project');
    Project.one({ name: project }, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        Uip.find({idproject: result.idproject } , function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                let arr = [];
                for (let i=0; i<result2.length; i++) {
                    arr.push(result2[i].iduser);
                }
                User.find({ iduser: arr}, function(err, result3) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else { 
                        let arr = [];
                        for (let i=0; i<result3.length; i++) {
                            if (result3[i].login !== login && result3[i].password !== password) arr.push(result3[i]);
                        }
                        res.json(JSON.stringify({arr}));
                    }
                });
            }
        });
    });
};

exports.getTaskAllTasks = function(req, res) {
    let login = req.get('login'), password = req.get('login'), project = req.get('project');
    Project.one({ name: project}, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else
        Task.find({ idproject: result.idproject}, function(err, result3) {
            if (err) {
                console.log(err);
                res.json(err);
            } else { 
                res.json(JSON.stringify({result3}));
            }
        });
    });
};

exports.addUser = function(req, res) {
    User.one({login: req.body.login}, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        if (result !== undefined) 
        Project.one({ name: req.body.project }, function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else 
            Uip.create({ iduser: result.iduser, idproject: result2.idproject}, function(err) {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else res.status(200).json();
            });
        })
    });
};
