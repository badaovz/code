var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./route/user.route');

var port = 3000;

var app     = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));	

app.use('/users',userRoute);

app.get('/', function(req, res){
	res.render('index', {
		name:'AAA'
	});
});



app.listen(port, function(){
	console.log('server listening on port' + port);
});