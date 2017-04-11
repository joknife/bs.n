var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');

var app = express();
var port = config.get('port');

var loginPage = {
	title: 'Морской бой',
	header: 'МОРСКОЙ БОЙ',
	copyright: '&copy Jo Knife',
};

app.set('x-powered-by', false);
app.set('views', './pug');
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('login', loginPage);
});

app.post('/login', function(req, res) {
	res.end('you logged in as: '+ req.body.username +'\n password is: '+ req.body.password);
	
});

app.listen(port, function() {
	console.log('Server listen at port ' + port);
});
