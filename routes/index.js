// Lesson 1
//const routes = require('express').Router();

//const myController = require('../controllers');

//routes.get('/', myController.awesomeFunction);
//routes.get('/awesome', myController.returnAnotherPerson);

//module.exports = routes;

// Lesson 2
const routes = require('express').Router();
const userController = require('../controllers/user');

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);

module.exports = routes;