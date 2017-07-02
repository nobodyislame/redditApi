var db = require('./../models/index.js');

var userController = {};

userController.post = function(req, res){
	
	var username = req.body.username;
	var password = req.body.password;

	var user = new db.User({
		username : username,
		password : password
	});

	user.save()
		.then(function(newUser){
			res.status(200).json({
				success : true,
				data : newUser
			});
		})
		.catch(function(err){
			res.status(500).json({
				message : err
			});
		})
}
module.exports = userController;