var Appt = require('../models/appt')

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
}

function index(req, res, next) {
  Appt.find({}, function(err, appts) {
    if (err) next(err);
    res.json(appts);
    console.log(appts)
  });
}

function show(req, res, next){
  var id = req.params.id

  Appt.findById(id, function(err, appt){
    if(err)next(err)
      res.json(appt)
  })
}

function create(req, res, next) {
  Appt
    .create(req.body)
    .then(function(appt) {
      res.json({
        success: true,
        message: 'Successfully created appt.',
        data: {
          id:    appt._id,
          length: appt.length,
          time: appt.time,
          services: appt.services,
          stylist: appt.stylist,
          client: appt.client

        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function update(req, res, next){
  var id = req.params.id;

  Appt.findById(id, function(err, appt){
    if(err) next(err)

      id =    req.body._id
      length = req.body.length
      time = req.body.time
      services = req.body.services
      // stylist = req.body.stylist
      client = req.body.client

      appt.save(function(err, updatedAppt){
        if(err)next(err)
          res.json(updatedShow)
      })
  })
}

function me(req, res, next) {
  Appt
    .findOne({email: req.decoded.email}).exec()
    .then(function(appt) {
      res.json({
        success: true,
        message: 'Successfully retrieved appt data.',
        data: appt
      });
    })
    .catch(function(err) {
      next(err);
    });
};


function destroy(req, res, next) {
  var id = req.params.id;
  Appt.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Appt successfully deleted'});
  });
}
