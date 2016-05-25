var User = require('../models/user')

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
  me: me
}

function index(req, res, next) {
  User.find({}, function(err, users) {
    if (err) next(err);
    res.json(users);
  });
}

function show(req, res, next){
  var id = req.params.id

  User.findById(id, function(err, user){
    if(err)next(err)
      res.json(user)
  })
}

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  User
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          username: user.username,
          password: user.password,
          id:    user._id
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

  User.findById(id, function(err, user){
    if(err) next(err)

      user.email = req.body.email;
      user.username = req.body.username
      user.services = req.body.services
      user.appts = req.body.appts

      user.save(function(err, updatedUser){
        if(err)next(err)
          res.json(updatedShow)
      })
  })
}

function me(req, res, next) {
  User
    .findOne({email: req.decoded.email}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};


function destroy(req, res, next) {
  var id = req.params.id;
  User.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'User successfully deleted'});
  });
}
