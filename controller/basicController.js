var basicController = {};

basicController.get = function(req, res){
	res.json({
		message : 'Hey there, this is my api'
	});
}

module.exports = basicController;