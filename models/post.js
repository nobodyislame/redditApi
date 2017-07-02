var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var postSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	link : String,
	text : String,
	isDelated : {
		type : Boolean,
		default : false
	},
	createdAt :{
		type : Date,
		default : Date.now
	},
	_creator :{
		type : mongoose.Schema.ObjectId,
		ref : 'User'
	},
	_comments:[{
		type : mongoose.Schema.ObjectId,
		ref : 'Comment'
	}]
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;