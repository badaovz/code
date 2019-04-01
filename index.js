var express = require('express');
var app     = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index', {
		name:'AAA'
	});
});

app.get('/users',function(req, res){
	res.send('users/index', {
		users: [
			{id: 1,name: 'dao'},
			{id: 2,name: 'hai'},
			{id: 3,name: 'hoa'}
		]
	});
});

app.listen(port, function(){
	console.log('server listening on port' + port);
});