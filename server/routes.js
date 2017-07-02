var express = require('express');

var routes = express();

/*Controllers*/
var basicController = require('../controller/basicController.js');
var userController = require('../controller/userController.js');
var postController = require('../controller/postController.js');
var commentController = require('./../controller/commentController');
/*Basic Routes*/
routes.get('/', basicController.get);


/*User Routes*/
routes.post('/signup', userController.post);

/**Post Routes*/
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

//Comment Routes
routes.post('/comment', commentController.post);
module.exports = routes;