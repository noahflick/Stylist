var Stylist = require('../models/stylist')

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Stylist.find({}, function(err, stylists) {
    if (err) next(err);
    res.json(stylists);
  });
}

function show(req, res, next){
  var id = req.params.id

  Stylist.findById(id, function(err, stylist){
    if(err)next(err)
      res.json(stylist)
  })
}

function create(req, res, next){
  var newStylist = new Stylist(req.body)
  newStylist.save(function(err, savedStylist){
    if(err) next(err)
    res.json(savedStylist)
  })
}

function update(req, res, next){
  var id = req.params.id;

  Stylist.findById(id, function(err, stylist){
    if(err) next(err)

      stylist.email = req.body.email;
      stylist.username = req.body.username
      stylist.services = req.body.services
      stylist.appts = req.body.appts

      stylist.save(function(err, updatedStylist){
        if(err)next(err)
          res.json(updatedShow)
      })
  })
}

function destroy(req, res, next) {
  var id = req.params.id;
  Stylist.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'User successfully deleted'});
  });
}
