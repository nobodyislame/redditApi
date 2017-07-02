var db = require('./../models/index.js');

var commentController = {};

commentController.post = function(req, res){
	var text = req.body.text,
		userId = req.body.userId,
		postId = req.body.postId;

	var newComment = new db.Comment({
		text : text,
		_creator : userId,
		_post : postId
	});

	newComment.save()
	.then(function(comment){
		db.Post.findByIdAndUpdate(postId,{
			$push : {_comments : comment._id}
		})
		.then(function(post){
			res.status(200).json({
				success : true,
				data : comment,
				post : post
			});
		})
		.catch(function(err){
			res.status(500).json({
				message : err
			});
		});
	})
	.catch(function(err){
		res.status(500).json({
			message : err
		});
	});
}

module.exports = commentController;