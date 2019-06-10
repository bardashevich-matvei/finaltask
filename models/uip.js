const orm = require('orm').connect('mysql://root:root@localhost/todolist');
exports.modelUip =  orm.define('usersinprojects', {
    iduip: {type: 'serial', key: true},
    iduser: Number,
    idproject: Number
});