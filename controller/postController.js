var db = require('./../models/index.js');

var postController = {};

postController.post = function(req, res){
	 var title = req.body.title,
		 link = req.body.link,
		 text = req.body.text,
		 userId = req.body.userId;

	var newPost = db.Post({
		title : title,
		link : link,
		text : text,
		_creator : userId
	});

	newPost.save()
	.then(function(newPost){
		return res.status(200).json({
			success : true,
			data : newPost
		});
	})
	.catch(function(err){
		return res.status(500).json({
			message : err
		});
	});
}

postController.getAll = function(req, res){
	db.Post.find()
	.populate({
		path:'_creator',
		select : 'username createdAt -_id'
	})
	.populate({
		path : '_comments',
		select : 'text createdAt _creator',
		match : {isDelated : false}
	})
	.then(function(posts){
		return res.status(200).json({
			success:true,
			data : posts
		});
	})
	.catch(function(err){
		return res.status(500).json({
			message:err.toString()
		});
	});
}

module.exports = postController;