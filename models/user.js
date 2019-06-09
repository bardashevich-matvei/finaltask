const orm = require('orm').connect('mysql://root:root@localhost/todolist');
const modelUser = orm.define('user', {
    iduser: {type: 'serial', key: true},
    name: String,
    surname: String,
    email: String,
    login: String,
    password: String
});


