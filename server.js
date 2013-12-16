var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    pg      = require('pg'),
    db      = require('./db'),
    User    = require('./models/user');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon())
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.static(path.join(__dirname, 'public/app')))

app.get('/users', function(req, res) {
	User.all().success(function(users) {
    res.send(users);
	});
})

app.listen(3000);
console.log('Listening on port 3000');

