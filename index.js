const express = require('express');
const redis = require("redis");
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const redisStore = require('connect-redis')(session);
//const client  = redis.createClient();


const project = require('./routes/project');
const task = require('./routes/task');
const user = require('./routes/user');
const comments = require('./routes/comment');


const app = express();

function requireHTTPS(req, res, next) {
    if (!req.secure) return res.redirect('https://' + req.get('host') + req.url);
    next();
}

//app.use(requireHTTPS);
app.use(express.static(path.join(__dirname, 'html')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(express.json());
app.use(session( {
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use('/user', user);
app.use('/project', project);
app.use('/project/task', task);
app.use('/project/task/comment', comments);



app.all('/', function(req, res) {
    req.session.user = 1
    res.json(req.session.user);
})

app.all('/3000', function(req, res) {
    delete req.session.user;
    res.json(req.session.user);
})



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
