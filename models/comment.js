const orm = require('orm').connect('mysql://root:root@localhost/todolist');
const modelComment =  orm.define('comment', {
    idcomment: {type: 'serial', key: true},
    description: String,
    iduser: Number,
    idtask: Number
});

