module.exports.postCreate = function(req, res, next){

	var errors = [];
	if(!req.body.name){
		errors.push("Name not empty!")
	}
	if(!req.body.phone){
		errors.push("Phone not empty!")
	}
	if (errors.length) {
		res.render('users/createuser', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
}