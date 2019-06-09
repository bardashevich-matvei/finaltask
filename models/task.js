const orm = require('orm').connect('mysql://root:root@localhost/todolist');
const modelTask =  orm.define('task', {
    idtask: {type: 'serial', key: true},
    name: String,
    priority: Number,
    begin: String,
    end: String,
    idproject: Number
});