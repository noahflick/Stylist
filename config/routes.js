var express = require('express');
var router = express.Router();

var stylistsController = require('../controllers/stylists')

router.route('/api/stylists')
  .post(stylistsController.create)

router.route('/api/stylists/:id')
  .get(stylistsController.show)
  .put(stylistsController.update)
  .delete(stylistsController.destroy)


//GET homepage
router.get('*', function(req, res, next) {
  res.sendFile('index.html');
});

module.exports = router;
