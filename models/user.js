var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

// var serviceSchema = new mongoose.Schema({
//   name: String,
//   price: Number
// })

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username:  { type: String, required: true },
  password: { type: String, required: true, bcrypt: true },
  role: { type: String, required: true},
  appts: [{type: String, ref: 'Appt'}],
  clients: [{type: String, ref: 'User'}],
  stylists: [{type: String, ref: 'User'}],
  services: [{type: String, ref: 'Service'}]
});

// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
userSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
