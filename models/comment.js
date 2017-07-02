var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var commentSchema = mongoose.Schema({

	text:{
		type:String,
		required : true
	},
	isDelated : {
		type : Boolean,
		default : false
	},
	createdAt :{
		type : Date,
		default : Date.now
	},
	_creator:{
		type:mongoose.Schema.ObjectId,
		ref:'User'
	},
	_post:{
		type:mongoose.Schema.ObjectId,
		ref:'Post'
	}
});

var autoPopulateCreator = function(next){
	this.populate({
		path : '_creator',
		select : 'username createdAt -_id'
	});

	next();
}

commentSchema.pre('find', autoPopulateCreator);

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;