var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users')
// var clientsController = require('../controllers/clients')
var apptsController = require('../controllers/appts')
var token = require('../config/token_auth');

//users
router.route('/api/users')
  .get(usersController.index)
  .post(usersController.create)

router.route('/api/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.destroy)

router.route('/api/users/me')
  .get(token.authenticate, usersController.me);

router.route('/api/token')
  .post(token.create);

//clients
// router.route('/api/clients')
//   .get(clientsController.index)
//   .post(clientsController.create)

// router.route('/api/clients/:id')
//   .get(clientsController.show)
//   .put(clientsController.update)
//   .delete(clientsController.destroy)

// //appointments
router.route('/api/appts')
  .get(apptsController.index)
  .post(apptsController.create)

// router.route('/api/appts/:id')
//   .get(apptsController.show)
//   .put(apptsController.update)
//   .delete(apptsController.destroy)

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersController.create);
router.get( '/users/me', token.authenticate, usersController.me);

router.post('/token',    token.create);


//GET homepage
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

module.exports = router;
