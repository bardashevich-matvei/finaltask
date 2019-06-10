const Comment = require('../models/comment').modelComment;
const Project = require('../models/project').modelProject;
const User = require('../models/user').modelUser;
const Uip = require('../models/uip').modelUip;
const Task = require('../models/task').modelTask;

exports.addComment = function(req, res) {
    Task.one({ name: req.body.task }, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        User.one({ login: req.body.login }, function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else
            Comment.create({ description: req.body.text, idtask: result.idtask, iduser: result2.iduser}, function(err, result3) {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    result3.save(() => {
                        if (err) {
                            console.log(err);
                            res.json(err);
                        } else res.status(200).json();
                    })
                }
            });
        });
    });
};

exports.updateComment = function(req, res) {

};

exports.deleteComment = function(req, res) {

};

exports.getComments = function(req, res) {
    Task.one({ name: req.get('task') }, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else 
        Comment.find({ idtask: result.idtask}, function(err, result2) {
            if (err) {
                console.log(err);
                res.json(err);
            } else 
            {
                let arr = [];
                for (let i=0; i<result2.length; i++) arr.push(result2[i].iduser);
                User.find({ iduser: arr}, function(err, result3) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else {
                        
                        for (let i=0; i<result2.length; i++) {
                            for (let j=0; j<result3.length; j++) {
                                if (result2[i].iduser === result3[j].iduser) result2[i].iduser = result3[j].login;
                                
                            }
                        }
                        res.json(JSON.stringify({result2}));
                    }
                });
            }
        });
    });
};