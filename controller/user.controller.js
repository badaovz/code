var db = require('../db');
var shortid = require('shortid');


module.exports.index = function(req, res){
	res.render('users/index', {
		users: db.get('users').value()
	});
};


module.exports.search = function(req, res){
	var q = req.query.q;
	var usersearched = db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index', {
		users: usersearched
	});
};

module.exports.createuser = function(req, res){
	res.render('users/createuser')
};

module.exports.getforid = function(req, res){
	var id = req.params.id;
	var user = db.get('users').find({id: id}).value();

	res.render('users/view',{
		user: user
	});
};

module.exports.postcreateuser = function(req, res){
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
};
