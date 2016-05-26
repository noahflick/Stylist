var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var apptSchema = new mongoose.Schema({
  client: { type: String, required: true, ref: 'User'},
  stylist: {type: String, required: true, ref: 'User'},
  length: Number,
  time: Date,
  services: [{type: String, ref: 'Service'}]
})

// add bcrypt hashing to model (works on a password field)!
// apptSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
apptSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var Appt = mongoose.model('Appt', apptSchema);

module.exports = Appt;
