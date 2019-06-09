const orm = require('orm').connect('mysql://root:root@localhost/todolist');
exports.modelComment =  orm.define('comment', {
    idcomment: {type: 'serial', key: true},
    description: String,
    iduser: Number,
    idtask: Number
});

