var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		minLength:[8, 'Username should have charaters less than 9']
	},
	password:{
		type:String,
		required:true,
		minLength:[8, 'Password should have charaters less than 9']
	},
	createdAt :{
		type : Date,
		default : Date.now
	},
	isDelated : {
		type : Boolean,
		default : false
	}
});

var User = mongoose.model("User", userSchema);

module.exports = User;