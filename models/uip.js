const orm = require('orm').connect('mysql://root:root@localhost/todolist');
exports.modelUip =  orm.define('usersinprojects', {
    iduser: Number,
    idproject: Number
});